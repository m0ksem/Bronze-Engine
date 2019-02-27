class Engine {
    /**
     * GameEngine core class.
     * @param {HTMLElement} canvas
     */
    constructor (canvas) {
        this.webGL = getWebGL(canvas)
        this.canvas = canvas
        this.width = canvas.width
        this.height = canvas.height
        this.polygons = []
        this.objects = []
        this.textures = []
        this.camera = null


        this._globalPossitionBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._globalPossitionBuffer)
        this._globalTextureBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._globalTextureBuffer)

        canvas.addEventListener('resize', function () {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        })
        this.initShaders()
    }

    /**
     * Creating shaders and attaching to webGL context.
     */
    initShaders () {
        let vertex = createShaderFromScript("shader/vertex", this.webGL)
        let fragment = createShaderFromScript("shader/fragment", this.webGL)
        this.shaderProgram = createWebGLProgram(this.webGL, vertex, fragment, false)
        this.positionLocation = this.webGL.getAttribLocation(this.shaderProgram, "a_position")
        this.texcoordLocation = this.webGL.getAttribLocation(this.shaderProgram, "a_texcoord")
        this.textureLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_texture")
        this.matrixLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_matrix")
        this.objectRotationLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_objectRotation")
        this.normalLocation = this.webGL.getAttribLocation(this.shaderProgram, "a_normal")
        this.everseLightDirectionLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_reverseLightDirection");

        this.webGL.useProgram(this.shaderProgram)
                this.webGL.viewport(0, 0, this.width, this.height)

        this.webGL.enable(this.webGL.CULL_FACE)
        this.webGL.enable(this.webGL.DEPTH_TEST);
    }
    
    /**
     * @param {Camera} camera
     */
    setCamera (camera) {
        this.camera = camera
    }

    /**
     * Binding texture to engine.
     * @param {Texture} texture 
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
        } else {
            this.webGL.texImage2D(this.webGL.TEXTURE_2D, 0, this.webGL.RGBA, 1, 1, 0, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE,
            texture.color);
            texture.addEventListener('load', () => {
                this.webGL.activeTexture(this.webGL.TEXTURE0 + texture._textureBlockLocation)
                this.webGL.texImage2D(this.webGL.TEXTURE_2D, 0, this.webGL.RGBA, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, texture)
                this.webGL.generateMipmap(this.webGL.TEXTURE_2D)
            })
        }
        
    }

    /**
     * Function to update all positions, size etc.
     */
    update () {
        let temp
        let cameraMatrix = this.camera.lookAt()
        let rot
        let parentRot
        let world
        cameraMatrix = inverse(cameraMatrix)

        this.polygons.forEach(element => {           
            temp = new Matrix()
            temp.perspective(this.camera.fieldOfViewRad, this.width, this.height, 1, 20000)
            temp.multiply(this.camera.inserved)
            world = new Matrix()
            world.multiply(inverse(Matrixes.translation(element.rotationPoint[0], element.rotationPoint[1], element.rotationPoint[2])))
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
            element._rotataionMatrix = rot
        })
    }

    /**
     * Main drawing function. All polygons are drawn here.
     */
    draw () {
        this.webGL.clear(this.webGL.COLOR_BUFFER_BIT | this.webGL.DEPTH_BUFFER_BIT);

        this.webGL.uniform3fv(this.everseLightDirectionLocation, normalize([-0.1, 0.5, 1]))

        this.polygons.forEach(element => {
            this.webGL.enableVertexAttribArray(this.positionLocation)
            this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, element._vertexesBuffer)
            this.webGL.vertexAttribPointer(
                this.positionLocation, 3, this.webGL.FLOAT, false, 0, 0
            )

            this.webGL.enableVertexAttribArray(this.texcoordLocation)
            this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, element._coordsBuffer)
            this.webGL.vertexAttribPointer(
                this.texcoordLocation, 2, this.webGL.FLOAT, false, 0, 0
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
    }

    /**
     * Rendering function.
     */
    render () {
        this.update()
        this.draw()
    }

    /**
     * Start rendering.
     */
    run () {
        e = this
        requestAnimationFrameEngine()
    }
}


class Camera {
    /**
     * Creates camera object
     */
    constructor () {
        this.position = [0, 0, 100]
        this.up = [0, 1, 0]
        this.target = [0, 0, 0]
        this.fieldOfView = 90
        this.fieldOfViewRad = degToRad(90)
        this.matrix = Matrixes.unit()
        this.position = [0, 0, 0]
        this.rotation = [0, 0, 0]
    }

    setFieldOfView (angle) {
        this.fieldOfView = angle;
        this.fieldOfViewRad = degToRad(angle)
    }

    setPosition (x, y, z) {
        this.position = [x, y, z]
        this.computeMatrix()
    }

    /**
     * Moving camera
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    move (x, y, z) {
        this.position[0] += x
        this.position[1] += y
        this.position[2] += z
        this.computeMatrix()
    }

    /**
     * Rotate for x, y, z deggres.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    rotate (x, y, z) {
        this.rotation[0] += x
        this.rotation[1] += y
        this.rotation[2] += z
        this.computeMatrix()
    }

    setRotation (x, y, z) {
        this.rotation = [x, y, z]
        this.computeMatrix()
    }

    computeMatrix () {
        this.matrix = Matrixes.unit()
        this.matrix = Matrixes.multiply(this.matrix, Matrixes.translation(this.position[0], this.position[1], this.position[2]))
        let rotation = new Matrix()
        rotation.multiply(Matrixes.rotationY(degToRad(this.rotation[1])))
        rotation.multiply(Matrixes.rotationX(degToRad(this.rotation[0])))
        rotation.multiply(Matrixes.rotationZ(degToRad(this.rotation[2])))
        
        this.matrix = Matrixes.multiply(this.matrix, rotation.matrix)
        this.rotationMatrix = inverse(rotation.matrix)
        this.inserved = inverse(this.matrix)
    }

    lookAt (result) {
        result = result || new Float32Array(16)
        let zAxis = normalize(subVec3(this.position, this.target))
        let xAxis = normalize(cross(this.up, zAxis))
        let yAxis = normalize(cross(zAxis, xAxis))
    
        result[ 0] = xAxis[0]
        result[ 1] = xAxis[1]
        result[ 2] = xAxis[2]
        result[ 3] = 0
        result[ 4] = yAxis[0]
        result[ 5] = yAxis[1]
        result[ 6] = yAxis[2]
        result[ 7] = 0
        result[ 8] = zAxis[0]
        result[ 9] = zAxis[1]
        result[10] = zAxis[2]
        result[11] = 0
        result[12] = this.position[0]
        result[13] = this.position[1]
        result[14] = this.position[2]
        result[15] = 1
        return result;
    }
}


let e

/**
 * RequestAnimationFrame wrapper for Engine rendering.
 */
function requestAnimationFrameEngine () { 
    requestAnimationFrame(requestAnimationFrameEngine)
    e.render()
}


(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                                   || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
