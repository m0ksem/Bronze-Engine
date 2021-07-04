import { Shader } from '../shader';
import { Texture } from '../texture';
import { createBuffer } from '../utils/webgl2';

export class DirectionalLightShader extends Shader {
  private vertexShaderSource? = `
attribute vec4 a_position;

varying vec2 v_texture_coordinate;

void main() {
  v_texture_coordinate = vec2(a_position);
  if (v_texture_coordinate.x == -1.0) {
    v_texture_coordinate.x = 0.0;
  }
  if (v_texture_coordinate.y == -1.0) {
    v_texture_coordinate.y = 0.0;
  }
  gl_Position = a_position;
}
`

  private fragmentShaderSource? = `
precision mediump float;

varying vec2 v_texture_coordinate;

uniform sampler2D u_normalTexture;
uniform sampler2D u_defuseTexture;
uniform vec3 u_lightDirection;
uniform float u_lightMinValue;

float computeLight(vec3 direction, float range, vec3 normal, float lightMinValue) {
  float light = dot(normal, normalize(direction));
  float k = (range - length(direction)) / range;
  if (k < 0.0) k = 0.0;
  light = light * k;
  if (light < lightMinValue) {
      return lightMinValue;
  }
  return light;
}

void main() {
  vec3 normal = vec3(texture2D(u_normalTexture, v_texture_coordinate));

  float light = computeLight(u_lightDirection, 999999.0, normal, u_lightMinValue);

  gl_FragColor = texture2D(u_defuseTexture, v_texture_coordinate);
  gl_FragColor.rgb *= light;
}
`

  private vertices = [    
    -1.0,  -1.0,
    1.0,  -1.0,
    -1.0,  1.0,
    -1.0,  1.0,
    1.0,  -1.0,
    1.0,  1.0,
  ]
  private verticesBuffer

  constructor(webgl: WebGL2RenderingContext) {
    super(webgl)
    this.shaderProgram = this.create()

    this.verticesBuffer = createBuffer(webgl, this.vertices)
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

  render(defuseTexture: Texture, normalTexture: Texture, lightDirection: number[], lightMinValue = 0.1) {
    this.webgl.useProgram(this.shaderProgram)

    this.webgl.enableVertexAttribArray(this.attributes.a_position)
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.verticesBuffer)
    this.webgl.vertexAttribPointer(this.attributes.a_position, 2, this.webgl.FLOAT, false, 0, 0)

    this.webgl.uniform1i(this.uniforms.u_normalTexture, normalTexture.textureIndex)
    this.webgl.uniform1i(this.uniforms.u_defuseTexture, defuseTexture.textureIndex)
    this.webgl.uniform3fv(this.uniforms.u_lightDirection, lightDirection)
    this.webgl.uniform1f(this.uniforms.u_lightMinValue, lightMinValue)
    
    this.webgl.drawArrays(this.webgl.TRIANGLES, 0, this.vertices.length / 2)
  }
}
