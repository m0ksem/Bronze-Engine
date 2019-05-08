import * as Math from "../math/Math"
import * as Matrixes from "../math/Matrixes"
import { Rect } from "./Rect";

/**
 * Rect for using custom shaders
 * @tutorial
 * @param {Engine} engine
 * @class
 * @constructor
 */
export class Grid extends Rect {
    /**
     * Flat rectangle with square texture.
     * @param {Engine} engine 
     */
    constructor(engine) {
        super(engine)
        this.shaderProgram = this.engine.shaders.grid

        this.cellSize = [1000, 1000]
    }

    draw () {
        this.shaderProgram.use()
        this.engine.webGL.texParameteri(this.engine.webGL.TEXTURE_2D, this.engine.shaders.extensions.anisotropic.TEXTURE_MAX_ANISOTROPY_EXT, 16);
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

        this.engine.webGL.uniform1i(this.shaderProgram.textureLocation, this.texture._textureBlockLocation)
        this.engine.webGL.uniformMatrix4fv(this.shaderProgram.matrixLocation, false, this._matrix)
        this.engine.webGL.uniform2fv(this.shaderProgram.movingLocation, this._moving)
        this.engine.webGL.uniform2fv(this.shaderProgram.cellSizeLocation, this.cellSize)

        this.engine.webGL.drawArrays(this.engine.webGL.TRIANGLES, 0, this.vertexes.length / 3)
        this.engine.drawCallsPerFrame++
        this.engine.drawCalls++
    }

    updateMatrixes () {
        
    }

    update () {
        let temp = new Matrixes.Matrix()
        temp.perspective(this.engine.camera.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.engine.camera.range)

        let cameraMatrix = Matrixes.unit()
        cameraMatrix = Matrixes.multiply(cameraMatrix, Matrixes.translation(0, this.engine.camera.position[1], 0))
        cameraMatrix = Matrixes.multiply(cameraMatrix, this.engine.camera.rotationMatrix)

        temp.multiply(Matrixes.inverse(cameraMatrix))

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
        this._world = world

        temp.multiply(world.matrix)

        this._moving = [this.engine.camera.position[0], this.engine.camera.position[2]]
        this._matrix = temp.matrix
        this._rotationMatrix = rot
    }
    
    setCellSize(width, height) {
        this.cellSize = [width, height]
        this.setTextureRepeating(this.width / width, this.height / height)
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

        this.setCellSize(this.cellSize[0], this.cellSize[1])
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.vertexesBuffer)
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webGL.STATIC_DRAW);
    }
}
