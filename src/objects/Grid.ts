import * as Matrixes from "../math/Matrixes4"
import { Rect } from "./Rect";
import { Engine } from "../Engine";

/**
 * Rect for using custom shaders
 * @class
 * @constructor
 */
export class Grid extends Rect {
  public cellSize: number[];
  
  private movingMatrix: number[] = []

  /**
   * Flat rectangle with square texture.
   * @param engine 
   */
  constructor(engine: Engine) {
    super(engine)
    this.shaderProgram = this.engine.shaders.grid

    this.cellSize = [1000, 1000]
    this.name = 'Just a gird :)'
  }

  public draw(): void {
    this.shaderProgram.use()
    this.engine.webgl.texParameteri(this.engine.webgl.TEXTURE_2D, this.engine.shaders.extensions.anisotropic.TEXTURE_MAX_ANISOTROPY_EXT, 16);
    this.engine.webgl.enableVertexAttribArray(this.shaderProgram.positionLocation)
    this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, this.vertexesBuffer)
    this.engine.webgl.vertexAttribPointer(
      this.shaderProgram.positionLocation, 3, this.engine.webgl.FLOAT, false, 0, 0
    )

    this.engine.webgl.enableVertexAttribArray(this.shaderProgram.texcoordLocation)
    this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, this.textureCoordinatesBuffer)
    this.engine.webgl.vertexAttribPointer(
      this.shaderProgram.texcoordLocation, 2, this.engine.webgl.FLOAT, false, 0, 0
    )

    this.engine.webgl.uniform1i(this.shaderProgram.textureLocation, this.texture.textureBlockLocation)
    this.engine.webgl.uniformMatrix4fv(this.shaderProgram.matrixLocation, false, this.matrix)
    this.engine.webgl.uniform2fv(this.shaderProgram.movingLocation, this.movingMatrix)
    this.engine.webgl.uniform2fv(this.shaderProgram.cellSizeLocation, this.cellSize)

    this.engine.webgl.drawArrays(this.engine.webgl.TRIANGLES, 0, this.vertexes.length / 3)
  }

  /**
   * Updated matrixes
   */
  updateMatrixes(): void {
    let world = Matrixes.inverse(Matrixes.translation(this.rotationPoint.x, this.rotationPoint.y, this.rotationPoint.z))
    world = Matrixes.multiply(world, Matrixes.translation(this.position.x, this.position.y, this.position.z))
    let rot = Matrixes.rotation(this.rotation.x, this.rotation.y, this.rotation.z)
    world = Matrixes.multiply(world, rot)
    world = Matrixes.multiply(world, Matrixes.translation(this.rotationPoint.x, this.rotationPoint.y, this.rotationPoint.z))
    world = Matrixes.multiply(world, Matrixes.translation(-this.minSize.x - (this.maxSize.x - this.minSize.x) / 2, - this.minSize.y - (this.maxSize.y - this.minSize.y) / 2, - this.minSize.z - (this.maxSize.z - this.minSize.z) / 2))
    world = Matrixes.multiply(world, Matrixes.scaling(this.scaling.x, this.scaling.y, this.scaling.z))

    this.worldMatrix = world
    this.rotationMatrix = rot
  }

  /**
   * Updates object
   */
  public update(): void {
    let matrix = Matrixes.perspective(this.engine.camera!.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.engine.camera!.range)

    let cameraMatrix = Matrixes.unit()
    cameraMatrix = Matrixes.multiply(cameraMatrix, Matrixes.translation(0, this.engine.camera!.position.y, 0))
    cameraMatrix = Matrixes.multiply(cameraMatrix, this.engine.camera!.rotationMatrix)
    matrix = Matrixes.multiply(matrix, Matrixes.inverse(cameraMatrix))

    matrix = Matrixes.multiply(matrix, this.worldMatrix)

    this.movingMatrix = [this.engine.camera!.position.x, this.engine.camera!.position.z]
    this.matrix = matrix
  }

  /**
   * Sets size for one cell in pixels
   * @param width 
   * @param height 
   */
  public setCellSize(width: number, height: number): void {
    this.cellSize = [width, height]
    this.setTextureRepeating(this.width / width, this.height / height)
  }

  /**
   * Changing size of rect.
   * @param width
   * @param height
   */
  public setSize(width: number, height: number): void {
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

    this.maxSize.set(width, height, 0)
    this.minSize.set(0, 0, 0)

    this.setCellSize(this.cellSize[0], this.cellSize[1])
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.vertexesBuffer)
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webgl.STATIC_DRAW);
  }
}
