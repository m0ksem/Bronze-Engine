export declare class Matrix4 {
    private _value;
    readonly value: Array<number>;
    constructor();
    /**
     * Multiplying matrix by transition matrix (x, y, z).
     * @param x
     * @param y
     * @param z
     * @public
     */
    translate(x: number, y: number, z: number): void;
    rotate(x: number, y: number, z: number): void;
    scale(x: number, y: number, z: number): void;
}
/**
 * Returns unit matrix.
 */
export declare function unit(): Array<number>;
/**
 * Setting this matrix as perspective projection matrix.
 * @param fieldOfViewInRadians fieldOfView of camera.
 * @param width canvas width.
 * @param height canvas height.
 * @param near range of drawn z-coordinates start.
 * @param far range of drawn z-coordinates end.
 * @public
 */
export declare function perspective(fieldOfViewInRadians: number, width: number, height: number, near: number, far: number): Array<number>;
/**
 * Sets this matrix to projection matrix without perspective.
 * @param width
 * @param height
 */
export declare function projection(width: number, height: number): number[];
/**
 * Returns translation matrix.
 */
export declare function translation(x: number, y: number, z: number): Array<number>;
/**
 * Translate matrix by X
 * @param matrix
 * @param x
 */
export declare function translateX(matrix: number[], x: number): number[];
/**
 * Translate matrix by Y
 * @param matrix
 * @param y
 */
export declare function translateY(matrix: number[], y: number): number[];
/**
 * Translate matrix by Z
 * @param matrix
 * @param z
 */
export declare function translateZ(matrix: number[], z: number): number[];
/**
 * Returns rotation matrix for x axis.
 */
export declare function rotationX(angle: number): Array<number>;
/**
 * Returns rotation matrix for y axis.
 */
export declare function rotationY(angle: number): Array<number>;
/**
 * Returns rotation matrix for z axis.
 */
export declare function rotationZ(angle: number): Array<number>;
/**
 * Returns scaling matrix for every axis.
 */
export declare function scaling(x: number, y: number, z: number): Array<number>;
/**
 * Return matrix of all three rotations
 * @param {number} x angle
 * @param {number} y angle
 * @param {number} z angle
 */
export declare function rotation(x: number, y: number, z: number): Array<number>;
/**
 * Returns multiply of two matrixes.
 */
export declare function multiply(matrix1: Array<number>, matrix2: Array<number>): Array<number>;
/**
 * Multiply matrix on scalar
 * @param scalar a number which will multiply matrix
 */
export declare function multiplyScalar(matrix: Array<number>, scalar: number): Array<number>;
export declare function multiplyVector4(matrix: Array<number>, vector4: Array<number>): Array<number>;
/**
 * Transform vector by matrix
 * @returns vector4 [x, y, z, w]
 */
export declare function transformVector(matrix: Array<number>, vector4: Array<number>): Array<number>;
/**
 * Computes the inverse of a matrix.
 * @param  matrix matrix to compute inverse of.
 * @return new result matrix.
 * @public
 */
export declare function inverse(matrix: Array<number>): Array<number>;
/**
 * Computes the transpose of a matrix.
 * @param matrix matrix to compute inverse of.
 * @return  new result matrix.
 * @public
 */
export declare function transpose(matrix: Array<number>): Array<number>;
declare const _default: {
    Matrix4: typeof Matrix4;
    unit: typeof unit;
    projection: typeof projection;
    perspective: typeof perspective;
    inverse: typeof inverse;
    multiplyVector4: typeof multiplyVector4;
    transpose: typeof transpose;
    multiply: typeof multiply;
    translation: typeof translation;
    translateX: typeof translateX;
};
export default _default;
