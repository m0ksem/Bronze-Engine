/**
 * Base class for materials which will attached to objects. 
 * @param {Engine} engine
 * @param {Object} [object]
 */
export class Material {
    constructor (engine, object) {
        this.engine = engine
        this.object = object || null
        this.webGL = engine.webGL
    }

    /**
     * Adds shader for material.
     * @param {ShaderProgram} shader 
     */
    setShaderProgram (shaderProgram) {
        this.shaderProgram = shaderProgram
    }

    /**
     * Draws object using this material.
     * @param {Object} object 
     */
    drawObject (object) {

    }
}