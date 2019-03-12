import {Rect} from "./Rect"
import * as Math from "../math/Math"

/**
 * Cube object created from polygons.
 * @param {Engine} engine
 * @class
 * @constructor
 */
export class Cube {
    constructor (engine) {
        /**
         * Faces of cube
         * @private
         * @type {Array.<{Rect}>}
         */
        this.faces = [
            new Rect(engine), // front
            new Rect(engine), // right
            new Rect(engine), // back
            new Rect(engine), // left
            new Rect(engine), // top
            new Rect(engine)  // bottom
        ]

        /**
         * Cube position.
         * @readonly
         * @type {Array.<{x: Number, y: Number, z: Number}>} vector 3
         */
        this.position = [0, 0, 0]

        /**
         * Cube rotation.
         * @readonly
         * @type {Array.<{x: Number, y: Number, z: Number}>} vector 3
         */
        this.rotation = [0, 0, 0]

        this.faces[0].rotate(0, 0, 0)
        this.faces[0].setRotationPoint(-100, -100, 100)
        this.faces[0].setPosition(0, 0, 0)
        this.faces[0].setNormals([
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
        ])
        
        this.faces[1].rotate(0, 90, 0)
        this.faces[1].setRotationPoint(-100, -100, 100)
        this.faces[1].position = [0, 0, 0]
        this.faces[1].setNormals([
            1, 0, 0,
            1, 0, 0,
            1, 0, 0,
        ])

        this.faces[2].rotate(0, -180, 0)
        this.faces[2].setRotationPoint(-100, -100, 100)
        this.faces[2].position = [0, 0, 0]
        this.faces[2].setNormals([
            0, 0, -1,
            0, 0, -1,
            0, 0, -1,
        ])

        this.faces[3].rotate(0, 270, 0)
        this.faces[3].setRotationPoint(-100, -100, 100)
        this.faces[3].position = [0, 0, 0]
        this.faces[3].setNormals([
            -1, 0, 0,
            -1, 0, 0,
            -1, 0, 0,
        ])

        this.faces[4].rotate(-90, 0, 0)
        this.faces[4].setRotationPoint(-100, -100, 100)
        this.faces[4].position = [0, 0, 0]
        this.faces[4].setNormals([
            0, 1, 0,
            0, 1, 0,
            0, 1, 0,
        ])

        this.faces[5].rotate(90, 0, 0)
        this.faces[5].setRotationPoint(-100, -100, 100)
        this.faces[5].position = [0, 0, 0]
        this.faces[5].setNormals([
            0, -1, 0,
            0, -1, 0,
            0, -1, 0,
        ])
    }

    /**
     * Method updating faces.
     * @private
     */
    _updateFaces () {
        this.faces[0].setPosition(this.position[0], this.position[1], this.position[2])
    }

    /**
     * Setting square texture for cube.
     * @param {Texture} front texture.
     * @param {Texture} right texture.
     * @param {Texture} back texture.
     * @param {Texture} left texture.
     * @param {Texture} top texture.
     * @param {Texture} bottom texture.
     * @public
     */
    setTexture (front, right, back, left, top, bottom) {
        this.faces[0].setTexture(front)
        this.faces[1].setTexture(right)
        this.faces[2].setTexture(back)
        this.faces[3].setTexture(left)
        this.faces[4].setTexture(top)
        this.faces[5].setTexture(bottom)
    }

    /**
     * Changing size of rect
     * @param {Number} width
     * @param {Number} height
     * @public
     */
    setSize (width, height, depth) {
        this.width = width
        this.height = height
        this.depth = depth
        this.faces.forEach(face => {
            face.setSize(width, height)
            face.setRotationPoint(-width / 2, -height / 2, depth / 2)
        });
    }

    /**
     * Change position of all polygons in rect.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */
    setPosition(x, y, z) {
        this.position = [x, y, z]
        this.faces[0].setPosition(x, y, z)
        this.faces[1].setPosition(x, y, z)
        this.faces[2].setPosition(x, y, z)
        this.faces[3].setPosition(x, y, z)
        this.faces[4].setPosition(x, y, z)
        this.faces[5].setPosition(x, y, z)
    }

    /**
     * Set rotation for x, y, z axis.
     * @param {*} x in degrees.
     * @param {*} y in degrees.
     * @param {*} z in degrees.
     * @public
     */
    rotate(x, y, z) {
        this.rotation[0] += x
        this.rotation[1] += y
        this.rotation[2] += z
        let xRad = Math.degToRad(this.rotation[0])
        let yRad = Math.degToRad(this.rotation[1])
        let zRad = Math.degToRad(this.rotation[2])
        this.faces.forEach(face => {
            face.setParentRotation(xRad, yRad, zRad)
        })
    }

    /**
     * Set rotation for x, y, z axis.
     * @param {*} x in degrees.
     * @param {*} y in degrees.
     * @param {*} z in degrees.
     * @public
     */
    setRotation(x, y, z) {
        let xRad = Math.degToRad(x)
        let yRad = Math.degToRad(y)
        let zRad = Math.degToRad(z)
        this.faces.forEach(face => {
            face.setParentRotation(xRad, yRad, zRad)
        })
    }

    /**
     * Default animation function
     * @private
     */
    animation () {
        this.rotate(1, 1, 1)
    }

    /**
     * Setting the animation function which execute every engine update.
     * @param {Number} [fps = 60] default - 60. Frame per second for this animation.
     * @param {Function} [animateFunction] default - animation function.
     * @public
     */
    animate (fps, animateFunction) {
        animateFunction = animateFunction || this.animation
        this._animationInterval = setInterval(animateFunction, 1000 / fps)
    }

    /**
     * Removes animation.
     * @public
     */
    removeAnimation () {
        clearInterval(this._animationInterval)
    }

    /**
     * Sets whether the all polygons will be attached to the camera like UI element.
     * @deprecated
     * @param {bolean} bool 
     */
    setAsUIElement (bool) {
        this.faces[0].setAsUIElement(bool)
        this.faces[1].setAsUIElement(bool)
        this.faces[2].setAsUIElement(bool)
        this.faces[3].setAsUIElement(bool)
        this.faces[4].setAsUIElement(bool)
        this.faces[5].setAsUIElement(bool)
    }
}
