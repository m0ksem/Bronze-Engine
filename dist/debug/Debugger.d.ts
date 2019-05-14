import { Engine } from "../Engine";
/**
 * Debugger for engine. Only for development.
 * @param {Engine} engine
 * @class
 * @constructor
 */
export default class Debugger {
    logArray: {
        view: HTMLElement;
        output: Function;
    }[];
    element: HTMLElement | null;
    constructor(engine: Engine);
    setElement(element: HTMLElement): void;
    addLog(view: HTMLElement, output: Function): void;
    createLogView(): HTMLParagraphElement;
    addView(view: HTMLElement): void;
    updateInfo(): void;
}
export { Debugger };
