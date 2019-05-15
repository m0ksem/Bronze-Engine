precision mediump float;

varying vec2 v_texcoord;
varying vec3 v_normal;

uniform sampler2D u_texture;

void main() {
    gl_FragColor = texture2D(u_texture, v_texcoord);
    if (gl_FragColor.a == 0.0) {
        discard;
    }
    gl_FragColor.rgb *= gl_FragColor.a;
}
