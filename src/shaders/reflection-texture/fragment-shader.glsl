precision highp float;
    
// Passed in from the vertex shader.
varying vec3 v_worldPosition;
varying vec3 v_worldNormal;
    
// The texture.
uniform samplerCube u_texture;
uniform vec3 u_worldCameraPosition;
        
void main() {
    vec3 worldNormal = normalize(v_worldNormal);
    vec3 eyeToSurfaceDir = normalize(v_worldPosition);
    vec3 direction = reflect(eyeToSurfaceDir,worldNormal);
    
    gl_FragColor = textureCube(u_texture, direction);
    gl_FragColor.rgb *= gl_FragColor.a;
}