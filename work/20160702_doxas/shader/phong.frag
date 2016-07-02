/* ----------------------------------------------------------------------------
 * basic phong shader
 * ---------------------------------------------------------------------------- */
precision mediump float;

uniform sampler2D texture;
varying vec4 vColor;
varying vec2 vTexCoord;
void main(){
    vec4 samplerColor = texture2D(texture, vTexCoord);
    gl_FragColor = vColor * samplerColor;
}
