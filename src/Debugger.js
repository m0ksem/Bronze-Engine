/**
 * Debugger for engine. Only for development.
 * @param {Engine} engine 
 * @class
 * @constructor
 */
export class Debugger {
    constructor(engine) {
        engine.debugger = this
        this.logArray = []
        this.element = null
    }

    setElement(element) {
        this.element = element
    }

    addLog(name, object, value, view, output) {
        output = output || this.defaultOutput
        this.logArray.push({name: name, object: object, value: value, view: view, output: output})
        this.addView(view)
    }

    createLogView () {
        let node = document.createElement('p')
        return node
    }

    defaultOutput (log) {
        if (object != null) {
            return log.name + " : " + log.object[log.value]
        }
        return "log.name"
    }

    addView(view) {
        this.element.appendChild(view)
    }

    updateInfo () {
        this.logArray.forEach(e => {
            e.view.innerText = e.output(e)
        })
    }
}