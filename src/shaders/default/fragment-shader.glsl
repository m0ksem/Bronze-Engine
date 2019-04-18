precision mediump float;

varying vec2 v_texcoord;
varying vec3 v_normal;

uniform sampler2D u_texture;
uniform float u_lightRange;
uniform float u_lightMinValue;
varying vec3 v_surfaceToLightDirection;

void main() {
    vec3 normal = normalize(v_normal);
    vec3 surfaceToLightDirection = normalize(v_surfaceToLightDirection);
    float light = dot(v_normal, surfaceToLightDirection);
    float distanceToSurface = length(v_surfaceToLightDirection);
    float k = (u_lightRange - distanceToSurface) / u_lightRange;
    light = light * k;
    if (light < u_lightMinValue) {
        light = u_lightMinValue;
    }
    
    gl_FragColor = texture2D(u_texture, v_texcoord);
    if (gl_FragColor.a == 0.0) {
        discard;
    }
    gl_FragColor.rgb *= (light);
    gl_FragColor.rgb *= gl_FragColor.a;
}
