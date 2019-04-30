import * as Utils from './../Utils'

/**
 * @class
 * @constructor
 * @param {Engine} e
 */
export class UI {
    constructor (engine) {
        this.canvas = document.createElement('canvas')
        this.canvas.width = engine.div.width
        this.canvas.height = engine.div.height
        this.canvas.style = 'position: absolute; height: 100%; width: 100%; z-index: 999999; left: 0; right: 0; top: 0;'

        this.div = document.createElement('div')
        this.div.style = 'position: absolute; height: 100%; width: 100%; z-index: 9999999; left: 0; right: 0; top: 0;'

        engine.div.appendChild(this.canvas)
        engine.div.appendChild(this.div)

        this.width = engine.div.width
        this.height = engine.div.height

        this.centerX = this.width / 2
        this.centerY = this.height / 2

        /**
         * 2D context for UI drawing. 
         * @type {CanvasRenderingContext2D}
         */
        this.context = this.canvas.getContext('2d')

        /**
         * There are objects which object needs to draw.
         * @type {Objects[]}
         */
        this.objects = []

        /**
         * Images to draw
         * @type {Image[]}
         */
        this.images = []

        /**
         * @type {HTMLElement[]}
         */
        this.htmlElements = []
        
        engine.ui = this
        this.engine = engine
    }

    /**
     * Adds object to draw.
     * @param {Object} element some UI element. 
     */
    addObject (element) {
        this.objects.push(element)
        this.engine.removeObject(element)
    }

    /**
     * Removes element from drawing function.
     * @param {Object} element 
     */
    removeObject (element) {
        let index = this.objects.indexOf(element)
        this.objects.removeAt(index)
        this.engine.addObject(element)
    }

    /**
     * Adding DOM element upper game engine canvas.
     * @param {HTMLElement} element
     * @param {Number} position.vertical from 0 to 100
     */
    appendDOMElement (element, name, position) {
        let style = ''
        style += 'top' + ':  ' + (this.height / 100 * position.vertical - element.width / 2) + 'px;'
        style += 'left' + ':  ' + (this.width / 100 * position.horizontal - element.height / 2) + 'px;'
        style += 'position: absolute;'
        element.style = style
        this.div.appendChild(element)
        this.htmlElements.push({name: name, el: element})

        element.hidden = false
        element.hide = () => {
            element.style.display = 'none'
        }
        element.show = () => {
            element.style.display = 'block'
        }
        return element
    }

    /**
     * Adding DOM element upper game engine canvas.
     * @param {HTMLElement} element 
     */
    appendDOMElementWithCustomProperties(element, properties) {
        let style = ''
        for (let property in properties) {
            style += property + ':  ' + properties[property] + ';'
        }
        element.style = style
        this.div.appendChild(element)
        this.htmlElements.push({ name: name, el: element })
        element.hidden = false
        element.hide = () => {
            element.style.display = 'none'
        }
        element.show = () => {
            element.style.display = 'block'
        }

        return element
    }

    /**
     * Draws image on canvas. Read about addImage
     * @param {Image} image 
     * @param {Number} width 
     * @param {Number} height 
     */
    drawImage (image, width, height) {
        this.context.drawImage(image, 0, 0)
    }

    addImage (image, width, height, x, y) {
        image.width = width
        image.height = height
        image.xPos = x
        image.yPos = y
        this.images.push(image)
        image.hide = () => {
            image.hidden = true
        }
        image.show = () => {
            image.hidden = false
        }
        return image
    }

    /**
     * Clear canvas
     */
    clearCanvas () {
        this.context.clearRect(0, 0, this.width, this.height)
    }

    draw () {
        this.images.forEach(img => {
            if (!img.hidden) {
                this.context.drawImage(img, img.xPos, img.yPos, img.width, img.height)
            }
        })
    }
}