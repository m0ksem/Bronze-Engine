import { Matrix4 } from '../math/matrixes';
import { WebGLRenderer } from "../renderer"
import { Vector } from '../math/vectors/vector';

export class PerspectiveCamera {
  perspectiveMatrix: number[]
  movementMatrix: number[] = Matrix4.unit()

  private renderer: WebGLRenderer
  private rotation: number[] = [0, 0, 0]

  constructor(renderer: WebGLRenderer, fov: number = 90, range: number = 9999, near: number = 1) {
    this.renderer = renderer
    this._fov = fov
    this._range = range
    this._near = near
    this.perspectiveMatrix = this.createPerspectiveMatrix()
  }

  public get matrix() {
    const m = Matrix4.multiply(this.perspectiveMatrix, this.movementMatrix)
    const rotationMatrix = Matrix4.rotation(this.rotation[0], this.rotation[1], this.rotation[2])
    return Matrix4.multiply(m, rotationMatrix)
  }

  private _fov: number
  public get fov(): number { return this._fov }
  public set fov(value: number) {
    this._fov = value
    this.perspectiveMatrix = this.createPerspectiveMatrix()
  }

  private _range: number
  public get range(): number { return this._range }
  public set range(value: number) {
    this._range = value
    this.perspectiveMatrix = this.createPerspectiveMatrix()
  }

  private _near: number
  public get near(): number { return this._near }
  public set near(value: number) {
    this._near = value
    this.perspectiveMatrix = this.createPerspectiveMatrix()
  }

  private createPerspectiveMatrix() {
    return Matrix4.perspective(
      this.fov, 
      this.renderer.width, 
      this.renderer.height,
      this.near,
      this.range
    )
  }

  public rotate(x: number, y: number, z: number) {
    this.rotation = Vector.add(this.rotation, [x, y, z])
  }

  public setPosition(x: number, y: number, z: number) {
    this.movementMatrix = Matrix4.multiply(this.movementMatrix, Matrix4.translation(x, y, z))
  }

  public move(x: number, y: number, z: number) {
    this.movementMatrix = Matrix4.translation(x, y, z)
  }
}