#define MAX_LIGHTS 28

precision mediump float;

varying vec2 v_texcoord;
varying vec3 v_normal;

uniform sampler2D u_texture;
uniform float u_lightRanges[MAX_LIGHTS];
uniform float u_lightMinValue;

varying vec3 v_lightsDirections[MAX_LIGHTS];
varying float v_lightsCount;
varying float v_pos;

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
    
    vec4 texture = texture2D(u_texture, v_texcoord);
    gl_FragColor.a = 1.0;
    
    float y = (v_pos) / 1000.0;
    float blue = 0.0;
    if (y > 1.0) {
        y = 1.0;
    }
    if (fract(v_pos/ 40.0) < 0.2) {
        blue = 0.0;
        gl_FragColor.a = 0.5;
    }
    gl_FragColor.xyz = vec3(0.9 * y, 0.0, y * 0.2);
    gl_FragColor.xyz += texture.xyz * 0.1 * y;
    if (gl_FragColor.a == 0.0) {
        discard;
    }
    gl_FragColor.rgb *= (light);
    gl_FragColor.rgb *= gl_FragColor.a;
}
