import Texture from "./Texture";
import { Engine } from "../Engine";
/**
 * Cube texture.
 * @class
 */
export declare class CubeTexture extends Texture {
    textures: {
        positiveX: HTMLImageElement | HTMLCanvasElement | null;
        negativeX: HTMLImageElement | HTMLCanvasElement | null;
        positiveY: HTMLImageElement | HTMLCanvasElement | null;
        negativeY: HTMLImageElement | HTMLCanvasElement | null;
        positiveZ: HTMLImageElement | HTMLCanvasElement | null;
        negativeZ: HTMLImageElement | HTMLCanvasElement | null;
    };
    protected _onTextureLoad: Function[];
    protected webgl: WebGLRenderingContext;
    protected _loadedTextureCount: number;
    constructor(engine: Engine);
    /**
     * Load images from path or url.
     */
    setImagesFromPath(positiveX: string, negativeX: string, positiveY: string, negativeY: string, positiveZ: string, negativeZ: string): void;
    /**
     * Sets images that have src, but not loaded.
     */
    setLoadingImages(positiveX: HTMLImageElement, negativeX: HTMLImageElement, positiveY: HTMLImageElement, negativeY: HTMLImageElement, positiveZ: HTMLImageElement, negativeZ: HTMLImageElement): void;
    /**
     * Sets images that loaded.
     */
    setLoadedImages(positiveX: HTMLImageElement | HTMLCanvasElement, negativeX: HTMLImageElement | HTMLCanvasElement, positiveY: HTMLImageElement | HTMLCanvasElement, negativeY: HTMLImageElement | HTMLCanvasElement, positiveZ: HTMLImageElement | HTMLCanvasElement, negativeZ: HTMLImageElement | HTMLCanvasElement): void;
    /**
     * Set skybox from path
     * @param {string} texture
     */
    setSkybox(path: string): void;
    protected bindCubeTexture(): void;
}
