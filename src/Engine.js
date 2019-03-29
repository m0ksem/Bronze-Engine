import * as Utils from "./Utils"
import {Texture} from "./textures/Texture"
import * as Matrixes from "./math/Matrixes"
import * as Vectors from "./math/Vectors"
import {ShaderProgram} from "./utils/ShaderProgram"
import fragmentShaderSource from "./shaders/default/fragment-shader.glsl"
import vertexShaderSource from "./shaders/default/vertex-shader.glsl"
import cubeFragmentShaderSource from "./shaders/cube-texture/fragment-shader.glsl"
import cubeVertexShaderSource from "./shaders/cube-texture/vertex-shader.glsl"
import gridFragmentShaderSource from "./shaders/grid/fragment-shader.glsl"
import gridVertexShaderSource from "./shaders/grid/vertex-shader.glsl"


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
         * @type {UI}
         * @private
         */
        this.ui = null

        /**
         * @type {Array.<{Texture}>}
         * @private
         */
        this.textures = []

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

        this._globalPositionBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._globalPositionBuffer)
        this._globalTextureBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._globalTextureBuffer)

        this._initShaders()
        this.shaderProgram.use()
        // this.shaderProgram.useIn(this.webGL)
        // this.webGL.useProgram(this.shaderProgram)
        this.webGL.viewport(0, 0, this.width, this.height)

        this.webGL.enable(this.webGL.CULL_FACE)
        this.webGL.enable(this.webGL.DEPTH_TEST)

        /**
         * Default texture for all object.
         * @type {Texture}
         * @public
         */
        this.noTexture = new Texture()
        this.noTexture.setColorRGBA(219, 58, 52, 255)
        this.noTexture.bind(this)

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
        let program = new ShaderProgram(this.webGL)
        program.addShader('vertex', vertexShaderSource)
        program.addShader('fragment', fragmentShaderSource)
        program.create()
        program.linkAttribute('a_position', 'positionLocation')
        program.linkAttribute('a_texcoord', 'textureCoordinatesLocation')
        program.linkAttribute('a_normal', 'normalLocation')
        program.linkUniform('u_texture', 'textureLocation')
        program.linkUniform('u_matrix', 'matrixLocation')
        program.linkUniform('u_objectRotation', 'objectRotationLocation')
        program.linkUniform('u_lightWorldPosition', 'lightWorldPositionLocation')
        this.shaderProgram = program

        program = new ShaderProgram(this.webGL)
        program.addShader('vertex', cubeVertexShaderSource)
        program.addShader('fragment', cubeFragmentShaderSource)
        program.create()
        program.linkAttribute('a_position', 'positionLocation')
        program.linkAttribute('a_normal', 'normalLocation')
        program.linkUniform('u_texture', 'textureLocation')
        program.linkUniform('u_matrix', 'matrixLocation')
        program.linkUniform('u_objectRotation', 'objectRotationLocation')
        program.linkUniform('u_lightWorldPosition', 'lightWorldPositionLocation')
        this.cubeTextureShaderProgram = program
        

        program = new ShaderProgram(this.webGL)
        this.webGL.getExtension('OES_standard_derivatives')
        program.addShader('vertex', gridVertexShaderSource)
        program.addShader('fragment', gridFragmentShaderSource)
        program.create()
        program.linkAttribute('a_position', 'positionLocation')
        program.linkUniform('u_matrix', 'matrixLocation')
        program.linkUniform('u_camera', 'cameraLocation')
        this.gridTextureShaderProgram = program
        
        this.shaderProgram.use()
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

        this.polygons.forEach(element => {           
            temp = new Matrixes.Matrix()
            
            // temp.perspective(this.camera.fieldOfViewRad, this.width, this.height, 1, 20000)
            if (!element.UIElement) {
                temp.perspective(this.camera.fieldOfViewRad, this.width, this.height, 1, this.camera.range)
                temp.multiply(this.camera.inventedMatrix)
            } else {
                temp.projection(this.camera.fieldOfViewRad, this.width, this.height, 1, this.camera.range)
            }

            world = new Matrixes.Matrix()
            world.multiply(Matrixes.inverse(Matrixes.translation(element.rotationPoint[0], element.rotationPoint[1], element.rotationPoint[2])))
            world.translate(element.position[0], element.position[1], element.position[2])
            rot = Matrixes.multiply(Matrixes.rotationX(element.rotation[0]), Matrixes.rotationY(element.rotation[1]))
            rot = Matrixes.multiply(rot, Matrixes.rotationZ(element.rotation[2]))
            if (element.parentRotation != null) {
                parentRot = Matrixes.multiply(Matrixes.rotationX(element.parentRotation[0]), Matrixes.rotationY(element.parentRotation[1]))
                parentRot = Matrixes.multiply(parentRot, Matrixes.rotationZ(element.parentRotation[2]))
                element._world = parentRot
                rot = Matrixes.multiply(parentRot, rot)
            }
            world.multiply(rot)
            
            world.translate(element.rotationPoint[0], element.rotationPoint[1], element.rotationPoint[2])
                        
            temp.multiply(world.matrix)

            element._matrix = temp.matrix
            element._rotationMatrix = rot
        })

        this.objects.forEach(element => {           
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
        this.shaderProgram.use()
        this.webGL.uniform3fv(this.shaderProgram.reverseLightDirectionLocation, Vectors.normalize([-0.1, 0.5, 1]))
        this.webGL.uniform3fv(this.shaderProgram.lightWorldPositionLocation, [0, 100, 400]);
        this.webGL.uniformMatrix4fv(this.shaderProgram.cameraLocation, false, this.camera.matrix)

        this.drawCallsPerFrame = 0

        this.polygons.forEach(element => {
            element.draw()
        });

        this.objects.forEach(object => {
            object.draw()
        });

        if (this.debugger != null) {
            this.debugger.updateInfo()
        }

        this.webGL.blendFunc(this.webGL.SRC_ALPHA, this.webGL.ONE_MINUS_SRC_ALPHA);
        this.webGL.blendFunc(this.webGL.ONE, this.webGL.ONE_MINUS_SRC_ALPHA);
    }

    /**
     * Drawing UI function.
     * @private
     */
    _drawUI () {
        if (this.ui !== null) {
            this.ui._draw()
        }
    }

    /**
     * Sets range where objects will no draws.
     * @param {Number} range 
     */
    setDrawingRange (range) {
        if (this.camera != null) {
            this.camera.range = range 
        } else {
            console.warn('Failed to set drawing range. Camera wasn\'t set.')
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
