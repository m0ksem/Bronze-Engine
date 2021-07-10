import { Texture } from "./texture"
import { createTexture } from './utils'

function hexToRgb(hex: string) {
  hex = hex.replace('#','');

  return new Uint8Array([
    parseInt(hex.substring(0,2), 16),
    parseInt(hex.substring(2,4), 16),
    parseInt(hex.substring(4,6), 16),
    255
  ])
}

export class ColorTexture extends Texture {
  constructor(webgl: WebGL2RenderingContext, color: string | number[]) {
    super(webgl, true)


    if (typeof color === 'string') {
      this.color = hexToRgb(color)
    } else {
      this.color = color.length === 3 ? new Uint8Array([...color, 255]) : new Uint8Array(color)
    }
    

    this.bindTexture()
  }

  private bindTexture() {
    const { webgl } = this
    this.webglTexture = createTexture(webgl)
    webgl.activeTexture(webgl.TEXTURE0 + this.textureIndex)
    webgl.bindTexture(webgl.TEXTURE_2D, this.webglTexture)
    webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, 1, 1, 0, webgl.RGBA, webgl.UNSIGNED_BYTE, this.color);
  }
}