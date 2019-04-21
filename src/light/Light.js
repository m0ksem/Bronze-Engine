export class Light {
    constructor (engine) {
        this.engine = engine

        this.engine.lights.push(this)

        this.position = [0, 0, 0]

        this.range = 2000

        this.color = new Uint8Array([255, 255, 255, 255])
    }

    /**
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    setPosition(x, y, z) {
        this.position = [x, y, z]
    }

    /**
     * Set range for light
     * @param {Number} value 
     */
    setRange(value) {
        this.range = value 
    }

    /**
     * Setting color of light
     * @param {Number} r red value from 0 to 255.
     * @param {Number} g green value from 0 to 255.
     * @param {Number} b blue value from 0 to 255.
     * @param {Number} a alpha value from 0 to 255.
     * @public
     */
    setColorRGBA(r, g, b, a) {
        this.color = new Uint8Array([r, g, b, a])
    }
}