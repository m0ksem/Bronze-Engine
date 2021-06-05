import { Texture } from "./texture"
import { createTexture } from "./utils"

export class CubeTexture extends Texture {
  private textures: HTMLImageElement[] | any = [
    new Uint8Array([229, 91, 91, 255]),
    new Uint8Array([229, 91, 91, 255]),
    new Uint8Array([229, 91, 91, 255]),
    new Uint8Array([229, 91, 91, 255]),
    new Uint8Array([229, 91, 91, 255]),
    new Uint8Array([229, 91, 91, 255]),
  ]

  set src(val: string[]) {
    if (val.length != 6) {
      throw new Error('Cube texture must have 6 src textures')
    }

    let loadedTexturesCount = 0
    for (let i = 0; i < 6; i++) {
      const img = new Image()
      
      img.src = val[i]
      img.onload = () => {
        this.textures[i] = img
        loadedTexturesCount += 1
        if (loadedTexturesCount != 6) { return }
        
        this.bindTexture()
      }
    }
  }

  private bindTexture() {
    const { webgl } = this

    this.webglTexture = createTexture(webgl)
    webgl.activeTexture(webgl.TEXTURE0 + this.textureIndex)
    webgl.bindTexture(webgl.TEXTURE_CUBE_MAP, this.webglTexture)

    const faces = [
      webgl.TEXTURE_CUBE_MAP_POSITIVE_X,
      webgl.TEXTURE_CUBE_MAP_NEGATIVE_X,
      webgl.TEXTURE_CUBE_MAP_POSITIVE_Y,
      webgl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
      webgl.TEXTURE_CUBE_MAP_POSITIVE_Z,
      webgl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
    ]

    faces.forEach((face, i) => {
      webgl.texImage2D(face, 0, webgl.RGBA, webgl.RGBA, webgl.UNSIGNED_BYTE, this.textures[i])
    })

    webgl.generateMipmap(webgl.TEXTURE_CUBE_MAP)
    webgl.texParameteri(webgl.TEXTURE_CUBE_MAP, webgl.TEXTURE_MIN_FILTER, webgl.LINEAR_MIPMAP_LINEAR)
  }
}