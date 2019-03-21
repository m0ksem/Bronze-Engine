/**
 * Texture for polygons or objects.
 * @class
 * @constructor
 * @param {String} path - path to image location.
 * @param {Number} [width] - custom width for image.
 * @param {Number} [height] - custom height for image.
 */
class Texture extends Image {
    constructor (path, width, height) {
        
        super()
        this.src = path
        if (width != null && height != null) {
            this.width = width
            this.height = height
        }

        /**
         * Texture coordinates.
         * @private
         */
        this.coords = [
            
        ]
        this.addEventListener('load', () => {
            this.loaded = true
        })

        /**
         * Color of texture. Texture drawing with color if image was not set.
         * @readonly
         */
        this.color = new Uint8Array([255, 255, 255, 255])

        /**
         * Location of texture block in engine.
         * @private
         */
        this._textureBlockLocation = null


        this.mipmapFilter = 'LINEAR'

        this.mipmap = [this]

        this.mips = null
    }

    /**
     * Adds mip maps.
     * @type {Array} mipmaps
     */
    generateMipmap (mips) {
        this.mips = mips
    }

    _generateMipmaps (mips) {
        mips = mips || this.mips
        let currentSize = this.width
        let generatedMips = []
        let mipIndex = 0
        while (currentSize != 1) {
            currentSize = currentSize / 2
            if (mipIndex > mips.length - 1) {
                let mip = mips[mipIndex - 1].image
                generatedMips.push(mip)
                continue
            }
            if (mips[mipIndex].size == currentSize) {
                let mip = mips[mipIndex].image
                generatedMips.push(mip)
                mipIndex++
            } else {
                this.setSize(currentSize, currentSize)
                generatedMips.push(this)
            }
        }
        this.mipmap = generatedMips
    }

    setSize (width, height) {
        this.width = width
        this.height = height
    }
    
    /**
     * Scale image width by x, height by y.
     * @param {Number} x
     * @param {Number} y
     * @public
     */
    scale (x, y) {
        this.width = width * x
        this.height = height * y
    }

    /**
     * Setting texture coords.
     * @param {Number[]} coords 
     * @public
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
     * @public
     */
    setColorRGBA (r, g, b, a) {
        this.color = new Uint8Array([r, g, b, a])
    }
}

export {Texture}