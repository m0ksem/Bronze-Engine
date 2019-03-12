import * as Utils from "./Utils"
import {Texture} from "./Texture"
import * as Matrixes from "./math/Matrixes"
import * as Vectors from "./math/Vectors"
import {isPowerOf2} from "./math/Math";
import fragmentShaderSource from "./shaders/fragment-shader.glsl"
import vertexShaderSource from "./shaders/vertex-shader.glsl"
import {Map} from "./map/Map.js"


/**
 * GameEngine core class.
 * @class
 * @constructor
 * @param {HTMLElement|HTMLCanvasElement} canvas
 */
export class Engine {
    constructor (canvas) {

        /**
         * @private
         */

        /**
         * Canvas for drawing.
         * @readonly
         */
        this.canvas = canvas

        /**
         * WebGL context of canvas
         * @private
         */
        this.webGL = Utils.getWebGL(this.canvas)

        /**
         * Width of drawing resolution
         * @type {Number}
         */
        this.width = canvas.width

        /**
         * Height of drawing resolution.
         * @type {Number}
         */
        this.height = canvas.height

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
         * @type {Object}
         * @property {Array} ui.objects
         * @public
         */
        this.ui = {
            objects: []
        }

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

        /**
         * Default texture for all object.
         * @type {Texture}
         * @public
         */
        this.noTexture = new Texture()
        this.noTexture.setColorRGBA(219, 58, 52, 255)
        this.bindTexture(this.noTexture)

        /**
         * Execute every time when object is selected
         * @type {Function}
         * @private
         */
        this._objectSelectHandler
    }

    /**
     * Creating shaders and attaching to webGL context.
     * @private
     */
    _initShaders () {
        let vertex = Utils.compileShader(vertexShaderSource, "vertex", this.webGL)
        let fragment = Utils.compileShader(fragmentShaderSource,"fragment", this.webGL)
        this.shaderProgram = Utils.createWebGLProgram(this.webGL, vertex, fragment, false)
        this.positionLocation = this.webGL.getAttribLocation(this.shaderProgram, "a_position")
        this.textureCoordinatesLocation = this.webGL.getAttribLocation(this.shaderProgram, "a_texcoord")
        this.textureLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_texture")
        this.matrixLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_matrix")
        this.objectRotationLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_objectRotation")
        this.normalLocation = this.webGL.getAttribLocation(this.shaderProgram, "a_normal")
        this.reverseLightDirectionLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_reverseLightDirection")
        this.lightWorldPositionLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_lightWorldPosition")
        this.cameraLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_cameraMatrix")

        this.webGL.useProgram(this.shaderProgram)
        this.webGL.viewport(0, 0, this.width, this.height)

        this.webGL.enable(this.webGL.CULL_FACE)
        this.webGL.enable(this.webGL.DEPTH_TEST)
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
     * Binding texture to engine.
     * @param {Texture} texture 
     * @public
     */
    bindTexture (texture) {
        texture._textureBlockLocation = this.textures.length
        this.textures.push(texture)
        texture._WebGLtexture = this.webGL.createTexture()
        this.webGL.activeTexture(this.webGL.TEXTURE0 + texture._textureBlockLocation)
        this.webGL.bindTexture(this.webGL.TEXTURE_2D, texture._WebGLtexture)
        if (texture.loaded) {
            this.webGL.texImage2D(this.webGL.TEXTURE_2D, 0, this.webGL.RGBA, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, texture)
            this.webGL.generateMipmap(this.webGL.TEXTURE_2D)
            if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
                this.webGL.generateMipmap(this.webGL.TEXTURE_2D)
            } else {
                this.webGL.texParameteri(this.webGL.TEXTURE_2D, this.webGL.TEXTURE_WRAP_S, this.webGL.CLAMP_TO_EDGE);
                this.webGL.texParameteri(this.webGL.TEXTURE_2D, this.webGL.TEXTURE_WRAP_T, this.webGL.CLAMP_TO_EDGE);
                this.webGL.texParameteri(this.webGL.TEXTURE_2D, this.webGL.TEXTURE_MIN_FILTER, this.webGL.LINEAR);
            }
        } else {
            this.webGL.texImage2D(this.webGL.TEXTURE_2D, 0, this.webGL.RGBA, 1, 1, 0, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE,
            texture.color);
            texture.addEventListener('load', () => {
                this.webGL.activeTexture(this.webGL.TEXTURE0 + texture._textureBlockLocation)
                this.webGL.texImage2D(this.webGL.TEXTURE_2D, 0, this.webGL.RGBA, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, texture)
                if (isPowerOf2(texture.width) && isPowerOf2(texture.height)) {
                    this.webGL.generateMipmap(this.webGL.TEXTURE_2D)
                } else {
                    this.webGL.texParameteri(this.webGL.TEXTURE_2D, this.webGL.TEXTURE_WRAP_S, this.webGL.CLAMP_TO_EDGE);
                    this.webGL.texParameteri(this.webGL.TEXTURE_2D, this.webGL.TEXTURE_WRAP_T, this.webGL.CLAMP_TO_EDGE);
                    this.webGL.texParameteri(this.webGL.TEXTURE_2D, this.webGL.TEXTURE_MIN_FILTER, this.webGL.LINEAR);
                }
            })
        }
        
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
            
            temp.perspective(this.camera.fieldOfViewRad, this.width, this.height, 1, 20000)
            if (!element.UIElement) {
                temp.multiply(this.camera.inventedMatrix)
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
            world.scale(1, 1, 1)
                        
            temp.multiply(world.matrix)

            element._matrix = temp.matrix
            element._rotationMatrix = rot
        })

        let selectedObject = null

        this.objects.forEach(element => {           
            temp = new Matrixes.Matrix()
            temp.perspective(this.camera.fieldOfViewRad, this.width, this.height, 1, 20000)
            if (!element.UIElement) {
                temp.multiply(this.camera.inventedMatrix)
            }
            world = new Matrixes.Matrix()
            world.multiply(Matrixes.inverse(Matrixes.translation(element.rotationPoint[0], element.rotationPoint[1], element.rotationPoint[2])))
            world.translate(element.position[0], element.position[1], element.position[2])
            rot = Matrixes.multiply(Matrixes.rotationX(element.rotation[0]), Matrixes.rotationY(element.rotation[1]))
            rot = Matrixes.multiply(rot, Matrixes.rotationZ(element.rotation[2]))
            parentRot = Matrixes.multiply(Matrixes.rotationX(element.parentRotation[0]), Matrixes.rotationY(element.parentRotation[1]))
            parentRot = Matrixes.multiply(parentRot, Matrixes.rotationZ(element.parentRotation[2]))
            element._world = parentRot
            rot = Matrixes.multiply(parentRot, rot)
            world.multiply(rot)
            
            world.translate(element.rotationPoint[0], element.rotationPoint[1], element.rotationPoint[2])     
            world.scale(element.scaling[0], element.scaling[1], element.scaling[2])
                        
            temp.multiply(world.matrix)
            
            if (!element.UIElement) {
                let mouseOverHitBox = false
                element.collisionBoxes.forEach(collisionBox => {
                    let boxInPixels = []
                    for (let ix = 0; ix < collisionBox.x.length; ix++) {
                        const x = collisionBox.x[ix];
                        for (let iy = 0; iy < collisionBox.y.length; iy++) {
                            const y = collisionBox.y[iy];
                            for (let iz = 0; iz < collisionBox.z.length; iz++) {
                                const z = collisionBox.z[iz];
                                let coordsInPixels = Matrixes.transformVector(temp.matrix, [x, y, z, 1])
                                    coordsInPixels[0] =  coordsInPixels[0] / coordsInPixels[3]
                                    coordsInPixels[1] =  coordsInPixels[1] / coordsInPixels[3]
                                    coordsInPixels[0] = (coordsInPixels[0] *  0.5 + 0.5) * this.width;
                                    coordsInPixels[1] = (coordsInPixels[1] * -0.5 + 0.5) * this.height;
                                    
                                    coordsInPixels[0] = coordsInPixels[0] < 0 ? 0 : coordsInPixels[0]
                                    coordsInPixels[1] = coordsInPixels[1] < 0 ? 0 : coordsInPixels[1]

                                    coordsInPixels[0] = coordsInPixels[0] > this.width ? this.width : coordsInPixels[0]
                                    coordsInPixels[1] = coordsInPixels[1] > this.height ? this.height : coordsInPixels[1]

                                    if (coordsInPixels[2] >= 0) {
                                        boxInPixels.push(coordsInPixels) 
                                    }
                                        
                            }
                        }
                    }

                    let smallest = [10000,  10000, -1000]
                    let biggest = [-10000, -10000]
                    for (let i = 0; i < boxInPixels.length; i++) {
                        const box = boxInPixels[i];
                        if (box[0] < smallest[0]) {
                            smallest[0] = box[0]
                        } else if (box[0] > biggest[0]) {
                            biggest[0] = box[0]
                        }
                        if (box[1] < smallest[1]) {
                            smallest[1] = box[1]
                        } else if (box[1] > biggest[1]) {
                            biggest[1] = box[1]
                        }
                        if (box[2] > smallest[2]) {
                            smallest[2] = box[2]
                        }
                    }

                    element.relativeCameraPosition = {
                        x: {
                            left: smallest[0],
                            right: biggest[0]
                        },
                        y: {
                            top: biggest[1],
                            bottom: smallest[1]
                        },
                        depth: smallest[2]
                    }
                    
                    if (this.controls.mouse.x > smallest[0] && this.controls.mouse.x < biggest[0] &&
                        this.controls.mouse.y > smallest[1] && this.controls.mouse.y < biggest[1]   ) {
                        mouseOverHitBox = true
                    }

                    let mouse = this.controls.mouse
                    if (mouseOverHitBox) {
                        if (selectedObject == null) {
                            selectedObject = element
                        }
                        if (selectedObject.relativeCameraPosition.depth >= smallest[2]) {
                            selectedObject = element
                        }
                    }
                })
            }

            this.selectedObject = selectedObject
            if (!element.UIElement && !this.selectedObject && this._objectSelectHandler != null) {
                this._objectSelectHandler(selectedObject)
            }

            element._matrix = temp.matrix
            element._rotationMatrix = rot
        })
    }

    /**
     * Main drawing function. All polygons are drawn here.
     * @private
     */
    _draw () {
        this.webGL.clear(this.webGL.COLOR_BUFFER_BIT | this.webGL.DEPTH_BUFFER_BIT);

        this.webGL.uniform3fv(this.reverseLightDirectionLocation, Vectors.normalize([-0.1, 0.5, 1]))
        this.webGL.uniform3fv(this.lightWorldPositionLocation, [0, 100, 400]);
        this.webGL.uniformMatrix4fv(this.cameraLocation, false, this.camera.matrix)

        this.polygons.forEach(element => {
            this.webGL.enableVertexAttribArray(this.positionLocation)
            this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, element._vertexesBuffer)
            this.webGL.vertexAttribPointer(
                this.positionLocation, 3, this.webGL.FLOAT, false, 0, 0
            )
    
            this.webGL.enableVertexAttribArray(this.textureCoordinatesLocation)
            this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, element._coordsBuffer)
            this.webGL.vertexAttribPointer(
                this.textureCoordinatesLocation, 2, this.webGL.FLOAT, false, 0, 0
            )

            this.webGL.enableVertexAttribArray(this.normalLocation);
            this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, element._normalBuffer);
            this.webGL.vertexAttribPointer(
                this.normalLocation, 3, this.webGL.FLOAT, false, 0, 0)

            this.webGL.uniform1i(this.textureLocation, element.texture._textureBlockLocation)
            this.webGL.uniformMatrix4fv(this.matrixLocation, false, element._matrix)
            this.webGL.uniformMatrix4fv(this.objectRotationLocation, false, element._world)

            this.webGL.drawArrays(this.webGL.TRIANGLES, 0, 3)
        });

        this.objects.forEach(o => {
            o.faces.forEach(face => {
                // console.log(face)
               
                this.webGL.enableVertexAttribArray(this.positionLocation)
                this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, face.vertexesBuffer)
                this.webGL.vertexAttribPointer(
                    this.positionLocation, 3, this.webGL.FLOAT, false, 0, 0
                )

                this.webGL.enableVertexAttribArray(this.textureCoordinatesLocation)
                this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, face.coordsBuffer)
                this.webGL.vertexAttribPointer(
                    this.textureCoordinatesLocation, 2, this.webGL.FLOAT, false, 0, 0
                )

                this.webGL.enableVertexAttribArray(this.normalLocation);
                this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, face.normalBuffer);
                this.webGL.vertexAttribPointer(
                    this.normalLocation, 3, this.webGL.FLOAT, false, 0, 0)

                this.webGL.uniform1i(this.textureLocation, o.texture._textureBlockLocation)
                this.webGL.uniformMatrix4fv(this.matrixLocation, false, o._matrix)
                this.webGL.uniformMatrix4fv(this.objectRotationLocation, false, o._world)

                this.webGL.drawArrays(this.webGL.TRIANGLES, 0, face.vertexes.length / face.vertexesCount)
            })
            this.webGL.enable(this.webGL.DEPTH_TEST)
        });

        this.ui.objects.forEach(o => {
            o.faces.forEach(face => {
                // console.log(face)
               
                this.webGL.enableVertexAttribArray(this.positionLocation)
                this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, face.vertexesBuffer)
                this.webGL.vertexAttribPointer(
                    this.positionLocation, 3, this.webGL.FLOAT, false, 0, 0
                )

                this.webGL.enableVertexAttribArray(this.textureCoordinatesLocation)
                this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, face.coordsBuffer)
                this.webGL.vertexAttribPointer(
                    this.textureCoordinatesLocation, 2, this.webGL.FLOAT, false, 0, 0
                )

                this.webGL.enableVertexAttribArray(this.normalLocation);
                this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, face.normalBuffer);
                this.webGL.vertexAttribPointer(
                    this.normalLocation, 3, this.webGL.FLOAT, false, 0, 0)

                this.webGL.uniform1i(this.textureLocation, o.texture._textureBlockLocation)
                this.webGL.uniformMatrix4fv(this.matrixLocation, false, o._matrix)
                this.webGL.uniformMatrix4fv(this.objectRotationLocation, false, o._world)
                
                this.webGL.drawArrays(this.webGL.TRIANGLES, 0, face.vertexes.length / face.vertexesCount)
            })
        });

        if (this.debugger != null) {
            this.debugger.updateInfo()
        }
    }

    /**
     * Rendering function.
     * @public
     */
    async render () {
        await this._update()
        await this._draw()
    }

    /**
     * Start rendering with default requestAnimationFrame function.
     * @public
     */
    run () {
        _engine = this
        console.log()
        console.log('     %c%s', 'color: rgba(247, 137, 74, 1); text-align: center; font-size: 16px; font-weight: 700', "Bronze Engine is running")
        console.log()
        console.info('     Version : 0.0.1')
        console.info('     Docs    : http://m0ksem.design/Bronze-Engine/docs/global')
        console.info('     GitHub  : https://github.com/m0ksem/Bronze-Engine')
        console.log()
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
