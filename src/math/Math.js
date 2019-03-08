/**
 * Converting radians to degrees
 * @param {Number} radians
 * @return {Number} degrees
 */
export function radToDeg(radians) {
    return radians * 180 / Math.PI;
}

/**
 * Converting degrees to radians
 * @param {Number} degrees
 * @return {Number} radians
 */
export function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

/**
 * Returns true if value is square.
 * @param {Number} value 
 */
export function isPowerOf2 (value) {
    return (value & (value - 1)) === 0;
}