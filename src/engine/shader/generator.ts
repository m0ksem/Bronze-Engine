const FRAGMENT_PRESSION = 'precision mediump float;'

export class FragmentShaderGenerator {
  private attributes: string = ''

  private uniforms: string = ''

  private varying: string = ''

  private vertexFunctions: string = ''
  private fragmentFunctions: string = ''

  private vertexMain = ''
  private fragmentMain = ''

  private line(s: string) {
    return `${s}\n`
  }

  init() {
    this.attributes += this.line('attribute vec4 a_position;')
    this.uniforms += this.line('uniform mat4 u_matrix;')
    this.vertexMain += this.line('gl_Position = u_matrix * a_position;')

    return this
  }


  addLine(line: string) {
    
  }
}