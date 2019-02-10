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