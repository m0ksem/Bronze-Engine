import { Engine } from "../Engine";
/**
 * Debugger for engine. Only for development.
 * @param {Engine} engine
 * @class
 * @constructor
 */
export declare class Debugger {
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
declare const _default: {
    Debugger: typeof Debugger;
};
export default _default;
