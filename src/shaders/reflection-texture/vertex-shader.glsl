attribute vec4 a_position;
attribute vec3 a_normal;
    
uniform mat4 u_matrix;
uniform mat4 u_rotationMatrix;
    
varying vec3 v_worldPosition;
varying vec3 v_worldNormal;
    
void main() {
    // Multiply the position by the matrix.
    gl_Position = u_matrix * a_position;
    
    // send the view position to the fragment shader
    v_worldPosition = (u_rotationMatrix * a_position).xyz;
    
    // orient the normals and pass to the fragment shader
    v_worldNormal =  vec3(a_normal); // mat3(u_rotationMatrix) *
}