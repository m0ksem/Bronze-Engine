/**
 * Converting radians to degrees.
 * @param radians
 * @return degrees
 */
export function radToDeg(radians: number) {
  return radians * 180 / Math.PI;
}

/**
 * Converting degrees to radians.
 * @param degrees
 * @return  radians
 */
export function degToRad(degrees: number) {
  return degrees * Math.PI / 180;
}

/**
 * Returns true if value is square.
 * @param value 
 */
export function isPowerOf2(value: number) {
  return (value & (value - 1)) === 0;
}

export default {
  radToDeg, degToRad, isPowerOf2
}