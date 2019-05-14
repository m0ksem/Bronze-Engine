import { Engine } from "../Engine";
import { Entity } from "../objects/Entity";
import { Texture } from "../textures/Texture";
import ShaderProgram from "../webgl/ShaderProgram";
/**
 * @class
 * @constructor
 * @param {Engine} e
 */
export default class UI {
    canvas: HTMLCanvasElement;
    div: HTMLDivElement;
    width: number;
    height: number;
    centerX: number;
    centerY: number;
    context: CanvasRenderingContext2D;
    objects: Array<Entity>;
    htmlElements: Array<uiHTMLElement>;
    engine: Engine;
    private webgl;
    private _screen;
    private _texture;
    private _webglTexture;
    private frameBuffer;
    Screen: typeof Screen;
    constructor(engine: Engine);
    /**
     * Adds object to draw.
     * @param element some UI element.
     */
    addObject(object: Entity): void;
    /**
     * Removes element from drawing function.
     * @param element
     */
    removeObject(object: Entity): void;
    /**
     * Adding DOM element upper game engine canvas.
     * @param element
     * @param position.vertical from 0 to 100
     */
    appendDOMElement(element: HTMLElement, name: string): HTMLElement;
    /**
     * Draws image on canvas. Read about addImage
     * @param image
     */
    drawImage(image: HTMLImageElement | HTMLCanvasElement): void;
    /**
     * Clear canvas
     */
    clearCanvas(): void;
    draw(): void;
    drawUI(): void;
}
declare class Screen {
    webgl: WebGLRenderingContext;
    engine: Engine;
    shaderProgram: ShaderProgram;
    vertexes: number[];
    textureCoords: number[];
    normals: number[];
    vertexesBuffer: any;
    coordsBuffer: any;
    normalBuffer: any;
    texture: any;
    constructor(engine: Engine);
    setTexture(texture: Texture): void;
    draw(): void;
}
export declare class uiHTMLElement {
    name: string;
    el: HTMLElement;
    constructor(name: string, el: HTMLElement);
    hide(): void;
    show(): void;
}
export { UI };
