import {Polygon} from "./Polygon"
import * as Math from "../math/Math"

/**
 * Rect object created from polygons.
 * @param {Engine} engine
 * @class
 * @constructor
 */
export class Rect {
    /**
     * Flat rectangle with square texture.
     * @param {Engine} engine 
     */
    constructor (engine) {
        /**
         * Rect polygons.
         * @private
         * @type {Array.{0: Polygon, 1: Polygon}} vector 3
         */
        this.polygons = new Array(2)

        /**
         * Rect position.
         * @readonly
         * @type {Array.{0: Number, 1: Number, 2: Number}} vector 3
         */
        this.position = [0, 0, 0]

        /**
         * Rect rotation point.
         * @readonly
         * @type {Array.{0: Number, 1: Number, 2: Number}} vector 3
         */
        this.rotationPoint = [0, 0, 0]

        let p = new Polygon(engine)
            p.setVertexes([
                0,   0,   0,
                100, 100, 0,
                0,   100, 0,
            ])
            p.setTextureCoords([
                0, 1,
                1, 0,
                0, 0,
            ])
        this.polygons[0] = p
            p = new Polygon(engine)
            p.setVertexes([
                100, 100, 0,
                0,   0,   0,
                100, 0,   0
            ])
            p.setTextureCoords([
                1, 0,
                0, 1,
                1, 1,
            ])
        this.polygons[1] = p
        this.setNormals([
            0, 0, 1,
            0, 0, 1,
            0, 0, 1,
        ])
    }

    /**
     * Setting square texture for rect.
     * @param {Texture} texture
     * @public
     */
    setTexture (texture) {
        this.polygons[0].setTexture(texture)
        this.polygons[1].setTexture(texture)
    }

    /**
     * Changing size of rect.
     * @param {Number} width
     * @param {Number} height
     * @public
     */
    setSize (width, height) {
        this.width = width
        this.height = height
        this.polygons[0].setVertexes([
            0,     0,      0,
            width, height, 0,
            0,     height, 0,
            
        ])
        this.polygons[1].setVertexes([
            width, height, 0,
            0,     0,      0,
            width, 0,      0
        ])
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
        this.polygons[0].setPosition(x, y, z)
        this.polygons[1].setPosition(x, y, z)
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
        this.polygons[0].rotate(xRad, yRad, zRad)
        this.polygons[1].rotate(xRad, yRad, zRad)
    }

    /**
     * Setting rotation of parent object in radians.
     * @param {Number} x parent rotation of x axis in radians.
     * @param {Number} y parent rotation of y axis in radians.
     * @param {Number} z parent rotation of z axis in radians.
     * @public
     */
    setParentRotation (x, y, z) {
        this.polygons[0].setParentRotation(x, y, z)
        this.polygons[1].setParentRotation(x, y, z)
    }

    /**
     * Sets rotation point coordinates.
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @public
     */
    setRotationPoint (x, y, z) {
        this.polygons[0].setRotationPoint(x, y, z)
        this.polygons[1].setRotationPoint(x, y, z)
    }

    /**
     * Set normals vector.
     * @param {Array} normals 3:3 array. Every 3 elements is a vector of normal.
     * @public
     */
    setNormals (normals) {
        this.polygons[0].setNormals(normals)
        this.polygons[1].setNormals(normals)
    }

    /**
     * Sets whether the all polygons will be attached to the camera like UI element.
     * @param {bolean} bool 
     */
    setAsUIElement (bool) {
        this.polygons[0].UIElement = bool
        this.polygons[1].UIElement = bool
    }
}
