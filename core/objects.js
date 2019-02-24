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
        this.rotationPoint = [0, 0, 0]
        this.parentRotation = [0, 0, 0]
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
     * Add rotation for x, y, z axis for current rotation.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    rotate (x, y, z) {
        this.rotation[0] += x
        this.rotation[1] += y
        this.rotation[2] += z
    }

    /**
     * Set rotate for x, y, z axis.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    setRotation (x, y, z) {
        this.rotation[0] = x
        this.rotation[1] = y
        this.rotation[2] = z
    }

    setRotationPoint (x, y, z) {
        this.rotationPoint = [x, y, z]
    }

    setParentRotation (x, y, z) {
        this.parentRotation = [x, y, z]
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
        this.position = [0, 0, 0]
        this.rotationPoint = [0, 0, 0]
        let p = new Polygon(engine)
            p.setVertexes([
                -100, 0, 0,
                0, 100, 0,
                100, 100, 0,
            ])
            p.setTextureCoords([
                0, 1,
                1, 0,
                0, 0,
            ])
        this.polygons[0] = p
            p = new Polygon(engine)
            p.setVertexes([
                0, 0, 0,
                0, 0, 0,
                0, 0, 0,
            ])
            p.setTextureCoords([
                1, 0,
                0, 1,
                1, 1,
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
        this.width = width
        this.height = height
        this.polygons[0].vertexes = [
            0, 0, 0,
            width, height, 0,
            0, height, 0,
            
        ]
        this.polygons[1].vertexes = [
            width, height, 0,
            0, 0, 0,
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
        this.position = [x, y, z]
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

    setParentRotation (x, y, z) {
        this.polygons[0].setParentRotation(x, y, z)
        this.polygons[1].setParentRotation(x, y, z)
    }

    setRotationPoint (x, y, z) {
        this.polygons[0].setRotationPoint(x, y, z)
        this.polygons[1].setRotationPoint(x, y, z)
    }
}

class Cube {
    /**
     * Flat rectangle with square texture.
     * @param {Engine} engine 
     */
    constructor (engine) {
        this.faces = [
            new Rect(engine), // front
            new Rect(engine), // right
            new Rect(engine), // back
            new Rect(engine), // left
            new Rect(engine), // top
            new Rect(engine)  // bottom
        ]
        this.position = [0, 0, 0]
        this.rotation = [0, 0, 0]

        this.faces[0].rotate(0, 0, 0)
        this.faces[0].setRotationPoint(-100, -100, 100)
        this.faces[0].position = [0, 0, 0]
        
        this.faces[1].rotate(0, 90, 0)
        this.faces[1].setRotationPoint(-100, -100, 100)
        this.faces[1].position = [0, 0, 0]

        this.faces[2].rotate(0, -180, 0)
        this.faces[2].setRotationPoint(-100, -100, 100)
        this.faces[2].position = [0, 0, 0]

        this.faces[3].rotate(0, 270, 0)
        this.faces[3].setRotationPoint(-100, -100, 100)
        this.faces[3].position = [0, 0, 0]

        this.faces[4].rotate(-90, 0, 0)
        this.faces[4].setRotationPoint(-100, -100, 100)
        this.faces[4].position = [0, 0, 0]

        this.faces[5].rotate(90, 0, 0)
        this.faces[5].setRotationPoint(-100, -100, 100)
        this.faces[5].position = [0, 0, 0]
    }

    _updateFaces () {
        this.faces[0].setPosition(this.position[0], this.position[1], this.position[2])
    }

    /**
     * Setting square texture for cube.
     * @param {Texture} front texture.
     * @param {Texture} right texture.
     * @param {Texture} back texture.
     * @param {Texture} left texture.
     * @param {Texture} top texture.
     * @param {Texture} bottom texture.
     */
    setTexture (front, right, back, left, top, bottom) {
        this.faces[0].setTexture(front)
        this.faces[1].setTexture(right)
        this.faces[2].setTexture(back)
        this.faces[3].setTexture(left)
        this.faces[4].setTexture(top)
        this.faces[5].setTexture(bottom)
    }

    /**
     * Changing size of rect
     * @param {Number} width
     * @param {Number} height
     */
    setSize (width, height, depth) {
        this.width = width
        this.height = height
        this.depth = depth
        this.faces.forEach(face => {
            face.setSize(width, height)
            face.setRotationPoint(-width / 2, -height / 2, depth / 2)
        });
    }

    /**
     * Change position of all polygons in rect.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    setPosition(x, y, z) {
        this.position = [x, y, z]
        this.faces[0].setPosition(x, y, z)
        this.faces[1].setPosition(x, y, z)
        this.faces[2].setPosition(x, y, z)
        this.faces[3].setPosition(x, y, z)
        this.faces[4].setPosition(x, y, z)
        this.faces[5].setPosition(x, y, z)
    }

    /**
     * Set rotation for x, y, z axis.
     * @param {*} x in deg
     * @param {*} y in deg
     * @param {*} z in deg
     */
    rotate(x, y, z) {
        this.rotation[0] += x
        this.rotation[1] += y
        this.rotation[2] += z
        let xrad = degToRad(this.rotation[0])
        let yrad = degToRad(this.rotation[1])
        let zrad = degToRad(this.rotation[2])
        this.faces.forEach(face => {
            face.setParentRotation(xrad, yrad, zrad)
        })
    }

    /**
     * Set rotation for x, y, z axis.
     * @param {*} x in deg
     * @param {*} y in deg
     * @param {*} z in deg
     */
    setRotation(x, y, z) {
        let xrad = degToRad(x)
        let yrad = degToRad(y)
        let zrad = degToRad(z)
        this.faces.forEach(face => {
            face.setParentRotation(xrad, yrad, zrad)
        })
    }

    animation () {
        this.rotate(1, 0, 0)
    }

    /**
     * 
     * @param {Number} fps 
     * @param {Function} [animateFucntion] default - animation function
     */
    animate (fps, animateFucntion) {
        animateFucntion = animateFucntion || this.animation
        setInterval(animateFucntion, 1000 / fps)
    }
}