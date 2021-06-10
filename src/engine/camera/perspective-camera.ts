import { Matrix4 } from '../math/matrixes';
import { WebGLRenderer } from "../renderer"
import { Vector, Vector3 } from '../math/vectors/vector';

export class PerspectiveCamera {
  private _renderer: WebGLRenderer
  private _rotation: number[] = [0, 0, 0]
  private _position: number[] = [0, 0, 0]

  perspectiveMatrix: number[] = Matrix4.unit()
  movementMatrix: number[] = Matrix4.unit()
  rotationMatrix: number[] = Matrix4.unit()
  worldMatrix: number[] = Matrix4.unit()
  matrix: number[] = Matrix4.unit()

  constructor(renderer: WebGLRenderer, fov: number = 30, range: number = 999999999, near: number = 0.01) {
    this._renderer = renderer
    this._fov = fov
    this._range = range
    this._near = near
    this.recomputeMatrix()
  }

  public get position(): Vector3 {
    return Vector.arrayToXYZ(this._position)
  }

  public get rotation(): Vector3 {
    return Vector.arrayToXYZ(this._rotation)
  }

  private _fov: number
  public get fov(): number { return this._fov }
  public set fov(value: number) {
    this._fov = value
     this.updatePerspectiveMatrix()
  }

  private _range: number
  public get range(): number { return this._range }
  public set range(value: number) {
    this._range = value
    this.updatePerspectiveMatrix()
  }

  private _near: number
  public get near(): number { return this._near }
  public set near(value: number) {
    this._near = value
    this.updatePerspectiveMatrix()
  }

  private updateMatrix() {
    this.matrix = Matrix4.multiply(this.perspectiveMatrix, Matrix4.inverse(this.worldMatrix))
  }

  private updatePerspectiveMatrix() {
    this.perspectiveMatrix = Matrix4.perspective(
      this.fov, 
      this._renderer.width, 
      this._renderer.height,
      this.near,
      this.range
    )
    this.updateMatrix()
  }

  private updateWorldMatrix() {
    this.worldMatrix = Matrix4.multiply(this.movementMatrix, this.rotationMatrix)
    this.updateMatrix()
  }

  private updateMovementMatrix() {
    this.movementMatrix = Matrix4.translation(
      this._position[0], this._position[1], this._position[2]
    )
    this.updateWorldMatrix()
  }

  private updateRotationMatrix() {
    let rotationMatrix = Matrix4.rotationY(this.rotation.y);
    rotationMatrix = Matrix4.multiply(rotationMatrix, Matrix4.rotationX(this.rotation.x));
    rotationMatrix = Matrix4.multiply(rotationMatrix, Matrix4.rotationZ(this.rotation.z));

    this.rotationMatrix = rotationMatrix

    this.updateWorldMatrix()
  }

  private recomputeMatrix() {
    this.updatePerspectiveMatrix()
    this.updateMovementMatrix()
    this.updateRotationMatrix()
  }

  public rotate(x: number, y: number, z: number) {
    this._rotation = Vector.add(this._rotation, [x, y, z])
    this.updateRotationMatrix()
  }

  public setPosition(x: number, y: number, z: number) {
    this._position = [x, y, z]
    this.updateMovementMatrix()
  }

  public move(x: number, y: number, z: number) {
    const rotatedVector = Matrix4.multiplyVector4(Matrix4.inverse(this.rotationMatrix), [x, y, z, 1])
    this._position = Vector.add(this._position, rotatedVector)
    this.updateMovementMatrix()
  }
}