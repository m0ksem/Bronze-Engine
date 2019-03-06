class Texture extends Image {
    /**
     * Texture for polygons.
     * @param {String} path - path to image location.
     * @param {Number} [width] - custom width for image.
     * @param {Number} [height] - custom height for image.
     */
    constructor (path, width, height) {
        super()
        this.src = path
        if (width != null && height != null) {
            this.width = width
            this.height = height
        }
        this.coords = [
            
        ]
        this.addEventListener('load', () => {
            this.loaded = true
        })
        this.color = new Uint8Array([255, 255, 255, 255])
        this._textureBlockLocation = null
        
    }
    
    /**
     * Scale image width by x, height by y.
     * @param {Number} x
     * @param {Number} y
     */
    scale (x, y) {
        this.width = width * x
        this.height = height * y
    }

    /**
     * Setting texture coords.
     * @param {Array} coords 
     */
    setCoords (coords) {
        this.coords = coords
    }

    /**
     * Setting color of polygon. The color will be shown until the texture is loaded.
     * @param {Number} r red value from 0 to 255.
     * @param {Number} g green value from 0 to 255.
     * @param {Number} b blue value from 0 to 255.
     * @param {Number} a alpha value from 0 to 255.
     */
    setColorRGBA (r, g, b, a) {
        this.color = new Uint8Array([r, g, b, a])
    }
}

export {Texture}