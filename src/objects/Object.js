import * as Matrixes from "../math/Matrixes"
import * as Math from '../math/Math'
import * as Vectors from '../math/Vectors'
 /**
 * Creates and bind to engine object. The object must be loaded from .obj file.
 * @class
 * @constructor
 * @param {Engine} engine 
 */
export class Object {
    constructor (engine) {
        engine.objects.push(this)
        
        /**
         * Engine where object attached.
         * @type {Engine}
         * @private
         */
        this.engine = engine

        this.shaderProgram = engine.shaders.default

        /**
         * WebGL context of engine
         * @private
         */
        this.webGL = engine.webGL

        /**
         * Camera of engine.
         * @type {Camera}
         * @private
         */
        this.camera = engine.camera

        /**
         * Object texture.
         * @type {Texture} texture
         * @public
         */
        this.texture = engine.noTexture

        /**
         * Object position vector. Maybe you need setPosition(), move() or moveRelativeToTheCamera() methods? It'd be more convenient to use.
         * @public
         * @type {Array.<{0: Number, 1: Number, 2: Number}>} vector 3 array
         * @property {Number} x position on axis x
         * @property {Number} y position on axis y
         * @property {Number} z position on axis z
         */
        this.position = [0, 0, 0]

        /**
         * Object rotation vector. Angles in radians. Maybe you need setRotation() or rotate() methods? It'd be more convenient to use.
         * @public
         * @type {Array.<{0: Number, 1: Number, 2: Number}>} vector 3 array
         * @property {Number} x rotation on axis x
         * @property {Number} y rotation on axis y
         * @property {Number} z rotation on axis z
         */
        this.rotation = [0, 0, 0]

        /**
         * Object scaling vector. Maybe you need scale() method? It'd be more convenient to use.
         * @public
         * @type {Array.<{0: Number, 1: Number, 2: Number}>} vector 3 array
         * @property {Number} x scaling on axis x
         * @property {Number} y scaling on axis x
         * @property {Number} z scaling on axis x
         */
        this.scaling = [1, 1, 1]

        /**
         * Object scaling vector. Angles in radians. Maybe you need setRotationPoint() method? It'd be more convenient to use.
         * @public
         * @type {Array.<{0: Number, 1: Number, 2: Number}>} vector 3 array
         * @property {Number} x rotation point coordinate on axis x
         * @property {Number} y rotation point coordinate on axis y
         * @property {Number} z rotation point coordinate on axis z
         */
        this.rotationPoint = [0, 0, 0]

        /**
         * Object scaling vector. Angles in radians. Maybe you need setParentRotation() method? It'd be more convenient to use.
         * @public
         * @type {Array.<{0: Number, 1: Number, 2: Number}>} vector 3 array
         * @property {Number} x parent rotation on axis x
         * @property {Number} y parent rotation on axis y
         * @property {Number} z parent rotation on axis z
         */
        this.parentRotation = [0, 0, 0]

        /**
         * These are the edges of the object on the monitor.
         * @readonly
         * @Type {Object}   
         * @property {Number} relativeCameraPosition.x.left
         * @property {Number} relativeCameraPosition.x.right
         * @property {Number} relativeCameraPosition.y.top
         * @property {Number} relativeCameraPosition.y.bottom
         * @property {Number} relativeCameraPosition.depth
         */
        this.relativeCameraPosition = null

        /**
         * Faces of object. Needs to draw object. Creates when object is compiled.
         * @readonly
         * @type {Array}
         */
        this.faces = []

        /**
         * Collision boxes coordinates array.
         * @type {
         *      x: Number[2],
         *      y: Number[2],
         *      z: Number[2]
         *  }
         * @property {Number[]} collisionBoxes.x contains array[2] of left and right x coords.
         * @property {Number[]} collisionBoxes.y contains array[2] of bottom and top y coords.
         * @property {Number[]} collisionBoxes.z contains array[2] of far and close z coords.
         * @public
         */
        this.collisionBoxes = []

        /**
         * Sets whether the object will be attached to the camera like UI element.
         * @type {boolean}
         * @public
         */
        this._UIElement = false

        /**
         * True if the object is behind the camera.
         * @type {boolean}
         * @readonly
         */
        this.behindTheCamera = false

        /**
         * Max and smallest coords of object by default without scaling.
         * @readonly
         */
        this.maxSizes = {
            x: {
                smallest: 0,
                biggest: 0
            },
            y: {
                smallest: 0,
                biggest: 0
            },
            z: {
                smallest: 0,
                biggest: 0
            }
        }

        /**
         * Size of object without scaling.
         * @readonly
         */
        this.size = [0, 0, 0]

        /**
         * Triggers when object load and compiled.
         * @type {Function}
         */
        this.onload = function () {
            return null
        }

        this._world = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        this._drawingMode = this.webGL.TRIANGLES
    }

    /**
     * @type {bool}
     */
    set UIElement (value) {
        this._UIElement = value
        if (value) {
            this.engine.ui.addObject(this)
        } else {
            this.engine.ui.removeObject(this)
        }
    }

    get UIElement () {
        return this._UIElement
    }

    /**
    * Sets custom shader program.
    * @param {ShaderProgram} shader shader program which object will use.
    */
    useShader(shader) {
        this.shaderProgram = shader
    }

    /**
     * Setting texture for object.
     * @param {Texture} texture 
     * @public
     */
    setTexture (texture) {
        this.texture = texture
        texture.object = this
        this.alpha = texture.alpha || false
    }

    /**
     * Translate polygon for x,y,z pixels.
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */
    setPosition (x, y, z) {
        if (!this._UIElement) {
            this.position[0] = x
            this.position[1] = y
            this.position[2] = z
        } else {
            this.position[0] = this.engine.width / 100 * x
            this.position[1] = -this.engine.height / 100 * y 
            this.position[2] = z
        }
    }

    /**
     * Adds values to position which moves object.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */
    move (x, y, z) {
        this.position[0] += x
        this.position[1] += y
        this.position[2] += z
    }

    /**
     * Moves object around x, y, z axis relative to the camera angles.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */
    moveRelativeToTheCamera (x, y, z) {
        let pos = [x, y, z, 1]
        pos = Matrixes.vec3Multiply(this.camera.rotationMatrix, pos)
        this.position[0] += pos[0]
        this.position[1] += pos[1]
        this.position[2] += pos[2]
    }

    /**
     * Add rotation for x, y, z axis for current rotation.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z
     * @public
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
     * @public 
     */
    setRotation (x, y, z) {
        this.rotation[0] = Math.degToRad(x)
        this.rotation[1] = Math.degToRad(y)
        this.rotation[2] = Math.degToRad(z)
    }

    /**
     * Setting coordinates for rotation point.
     * @param {Number} x
     * @param {Number} y 
     * @param {Number} z
     * @public
     */
    setRotationPoint (x, y, z) {
        this.rotationPoint = [x, y, z]
    }

    /**
     * Setting rotation values of parent object.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z
     * @public
     */
    setParentRotation (x, y, z) {
        this.parentRotation = [x, y, z]
    }

    /**
     * Set scaling for object.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */
    scale (x, y, z) {
        this.scaling = [x, y, z]
    }

    /**
     * @returns {Number[]} array of sizes object by default
     * @public
     */
    getSize () {
        let size = [0, 0, 0]
        size[0] = Math.abs(this.maxSizes.x.smallest - this.maxSizes.x.biggest)
        size[1] = Math.abs(this.maxSizes.y.smallest - this.maxSizes.y.biggest)
        size[2] = Math.abs(this.maxSizes.z.smallest - this.maxSizes.z.biggest)
        return size
    }

    /**
     * Sets scaling for this object to scale object for pixel coords.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */
    scaleToPixels (x, y, z) {
        this.scaling = [
            x / this.size[0],
            y / this.size[1],
            z / this.size[2]
        ]
    }

    /**
     * Default animation function.
     * @private
     */
    animation () {
        this.rotate(0, 0, 0)
    }

    /**
     * Sets the animation function which execute every engine update.
     * @param {Number} fps
     * @param {Function} [animateFunction] default - animation function.
     * @public
     */
    animate (fps, animateFunction) {
        animateFunction = animateFunction || this.animation
        setInterval(animateFunction, 1000 / fps)
    }

    /**
     * Function detaches from engine. If you need to clean memory, you this method and then you default javascript operator `delete`.
     * @public
     */
    destroy() {
        this.engine.objects.splice(this.engine.objects.indexOf(this), 1)
    }

    /**
     * Function to compile object from text of .obj file.
     * @param {String} fileText
     * @public
     */
    compile (fileText) {
        let vertexes = []
        let textureCoords = []
        let normals = []
        let splitted = fileText.split('\n')
        let collisionBox = {
            x: [0, 0],
            y: [0, 0],
            z: [0, 0]
        }

        splitted.forEach(element => {
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
                // Transform 4 > faces to triangles 
                const faces = [values[1], values[2], values[3]]
                if ((values.length - 1) > 3) {
                    for (let i = 4; i < values.length; i++) {
                        faces.push(values[i - 3])
                        faces.push(values[i - 1])
                        faces.push(values[i])
                    }
                }

                let faceVertexes = null, faceTextureCoords, faceNormals
                for (let i = 0; i < faces.length; i++) {
                    const point = faces[i];
 
                    let indexes = point.split('/').map((el) => Number(el) )
                    
                    let allFacesCount = this.faces.length

                    for (let k = 0; k < allFacesCount; k++) {
                        const element = this.faces[k];
                        if (element.vertexesCount == 3) {
                            faceVertexes = element.vertexes
                            faceTextureCoords = element.textureCoords
                            faceNormals = element.normals
                        }
                    }
                    if (faceVertexes == null) {
                        this.faces.push({
                            vertexesCount: 3,
                            vertexes: [],
                            textureCoords: [],
                            normals: []
                        })
                        faceVertexes = this.faces[allFacesCount].vertexes
                        faceTextureCoords = this.faces[allFacesCount].textureCoords
                        faceNormals = this.faces[allFacesCount].normals
                    }

                    let vertexPosition = indexes[0]
                        if (vertexPosition <= 0) vertexPosition = vertexes.length + vertexPosition + 1
                    let textureCoordPosition = indexes[1]
                        if (textureCoordPosition < 0) textureCoordPosition = textureCoords.length + textureCoordPosition + 1
                    let normalPosition = indexes[2]
                        if (normalPosition < 0) normalPosition = normals.length + normalPosition + 1

                    vertexes[vertexPosition - 1].forEach((coord) => {
                        faceVertexes.push(coord)
                    })

                    if (textureCoordPosition != 0 && textureCoords[textureCoordPosition - 1] != undefined) {
                        textureCoords[textureCoordPosition - 1].forEach(textureCoord => {
                            faceTextureCoords.push(textureCoord)
                        })
                    } else {
                        faceTextureCoords.push(0)
                        faceTextureCoords.push(0)
                    }


                    if (indexes[2] != undefined) {
                        normals[normalPosition - 1].forEach(normal => {
                            faceNormals.push(normal)
                        })
                    } else {
                        faceNormals.push(1, 1, 1)
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

        this.maxSizes.x.smallest = collisionBox.x[0]
        this.maxSizes.x.biggest = collisionBox.x[1]
        this.maxSizes.y.smallest = collisionBox.y[0]
        this.maxSizes.y.biggest = collisionBox.y[1]
        this.maxSizes.z.smallest = collisionBox.z[0]
        this.maxSizes.z.biggest = collisionBox.z[1]
    
        this.collisionBoxes.push(collisionBox)
        this.size = this.getSize()
        this.engine.objectLoaded(this)
    }

    /**
     * Async load object using ajax and compile on load.
     * @param {String} path
     * @public
     */
    loadFromObj (path) {
        let self = this
        let objectsLoader = new XMLHttpRequest();
        objectsLoader.open('GET', path);
        objectsLoader.onreadystatechange = function() {
            if (objectsLoader.readyState == 4) {
                self.compile(objectsLoader.responseText)
                self.onload()
            }
        }
        objectsLoader.send();
    }

    /**
     * Sets how WebGL will draw object
     * @param {String} mode 
     */
    setDrawingMode (mode) {
        switch (mode) {
            case 'TRIANGLES':
                this._drawingMode = this.webGL.TRIANGLES
                break
            case 'DEFAULT':
                this._drawingMode = this.webGL.TRIANGLES
                break
            case 'TRIANGLE_FAN':
                this._drawingMode = this.webGL.TRIANGLE_FAN
                break
            case 'FAN':
                this._drawingMode = this.webGL.TRIANGLE_FAN
                break
            case 'STRIP':
                this.webGL.TRIANGLE_STRIP
                break
            case 'TRIANGLE_STRIP':
                this.webGL.TRIANGLE_STRIP
                break
            default:
             throw Error("Wrong drawing mode. See WebGL drawing mods.")
        }
    }

    set drawingMode (value) {
        this._drawingMode = value
    }

    get drawingMode () {
        return this._drawingMode
    }

    /**
     * Function to draw object.
     */
    draw () {
        this.shaderProgram.use()
        if (!this.behindTheCamera) {
            this.faces.forEach(face => {
                this.engine.webGL.enableVertexAttribArray(this.shaderProgram.positionLocation)
                this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, face.vertexesBuffer)
                this.engine.webGL.vertexAttribPointer(
                    this.shaderProgram.positionLocation, 3, this.engine.webGL.FLOAT, false, 0, 0
                )

                this.engine.webGL.enableVertexAttribArray(this.shaderProgram.texcoordLocation)
                this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, face.coordsBuffer)
                this.engine.webGL.vertexAttribPointer(
                    this.shaderProgram.texcoordLocation, 2, this.engine.webGL.FLOAT, false, 0, 0
                )

                this.engine.webGL.enableVertexAttribArray(this.shaderProgram.normalLocation);
                this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, face.normalBuffer);
                this.engine.webGL.vertexAttribPointer(
                    this.shaderProgram.normalLocation, 3, this.engine.webGL.FLOAT, false, 0, 0)

                this.engine.webGL.uniform1i(this.shaderProgram.textureLocation, this.texture._textureBlockLocation)
                this.engine.webGL.uniformMatrix4fv(this.shaderProgram.matrixLocation, false, this._matrix)
                this.engine.webGL.uniformMatrix4fv(this.shaderProgram.objectRotationLocation, false, this._rotationMatrix)
                this.engine.webGL.uniformMatrix4fv(this.shaderProgram.worldMatrixLocation, false, this._world)

                this.engine.webGL.drawArrays(this._drawingMode, 0, face.vertexes.length / 3)
      
                this.engine.drawCallsPerFrame++
                this.engine.drawCalls++
            })
        }
    }

    checkCollision(position, moving, movingObjectCollisionBox, callback) {
        this.collisionBoxes.forEach(collisionBox => {
            if (this.engine.camera.moved) {
                let maxPoint = [collisionBox.x[1], collisionBox.y[1], collisionBox.z[1], 1]
                let minPoint = [collisionBox.x[0], collisionBox.y[0], collisionBox.z[0], 1]

                maxPoint = Matrixes.transformVector(this._world, maxPoint)
                minPoint = Matrixes.transformVector(this._world, minPoint)

                this.engine.debugger.maxPoint = maxPoint
                this.engine.debugger.minPoint = minPoint

                if (maxPoint[0] < minPoint[0]) {
                    let temp = maxPoint[0]
                    maxPoint[0] = minPoint[0]
                    minPoint[0] = temp
                }
                let maxX = maxPoint[0] + movingObjectCollisionBox.x[1]
                let minX = minPoint[0] - movingObjectCollisionBox.x[0]
                if (maxPoint[1] < minPoint[1]) {
                    let temp = maxPoint[1]
                    maxPoint[1] = minPoint[1]
                    minPoint[1] = temp
                }
                let maxY = maxPoint[1] + movingObjectCollisionBox.y[1]
                let minY = minPoint[1] - movingObjectCollisionBox.y[0]
                if (maxPoint[2] < minPoint[2]) {
                    let temp = maxPoint[2]
                    maxPoint[2] = minPoint[2]
                    minPoint[2] = temp
                }
                let maxZ = maxPoint[2] + movingObjectCollisionBox.z[1]
                let minZ = minPoint[2] - movingObjectCollisionBox.z[0]

                let newPosX = position[0] + moving[0]
                let newPosY = position[1] + moving[1]
                let newPosZ = position[2] + moving[2]

                if (position[0] > minX && position[0] < maxX &&
                    position[1] > minY && position[1] < maxY &&
                    position[2] > minZ && position[2] < maxZ) {
                        // let centerX = (minX + maxX) / 2
                        // let centerY = (minY + maxY) / 2
                        // let centerZ = (minZ + maxZ) / 2
                        
                        // let direction = [
                        //     centerX - position[0],
                        //     centerY - position[1],
                        //     centerZ - position[2]
                        // ]

                        // direction = Vectors.normalize(direction)
                    let moveByObject = [
                        maxX - this.lastMaxSizes[0],
                        maxY - this.lastMaxSizes[1],
                        maxZ - this.lastMaxSizes[2]
                    ]
      
                    // if (moveByObject[0] < 0) {
                    //     moveByObject[0] -= movingObjectCollisionBox.x[0]
                    // } else {
                    //     moveByObject[0] += movingObjectCollisionBox.x[1]
                    // }
                    // if (moveByObject[1] < 0) {
                    //     moveByObject[1] -= movingObjectCollisionBox.y[0]
                    // } else {
                    //     moveByObject[1] += movingObjectCollisionBox.y[1]
                    // }
                    // if (moveByObject[2] < 0) {
                    //     moveByObject[2] -= movingObjectCollisionBox.z[0]
                    // } else {
                    //     moveByObject[2] += movingObjectCollisionBox.z[1]
                    // }

                    this.camera.position[0] += moveByObject[0]
                    this.camera.position[1] += moveByObject[1]
                    this.camera.position[2] += moveByObject[2]
                    callback(0)
                    callback(1)
                    callback(2)
                    console.log(moveByObject)
                }

                if (position[1] > minY && position[1] < maxY &&
                    position[2] > minZ && position[2] < maxZ) {
                    if ((position[0] < minX && newPosX >= minX) || (position[0] > maxX && newPosX <= maxX)) {
                        callback(0)
                    }
                }

                if (position[0] > minX && position[0] < maxX &&
                    position[2] > minZ && position[2] < maxZ) {
                    if ((position[1] < minY && newPosY >= minY) || (position[1] > maxY && newPosY <= maxY)) {
                        callback(1)
                    }
                }

                if (position[1] > minY && position[1] < maxY &&
                    position[0] > minX && position[0] < maxX) {
                    if ((position[2] < minZ && newPosZ >= minZ) || (position[2] > maxZ && newPosZ <= maxZ)) {
                        callback(2)
                    }
                }

                this.lastMaxSizes = [maxX, maxY, maxZ]
            }
        })
    }

    updateMatrixes() {
        let world = new Matrixes.Matrix()
        world.multiply(Matrixes.inverse(Matrixes.translation(this.rotationPoint[0], this.rotationPoint[1], this.rotationPoint[2])))
        world.translate(this.position[0], this.position[1], this.position[2])
        let rot = Matrixes.multiply(Matrixes.rotationX(this.rotation[0]), Matrixes.rotationY(this.rotation[1]))
        rot = Matrixes.multiply(rot, Matrixes.rotationZ(this.rotation[2]))
        let parentRot = Matrixes.multiply(Matrixes.rotationX(this.parentRotation[0]), Matrixes.rotationY(this.parentRotation[1]))
        parentRot = Matrixes.multiply(parentRot, Matrixes.rotationZ(this.parentRotation[2]))
        rot = Matrixes.multiply(parentRot, rot)
        world.multiply(rot)
        world.translate(this.rotationPoint[0], this.rotationPoint[1], this.rotationPoint[2])
        world.scale(this.scaling[0], this.scaling[1], this.scaling[2])
        this._rotationMatrix = rot
        this._world = world.matrix
    }

    update () {
        let objectMatrix = new Matrixes.Matrix()
        
        if (!this._UIElement) {
            objectMatrix.perspective(this.engine.camera.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.engine.camera.range)
            objectMatrix.multiply(this.engine.camera.inverseMatrix)
            objectMatrix.multiply(this._world)
        } else {
            objectMatrix.perspective(this.engine.camera.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.engine.camera.range)
            objectMatrix.multiply(this._world)

           this._rotationMatrix = Matrixes.multiply(this._rotationMatrix, this.engine.camera.rotationMatrix)
        }
        
        if (!this._UIElement) {
            let mouseOverHitBox = false
            this.collisionBoxes.forEach(collisionBox => {
                let boxInPixels = []
                
                for (let ix = 0; ix < collisionBox.x.length; ix++) {
                    const x = collisionBox.x[ix];
                    for (let iy = 0; iy < collisionBox.y.length; iy++) {
                        const y = collisionBox.y[iy];
                        for (let iz = 0; iz < collisionBox.z.length; iz++) {
                            const z = collisionBox.z[iz];
                            let coordsInPixels = Matrixes.transformVector(objectMatrix.matrix, [x, y, z, 1])
                                coordsInPixels[0] =  coordsInPixels[0] / coordsInPixels[3]
                                coordsInPixels[1] =  coordsInPixels[1] / coordsInPixels[3]
                                coordsInPixels[0] = (coordsInPixels[0] *  0.5 + 0.5) * this.engine.width;
                                coordsInPixels[1] = (coordsInPixels[1] * -0.5 + 0.5) * this.engine.height;
                                
                                coordsInPixels[0] = coordsInPixels[0] < 0 ? 0 : coordsInPixels[0]
                                coordsInPixels[1] = coordsInPixels[1] < 0 ? 0 : coordsInPixels[1]

                                coordsInPixels[0] = coordsInPixels[0] > this.engine.width ? this.engine.width : coordsInPixels[0]
                                coordsInPixels[1] = coordsInPixels[1] > this.engine.height ? this.engine.height : coordsInPixels[1]

                                if (coordsInPixels[2] >= 0) {
                                    boxInPixels.push(coordsInPixels) 
                                }
                        }
                    }
                }

                let smallest = [10000,  10000, -1000]
                let biggest = [-10000, -10000]
                for (let i = 0; i < boxInPixels.length; i++) {
                    const box = boxInPixels[i];
                    if (box[0] < smallest[0]) {
                        smallest[0] = box[0]
                    } else if (box[0] > biggest[0]) {
                        biggest[0] = box[0]
                    }
                    if (box[1] < smallest[1]) {
                        smallest[1] = box[1]
                    } else if (box[1] > biggest[1]) {
                        biggest[1] = box[1]
                    }
                    if (box[2] > smallest[2]) {
                        smallest[2] = box[2]
                    }
                }

                this.relativeCameraPosition = {
                    x: {
                        left: smallest[0],
                        right: biggest[0]
                    },
                    y: {
                        top: smallest[1], 
                        bottom: biggest[1]
                    },
                    depth: smallest[2]
                }

                // NEED TO FIND OBJECT BEHIND CAMERA

                if (this.relativeCameraPosition.x.left >= this.engine.width || this.relativeCameraPosition.x.right <= 0 ||
                    this.relativeCameraPosition.y.top >= this.engine.height * 1.5 || this.relativeCameraPosition.x.bottom <= -this.engine.height * 0.5) {
                    this.behindTheCamera = false
                }
                else {
                    this.behindTheCamera = false
                }
                
                if (this.engine.controls.mouse.x > smallest[0] && this.engine.controls.mouse.x < biggest[0] &&
                    this.engine.controls.mouse.y > smallest[1] && this.engine.controls.mouse.y < biggest[1]   ) {
                    mouseOverHitBox = true
                }

                if (mouseOverHitBox) {
                    if (this.engine.selectedObject == null) {
                        this.engine.selectedObject = this
                    }
                    if (this.engine.selectedObject.relativeCameraPosition.depth >= smallest[2]) {
                        this.engine.selectedObject = this
                    }
                }
            })
        }

        this._matrix = objectMatrix.matrix
    }

    useMaterial(material) {
        this._draw = this.draw
        material.object = (this)
        this.draw = () => {
            material.drawObject(this)
        }
    }
}
