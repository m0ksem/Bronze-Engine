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
        this.coords = [
            
        ]
        this.addEventListener('load', function () {
            this.loaded = true
        })
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

    /**
     * Setting texture coords
     * @param {Array} coords 
     */
    setCoords (coords) {
        this.coords = coords
    }

    /**
     * Setting color of polygon. The color will be shown until the texture is loaded.
     * @param {Int32} r red value from 0 to 255
     * @param {Int32} g green value from 0 to 255
     * @param {Int32} b blue value from 0 to 255
     * @param {Int32} a alpha value from 0 to 255
     */
    setColorRGBA (r, g, b, a) {
        this.color = new Uint8Array([r, g, b, a])
    }

    /**
     * Setting color of polygon. The color will be shown until the texture is loaded.
     * @param {Int32} r red value from 0 to 255
     * @param {Int32} g green value from 0 to 255
     * @param {Int32} b blue value from 0 to 255
     * @param {Int32} a alpha value from 0 to 255
     */
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

    /**
     * Transform vertexes array to array buffer for WebGL.
     * @returns WebGL array buffer.
     */
    vertexesToBuffer () {
        return new Float32Array(this.vertexes)
    }

    

    update () {

    }

    /**
     * Drawing polygon.
     */
    draw() {

    }
}
