import {ShaderProgram} from './ShaderProgram'

export class Shaders {
    constructor (webGL) {
        this.webGL = webGL

        /**
         * Extensions objects that allow you to use extensions which was added by addExtension()
         * @public
         * @type {Object[]}
         */
        this.extensions = {

        }
    }

    /**
     * Creates shaders program with {name} and add its to this objects. Auto linking uniforms and attributes.
     * @public
     * @param {String} name
     * @param {String} vertexSource
     * @param {String} fragmentSource
     * @param {Object} [options]
     */
    addProgram (name, vertexSource, fragmentSource, options) {
        let program = new ShaderProgram(this.webGL)
        program.addShader('vertex', vertexSource)
        program.addShader('fragment', fragmentSource)
        program.create()
        program = this._linkAllAttributesFromSource(program, vertexSource, options)
        program = this._linkAllAttributesFromSource(program, fragmentSource, options)
        this[name] = program
    }

    _linkAllAttributesFromSource (program, source, options) {
        let rows = source.split(';').join('\r').split('\r')
        let outName
        rows.forEach(row => {
            row = row.replace(new RegExp('\r', 'g'), '')
            row = row.replace(new RegExp('\n', 'g'), '')

            let words = row.split(' ')
            // console.log(words)
            for (let i = words.length - 1; i--;) {
                if (words[i] === '')  {
                    words.splice(i, 1)
                }
            }
            if (words[0].toLowerCase().includes('attribute')) {
                outName = words[2]
                if (options && options.removePrefixes) {
                    outName = outName.slice(2, outName.length)
                }
                if (options && options.addLocationMarker) {
                    outName = outName + 'Location'
                }
                program.linkAttribute(words[2], outName)
            } else if (words[0].toLowerCase().includes('uniform')) {
                outName = words[2]
                if (options && options.removePrefixes) {
                    outName = outName.slice(2, outName.length)
                }
                if (options && options.addLocationMarker) {
                    outName = outName + 'Location'
                }
                program.linkUniform(words[2], outName)
            }
        })
        return program
    }

    /**
     * Adds extension form webgl to this object with custom name
     * @param {String} name custom name to use in shaders  
     * @param {String} nameInWebGL extension name in webgl
     */
    addExtension (name, nameInWebGL) {
        this.extensions[name] = this.webGL.getExtension(nameInWebGL)
    }
}