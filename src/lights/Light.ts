import { Engine } from "../Engine";
import { Vector3 } from "../math/Vector3";

let lightsCount = 0

export default class Light {
  public engine: Engine;
  private _position: Vector3 = new Vector3(0, 0, 0)
  private _range: number = 2000;
  private _color: Uint8Array = new Uint8Array([255, 255, 255, 255]);
  private _index: number = -1;
  private _on: boolean = false;
  private _positionsWritten: boolean = false;
  private _rangeWritten: boolean = false;

  constructor(engine: Engine) {
    lightsCount++
    if (lightsCount > 28) {
      throw new Error('There are can be only 28 lights. Sorry :(')
    }

    this.engine = engine

    this._range = 2000

    this._on = false
  }

  /**
    Range of light
   */
  set range(value: number) {
    this._range = value
    if (this._on && !this._rangeWritten) {
      this.engine.lightsRanges.push(value)
    } else if (this._on) {
      this.engine.lightsRanges[this._index] = value
    }
  }

  /**
   * Range of light
   */
  get range(): number {
    return this._range
  }

  set position(value: Vector3) {
    this._position = value
    if (this._on && !this._positionsWritten) {
      this.engine.lightsPositions.push(value.x)
      this.engine.lightsPositions.push(value.y)
      this.engine.lightsPositions.push(value.z)
      this._positionsWritten = true
    }
    else if (this._on) {
      this.engine.lightsPositions[this._index * 3 + 0] = value.x
      this.engine.lightsPositions[this._index * 3 + 1] = value.y
      this.engine.lightsPositions[this._index * 3 + 2] = value.z
    }
  }

  get position(): Vector3 {
    return this._position
  }

  /**
   * Sets position for object. Using another vector.
   */
  public setPosition(vector: Vector3): void
  /**
   * Sets position for object. Using array of coordinates.
   */
  public setPosition(array: number[]): void
  /**
   * Sets position for object. Using coordinates.
   */
  public setPosition(x: number, y: number, z: number): void

  public setPosition(value: any, y?: number, z?: number): void {
    if (value.constructor === Vector3) {
      this._position = value
      return
    }
    else if (value.constructor === Array) {
      this._position.set(value[0], value[1], value[2])
      return
    } else {
      this._position.set(value, y!, z!)
    }
  }

  /**
   * Move light
   * @param x 
   * @param y 
   * @param z 
   */
  public move(x: number, y: number, z: number) {
    this.position.move(x, y, z)
  }

  /**
   * Set range for light
   */
  public setRange(value: number) {
    this.range = value
  }

  /**
   * Setting color of light
   * @param r red value from 0 to 255.
   * @param g green value from 0 to 255.
   * @param b blue value from 0 to 255.
   * @param a alpha value from 0 to 255.
   * @public
   */
  public setColorRGBA(r: number, g: number, b: number, a: number) {
    this._color = new Uint8Array([r, g, b, a])
  }

  /**
   * Turn light on. Light will be drawn if turned on.
   */
  public on() {
    this._index = this.engine.lights.length
    this._on = true
    this.engine.lights.push(this)
    this.position = this._position
    this.range = this._range
  }

  /**
   * Turn off light. Remove this light from drawing process.
   */
  public off() {
    let index = this._index
    this.engine.lights.splice(index, 1)
    this.engine.lightsPositions.splice(index * 3 + 0, 3)
    this.engine.lightsRanges.splice(index, 1)
    this._positionsWritten = false
    this._rangeWritten = false
  }
}

export {
  Light
}
