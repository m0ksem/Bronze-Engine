import * as Math from "../math/Math"
import * as Matrixes from "../math/Matrixes"
import * as Vectors from '../math/Vectors'

/**
 * Rect for using custom shaders
 * @tutorial
 * @param {Engine} engine
 * @class
 * @constructor
 */
export class Rect {
    /**
     * Flat rectangle with square texture.
     * @param {Engine} engine 
     */
    constructor(engine) {

        if (engine) {
            engine.addObject(this)
        }

        this.engine = engine

        this.camera = engine.camera

        this.webGL = engine.webGL

        this.shaderProgram = engine.shaders.default

        /**
         * Rect position.
         * @readonly
         * @type {Array.{0: Number, 1: Number, 2: Number}} vector 3
         */
        this.position = [0, 0, 0]

        /**
         * Rect rotation point.
         * @readonly
         * @type {Array.{0: Number, 1: Number, 2: Number}} vector 3
         */
        this.rotationPoint = [0, 0, 0]

        this.vertexes = [
            0, 0, 0,
            100, 100, 0,
            0, 100, 0,
            100, 100, 0,
            0, 0, 0,
            100, 0, 0
        ]

        this.textureCoords = [
            0, 1,
            1, 0,
            0, 0,
            1, 0,
            0, 1,
            1, 1,
        ]

        this.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
        ]

        this.collisionBoxes = [
            {
                x: [0, 100],
                y: [0, 100],
                z: [0, 0]
            }
        ]

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
        this.rotationDeg = [0, 0, 0]

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
         * Sets whether the object will be attached to the camera like UI this.
         * @type {boolean}
         * @public
         */
        this.UIElement = false

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

        /**
         * @type {bool} is it UIElement
         */
        this.UIElement = false

        /**
         * @type {bool}
         */
        this.hidden = false



        this.vertexesBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.vertexesBuffer)
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webGL.STATIC_DRAW);

        this.coordsBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.coordsBuffer)
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.textureCoords), this.webGL.STATIC_DRAW)
    
        this.normalBuffer = this.webGL.createBuffer();
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.normalBuffer);
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.normals), this.webGL.STATIC_DRAW);

        this._matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        this._world = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        this._rotationMatrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

        this.setNormals([
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
        ])

        this.engine.objectLoaded(this)
    }

    /**
     * Setting square texture for rect.
     * @param {Texture} texture
     * @public
     */
    setTexture(texture) {
        this.texture = texture
    }

    /**
    * Sets custom shader program.
    * @param {ShaderProgram} shader shader program which object will use.
    */
    useShader(shader) {
        this.shaderProgram = shader
    }

    /**
     * Repeats texture on rect.
     * @param {Number} count 
     * @default 1
     */
    setTextureRepeating(x, y) {
        this.textureCoords = [
            0, y,
            x, 0,
            0, 0,
            x, 0,
            0, y,
            x, y,
        ]
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.coordsBuffer)
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.textureCoords), this.webGL.STATIC_DRAW)
    }

    /**
     * Changing size of rect.
     * @param {Number} width
     * @param {Number} height
     * @public
     */
    setSize(width, height) {
        this.width = width
        this.height = height
        this.vertexes = [
            0, 0, 0,
            width, height, 0,
            0, height, 0,
            width, height, 0,
            0, 0, 0,
            width, 0, 0
        ]
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.vertexesBuffer)
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webGL.STATIC_DRAW);
    }

    /**
     * Change position of all polygons in rect.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z
     * @public
     */
    setPosition(x, y, z) {
        this.position = [x, y, z]
    }

    /**
     * Change scaling of all polygons in rect.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z
     * @public
     */
    scale(x, y, z) {
        this.scale = [x, y, z]
    }

    /**
     * Set rotation for x, y, z axis.
     * @param {Number} x in deg.
     * @param {Number} y in deg.
     * @param {Number} z in deg.
     * @public
     */
    setRotation(x, y, z) {
        let xRad = Math.degToRad(x)
        let yRad = Math.degToRad(y)
        let zRad = Math.degToRad(z)
        this.rotationDeg = [x, y, z]
        this.rotation = [xRad, yRad, zRad]
    }

    /**
     * Set rotation for x, y, z axis.
     * @param {Number} x in deg.
     * @param {Number} y in deg.
     * @param {Number} z in deg.
     * @public
     */
    rotate(x, y, z) {
        let xRad = Math.degToRad(x)
        let yRad = Math.degToRad(y)
        let zRad = Math.degToRad(z)
        this.rotationDeg[0] += x
        this.rotationDeg[1] += y
        this.rotationDeg[2] += z
        this.rotation[0] += xRad
        this.rotation[1] += yRad
        this.rotation[2] += zRad
    }

    /**
     * Setting rotation of parent object in radians.
     * @param {Number} x parent rotation of x axis in radians.
     * @param {Number} y parent rotation of y axis in radians.
     * @param {Number} z parent rotation of z axis in radians.
     * @public
     */
    setParentRotation(x, y, z) {
        this.parentRotation = [x, y, z]
    }

    /**
     * Sets rotation point coordinates.
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @public
     */
    setRotationPoint(x, y, z) {
        this.rotationPoint = [x, y, z]
    }

    /**
     * Set normals vector.
     * @param {Array} normals 6:3 array. Every 3 thiss is a vector of normal.
     * @public
     */
    setNormals(normals) {
        this.normals = [
            normals[0], normals[1], normals[2],
            normals[3], normals[4], normals[5],
            normals[6], normals[7], normals[8], 
            normals[0], normals[1], normals[2],
            normals[3], normals[4], normals[5],
            normals[6], normals[7], normals[8],
        ]
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.normalBuffer);
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.normals), this.webGL.STATIC_DRAW);
    }

    /**
     * Set normal normal to all vertexes.
     * @param {Array} normals 6:3 array. Every 3 thiss is a vector of normal.
     * @public
     */
    setNormal(normals) {
        this.normals = [
            normals[0], normals[1], normals[2],
            normals[0], normals[1], normals[2],
            normals[0], normals[1], normals[2],
            normals[0], normals[1], normals[2],
            normals[0], normals[1], normals[2],
            normals[0], normals[1], normals[2],
        ]
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.normalBuffer);
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.normals), this.webGL.STATIC_DRAW);
    }

    /**
     * Auto generate normals respectively to the rotation.
     */
    autoGenerateNormals () {
        let normal = [
            0, 0, 1
        ]
        let rot = Vectors.rotationX(this.rotation[0])
        rot = Vectors.multiply(rot, Vectors.rotationY(this.rotation[1]))
        rot = Vectors.multiply(rot, Vectors.rotationZ(this.rotation[2]))
        normal = Vectors.vecMultiply(rot, normal)
        this.normals = [
            normal[0], normal[1], normal[2],
            normal[0], normal[1], normal[2],
            normal[0], normal[1], normal[2],
            normal[0], normal[1], normal[2],
            normal[0], normal[1], normal[2],
            normal[0], normal[1], normal[2]
        ]
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.normalBuffer);
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.normals), this.webGL.STATIC_DRAW);
    }

    /**
     * Sets whether the all polygons will be attached to the camera like UI this.
     * @param {bolean} bool 
     */
    setAsUIElement(bool) {
        this.UIElement = bool
    }

    /**
     * Object will no drawn
     */
    hide () {
        this.hidden = true
    }

    /**
     * Object will drawn
     */
    show () {
        this.hidden = false
    }

    draw () {
        if (!this.hidden) {
            this.shaderProgram.use()
            this.engine.webGL.enableVertexAttribArray(this.shaderProgram.positionLocation)
            this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, this.vertexesBuffer)
            this.engine.webGL.vertexAttribPointer(
                this.shaderProgram.positionLocation, 3, this.engine.webGL.FLOAT, false, 0, 0
            )

            this.engine.webGL.enableVertexAttribArray(this.shaderProgram.texcoordLocation)
            this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, this.coordsBuffer)
            this.engine.webGL.vertexAttribPointer(
                this.shaderProgram.texcoordLocation, 2, this.engine.webGL.FLOAT, false, 0, 0
            )

            this.engine.webGL.enableVertexAttribArray(this.shaderProgram.normalLocation);
            this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, this.normalBuffer);
            this.engine.webGL.vertexAttribPointer(
            this.shaderProgram.normalLocation, 3, this.engine.webGL.FLOAT, false, 0, 0)

            this.engine.webGL.uniform1i(this.shaderProgram.textureLocation, this.texture._textureBlockLocation)
            this.engine.webGL.uniformMatrix4fv(this.shaderProgram.matrixLocation, false, this._matrix)
            this.engine.webGL.uniformMatrix4fv(this.shaderProgram.objectRotationLocation, false, this._rotationMatrix)
            this.engine.webGL.uniformMatrix4fv(this.shaderProgram.worldMatrixLocation, false, this._world)

            this.engine.webGL.drawArrays(this.engine.webGL.TRIANGLES, 0, this.vertexes.length / 3)
            this.engine.drawCallsPerFrame++
            this.engine.drawCalls++
        }
    }

    checkCollision() {
        this.collisionBoxes.forEach(collisionBox => {
            if (this.engine.camera.moved) {
                let maxX = collisionBox.x[1] * this.scaling[0] + this.position[0] + this.camera.distanceBeforeCollision
                let minX = collisionBox.x[0] * this.scaling[0] + this.position[0] - this.camera.distanceBeforeCollision
                let maxY = collisionBox.y[1] * this.scaling[1] + this.position[1] + this.camera.distanceBeforeCollision
                let minY = collisionBox.y[0] * this.scaling[1] + this.position[1] - this.camera.distanceBeforeCollision
                let maxZ = collisionBox.z[1] * this.scaling[2] + this.position[2] + this.camera.distanceBeforeCollision
                let minZ = collisionBox.z[0] * this.scaling[2] + this.position[2] - this.camera.distanceBeforeCollision

                let newPosX = this.camera.position[0] + this.camera.moving[0]
                let newPosY = this.camera.position[1] + this.camera.moving[1]
                let newPosZ = this.camera.position[2] + this.camera.moving[2]

                if ((newPosX > minX && newPosX < maxX) &&
                    (this.engine.camera.position[1] > minY && this.engine.camera.position[1] < maxY) &&
                    this.engine.camera.position[2] > minZ && this.engine.camera.position[2] < maxZ) { // this.engine.camera.position[2] > minZ && this.engine.camera.position[2] < maxZ)
                    this.camera.moving[0] = 0
                }
                if ((this.engine.camera.position[0] > minX && this.engine.camera.position[0] < maxX) &&
                    (newPosY > minY && newPosY < maxY) &&
                    (this.engine.camera.position[2] > minZ && this.engine.camera.position[2] < maxZ))  {  // (this.engine.camera.position[2] > minZ && this.engine.camera.position[2] < maxZ)
                    this.camera.moving[1] = 0
                }
                if ((this.engine.camera.position[0] > minX && this.engine.camera.position[0] < maxX) &&
                    (this.engine.camera.position[1] > minY && this.engine.camera.position[1] < maxY) &&
                    (newPosZ > minZ && newPosZ < maxZ)) {
                    this.camera.moving[2] = 0
                }
            }
        })
    }

    update () {
        let temp = new Matrixes.Matrix()
        if (!this.UIElement) {
            temp.perspective(this.engine.camera.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.engine.camera.range)
            temp.multiply(this.engine.camera.inverseMatrix)
        } else {
            temp.projection(this.engine.camera.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.engine.camera.range)
        }

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

        this._world = world.matrix
        
        temp.multiply(world.matrix)

        this._matrix = temp.matrix
        this._rotationMatrix = rot
    }

    animate(fps, animateFunction) {
        animateFunction = animateFunction || this.animation
        this._animationInterval = setInterval(animateFunction, 1000 / fps)
    }
}
