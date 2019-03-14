/**
 * @class
 * @constructor
 */
export class Picture extends Image {
    constructor () {
        super()
        /**
         * @type {boolean}
         * @readonly
         */
        this.loaded = false

        /**
         * @type {Object} 
         * @property {Number} position.x
         * @property {Number} position.y
         */
        this.position = {
            x: 0,
            y: 0
        }

        /**
         * @type {Object}
         * @property {Number} size.width
         * @property {Number} size.height
         */
        this.size = {
            width: 0,
            height: 0
        }
    }

    /**
     * Load image from path
     * @param {String} path 
     * @param {Number} width 
     * @param {Number} height 
     */
    load (path, width, height) {
        this.src = path
        if (width != null && height != null) {
            this.width = width
            this.height = height
        }
        this.addEventListener('load', () => {
            this.loaded = true
        })
    }

    /**
     * Creates Picture from Image object.
     * @param {Image} image
     */
    fromImage (image) {
        this.load(image.src, image.width, image.height)
    }


}