export declare class Shaders {
    /**
     * Extensions objects that allow you to use extensions which was added by addExtension()
     */
    extensions: Extensions;
    /**
     * WebGL where attached shaders.
     */
    readonly webGL: WebGLRenderingContext;
    [key: string]: any;
    constructor(webGL: WebGLRenderingContext);
    /**
     * Creates shaders program with {name} and add its to this objects. Auto linking uniforms and attributes.
     * @public
     * @param {String} name
     * @param {String} vertexSource
     * @param {String} fragmentSource
     * @param {Object} [options]
     */
    addProgram(name: string, vertexSource: string, fragmentSource: string, options: Options): void;
    private _linkAllAttributesFromSource;
    /**
     * Adds extension form webgl to this object with custom name
     * @param {String} name custom name to use in shaders
     * @param {String} nameInWebGL extension name in webgl
     */
    addExtension(name: string, nameInWebGL: string): void;
}
declare class Options extends Object {
    addLocationMarker: boolean;
    removePrefixes: boolean;
}
declare class Extensions extends Object {
    [key: string]: any;
}
declare const _default: {
    Shaders: typeof Shaders;
};
export default _default;
