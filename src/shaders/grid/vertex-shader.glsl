#extension GL_OES_standard_derivatives : enable

attribute vec4 a_position;

uniform mat4 u_matrix;

varying vec3 vertex;

void main() {
    vertex = vec3(u_matrix * a_position);
    gl_Position = u_matrix * a_position;
}