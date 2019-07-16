import ShaderProgram from "./ShaderProgram";
import fragmentShaderSource from "./shaders/default/fragment-shader.glsl";
import vertexShaderSource from "./shaders/default/vertex-shader.glsl";
import cubeFragmentShaderSource from "./shaders/cube-texture/fragment-shader.glsl";
import cubeVertexShaderSource from "./shaders/cube-texture/vertex-shader.glsl";
import gridFragmentShaderSource from "./shaders/grid/fragment-shader.glsl";
import gridVertexShaderSource from "./shaders/grid/vertex-shader.glsl";
import reflectionFragmentShaderSource from "./shaders/reflection-texture/fragment-shader.glsl";
import reflectionVertexShaderSource from "./shaders/reflection-texture/vertex-shader.glsl";
import skyboxFragmentShaderSource from "./shaders/skybox/fragment-shader.glsl";
import skyboxVertexShaderSource from "./shaders/skybox/vertex-shader.glsl";
import screenFragmentShaderSource from "./shaders/screen/fragment-shader.glsl";
import screenVertexShaderSource from "./shaders/screen/vertex-shader.glsl";

export class Shaders {
  /**
   * Extensions objects that allow you to use extensions which was added by addExtension()
   */
  public extensions: Extensions = new Extensions();
  /**
   * WebGL where attached shaders.
   */
  readonly webGL: WebGLRenderingContext;

  public shadersRequireLights: ShaderProgram[] = [];

  [key: string]: any;

  constructor(webGL: WebGLRenderingContext) {
    this.webGL = webGL;

    let options = {
      removePrefixes: true,
      addLocationMarker: true
    };

    this.addExtension("anisotropic", "EXT_texture_filter_anisotropic");
    this.addExtension("standard", "OES_standard_derivatives");
    this.addProgram("default", vertexShaderSource, fragmentShaderSource, options);
    this.addProgram("cube", cubeVertexShaderSource, cubeFragmentShaderSource, options);
    this.addProgram("grid", gridVertexShaderSource, gridFragmentShaderSource, options);
    this.addProgram("reflection", reflectionVertexShaderSource, reflectionFragmentShaderSource, options);
    this.addProgram("skybox", skyboxVertexShaderSource, skyboxFragmentShaderSource, options);
    this.addProgram("screen", screenVertexShaderSource, screenFragmentShaderSource, options);

    this.default.use();
    this.webGL.enable(this.webGL.BLEND);
    this.webGL.blendFunc(this.webGL.ONE, this.webGL.ONE_MINUS_SRC_ALPHA);
  }

  /**
   * Creates shaders program with {name} and add its to this objects. Auto linking uniforms and attributes.
   * @public
   * @param {String} name shader name
   * @param {String} vertexSource shader text
   * @param {String} fragmentSource shader text
   * @param {Options} [options]
   */
  public addProgram(name: string, vertexSource: string, fragmentSource: string, options: Options) {
    let program = new ShaderProgram(this.webGL);
    program.addShader("vertex", vertexSource);
    program.addShader("fragment", fragmentSource);
    program.create();
    program = this._linkAllAttributesFromSource(program, vertexSource, options);
    program = this._linkAllAttributesFromSource(program, fragmentSource, options);
    this[name] = program;
  }


  /**
   * Load shader from Path
   * @param name 
   * @param vertexPath 
   * @param fragmentPath 
   * @param options 
   */
  public loadShaders(name: string, vertexPath: string, fragmentPath: string, options: Options) {
    var vertexShader = new XMLHttpRequest();
    vertexShader.open("GET", vertexPath, false);
    vertexShader.send(null);
    var fragmentShader = new XMLHttpRequest();
    fragmentShader.open("GET", fragmentPath, false);
    fragmentShader.send(null);

    this.addProgram(name, vertexShader.responseText, fragmentShader.responseText, options);
  }

  /**
   * Linking all variables from shaders.
   * @param program 
   * @param source 
   * @param options 
   */
  private _linkAllAttributesFromSource(program: ShaderProgram, source: string, options: Options) {
    let rows = source
      .split(";")
      .join("\r")
      .split("\r");
    let outName;
    rows.forEach(row => {
      row = row.replace(new RegExp("\r", "g"), "");
      row = row.replace(new RegExp("\n", "g"), "");

      let words = row.split(" ");
      for (let i = words.length - 1; i--; ) {
        if (words[i] === "") {
          words.splice(i, 1);
        }
      }
      if (words[0].toLowerCase() == "attribute") {
        let inName = words[2];
        let arraySizeIndexStart = inName.indexOf("[");
        if (arraySizeIndexStart != -1) {
          inName = inName.slice(0, arraySizeIndexStart);
        }
        outName = inName;

        if (options && options.removePrefixes) {
          outName = outName.slice(2, outName.length);
        }
        if (options && options.addLocationMarker) {
          outName = outName + "Location";
        }
        program.linkAttribute(words[2], outName);
      } else if (words[0].toLowerCase() == "uniform") {
        let inName = words[2];
        let arraySizeIndexStart = inName.indexOf("[");
        if (arraySizeIndexStart != -1) {
          inName = inName.slice(0, arraySizeIndexStart);
        }
        outName = inName;

        if (options && options.removePrefixes) {
          outName = outName.slice(2, outName.length);
        }
        if (options && options.addLocationMarker) {
          outName = outName + "Location";
        }
        program.linkUniform(inName, outName);
      }
    });
    return program;
  }

  /**
   * Adds extension form webgl to this object with custom name
   * @param {String} name custom name to use in shaders
   * @param {String} nameInWebGL extension name in webgl
   */
  addExtension(name: string, nameInWebGL: string) {
    this.extensions[name] = this.webGL.getExtension(nameInWebGL);
  }
}

export class Options {
  addLocationMarker: boolean = false;
  removePrefixes: boolean = false;
}

export class Extensions {
  [key: string]: any;
}

export default Shaders;
