import { Shader } from '../shader';

export class ColorShader extends Shader {
  private vertexShaderSource? = `
attribute vec4 a_position;

uniform mat4 u_matrix;

void main() {
  gl_Position = u_matrix * a_position;
}
`

  private fragmentShaderSource? = `
precision mediump float;

uniform vec4 u_color;

void main() {
  gl_FragColor = u_color;
}
`

  constructor(ctx: WebGL2RenderingContext) {
    super(ctx)
    this.shaderProgram = this.create()
  }

  create() {
    const vertexShader = this.createShader(this.webgl.VERTEX_SHADER, this.vertexShaderSource!)
    const fragmentShader = this.createShader(this.webgl.FRAGMENT_SHADER, this.fragmentShaderSource!)

    const program = this.createProgram(vertexShader, fragmentShader)

    this.parseVertexShaderSource(this.vertexShaderSource!, program)
    this.parseFragmentShaderSource(this.fragmentShaderSource!, program)

    delete this.vertexShaderSource
    delete this.fragmentShaderSource

    return program
  }

  render(matrix: number[], vertices: WebGLBuffer, color: number[], verticesCount: number) {
    if (color.length === 3) {
      color = [...color, 1]
    } else if (color.length === 1) {
      color = [color[0], color[0], color[0], 1]
    }
    
    this.webgl.useProgram(this.shaderProgram)

    this.webgl.enableVertexAttribArray(this.attributes.a_position)
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, vertices)
    this.webgl.vertexAttribPointer(this.attributes.a_position, 3, this.webgl.FLOAT, false, 0, 0)

    this.webgl.uniformMatrix4fv(this.uniforms.u_matrix, false, matrix)
    this.webgl.uniform4fv(this.uniforms.u_color, color)

    this.webgl.drawArrays(this.webgl.TRIANGLES, 0, verticesCount / 3)
  }
}
