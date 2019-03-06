export class Controls {
    /**
     * Help class for creating user controls
     * @param {Engine} engine 
     */
    constructor (engine) {
        engine.controls = this
        this.keys = []
        this._handlers = []
        this._mouseHandlers = [
            null, null,
            null, null, null,
            null
        ]
        this.mouse = {
            x: 0,
            y: 0,
            buttons: [false, false, false]
        }

        let self = this

        for (let i = 0; i < 255; i++) {
            this.keys[i] = false
            this._handlers[i] = null
        }
        window.onkeydown = function(event){
            self.keys[event.keyCode] = true;
            if (self._handlers[event.keyCode] != null) {
                self._handlers[event.keyCode]()
            }
            return false
        };
        window.onkeyup = function(event){
            self.keys[event.keyCode] = false;
            return false
        };

        engine.canvas.addEventListener('mousemove', function (evt) {
            let mousePos = engine.canvas.getBoundingClientRect()
            let x = evt.clientX - mousePos.left
            let y = evt.clientY - mousePos.top
            self.mouse.x = x
            self.mouse.y = y
        }, false);

        window.onmousedown = function (event) {
            self.mouse.buttons[event.button] = true
            if (self._mouseHandlers[2 + event.button] != null) self._mouseHandlers[2 + event.button]()
            return false
        }

        window.onmouseup = function (event) {
            self.mouse.buttons[event.button] = false
            return false
        }
    }

    /**
     * Sets handler for keyboard key down
     * @param {Number} keyCode 
     * @param {Function} handler 
     */
    onKeyDown(keyCode, handler) {
        this._handlers[keyCode] = handler
    }

    /**
     * Sets handler for mouse key down.
     * @param {Number} keyCode 
     * @param {Function} handler 
     */
    onMouseDown(keyCode, handler) {
        this._mouseHandlers[2 + keyCode] = handler
    }
    
    /**
     * Sets handler for mouse moving
     * @param {Function} handler 
     */
    onMouseMove(handler) {
        engine.canvas.addEventListener('mousemove', handler, false);
    }
}
