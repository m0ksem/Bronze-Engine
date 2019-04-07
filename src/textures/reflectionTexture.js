import {CubeTexture} from './CubeTexture'
import {Camera} from '../Camera'

/**
 * Reflection texture.
 * @param {Engine} engine 
 * @param {String} background
 * @param {Number} quality
 * @param {Number} alpha
 * @class
 */
export class ReflectionTexture extends CubeTexture {
    constructor(engine, background, quality, alpha) {
        super()
        this.engine = engine
        this.background = background || 'rgba(0, 0, 0, 0)'
        this.quality = quality || this.engine.reflectionQuality
        if (!alpha) {
            let alpha = background.replace('rgba(', '')
            alpha = alpha.replace(')', '')
            alpha = alpha.split(',')
            this.alpha = alpha[3]
        } else {
            this.alpha = alpha
        }
        this.engine.textureLoaded(this)
        this.engine.addOnTexturesLoaded(() => {
            if (this.object != null) {
                this.generate()
            }
        })
        this._object = null
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
        let camera = new Camera()
        camera.position = this.object.position
        camera.fieldOfViewRad = this.engine.camera.fieldOfViewRad
        camera.range = this.engine.camera.range
        camera.setRotation(0, 270, 0)
        let posXP = this.engine.captureFrame(camera, { backgroundColor: this.background, width: this.quality, height: this.quality, imageAlpha: this.alpha, noDrawObjects: [this.object]})
        camera.setRotation(0, 90, 0);
        let posXN = this.engine.captureFrame(camera, { backgroundColor: this.background, width: this.quality, height: this.quality, imageAlpha: this.alpha, noDrawObjects: [this.object]});
        camera.setRotation(-90, 0, 0);
        let posYP = this.engine.captureFrame(camera, { backgroundColor: this.background, width: this.quality, height: this.quality, imageAlpha: this.alpha, noDrawObjects: [this.object]});
        camera.setRotation(90, 0, 0);
        let posYN = this.engine.captureFrame(camera, { backgroundColor: this.background, width: this.quality, height: this.quality, imageAlpha: this.alpha, noDrawObjects: [this.object]});
        camera.setRotation(0, 0, 0);
        let posZP = this.engine.captureFrame(camera, { backgroundColor: this.background, width: this.quality, height: this.quality, imageAlpha: this.alpha, noDrawObjects: [this.object]});
        camera.setRotation(0, 180, 0);
        let posZN = this.engine.captureFrame(camera, { backgroundColor: this.background, width: this.quality, height: this.quality, imageAlpha: this.alpha, noDrawObjects: [this.object]});
        if (this.alpha < 1) {
            this.alpha = true
        }
        this.bind(this.engine)
        this.setLoadedImages(
            posXP, posXN, posYN, posYP, posZP, posZN
        )
        this.engine.div.append(posXP)
        this.engine.div.append(posXN)
        this.engine.div.append(posYP)
        this.engine.div.append(posYN)
        this.engine.div.append(posZP)
        this.engine.div.append(posZN)
        // this.engine.camera.position = this.object.position
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