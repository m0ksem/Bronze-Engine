import * as Math from "../math/Math"
import * as Matrixes from "../math/Matrixes"
import * as Vectors from "../math/Vectors"
import {ShaderProgram} from "../utils/ShaderProgram"




/**
 * Rect for using custom shaders
 * @tutorial
 * @param {Engine} engine
 * @class
 * @constructor
 */
export class Cube {
    /**
     * Flat rectangle with square texture.
     * @param {Engine} engine 
     */
    constructor(engine) {

        if (engine) {
            engine.objects.push(this)
        }

        this.engine = engine

        this.camera = engine.camera

        this.webGL = engine.webGL

        this.shaderProgram = engine.cubeTextureShaderProgram

        /**
         * Rect polygons.
         * @private
         * @type {Array.{0: Polygon, 1: Polygon}} vector 3
         */
        this.polygons = new Array(2)

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
            -100, -100, -100,
            -100, 100, -100,
            100, -100, -100,
            -100, 100, -100,
            100, 100, -100,
            100, -100, -100,

            -100, -100, 100,
            100, -100, 100,
            -100, 100, 100,
            -100, 100, 100,
            100, -100, 100,
            100, 100, 100,

            -100, 100, -100,
            -100, 100, 100,
            100, 100, -100,
            -100, 100, 100,
            100, 100, 100,
            100, 100, -100,

            -100, -100, -100,
            100, -100, -100,
            -100, -100, 100,
            -100, -100, 100,
            100, -100, -100,
            100, -100, 100,

            -100, -100, -100,
            -100, -100, 100,
            -100, 100, -100,
            -100, -100, 100,
            -100, 100, 100,
            -100, 100, -100,

            100, -100, -100,
            100, 100, -100,
            100, -100, 100,
            100, -100, 100,
            100, 100, -100,
            100, 100, 100,
        ]


        this.normals = [
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
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

        this.UIElement = false

        this.vertexesBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.vertexesBuffer)
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webGL.STATIC_DRAW);

        // this.coordsBuffer = this.webGL.createBuffer()
        // this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.coordsBuffer)
        // this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.textureCoords), this.webGL.STATIC_DRAW)

        this.normalBuffer = this.webGL.createBuffer();
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.normalBuffer);
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.normals), this.webGL.STATIC_DRAW);
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
     * Changing size of rect.
     * @param {Number} width
     * @param {Number} height
     * @public
     */
    setSize(width, height, depth) {
        this.width = width
        this.height = height
        this.depth = depth
        this.vertexes = [
            -width, -height, -depth,
            -width, height, -depth,
            width, -height, -depth,
            -width, height, -depth,
            width, height, -depth,
            width, -height, -depth,

            -width, -height, depth,
            width, -height, depth,
            -width, height, depth,
            -width, height, depth,
            width, -height, depth,
            width, height, depth,

            -width, height, -depth,
            -width, height, depth,
            width, height, -depth,
            -width, height, depth,
            width, height, depth,
            width, height, -depth,

            -width, -height, -depth,
            width, -height, -depth,
            -width, -height, depth,
            -width, -height, depth,
            width, -height, -depth,
            width, -height, depth,

            -width, -height, -depth,
            -width, -height, depth,
            -width, height, -depth,
            -width, -height, depth,
            -width, height, depth,
            -width, height, -depth,

            width, -height, -depth,
            width, height, -depth,
            width, -height, depth,
            width, -height, depth,
            width, height, -depth,
            width, height, depth,
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
    setRotate(x, y, z) {
        let xRad = Math.degToRad(x)
        let yRad = Math.degToRad(y)
        let zRad = Math.degToRad(z)
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
     * Sets whether the all polygons will be attached to the camera like UI this.
     * @param {boolean} bool 
     */
    setAsUIElement(bool) {
        this.UIElement = bool
    }

    animate(fps, animateFunction) {
        animateFunction = animateFunction || this.animation
        this._animationInterval = setInterval(animateFunction, 1000 / fps)
    }

    draw() {
        this.shaderProgram.use()
        this.webGL.uniform3fv(this.shaderProgram.reverseLightDirectionLocation, Vectors.normalize([-0.1, 0.5, 1]))
        this.webGL.uniform3fv(this.shaderProgram.lightWorldPositionLocation, [0, 100, 400]);
        this.webGL.uniformMatrix4fv(this.shaderProgram.cameraLocation, false, this.engine.camera.matrix)

        this.engine.webGL.enableVertexAttribArray(this.shaderProgram.positionLocation)
        this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, this.vertexesBuffer)
        this.engine.webGL.vertexAttribPointer(
            this.shaderProgram.positionLocation, 3, this.engine.webGL.FLOAT, false, 0, 0
        )

        this.engine.webGL.enableVertexAttribArray(this.shaderProgram.normalLocation);
        this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, this.normalBuffer);
        this.engine.webGL.vertexAttribPointer(
            this.shaderProgram.normalLocation, 3, this.engine.webGL.FLOAT, false, 0, 0)

        this.engine.webGL.uniform1i(this.shaderProgram.textureLocation, this.texture._textureBlockLocation)
        this.engine.webGL.uniformMatrix4fv(this.shaderProgram.matrixLocation, false, this._matrix)
        this.engine.webGL.uniformMatrix4fv(this.shaderProgram.objectRotationLocation, false, this._world)

        this.engine.webGL.drawArrays(this.engine.webGL.TRIANGLES, 0, this.vertexes.length / 3)
        this.engine.drawCallsPerFrame++
        this.engine.drawCalls++
        this.engine.shaderProgram.use()
    }

    update() {
        let temp = new Matrixes.Matrix()
        if (!this.UIElement) {
            temp.perspective(this.engine.camera.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.engine.camera.range)
            temp.multiply(this.engine.camera.inventedMatrix)
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

        this._world = rot
        temp.multiply(world.matrix)

        this._matrix = temp.matrix
        this._rotationMatrix = rot
    }
}
