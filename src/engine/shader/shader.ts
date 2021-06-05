class Uniforms {
  [key: string]: WebGLUniformLocation
}

class Attributes {
  [key: string]: number
}

export class Shader {
  protected webgl: WebGL2RenderingContext
  protected uniforms: Uniforms = {}
  protected attributes: Attributes = {}
  protected shaderProgram: WebGLProgram | null = null

  constructor(ctx: WebGL2RenderingContext) {
    this.webgl = ctx
  }

  protected createProgram(...shaders: WebGLShader[]) {
    const program = this.webgl.createProgram()!

    shaders.forEach((shader) => {
      this.webgl.attachShader(program, shader)
      // this.webgl.deleteShader(shader) // TODO: should engine delete shader after link?
    })

    this.webgl.linkProgram(program)

    return program
  }

  protected createShader(type: number, source: string): WebGLShader {
    const shader = this.webgl.createShader(type)!

    this.webgl.shaderSource(shader, source)
    this.webgl.compileShader(shader)

    const status = this.webgl.getShaderParameter(shader, this.webgl.COMPILE_STATUS)
    if (!status) {
      console.error(this.webgl.getShaderInfoLog(shader))
      console.log(source)
      throw new Error('Could not compile shader')
    }

    return shader
  }

  protected linkAttribute(name: string, shaderProgram: WebGLProgram) {
    const attribute = this.webgl.getAttribLocation(shaderProgram, name)

    if (attribute === null || attribute === -1) {
      throw new Error('Can not link attribute ' + name + '. The variable may not be used in shader.')
    }

    return attribute
  }

  protected linkUniform(name: string, shaderProgram: WebGLProgram) {
    const attribute = this.webgl.getUniformLocation(shaderProgram, name)

    if (attribute === null || attribute === -1) {
      throw new Error('Can not link uniform ' + name + '. The variable may not be used in shader.')
    }

    return attribute
  }

  protected getUniformNames(source: string) {
    // Every string starts with uniform and ends with ';' or '['
    // '[' use for arrays. 
    // For example: `uniform vec3 u_lightPositions[MAX_LIGHTS];` -> `u_lightPositions`
    const uniformRegex = /uniform .* ([^;|^\[]*)/g
    
    const rows = source.match(uniformRegex)
    if (rows === null) { return []}

    // `uniform type name`
    return rows.map((row) => row.split(' ')[2])
  }

  protected getAttributeNames(source: string) {
    // Every string starts with uniform and ends with ';' or '['
    // '[' use for arrays. 
    // For example: `attribute vec3 u_lightPositions[MAX_LIGHTS];` -> `u_lightPositions`
    const uniformRegex = /attribute  .* ([^;|^\[]*)/g
    
    const rows = source.match(uniformRegex)
    if (rows === null) { return []}

    // `uniform type name`
    return rows.map((row) => row.split(' ')[2])
  }

  protected parseVertexShaderSource(source: string, shaderProgram: WebGLProgram) {
    this.webgl.useProgram(shaderProgram)

    const names = this.getAttributeNames(source)

    names.forEach((name) => {
      this.attributes[name] = this.linkAttribute(name, shaderProgram)
    })
  }

  protected parseFragmentShaderSource(source: string, shaderProgram: WebGLProgram) {
    this.webgl.useProgram(shaderProgram)

    const names = this.getUniformNames(source)

    names.forEach((name) => {
      this.uniforms[name] = this.linkUniform(name, shaderProgram)
    })
  }
}