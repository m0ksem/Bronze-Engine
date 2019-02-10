class Texture extends Image {
    /**
     * Texture for polygons.
     * @param {String} path path to image location.
     * @param {Int32} width [Optional] custom width for image.
     * @param {Int32} height [Optional] custom height for image.
     */
    constructor (path, width, height) {
        super()
        this.src = path
        if (width != null && height != null) {
            this.width = width
            this.height = height
        }
    }
    
    /**
     * Scale image width by x, height by y.
     * @param {Int32} x 
     * @param {Int32} y 
     */
    scale (x, y) {
        this.width = width * x
        this.height = height * y
    }
}


class Polygon {
    /**
     * Simply square polygon
     * @param {Engine} core Engine object to which the polygon will be attached.
     */
    constructor (engine) {
        engine.polygons.push(this)
        this.webGL = engine.webGL
        this.points = []
        this.texture = null
        this.vertexes = []
    }

    /**
     * Setting texture for polygon.
     * @param {Texture} texture 
     */
    setTexture (texture) {
        this.texture = texture
    }

    /**
     * Setting vertexes array.
     * 
     * @param {Vector3[]} vertexes
     * @param {Int32} array.x
     * @param {Int32} array.y
     */
    setVertexes (vertexes) {
        this.vertexes = vertexes
    }

    update () {

    }

    /**
     * Drawing polygon.
     */
    draw() {

    }
}
