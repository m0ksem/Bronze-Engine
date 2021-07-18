import { Shader } from '../shader';

export class ZDepthShader extends Shader {
  private vertexShaderSource? = `
attribute vec4 a_position;

uniform mat4 u_matrix;
varying float v_zDepth;

void main() {
  vec4 position = u_matrix * a_position;
  gl_Position = position;
  v_zDepth = position.z / 10.0;
}
`

  private fragmentShaderSource? = `
precision mediump float;

varying float v_zDepth;

void main() {
  gl_FragColor = vec4(v_zDepth, v_zDepth, v_zDepth, 1.0);
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

  render(matrix: number[], vertices: WebGLBuffer, verticesCount: number) {
    this.webgl.useProgram(this.shaderProgram)

    this.webgl.enableVertexAttribArray(this.attributes.a_position)
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, vertices)
    this.webgl.vertexAttribPointer(this.attributes.a_position, 3, this.webgl.FLOAT, false, 0, 0)

    this.webgl.uniformMatrix4fv(this.uniforms.u_matrix, false, matrix)

    this.webgl.drawArrays(this.webgl.TRIANGLES, 0, verticesCount / 3)
  }
}
