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

        this._positionsWritten = false
        this._rangeWritten = false
    }

    /**
     * @param {Number} value
     */
    set range(value) {
        this._range = value
        if (this._on && !this._rangeWritten) {
            this.engine.lightsRanges.push(value)
        } else if (this._on) {
            this.engine.lightsRanges[this._index] = value
        }
    }

    get range () {
        return this._range
    }

    set position (value) {
        this._position = value
        if (this._on && !this._positionsWritten) {
            this.engine.lightsPositions.push(value[0])
            this.engine.lightsPositions.push(value[1])
            this.engine.lightsPositions.push(value[2])
            this._positionsWritten = true
        }
        else if (this._on) {
            this.engine.lightsPositions[this._index * 3 + 0] = value[0]
            this.engine.lightsPositions[this._index * 3 + 1] = value[1]
            this.engine.lightsPositions[this._index * 3 + 2] = value[2]
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

    move(x, y, z) {
        this.position = [
            this.position[0] + x,
            this.position[1] + y,
            this.position[2] + z
        ]
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
        let index = this._index
        this.engine.lights.removeAt(index)
        this.engine.lightsPositions.removeAt(index * 3 + 0)
        this.engine.lightsPositions.removeAt(index * 3 + 1)
        this.engine.lightsPositions.removeAt(index * 3 + 2)
        this.engine.lightsRanges.removeAt(index)
        this._positionsWritten = false
        this._rangeWritten = false
    }
}