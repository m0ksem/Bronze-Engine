precision mediump float;
  
uniform samplerCube u_texture;
uniform mat4 u_matrix;
  
varying vec4 v_position;
void main() {
  vec4 t = u_matrix * v_position;
  gl_FragColor = textureCube(u_texture, normalize(t.xyz / t.w));
}