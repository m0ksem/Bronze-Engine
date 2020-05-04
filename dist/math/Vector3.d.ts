export declare class Vector3 {
    [key: string]: any;
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    set(x: number, y: number, z: number): void;
    move(x: number, y: number, z: number): void;
    moveArray(array: number[]): void;
    scale(x: number, y: number, z: number): void;
    toArray(): number[];
    copy(): Vector3;
    add(vector: Vector3): void;
    sub(vector: Vector3): void;
    fromArray(array: number[]): void;
}
/**
 * Normalize a vector.
 */
export declare function normalize(vector: Vector3): Vector3 | null;
/**
 * Returns rotation matrix for x axis.
 * @public
 */
export declare function rotationX(angle: number): number[];
/**
 * Returns rotation matrix for y axis.
 */
export declare function rotationY(angle: number): number[];
/**
 * Returns rotation matrix for z axis.
 * @param {Number} angle angle in radians.
 * @returns {Array}
 * @public
 */
export declare function rotationZ(angle: number): number[];
/**
 *
 * @param {Array} matrix
 * @param {Array} vector4
 *
 * @returns {Array} [x, y, z, w] result of multiplying matrix and vector.
 * @public
 */
export declare function vecMultiply(matrix: number[], vector3: Vector3): number[];
/**
 * Returns multiply of two matrixes.
 */
export declare function multiply(matrix1: Array<number>, matrix2: Array<number>): number[];
/**
 * Return distance between two vectors.
 * @public
 */
export declare function distance(vector1: Vector3, vector2: Vector3): number;
export declare function length(vector: Vector3): number;
export declare function angleBetweenVectors(vector1: Vector3, vector2: Vector3): number;
declare const _default: {
    Vector3: typeof Vector3;
};
export default _default;
