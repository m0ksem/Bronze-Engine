export class Debugger {
    /**
     * Debuger for engine.
     * @param {Engine} engine 
     */
    constructor(engine) {
        engine.debugger = this
        this.logArray = []
        this.element = null
    }

    setElemenent(element) {
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
        return log.name + " : " + log.object[log.value]
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