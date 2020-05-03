import ShaderProgram from "./ShaderProgram";
export declare class Shaders {
    extensions: Extensions;
    readonly webGL: WebGLRenderingContext;
    shadersRequireLights: ShaderProgram[];
    [key: string]: any;
    constructor(webGL: WebGLRenderingContext);
    /**
     * Creates shaders program with {name} and add its to this objects. Auto linking uniforms and attributes.
     * @public
     * @param {String} name shader name
     * @param {String} vertexSource shader text
     * @param {String} fragmentSource shader text
     * @param {Options} [options]
     */
    addProgram(name: string, vertexSource: string, fragmentSource: string, options: Options): void;
    /**
     * Load shader from Path
     * @param name
     * @param vertexPath
     * @param fragmentPath
     * @param options
     */
    loadShaders(name: string, vertexPath: string, fragmentPath: string, options: Options): void;
    /**
     * Linking all variables from shaders.
     * @param program
     * @param source
     * @param options
     */
    private _linkAllAttributesFromSource;
    /**
     * Adds extension form webgl to this object with custom name
     * @param {String} name custom name to use in shaders
     * @param {String} nameInWebGL extension name in webgl
     */
    addExtension(name: string, nameInWebGL: string): void;
}
export declare class Options {
    addLocationMarker: boolean;
    removePrefixes: boolean;
}
export declare class Extensions {
    [key: string]: any;
}
export default Shaders;
