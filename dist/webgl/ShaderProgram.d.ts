export default class ShaderProgram {
    [key: string]: any;
    readonly webGL: WebGLRenderingContext;
    readonly VERTEX_SHADER: string;
    readonly FRAGMENT_SHADER: string;
    readonly ATTRIBUTE: string;
    readonly UNIFORM: string;
    private _program;
    private _vertexShader;
    private _fragmentShader;
    readonly program: WebGLProgram | null;
    constructor(webGL: WebGLRenderingContext);
    /**
     * Compiling and attaching shader to this program.
     * @param {String} type can be ['vertex', 'fragment'].
     * @param {String} source
     */
    addShader(type: string, source: string): void;
    /**
     * @param {boolean} [deleteShaders] will delete shader after attaching.
     */
    create(deleteShaders?: boolean): WebGLProgram;
    /**
     * Linking variable of program to this object.
     * @param {String} type can be ['attribute', 'uniform']
     * @param {String} name variable name in shader.
     * @param {String} [customName] variable name in this object. By default its {name}.
     */
    linkVariable(type: string, name: string, customName: string): any;
    /**
     * Linking attribute variable of program to this object.
     * @param {String} name variable name in shader.
     * @param {String} [customName] variable name in this object. By default its {name}.
     */
    linkAttribute(name: string, customName: string): any;
    /**
     * Linking uniform variable of program to this object.
     * @param {String} name variable name in shader.
     * @param {String} [customName] variable name in this object. By default its {name}.
     */
    linkUniform(name: string, customName: string): any;
    use(): void;
    useIn(webGL: WebGLRenderingContext): void;
}
