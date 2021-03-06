import { Engine } from "../Engine";
import { Vector3 } from "../math/Vector3";
export declare class Light {
    engine: Engine;
    position: Vector3;
    range: number;
    private _color;
    private _on;
    constructor(engine: Engine);
    readonly isOn: Boolean;
    setPosition(vector: Vector3): void;
    setPosition(array: number[]): void;
    setPosition(x: number, y: number, z: number): void;
    /**
     * Move light
     * @param x
     * @param y
     * @param z
     */
    move(x: number, y: number, z: number): void;
    /**
     * Set range for light
     */
    setRange(value: number): void;
    /**
     * Setting color of light
     * @param r red value from 0 to 255.
     * @param g green value from 0 to 255.
     * @param b blue value from 0 to 255.
     * @param a alpha value from 0 to 255.
     * @public
     */
    setColorRGBA(r: number, g: number, b: number, a: number): void;
    /**
     * Turn light on. Light will be drawn if turned on.
     */
    on(): void;
    /**
     * Turn off light. Remove this light from drawing process.
     */
    off(): void;
    destroy(): void;
}
export default Light;
