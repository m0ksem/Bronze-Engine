import {isPowerOf2} from "./../math/Math"

/**
 * Texture for polygons or objects.
 * @class
 * @constructor
 * @param {String} path - path to image location.
 * @param {Number} [width] - custom width for image.
 * @param {Number} [height] - custom height for image.
 */
class Texture extends Image {
    constructor(path, width, height) {
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

        this.mipmap = []

        this.mips = null

        /**
         * Execute every function in array when texture loaded.
         * @type {Function[]}
         */
        this.onTextureLoad = []
    }

    /**
     * Adds mip maps.
     * @type {Array} mipmaps
     */
    generateMipmap (mips) {
        this.mips = mips
    }

    logImage (image, height, width) {
        let img = new Image()
        img.onload = () => {
            console.log("%c" + "+", "padding: " + Math.floor(height / 2) + "px " + Math.floor(width / 2) + "px; line-height: " + height + "px;" + "background: url(" + img + "); background-size: " + (width) + "px " + (height) + "px; color: transparent;");
        }
        img.src = image.toDataURL()
    }

    autoGenerateMipmap (texture) {
        texture._autoGenerateMipmap = true
    }

    quickGenerateMipmap (texture) {
        if (texture.width / texture.height == 2) {
            let i = texture.height
            let offsetX = 0
            while (true) {
                console.log(offsetX + ' ' + i)
                let tempCanvas = document.createElement("canvas");
                    tempCanvas.width = i
                    tempCanvas.height = i
                let tempCanvasContext = tempCanvas.getContext("2d");
                    tempCanvasContext.drawImage(texture, offsetX, 0, i, i, 0, 0, i, i)
                texture.mipmap.push(tempCanvas)
                if (i == 1) {
                    break;
                }
                offsetX += i
                i = i / 2
            }
        } else {
            return console.warn('Wrong image sizes for quick generation mipmap.')
        }
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
                mip.width = currentSize
                mip.height = currentSize
                generatedMips.push(mip)
                continue
            }
            if (mips[mipIndex].size == currentSize) {
                let mip = mips[mipIndex].image
                      mip.width = currentSize
                      mip.height = currentSize
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

        /**
         * Binding texture to engine.
         * @param {Texture} texture 
         * @public
         */
    bind(engine) {
        this.engine = engine
        this._textureBlockLocation = this.engine.textures.length
        this.engine.textures.push(this)
        this._WebGLTexture = this.engine.webGL.createTexture()
        this.engine.webGL.activeTexture(this.engine.webGL.TEXTURE0 + this._textureBlockLocation)
        this.engine.webGL.bindTexture(this.engine.webGL.TEXTURE_2D, this._WebGLTexture)
        this.engine.webGL.texImage2D(this.engine.webGL.TEXTURE_2D, 0, this.engine.webGL.RGBA, 1, 1, 0, this.engine.webGL.RGBA, this.engine.webGL.UNSIGNED_BYTE, this.color);
        this.addEventListener('load', () => {
            let texture = this
            this.onTextureLoad.forEach(func => {
                func(texture)
            })
            this.engine.webGL.activeTexture(this.engine.webGL.TEXTURE0 + this._textureBlockLocation)
            let mipmapFilter
            let mipmapRequire = true
            switch (this.mipmapFilter) {
                case 'NEAREST':
                    mipmapFilter = this.engine.webGL.NEAREST
                    mipmapRequire = false
                    break
                case 'LINEAR':
                    mipmapFilter = this.engine.webGL.LINEAR
                    mipmapRequire = false
                    break
                case 'NEAREST_MIPMAP_NEAREST':
                    mipmapFilter = this.engine.webGL.NEAREST_MIPMAP_NEAREST
                    break
                case 'LINEAR_MIPMAP_NEAREST':
                    mipmapFilter = this.engine.webGL.LINEAR_MIPMAP_NEAREST
                    break
                case 'NEAREST_MIPMAP_LINEAR':
                    mipmapFilter = this.engine.webGL.LINEAR_MIPMAP_NEAREST
                    break
                case 'LINEAR_MIPMAP_LINEAR':
                    mipmapFilter = this.engine.webGL.LINEAR_MIPMAP_LINEAR
                    break
                default:
                    mipmapRequire = false
                    mipmapFilter = this.engine.webGL.LINEAR
                    break
            }
            this.WebGLMipmapFilter = mipmapFilter

            this.engine.webGL.texParameteri(this.engine.webGL.TEXTURE_2D, this.engine.webGL.TEXTURE_MIN_FILTER, mipmapFilter);
            this.engine.webGL.texParameteri(this.engine.webGL.TEXTURE_2D, this.engine.webGL.TEXTURE_MAG_FILTER, this.engine.webGL.LINEAR);

            if (mipmapRequire && !this._autoGenerateMipmap) {
                if (this.mipmap.length > 0) {
                    this.mipmap.forEach((mip, level) => {
                        this.engine.webGL.texImage2D(this.engine.webGL.TEXTURE_2D, level, this.engine.webGL.RGBA, this.engine.webGL.RGBA, this.engine.webGL.UNSIGNED_BYTE, mip)
                    })
                    console.log(this.mipmap)
                } else {
                    console.warn('Need to generate mipmaps for texture:')
                    console.warn(this)
                }
            } else {
                this.engine.webGL.texImage2D(this.engine.webGL.TEXTURE_2D, 0, this.engine.webGL.RGBA, this.engine.webGL.RGBA, this.engine.webGL.UNSIGNED_BYTE, this);
            }

            if ((mipmapRequire || this._autoGenerateMipmap) && isPowerOf2(this.width) && isPowerOf2(this.height)) {
                this.engine.webGL.generateMipmap(this.engine.webGL.TEXTURE_2D)
            } else {
                this.engine.webGL.texParameteri(this.engine.webGL.TEXTURE_2D, this.engine.webGL.TEXTURE_WRAP_S, this.engine.webGL.CLAMP_TO_EDGE);
                this.engine.webGL.texParameteri(this.engine.webGL.TEXTURE_2D, this.engine.webGL.TEXTURE_WRAP_T, this.engine.webGL.CLAMP_TO_EDGE);
            }
        })
    }
}

export {Texture}