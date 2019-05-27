#define MAX_LIGHTS 28

attribute vec4 a_position;
attribute vec2 a_texcoord;
attribute vec4 a_normal;

uniform mat4 u_matrix;
uniform mat4 u_objectRotation;
uniform mat4 u_worldMatrix;

uniform vec3 u_lightPositions[MAX_LIGHTS];
uniform int u_lightsCount;

varying vec2 v_texcoord;
varying vec3 v_normal;
varying vec3 v_lightsDirections[MAX_LIGHTS];
varying float v_lightsCount;

void main() {
    gl_Position = u_matrix * a_position;
    
    v_texcoord = a_texcoord;
    v_normal = vec3(u_objectRotation * a_normal);

    vec3 surfaceWorldPosition = (u_worldMatrix  * a_position).xyz;
    for (int i = 0; i < MAX_LIGHTS; i++) {
        if (i > int(u_lightsCount)) {
            break;
        }
        v_lightsDirections[i] = u_lightPositions[i] - surfaceWorldPosition;
    }

    v_lightsCount = float(u_lightsCount);
}
