import { Matrix4 } from '../math/matrixes';
import { Shader } from '../shader';
import { Texture } from '../texture';

export class SkyboxShader extends Shader {
  private vertexShaderSource? = `
  attribute vec4 a_position;
  varying vec4 v_position;
  void main() {
      v_position = a_position;
      v_position.z = .9999999;
      gl_Position = v_position;
  }
  `

  private fragmentShaderSource? = `
  precision mediump float;

  uniform samplerCube u_texture;
  uniform mat4 u_matrix;
    
  varying vec4 v_position;
  void main() {
    vec4 t = u_matrix * v_position;
    gl_FragColor = textureCube(u_texture, normalize(t.xyz / t.w));
  }
  `

  private _vertices = [ -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1 ]
  private verticesBuffer: WebGLBuffer

  get vertices() { return this._vertices }
  set vertices(vertices: number[]) {
    this._vertices = vertices
    this.verticesBuffer = this.createVerticesBuffer(vertices)
  }

  constructor(ctx: WebGL2RenderingContext) {
    super(ctx)
    this.shaderProgram = this.create()
    this.verticesBuffer = this.createVerticesBuffer(this.vertices)
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

  render(matrix: number[], texture: Texture) {
    this.webgl.useProgram(this.shaderProgram)

    this.webgl.enableVertexAttribArray(this.attributes.a_position)
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.verticesBuffer)
    this.webgl.vertexAttribPointer(this.attributes.a_position, 2, this.webgl.FLOAT, false, 0, 0)

    this.webgl.uniform1i(this.uniforms.u_texture, texture.textureIndex)
    this.webgl.uniformMatrix4fv(this.uniforms.u_matrix, false, Matrix4.inverse(matrix))

    this.webgl.drawArrays(this.webgl.TRIANGLES, 0, this.vertices.length / 2)
  }

  private createVerticesBuffer (vertices: number[]) {
    const buffer = this.webgl.createBuffer()!
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, buffer)
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(vertices), this.webgl.STATIC_DRAW);
    return buffer
  }
}
