export default class Vector2 {
  [key: string]: any
  public x: number = 0
  public y: number = 0

  constructor(x: number, y: number) {
    this.set(x, y)
  }

  public set(x: number, y: number) {
    this.x = x
    this.y = y
  }

  public move(x: number, y: number) {
    this.x += x
    this.y += y
  }

  public toArray() {
    return [this.x, this.y, this.z]
  }
}

/**
 * Normalize a vector.
 */
export function normalize(vector: Vector2): Vector2 | null {
  let length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
  if (length > 0.00001) {
    vector.x = vector.x / length;
    vector.y = vector.y / length;
    return vector
  }
  else {
    return null
  }
}

/**
 * @returns [x, y, z] result of multiplying matrix and vector.
 * @public
 */
export function vec2Multiply(matrix: number[], vector2: Vector2): number[] {
  let c1 = matrix[0] * vector2.x + matrix[1] * vector2.y
  let c2 = matrix[3] * vector2.x + matrix[4] * vector2.y
  return [c1, c2,]
}

/**
 * Returns multiply of two matrixes.
 */
export function multiply(matrix1: Array<number>, matrix2: Array<number>) {
  let a00 = matrix1[0 * 3 + 0]
  let a01 = matrix1[0 * 3 + 1]
  let a02 = matrix1[0 * 3 + 2]
  let a10 = matrix1[1 * 3 + 0]
  let a11 = matrix1[1 * 3 + 1]
  let a12 = matrix1[1 * 3 + 2]
  let b00 = matrix2[0 * 3 + 0]
  let b01 = matrix2[0 * 3 + 1]
  let b10 = matrix2[1 * 3 + 0]
  let b11 = matrix2[1 * 3 + 1]
  return [
    b00 * a00 + b01 * a10,
    b00 * a01 + b01 * a11,
    b00 * a02 + b01 * a12,
    b10 * a00 + b11 * a10,
    b10 * a01 + b11 * a11,
    b10 * a02 + b11 * a12,
  ]
}

/**
 * Return distance between two vectors.
 * @public
 */
export function distance(vector1: Vector2, vector2: Vector2): number {
  let squareSum = 0
  squareSum += (vector1.x - vector2.x) * (vector1.x - vector2.x)
  squareSum += (vector1.y - vector2.y) * (vector1.y - vector2.y)
  return Math.sqrt(squareSum)
}

export {
  Vector2
}