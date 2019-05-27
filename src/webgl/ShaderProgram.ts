export class ShaderProgram {
  [key: string]: any;
  readonly webGL: WebGLRenderingContext;
  readonly VERTEX_SHADER: string = "vertex";
  readonly FRAGMENT_SHADER: string = "fragment";
  readonly ATTRIBUTE: string = "attribute";
  readonly UNIFORM: string = "uniform";
  private _program: WebGLProgram | null = null;
  private _vertexShader: WebGLShader | null = null;
  private _fragmentShader: WebGLShader | null = null;

  public get program(): WebGLProgram | null {
    return this._program;
  }

  constructor(webGL: WebGLRenderingContext) {
    this.webGL = webGL;
    return this;
  }

  /**
   * Compiling and attaching shader to this program.
   * @param {String} type can be ['vertex', 'fragment'].
   * @param {String} source
   */
  addShader(type: string, source: string) {
    let shader;
    switch (type) {
      case "vertex" || this.VERTEX_SHADER:
        shader = this.webGL.createShader(this.webGL.VERTEX_SHADER);
        this._vertexShader = shader;
        break;
      case "fragment" || this.FRAGMENT_SHADER:
        shader = this.webGL.createShader(this.webGL.FRAGMENT_SHADER);
        this._fragmentShader = shader;
        break;
      default:
        throw new BronzeError("Wrong shader type.");
    }
    this.webGL.shaderSource(shader!, source);
    this.webGL.compileShader(shader!);

    if (!this.webGL.getShaderParameter(shader!, this.webGL.COMPILE_STATUS)) {
      console.error("There are shader error:");
      console.error(this.webGL.getShaderInfoLog(shader!));
      throw new BronzeError("Could not compile shader.");
    }
  }

  /**
   * @param {boolean} [deleteShaders] will delete shader after attaching.
   */
  create(deleteShaders: boolean = false) {
    let program: WebGLProgram = this.webGL.createProgram()!;

    if (this._vertexShader == null && this._fragmentShader == null) {
      throw new BronzeError("Shader programs isn`t complete.");
    }

    this.webGL.attachShader(program, this._vertexShader!);
    this.webGL.attachShader(program, this._fragmentShader!);

    this.webGL.linkProgram(program);
    this.webGL.useProgram(program);

    if (deleteShaders) {
      this.webGL.deleteShader(this._vertexShader);
      this.webGL.deleteShader(this._fragmentShader);
    }
    this._program = program;
    return program;
  }

  /**
   * Linking variable of program to this object.
   * @param {String} type can be ['attribute', 'uniform']
   * @param {String} name variable name in shader.
   * @param {String} [customName] variable name in this object. By default its {name}.
   */
  linkVariable(type: string, name: string, customName: string) {
    customName = customName || name;
    if (this[customName] !== undefined) {
      console.warn("Shader program: Custom name for uniform was switched from " + customName + " to " + customName + "1");
      customName = customName + "1";
    }

    if (this._program == null) {
      throw new BronzeError("Shader program is null.");
    }

    switch (type) {
      case this.ATTRIBUTE:
        this[customName] = this.webGL.getAttribLocation(this._program!, name);
        break;
      case this.UNIFORM:
        this[customName] = this.webGL.getUniformLocation(this._program!, name);
        break;
      default:
        throw "Wrong variable type";
    }
    return this[customName];
  }

  /**
   * Linking attribute variable of program to this object.
   * @param {String} name variable name in shader.
   * @param {String} [customName] variable name in this object. By default its {name}.
   */
  linkAttribute(name: string, customName: string) {
    customName = customName || name;
    if (this[customName] != undefined) {
      console.warn("Shader program: Custom name for uniform was switched from " + customName + " to " + customName + "1");
      customName = customName + "1";
    }

    if (this._program == null) {
      throw new BronzeError("Shader program is null.");
    }

    this[customName] = this.webGL.getAttribLocation(this.program!, name);

    if (this[customName] == null) {
      throw new Error("Can not link uniform " + name + ". The variable may not be used in shader.");
    }
    return this[customName];
  }

  /**
   * Linking uniform variable of program to this object.
   * @param {String} name variable name in shader.
   * @param {String} [customName] variable name in this object. By default its {name}.
   */
  linkUniform(name: string, customName: string) {
    customName = customName || name;
    if (this[customName] != undefined) {
      console.warn("Shader program: Custom name for attribute was switched from " + customName + " to " + customName + "1");
      customName = customName + "";
    }

    if (this._program == null) {
      throw new BronzeError("Shader program is null.");
    }

    this[customName] = this.webGL.getUniformLocation(this.program!, name);

    if (this[customName] == null) {
      throw new Error("Can not link uniform " + name + ". The variable may not be used in shader.");
    }
    return this[customName];
  }

  use() {
    this.webGL.useProgram(this.program);
  }

  useIn(webGL: WebGLRenderingContext) {
    webGL.useProgram(this.program);
  }
}

class BronzeError extends Error {
  readonly name: string = "WebglError";

  constructor(message: string) {
    super(message);
    Error.captureStackTrace(this, BronzeError);
  }
}

export default ShaderProgram
