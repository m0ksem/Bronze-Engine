attribute vec4 a_position;
attribute vec3 a_normal;
    
uniform mat4 u_matrix;
uniform mat4 u_rotationMatrix;
uniform vec3 u_lightWorldPosition;
uniform mat4 u_worldMatrix;
    
varying vec3 v_worldPosition;
varying vec3 v_worldNormal;
varying vec3 v_surfaceToLightDirection;
    
void main() {
    gl_Position = u_matrix * a_position;

    v_worldPosition = (u_rotationMatrix * a_position).xyz;
    
    v_worldNormal =  vec3(a_normal); 
}