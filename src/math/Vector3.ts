export class Vector3 {
  [key: string]: any
  public x: number = 0
  public y: number = 0
  public z: number = 0

  constructor(x: number, y: number, z: number) {
    this.set(x, y, z)
  }

  public set(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }

  public move(x: number, y: number, z: number) {
    this.x += x
    this.y += y
    this.z += z
  }

  public moveArray (array: number[]) {
    this.x += array[0]
    this.y += array[1]
    this.z += array[2]
  }

  public scale(x: number, y: number, z: number) {
    this.x *= x
    this.y *= y
    this.z *= z
  }

  public toArray() {
    return [this.x, this.y, this.z]
  }

  public copy (): Vector3 {
    return Object.assign(new Vector3(0, 0, 0), this)
  }

  public add (vector: Vector3): void {
    this.x += vector.x
    this.y += vector.y
    this.z += vector.z
  }

  public sub(vector: Vector3): void {
    this.x -= vector.x
    this.y -= vector.y
    this.z -= vector.z
  }

  public fromArray(array: number[]) {
    this.x = array[0]
    this.y = array[1]
    this.z = array[2]
  }
}

/**
 * Normalize a vector.
 */
export function normalize(vector: Vector3): Vector3 | null {
  let length = Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
  if (length > 0.00001) {
    vector.x = vector.x / length;
    vector.y = vector.y / length;
    vector.z = vector.z / length;
    return vector
  }
  else {
    return null
  }
}

/**
 * Returns rotation matrix for x axis.
 * @public
 */
export function rotationX(angle: number) {
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
 */
export function rotationY(angle: number): number[] {
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
export function rotationZ(angle: number): number[] {
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
export function vecMultiply(matrix: number[], vector3: Vector3): number[] {
  let c1 = matrix[0] * vector3.x + matrix[1] * vector3.y + matrix[2] * vector3.z
  let c2 = matrix[3] * vector3.x + matrix[4] * vector3.y + matrix[5] * vector3.z
  let c3 = matrix[6] * vector3.x + matrix[7] * vector3.y + matrix[8] * vector3.z
  return [c1, c2, c3]
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

/**
 * Return distance between two vectors.
 * @public
 */
export function distance(vector1: Vector3, vector2: Vector3): number {
  let squareSum = 0
  squareSum += (vector1.x - vector2.x) * (vector1.x - vector2.x)
  squareSum += (vector1.y - vector2.y) * (vector1.y - vector2.y)
  squareSum += (vector1.z - vector2.z) * (vector1.z - vector2.z)
  return Math.sqrt(squareSum)
}

export function length(vector: Vector3): number {
  return Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
}

export function angleBetweenVectors(vector1: Vector3, vector2: Vector3): number {
  let mul = vector1.x * vector2.x + vector1.y * vector2.y + vector1.z * vector2.z
  return mul / (length(vector1) * length(vector2))
}

export default {
  Vector3
}