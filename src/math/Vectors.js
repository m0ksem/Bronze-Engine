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