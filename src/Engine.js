import * as Utils from "./Utils"
import {SimpleTexture} from "./textures/SimpleTexture"
import * as Vectors from "./math/Vectors"
import {ShaderProgram} from "./shaders/ShaderProgram"
import { Shaders } from "./shaders/Shaders"
import fragmentShaderSource from "./shaders/default/fragment-shader.glsl"
import vertexShaderSource from "./shaders/default/vertex-shader.glsl"
import cubeFragmentShaderSource from "./shaders/cube-texture/fragment-shader.glsl"
import cubeVertexShaderSource from "./shaders/cube-texture/vertex-shader.glsl"
import gridFragmentShaderSource from "./shaders/grid/fragment-shader.glsl"
import gridVertexShaderSource from "./shaders/grid/vertex-shader.glsl"
import reflectionFragmentShaderSource from "./shaders/reflection-texture/fragment-shader.glsl"
import reflectionVertexShaderSource from "./shaders/reflection-texture/vertex-shader.glsl"


/**
 * GameEngine core class.
 * @class
 * @constructor
 * @param {HTMLElement|HTMLCanvasElement} canvas
 */
export class Engine {
    constructor (div) {

        this.infoConsoleLog()

        /**
         * @private
         */
        this.div = div
        this.div.style = "position: relative;"

        /**
         * Canvas for drawing.
         * @readonly
         */
        this.canvas = document.createElement('canvas')
        this.canvas.width = div.width
        this.canvas.height = div.height

        div.appendChild(this.canvas)

        /**
         * WebGL context of canvas
         * @private
         */
        this.webGL = Utils.getWebGL(this.canvas)

        /**
         * Width of drawing resolution
         * @type {Number}
         */
        this.width = div.width

        /**
         * Height of drawing resolution.
         * @type {Number}
         */
        this.height = div.height

        /**
         * @type {Polygon[]}
         * @private
         */
        this.polygons = []

        /**
         * Array of objects in engine. You can remove objects. Get them by index. But do not add objects to array - use new Object()
         * @type {Objects[]}
         * @public
         */
        this.objects = []

        
        /**
         * Array of objects with alpha texture which draws after all another objects and sorting by z.
         */
        this.objectsWithAlphaTexture = []

        /**
         * @type {UI}
         * @private
         */
        this.ui = null

        /**
         * @type {Texture[]}
         * @private
         */
        this.textures = []

        /**
         * Default texture for all object.
         * @type {Texture}
         * @public
         */
        this.noTexture = new SimpleTexture()
        this.noTexture.setColorRGBA(219, 58, 52, 255)
        this.noTexture.bind(this)

        /**
         * @type {Number}
         * @readonly
         */
        this.loadedTexturesCount = 0

        /**
         * True if all attached textures loaded.
         * @type {boolean}
         * @readonly
         */
        this.texturesLoaded = false

        /**
         * On texture loaded functions array
         */
        this.onTexturesLoadedHandlers = []

        /**
         * The camera that is attached to the engine.
         * @type {Camera}
         * @public
         */
        this.camera = null

        /**
         * The debugger that is attached to the engine.
         * @type {Debugger}
         * @public
         */
        this.debugger = null

        /**
         * The controls that is attached to the engine.
         * @type {Controls}
         * @public
         */
        this.controls = null

        /**
         * An object that is under the cursor now.
         * @type {Object}
         * @readonly
         */
        this.selectedObject = null

        /**
         * Execute every time when object is selected
         * @type {Function}
         * @private
         */
        this._objectSelectHandler

        /**
         * Count of drawCalls.
         * @type {Number}
         * @readonly
         */
        this.drawCalls = 0

        /**
         * Count of drawCalls.
         * @type {Number}
         * @readonly
         */
        this.drawCallsPerFrame = 0

        /**
         * Array of function which executes on engine run.
         * @type {Function[]}
         */
        this.onrun = []

        /**
         * Rendering reflections size
         * @type {Number}
         * @default 1024
         */
        this.reflectionQuality = 2048

        /**
         * Shaders container
         */
        this.shaders = new Shaders(this.webGL)

        this._initShaders()
        this.shaders.default.use()
        this.webGL.viewport(0, 0, this.width, this.height)

        this.webGL.enable(this.webGL.CULL_FACE)
        this.webGL.enable(this.webGL.DEPTH_TEST)
    }

    /**
     * Showing info about engine.
     * @private
     */
    infoConsoleLog () {
        console.log()
        console.log('     %c%s', 'color: rgba(247, 137, 74, 1); text-align: center; font-size: 16px; font-weight: 700', "Bronze Engine is running")
        console.log()
        console.info('     Version : 0.0.1')
        console.info('     Docs    : http://m0ksem.design/Bronze-Engine/docs/global')
        console.info('     GitHub  : https://github.com/m0ksem/Bronze-Engine')
        console.log()
    }

    /**
     * Creating shaders and attaching to webGL context.
     * @private
     */
    _initShaders () {
        let options = {
            removePrefixes: true, addLocationMarker: true
        }
        this.shaders.addExtension('anisotropic', 'EXT_texture_filter_anisotropic')
        this.shaders.addExtension('standard', 'OES_standard_derivatives')
        
        this.shaders.addProgram('default', vertexShaderSource, fragmentShaderSource, options)

        this.shaders.addProgram('cube', cubeVertexShaderSource, cubeFragmentShaderSource, options)

        this.shaders.addProgram('grid', gridVertexShaderSource, gridFragmentShaderSource, options)

        this.shaders.addProgram('reflection', reflectionVertexShaderSource, reflectionFragmentShaderSource, options)

        this.shaders.default.use()
        this.webGL.enable(this.webGL.BLEND);
        this.webGL.blendFunc(this.webGL.ONE, this.webGL.ONE_MINUS_SRC_ALPHA);
    }
    
    /**
     * Setting a camera to the engine. There are can be only one camera.
     * @param {Camera} camera
     * @public
     */
    setCamera (camera) {
        this.camera = camera
    }

    /**
     * Update drawing parameters for correct drawing resized canvas.
     * @public
     */
    canvasResized ()  {
        this.canvas.width = this.canvas.clientWidth
        this.canvas.height = this.canvas.clientHeight
        this.width = this.canvas.clientWidth
        this.height = this.canvas.clientHeight
        this.webGL.viewport(0, 0, this.width, this.height)
    }

    /**
     * Sets function when object is selected.
     * @param {Function(object)} handler
     * @public
     */
    onObjectSelect (handler) {
        this._objectSelectHandler = handler
    }


    addObject (object) {
        this.objects.push(object)
    }


    /**
     * Function to update all positions, size etc.
     * @private
     */
    _update () {
        let temp
        let rot
        let parentRot
        let world
        if (this.camera._controlFunction != null) {
            this.camera._controlFunction()
            this.controls.mouse.movement.x = 0
            this.controls.mouse.movement.y = 0
        }

        this.selectedObject = null

        this.objects.forEach((element, index) => {         
            element.update()
            if (element.texture.alpha) {
                this.objectsWithAlphaTexture.push(element)
                this.objects.splice(index, 1)
            }
        })

        this.objectsWithAlphaTexture.sort((a, b) => {
            return a.position[2] - b.position[2]
        })

        this.objectsWithAlphaTexture.forEach((element) => {
            element.update()
        })

        if (!this.selectedObject && this._objectSelectHandler != null) {
            this._objectSelectHandler(this.selectedObject)
        }
    }

    /**
     * Main drawing function. All polygons are drawn here.
     * @private
     */
    _draw () {
        this.webGL.clear(this.webGL.COLOR_BUFFER_BIT | this.webGL.DEPTH_BUFFER_BIT);
        this.shaders.default.use()
        this.webGL.uniform3fv(this.shaders.default.reverseLightDirectionLocation, Vectors.normalize([-0.1, 0.5, 1]))
        this.webGL.uniform3fv(this.shaders.default.lightWorldPositionLocation, [0, 100, 400]);
        this.webGL.uniformMatrix4fv(this.shaders.default.cameraLocation, false, this.camera.matrix)

        this.drawCallsPerFrame = 0

        this.polygons.forEach(element => {
            element.draw()
        });

        this.objects.forEach(object => {
            object.draw()
        });

        this.objectsWithAlphaTexture.forEach(object => {
            object.draw()
        });

        if (this.debugger != null) {
            this.debugger.updateInfo()
        }
    }

    captureFrame (camera, options) {
        let currentCamera = this.camera
        let currentCanvasSize = [this.canvas.width, this.canvas.height];
        let drawUI = false
        let imageHeight = 128
        let imageWidth = 128
        let backgroundColor = 'rgba(0, 0, 0, 0)'
        let backgroundAlpha = 1
        let imageAlpha = 1
        if (options != null) {
            drawUI = options.drawUI || drawUI
            imageHeight = options.height || imageHeight
            imageWidth = options.width || imageWidth
            backgroundColor = options.backgroundColor || backgroundColor
            backgroundAlpha = options.backgroundAlpha || backgroundAlpha
            imageAlpha = options.imageAlpha || imageAlpha
        }

        this.canvas.width = imageWidth
        this.canvas.height = imageHeight
        this.canvasResized()

        this.camera = camera
        this.webGL.clear(this.webGL.COLOR_BUFFER_BIT | this.webGL.DEPTH_BUFFER_BIT);
        this.shaders.default.use()
        this.webGL.uniform3fv(this.shaders.default.reverseLightDirectionLocation, Vectors.normalize([-0.1, 0.5, 1]))
        this.webGL.uniform3fv(this.shaders.default.lightWorldPositionLocation, [0, 100, 400]);
        this.webGL.uniformMatrix4fv(this.shaders.default.cameraLocation, false, this.camera.matrix)
        this.drawCallsPerFrame = 0

        this._update()

        this.polygons.forEach(element => {
            element.draw()
        });
        for (let i = 0; i < this.objects.length; i++) {
            const object = this.objects[i];
            if (drawUI || !object.UIElement) {
                object.draw()
            }
        }
        this.objectsWithAlphaTexture.forEach(object => {
            object.draw()
        })

        let frame = document.createElement('canvas')
        frame.height = this.canvas.height;
        frame.width = this.canvas.width;
        let context = frame.getContext('2d')
        context.globalAlpha = backgroundAlpha
        context.fillStyle = backgroundColor
        context.fillRect(0, 0, this.canvas.width, this.canvas.height)
        context.globalAlpha = imageAlpha
        context.drawImage(this.canvas, 0, 0)


        this.camera = currentCamera
        this.canvas.width = currentCanvasSize[0];
        this.canvas.height = currentCanvasSize[1];
        this.canvasResized();
        return frame;
    }


    /**
     * Sets range where objects will no draws.
     * @param {Number} range 
     */
    setDrawingRange (range) {
        if (this.camera != null) {
            this.camera.range = range 
        } else {
            throw 'Failed to set drawing range. Camera wasn\'t set.'
        }
    }

    /**
     * Rendering function.
     * @public
     */
    async render () {
        await this._update()
        await this._draw()
        // await this._drawUI()
    }

    /**
     * Start rendering with default requestAnimationFrame function.
     * @public
     */
    run () {
        _engine = this
        requestAnimationFrameEngine()
        this.onrun.forEach(func => {
            func()
        })
    }

    /**
     * Adds functions which will execute on engine run.
     * @param {Function} func 
     */
    addOnRunFunction (func) {
        this.onrun.push(func)
    }

    textureLoaded(texture) {
        this.loadedTexturesCount += 1
        console.log(this.loadedTexturesCount + ' ' + this.textures.length)
        console.log(texture)
        if (this.loadedTexturesCount == this.textures.length) {
            this.texturesLoaded = true
            this.onTexturesLoadedHandlers.forEach(func => {
                func(this.textures.length)
            })
        }
    }
    
    /**
     * @param {Function} func function which will execute when all textures loaded.
     */
    addOnTexturesLoaded(func) {
        this.onTexturesLoadedHandlers.push(func)
    }
}

let _engine

/**
 * RequestAnimationFrame wrapper for Engine rendering.
 * @private
 */
function requestAnimationFrameEngine () { 
    requestAnimationFrame(requestAnimationFrameEngine)
    _engine.render()
}

(function() {
    let lastTime = 0;
    let vendors = ['ms', 'moz', 'webkit', 'o'];
    for(let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                                   || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            let currTime = new Date().getTime();
            let timeToCall = Math.max(0, 16 - (currTime - lastTime));
            let id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    
}());
