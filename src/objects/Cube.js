import {Rect} from "./Rect"
import * as Math from "../math/Math"

export class Cube {
    /**
     * Flat rectangle with square texture.
     * @param {Engine} engine 
     */
    constructor (engine) {
        this.faces = [
            new Rect(engine), // front
            new Rect(engine), // right
            new Rect(engine), // back
            new Rect(engine), // left
            new Rect(engine), // top
            new Rect(engine)  // bottom
        ]
        this.position = [0, 0, 0]
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
     * @param {*} x in deg
     * @param {*} y in deg
     * @param {*} z in deg
     */
    rotate(x, y, z) {
        this.rotation[0] += x
        this.rotation[1] += y
        this.rotation[2] += z
        let xrad = Math.degToRad(this.rotation[0])
        let yrad = Math.degToRad(this.rotation[1])
        let zrad = Math.degToRad(this.rotation[2])
        this.faces.forEach(face => {
            face.setParentRotation(xrad, yrad, zrad)
        })
    }

    /**
     * Set rotation for x, y, z axis.
     * @param {*} x in deg
     * @param {*} y in deg
     * @param {*} z in deg
     */
    setRotation(x, y, z) {
        let xrad = Math.degToRad(x)
        let yrad = Math.degToRad(y)
        let zrad = Math.degToRad(z)
        this.faces.forEach(face => {
            face.setParentRotation(xrad, yrad, zrad)
        })
    }

    animation () {
        this.rotate(0, 0, 0)
    }

    /**
     * 
     * @param {Number} fps 
     * @param {Function} [animateFucntion] default - animation function
     */
    animate (fps, animateFucntion) {
        animateFucntion = animateFucntion || this.animation
        setInterval(animateFucntion, 1000 / fps)
    }
}