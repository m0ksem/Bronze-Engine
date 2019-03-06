precision mediump float;

varying vec2 v_texcoord;
varying vec3 v_normal;

uniform sampler2D u_texture;
uniform vec3 u_reverseLightDirection;
varying vec3 v_surfaceToLight;

void main() {
    vec3 normal = normalize(v_normal);
    // float light = dot(normal, u_reverseLightDirection);
    vec3 surfaceToLightDirection = normalize(v_surfaceToLight);
    float light = dot(v_normal, surfaceToLightDirection);
    if (light < 0.5)
        light = 0.5;
    
    gl_FragColor = texture2D(u_texture, v_texcoord);
    gl_FragColor.rgb *= (light);
    if(gl_FragColor.a < 0.2)
        discard;
}