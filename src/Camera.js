import * as Math from "./math/Math"
import {Matrixes} from "./math/Matrixes"
import {Matrix} from "./math/Matrixes"

export class Camera {
    /**
     * Creates camera object
     */
    constructor () {
        this.position = [0, 0, 100]
        this.up = [0, 1, 0]
        this.target = [0, 0, 0]
        this.fieldOfView = 90
        this.fieldOfViewRad = Math.degToRad(90)
        this.matrix = Matrixes.unit()
        this.position = [0, 0, 0]
        this.rotation = [0, 0, 0]
        this._collisions = false
        this._lookUpMatrix = null
    }

    /**
     * Sets field of view for camera
     * @param {Number} angle 
     */
    setFieldOfView (angle) {
        this.fieldOfView = angle;
        this.fieldOfViewRad = Math.degToRad(angle)
    }

    /**
     * Sets collision
     * @param {*} bool 
     */
    setCollisions (bool) {
        this._collisions = bool
    }

    /**
     * Absolutly sets position for camera
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    setPosition (x, y, z) {
        this.position = [x, y, z]
        this.computeMatrix()
    }

    /**
     * Moving camera
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    move (x, y, z) {
        // let translationMatrix = Matrixes.translation(x, y, z)
        // let matrix = Matrixes.multiply(translationMatrix, this.rotationMatrix)
        // let xt = this.rotationMatrix[0] * x + this.rotationMatrix[1] * y + this.rotationMatrix[2] * z + this.rotationMatrix[3]
        // let yt = y//this.rotationMatrix[4] * x + this.rotationMatrix[5] * y + this.rotationMatrix[6] * z + this.rotationMatrix[7]
        // let zt = this.rotationMatrix[8] * x + this.rotationMatrix[9] * y + this.rotationMatrix[10] * z + this.rotationMatrix[11]
        this.position[0] += x
        this.position[1] += y
        this.position[2] += z
        this.computeMatrix()
    }

    /**
     * Rotate for x, y, z deggres.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    rotate (x, y, z) {
        this.rotation[0] += x
        this.rotation[1] += y
        this.rotation[2] += z
        this.computeMatrix()
    }

    setRotation (x, y, z) {
        this.rotation = [x, y, z]
        this.computeMatrix()
    }

    computeMatrix () {
        this.matrix = Matrixes.unit()
        this.matrix = Matrixes.multiply(this.matrix, Matrixes.translation(this.position[0], this.position[1], this.position[2]))
        let rotation = new Matrix()
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
        this.rotationMatrix = Matrixes.inverse(rotation.matrix)
        this.inserved = Matrixes.inverse(this.matrix)
    }

    /**
     * Sets fuction to control camera.
     * @param {Function} handler 
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
