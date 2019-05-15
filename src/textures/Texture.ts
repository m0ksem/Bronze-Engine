import { Engine } from "../Engine";
import BronzeError from "../debug/Error";



export default abstract class Texture {
  public alpha: boolean = false
  public color: Uint8Array = new Uint8Array([229, 91, 91, 255])
  public engine: Engine
  public textureBlockLocation: number = -1
  public loaded: boolean = false
  public webglTexture: any

  constructor(engine: Engine) {
    this.engine = engine
  }

  /**
   * Sets color for texture
   * @param r number from 0 to 255
   * @param g number from 0 to 255
   * @param b number from 0 to 255
   * @param a number from 0 to 255
   */
  public setColor (r: number, g: number, b: number, a: number): void 

  /**
   * Sets color for texture
   * @param hexColor 
   */
  public setColor (hexColor: string): void

  public setColor(r: number | string, g?: number, b?: number, a?: number): void {
    if (r.constructor instanceof String) {
      let rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(String(r));
      if (rgb == null) {
        new BronzeError('Wrong hex color!')
        return
      }
      this.color = new Uint8Array([
        parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]), 255
      ])
    } else if (r.constructor === Number && g != undefined && b != undefined && a != undefined) {
      this.color = new Uint8Array([Number(r), g, b, a])
      let webgl = this.engine.webgl
      webgl.activeTexture(webgl.TEXTURE0 + this.textureBlockLocation)
      webgl.bindTexture(webgl.TEXTURE_2D, this.webglTexture)
      webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, 1, 1, 0, webgl.RGBA, webgl.UNSIGNED_BYTE, this.color);
    } else {
      new BronzeError('Wrong color')
      return
    }
    let webgl = this.engine.webgl
    webgl.activeTexture(webgl.TEXTURE0 + this.textureBlockLocation)
    webgl.bindTexture(webgl.TEXTURE_2D, this.webglTexture)
    webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, 1, 1, 0, webgl.RGBA, webgl.UNSIGNED_BYTE, this.color);
  }
}

export {
  Texture
}