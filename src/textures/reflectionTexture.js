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
export class ReflectionTexture {
    constructor(engine, background, quality, alpha) {
        this.engine = engine
        background = background || 'rgba(0, 0, 0, 0)'
        quality = quality || this.engine.reflectionQuality
        if (!alpha) {
            let alpha = background.replace('rgba(', '')
            alpha = alpha.replace(')', '')
            alpha = alpha.split(',')
            alpha = alpha[3]
        }
    }

    generate () {
        let camera = new Camera()
        camera.position = this.position
        camera.fieldOfViewRad = this.engine.camera.fieldOfViewRad
        camera.range = this.engine.camera.range
        camera.setRotation(0, 270, 0)
        let posXP = this.engine.captureFrame(camera, { backgroundColor: background, width: quality, height: quality, imageAlpha: alpha })
        camera.setRotation(0, 90, 0);
        let posXN = this.engine.captureFrame(camera, { backgroundColor: background, width: quality, height: quality, imageAlpha: alpha });
        camera.setRotation(-90, 0, 0);
        let posYP = this.engine.captureFrame(camera, { backgroundColor: background, width: quality, height: quality, imageAlpha: alpha });
        camera.setRotation(90, 0, 0);
        let posYN = this.engine.captureFrame(camera, { backgroundColor: background, width: quality, height: quality, imageAlpha: alpha });
        camera.setRotation(0, 0, 0);
        let posZP = this.engine.captureFrame(camera, { backgroundColor: background, width: quality, height: quality, imageAlpha: alpha });
        camera.setRotation(0, 180, 0);
        let posZN = this.engine.captureFrame(camera, { backgroundColor: background, width: quality, height: quality, imageAlpha: alpha });

        let texture = new CubeTexture()
        if (alpha < 1) {
            texture.alpha = true
        }
        texture.bind(this.engine)
        texture.setLoadedImages(
            posXP, posXN, posYN, posYP, posZP, posZN
        )

        camera.setRotation(0, 90, 0)
        posXP = this.engine.captureFrame(camera, { width: 128, height: 128 })
        camera.setRotation(0, 270, 0);
        posXN = this.engine.captureFrame(camera, { backgroundColor: 'rgba(25, 23, 22, 1)', width: 128, height: 128 });
        camera.setRotation(90, 0, 0);
        posYP = this.engine.captureFrame(camera, { backgroundColor: 'rgba(25, 23, 22, 1)', width: 128, height: 128 });
        camera.setRotation(-90, 0, 0);
        posYN = this.engine.captureFrame(camera, { backgroundColor: 'rgba(25, 23, 22, 1)', width: 128, height: 128 });
        camera.setRotation(0, 0, 0);
        posZP = this.engine.captureFrame(camera, { backgroundColor: 'rgba(25, 23, 22, 1)', width: 128, height: 128 });
        camera.setRotation(0, 180, 0);
        posZN = this.engine.captureFrame(camera, { backgroundColor: 'rgba(25, 23, 22, 1)', width: 128, height: 128 });
    }
}