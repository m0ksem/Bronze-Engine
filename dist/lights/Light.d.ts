import { Engine } from "../Engine";
import { Vector3 } from "../math/Vector3";
export default class Light {
    engine: Engine;
    private _position;
    private _range;
    private _color;
    private _index;
    private _on;
    private _positionsWritten;
    private _rangeWritten;
    constructor(engine: Engine);
    /**
      Range of light
     */
    /**
    * Range of light
    */
    range: number;
    position: Vector3;
    /**
     * Sets position for object. Using another vector.
     */
    setPosition(vector: Vector3): void;
    /**
     * Sets position for object. Using array of coordinates.
     */
    setPosition(array: number[]): void;
    /**
     * Sets position for object. Using coordinates.
     */
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
}
export { Light };
