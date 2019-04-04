export class ShaderProgram {
    constructor (webGL) {
        this.webGL = webGL
        
        /**
         * Shader type
         */
        this.VERTEX_SHADER = 'vertex'

        /**
         * Shader type
         */
        this.FRAGMENT_SHADER = 'fragment'

        /*
         * Variable type
        */
        this.ATTRIBUTE = 'attribute'

        /*
         * Variable type
         */
        this.UNIFORM = 'uniform'

        return this
    }

    /**
     * Compiling and attaching shader to this program.
     * @param {String} type can be ['vertex', 'fragment'].
     * @param {String} source 
     */
    addShader (type, source) {
        let shader
        switch (type) {
            case 'vertex' || this.VERTEX_SHADER: 
                shader = this.webGL.createShader(this.webGL.VERTEX_SHADER)
                this.vertexShader = shader
            break;
            case 'fragment' || this.FRAGMENT_SHADER:
                shader = this.webGL.createShader(this.webGL.FRAGMENT_SHADER)
                this.fragmentShader = shader
            break;
            default:
                throw new BronzeShaderException('Wrong shader type')
            break;
        }
        this.webGL.shaderSource(shader, source)
        this.webGL.compileShader(shader)

        if (!this.webGL.getShaderParameter(shader, this.webGL.COMPILE_STATUS)) {
            console.error(this.webGL.getShaderInfoLog(shader))
            throw 'Could not compile shader:'  
        }
    }

    /**
     * @param {bool} [deleteShaders] will delete shader after attaching.
     */
    create (deleteShaders = false) {
        let program = this.webGL.createProgram()

        this.webGL.attachShader(program, this.vertexShader)
        this.webGL.attachShader(program, this.fragmentShader)

        this.webGL.linkProgram(program)
        this.webGL.useProgram(program)

        if (deleteShaders) {
            this.webGL.deleteShader(this.vertexShader);
            this.webGL.deleteShader(this.fragmentShader);
        }
        this.program = program
        return program
    }

    /**
     * Linking variable of program to this object.
     * @param {String} type can be ['attribute', 'uniform']
     * @param {String} name variable name in shader.
     * @param {String} [customName] variable name in this object. By default its {name}.
     */
    linkVariable (type, name, customName) {
        customName = customName || name
        if (this[customName] !== undefined) {
            console.warn('Shader program: Custom name for uniform was switched from ' +
            customName + ' to ' + customName + '1')
            customName = customName + '1'
        }
        switch (type) {
            case this.ATTRIBUTE:
                this[customName] = this.webGL.getAttribLocation(this.program, name)
            break;
            case this.UNIFORM:
                this[customName] = this.webGL.getUniformLocation(this.program, name)
            break;
            default: 
                throw 'Wrong variable type'
        }
        return this[customName]
    }

    /**
     * Linking attribute variable of program to this object.
     * @param {String} name variable name in shader.
     * @param {String} [customName] variable name in this object. By default its {name}.
     */
    linkAttribute(name, customName) {
        customName = customName || name
        if (this[customName] != undefined) {
            console.warn('Shader program: Custom name for uniform was switched from ' +
                customName + ' to ' + customName + '1')
            customName = customName + '1'
        }
        this[customName] = this.webGL.getAttribLocation(this.program, name)
        return this[customName]
    }

    /**
     * Linking uniform variable of program to this object.
     * @param {String} name variable name in shader.
     * @param {String} [customName] variable name in this object. By default its {name}.
     */
    linkUniform(name, customName) {
        customName = customName || name
        if (this[customName] != undefined) {
            console.warn('Shader program: Custom name for attribute was switched from ' +
                customName + ' to ' + customName + '1')
            customName = customName + ''
        }
        this[customName] = this.webGL.getUniformLocation(this.program, name)

        return this[customName]
    }

    use () {
        this.webGL.useProgram(this.program)
    }

    useIn (webGL) {
        webGL.useProgram(this.program)
    }
}

/**
 * Shader error class.
 * @class
 * @private
 */
class BronzeShaderException {
    constructor(message) {
        this.message = message;
        this.name = 'Bronze shader error';
    }
}
