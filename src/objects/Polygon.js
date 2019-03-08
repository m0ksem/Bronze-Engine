export class Polygon {
    /**
     * Triangle polygon.
     * @param {Engine} core Engine object to which the polygon will be attached.
     */
    constructor (engine) {
        if (engine) {
            engine.polygons.push(this)
        }
        this.webGL = engine.webGL
        this.points = []
        this.texture = null
        this.vertexes = []
        this.position = [0, 0, 0]
        this.rotation = [0, 0, 0]
        this.rotationPoint = [0, 0, 0]
        this.parentRotation = [0, 0, 0]
        this.normals = [
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
        ]
        this._vertexesBuffer = null
    }

    /**
     * Setting texture for polygon.
     * @param {Texture} texture 
     */
    setTexture (texture) {
        this.texture = texture
    }

    /**
     * Setting texture coords.
     * @param {Array} coords array of coords of texture.
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
     */
    setPosition (x, y, z) {
        this.position[0] = x
        this.position[1] = y
        this.position[2] = z
    }

    /**
     * Add rotation for x, y, z axis for current rotation.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
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
     */
    setRotationPoint (x, y, z) {
        this.rotationPoint = [x, y, z]
    }

    /**
     * Setting rotation values of parent object.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
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
     */
    setNormals (normals) {
        this.normals = normals
        this._normalBuffer = this.webGL.createBuffer();
            this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._normalBuffer);
            this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.normals), this.webGL.STATIC_DRAW);
    }
}
