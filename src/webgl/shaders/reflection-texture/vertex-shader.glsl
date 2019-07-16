#define MAX_LIGHTS 28

attribute vec4 a_position;
attribute vec3 a_normal;
    
uniform mat4 u_matrix;
uniform mat4 u_rotationMatrix;
uniform mat4 u_worldMatrix;


varying vec3 v_worldRotation;
varying vec3 v_normal;
varying vec3 v_surfaceToLightDirection;
varying vec3 v_surfaceWorldPosition;
    
void main() {
    gl_Position = u_matrix * a_position;
    v_worldRotation = (u_rotationMatrix * a_position).xyz;
    v_normal =  vec3(a_normal);
    v_surfaceWorldPosition = (u_worldMatrix  * a_position).xyz;
}