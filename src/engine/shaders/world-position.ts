import { Shader } from '../shader';

export class WorldPositionShader extends Shader {
  private vertexShaderSource? = `
attribute vec4 a_position;

uniform mat4 u_matrix;
varying vec3 v_surfaceWorldPosition;
uniform mat4 u_worldMatrix;

void main() {
  gl_Position = u_matrix * a_position;
  v_surfaceWorldPosition = (u_worldMatrix  * a_position).xyz;
}
`

  private fragmentShaderSource? = `
precision mediump float;

varying vec3 v_surfaceWorldPosition;

void main() {
  gl_FragColor = vec4(v_surfaceWorldPosition, 1.0);
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

  render(matrix: number[], worldMatrix: number[], vertices: WebGLBuffer, verticesCount: number) {
    this.webgl.useProgram(this.shaderProgram)

    this.webgl.enableVertexAttribArray(this.attributes.a_position)
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, vertices)
    this.webgl.vertexAttribPointer(this.attributes.a_position, 3, this.webgl.FLOAT, false, 0, 0)

    this.webgl.uniformMatrix4fv(this.uniforms.u_matrix, false, matrix)
    this.webgl.uniformMatrix4fv(this.uniforms.u_worldMatrix, false, worldMatrix)

    this.webgl.drawArrays(this.webgl.TRIANGLES, 0, verticesCount / 3)
  }
}
