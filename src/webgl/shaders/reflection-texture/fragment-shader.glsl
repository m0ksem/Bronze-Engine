#define MAX_LIGHTS 28

precision highp float;
    
uniform samplerCube u_texture;
uniform float u_lightRanges[MAX_LIGHTS];
uniform float u_lightMinValue;

varying vec3 v_lightsDirections[MAX_LIGHTS];
varying float v_lightsCount;
varying vec3 v_worldRotation;
varying vec3 v_normal;
varying vec3 v_surfaceToLightDirection;
        
float computeLight(vec3 direction, float range) {
    float light = dot(normalize(v_worldRotation), normalize(direction));
    float k = (range - length(direction)) / range;
    if (k < 0.0) k = 0.0;
    light = light * k;
    if (light < u_lightMinValue) {
        light = u_lightMinValue;
    }
    return light;
}

void main() {
    vec3 worldNormal = normalize(v_normal);
    vec3 eyeToSurfaceDir = normalize(v_worldRotation);
    vec3 direction = reflect(eyeToSurfaceDir, vec3(0.0, 0.0, -1.0));
    
    gl_FragColor = textureCube(u_texture, direction);

    float light = 0.0;

    for (int i = 0; i < MAX_LIGHTS; i++) {
        if (i > int(v_lightsCount)) {
            break;
        }
        light += computeLight(v_lightsDirections[i], u_lightRanges[i]);
    }

    gl_FragColor.rgb *= (light);
    if (gl_FragColor.a == 0.0) {
        discard;
    }
    gl_FragColor.rgb *= gl_FragColor.a;
}