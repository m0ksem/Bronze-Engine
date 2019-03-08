/**
 * Help class for creating user controls.
 * @class
 * @constructor
 * @param {Engine} engine 
 */

export class Controls {
    /**
     * Help class for creating user controls.
     * @param {Engine} engine 
     */
    constructor (engine) {
        engine.controls = this
        this.engine = engine

        /**
         * Array in which the true elements if button are pressed. Every element corresponds to the button code.
         * @type {Array.<{boolean}>}
         * @readonly
         */
        this.keys = []

        /**
         * Functions which triggers if key pressed.
         * @type {Array.<{Function}>}
         * @private
         */
        this._handlers = []

        /**
         * Functions which triggers if mouse button pressed.
         * @type {Array.<{Function}>}
         * @private
         */
        this._mouseHandlers = [
            null, null,
            null, null, null,
            null
        ]

        /**
         * Mouse object which contains position and pressed buttons.
         * @type {Object.{x: Number, y: Number, buttons: Array.<{0: boolean, 1: boolean, 2: boolean}>}}
         * @public
         */
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
     * @public
     */
    onKeyDown(keyCode, handler) {
        this._handlers[keyCode] = handler
    }

    /**
     * Sets handler for mouse key down.
     * @param {Number} keyCode 
     * @param {Function} handler 
     * @public
     */
    onMouseDown(keyCode, handler) {
        this._mouseHandlers[2 + keyCode] = handler
    }
    
    /**
     * Sets handler for mouse moving.
     * @param {Function} handler 
     * @public
     */
    onMouseMove(handler) {
        this.engine.canvas.addEventListener('mousemove', handler, false);
    }

    /**
     * Sets function on right click for context menu.
     * @param {Function} handler 
     * @public
     */
    onContextMenu (handler) {
        this.engine.canvas.oncontextmenu = handler
    }
}
