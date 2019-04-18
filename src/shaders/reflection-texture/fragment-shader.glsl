precision highp float;
    
uniform samplerCube u_texture;
uniform vec3 u_worldCameraPosition;
uniform float u_lightRange;
uniform float u_lightMinValue;

varying vec3 v_worldRotation;
varying vec3 v_normal;
varying vec3 v_surfaceToLightDirection;
        
void main() {
    vec3 worldNormal = normalize(v_normal);
    vec3 eyeToSurfaceDir = normalize(v_worldRotation);
    vec3 direction = reflect(eyeToSurfaceDir, vec3(0.0, 0.0, -1.0));
    
    gl_FragColor = textureCube(u_texture, direction);

    vec3 surfaceToLightDirection = normalize(v_surfaceToLightDirection);
    float light = dot(normalize(v_worldRotation), surfaceToLightDirection);
    float distanceToSurface = length(v_surfaceToLightDirection);
    float k = (u_lightRange - distanceToSurface) / u_lightRange;
    if (k < 0.0) k = 0.0;
    light = light * k;
    if (light < u_lightMinValue) {
        light = u_lightMinValue;
    }

    gl_FragColor.rgb *= (light);
    if (gl_FragColor.a == 0.0) {
        discard;
    }
    gl_FragColor.rgb *= gl_FragColor.a;
}