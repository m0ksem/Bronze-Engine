import * as Utils from './../Utils'
import { Matrix } from '../math/Matrixes';

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
        this.webGL = engine.webGL

        this._screen = new Screen(this.engine)

        this._texture = { _textureBlockLocation: this.engine.textures.length }
        this.engine.textures.push(this._texture)
        this.engine.webGL.activeTexture(this.engine.webGL.TEXTURE0 + this._texture._textureBlockLocation)

        this._webGLTexture = this.webGL.createTexture();
        this.webGL.bindTexture(this.webGL.TEXTURE_2D, this._webGLTexture)
        
        this.webGL.texImage2D(this.webGL.TEXTURE_2D, 0, this.webGL.RGBA,
            this.width, this.height, 0,
            this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, null);

        this.webGL.texParameteri(this.webGL.TEXTURE_2D, this.webGL.TEXTURE_MAG_FILTER, this.webGL.NEAREST);
        this.webGL.texParameteri(this.webGL.TEXTURE_2D, this.webGL.TEXTURE_MIN_FILTER, this.webGL.NEAREST);
        this.webGL.texParameteri(this.webGL.TEXTURE_2D, this.webGL.TEXTURE_WRAP_S, this.webGL.CLAMP_TO_EDGE);
        this.webGL.texParameteri(this.webGL.TEXTURE_2D, this.webGL.TEXTURE_WRAP_T, this.webGL.CLAMP_TO_EDGE);

        this.frameBuffer = this.webGL.createFramebuffer();
        this.webGL.bindFramebuffer(this.webGL.FRAMEBUFFER, this.frameBuffer);
        this.webGL.framebufferTexture2D(this.webGL.FRAMEBUFFER, this.webGL.COLOR_ATTACHMENT0, this.webGL.TEXTURE_2D, this._webGLTexture, 0);
        this.webGL.bindFramebuffer(this.webGL.FRAMEBUFFER, null);
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
    async drawImage (image, width, height) {
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

    async draw () {
        this.images.forEach(img => {
            if (!img.hidden) {
                this.context.drawImage(img, img.xPos, img.yPos, img.width, img.height)
            }
        })
    }

    async drawUIFromEngine () {
        this.clearCanvas()
        this.objects.forEach(object => {
            object.draw()
        })
        this.context.drawImage(this.engine.webGL.canvas, 0, 0, this.width, this.height, 0, 0, this.width, this.height)
        return true
    }
    
    drawUIOnMainCanvas () {
        const webGL = this.engine.webGL

        webGL.bindFramebuffer(webGL.FRAMEBUFFER, this.frameBuffer);
        webGL.clearColor(0, 0, 0, 0)
        webGL.clear(webGL.COLOR_BUFFER_BIT | webGL.DEPTH_BUFFER_BIT)

        webGL.viewport(0, 0, this.engine.width, this.engine.height)

        this.objects.forEach(object => {
            object.draw()
        })

        this._screen.setTexture(this._texture)
        webGL.bindFramebuffer(webGL.FRAMEBUFFER, null);

        webGL.clearColor(0, 0, 0, 0)
        webGL.clear(webGL.COLOR_BUFFER_BIT | webGL.DEPTH_BUFFER_BIT)
    }

    drawUI () {
        this._screen.draw()
    }
}

class Screen {
    constructor (engine) {
        this.webGL = engine.webGL
        this.engine = engine
        this.shaderProgram = engine.shaders.default

        this.vertexes = [
            -1, -1, -1,
            1, 1, -1,
            -1, 1, -1,
            1, 1, -1,
            -1, -1, -1,
            1, -1, -1
            // -100, -100, -100,
            // 100, 100, -100,
            // -100, 100, -100,
            // 100, 100, -100,
            // -100, -100, -100,
            // 100, -100, -100
            // 0, 0, 0,
            // 1000, 1000, 0,
            // 0, 1000, 0,
            // 1000, 1000, 0,
            // 0, 0, 0,
            // 1000, 0, 0,
        ]

        this.textureCoords = [
            0, 0,
            1, 1,
            0, 1,
            1, 1,
            0, 0,
            1, 0, 
        ]

        this.normals = [
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
        ]

        this.vertexesBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.vertexesBuffer)
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webGL.STATIC_DRAW);

        this.coordsBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.coordsBuffer)
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.textureCoords), this.webGL.STATIC_DRAW)

        this.normalBuffer = this.webGL.createBuffer();
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.normalBuffer);
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.normals), this.webGL.STATIC_DRAW);
    }

    setTexture (texture) {
        this.texture = texture
    }

    draw () {
        this.webGL.bindFramebuffer(this.webGL.FRAMEBUFFER, null);

        this.shaderProgram.use()

        this.engine.webGL.enableVertexAttribArray(this.shaderProgram.positionLocation)
        this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, this.vertexesBuffer)
        this.engine.webGL.vertexAttribPointer(
            this.shaderProgram.positionLocation, 3, this.engine.webGL.FLOAT, false, 0, 0
        )

        this.engine.webGL.enableVertexAttribArray(this.shaderProgram.texcoordLocation)
        this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, this.coordsBuffer)
        this.engine.webGL.vertexAttribPointer(
            this.shaderProgram.texcoordLocation, 2, this.engine.webGL.FLOAT, false, 0, 0
        )

        this.engine.webGL.enableVertexAttribArray(this.shaderProgram.normalLocation);
        this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, this.normalBuffer);
        this.engine.webGL.vertexAttribPointer(
            this.shaderProgram.normalLocation, 3, this.engine.webGL.FLOAT, false, 0, 0)

        let unitMatrix = new Matrix().matrix
        let projectionMatrix = new Matrix()
            // projectionMatrix.projection(this.engine.width, this.engine.height)
        let rotatedMatrix = projectionMatrix.matrix
        // rotatedMatrix[13] = -1
        this.engine.webGL.uniform1i(this.shaderProgram.textureLocation, this.texture._textureBlockLocation)
        this.engine.webGL.uniformMatrix4fv(this.shaderProgram.matrixLocation, false, rotatedMatrix)
        this.engine.webGL.uniformMatrix4fv(this.shaderProgram.objectRotationLocation, false, unitMatrix)
        this.engine.webGL.uniformMatrix4fv(this.shaderProgram.worldMatrixLocation, false, unitMatrix)

        this.engine.webGL.drawArrays(this.engine.webGL.TRIANGLES, 0, this.vertexes.length / 3)
    }

}