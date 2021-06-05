import { Texture } from "./texture";
import { createTexture } from './utils'
import { getContext2D } from '../utils/get-context'

const skyboxImagesCoords = (normalizedCoords: number[][], size: number) => {
  return normalizedCoords.map((cropCoords) => ({ dx: cropCoords[0] * size, dy: cropCoords[1] * size }))
}

function createCanvas(width: number, height: number): HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  return canvas
}

export class SkyboxTexture extends Texture {
  public normalizedCoords = [
    /*   */ [1, 0],
    [0, 1], [1, 1], [2, 1], [3, 1],
    /*   */ [1, 2],
  ]

  public skyboxDirections = [
     /* */ 'y+',
     'x-', 'z+', 'x+', 'z-',
     /* */ 'y-',
  ]

  private skyboxDirectionsMap: { [key: string]: any } = {
    'x-': this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_X,
    'x+': this.webgl.TEXTURE_CUBE_MAP_POSITIVE_X,
    'z-': this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_Z,
    'z+': this.webgl.TEXTURE_CUBE_MAP_POSITIVE_Z,
    'y-': this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
    'y+': this.webgl.TEXTURE_CUBE_MAP_POSITIVE_Y,
  }

  private textures: HTMLImageElement[] | HTMLCanvasElement[] = []

  private parseSkyboxTexture(texture: HTMLImageElement) {
    let w = texture.width
    let h = texture.height
    if (h / 3 !== w / 4) { throw 'Wrong sizes for texture. Texture must be Skyblock 4x3 squares.' }

    const cropSize = h / 3
    const cropCoords = skyboxImagesCoords(this.normalizedCoords, cropSize)
    
    return cropCoords.map(({dx, dy}) => {
      const canvas = createCanvas(cropSize, cropSize)
      const ctx = getContext2D(canvas)
      ctx.drawImage(texture, dx, dy , cropSize, cropSize, 0, 0, cropSize, cropSize)
      return canvas
    })
  }

  set src(val: string) {
    const img = new Image()
      img.src = val
      img.onload = () => {
        this.textures = this.parseSkyboxTexture(img)
        this.bindTexture()
      }
  }

  private bindTexture() {
    const { webgl } = this

    this.webglTexture = createTexture(webgl)
    webgl.activeTexture(webgl.TEXTURE0 + this.textureIndex)
    webgl.bindTexture(webgl.TEXTURE_CUBE_MAP, this.webglTexture)

    
    this.skyboxDirections.forEach((face, i) => {
      const webglDirection = this.skyboxDirectionsMap[face]
      webgl.texImage2D(webglDirection, 0, webgl.RGBA, webgl.RGBA, webgl.UNSIGNED_BYTE, this.textures[i])
    })

    webgl.generateMipmap(webgl.TEXTURE_CUBE_MAP)
    webgl.texParameteri(webgl.TEXTURE_CUBE_MAP, webgl.TEXTURE_MIN_FILTER, webgl.LINEAR_MIPMAP_LINEAR)
  }
}