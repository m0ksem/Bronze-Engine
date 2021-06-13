import { degToRad, Matrix4, Vector, Vector3, Vector3Array } from '../math'

export class Entity {
  protected _rotation: Vector3Array =  [0, 0, 0]
  protected _position: Vector3Array = [0, 0, 0]
  protected _scaling: Vector3Array = [0, 0, 0]

  positionMatrix: number[] = Matrix4.unit()
  rotationMatrix: number[] = Matrix4.unit()
  scaleMatrix: number[] = Matrix4.unit()
  worldMatrix: number[] = Matrix4.unit()

  public get position(): Vector3 {
    return Vector.arrayToXYZ(this._position)
  }

  public get rotation(): Vector3 {
    return Vector.arrayToXYZ(this._rotation)
  }

  public get scaling(): Vector3 {
    return Vector.arrayToXYZ(this._scaling)
  }

  protected updateWorldMatrix() {
    this.worldMatrix = Matrix4.multiply(this.positionMatrix, this.rotationMatrix)
    this.worldMatrix = Matrix4.multiply(this.worldMatrix, this.scaleMatrix)
  }

  protected updatePositionMatrix() {
    this.positionMatrix = Matrix4.translation(
      this._position[0], this._position[1], this._position[2]
    )
    this.updateWorldMatrix()
  }

  protected updateScaleMatrix() {
    this.scaleMatrix = Matrix4.scaling(
      this._scaling[0], this._scaling[1], this._scaling[2]
    )
    this.updateWorldMatrix()
  }

  protected updateRotateMatrix() {
    // Ensure rotation is a good method for Entity
    this.rotationMatrix = Matrix4.rotation(
      degToRad(this._rotation[0]), 
      degToRad(this._rotation[1]),
      degToRad(this._rotation[2])
    )
    this.updateWorldMatrix()
  }

  public setRotation(x: number, y: number, z: number) {
    this._rotation = [x, y, z]
    this.updateRotateMatrix()
  }

  public rotate(x: number, y: number, z: number) {
    this._rotation = Vector.add(this._rotation, [x, y, z]) as Vector3Array
    this.updateRotateMatrix()
  }

  public setPosition(x: number, y: number, z: number) {
    this._position = [x, y, z]
    this.updatePositionMatrix()
  }

  public move(x: number, y: number, z: number) {
    const rotatedVector = Matrix4.multiplyVector4(Matrix4.inverse(this.rotationMatrix), [x, y, z, 1])
    this._position = Vector.add(this._position, rotatedVector) as Vector3Array
    this.updatePositionMatrix()
  }

  public setScaling(x: number, y: number, z: number) {
    this._scaling = [x, y, z]
    this.updateScaleMatrix()
  }

  public scale(x: number, y: number, z: number) {
    this._scaling = Vector.add(this._scaling, [x, y, z]) as Vector3Array
    this.updateScaleMatrix()
  }
}