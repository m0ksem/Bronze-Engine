/**
 * Returns unit matrix.
 */
export function unit(): Array<number> {
  return [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ]
}

/**
 * Setting this matrix as perspective projection matrix.
 * @param fieldOfViewInRadians fieldOfView of camera.
 * @param width canvas width.
 * @param height canvas height.
 * @param near range of drawn z-coordinates start.
 * @param far range of drawn z-coordinates end.
 * @public
 */
export function perspective(fieldOfViewInRadians: number, width: number, height: number, near: number, far: number): Array<number> {
  let f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians)
  let rangeInv = 1.0 / (near - far)

  return [
    f / (width / height), 0, 0, 0,
    0, f, 0, 0,
    0, 0, (near + far) * rangeInv, -1,
    0, 0, near * far * rangeInv * 2, 0
  ]
}

/**
 * Sets this matrix to projection matrix without perspective.
 * @param width 
 * @param height
 */
export function projection(width: number, height: number) {
  return [
    2 / width, 0, 0, 0,
    0, -2 / height, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1,
  ]
}

/**
 * Returns translation matrix.
 */
export function translation(x: number, y: number, z: number): Array<number> {
  return [
    1, 0, 0, 0,
    0, 1, 0, 0,
    0, 0, 1, 0,
    x, y, z, 1
  ]
}

/**
 * Translate matrix by X
 * @param matrix 
 * @param x 
 */
export function translateX(matrix: number[], x: number) {
  return [
    matrix[0],
    matrix[1],
    matrix[2],
    matrix[3],
    matrix[4],
    matrix[5],
    matrix[6],
    matrix[7],
    matrix[8],
    matrix[9],
    matrix[10],
    matrix[11],
    x * matrix[0] + matrix[12],
    x * matrix[1] + matrix[13],
    x * matrix[2] + matrix[14],
    x * matrix[3] + matrix[15],
  ]
}

/**
 * Translate matrix by Y
 * @param matrix 
 * @param y
 */
export function translateY(matrix: number[], y: number) {
  return [
    matrix[0],
    matrix[1],
    matrix[2],
    matrix[3],
    matrix[4],
    matrix[5],
    matrix[6],
    matrix[7],
    matrix[8],
    matrix[9],
    matrix[10],
    matrix[11],
    y * matrix[4] + matrix[12],
    y * matrix[5] + matrix[13],
    y * matrix[6] + matrix[14],
    y * matrix[7] + matrix[15],
  ]
}

/**
 * Translate matrix by Z
 * @param matrix 
 * @param z
 */
export function translateZ(matrix: number[], z: number) {
  return [
    matrix[0],
    matrix[1],
    matrix[2],
    matrix[3],
    matrix[4],
    matrix[5],
    matrix[6],
    matrix[7],
    matrix[8],
    matrix[9],
    matrix[10],
    matrix[11],
    z * matrix[8] + matrix[12],
    z * matrix[9] + matrix[13],
    z * matrix[10] + matrix[14],
    z * matrix[11] + matrix[15],
  ]
}

/**
 * Returns rotation matrix for x axis.
 */
export function rotationX(angle: number): Array<number> {
  let c = Math.cos(angle)
  let s = Math.sin(angle)

  return [
    1, 0, 0, 0,
    0, c, s, 0,
    0, -s, c, 0,
    0, 0, 0, 1
  ]
}

/**
 * Returns rotation matrix for y axis.
 */
export function rotationY(angle: number): Array<number> {
  let c = Math.cos(angle)
  let s = Math.sin(angle)

  return [
    c, 0, -s, 0,
    0, 1, 0, 0,
    s, 0, c, 0,
    0, 0, 0, 1
  ]
}

/**
 * Returns rotation matrix for z axis.
 */
export function rotationZ(angle: number): Array<number> {
  let c = Math.cos(angle)
  let s = Math.sin(angle)

  return [
    c, s, 0, 0,
    -s, c, 0, 0,
    0, 0, 1, 0,
    0, 0, 0, 1
  ]
}

/**
 * Returns scaling matrix for every axis.
 */
export function scaling(x: number, y: number, z: number): Array<number> {
  return [
    x, 0, 0, 0,
    0, y, 0, 0,
    0, 0, z, 0,
    0, 0, 0, 1
  ]
}

/**
 * Return matrix of all three rotations
 * @param {number} x angle
 * @param {number} y angle
 * @param {number} z angle
 */
export function rotation(x: number, y: number, z: number): Array<number> {
  return multiply(multiply(rotationX(x), rotationY(y)), rotationZ(z))
}

/**
 * Returns multiply of two matrixes.
 */
export function multiply(matrix1: Array<number>, matrix2: Array<number>): Array<number> {
  let a00 = matrix1[0 * 4 + 0]
  let a01 = matrix1[0 * 4 + 1]
  let a02 = matrix1[0 * 4 + 2]
  let a03 = matrix1[0 * 4 + 3]
  let a10 = matrix1[1 * 4 + 0]
  let a11 = matrix1[1 * 4 + 1]
  let a12 = matrix1[1 * 4 + 2]
  let a13 = matrix1[1 * 4 + 3]
  let a20 = matrix1[2 * 4 + 0]
  let a21 = matrix1[2 * 4 + 1]
  let a22 = matrix1[2 * 4 + 2]
  let a23 = matrix1[2 * 4 + 3]
  let a30 = matrix1[3 * 4 + 0]
  let a31 = matrix1[3 * 4 + 1]
  let a32 = matrix1[3 * 4 + 2]
  let a33 = matrix1[3 * 4 + 3]
  let b00 = matrix2[0 * 4 + 0]
  let b01 = matrix2[0 * 4 + 1]
  let b02 = matrix2[0 * 4 + 2]
  let b03 = matrix2[0 * 4 + 3]
  let b10 = matrix2[1 * 4 + 0]
  let b11 = matrix2[1 * 4 + 1]
  let b12 = matrix2[1 * 4 + 2]
  let b13 = matrix2[1 * 4 + 3]
  let b20 = matrix2[2 * 4 + 0]
  let b21 = matrix2[2 * 4 + 1]
  let b22 = matrix2[2 * 4 + 2]
  let b23 = matrix2[2 * 4 + 3]
  let b30 = matrix2[3 * 4 + 0]
  let b31 = matrix2[3 * 4 + 1]
  let b32 = matrix2[3 * 4 + 2]
  let b33 = matrix2[3 * 4 + 3]
  return [
    b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
    b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
    b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
    b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
    b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
    b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
    b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
    b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
    b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
    b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
    b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
    b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
    b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
    b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
    b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
    b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33
  ]
}

/**
 * Multiply matrix on scalar
 * @param scalar a number which will multiply matrix
 */
export function multiplyScalar(matrix: Array<number>, scalar: number): Array<number> {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] *= scalar;
  }
  return matrix
}

export function multiplyVector4(matrix: Array<number>, vector4: Array<number>): Array<number> {
  let c1 = matrix[0] * vector4[0] + matrix[1] * vector4[1] + matrix[2] * vector4[2] + matrix[3] * vector4[3]
  let c2 = matrix[4] * vector4[0] + matrix[5] * vector4[1] + matrix[6] * vector4[2] + matrix[7] * vector4[3]
  let c3 = matrix[8] * vector4[0] + matrix[9] * vector4[1] + matrix[10] * vector4[2] + matrix[11] * vector4[3]
  let c4 = matrix[12] * vector4[0] + matrix[13] * vector4[1] + matrix[14] * vector4[2] + matrix[15] * vector4[3]
  return [c1, c2, c3, c4]
}

/**
 * Transform vector by matrix
 * @returns vector4 [x, y, z, w]
 */
export function transformVector(matrix: Array<number>, vector4: Array<number>): Array<number> {
  let transformed = new Array(4);
  for (var i = 0; i < 4; ++i) {
    transformed[i] = 0.0;
    for (var j = 0; j < 4; ++j) {
      transformed[i] += vector4[j] * matrix[j * 4 + i];
    }
  }
  return transformed;
}

/**
 * Computes the inverse of a matrix.
 * @param  matrix matrix to compute inverse of.
 * @return new result matrix.
 * @public
 */
export function inverse(matrix: Array<number>): Array<number> {
  let result = new Array(16);
  let m00 = matrix[0 * 4 + 0];
  let m01 = matrix[0 * 4 + 1];
  let m02 = matrix[0 * 4 + 2];
  let m03 = matrix[0 * 4 + 3];
  let m10 = matrix[1 * 4 + 0];
  let m11 = matrix[1 * 4 + 1];
  let m12 = matrix[1 * 4 + 2];
  let m13 = matrix[1 * 4 + 3];
  let m20 = matrix[2 * 4 + 0];
  let m21 = matrix[2 * 4 + 1];
  let m22 = matrix[2 * 4 + 2];
  let m23 = matrix[2 * 4 + 3];
  let m30 = matrix[3 * 4 + 0];
  let m31 = matrix[3 * 4 + 1];
  let m32 = matrix[3 * 4 + 2];
  let m33 = matrix[3 * 4 + 3];
  let tmp_0 = m22 * m33;
  let tmp_1 = m32 * m23;
  let tmp_2 = m12 * m33;
  let tmp_3 = m32 * m13;
  let tmp_4 = m12 * m23;
  let tmp_5 = m22 * m13;
  let tmp_6 = m02 * m33;
  let tmp_7 = m32 * m03;
  let tmp_8 = m02 * m23;
  let tmp_9 = m22 * m03;
  let tmp_10 = m02 * m13;
  let tmp_11 = m12 * m03;
  let tmp_12 = m20 * m31;
  let tmp_13 = m30 * m21;
  let tmp_14 = m10 * m31;
  let tmp_15 = m30 * m11;
  let tmp_16 = m10 * m21;
  let tmp_17 = m20 * m11;
  let tmp_18 = m00 * m31;
  let tmp_19 = m30 * m01;
  let tmp_20 = m00 * m21;
  let tmp_21 = m20 * m01;
  let tmp_22 = m00 * m11;
  let tmp_23 = m10 * m01;

  let t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -
    (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
  let t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) -
    (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
  let t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) -
    (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
  let t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -
    (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);

  let d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);

  result[0] = d * t0;
  result[1] = d * t1;
  result[2] = d * t2;
  result[3] = d * t3;
  result[4] = d * ((tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30) -
        (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
  result[5] = d * ((tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30) -
        (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
  result[6] = d * ((tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30) -
        (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
  result[7] = d * ((tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20) -
        (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
  result[8] = d * ((tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33) -
        (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
  result[9] = d * ((tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33) -
        (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
  result[10] = d * ((tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33) -
        (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
  result[11] = d * ((tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23) -
        (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
  result[12] = d * ((tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12) -
        (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
  result[13] = d * ((tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22) -
        (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
  result[14] = d * ((tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02) -
        (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
  result[15] = d * ((tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12) -
        (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));

  return result;
}

/**
 * Computes the transpose of a matrix.
 * @param matrix matrix to compute inverse of.
 * @return  new result matrix.
 * @public
 */
export function transpose(matrix: Array<number>): Array<number> {
  let new_matrix = [0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0]

  new_matrix[0] = matrix[0];
  new_matrix[1] = matrix[4];
  new_matrix[2] = matrix[8];
  new_matrix[3] = matrix[12];
  new_matrix[4] = matrix[1];
  new_matrix[5] = matrix[5];
  new_matrix[6] = matrix[9];
  new_matrix[7] = matrix[13];
  new_matrix[8] = matrix[2];
  new_matrix[9] = matrix[6];
  new_matrix[10] = matrix[10];
  new_matrix[11] = matrix[14];
  new_matrix[12] = matrix[3];
  new_matrix[13] = matrix[7];
  new_matrix[14] = matrix[11];
  new_matrix[15] = matrix[15];

  return new_matrix;
}
