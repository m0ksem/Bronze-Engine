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

    addLog(view, output) {
        this.logArray.push({view: view, output: output})
        this.addView(view)
    }

    createLogView () {
        let node = document.createElement('p')
        return node
    }

    addView(view) {
        this.element.appendChild(view)
    }

    updateInfo () {
        this.logArray.forEach(e => {
            e.view.innerText = e.output(e)
        })
    }

    logObject (object) {
        let output = '{\n'
        for (let property in object) {
            if (property[0] != '_') {
                output += property + ': ' + object[property] + ','
            }
        }
        output.slice(-1, 1)
        output += '}\n'
        return output
    }
}