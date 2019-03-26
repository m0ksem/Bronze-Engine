precision mediump float;

varying vec3 v_normal;

uniform samplerCube u_texture;
uniform vec3 u_reverseLightDirection;
varying vec3 v_surfaceToLight;

void main() {
    vec3 normal = normalize(v_normal);
    // float light = dot(normal, u_reverseLightDirection);
    vec3 surfaceToLightDirection = normalize(v_surfaceToLight);
    float light = dot(v_normal, surfaceToLightDirection);
    if (light < 0.5)
        light = 0.5;
    
    gl_FragColor = textureCube(u_texture, v_normal);
   //  gl_FragColor.rgb *= (light);
    if(gl_FragColor.a < .9)
        discard;
}
