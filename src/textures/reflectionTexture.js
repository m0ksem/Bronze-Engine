import {CubeTexture} from './CubeTexture'
import {Camera} from '../Camera'

/**
 * Reflection texture.
 * @param {Engine} engine 
 * @param {String|Image} background
 * @param {Number} quality
 * @param {Number} alpha
 * @class
 */
export class ReflectionTexture extends CubeTexture {
    constructor(engine, background, quality, reflectionAlpha) {
        super()
        this.engine = engine
        this.webGL = engine.webGL
        this.background = background || 'rgba(0, 0, 0, 0)'
        this.quality = quality || this.engine.reflectionQuality
        if (!reflectionAlpha) {
            let reflectionAlpha = background.replace('rgba(', '')
            reflectionAlpha = alpha.replace(')', '')
            reflectionAlpha = alpha.split(',')
            this.reflectionAlpha = reflectionAlpha[3]
        } else {
            this.reflectionAlpha = reflectionAlpha
        }

        if (this.reflectionAlpha < 1) {
            this.alpha = true
        } else {
            this.alpha = false
        }

        this._object = null

        let texture = document.createElement('canvas')
            texture.width = background.width || 16
            texture.height = background.height || 16
        let context = texture.getContext('2d')
        if (typeof(background) === 'string') {
            context.fillStyle = background
            context.fillRect(0, 0, 16, 16)
        } else if (typeof(background) === 'image') {
            context.drawImage(background, 0, 0, background.width, background.height)
        }

        this._WebGLTexture = this.webGL.createTexture()
        this.webGL.bindTexture(this.webGL.TEXTURE_CUBE_MAP, this._WebGLTexture)
        this.webGL.texImage2D(this.webGL.TEXTURE_CUBE_MAP_POSITIVE_X, 0, this.webGL.RGBA, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, texture)
        this.webGL.texImage2D(this.webGL.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, this.webGL.RGBA, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, texture)
        this.webGL.texImage2D(this.webGL.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, this.webGL.RGBA, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, texture)
        this.webGL.texImage2D(this.webGL.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, this.webGL.RGBA, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, texture)
        this.webGL.texImage2D(this.webGL.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, this.webGL.RGBA, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, texture)
        this.webGL.texImage2D(this.webGL.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, this.webGL.RGBA, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, texture)
        this.webGL.generateMipmap(this.webGL.TEXTURE_CUBE_MAP)
        this.webGL.texParameteri(this.webGL.TEXTURE_CUBE_MAP, this.webGL.TEXTURE_MIN_FILTER, this.webGL.LINEAR_MIPMAP_LINEAR)

        this.engine.textureLoaded(this)
        this.engine.addOnResourcesLoaded(() => {
            if (this.object != null) {
                this.generate()
            }
        })

        this.camera = new Camera()
        this.camera.fieldOfViewRad = this.engine.camera.fieldOfViewRad
        this.camera.range = this.engine.camera.range
    }

    get object() {
        return this._object
    }

    set object(object) {
        this._object = object
        if (this.engine.texturesLoaded) {
            this.generate()
        }
    }

    generate () {
        this.camera.position = this.object.position
        this.camera.setRotation(0, 270, 0)
        let posXP = this.engine.captureFrame(this.camera, { background: this.background, width: this.quality, height: this.quality, imageAlpha: this.reflectionAlpha, noDrawObjects: [this.object]})
        this.camera.setRotation(0, 90, 0);
        let posXN = this.engine.captureFrame(this.camera, { background: this.background, width: this.quality, height: this.quality, imageAlpha: this.reflectionAlpha, noDrawObjects: [this.object]});
        this.camera.setRotation(-90, 0, 0);
        let posYP = this.engine.captureFrame(this.camera, { background: this.background, width: this.quality, height: this.quality, imageAlpha: this.reflectionAlpha, noDrawObjects: [this.object]});
        this.camera.setRotation(90, 0, 0);
        let posYN = this.engine.captureFrame(this.camera, { background: this.background, width: this.quality, height: this.quality, imageAlpha: this.reflectionAlpha, noDrawObjects: [this.object]});
        this.camera.setRotation(0, 0, 0);
        let posZP = this.engine.captureFrame(this.camera, { background: this.background, width: this.quality, height: this.quality, imageAlpha: this.reflectionAlpha, noDrawObjects: [this.object]});
        this.camera.setRotation(0, 180, 0);
        let posZN = this.engine.captureFrame(this.camera, { background: this.background, width: this.quality, height: this.quality, imageAlpha: this.reflectionAlpha, noDrawObjects: [this.object]});
        
        this.bind(this.engine)
        this.setLoadedImages(
            posXP,
            posXN,
            posYN,
            posYP,
            posZP,
            posZN
        )
    }

    bindCubeTexture() {
        this.engine.webGL.activeTexture(this.engine.webGL.TEXTURE0 + this._textureBlockLocation)
        this._WebGLTexture = this.webGL.createTexture()
        this.webGL.bindTexture(this.webGL.TEXTURE_CUBE_MAP, this._WebGLTexture)
        this.webGL.texImage2D(this.webGL.TEXTURE_CUBE_MAP_POSITIVE_X, 0, this.webGL.RGBA, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, this.textures.positiveX)
        this.webGL.texImage2D(this.webGL.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, this.webGL.RGBA, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, this.textures.negativeX)
        this.webGL.texImage2D(this.webGL.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, this.webGL.RGBA, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, this.textures.positiveY)
        this.webGL.texImage2D(this.webGL.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, this.webGL.RGBA, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, this.textures.negativeY)
        this.webGL.texImage2D(this.webGL.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, this.webGL.RGBA, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, this.textures.positiveZ)
        this.webGL.texImage2D(this.webGL.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, this.webGL.RGBA, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, this.textures.negativeZ)
        this.webGL.generateMipmap(this.webGL.TEXTURE_CUBE_MAP)
        this.webGL.texParameteri(this.webGL.TEXTURE_CUBE_MAP, this.webGL.TEXTURE_MIN_FILTER, this.webGL.LINEAR_MIPMAP_LINEAR)
    }
}