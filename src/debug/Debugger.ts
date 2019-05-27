import { Engine } from "../Engine";
import Entity from "../objects/Entity";

/**
 * Debugger for engine. Only for development.
 * @param {Engine} engine 
 * @class
 * @constructor
 */
export class Debugger {
  logArray: {view: HTMLElement, output: Function}[];
  element: HTMLElement | null;
  constructor(engine: Engine) {
    engine.debugger = this
    this.logArray = []
    this.element = null
  }

  setElement(element: HTMLElement) {
    this.element = element
  }

  addLog(view: HTMLElement, output: Function) {
    this.logArray.push({ view: view, output: output })
    this.addView(view)
  }

  createLogView() {
    let node = document.createElement('p')
    return node
  }

  addView(view: HTMLElement) {
    this.element!.appendChild(view)
  }

  updateInfo() {
    this.logArray.forEach(e => {
      e.view.innerText = e.output(e)
    })
  }
}
export default {
  Debugger
}
