import { Entity } from "./Entity";
import { Engine } from "../Engine";
export default class Rect extends Entity {
    width: number;
    height: number;
    name: string;
    constructor(engine: Engine);
    /**
     * Scale object.
     * @param x
     * @param y
     */
    scale(x: number, y: number): void;
    /**
     * Changing size of rect.
     * @param width
     * @param height
     * @public
     */
    setSize(width: number, height: number): void;
    /**
     * Repeats texture on rect.
     * @param x count for x
     * @param y count for y
     * @default {x:1,y:1}
     */
    setTextureRepeating(x: number, y: number): void;
}
export { Rect };
