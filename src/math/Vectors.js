/** @module Vectors */

/**
 * Normalize a vector.
 * @param {Array[3]} vector vector to normalize.
 * @return {Array[3]} normalized vector
 */
export function normalize (vector) {
    let result = new Float32Array(3);
    let length = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1] + vector[2] * vector[2]);
    if (length > 0.00001) {
        result[0] = vector[0] / length;
        result[1] = vector[1] / length;
        result[2] = vector[2] / length;
        return result
    }
    else {
        return false
    }
}

/**
 * Returns rotation matrix for x axis.
 * @param {Number} angle angle in radians.
 * @returns {Array}
 * @public
 */
export function rotationX(angle) {
    let c = Math.cos(angle)
    let s = Math.sin(angle)

    return [
        1, 0, 0,
        0, c, s,
        0, -s, c
    ]
}

/**
 * Returns rotation matrix for y axis.
 * @param {Number} angle angle in radians.
 * @returns {Array}
 * @public
 */
export function rotationY(angle) {
    let c = Math.cos(angle)
    let s = Math.sin(angle)

    return [
        c, 0, -s,
        0, 1, 0,
        s, 0, c
    ]
}

/**
 * Returns rotation matrix for z axis.
 * @param {Number} angle angle in radians.
 * @returns {Array}
 * @public
 */
export function rotationZ(angle) {
    let c = Math.cos(angle)
    let s = Math.sin(angle)

    return [
        c, s, 0,
        -s, c, 0,
        0, 0, 1
    ]
}

/**
 * 
 * @param {Array} matrix
 * @param {Array} vector4
 * 
 * @returns {Array} [x, y, z, w] result of multiplying matrix and vector.
 * @public
 */
export function vecMultiply(matrix, vector3) {
    let c1 = matrix[0] * vector3[0] + matrix[1] * vector3[1] + matrix[2] * vector3[2]
    let c2 = matrix[3] * vector3[0] + matrix[4] * vector3[1] + matrix[5] * vector3[2]
    let c3 = matrix[6] * vector3[0] + matrix[7] * vector3[1] + matrix[8] * vector3[2]
    return [c1, c2, c3]
}

/**
 * Returns multiply of two matrixes.
 * @param {Array} matrix1 
 * @param {Array} matrix2 
 * @returns {Array}
 * @public
 */
export function multiply(matrix1, matrix2) {
    let a00 = matrix1[0 * 3 + 0]
    let a01 = matrix1[0 * 3 + 1]
    let a02 = matrix1[0 * 3 + 2]
    let a10 = matrix1[1 * 3 + 0]
    let a11 = matrix1[1 * 3 + 1]
    let a12 = matrix1[1 * 3 + 2]
    let a20 = matrix1[2 * 3 + 0]
    let a21 = matrix1[2 * 3 + 1]
    let a22 = matrix1[2 * 3 + 2]
    let b00 = matrix2[0 * 3 + 0]
    let b01 = matrix2[0 * 3 + 1]
    let b02 = matrix2[0 * 3 + 2]
    let b10 = matrix2[1 * 3 + 0]
    let b11 = matrix2[1 * 3 + 1]
    let b12 = matrix2[1 * 3 + 2]
    let b20 = matrix2[2 * 3 + 0]
    let b21 = matrix2[2 * 3 + 1]
    let b22 = matrix2[2 * 3 + 2]
    return [
        b00 * a00 + b01 * a10 + b02 * a20,
        b00 * a01 + b01 * a11 + b02 * a21,
        b00 * a02 + b01 * a12 + b02 * a22,
        b10 * a00 + b11 * a10 + b12 * a20,
        b10 * a01 + b11 * a11 + b12 * a21,
        b10 * a02 + b11 * a12 + b12 * a22,
        b20 * a00 + b21 * a10 + b22 * a20,
        b20 * a01 + b21 * a11 + b22 * a21,
        b20 * a02 + b21 * a12 + b22 * a22
    ]
}