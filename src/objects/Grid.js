import * as Math from "../math/Math"
import * as Matrixes from "../math/Matrixes"

export class Grid {
    constructor () {
        if (engine) {
            engine.objects.push(this)
        }

        this.engine = engine

        this.camera = engine.camera

        this.webGL = engine.webGL

        this.shaderProgram = engine.gridTextureShaderProgram

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
         * Object scaling vector. Angles in radians. Maybe you need setParentRotation() method? It'd be more convenient to use.
         * @public
         * @type {Array.<{0: Number, 1: Number, 2: Number}>} vector 3 array
         * @property {Number} x parent rotation on axis x
         * @property {Number} y parent rotation on axis y
         * @property {Number} z parent rotation on axis z
         */
        this.parentRotation = [0, 0, 0]

        /**
         * Object scaling vector. Angles in radians. Maybe you need setRotationPoint() method? It'd be more convenient to use.
         * @public
         * @type {Array.<{0: Number, 1: Number, 2: Number}>} vector 3 array
         * @property {Number} x rotation point coordinate on axis x
         * @property {Number} y rotation point coordinate on axis y
         * @property {Number} z rotation point coordinate on axis z
         */
        this.rotationPoint = [0, 0, 0]

        this.vertexes = [

        ]

        this.space = 1000

        this.vertexesBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.vertexesBuffer)
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webGL.STATIC_DRAW);
    }

    setSize (x, y) {
        for (let xi = 0; xi < x / this.space; xi++) {
            for (let yi = 0; yi < y / this.space; yi++) {
                this.vertexes.push([this.space * xi, 0, this.space * yi])
            }
        }
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.vertexesBuffer)
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webGL.STATIC_DRAW);
    }

    draw() {
        this.shaderProgram.use()

        this.engine.webGL.enableVertexAttribArray(this.shaderProgram.positionLocation)
        this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, this.vertexesBuffer)
        this.engine.webGL.vertexAttribPointer(
            this.shaderProgram.positionLocation, 1, this.engine.webGL.FLOAT, false, 0, 0
        )

        this.engine.webGL.uniformMatrix4fv(this.shaderProgram.matrixLocation, false, this._matrix)
      
        this.engine.webGL.drawArrays(this.engine.webGL.TRIANGLE_STRIP, 0, this.vertexes.length)
        this.engine.drawCallsPerFrame++
        this.engine.drawCalls++
    }

    update() {
        let temp = new Matrixes.Matrix()
        //temp.perspective(this.engine.camera.fieldOfViewRad, this.engine.width, this.engine.height, 1, 20000)
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
        this._world = parentRot
        rot = Matrixes.multiply(parentRot, rot)
        world.multiply(rot)

        world.translate(this.rotationPoint[0], this.rotationPoint[1], this.rotationPoint[2])
        world.scale(this.scaling[0], this.scaling[1], this.scaling[2])

        temp.multiply(world.matrix)

        this._matrix = temp.matrix
        this._rotationMatrix = rot
    }
}