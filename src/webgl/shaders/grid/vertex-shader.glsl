attribute vec4 a_position;
attribute vec2 a_texcoord;

uniform mat4 u_matrix;
uniform vec2 u_moving;
uniform vec2 u_cellSize;

varying vec2 v_texcoord;

void main() {
    gl_Position = u_matrix * a_position;
    v_texcoord = vec2(a_texcoord.x + u_moving.x / u_cellSize.x, a_texcoord.y + (u_moving.y / u_cellSize.x));
}