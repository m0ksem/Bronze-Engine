attribute vec4 a_position;
attribute vec2 a_texcoord;
attribute vec4 a_normal;

uniform mat4 u_matrix;
uniform mat4 u_objectRotation;
uniform vec3 u_lightWorldPosition;
uniform mat4 u_cameraMatrix;

varying vec2 v_texcoord;
varying vec3 v_normal;
varying vec3 v_surfaceToLight;


void main() {
    gl_Position = u_matrix * a_position;
    
    v_texcoord = a_texcoord;
    v_normal = vec3(u_objectRotation * a_normal);

    vec3 surfaceWorldPosition = (u_cameraMatrix * a_position).xyz;
    
    v_surfaceToLight = u_lightWorldPosition; // - surfaceWorldPosition;
}