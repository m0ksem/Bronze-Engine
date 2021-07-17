import { Matrix4, Vector, Vector3, Vector3Array } from ".."

const DEFAULT_RANGE = 999999

export class PointLight {
  _position: Vector3Array = [0, 0, 0]

  range: number = DEFAULT_RANGE
  minLight: number = 0.1

  public get position(): Vector3 {
    return Vector.arrayToXYZ(this._position)
  }

  public setPosition(x: number, y: number, z: number) {
    this._position = [x, y, z]
  }
}