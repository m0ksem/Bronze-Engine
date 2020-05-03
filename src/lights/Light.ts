import { Engine } from "../Engine";
import { Vector3 } from "../math/Vector3";

let lightsCount = 0

export class Light {
  public engine: Engine;
  public position: Vector3 = new Vector3(0, 0, 0)
  public range: number = 2000;
  private _color: Uint8Array = new Uint8Array([255, 255, 255, 255]);
  private _on: boolean = false;

  constructor(engine: Engine) {
    lightsCount++
    if (lightsCount > 28) {
      throw new Error('There are can be only 28 lights. Sorry :(')
    }
    this.engine = engine
    this.engine.lights.push(this)
  }
  
  public get isOn() : Boolean {
    return this._on;
  }

  public setPosition(vector: Vector3): void
  public setPosition(array: number[]): void
  public setPosition(x: number, y: number, z: number): void
  public setPosition(value: any, y?: number, z?: number): void {
    if (value.constructor === Vector3) {
      this.position.set(value.x, value.y, value.z);
    }
    else if (value.constructor === Array) {
      this.position.set(value[0], value[1], value[2]);
    } else {
      this.position.set(value, y!, z!);
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
    this._on = true
  }

  /**
   * Turn off light. Remove this light from drawing process.
   */
  public off() {
    this._on = false
  }

  public destroy() {
    this.off()
    this.engine.lights.splice(this.engine.lights.indexOf(this), 1) ;
  }
}

export default Light;
