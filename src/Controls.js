export class Controls {
    /**
     * Help class for creating user controls.
     * @param {Engine} engine 
     */
    constructor (engine) {
        engine.controls = this
        this.engine = engine
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

        for (let i = 0; i < 255; i++) {
            this.keys[i] = false
            this._handlers[i] = null
        }
        window.onkeydown = (event) => {
            this.keys[event.keyCode] = true;
            if (this._handlers[event.keyCode] != null) {
                this._handlers[event.keyCode]()
            }
            return false
        };
        window.onkeyup = (event) => {
            this.keys[event.keyCode] = false;
            return false
        };

        engine.canvas.addEventListener('mousemove', (event) => {
            let mousePos = engine.canvas.getBoundingClientRect()
            let x = event.clientX - mousePos.left
            let y = event.clientY - mousePos.top
            this.mouse.x = x
            this.mouse.y = y
        }, false);

        window.onmousedown = (event) => {
            this.mouse.buttons[event.button] = true
            if (this._mouseHandlers[2 + event.button] != null) this._mouseHandlers[2 + event.button]()
            return false
        }

        window.onmouseup = (event) => {
            this.mouse.buttons[event.button] = false
            return false
        }

        engine.canvas.oncontextmenu = function() {
            return false;
        }
    }

    /**
     * Sets handler for keyboard key down.
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
     * Sets handler for mouse moving.
     * @param {Function} handler 
     */
    onMouseMove(handler) {
        this.engine.canvas.addEventListener('mousemove', handler, false);
    }

    /**
     * Sets function on right click for context menu.
     * @param {Function} handler 
     */
    onContextMenu (handler) {
        this.engine.canvas.oncontextmenu = handler
    }
}
