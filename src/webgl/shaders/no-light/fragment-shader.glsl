precision mediump float;

uniform sampler2D u_texture;


varying vec3 v_surfaceWorldPosition;
varying vec2 v_texcoord;
varying vec3 v_normal;


void main() {    
    gl_FragColor = texture2D(u_texture, v_texcoord);
    if (gl_FragColor.a == 0.0) {
        discard;
    }
    gl_FragColor.rgb *= gl_FragColor.a;
}