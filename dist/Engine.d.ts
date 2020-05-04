import UI from "./ui/UI";
import Camera from "./Camera";
import { Texture } from "./textures/Texture";
import Entity from "./objects/Entity";
import { Debugger } from "./debug/Debugger";
import { Controls } from "./Controls";
import { Shaders } from "./webgl/Shaders";
import Light from "./lights/Light";
import { ColorTexture } from "./textures/ColorTexture";
export declare class Engine {
    div: HTMLDivElement;
    canvas: HTMLCanvasElement;
    webgl: WebGLRenderingContext;
    width: number;
    height: number;
    camera: Camera | null;
    debugger: Debugger | null;
    controls: Controls | null;
    lightsPositions: Array<number>;
    lightsRanges: Array<number>;
    globalLightMinValue: number;
    noTexture: ColorTexture;
    reflections: boolean;
    status: string;
    selectedObject: Entity | null;
    readonly shaders: Shaders;
    readonly textures: Array<Texture>;
    readonly lights: Array<Light>;
    private _ui;
    private _objectsWithoutAlpha;
    private _objectsWithAlpha;
    private _resourcesLoaded;
    private _texturesLoaded;
    private _objectsLoaded;
    private _loadedObjectsCount;
    private _loadedTexturesCount;
    private _onResourcesLoadedHandlers;
    private _onObjectSelectedHandlers;
    private _running;
    private _onRun;
    private _onFrameHandlers;
    constructor(div: HTMLDivElement);
    ui: UI | null;
    readonly objects: Entity[];
    readonly resourcesLoaded: boolean;
    readonly texturesLoaded: boolean;
    readonly objectsLoaded: boolean;
    readonly running: boolean;
    appendCanvas(): void;
    /**
     * Attach camera to engine.
     * @param camera
     */
    setCamera(camera: Camera): void;
    /**
     * Update drawing parameters for correct drawing resized canvas. Use it when canvas resized.
     */
    onCanvasResized(): void;
    addObject(object: Entity): void;
    /**
     * Removes objects if its exist
     */
    removeObject(object: Entity): void;
    addOnObjectSelectedListener(callback: Function): void;
    addOnResourcesLoadedListener(callback: Function): void;
    /**
     * Function should be executed when texture loaded and ready to use.
     */
    textureLoaded(texture: Texture): void;
    /**
     * Function should be executed when object loaded and ready to use.
     */
    objectLoaded(object: Entity): void;
    setDrawingRange(range: number): void;
    drawToFrameBuffer(framebuffer: WebGLFramebuffer, width: number, height: number, update?: boolean): void;
    captureFrame(camera: Camera, options?: {
        background?: string | HTMLImageElement;
        width?: number;
        height?: number;
        imageAlpha?: number;
        noDrawObjects?: Entity[];
        drawUI?: boolean;
        backgroundAlpha?: number;
    }): HTMLCanvasElement;
    render(): void;
    run(): void;
    stop(): void;
    addOnFrameHandler(callback: Function): Function;
    removeOnFrameHandler(func: Function): void;
    private beforeFrame;
    private update;
    private setLights;
    private draw;
    private infoConsoleLog;
}
export default Engine;
