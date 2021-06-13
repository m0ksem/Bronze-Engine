import { Shader } from '../shader';
import { Texture } from '../texture';

export class DefuseShader extends Shader {
  private vertexShaderSource? = `
attribute vec4 a_position;

uniform mat4 u_matrix;
attribute vec2 a_texture_coordinate;
varying vec2 v_texture_coordinate;

void main() {
  v_texture_coordinate = a_texture_coordinate;
  gl_Position = u_matrix * a_position;
}
`

  private fragmentShaderSource? = `
precision mediump float;

varying vec2 v_texture_coordinate;

uniform sampler2D u_texture;

void main() {
  gl_FragColor = texture2D(u_texture, v_texture_coordinate);
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

  render(matrix: number[], vertices: WebGLBuffer, textureCoordinate: WebGLBuffer, defuseTexture: Texture, verticesCount: number) {
    this.webgl.useProgram(this.shaderProgram)

    this.webgl.enableVertexAttribArray(this.attributes.a_position)
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, vertices)
    this.webgl.vertexAttribPointer(this.attributes.a_position, 3, this.webgl.FLOAT, false, 0, 0)

    this.webgl.enableVertexAttribArray(this.attributes.a_texture_coordinate)
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, textureCoordinate)
    this.webgl.vertexAttribPointer(this.attributes.a_texture_coordinate, 2, this.webgl.FLOAT, false, 0, 0)

    this.webgl.uniform1i(this.uniforms.u_texture, defuseTexture.textureIndex)
    this.webgl.uniformMatrix4fv(this.uniforms.u_matrix, false, matrix)

    this.webgl.drawArrays(this.webgl.TRIANGLES, 0, verticesCount / 3)
  }
}
