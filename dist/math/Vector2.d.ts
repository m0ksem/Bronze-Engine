export declare class Vector2 {
    [key: string]: any;
    x: number;
    y: number;
    constructor(x: number, y: number);
    set(x: number, y: number): void;
    move(x: number, y: number): void;
    toArray(): any[];
}
/**
 * Normalize a vector.
 */
export declare function normalize(vector: Vector2): Vector2 | null;
/**
 * @returns [x, y, z] result of multiplying matrix and vector.
 * @public
 */
export declare function vec2Multiply(matrix: number[], vector2: Vector2): number[];
/**
 * Returns multiply of two matrixes.
 */
export declare function multiply(matrix1: Array<number>, matrix2: Array<number>): number[];
/**
 * Return distance between two vectors.
 * @public
 */
export declare function distance(vector1: Vector2, vector2: Vector2): number;
export declare function length(vector: {
    x: number;
    y: number;
}): number;
export declare function angleBetweenVectors(vector1: {
    x: number;
    y: number;
}, vector2: {
    x: number;
    y: number;
}): number;
declare const _default: {
    Vector2: typeof Vector2;
};
export default _default;
