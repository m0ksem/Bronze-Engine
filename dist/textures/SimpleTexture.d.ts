import { Engine } from "../Engine";
import { Texture } from "./Texture";
export declare class SimpleTexture extends Texture {
    textureBlockLocation: number;
    mipmapFilter: string;
    readonly AUTO_GENERATE: number;
    readonly QUICK_GENERATE: number;
    private _mipmap;
    private _onTextureLoadedHandlers;
    private _width;
    private _height;
    private _image;
    private _mipmapGenerationMethod;
    constructor(engine: Engine);
    readonly image: HTMLImageElement;
    height: number;
    width: number;
    setMipmapGenerationMethod(method: number): void;
    setSize(width: number, height: number): void;
    private _createWebglTexture;
    loadFrom(path: string): void;
}
export default SimpleTexture;
