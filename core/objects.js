class Texture extends Image {
    /**
     * Texture for polygons.
     * @param {String} path - path to image location.
     * @param {Number} [width] - custom width for image.
     * @param {Number} [height] - custom height for image.
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
     * @param {Number} x
     * @param {Number} y
     */
    scale (x, y) {
        this.width = width * x
        this.height = height * y
    }

    /**
     * Setting texture coords.
     * @param {Array} coords 
     */
    setCoords (coords) {
        this.coords = coords
    }

    /**
     * Setting color of polygon. The color will be shown until the texture is loaded.
     * @param {Number} r red value from 0 to 255.
     * @param {Number} g green value from 0 to 255.
     * @param {Number} b blue value from 0 to 255.
     * @param {Number} a alpha value from 0 to 255.
     */
    setColorRGBA (r, g, b, a) {
        this.color = new Uint8Array([r, g, b, a])
    }
}


class Polygon {
    /**
     * Triangle polygon.
     * @param {Engine} core Engine object to which the polygon will be attached.
     */
    constructor (engine) {
        if (engine) {
            engine.polygons.push(this)
        }
        this.webGL = engine.webGL
        this.points = []
        this.texture = null
        this.vertexes = []
        this.position = [0, 0, 0]
        this.rotation = [0, 0, 0]
    }

    /**
     * Setting texture for polygon.
     * @param {Texture} texture 
     */
    setTexture (texture) {
        this.texture = texture
    }

    /**
     * Setting texture coords.
     * @param {Array} coords array of coords of texture.
     */
    setTextureCoords (coords) {
        this.textureCoords = coords
    }

    /**
     * Setting vertexes array.
     * @param {Array[Number]} vertexes
     */
    setVertexes (vertexes) {
        this.vertexes = vertexes
    }

    /**
     * Translate polygon for x,y,z pixels.
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    setPosition (x, y, z) {
        this.position[0] = x
        this.position[1] = y
        this.position[2] = z
    }

    /**
     * Rotate for x, y, z axis.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    rotate (x, y, z) {
        this.rotation[0] = x
        this.rotation[1] = y
        this.rotation[2] = z
    }

    /**
     * Update function. Can be overloaded for creation animation or smth else.
     */
    update () {

    }
}


class Rect {
    /**
     * Flat rectangle with square texture.
     * @param {Engine} engine 
     */
    constructor (engine) {
        this.polygons = new Array(2)
        let p = new Polygon(engine)
            p.setVertexes([
                0, 0, 0,
                0, 100, 0,
                100, 100, 0
            ])
            p.setTextureCoords([
                0, 0,
                0, 1,
                1, 1
            ])
        this.polygons[0] = p
            p = new Polygon(engine)
            p.setVertexes([
                0, 0, 0,
                100, 100, 0,
                100, 0, 0,
            ])
            p.setTextureCoords([
                0, 0,
                1, 1,
                1, 0
            ])
        this.polygons[1] = p
    }

    /**
     * Setting square texture for rect
     * @param {Texture} texture
     */
    setTexture (texture) {
        this.polygons[0].setTexture(texture)
        this.polygons[1].setTexture(texture)
    }

    /**
     * Changing size of rect
     * @param {Number} width
     * @param {Number} height
     */
    setSize (width, height) {
        this.polygons[0].vertexes = [
            0, 0, 0,
            0, height, 0,
            width, height, 0
        ]
        this.polygons[1].vertexes = [
            0, 0, 0,
            width, height, 0,
            width, 0, 0
        ]
    }

    /**
     * Change position of all polygons in rect.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    setPosition(x, y, z) {
        this.polygons[0].setPosition(x, y, z)
        this.polygons[1].setPosition(x, y, z)
    }

    /**
     * Set rotation for x, y, z axis.
     * @param {*} x in deg
     * @param {*} y in deg
     * @param {*} z in deg
     */
    rotate(x, y, z) {
        let xrad = degToRad(x)
        let yrad = degToRad(y)
        let zrad = degToRad(z)
        this.polygons[0].rotate(xrad, yrad, zrad)
        this.polygons[1].rotate(xrad, yrad, zrad)
    }
}


class Cube {
    /**
     * Cube object. Not finished.
     * @param {Engine} engine engine object where cube need to be attached.
     */
    constructor (engine) {
        engine.objects.push(this)
        this.position = [0, 0, 0]
        this.faces = []
        this.size = [10, 10, 10]
        this.faces.push(createSquarePolygon())
    }

    createSquarePolygon () {
        let a = new Array(2)
        let p = new Polygon(engine)
            p.setVertexes([
                0, 0, 0,
                0, 100, 0,
                100, 100, 0,
                100, 0, 0,
                0, 0, 0
            ])
            p.setTextureCoords([
                0, 0,
                0, 1,
                1, 1
            ])
            a[0] = p
            p = new Polygon(engine)
            p.setVertexes([
                0, 0, 0,
                100, 100, 0,
                100, 0, 0,
            ])
            p.setTextureCoords([
                0, 0,
                1, 1,
                1, 0
            ])
            a[1] = p
    }
}