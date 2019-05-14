import { Entity } from "./Entity";
import { Engine } from "../Engine";

export default class Rect extends Entity {
  public width: number = 100
  public height: number = 100
  public name: string = 'Just a rect :)'

  constructor(engine: Engine) {
    super(engine)
    this.vertexes = [
      0, 0, 0,
      100, 100, 0,
      0, 100, 0,
      100, 100, 0,
      0, 0, 0,
      100, 0, 0
    ]

    this.textureCoordinates = [
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

    this.shaderProgram = this.engine.shaders.default

    this.vertexesBuffer = this.webgl.createBuffer()
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.vertexesBuffer)
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webgl.STATIC_DRAW);

    this.textureCoordinatesBuffer = this.webgl.createBuffer()
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.textureCoordinatesBuffer)
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.textureCoordinates), this.webgl.STATIC_DRAW)

    this.normalsBuffer = this.webgl.createBuffer();
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.normalsBuffer);
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.normals), this.webgl.STATIC_DRAW);


    this.collisionBox.maxPoint.set(100, 100, 0)
    this.collisionBox.minPoint.set(0, 0, 0)

    this.maxBaseSize.set(100, 100, 0)
    this.maxSize = this.maxBaseSize

    this.engine.objectLoaded(this)
  }

  /**
   * Scale object.
   * @param x 
   * @param y 
   */  
  public scale(x: number, y: number) {
    this.scaling.set(x, y, 1)
    this.maxSize.set(this.maxBaseSize.x * x, this.maxBaseSize.y * y, 0)
    this.minSize.set(this.minBaseSize.x * x, this.minBaseSize.y * y, 0)
    if (this.rotationPointPos == 'center') {
      this.rotationPoint.set(this.minSize.x + (this.maxSize.x - this.minSize.x) / 2,
        this.minSize.y + (this.maxSize.y - this.minSize.y) / 2,
        this.minSize.z + (this.maxSize.z - this.minSize.z) / 2)
    }
  }

  /**
   * Changing size of rect.
   * @param width
   * @param height
   * @public
   */
  public setSize(width: number, height: number) {
    this.width = width
    this.height = height
    this.scale(this.width / 100, this.height / 100)
  }

  /**
   * Repeats texture on rect.
   * @param x count for x
   * @param y count for y
   * @default {x:1,y:1}
   */
  public setTextureRepeating(x:number, y: number) {
    this.textureCoordinates = [
      0, y,
      x, 0,
      0, 0,
      x, 0,
      0, y,
      x, y,
    ]
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.textureCoordinatesBuffer)
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.textureCoordinates), this.webgl.STATIC_DRAW)
  }
}

export {
  Rect
}