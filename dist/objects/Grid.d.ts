import { Rect } from "./Rect";
import { Engine } from "../Engine";
/**
 * Rect for using custom shaders
 * @class
 * @constructor
 */
export declare class Grid extends Rect {
    cellSize: number[];
    private movingMatrix;
    /**
     * Flat rectangle with square texture.
     * @param engine
     */
    constructor(engine: Engine);
    draw(): void;
    /**
     * Updated matrixes
     */
    updateMatrixes(): void;
    /**
     * Updates object
     */
    update(): void;
    /**
     * Sets size for one cell in pixels
     * @param width
     * @param height
     */
    setCellSize(width: number, height: number): void;
    /**
     * Changing size of rect.
     * @param width
     * @param height
     */
    setSize(width: number, height: number): void;
}
