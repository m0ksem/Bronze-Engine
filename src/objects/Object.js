export class Object {
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

    move (x, y, z) {
        this.position[0] += x
        this.position[1] += y
        this.position[2] += z
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
