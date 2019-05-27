import * as Matrixes from '../math/Matrixes4'
import { Engine } from '../Engine';
import Entity from './Entity';
import { BronzeWarn } from '../debug/Error';

export class Skybox extends Entity {
  constructor(engine: Engine) {
    super(engine)
    this.name = 'Just skybox :)'

    this.webgl = engine.webgl

    this.vertexes = [
      -1, -1,
      1, -1,
      -1, 1,
      -1, 1,
      1, -1,
      1, 1,
    ]

    this.shaderProgram = engine.shaders.skybox

    this.texture = engine.noTexture

    this.vertexesBuffer = this.webgl.createBuffer()!
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.vertexesBuffer)
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webgl.STATIC_DRAW);

    this.engine.objectLoaded(this)

    /**
     * Skybox rotation. Angles in radians. Maybe you need setRotation() or rotate() methods? It'd be more convenient to use.
     * @type {Number[]}
     */
  }

  public updateMatrixes() {
    let temp = Matrixes.perspective(this.engine.camera!.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.engine.camera!.range)
    let cameraM = this.engine.camera!.inverseRotationMatrix
    temp = Matrixes.multiply(temp, cameraM)
    temp = Matrixes.multiply(temp, Matrixes.rotation(this.rotation.x, this.rotation.y, this.rotation.z))
    this.matrix = Matrixes.inverse(temp)
  }

  /**
   * Updating camera matrix for drawing Skybox
   */
  public update() {
    
  }

  /**
   * Function draws skybox
   */
  public draw() {
    if (this.shaderProgram) {
      this.shaderProgram.use()

      this.engine.webgl.enableVertexAttribArray(this.shaderProgram.positionLocation)
      this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, this.vertexesBuffer)
      this.engine.webgl.vertexAttribPointer(
        this.shaderProgram.positionLocation, 2, this.engine.webgl.FLOAT, false, 0, 0
      )

      this.engine.webgl.uniform1i(this.shaderProgram.textureLocation, this.texture.textureBlockLocation)
      this.engine.webgl.uniformMatrix4fv(
        this.shaderProgram.matrixLocation, false,
        this.matrix);

      this.engine.webgl.drawArrays(this.engine.webgl.TRIANGLES, 0, this.vertexes.length / 2)

      this.engine.shaders.default.use()
    } else {
      new BronzeWarn('Shader program is not set.')
    }
  }
}