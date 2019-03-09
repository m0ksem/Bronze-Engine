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
         * True if mouse cursor over canvas element.
         * @type {boolean}
         * @readonly
         */
        this.mouseOverCanvas = false

        /**
         * @type {boolean}
         * @private
         */
        this._lockPointer = true

        /**
         * @type {boolean}
         * @public
         */
        this.pointerLocked = false

        /**
         * Rebind
         * @type {boolean}
         * @private 
         */
        this._rebind = true

        /**
         * Rebind
         * @type {boolean}
         * @private 
         */
        this._globalRebind = false

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
         * Handlers for canvas on focus.
         * @type {Array.{Function}}
         * @private
         */
        this._focusHandlers = []

        /**
         * Handlers for canvas on blur (or un focus).
         * @type {Array.{Function}}
         * @private
         */
        this._blurHandlers = []

        /**
         * Set focus only if canvas clicked like on default input or button. 
         * If [true] then you need to click on canvas before it will be focused.
         * If [false] then you just need to move your cursor over canvas.
         * @type {boolean}
         * @default true
         * @private
         */
        this._focusOnlyIfClick = true

        /**
         * Displays if canvas focused.
         * @type {boolean}
         * @readonly
         */
        this.isFocused = false

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
         * @property {Number} x mouse position x
         * @property {Number} y mouse position y
         * @property {Array}  buttons mouse buttons clicks
         * @property {Number} movement.x mouse movement x from last frame
         * @property {Number} movement.y mouse movement y from last frame
         * @property {Number} sensitivity sensitivity for mouse movement
         * @public
         */
        this.mouse = {
            x: 0,
            y: 0,
            buttons: [false, false, false],
            movement: {
                x: 0,
                y: 0
            },
            sensitivity: 1
        }

        for (let i = 0; i < 255; i++) {
            this.keys[i] = false
            this._handlers[i] = null
        }
        window.onkeydown = (event) => {
            if (this.isFocused) {
                this.keys[event.keyCode] = true;
                if (this._handlers[event.keyCode] != null) {
                    this._handlers[event.keyCode]()
                }
                return !this._rebind
            }
            else {
                if (this._globalRebind) {
                    return !this._rebind
                } 
                else {
                    return true
                }
            }
        };
        window.onkeyup = (event) => {
            this.keys[event.keyCode] = false;
            return !this._rebind
        };

        engine.canvas.setAttribute('tabindex','0');

        let lastMousePosition = null

        engine.canvas.addEventListener('mousemove', (event) => {
            if (!this.pointerLocked) {
                let mousePos = engine.canvas.getBoundingClientRect()
                let x = event.clientX - mousePos.left
                let y = event.clientY - mousePos.top
                this.mouse.x = x
                this.mouse.y = y
                if (lastMousePosition == null) {
                    lastMousePosition = {
                        x: x, 
                        y: y
                    }
                }
                this.mouse.movement.x = (x - lastMousePosition.x) * this.mouse.sensitivity
                this.mouse.movement.y = (y - lastMousePosition.y) * this.mouse.sensitivity
                lastMousePosition.x   = x
                lastMousePosition.y   = y
            } else {
                this.mouse.movement.x = -event.movementX * this.mouse.sensitivity
                this.mouse.movement.y = -event.movementY * this.mouse.sensitivity
                this.mouse.x = this.engine.width / 2
                this.mouse.y = this.engine.height / 2
            }
        }, false);

        window.addEventListener('mousemove', (event) => {
            let canvasPos = engine.canvas.getBoundingClientRect()
            let x = event.clientX
            let y = event.clientY
            if (x < canvasPos.right  && x > canvasPos.left &&
                y < canvasPos.bottom && y > canvasPos.top    ) {
                this.mouseOverCanvas = true
                if (!this._focusOnlyIfClick) {
                    engine.canvas.focus()
                }
            }
            else {
                this.mouseOverCanvas = false
            }
        })

        engine.canvas.onclick = () => {
            if (this._focusOnlyIfClick) {
                engine.canvas.focus()
            }
            if (this._lockPointer) {
                engine.canvas.requestPointerLock();
            }
        }

        engine.canvas.onmousedown = (event) => {
            this.mouse.buttons[event.button] = true
            if (this._mouseHandlers[2 + event.button] != null) this._mouseHandlers[2 + event.button]()
            return false
        }

        engine.canvas.onmouseup = (event) => {
            this.mouse.buttons[event.button] = false
            return false
        }

        engine.canvas.oncontextmenu = function() {
            return false;
        }

        engine.canvas.onblur = () => {
            this.isFocused = false
            for (let i = 0; i < this._focusHandlers.length; i++) {
                this._blurHandlers[i]()
            }
        }

        engine.canvas.onfocus = () => {
            this.isFocused = true
            for (let i = 0; i < this._focusHandlers.length; i++) {
                this._focusHandlers[i]()
            }
        }

        document.addEventListener('pointerlockchange', () => {
            if(document.pointerLockElement === engine.canvas){
                this.pointerLocked = true
            }
            else {
                this.pointerLocked = false
            }
        }, false);
    }

    /**
     * Set sensitivity for mouse movement
     * @default 1
     * @param {Number} sensitivity 
     * @public
     */
    setSensitivity (sensitivity) {
        this.mouse.sensitivity = sensitivity
    }

    /**
     * Rebind default browser shortcut actions. Will switch rebind option.
     * @default true
     * @param {boolean} [bool] switch to
     */
    rebindDefaultBrowserActions (bool) {
        bool = bool || !this._rebind
        this._rebind = bool
    }

    /**
     * Rebind default browser shortcut actions on all page. By default rebind occurs only if canvas focused.
     * @default false
     * @param {boolean} bool 
     */
    globalRebind (bool) {
        bool || !this._globalRebind
        this._globalRebind = bool
    }

    /**
     * Adds handler which will execute on canvas focus.
     * @param {Function} handler 
     */
    addOnFocusHandler (handler) {
        this._focusHandlers.push(handler)
    }    

    /**
     * Adds handler which will execute on canvas blur.
     * @param {Function} handler 
     */
    addOnBlurHandler (handler) {
        this._blurHandlers.push(handler)
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

    /**
     * Lock pointer on canvas. Useful for FPS Games.
     * @default true
     * @param {boolean} [bool]
     */
    lockPointer (bool) {
        bool = bool || !this._lockPointer
        this._lockPointer = bool
    }
}
