/**
 * Converting radians to degress
 * @param {Number} rad radians
 * @return {Number} degress
 */
export function radToDeg(rad) {
    return rad * 180 / Math.PI;
}

/**
 * Converting degress to radians
 * @param {Number} deg
 * @return {Number} radians
 */
export function degToRad(deg) {
    return deg * Math.PI / 180;
}

/**
 * Returns true if value is square.
 * @param {Number} value 
 */
export function isPowerOf2 (value) {
    return (value & (value - 1)) === 0;
}