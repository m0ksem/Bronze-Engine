export declare function getWebGLById(id: string): WebGLRenderingContext;
export declare function getWebGL(canvas: HTMLCanvasElement): WebGLRenderingContext;
export declare function compileShader(shaderText: string, type: string, webGL: WebGLRenderingContext): WebGLShader | null;
export declare function createWebGLProgram(webGL: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader, deleteShaders: boolean): WebGLProgram;
declare const _default: {
    createWebGLProgram: typeof createWebGLProgram;
    compileShader: typeof compileShader;
    getWebGL: typeof getWebGL;
    getWebGLById: typeof getWebGLById;
};
export default _default;
