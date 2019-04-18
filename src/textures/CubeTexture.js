/**
 * Cube texture.
 * @class
 * @constructor
 * @param {String} path - path to image location.
 * @param {Number} [width] - custom width for image.
 * @param {Number} [height] - custom height for image.
 */
export class CubeTexture {
    constructor() {
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

        /**
         * Execute every function in array when texture loaded.
         * @type {Function[]}
         */
        this.onTextureLoad = []

        this.loaded = false

        this.textures = {
            positiveX: null,
            negativeX: null,
            positiveY: null,
            negativeY: null,
            positiveZ: null,
            negativeZ: null,
        }

        this._loadedTextureCount = 0
    }

    setImagesFromPath(positiveX, negativeX, positiveY, negativeY, positiveZ, negativeZ) {
        this.textures.positiveX = new Image()
        this.textures.positiveX.crossOrigin = ''
        this.textures.positiveX.onload = () => {
            this._loadedTextureCount++
            if (this._loadedTextureCount == 6) {
                this.loaded = true
                this.onTextureLoad.forEach(func => {
                    func(this)
                })
                this.bindCubeTexture()
            }
        }
        this.textures.positiveX.src = positiveX
        this.textures.negativeX = new Image()
        this.textures.negativeX.crossOrigin = ''
        this.textures.negativeX.src = negativeX
        this.textures.negativeX.onload = () => {
            this._loadedTextureCount++
            if (this._loadedTextureCount == 6) {
                this.loaded = true
                this.onTextureLoad.forEach(func => {
                    func(this)
                })
                this.bindCubeTexture()
            }
        }
        this.textures.positiveY = new Image()
        this.textures.positiveY.crossOrigin = ''
        this.textures.positiveY.src = positiveY
        this.textures.positiveY.onload = () => {
            this._loadedTextureCount++
            if (this._loadedTextureCount == 6) {
                this.loaded = true
                this.onTextureLoad.forEach(func => {
                    func(this)
                })
                this.bindCubeTexture()
            }
        }
        this.textures.negativeY = new Image()
        this.textures.negativeY.crossOrigin = ''
        this.textures.negativeY.src = negativeY
        this.textures.negativeY.onload = () => {
            this._loadedTextureCount++
            if (this._loadedTextureCount == 6) {
                this.loaded = true
                this.onTextureLoad.forEach(func => {
                    func(this)
                })
                this.bindCubeTexture()
            }
        }
        this.textures.positiveZ = new Image()
        this.textures.positiveZ.crossOrigin = ''
        this.textures.positiveZ.src = positiveZ
        this.textures.positiveZ.onload = () => {
            this._loadedTextureCount++
            if (this._loadedTextureCount == 6) {
                this.loaded = true
                this.onTextureLoad.forEach(func => {
                    func(this)
                })
                this.bindCubeTexture()
            }
        }
        this.textures.negativeZ = new Image()
        this.textures.negativeZ.crossOrigin = ''
        this.textures.negativeZ.src = negativeZ
        this.textures.negativeZ.onload = () => {
            this._loadedTextureCount++
            if (this._loadedTextureCount == 6) {
                this.loaded = true
                this.onTextureLoad.forEach(func => {
                    func(this)
                })
                this.bindCubeTexture()
            }
        }
    }

    setLoadingImages(positiveX, negativeX, positiveY, negativeY, positiveZ, negativeZ) {
        for (let i = 0; i < arguments.length - 1; i++) {
            if (arguments[i].width != arguments[i].height || arguments[i].height != arguments[i + 1].height || arguments[i + 1].width != arguments[i + 1].height) {
                throw 'Sizes of textures not are the same or texture isnt square.'
            }
        }
        this.textures.positiveX = this.engine.noTexture
        positiveX.addEventListener('load', () => {
            this.textures.positiveX = positiveX
            this._loadedTextureCount++
            if (this._loadedTextureCount == 6) {
                this.loaded = true
                this.onTextureLoad.forEach(func => {
                    func(this)
                })
                this.bindCubeTexture()
            }
        })
        this.textures.negativeX = this.engine.noTexture
        negativeX.addEventListener('load', () => {
            this.textures.negativeX = negativeX
            this._loadedTextureCount++
            if (this._loadedTextureCount == 6) {
                this.loaded = true
                this.onTextureLoad.forEach(func => {
                    func(this)
                })
                this.bindCubeTexture()
            }
        })
        this.textures.positiveY = this.engine.noTexture
        positiveY.addEventListener('load', () => {
            this.textures.positiveY = positiveY
            this._loadedTextureCount++
            if (this._loadedTextureCount == 6) {
                this.loaded = true
                this.onTextureLoad.forEach(func => {
                    func(this)
                })
                this.bindCubeTexture()
            }
        })
        this.textures.negativeY = this.engine.noTexture
        negativeY.addEventListener('load', () => {
            this.textures.negativeY = negativeY
            this._loadedTextureCount++
            if (this._loadedTextureCount == 6) {
                this.loaded = true
                this.onTextureLoad.forEach(func => {
                    func(this)
                })
                this.bindCubeTexture()
            }
        })
        this.textures.positiveZ = this.engine.noTexture
        positiveZ.addEventListener('load', () => {
            this.textures.positiveZ = positiveZ
            this._loadedTextureCount++
            if (this._loadedTextureCount == 6) {
                this.loaded = true
                this.onTextureLoad.forEach(func => {
                    func(this)
                })
                this.bindCubeTexture()
            }
        })
        this.textures.negativeZ = this.engine.noTexture
        negativeZ.addEventListener('load', () => {
            this.textures.negativeZ = negativeZ
            this._loadedTextureCount++
            if (this._loadedTextureCount == 6) {
                this.loaded = true
                this.onTextureLoad.forEach(func => {
                    func(this)
                })
                this.bindCubeTexture()
            }
        })
    }

    setLoadedImages(positiveX, negativeX, positiveY, negativeY, positiveZ, negativeZ) {
        this.textures.positiveX = positiveX
        this.textures.negativeX = negativeX
        this.textures.positiveY = positiveY
        this.textures.negativeY = negativeY
        this.textures.positiveZ = positiveZ
        this.textures.negativeZ = negativeZ
        this.loaded = true
        this.bindCubeTexture()
    }

    /**
     * Set skybox from path
     * @param {string} texture 
     */
    setSkybox (path) {
        let texture = new Image()
        texture.crossOrigin = ''
        texture.src = path
        texture.onload = () => {
            let w = texture.width
            let h = texture.height
            let size
            console.log(w + ' ' + h)
            console.log(w / 4)
            console.log(h / 3)
            if (h / 3 == w / 4) {
                size = h / 3
            } else {
                throw 'Wrong sizes for texture. Texture must be Skyblock 3x4 squares.'
            }
            
            let canvas = document.createElement('canvas')
            canvas.height = size
            canvas.width = size
            let context = canvas.getContext('2d')
            context.drawImage(texture, 0, size, size, size, 0, 0, size, size)
            this.textures.negativeX = canvas
            canvas = document.createElement('canvas')
            canvas.height = size
            canvas.width = size
            context = canvas.getContext('2d')
            context.drawImage(texture, size * 2, size, size, size, 0, 0, size, size)
            this.textures.positiveX = canvas
            canvas = document.createElement('canvas')
            canvas.height = size
            canvas.width = size
            context = canvas.getContext('2d')
            context.drawImage(texture, size, size, size, size, 0, 0, size, size)
            this.textures.positiveZ = canvas
            canvas = document.createElement('canvas')
            canvas.height = size
            canvas.width = size
            context = canvas.getContext('2d')
            context.drawImage(texture, size * 3, size, size, size, 0, 0, size, size)
            this.textures.negativeZ = canvas
            canvas = document.createElement('canvas')
            canvas.height = size
            canvas.width = size
            context = canvas.getContext('2d')
            context.drawImage(texture, size, 0, size, size, 0, 0, size, size)
            this.textures.positiveY = canvas
            canvas = document.createElement('canvas')
            canvas.height = size
            canvas.width = size
            context = canvas.getContext('2d')
            context.drawImage(texture, size, size * 2, size, size, 0, 0, size, size)
            this.textures.negativeY = canvas
            this.loaded = true
            this.onTextureLoad.forEach(func => {
                func(this)
            })
            this.bindCubeTexture()
        }
    }


    setSize(width, height) {
        this.width = width
        this.height = height
    }

    /**
     * Scale image width by x, height by y.
     * @param {Number} x
     * @param {Number} y
     * @public
     */
    scale(x, y) {
        this.width = width * x
        this.height = height * y
    }

    /**
     * Setting texture coords.
     * @param {Number[]} coords 
     * @public
     */
    setCoords(coords) {
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
    setColorRGBA(r, g, b, a) {
        this.color = new Uint8Array([r, g, b, a])
    }

    bind(engine) {
        this.engine = engine
        this.engine.textures.push(this)
        this.webGL = engine.webGL
        this._textureBlockLocation = this.engine.textures.length
        this._WebGLTexture = this.engine.webGL.createTexture()
        this.engine.webGL.activeTexture(this.engine.webGL.TEXTURE0 + this._textureBlockLocation)
        this.engine.webGL.bindTexture(this.engine.webGL.TEXTURE_2D, this._WebGLTexture)
        this.engine.webGL.texImage2D(this.engine.webGL.TEXTURE_2D, 0, this.engine.webGL.RGBA, 1, 1, 0, this.engine.webGL.RGBA, this.engine.webGL.UNSIGNED_BYTE, this.color)
    }


    bindCubeTexture () {
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
        this.engine.textureLoaded(this)
    }
}