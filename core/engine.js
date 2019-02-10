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
        this._globalTextureBuffer = this.webGL.createBuffer();
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._globalTextureBuffer);
    }

    /**
     * Creating shaders and attaching to webGL context.
     */
    initShaders () {
        let vertex = createShaderFromScript("shader/vertex", this.webGL)
        let fragment = createShaderFromScript("shader/fragment", this.webGL)
        this.shaderProgram = createWebGLProgram(this.webGL, vertex, fragment, false)
    }
    
    /**
     * Function to update all positions, size etc.
     */
    update () {
        this.polygons.forEach(element => {
            element.update()
        });
    }

    /**
     * Main drawing function. All polygons are drawn here.
     */
    draw () {
  
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
