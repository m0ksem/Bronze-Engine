#define MAX_LIGHTS 28

precision mediump float;

varying vec2 v_texcoord;
varying vec3 v_normal;

uniform sampler2D u_texture;
uniform float u_lightRanges[MAX_LIGHTS];
uniform float u_lightMinValue;

varying vec3 v_lightsDirections[MAX_LIGHTS];
varying float v_lightsCount;

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
        if (i > int(v_lightsCount)) {
            break;
        }
        light += computeLight(v_lightsDirections[i], u_lightRanges[i]);
    }
    
    gl_FragColor = texture2D(u_texture, v_texcoord);
    if (gl_FragColor.a == 0.0) {
        discard;
    }
    gl_FragColor.rgb *= (light);
    gl_FragColor.rgb *= gl_FragColor.a;
    gl_FragColor.rgb *= vec3(0.2, 0.0, 0.0);
}
