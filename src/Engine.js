import * as Utils from "./Utils"
import {SimpleTexture} from "./textures/SimpleTexture"
import * as Vectors from "./math/Vectors"
import { Shaders } from "./shaders/Shaders"
import fragmentShaderSource from "./shaders/default/fragment-shader.glsl"
import vertexShaderSource from "./shaders/default/vertex-shader.glsl"
import cubeFragmentShaderSource from "./shaders/cube-texture/fragment-shader.glsl"
import cubeVertexShaderSource from "./shaders/cube-texture/vertex-shader.glsl"
import gridFragmentShaderSource from "./shaders/grid/fragment-shader.glsl"
import gridVertexShaderSource from "./shaders/grid/vertex-shader.glsl"
import reflectionFragmentShaderSource from "./shaders/reflection-texture/fragment-shader.glsl"
import reflectionVertexShaderSource from "./shaders/reflection-texture/vertex-shader.glsl"
import skyboxFragmentShaderSource from "./shaders/skybox/fragment-shader.glsl"
import skyboxVertexShaderSource from "./shaders/skybox/vertex-shader.glsl"
import {Camera} from "./Camera"



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
         * @type {UI}
         * @private
         */
        this.ui = null

        /**
         * True if all resources like textures and objects loaded.
         * @type {boolean}
         * @readonly
         */
        this.resourcesLoaded = false

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
         * @type {Number}
         * @readonly
         */
        this.loadedObjectsCount = 0

        /**
         * True if all attached objects loaded.
         * @type {boolean}
         * @readonly
         */
        this.objectsLoaded = false

        /**
         * @type {Texture[]}
         * @private
         */
        this.textures = []

        /**
         * @type {Number}
         * @readonly
         */
        this.loadedTexturesCount = 1

        /**
         * True if all attached textures loaded.
         * @type {boolean}
         * @readonly
         */
        this.texturesLoaded = false

        /**
         * On resources loaded functions array
         */
        this.onResourcesLoadedHandlers = []

        /**
         * Default texture for all object.
         * @type {Texture}
         * @public
         */
        this.noTexture = new SimpleTexture()
        this.noTexture.setColorRGBA(219, 58, 52, 255)
        this.noTexture.bind(this)
        this.textureLoaded(this.noTexture)

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
        

        /**
         * Array of x, y, z position of global light.
         * @type {Number[]} 
         */
        this.globalLightPosition = [0, 100, 400]

        /**
         * Global light max distance.
         * @type {Number}
         */
        this.globalLightRange = 200000;

        /**
         * Minimum global light value.
         * @type {Number} from 0 to 1 float
         */
        this.globalLightMinValue = 0.2

        /**
         * Array with all lights
         * @tpye {Light[]}
         */
        this.lights = []

        this.lightsPositions = []

        this.lightsRanges = []
    }

    /**
     * Showing info about engine.
     * @private
     */
    infoConsoleLog () {
        console.log()
        console.log('     %c%s', 'color: rgba(247, 137, 74, 1); text-align: center; font-size: 16px; font-weight: 700', "Bronze Engine is running")
        console.log()
        console.info('     Version : 0.2.96')
        console.info('     Docs    : http://m0ksem.design/Bronze-Engine/docs/global')
        console.info('     GitHub  : https://github.com/m0ksem/Bronze-Engine')
        console.info('     Author  : https://github.com/m0ksem')
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

        this.shaders.addProgram('skybox', skyboxVertexShaderSource, skyboxFragmentShaderSource, options)


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
        if (this.camera._controlFunction != null) {
            this.camera.moving = [0, 0, 0]
            this.camera._controlFunction()
            this.controls.mouse.movement.x = 0
            this.controls.mouse.movement.y = 0
        }

        this.selectedObject = null

        for (let i = 0; i < this.objects.length; i++) {
            const object = this.objects[i]
            if (object.checkCollision) {
                (object.checkCollision())
            }
        }

        for (let i = 0; i < this.objectsWithAlphaTexture.length; i++) {
            const object = this.objectsWithAlphaTexture[i]
            if (object.checkCollision) {
                (object.checkCollision())
            }
        }

        this.camera.position[0] += this.camera.moving[0]
        this.camera.position[1] += this.camera.moving[1]
        this.camera.position[2] += this.camera.moving[2]

        this.camera.computeMatrix()

        this.ui.objects.forEach(object => {
            object.update()
        })

        this.objects.forEach((element, index) => {         
            element.update()
            if (element.texture.alpha) {
                this.objectsWithAlphaTexture.push(element)
                this.objects.splice(index, 1)
            }
        })

        this.objectsWithAlphaTexture.sort((a, b) => {
            return Vectors.distance(b.position, this.camera.position) - Vectors.distance(a.position, this.camera.position)
        })

        this.objectsWithAlphaTexture.forEach((element) => {
            element.update()
        })

        if (this.selectedObject && this._objectSelectHandler != null) {
            this._objectSelectHandler(this.selectedObject)
        }
    }
    
    /**
     * Main drawing function. All polygons are drawn here.
     * @private
     */
    async _draw () {
        this.webGL.clear(this.webGL.COLOR_BUFFER_BIT | this.webGL.DEPTH_BUFFER_BIT)
        this.shaders.default.use()
        this.webGL.uniform3fv(this.shaders.default.lightPositionsLocation, this.lightsPositions)
        this.webGL.uniform1fv(this.shaders.default.lightRangesLocation, this.lightsRanges)
        this.webGL.uniform1i(this.shaders.default.lightsCountLocation, this.lights.length)
        this.webGL.uniform1f(this.shaders.default.lightMinValueLocation, this.globalLightMinValue)

        this.drawCallsPerFrame = 0
        
        this.ui.drawUIOnMainCanvas()

        this.objects.forEach(object => {
            object.draw()
        });

        this.objectsWithAlphaTexture.forEach(object => {
            object.draw()
        });

        this.ui.drawUI()

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
        let background = 'rgba(0, 0, 0, 0)'
        let backgroundAlpha = 1
        let imageAlpha = 1
        let noDrawObjects = []
        if (options != null) {
            drawUI = options.drawUI || drawUI
            imageHeight = options.height || imageHeight
            imageWidth = options.width || imageWidth
            background = options.background || background
            backgroundAlpha = options.backgroundAlpha || backgroundAlpha
            imageAlpha = options.imageAlpha || imageAlpha
            noDrawObjects = options.noDrawObjects || []
        }
        this.canvas.width = imageWidth
        this.canvas.height = imageHeight
        this.canvasResized()

        this.camera = camera
        this.webGL.clear(this.webGL.COLOR_BUFFER_BIT | this.webGL.DEPTH_BUFFER_BIT);
        this.shaders.default.use()
        this.webGL.uniform3fv(this.shaders.default.lightPositionsLocation, this.lightsPositions)
        this.webGL.uniform1fv(this.shaders.default.lightRangesLocation, this.lightsRanges)
        this.webGL.uniform1i(this.shaders.default.lightsCountLocation, this.lights.length)
        this.webGL.uniform1f(this.shaders.default.lightMinValueLocation, this.globalLightMinValue)
        this.drawCallsPerFrame = 0

        this._update()

        for (let i = 0; i < this.objects.length; i++) {
            const object = this.objects[i];
            if (noDrawObjects.indexOf(object) == -1) {
                if (drawUI || !object.UIElement) {
                    object.draw()
                }
            }
        }
        
        this.objectsWithAlphaTexture.forEach(object => {
            if (noDrawObjects.indexOf(object) == -1) {
                object.draw()
            }
        })

        let frame = document.createElement('canvas')
        frame.height = this.canvas.height;
        frame.width = this.canvas.width;
        let context = frame.getContext('2d')
        context.globalAlpha = backgroundAlpha
        if (typeof(background) === 'string') {
            context.fillStyle = background
            context.fillRect(0, 0, this.canvas.width, this.canvas.height)
        } else if (typeof(background) === 'image') {
            context.drawImage(background, 0, 0, frame.width, frame.height)
        }
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
        this.running = true

        if (this.loadedTexturesCount == this.textures.length) {
            console.log('a')
            this.texturesLoaded = true
        }

        let objectsCount = this.objects.length + this.ui.objects.length + this.objectsWithAlphaTexture.length
        if (this.loadedObjectsCount == objectsCount) {
            this.objectsLoaded = true
            if (this.textureLoaded) {
                this.resourcesLoaded = true
                this.onResourcesLoadedHandlers.forEach(func => {
                    func(this.textures.length)
                })
            }
        }

        requestAnimationFrameEngine()
        this.onrun.forEach(func => {
            func()
        })
    }

    stop () {
        this.stopped = true
    }

    /**
     * Adds functions which will execute on engine run.
     * @param {Function} func 
     */
    addOnRunFunction (func) {
        this.onrun.push(func)
    }

    /**
     * Function should be executed when texture loaded and ready to use.
     * @param {Texture} texture 
     */
    textureLoaded(texture) {
        this.loadedTexturesCount += 1
        if (this.running && this.loadedTexturesCount == this.textures.length) {
            this.texturesLoaded = true
            if (this.objectsLoaded) {
                this.resourcesLoaded = true
                this.onResourcesLoadedHandlers.forEach(func => {
                    func(this.textures.length)
                })
            }
        }
    }

    /**
     * Function should be executed when object loaded and ready to use.
     * @param {Object} object
     */
    objectLoaded(object) {
        let objectsCount = this.objects.length + this.ui.objects.length + this.objectsWithAlphaTexture.length
        this.loadedObjectsCount += 1
        if (this.running && this.loadedObjectsCount == objectsCount) {
            this.objectsLoaded = true
            if (this.textureLoaded) {
                this.resourcesLoaded = true
                this.onResourcesLoadedHandlers.forEach(func => {
                    func(this.textures.length)
                })
            }
        }
    }
    
    /**
     * @param {Function} func function which will execute when all textures loaded.
     */
    addOnResourcesLoaded(func) {
        this.onResourcesLoadedHandlers.push(func)
    }

    /**
     * Removes objects if its exist
     * @param {Object} object 
     */
    removeObject(object) {
        let index = this.objects.indexOf(object)
        if (index == -1) {
            throw new Error('Object not found')
        }
        this.objects.splice(index, 1)
    }


}

let _engine

/**
 * RequestAnimationFrame wrapper for Engine rendering.
 * @private
 */
function requestAnimationFrameEngine () { 
    if (_engine.stopped) {
        return
    }
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
