#define MAX_LIGHTS 28

precision mediump float;

uniform samplerCube u_texture;
uniform float u_lightRanges[MAX_LIGHTS];
uniform float u_lightMinValue;
uniform vec3 u_lightPositions[MAX_LIGHTS];
uniform int u_lightsCount;

varying vec3 v_surfaceWorldPosition;
varying vec3 v_normal;
varying vec3 v_normalTex;

float computeLight(vec3 direction, float range) {
    float light = dot(v_normal, normalize(direction));
    float k = (range - length(direction)) / range;
    if (k < 0.0) k = 0.0;
    light = light * k;
    if (light < u_lightMinValue) {
        light = u_lightMinValue;
    }
    return light;
}

void main() {
    float light = 0.0;

    for (int i = 0; i < MAX_LIGHTS; i++) {
        if (i > int(u_lightsCount)) {
            break;
        }
        vec3 direction = u_lightPositions[i] - v_surfaceWorldPosition;
        light += computeLight(direction, u_lightRanges[i]);
    }
    
    gl_FragColor = textureCube(u_texture, normalize(v_normalTex));
    if (gl_FragColor.a == 0.0) {
        discard;
    }
    gl_FragColor.rgb *= light;
    gl_FragColor.rgb *= gl_FragColor.a;
}