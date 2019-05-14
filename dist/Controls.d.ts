import { Engine } from "./Engine";
import { Vector2 } from "./math/Vector2";
/**
 * Help class for creating user controls.
 * @class
 * @constructor
 */
export default class Controls {
    engine: Engine;
    /**
     * True if canvas focused.
     */
    isFocused: boolean;
    /**
     * True if keys pressed. False if not.
     */
    keys: boolean[];
    /**
     * True if mouse cursor over canvas element.
     */
    mouseOverCanvas: boolean;
    pointerLocked: boolean;
    mouse: Mouse;
    touch: Touch;
    /**
     * The time that the user must spend on a long press.
     * A long press counts as a right mouse click.
     */
    longTouchTime: number;
    touchDuration: number;
    controlFunction: Function | null;
    private _lockPointer;
    /**
     * Rebind default key events
     * @default true
     */
    private _rebind;
    private _globalRebind;
    /**
     * Functions which triggers if key pressed.
     */
    private _handlers;
    private _focusHandlers;
    private _blurHandlers;
    /**
     * Set focus only if canvas clicked like on default input or button.
     * If [true] then you need to click on canvas before it will be focused.
     * If [false] then you just need to move your cursor over canvas.
     * @type {boolean}
     * @default true
     * @private
     */
    private _focusOnlyIfClick;
    /**
     * Functions which triggers if mouse button pressed.
     * @private
     */
    private _mouseDownHandlers;
    /**
     * Functions which triggers if mouse button pressed.
     * @private
     */
    private _mouseUpHandlers;
    /**
     * Help class for creating user controls.
     */
    constructor(engine: Engine);
    /**
     * Sets mode when user need click to focus canvas
     */
    clickForFocus(bool: boolean): void;
    /**
     * Set sensitivity for mouse movement
     * @default 1
     * @param sensitivity
     */
    setSensitivity(sensitivity: number): void;
    /**
     * Rebind default browser shortcut actions. Will switch rebind option.
     * @default true
     * @param bool switch to
     */
    rebindDefaultBrowserActions(bool: boolean): void;
    /**
     * Rebind default browser shortcut actions on all page. By default rebind occurs only if canvas focused.
     * @default false
     * @param {boolean} bool
     */
    globalRebind(bool: boolean): void;
    /**
     * Adds handler which will execute on canvas focus.
     * @param {Function} handler
     */
    addOnFocusHandler(handler: Function): void;
    /**
     * Adds handler which will execute on canvas blur.
     * @param {Function} handler
     */
    addOnBlurHandler(handler: Function): void;
    /**
     * Sets handler for keyboard key down.
     * @param {Number} keyCode
     * @param {Function} handler
     * @public
     */
    onKeyDown(keyCode: number, handler: Function): void;
    /**
     * Sets handler for mouse key down.
     * @param {Number} keyCode
     * @param {Function} handler
     * @public
     */
    onMouseDown(keyCode: number, handler: Function): void;
    /**
     * Sets handler for mouse key down.
     * @param {Number} keyCode
     * @param {Function} handler
     * @public
     */
    onMouseUp(keyCode: number, handler: Function): void;
    /**
     * Sets handler for mouse moving.
     * @param {Function} handler
     * @public
     */
    onMouseMove(handler: (this: HTMLDivElement, ev: MouseEvent) => any): void;
    /**
     * Sets function on right click for context menu.
     * @param {Function} handler
     * @public
     */
    onContextMenu(handler: ((this: GlobalEventHandlers, ev: MouseEvent) => any) | null): void;
    /**
     * Lock pointer on canvas. Useful for FPS Games.
     * @default true
     * @param {boolean} [bool]
     */
    lockPointer(bool: boolean): void;
    setControlFunction(func: Function): void;
}
/**
 * Mouse object which contains position and pressed buttons.
 * @property {Number} x mouse position x.
 * @property {Number} y mouse position y.
 * @property {Array}  buttons mouse buttons clicks.
 * @property {Number} movement.x mouse movement x from last frame.
 * @property {Number} movement.y mouse movement y from last frame.
 * @property {Number} sensitivity sensitivity for mouse movement.
 * @public
 */
export declare class Mouse {
    /**
     * Mouse position x.
     */
    x: number;
    /**
     * Mouse position y.
     */
    y: number;
    /**
     * Mouse movement
     */
    movement: Vector2;
    click: boolean;
    longClick: boolean;
    duration: null;
    actionBeforeMove: null;
    sensitivity: number;
    buttons: boolean[];
}
/**
 * @type {Object}
 * @property {Number} x mouse position x.
 * @property {Number} y mouse position y.
 * @property {Number} movement.x mouse movement x from last frame.
 * @property {Number} movement.y mouse movement y from last frame.
 * @property {boolean} click is current action is click.
 * @property {boolean} longClick is current action is longClick.
 * @property {Number} duration how long does it take to press.
 * @property {String} actionBeforeMove 'click' or 'long click'
 * @public
 */
export declare class Touch {
    x: number;
    y: number;
    movement: Vector2;
    click: boolean;
    longClick: boolean;
    duration: any;
    actionBeforeMove: string | null;
}
declare global {
    interface Window {
        DocumentTouch: any;
    }
    interface HTMLDivElement {
        requestPointerLock: any;
    }
    interface Document {
        pointerLockElement: any;
    }
}
export { Controls };
