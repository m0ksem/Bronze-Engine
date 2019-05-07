import * as Math from "./math/Math"
import * as Matrixes from "./math/Matrixes"

/**
 * Creates camera object.
 * @class
 * @constructor
 */
export class Camera {
    constructor () {

        /**
         * Camera position.
         * @private
         * @type {Array.<{x: Number, y: Number, z: Number}>} vector 3
         */
        this._position = [0, 0, 100]

        this.up = [0, 1, 0]
        this.target = [0, 0, 0]

        /**
         * Field of view for drawing in angles.
         * @readonly
         * @type {Number} angle in degrees
         */
        this.fieldOfView = 90

        /**
         * Field of view in radians.
         * @readonly
         * @type {Number} field of view in radians.
         */
        this.fieldOfViewRad = Math.degToRad(90)

        /**
         * Matrix of camera.
         * @public
         * @type {Array.Array} matrix 4x4
         */
        this.matrix = Matrixes.unit()

        /**
         * Camera rotation.
         * @readonly
         * @type {Array.<{x: Number, y: Number, z: Number}>} vector 3
         */
        this.rotation = [0, 0, 0]

        /**
         * Sets collision for camera.
         * @readonly
         * @type {Array.<{x: Number, y: Number, z: Number}>} vector 3
         */
        this._collisions = false
        this._lookUpMatrix = null

        /**
         * Set range of camera for view.
         * @default 20000
         * @public
         */
        this.range = 20000

        /**
         * Rotation matrix of this camera.
         * @readonly
         */
        this.rotationMatrix = null

        /**
         * Inverse matrix of this camera. Including positions and rotation.
         * @readonly
         */
        this.inverseMatrix = null

        /**
         * Inverse matrix of this camera rotation.
         * @readonly
         */
        this.inverseRotationMatrix

        /**
         * True if camera move
         * @type {boolean}
         * @readonly
         */
        this.moved = false

        /**
         * Array of moving values for camera for frame
         * @type {Number[3]}
         * @public
         */
        this.moving = [0, 0, 0]

        this.collisionBox = 
        {
            x: [0, 0],
            y: [0, 0],
            z: [0, 0]
        }
    }

    /**
     * Sets field of view for camera.
     * @param {Number} angle
     * @public
     */
    setFieldOfView (angle) {
        this.fieldOfView = angle;
        this.fieldOfViewRad = Math.degToRad(angle)
    }

    /**
     * Sets collision.
     * @param {boolean} bool 
     * @public
     */
    setCollisions (bool) {
        this._collisions = bool
    }

    /**
     * Execute when camera have collision with object
     * @param {Object} object 
     */
    onCollision (object) {
        this.position[0] = this.positionBeforeMovement[0]
        this.position[1] = this.positionBeforeMovement[1]
        this.position[2] = this.positionBeforeMovement[2]
    }

    /**
     * Absolutely sets position for camera.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */
    setPosition (x, y, z) {
        this.position = [x, y, z]
    }

    /**
    * Camera position.
    * @public
    * @type {Number[3]}
    */
    get position () {
        return this._position
    }
    /**
    * Camera position.
    * @public
    * @type {Number[3]}
    */
    set position (value) {
        this._position = value
        this.computeMatrix()
    }

    /**
     * Moving camera.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z
     * @public
     */
    move (x, y, z) {
        this.moving[0] += x
        this.moving[1] += y
        this.moving[2] += z
        this.moved = true
    }

    /**
     * Rotate for x, y, z degrees.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z
     * @public
     */
    rotate (x, y, z) {
        this.rotation[0] += x
        this.rotation[1] += y
        this.rotation[2] += z
        this.computeMatrix()
    }

    /**
     * Sets rotation angles
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */
    setRotation (x, y, z) {
        this.rotation = [x, y, z]
        this.computeMatrix()
    }

    /**
     * Compute camera matrix with rotation, positions.
     * @private
     */
    computeMatrix () {
        this.matrix = Matrixes.unit()
        this.matrix = Matrixes.multiply(this.matrix, Matrixes.translation(this.position[0], this.position[1], this.position[2]))
        let rotation = new Matrixes.Matrix()
        rotation.multiply(Matrixes.rotationY(Math.degToRad(this.rotation[1])))
        rotation.multiply(Matrixes.rotationX(Math.degToRad(this.rotation[0])))
        rotation.multiply(Matrixes.rotationZ(Math.degToRad(this.rotation[2])))
        this.matrix = Matrixes.multiply(this.matrix, rotation.matrix)
        if (this._lookUpMatrix != null) {
            this.matrix = Matrixes.multiply(this.matrix, 
            this.lookAt(
                camera._lookUpMatrix,
                [0, 1, 0]
            )
            )
        }
        
        this.rotationMatrix = rotation.matrix
        this.inverseRotationMatrix = Matrixes.inverse(rotation.matrix)
        this.inverseMatrix = Matrixes.inverse(this.matrix)
    }

    /**
     * Sets function to control camera.
     * @param {Function} handler
     * @public
     */
    setControl (handler) {
        this._controlFunction = handler
    }


    setLookUp(x, y, radius) {
        if (x == null) {
            this._lookUpMatrix = null
            return
        }
        this._lookUpMatrix = [x, y, radius]
    }

    /**
     * Sets camera to the coordinates
     * @deprecated
     * @param {*} result 
     */
    lookAt(target, up) {
        if (target != null) {
            var zAxis = normalize(
                subVec3(this.position, target));
            var xAxis = normalize(cross(up, zAxis));
            var yAxis = normalize(cross(zAxis, xAxis));
            
            return [
                xAxis[0], xAxis[1], xAxis[2], 0,
                yAxis[0], yAxis[1], yAxis[2], 0,
                zAxis[0], zAxis[1], zAxis[2], 0,
                this.position[0],
                this.position[1],
                this.position[2],
                1,
            ];
        }
        else {
            return [
                1, 0, 0, 0,
                0, 1, 0, 0,
                0, 0, 1, 0,
                0, 0, 0, 0
            ]
        }
    }
}
