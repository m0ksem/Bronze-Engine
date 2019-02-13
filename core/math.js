class Vector2 {
    constructor (x, y) {
        this.x = x
        this.y = y
    }
    set () {
        this.x = x
        this.y = y
    }
    addScalar (a, b) {
        this.x = a
        this.y = b
    }
}


class Vector3 {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
    set (x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
}

/**
 * Converting radians to degress
 * @param {Int32} rad radians
 * @return {Int32} degress
 */
function radToDeg(rad) {
    return deg * 180 / Math.PI;
}

/**
 * Converting degress to radians
 * @param {Int32} deg
 * @return {Int32} radians
 */
function degToRad(deg) {
    return deg * Math.PI / 180;
}


class MatrixesClass {
    /**
     * Returns translation matrix.
     * @param {Int32} x 
     * @param {Int32} y 
     * @param {Int32} z 
     */
    translation (x, y, z) {
        return [
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            x, y, z, 1
        ]
    }

    /**
     * Returns rotation matrix for x axis.
     * @param {Int32} angle angle in radians
     */
    rotationX (angle) {
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
     * @param {Int32} angle angle in radians
     */
    rotationY (angle) {
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
     * @param {Int32} angle angle in radians
     */
    rotationZ (angle) {
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
     * Returns scaling matrix for every axis
     * @param {Int32} x 
     * @param {Int32} y 
     * @param {Int32} z 
     */
    scaling (x, y, z) {
        return [
            x, 0, 0, 0,
            0, y, 0, 0,
            0, 0, z, 0,
            0, 0, 0, 1
        ]
    }
}


var Matrixes = new MatrixesClass()


class ProjectionMatrix {
    /**
     * Creating matrix Projection matrix.
     * @param {In32} width canvas width. 
     * @param {Int32} height canvas height.
     * @param {Int32} depth 
     */
    constructor (width, height, depth) {
        this.matrix = [
            2 / width, 0, 0, 0,
            0, -2 / height, 0, 0,
            0, 0, 2 / depth, 0,
            -1, 1, 0, 1
        ]
        return this
    }
    
    get () {
        return this.matrix
    }

    multiply (matrix) {
        let a00 = this.matrix[0 * 4 + 0];
        let a01 = this.matrix[0 * 4 + 1];
        let a02 = this.matrix[0 * 4 + 2];
        let a03 = this.matrix[0 * 4 + 3];
        let a10 = this.matrix[1 * 4 + 0];
        let a11 = this.matrix[1 * 4 + 1];
        let a12 = this.matrix[1 * 4 + 2];
        let a13 = this.matrix[1 * 4 + 3];
        let a20 = this.matrix[2 * 4 + 0];
        let a21 = this.matrix[2 * 4 + 1];
        let a22 = this.matrix[2 * 4 + 2];
        let a23 = this.matrix[2 * 4 + 3];
        let a30 = this.matrix[3 * 4 + 0];
        let a31 = this.matrix[3 * 4 + 1];
        let a32 = this.matrix[3 * 4 + 2];
        let a33 = this.matrix[3 * 4 + 3];
        let b00 = matrix[0 * 4 + 0];
        let b01 = matrix[0 * 4 + 1];
        let b02 = matrix[0 * 4 + 2];
        let b03 = matrix[0 * 4 + 3];
        let b10 = matrix[1 * 4 + 0];
        let b11 = matrix[1 * 4 + 1];
        let b12 = matrix[1 * 4 + 2];
        let b13 = matrix[1 * 4 + 3];
        let b20 = matrix[2 * 4 + 0];
        let b21 = matrix[2 * 4 + 1];
        let b22 = matrix[2 * 4 + 2];
        let b23 = matrix[2 * 4 + 3];
        let b30 = matrix[3 * 4 + 0];
        let b31 = matrix[3 * 4 + 1];
        let b32 = matrix[3 * 4 + 2];
        let b33 = matrix[3 * 4 + 3];
        let m = new ProjectionMatrix()
        m.matrix = [
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
            b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
        ];
        return m
    }

    /**
     * Multyplying matrix by transition matrix (x, y, z)
     * @param {Int32} x 
     * @param {Int32} y 
     * @param {Int32} z 
     */
    translate (x, y, z) {
        return this.multiply(this.matrix, Matrixes.translation(x, y, z));
    }

    /**
     * Multiplying matrix by rotationX(angle)
     * @param {Number} angle in radians 
     */
    rotateX (angle) {
        return this.multiply(this.matrix, Matrixes.rotationX(angle))
    }

    /**
     * Multiplying matrix by rotationY(angle)
     * @param {Number} angle in radians
     */
    rotateY (angle) {
        return this.multiply(this.matrix, Matrixes.rotationY(angle))
    }

    /**
     * Multiplying matrix by rotationZ(angle)
     * @param {Int32} angle in radians 
     */
    rotateZ (angle) {
        return this.multiply(this.matrix, Matrixes.rotationZ(angle))
    }


    /**
     * Multoplying matrix by scale matrix (x, y, z)
     * @param {Int32} x 
     * @param {Int32} y 
     * @param {Int32} z 
     */
    scale (x, y, z) {
        return this.multiply(this.matrix, Matrixes.scaling(x, y, z))
    }
}