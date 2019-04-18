import { Material } from "./Material";
import * as Vectors from "../math/Vectors.js"

/**
 * Base class for materials which will attached to objects. 
 * @param {Engine} engine
 * @param {Object} [object]
 */
export class Glass extends Material {
    constructor (engine, object) {
        super(engine, object)
        this.shaderProgram = engine.shaders.reflection
    }

    /**
     * Adds shader for material.
     * @param {ShaderProgram} shader 
     */
    setShaderProgram (shaderProgram) {
        this.shaderProgram = shaderProgram
    }

    /**
     * Draws cube using this material.
     * @param {Object} object 
     */
    drawCube (object) {
        this.shaderProgram.use()
        this.webGL.uniform3fv(this.shaderProgram.reverseLightDirectionLocation, Vectors.normalize([-0.1, 0.5, 1]))
        this.webGL.uniform3fv(this.shaderProgram.lightWorldPositionLocation, [0, 100, 400]);
        this.webGL.uniformMatrix4fv(this.shaderProgram.cameraLocation, false, this.engine.camera.matrix)
        this.webGL.uniform3fv(this.shaderProgram.lightWorldPositionLocation, this.engine.globalLightPosition)
        this.webGL.uniform1f(this.shaderProgram.lightRangeLocation, this.engine.globalLightRange)
        this.webGL.uniform1f(this.shaderProgram.lightMinValueLocation, this.engine.globalLightMinValue)
        this.engine.webGL.uniformMatrix4fv(this.shaderProgram.worldMatrixLocation, false, object._world)


        this.engine.webGL.enableVertexAttribArray(this.shaderProgram.positionLocation)
        this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, object.vertexesBuffer)
        this.engine.webGL.vertexAttribPointer(
            this.shaderProgram.positionLocation, 3, this.engine.webGL.FLOAT, false, 0, 0
        )

        this.engine.webGL.enableVertexAttribArray(this.shaderProgram.normalLocation);
        this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, object.normalBuffer);
        this.engine.webGL.vertexAttribPointer(
            this.shaderProgram.normalLocation, 3, this.engine.webGL.FLOAT, false, 0, 0)

        this.engine.webGL.uniform1i(this.shaderProgram.textureLocation, object.texture._textureBlockLocation)
        this.engine.webGL.uniformMatrix4fv(this.shaderProgram.matrixLocation, false, object._matrix)
        this.engine.webGL.uniformMatrix4fv(this.shaderProgram.rotationMatrixLocation, false, object._rotationMatrix)
        this.engine.webGL.uniform3fv(this.shaderProgram.worldCameraPositionLocation, new Float32Array(this.engine.camera.position))

        this.engine.webGL.drawArrays(this.engine.webGL.TRIANGLES, 0, object.vertexes.length / 3)
        this.engine.drawCallsPerFrame++
        this.engine.drawCalls++
    }

    /**
     * Draws object using this material.
     * @param {Object} object 
     */
    drawObject(object) {
        this.shaderProgram.use()
        this.webGL.uniform3fv(this.shaderProgram.lightWorldPositionLocation, this.engine.globalLightPosition)
        this.webGL.uniform1f(this.shaderProgram.lightRangeLocation, this.engine.globalLightRange)
        this.webGL.uniform1f(this.shaderProgram.lightMinValueLocation, this.engine.globalLightMinValue)

        this.engine.webGL.uniform1i(this.shaderProgram.textureLocation, object.texture._textureBlockLocation)
        this.engine.webGL.uniformMatrix4fv(this.shaderProgram.matrixLocation, false, object._matrix)
        this.engine.webGL.uniformMatrix4fv(this.shaderProgram.rotationMatrixLocation, false, object._rotationMatrix)
        this.engine.webGL.uniform3fv(this.shaderProgram.worldCameraPositionLocation, new Float32Array(this.engine.camera.position))
        this.engine.webGL.uniformMatrix4fv(this.shaderProgram.worldMatrixLocation, false, object._world)

        if (!object.behindTheCamera) {
            object.faces.forEach(face => {
                this.engine.webGL.enableVertexAttribArray(this.shaderProgram.positionLocation)
                this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, face.vertexesBuffer)
                this.engine.webGL.vertexAttribPointer(
                    this.shaderProgram.positionLocation, 3, this.engine.webGL.FLOAT, false, 0, 0
                )

                this.engine.webGL.enableVertexAttribArray(this.shaderProgram.normalLocation);
                this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, face.normalBuffer);
                this.engine.webGL.vertexAttribPointer(
                    this.shaderProgram.normalLocation, 3, this.engine.webGL.FLOAT, false, 0, 0)

                this.engine.webGL.drawArrays(this.engine.webGL.TRIANGLES, 0, face.vertexes.length / 3)
                this.engine.drawCallsPerFrame++
                this.engine.drawCalls++
            })
        }
    }
}