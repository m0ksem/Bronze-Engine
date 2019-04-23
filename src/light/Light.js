let lightsCount = 0

export class Light {
    constructor (engine) {
        lightsCount++
        if (lightsCount > 28) {
            throw new Error('There are can be only 28 lights. Sorry :(')
        }

        this.engine = engine

        this._position = [0, 0, 0]

        this._range = 2000

        this.color = new Uint8Array([255, 255, 255, 255])

        this._index = null

        this._on = false
    }

    /**
     * @param {Number} value
     */
    set range(value) {
        this._range = value
        if (this._on) {
            // this.engine.lightsRanges[this._index] = value
            this.engine.lightsRanges.push(value)

        }
    }

    get range () {
        return this._range
    }

    set position (value) {
        this._position = value
        if (this._on) {
            this.engine.lightsPositions.push(value[0])
            this.engine.lightsPositions.push(value[1])
            this.engine.lightsPositions.push(value[2])
        }
    }

    get position () {
        return this._position
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

    /**
     * Adds this light to drawing.
     */
    on () {
        this._index = this.engine.lights.length
        this._on = true
        this.engine.lights.push(this)
        this.position = this._position
        this.range = this._range
    }

    /**
     * Remove this light from drawing.
     */
    off () {
        let index = this.engine.lights.indexOf(this)
        this.engine.lights.removeAt(index)
        this.engine.lightsPositions.removeAt(index * 3 + 0)
        this.engine.lightsPositions.removeAt(index * 3 + 1)
        this.engine.lightsPositions.removeAt(index * 3 + 2)
        this.engine.lightsRanges.removeAt(index)
    }
}