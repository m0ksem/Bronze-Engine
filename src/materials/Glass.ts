import { Material } from "./Material";
import { Engine } from "../Engine";
import Entity from "../objects/Entity";

/**
 * Base class for materials which will attached to objects. 
 * @param {Engine} engine
 * @param {Object} [object]
 */
export class Glass extends Material {
  constructor(engine: Engine, object: Entity) {
    super(engine, object)
    this.shaderProgram = engine.shaders.reflection
  }

  /**
   * Draws object using this material.
   * @param {Object} object 
   */
  public drawObject(object: Entity): void {
    if (object.texture.loaded && object.loaded) {
      this.shaderProgram!.use()
      this.webgl.uniformMatrix4fv(this.shaderProgram!.cameraLocation, false, this.engine.camera!.matrix)

      this.engine.webgl.enableVertexAttribArray(this.shaderProgram!.positionLocation)
      this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, object.vertexesBuffer)
      this.engine.webgl.vertexAttribPointer(
        this.shaderProgram!.positionLocation, 3, this.engine.webgl.FLOAT, false, 0, 0
      )

      this.engine.webgl.enableVertexAttribArray(this.shaderProgram!.normalLocation);
      this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, object.normalsBuffer);
      this.engine.webgl.vertexAttribPointer(
        this.shaderProgram!.normalLocation, 3, this.engine.webgl.FLOAT, false, 0, 0)

      this.engine.webgl.uniform1i(this.shaderProgram!.textureLocation, object.texture.textureBlockLocation)
      this.engine.webgl.uniformMatrix4fv(this.shaderProgram!.matrixLocation, false, object.matrix)
      this.engine.webgl.uniformMatrix4fv(this.shaderProgram!.worldMatrixLocation, false, object.worldMatrix)
      this.engine.webgl.uniformMatrix4fv(this.shaderProgram!.rotationMatrixLocation, false, object.rotationMatrix)
      this.engine.webgl.uniform3fv(this.shaderProgram!.worldCameraPositionLocation, new Float32Array(this.engine.camera!.position.toArray()))

      this.engine.webgl.drawArrays(this.engine.webgl.TRIANGLES, 0, object.vertexes.length / 3)
    }
  }
}

export default {
  Glass
}