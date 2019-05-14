import Texture from "./Texture";
import { Engine } from "../Engine";
import SimpleTexture from "./SimpleTexture";

/**
 * Cube texture.
 * @class
 */
export class CubeTexture extends Texture {
  public textures: {
    positiveX: HTMLImageElement | HTMLCanvasElement | null;
    negativeX: HTMLImageElement | HTMLCanvasElement | null;
    positiveY: HTMLImageElement | HTMLCanvasElement | null;
    negativeY: HTMLImageElement | HTMLCanvasElement | null;
    positiveZ: HTMLImageElement | HTMLCanvasElement | null;
    negativeZ: HTMLImageElement | HTMLCanvasElement | null;
  }

  protected _onTextureLoad: Function[];
  protected webgl: WebGLRenderingContext
  protected _loadedTextureCount: number = 0;


  constructor(engine: Engine) {
    super(engine)

    this.engine = engine
    this.engine.textures.push(this)
    this.webgl = engine.webgl
    this.textureBlockLocation = this.engine.textures.length
    this.webglTexture = this.engine.webgl.createTexture()
    this.engine.webgl.activeTexture(this.engine.webgl.TEXTURE0 + this.textureBlockLocation)
    this.engine.webgl.bindTexture(this.engine.webgl.TEXTURE_2D, this.webglTexture)
    this.engine.webgl.texImage2D(this.engine.webgl.TEXTURE_2D, 0, this.engine.webgl.RGBA, 1, 1, 0, this.engine.webgl.RGBA, this.engine.webgl.UNSIGNED_BYTE, this.color)

    /**
     * Execute every function in array when texture loaded.
     * @type {Function[]}
     */
    this._onTextureLoad = []

    this.loaded = false

    this.textures = {
      positiveX: null,
      negativeX: null,
      positiveY: null,
      negativeY: null,
      positiveZ: null,
      negativeZ: null,
    }

    this._loadedTextureCount = 0
  }

  /**
   * Load images from path or url.
   */
  public setImagesFromPath(positiveX: string, negativeX: string, positiveY: string, negativeY: string, positiveZ: string, negativeZ: string) {
    this.textures.positiveX = new Image()
    this.textures.positiveX.crossOrigin = ''
    this.textures.positiveX.onload = () => {
      this._loadedTextureCount++
      if (this._loadedTextureCount == 6) {
        this.loaded = true
        this._onTextureLoad.forEach(func => {
          func(this)
        })
        this.bindCubeTexture()
      }
    }
    this.textures.positiveX.src = positiveX
    this.textures.negativeX = new Image()
    this.textures.negativeX.crossOrigin = ''
    this.textures.negativeX.src = negativeX
    this.textures.negativeX.onload = () => {
      this._loadedTextureCount++
      if (this._loadedTextureCount == 6) {
        this.loaded = true
        this._onTextureLoad.forEach(func => {
          func(this)
        })
        this.bindCubeTexture()
      }
    }
    this.textures.positiveY = new Image()
    this.textures.positiveY.crossOrigin = ''
    this.textures.positiveY.src = positiveY
    this.textures.positiveY.onload = () => {
      this._loadedTextureCount++
      if (this._loadedTextureCount == 6) {
        this.loaded = true
        this._onTextureLoad.forEach(func => {
          func(this)
        })
        this.bindCubeTexture()
      }
    }
    this.textures.negativeY = new Image()
    this.textures.negativeY.crossOrigin = ''
    this.textures.negativeY.src = negativeY
    this.textures.negativeY.onload = () => {
      this._loadedTextureCount++
      if (this._loadedTextureCount == 6) {
        this.loaded = true
        this._onTextureLoad.forEach(func => {
          func(this)
        })
        this.bindCubeTexture()
      }
    }
    this.textures.positiveZ = new Image()
    this.textures.positiveZ.crossOrigin = ''
    this.textures.positiveZ.src = positiveZ
    this.textures.positiveZ.onload = () => {
      this._loadedTextureCount++
      if (this._loadedTextureCount == 6) {
        this.loaded = true
        this._onTextureLoad.forEach(func => {
          func(this)
        })
        this.bindCubeTexture()
      }
    }
    this.textures.negativeZ = new Image()
    this.textures.negativeZ.crossOrigin = ''
    this.textures.negativeZ.src = negativeZ
    this.textures.negativeZ.onload = () => {
      this._loadedTextureCount++
      if (this._loadedTextureCount == 6) {
        this.loaded = true
        this._onTextureLoad.forEach(func => {
          func(this)
        })
        this.bindCubeTexture()
      }
    }
  }

  /**
   * Sets images that have src, but not loaded.
   */
  public setLoadingImages(positiveX:  HTMLImageElement, negativeX:  HTMLImageElement, positiveY: HTMLImageElement,
    negativeY: HTMLImageElement, positiveZ: HTMLImageElement, negativeZ: HTMLImageElement) {
    for (let i = 0; i < arguments.length - 1; i++) {
      if (arguments[i].width != arguments[i].height || arguments[i].height != arguments[i + 1].height || arguments[i + 1].width != arguments[i + 1].height) {
        throw 'Sizes of textures not are the same or texture isnt square.'
      }
    }
    this.textures.positiveX = this.engine.noTexture.webglTexture
    positiveX.addEventListener('load', () => {
      this.textures.positiveX = positiveX
      this._loadedTextureCount++
      if (this._loadedTextureCount == 6) {
        this.loaded = true
        this._onTextureLoad.forEach(func => {
          func(this)
        })
        this.bindCubeTexture()
      }
    })
    this.textures.negativeX = this.engine.noTexture.webglTexture
    negativeX.addEventListener('load', () => {
      this.textures.negativeX = negativeX
      this._loadedTextureCount++
      if (this._loadedTextureCount == 6) {
        this.loaded = true
        this._onTextureLoad.forEach(func => {
          func(this)
        })
        this.bindCubeTexture()
      }
    })
    this.textures.positiveY = this.engine.noTexture.webglTexture
    positiveY.addEventListener('load', () => {
      this.textures.positiveY = positiveY
      this._loadedTextureCount++
      if (this._loadedTextureCount == 6) {
        this.loaded = true
        this._onTextureLoad.forEach(func => {
          func(this)
        })
        this.bindCubeTexture()
      }
    })
    this.textures.negativeY = this.engine.noTexture.webglTexture
    negativeY.addEventListener('load', () => {
      this.textures.negativeY = negativeY
      this._loadedTextureCount++
      if (this._loadedTextureCount == 6) {
        this.loaded = true
        this._onTextureLoad.forEach(func => {
          func(this)
        })
        this.bindCubeTexture()
      }
    })
    this.textures.positiveZ = this.engine.noTexture.webglTexture
    positiveZ.addEventListener('load', () => {
      this.textures.positiveZ = positiveZ
      this._loadedTextureCount++
      if (this._loadedTextureCount == 6) {
        this.loaded = true
        this._onTextureLoad.forEach(func => {
          func(this)
        })
        this.bindCubeTexture()
      }
    })
    this.textures.negativeZ = this.engine.noTexture.webglTexture
    negativeZ.addEventListener('load', () => {
      this.textures.negativeZ = negativeZ
      this._loadedTextureCount++
      if (this._loadedTextureCount == 6) {
        this.loaded = true
        this._onTextureLoad.forEach(func => {
          func(this)
        })
        this.bindCubeTexture()
      }
    })
  }

  /**
   * Sets images that loaded.
   */
  public setLoadedImages(positiveX: HTMLImageElement | HTMLCanvasElement, negativeX: HTMLImageElement | HTMLCanvasElement, positiveY: HTMLImageElement | HTMLCanvasElement,
    negativeY: HTMLImageElement | HTMLCanvasElement, positiveZ: HTMLImageElement | HTMLCanvasElement, negativeZ: HTMLImageElement | HTMLCanvasElement) {
    this.textures.positiveX = positiveX
    this.textures.negativeX = negativeX
    this.textures.positiveY = positiveY
    this.textures.negativeY = negativeY
    this.textures.positiveZ = positiveZ
    this.textures.negativeZ = negativeZ
    this.loaded = true
    this.bindCubeTexture()
  }

  /**
   * Set skybox from path
   * @param {string} texture 
   */
  public setSkybox(path: string) {
    let texture = new Image()
    texture.crossOrigin = ''
    texture.src = path
    texture.onload = () => {
      let w = texture.width
      let h = texture.height
      let size
      if (h / 3 == w / 4) {
        size = h / 3
      } else {
        throw 'Wrong sizes for texture. Texture must be Skyblock 3x4 squares.'
      }

      let canvas = document.createElement('canvas')
      canvas.height = size
      canvas.width = size
      let context: CanvasRenderingContext2D = canvas.getContext('2d')!
      context.drawImage(texture, 0, size, size, size, 0, 0, size, size)
      this.textures.negativeX = canvas
      canvas = document.createElement('canvas')
      canvas.height = size
      canvas.width = size
      context = canvas.getContext('2d')!
      context.drawImage(texture, size * 2, size, size, size, 0, 0, size, size)
      this.textures.positiveX = canvas
      canvas = document.createElement('canvas')
      canvas.height = size
      canvas.width = size
      context = canvas.getContext('2d')!
      context.drawImage(texture, size, size, size, size, 0, 0, size, size)
      this.textures.positiveZ = canvas
      canvas = document.createElement('canvas')
      canvas.height = size
      canvas.width = size
      context = canvas.getContext('2d')!
      context.drawImage(texture, size * 3, size, size, size, 0, 0, size, size)
      this.textures.negativeZ = canvas
      canvas = document.createElement('canvas')
      canvas.height = size
      canvas.width = size
      context = canvas.getContext('2d')!
      context.drawImage(texture, size, 0, size, size, 0, 0, size, size)
      this.textures.positiveY = canvas
      canvas = document.createElement('canvas')
      canvas.height = size
      canvas.width = size
      context = canvas.getContext('2d')!
      context.drawImage(texture, size, size * 2, size, size, 0, 0, size, size)
      this.textures.negativeY = canvas
      this.loaded = true
      this._onTextureLoad.forEach(func => {
        func(this)
      })
      this.bindCubeTexture()
    }
  }

  protected bindCubeTexture(): void {
    this.engine.webgl.activeTexture(this.engine.webgl.TEXTURE0 + this.textureBlockLocation)
    this.webglTexture = this.webgl.createTexture()
    this.webgl.bindTexture(this.webgl.TEXTURE_CUBE_MAP, this.webglTexture)
    this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.positiveX!)
    this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.negativeX!)
    this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.positiveY!)
    this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.negativeY!)
    this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.positiveZ!)
    this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.negativeZ!)
    this.webgl.generateMipmap(this.webgl.TEXTURE_CUBE_MAP)
    this.webgl.texParameteri(this.webgl.TEXTURE_CUBE_MAP, this.webgl.TEXTURE_MIN_FILTER, this.webgl.LINEAR_MIPMAP_LINEAR)
    this.engine.textureLoaded(this)
    this.loaded = true
  }
}