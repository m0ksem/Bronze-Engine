import * as Matrixes from '../math/Matrixes'
import * as Math from '../math/Math'

export class Skybox {
    constructor(engine) {
        if (engine) {
            engine.objects.push(this)
            this.engine = engine
        }
        
        this.webGL = engine.webGL

        this.vertexes = [
            -1, -1,
            1, -1,
            -1, 1,
            -1, 1,
            1, -1,
            1, 1,
        ]

        this.shaderProgram = engine.shaders.skybox

        this.texture = engine.noTexture

        this.vertexesBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this.vertexesBuffer)
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webGL.STATIC_DRAW);
        
        this.engine.objectLoaded(this)

        /**
         * Skybox rotation. Angles in radians. Maybe you need setRotation() or rotate() methods? It'd be more convenient to use.
         * @type {Number[]}
         */
        this.rotation = [0, 0, 0]
    }

    /**
     * Setting square texture for rect.
     * @param {Texture} texture
     * @public
     */
    setTexture(texture) {
        this.texture = texture
        texture.object = this
    }

    /**
     * Set rotation for x, y, z axis.
     * @param {Number} x in deg.
     * @param {Number} y in deg.
     * @param {Number} z in deg.
     * @public
     */
    setRotation(x, y, z) {
        let xRad = Math.degToRad(x)
        let yRad = Math.degToRad(y)
        let zRad = Math.degToRad(z)
        this.rotation = [xRad, yRad, zRad]
    }

    /**
    * Set rotation for x, y, z axis.
    * @param {Number} x in deg.
    * @param {Number} y in deg.
    * @param {Number} z in deg.
    * @public
    */
    rotate(x, y, z) {
        let xRad = Math.degToRad(x)
        let yRad = Math.degToRad(y)
        let zRad = Math.degToRad(z)
        this.rotation[0] += xRad
        this.rotation[1] += yRad
        this.rotation[2] += zRad
    }

    /**
     * Updating camera matrix for drawing Skybox
     */
    update() {
        let temp = new Matrixes.Matrix()
        temp.perspective(this.engine.camera.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.engine.camera.range)
        let cameraM = this.engine.camera.inverseRotationMatrix
        temp.multiply(cameraM)
        temp.rotateX(this.rotation[0])
        temp.rotateY(this.rotation[1])
        temp.rotateZ(this.rotation[2])
        this._matrix = Matrixes.inverse(temp.matrix)
    }

    /**
     * Function draws skybox
     */
    draw () {
        this.shaderProgram.use()

        this.engine.webGL.enableVertexAttribArray(this.shaderProgram.positionLocation)
        this.engine.webGL.bindBuffer(this.engine.webGL.ARRAY_BUFFER, this.vertexesBuffer)
        this.engine.webGL.vertexAttribPointer(
            this.shaderProgram.positionLocation, 2, this.engine.webGL.FLOAT, false, 0, 0
        )

        this.engine.webGL.uniform1i(this.shaderProgram.textureLocation, this.texture._textureBlockLocation)
        this.engine.webGL.uniformMatrix4fv(
            this.shaderProgram.matrixLocation, false,
            this._matrix);

        this.engine.webGL.drawArrays(this.engine.webGL.TRIANGLES, 0, this.vertexes.length / 2)
        this.engine.drawCallsPerFrame++
        this.engine.drawCalls++

        this.engine.shaders.default.use()
    }

    animate(fps, animateFunction) {
        this._animationInterval = setInterval(animateFunction, 1000 / fps)
    }
}