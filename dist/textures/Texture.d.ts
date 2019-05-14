import { Engine } from "../Engine";
export default abstract class Texture {
    alpha: boolean;
    color: Uint8Array;
    engine: Engine;
    textureBlockLocation: number;
    loaded: boolean;
    webglTexture: any;
    constructor(engine: Engine);
    /**
     * Sets color for texture
     * @param r number from 0 to 255
     * @param g number from 0 to 255
     * @param b number from 0 to 255
     * @param a number from 0 to 255
     */
    setColor(r: number, g: number, b: number, a: number): void;
    /**
     * Sets color for texture
     * @param hexColor
     */
    setColor(hexColor: string): void;
}
export { Texture };
