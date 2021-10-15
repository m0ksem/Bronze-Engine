import { PerspectiveCamera } from '..';
import { Shader } from '../shader';
import { Texture } from '../texture';
import { createBuffer } from '../utils/webgl2';

export class PointLightShader extends Shader {
  private vertexShaderSource? = `
attribute vec4 a_position;

varying vec2 v_texture_coordinate;
varying vec3 fragmentPosition;

void main() {
  v_texture_coordinate = vec2(a_position);
  if (v_texture_coordinate.x == -1.0) {
    v_texture_coordinate.x = 0.0;
  }
  if (v_texture_coordinate.y == -1.0) {
    v_texture_coordinate.y = 0.0;
  }
  fragmentPosition = a_position.xyz;
  gl_Position = a_position;
}
`

  private fragmentShaderSource? = `
precision mediump float;

varying vec2 v_texture_coordinate;
varying vec3 fragmentPosition;

uniform sampler2D u_normalTexture;
uniform sampler2D u_defuseTexture;
uniform sampler2D u_specularTexture;
uniform sampler2D u_ambientTexture;
uniform sampler2D u_worldPositionTexture;
uniform sampler2D u_shininessTexture;

uniform vec3 u_cameraPosition;
uniform vec3 u_lightPosition;
uniform vec3 u_lightColor;

uniform float u_lightMinValue;
uniform float u_lightRange;

float computeLight(vec3 direction, float range, vec3 normal, float lightMinValue) {
  float light = dot(normal, normalize(direction));
  float k = (range - length(direction)) / range;
  if (k < 0.0) k = 0.0;
  light = light * k;

  return max(light, lightMinValue);
}

void main() {
  vec3 lightColor = u_lightColor / 255.0;
  vec3 normal = vec3(texture2D(u_normalTexture, v_texture_coordinate));
  vec3 worldPosition = vec3(texture2D(u_worldPositionTexture, v_texture_coordinate));
  vec3 ambientColor = vec3(texture2D(u_ambientTexture, v_texture_coordinate));
  vec3 objectColor = vec3(texture2D(u_defuseTexture, v_texture_coordinate));
  vec4 specularColor = texture2D(u_specularTexture, v_texture_coordinate);
  float shininess = texture2D(u_shininessTexture, v_texture_coordinate).x;

  vec3 lightDirection = normalize(u_lightPosition - worldPosition);
  vec3 viewDirection = normalize(u_cameraPosition - worldPosition);
  vec3 reflectDirection = reflect(-lightDirection, normal);

  vec3 ambient = ambientColor * lightColor;
  
  float diffuseImpact = max(dot(normal, lightDirection), 0.0);
  float temp = computeLight(lightDirection, u_lightRange, normal, u_lightMinValue);
  vec3 diffuse = temp * lightColor;

  float spec = pow(max(dot(viewDirection, reflectDirection), 0.0), shininess);
  vec3 specular = spec * lightColor; 

  gl_FragColor = vec4((specular + diffuse + ambientColor * 0.1) * objectColor, 1.0);
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

  render(
    camera: PerspectiveCamera,
    defuseTexture: Texture,
    normalTexture: Texture, 
    specularColorTexture: Texture,
    shininessTexture: Texture, 
    ambientTexture: Texture,
    worldPositionTexture: Texture, 
    lightPosition: number[],
    lightColor: number[] = [255, 255, 255],
    lightMinValue = 0.1, 
    lightRange = 999999,
  ) {
    this.webgl.useProgram(this.shaderProgram)

    this.webgl.enableVertexAttribArray(this.attributes.a_position)
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.verticesBuffer)
    this.webgl.vertexAttribPointer(this.attributes.a_position, 2, this.webgl.FLOAT, false, 0, 0)

    this.webgl.uniform1i(this.uniforms.u_normalTexture, normalTexture.textureIndex)
    this.webgl.uniform1i(this.uniforms.u_defuseTexture, defuseTexture.textureIndex)
    this.webgl.uniform1i(this.uniforms.u_specularColorTexture, specularColorTexture.textureIndex)
    this.webgl.uniform1i(this.uniforms.u_shininessTexture, shininessTexture.textureIndex)
    this.webgl.uniform1i(this.uniforms.u_ambientTexture, ambientTexture.textureIndex)
    this.webgl.uniform1i(this.uniforms.u_worldPositionTexture, worldPositionTexture.textureIndex)

    this.webgl.uniform3fv(this.uniforms.u_cameraPosition, camera._position)
    this.webgl.uniform3fv(this.uniforms.u_lightPosition, lightPosition)
    this.webgl.uniform3fv(this.uniforms.u_lightColor, lightColor)
    this.webgl.uniform1f(this.uniforms.u_lightMinValue, lightMinValue)
    this.webgl.uniform1f(this.uniforms.u_lightRange, lightRange)
    
    this.webgl.drawArrays(this.webgl.TRIANGLES, 0, this.vertices.length / 2)
  }
}
