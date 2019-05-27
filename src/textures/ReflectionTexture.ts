import { CubeTexture } from './CubeTexture'
import { Camera } from '../Camera'
import { Engine } from '../Engine';
import Entity from '../objects/Entity';

let anotherTextures: ReflectionTexture[] = []
let loadedReflectionCount = 0
/**
 * Reflection texture.
 */
export class ReflectionTexture extends CubeTexture {
  private _background: string | HTMLImageElement;
  private _quality: number;
  private _reflectionAlpha: number = -1;
  private _object: null | Entity;
  private _camera: Camera;

  constructor(engine: Engine, background: string | HTMLImageElement, quality: number, reflectionAlpha: string | number) {
    super(engine)

    anotherTextures.push(this)
    engine.reflections = true

    this.alpha = true
    this.loaded = false

    this._background = background || 'rgba(0, 0, 0, 0)'
    this._quality = quality || 512
    this._object = null

    let texture = document.createElement('canvas')
    let context = texture.getContext('2d')!
    texture.width = 16
    texture.height = 16
    if (typeof (background) === 'string') {
      if (!reflectionAlpha) {
        let reflectionAlpha = background.replace('rgba(', '')
        reflectionAlpha = reflectionAlpha.replace(')', '')
        reflectionAlpha = reflectionAlpha.split(',')[3]
        this._reflectionAlpha = Number(reflectionAlpha)
      } else {
        this._reflectionAlpha = Number(reflectionAlpha)
      }
      context.fillStyle = background
      context.fillRect(0, 0, 16, 16)
    } else if (background.constructor === HTMLImageElement) {
      if (!reflectionAlpha) {
        this._reflectionAlpha = 1
      } else {
        this._reflectionAlpha = Number(reflectionAlpha)
      }
      texture.width = Number(background.width)
      texture.height = Number(background.height)
      context.drawImage(background, 0, 0, background.width, background.height)
    }

    this.webglTexture = this.webgl.createTexture()
    this.webgl.bindTexture(this.webgl.TEXTURE_CUBE_MAP, this.webglTexture)
    this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, texture)
    this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, texture)
    this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, texture)
    this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, texture)
    this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, texture)
    this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, texture)
    this.webgl.generateMipmap(this.webgl.TEXTURE_CUBE_MAP)
    this.webgl.texParameteri(this.webgl.TEXTURE_CUBE_MAP, this.webgl.TEXTURE_MIN_FILTER, this.webgl.LINEAR_MIPMAP_LINEAR)

    this.engine.textureLoaded(this)
    this.engine.addOnResourcesLoadedListener(() => {
      if (this.object != null) {
        setTimeout(() => {
          this.generate()
        }, 1000)
      }
    })

    this._camera = new Camera(this.engine)
    this._camera.fieldOfViewRad = this.engine.camera!.fieldOfViewRad
    this._camera.range = this.engine.camera!.range
  }

  get object(): Entity {
    return this._object!
  }

  set object(object) {
    object.updateMatrixes()
    object.update()
    this._object = object
    if (this.engine.resourcesLoaded) {
      this.generate()
    }
  }

  protected generate() {
    this.object.updateMatrixes()
    this.object.update()
    this._camera.position = this.object!.position.copy()
    if (!this.object.verticalAlign) {
      this._camera.position.move(0, -(this.object.size.current.max.y - this.object.size.current.min.y) / 2, 0)
    }
    this._camera.setRotation(0, 270, 0)
    let posXP = this.engine.captureFrame(this._camera, { background: this._background, width: this._quality, height: this._quality, imageAlpha: this._reflectionAlpha, noDrawObjects: [this.object] })
    this._camera.setRotation(0, 90, 0);
    let posXN = this.engine.captureFrame(this._camera, { background: this._background, width: this._quality, height: this._quality, imageAlpha: this._reflectionAlpha, noDrawObjects: [this.object] });
    this._camera.setRotation(-90, 0, 0);
    let posYP = this.engine.captureFrame(this._camera, { background: this._background, width: this._quality, height: this._quality, imageAlpha: this._reflectionAlpha, noDrawObjects: [this.object] });
    this._camera.setRotation(90, 0, 0);
    let posYN = this.engine.captureFrame(this._camera, { background: this._background, width: this._quality, height: this._quality, imageAlpha: this._reflectionAlpha, noDrawObjects: [this.object] });
    this._camera.setRotation(0, 0, 0);
    let posZP = this.engine.captureFrame(this._camera, { background: this._background, width: this._quality, height: this._quality, imageAlpha: this._reflectionAlpha, noDrawObjects: [this.object] });
    this._camera.setRotation(0, 180, 0);
    let posZN = this.engine.captureFrame(this._camera, { background: this._background, width: this._quality, height: this._quality, imageAlpha: this._reflectionAlpha, noDrawObjects: [this.object] });
    this.setLoadedImages(
      posXP,
      posXN,
      posYN,
      posYP,
      posZP,
      posZN
    )

    loadedReflectionCount++
    if (anotherTextures.length == loadedReflectionCount) {
      for (let i = 0; i < anotherTextures.length; i++) {
        anotherTextures[i].generate()
      }
      this.engine.appendCanvas()
      this.engine.status = 'Drawing'
    }
  }

  

  protected bindCubeTexture() {
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
    this.loaded = true
  }
}

export default ReflectionTexture;