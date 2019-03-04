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
        this.addEventListener('load', () => {
            this.loaded = true
        })
        this.color = new Uint8Array([255, 255, 255, 255])
        this._textureBlockLocation = null
        
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
        this.normals = [
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
        ]
        this._vertexesBuffer = null
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
        this._coordsBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._coordsBuffer)
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.textureCoords), this.webGL.STATIC_DRAW)
    }

    /**
     * Setting vertexes array.
     * @param {Array[Number]} vertexes
     */
    setVertexes (vertexes) {
        this.vertexes = vertexes
        this._vertexesBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._vertexesBuffer)
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webGL.STATIC_DRAW);
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

    /**
     * Setting coordinates for rotation point
     * @param {Number} x
     * @param {Number} y 
     * @param {Number} z 
     */
    setRotationPoint (x, y, z) {
        this.rotationPoint = [x, y, z]
    }

    /**
     * Setting rotation values of parent object
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    setParentRotation (x, y, z) {
        this.parentRotation = [x, y, z]
    }

    /**
     * Update function. Can be overloaded for creation animation or smth else.
     */
    update () {
        
    }

    /**
     * Set normals for this polygon.
     * @param {array} normals 3 normals vector. 
     */
    setNormals (normals) {
        this.normals = normals
        this._normalBuffer = this.webGL.createBuffer();
            this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._normalBuffer);
            this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.normals), this.webGL.STATIC_DRAW);
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
        this.setNormals([
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
        ])
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
        this.polygons[0].setVertexes([
            0, 0, 0,
            width, height, 0,
            0, height, 0,
            
        ])
        this.polygons[1].setVertexes([
            width, height, 0,
            0, 0, 0,
            width, 0, 0
        ])
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

    /**
     * Seting rotation of parent object in radians
     * @param {Number} x parent rotation of x axis in radians
     * @param {Number} y parent rotation of y axis in radians
     * @param {Number} z parent rotation of z axis in radians
     */
    setParentRotation (x, y, z) {
        this.polygons[0].setParentRotation(x, y, z)
        this.polygons[1].setParentRotation(x, y, z)
    }

    /**
     * Sets rotation point coordinats
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    setRotationPoint (x, y, z) {
        this.polygons[0].setRotationPoint(x, y, z)
        this.polygons[1].setRotationPoint(x, y, z)
    }

    /**
     * Set normals vector
     * @param {Array} normals 3:3 array. Every 3 elements is a vector of normal 
     */
    setNormals (normals) {
        this.polygons[0].setNormals(normals)
        this.polygons[1].setNormals(normals)
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
        this.faces[0].setPosition(0, 0, 0)
        this.faces[0].setNormals([
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
        ])
        
        this.faces[1].rotate(0, 90, 0)
        this.faces[1].setRotationPoint(-100, -100, 100)
        this.faces[1].position = [0, 0, 0]
        this.faces[1].setNormals([
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
        ])

        this.faces[2].rotate(0, -180, 0)
        this.faces[2].setRotationPoint(-100, -100, 100)
        this.faces[2].position = [0, 0, 0]
        this.faces[2].setNormals([
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
        ])

        this.faces[3].rotate(0, 270, 0)
        this.faces[3].setRotationPoint(-100, -100, 100)
        this.faces[3].position = [0, 0, 0]
        this.faces[3].setNormals([
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
        ])

        this.faces[4].rotate(-90, 0, 0)
        this.faces[4].setRotationPoint(-100, -100, 100)
        this.faces[4].position = [0, 0, 0]
        this.faces[4].setNormals([
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
        ])

        this.faces[5].rotate(90, 0, 0)
        this.faces[5].setRotationPoint(-100, -100, 100)
        this.faces[5].position = [0, 0, 0]
        this.faces[5].setNormals([
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
        ])
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
        this.rotate(0, 0, 0)
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


class Face {
    constructor (string) {
        this.vertexesPosition = []
        this.texturePosition = []
        let values = string.split(' ')
        for (let i = 1; i < values.length; i++) {
            const element = values[i].split('/');
            this.vertexesPosition.push(element[0])
            this.texturePosition.push(element[1])
        }
    }
}


class Object {
    constructor (engine) {
        engine.objects.push(this)
        this.webGL = engine.webGL

        this.texture = engine.noTexture
        this.position = [0, 0, 0]
        this.rotation = [0, 0, 0]
        this.scaling = [1, 1, 1]
        this.rotationPoint = [0, 0, 0]
        this.parentRotation = [0, 0, 0]

        this.faces = []
        this.collisionBoxes = []
        }

    /**
     * Setting texture for object.
     * @param {Texture} texture 
     */
    setTexture (texture) {
        this.texture = texture
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

    /**
     * Setting coordinates for rotation point
     * @param {Number} x
     * @param {Number} y 
     * @param {Number} z 
     */
    setRotationPoint (x, y, z) {
        this.rotationPoint = [x, y, z]
    }

    /**
     * Setting rotation values of parent object
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    setParentRotation (x, y, z) {
        this.parentRotation = [x, y, z]
    }

    scale (x, y, z) {
        this.scaling = [x, y, z]
    }

    /**
     * Default animation function for overload
     */
    animation () {
        this.rotate(0, 0, 0)
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

    /**
     * Function to compile object from text of .obj file.
     * @param {String} fileText
     */
    compile(fileText) {
        let vertexes = []
        let textureCoords = []
        let normals = []
        let splited = fileText.split('\n')
        let collisionBox = {
            x: [0, 0],
            y: [0, 0],
            z: [0, 0]
        }
        splited.forEach(element => {
            let values = element.split(' ')
            let name = 0
            
            for(let i = values.length; i--;){
                if (values[i] == "" || values[i] == "\r")
                    values.splice(i, 1);
            }

            if (values[name] == 'v') {
                let v1 = parseFloat(values[1])
                let v2 = parseFloat(values[2])
                let v3 = parseFloat(values[3])
                if (collisionBox.x[1] < v1) {
                    collisionBox.x[1] = v1 
                }
                if (collisionBox.y[1] < v2) {
                    collisionBox.y[1] = v2 
                }
                if (collisionBox.z[1] < v3) {
                    collisionBox.z[1] = v3 
                }
                if (collisionBox.x[0] > v1) {
                    collisionBox.x[0] = v1 
                }
                if (collisionBox.y[0] > v2) {
                    collisionBox.y[0] = v2 
                }
                if (collisionBox.z[0] > v3) {
                    collisionBox.z[0] = v3 
                }
                vertexes.push([v1, v2, v3])
            } else if (values[name] == 'vn') {
                normals.push([parseFloat(values[1]), 
                                   parseFloat(values[2]),
                                   parseFloat(values[3])])
            } else if (values[name] == 'vt') {
                textureCoords.push([parseFloat(values[1]), 
                                   parseFloat(values[2])])
            } else if (values[name] == "f") {
                for (let i = 1; i < values.length; i++) {
                    const face = values[i].split('/');
                    if (face[length - 1] == "\r") {
                        break;
                    }
                    let faceVertexes = null, faceTextureCoords = null, faceNormals
                    for (let k = 0; k < this.faces.length; k++) {
                        const element = this.faces[k];
                        if (element.vertexesCount == values.length - 1) {
                            faceVertexes = element.vertexes
                            faceTextureCoords = element.textureCoords
                            faceNormals = element.normals
                        }
                    }
                    if (faceVertexes == null) {
                        this.faces.push({
                            vertexesCount: values.length - 1,
                            vertexes: [],
                            textureCoords: [],
                            normals: []
                        })
                        faceVertexes = this.faces[this.faces.length - 1].vertexes
                        faceTextureCoords = this.faces[this.faces.length - 1].textureCoords
                        faceNormals = this.faces[this.faces.length - 1].normals
                    } 
                    let vertexPosition = parseFloat(face[0])
                        if (vertexPosition < 0) vertexPosition = vertexes.length + vertexPosition + 1
                    let textureCoordPosition = parseFloat(face[1])
                        if (textureCoordPosition < 0) textureCoordPosition = textureCoords.length + textureCoordPosition + 1 
                    let normalPosition = parseFloat(face[2])
                        if (normalPosition < 0) normalPosition = normals.length + normalPosition + 1
                    vertexes[vertexPosition - 1].forEach(vertex => {
                        faceVertexes.push(vertex)
                    })
                    if (textureCoords.length > 0) {
                        textureCoords[textureCoordPosition - 1].forEach(textureCoord => {
                            faceTextureCoords.push(textureCoord)
                        })
                    }
                    
                    if (face[2] != undefined) {
                        normals[normalPosition - 1].forEach(normal => {
                            faceNormals.push(normal)
                        })
                    } else {
                        faceNormals.push(0, 0, 0)
                    }
                }
            }
        });
        for (let i = 0; i < this.faces.length; i++) {
            const element = this.faces[i];
            element.vertexesBuffer = this.webGL.createBuffer()
            this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, element.vertexesBuffer)
            this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(element.vertexes), this.webGL.STATIC_DRAW);

            element.coordsBuffer = this.webGL.createBuffer()
            this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, element.coordsBuffer)
            this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(element.textureCoords), this.webGL.STATIC_DRAW)
        
            element.normalBuffer = this.webGL.createBuffer();
            this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, element.normalBuffer);
            this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(element.normals), this.webGL.STATIC_DRAW);
        }
        // console.log(collisionBox)
        this.collisionBoxes.push(collisionBox)
    }

    /**
     * Async load object using ajax and compile on load.
     * @param {String} path 
     */
    loadFromObj (path) {
        let self = this
        let objectsLoader = new XMLHttpRequest();
        objectsLoader.open('GET', path);
        objectsLoader.onreadystatechange = function() {
            if (objectsLoader.readyState == 4) {
                self.compile(objectsLoader.responseText)
            }
        }
        objectsLoader.send();

        
    }
}