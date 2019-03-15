/**
 * Triangle polygon.
 * @param {Engine} core Engine object to which the polygon will be attached.
 * @class
 * @constructor
 */
export class Polygon {
    constructor (engine) {
        if (engine) {
            engine.polygons.push(this)
        }
        this.webGL = engine.webGL
        
        /**
         * Texture of polygon
         * @type {Texture}
         * @readonly
         */
        this.texture = null

        /**
         * Vertexes of polygon.
         * @type {Array}
         * @readonly
         */
        this.vertexes = []

        /**
         * Polygon position.
         * @public
         * @type {Array.{0: Number, 1: Number, 2: Number}} vector 3
         */
        this.position = [0, 0, 0]

        /**
         * Polygon rotation.
         * @public
         * @type {Array.{0: Number, 1: Number, 2: Number}} vector 3
         */
        this.rotation = [0, 0, 0]

        /**
         * Polygon scaling.
         * @readonly
         * @type {Array.{0: Number, 1: Number, 2: Number}} vector 3
         */
        this.scaling = [1, 1, 1]

        /**
         * Polygon rotation point.
         * @public
         * @type {Array.{0: Number, 1: Number, 2: Number}} vector 3
         */
        this.rotationPoint = [0, 0, 0]

         /**
         * Polygon parent rotation.
         * @public
         * @type {Array.{0: Number, 1: Number, 2: Number}} vector 3
         */
        this.parentRotation = [0, 0, 0]

         /**
         * Polygon normals.
         * @public
         * @type {Array.{0: Number, 1: Number, 2: Number,
         *                3: Number, 4: Number, 5: Number,
         *                6: Number, 7: Number, 8: Number,}} matrix 9
         */
        this.normals = [
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
        ]

        /**
         * WebGL texture buffer.
         * @private
         */
        this._vertexesBuffer = null

        /**
         * Sets whether the object will be attached to the camera like UI element.
         * @type {boolean}
         * @public
         */
        this.UIElement = false
    }

    /**
     * Setting texture for polygon.
     * @param {Texture} texture 
     * @public
     */
    setTexture (texture) {
        this.texture = texture
    }

    /**
     * Setting texture coords.
     * @param {Array} coords array of coords of texture.
     * @public
     */
    setTextureCoords (coords) {
        this.textureCoords = coords
        this._coordsBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._coordsBuffer)
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.textureCoords), this.webGL.STATIC_DRAW)
    }

    /**
     * Setting vertexes array.
     * @param {Array[Number]} vertexes
     * @public
     */
    setVertexes (vertexes) {
        this.vertexes = vertexes
        this._vertexesBuffer = this.webGL.createBuffer()
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._vertexesBuffer)
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webGL.STATIC_DRAW);
    }

    /**
     * Translate polygon for x,y,z pixels.
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */
    setPosition (x, y, z) {
        this.position[0] = x
        this.position[1] = y
        this.position[2] = z
    }

    /**
     * Scaling polygon for x,y,z percent.
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */
    scale (x, y, z) {
        this.scaling[0] = x
        this.scaling[1] = y
        this.scaling[2] = z
    }

    /**
     * Add rotation for x, y, z axis for current rotation.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */
    rotate (x, y, z) {
        this.rotation[0] += x
        this.rotation[1] += y
        this.rotation[2] += z
    }

    /**
     * Set rotate for x, y, z axis.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */
    setRotation (x, y, z) {
        this.rotation[0] = x
        this.rotation[1] = y
        this.rotation[2] = z
    }

    /**
     * Setting coordinates for rotation point.
     * @param {Number} x
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */
    setRotationPoint (x, y, z) {
        this.rotationPoint = [x, y, z]
    }

    /**
     * Setting rotation values of parent object.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */
    setParentRotation (x, y, z) {
        this.parentRotation = [x, y, z]
    }

    /**
     * Update function. Can be overloaded for creation animation or smth else.
     */
    update () {
        
    }

    /**
     * Set normals for this polygon.
     * @param {array} normals 3 normals vector. 
     * @public
     */
    setNormals (normals) {
        this.normals = normals
        this._normalBuffer = this.webGL.createBuffer();
            this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._normalBuffer);
            this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.normals), this.webGL.STATIC_DRAW);
    }
}
