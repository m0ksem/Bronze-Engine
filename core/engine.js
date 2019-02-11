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
        this._globalPossitionBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._globalPossitionBuffer)
        this._globalTextureBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._globalTextureBuffer)

        canvas.addEventListener('resize', function () {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        })
    }

    /**
     * Creating shaders and attaching to webGL context.
     */
    initShaders () {
        let vertex = createShaderFromScript("shader/vertex", this.webGL)
        let fragment = createShaderFromScript("shader/fragment", this.webGL)
        this.shaderProgram = createWebGLProgram(this.webGL, vertex, fragment, false)
        this.positionLocation = this.webGL.getAttribLocation(this.shaderProgram, "a_position")
        this.texcoordLocation = this.webGL.getAttribLocation(this.shaderProgram, "a_texcoord");
        this.textureLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_texture");
    }
    
    /**
     * Function to update all positions, size etc.
     */
    update () {
        let temp
        this.polygons.forEach(element => {
            // Setting vertexes
            temp = this.webGL.createBuffer()
            this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, temp)
            this.webGL.bufferData(this.webGL.ARRAY_BUFFER, element.vertexesToBuffer(), this.webGL.STATIC_DRAW);
            element._vertexesBuffer = temp

            // Setting blue color for objects
            // temp = this.webGL.createBuffer()
            // this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, temp)
            // this.webGL.bufferData(this.webGL.ARRAY_BUFFER, element.texture.coords, this.webGL.STATIC_DRAW)
            // // Settting textcoords

            // element._textureCoords = temp

            // temp = this.webGL.createTexture()
            // this.webGL.bindTexture(this.webGL.TEXTURE_2D, temp)
            // this.webGL.texImage2D(this.webGL.TEXTURE_2D, 0, this.webGL.RGBA, 1, 1, 0, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE,
            //     new Uint8Array([0, 0, 255, 255]))
            // element._colorBuffer = temp

            // TODO: Setting texture image
        });
    }

    /**
     * Main drawing function. All polygons are drawn here.
     */
    draw () {
        this.webGL.viewport(0, 0, this.width, this.height)

        this.webGL.enable(this.webGL.CULL_FACE)
        this.webGL.enable(this.webGL.DEPTH_TEST);

        this.webGL.clear(this.webGL.COLOR_BUFFER_BIT | this.webGL.DEPTH_BUFFER_BIT);

        this.webGL.useProgram(this.shaderProgram)

        this.polygons.forEach(element => {
            this.webGL.enableVertexAttribArray(this.positionLocation)
            this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, element._vertexesBuffer)
            this.webGL.vertexAttribPointer(
                this.positionLocation, 2, this.webGL.FLOAT, false, 0, 0
            )

            // this.webGL.enableVertexAttribArray(this.texcoordLocation)
            // this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, element._textureCoords)
            // this.webGL.vertexAttribPointer(
            //     this.texcoordLocation, 2, this.webGL.FLOAT, false, 0, 0
            // )

            this.webGL.uniform1i(this.textureLocation, 0)

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
