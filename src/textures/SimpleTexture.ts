import { Engine } from "../Engine";
import { Texture } from "./Texture";
import {isPowerOf2} from './../math/Mathematics'

export default class SimpleTexture extends Texture {
  public textureBlockLocation: number = -1
  public mipmapFilter = 'LINEAR'

  readonly AUTO_GENERATE: number = 0
  readonly QUICK_GENERATE: number = 1

  private _mipmap: Array<HTMLImageElement | HTMLCanvasElement> = []
  private _onTextureLoadedHandlers: Array<Function> = []
  private _width: number = -1
  private _height: number = -1
  private _image: HTMLImageElement = new Image()
  private _mipmapGenerationMethod: number = -1

  constructor(engine: Engine, path?: string) {
    super(engine)
    this.engine = engine
    this.textureBlockLocation = this.engine.textures.length
    this.engine.textures.push(this)
    let webgl = this.engine.webgl
    this.webglTexture = webgl.createTexture()
    webgl.activeTexture(webgl.TEXTURE0 + this.textureBlockLocation)
    webgl.bindTexture(webgl.TEXTURE_2D, this.webglTexture)
    webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, 1, 1, 0, webgl.RGBA, webgl.UNSIGNED_BYTE, this.color);
  }

  public get image(): HTMLImageElement {
    return this._image
  }

  public set height(v: number) {
    this._height = v
    this._image.height = v
  }
  public get height(): number {
    return this._height
  }

  public set width(v: number) {
    this._width = v
    this._image.width = v
  }
  public get width(): number {
    return this._width
  }

  public setMipmapGenerationMethod (method: number): void {
    this._mipmapGenerationMethod = method
  }

  public setSize (width: number, height: number) {
    this.width = width
    this.height = height
    this._image.width = width
    this._image.height = height
    if (this.loaded) {
      this._createWebglTexture()
    }
  }
  

  private _createWebglTexture (): void {
    let webgl = this.engine.webgl
    webgl.activeTexture(webgl.TEXTURE0 + this.textureBlockLocation)
    let mipmapFilter
    let mipmapRequire = true
    switch (this.mipmapFilter) {
      case 'NEAREST':
        mipmapFilter = webgl.NEAREST
        mipmapRequire = false
        break
      case 'LINEAR':
        mipmapFilter = webgl.LINEAR
        mipmapRequire = false
        break
      case 'NEAREST_MIPMAP_NEAREST':
        mipmapFilter = webgl.NEAREST_MIPMAP_NEAREST
        break
      case 'LINEAR_MIPMAP_NEAREST':
        mipmapFilter = webgl.LINEAR_MIPMAP_NEAREST
        break
      case 'NEAREST_MIPMAP_LINEAR':
        mipmapFilter = webgl.LINEAR_MIPMAP_NEAREST
        break
      case 'LINEAR_MIPMAP_LINEAR':
        mipmapFilter = webgl.LINEAR_MIPMAP_LINEAR
        break
      default:
        mipmapRequire = false
        mipmapFilter = webgl.LINEAR
        break
    }

    webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MIN_FILTER, mipmapFilter)
    webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MAG_FILTER, webgl.LINEAR)

    if (this._mipmapGenerationMethod == this.QUICK_GENERATE) {
      if (this.width / this.height == 2) {
        let i = this.height
        let offsetX = 0
        while (true) {
          let tempCanvas = document.createElement("canvas");
          tempCanvas.width = i
          tempCanvas.height = i
          let tempCanvasContext: CanvasRenderingContext2D = tempCanvas.getContext("2d")!;
          tempCanvasContext.drawImage(this._image, offsetX, 0, i, i, 0, 0, i, i)
          this._mipmap.push(tempCanvas)
          if (i == 1) {
            break;
          }
          offsetX += i
          i = i / 2
        }
      } else {
        return console.warn('Wrong _image sizes for quick generation _mipmap.')
      }
    }

    if (mipmapRequire && !(this._mipmapGenerationMethod == this.AUTO_GENERATE)) {
      if (this._mipmap.length > 0) {
        this._mipmap.forEach((mip, level) => {
          webgl.texImage2D(webgl.TEXTURE_2D, level, webgl.RGBA, webgl.RGBA, webgl.UNSIGNED_BYTE, mip)
        })
      } else {
        console.warn('Need to generate mipmaps for texture:')
        console.warn(this)
      }
    } else {
      webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, webgl.RGBA, webgl.UNSIGNED_BYTE, this._image);
    }

    if ((mipmapRequire || this._mipmapGenerationMethod == this.AUTO_GENERATE) && isPowerOf2(this._width) && isPowerOf2(this._height)) {
      webgl.generateMipmap(webgl.TEXTURE_2D)
    } else {
      webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_WRAP_S, webgl.CLAMP_TO_EDGE);
      webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_WRAP_T, webgl.CLAMP_TO_EDGE);
    }
  }

  public loadFrom(path: string) {
    this._image.src = path
    this._image.addEventListener('load', () => {
      this.engine.textureLoaded(this)
      this.loaded = true
      for (let i = 0; i < this._onTextureLoadedHandlers.length; i++) {
        this._onTextureLoadedHandlers[i]()
      }

      if (this._height == -1 || this._width == -1) {
        this._height = this._image.height
        this._width = this._image.width
      }

      this._createWebglTexture()
    })
  }
}

export {
  SimpleTexture
}