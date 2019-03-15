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
        this.div.style = 'position: absolute; height: 100%; width: 100%; z-index: 999999; left: 0; right: 0; top: 0;'

        engine.div.appendChild(this.canvas)
        engine.div.appendChild(this.div)

        /**
         * 2D context for UI drawing. 
         * @type {CanvasRenderingContext2D}
         */
        this.context = this.canvas.getContext('2d')

        /**
         * There are objects which object needs to draw.
         * @type {Objects[]}
         */
        this.elements = []
        
        engine.ui = this
    }

    /**
     * Adds object to draw.
     * @param {Object} element some UI element. 
     */
    addElement (element) {
        this.elements.push(element)
    }

    /**
     * Removes element from drawing function.
     * @param {Object} element 
     */
    removeElement (element) {
        let index = this.elements.indexOf(element)
        this.elements.removeAt(index)
    }

    /**
     * Adding DOM element upper game engine canvas.
     * @param {HTMLElement} element 
     */
    appendDOMElement (element, properties) {
        let style = ''
        for (let property in properties) {
            style += property + ':  ' + properties[property] + ';'
        }
        element.style = style
        this.div.appendChild(element)
    }

    /**
     * This function draws all elements.
     * @private
     */
    _draw () {
        this.elements.forEach(element => {
            element.draw()
        })
    }
}