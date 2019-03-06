import {Polygon} from "./Polygon"
import * as Math from "../math/Math"

export class Rect {
    /**
     * Flat rectangle with square texture.
     * @param {Engine} engine 
     */
    constructor (engine) {
        this.polygons = new Array(2)
        this.position = [0, 0, 0]
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
     * Setting square texture for rect
     * @param {Texture} texture
     */
    setTexture (texture) {
        this.polygons[0].setTexture(texture)
        this.polygons[1].setTexture(texture)
    }

    /**
     * Changing size of rect
     * @param {Number} width
     * @param {Number} height
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
     */
    setPosition(x, y, z) {
        this.position = [x, y, z]
        this.polygons[0].setPosition(x, y, z)
        this.polygons[1].setPosition(x, y, z)
    }

    /**
     * Set rotation for x, y, z axis.
     * @param {*} x in deg
     * @param {*} y in deg
     * @param {*} z in deg
     */
    rotate(x, y, z) {
        let xrad = Math.degToRad(x)
        let yrad = Math.degToRad(y)
        let zrad = Math.degToRad(z)
        this.polygons[0].rotate(xrad, yrad, zrad)
        this.polygons[1].rotate(xrad, yrad, zrad)
    }

    /**
     * Seting rotation of parent object in radians
     * @param {Number} x parent rotation of x axis in radians
     * @param {Number} y parent rotation of y axis in radians
     * @param {Number} z parent rotation of z axis in radians
     */
    setParentRotation (x, y, z) {
        this.polygons[0].setParentRotation(x, y, z)
        this.polygons[1].setParentRotation(x, y, z)
    }

    /**
     * Sets rotation point coordinats
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */
    setRotationPoint (x, y, z) {
        this.polygons[0].setRotationPoint(x, y, z)
        this.polygons[1].setRotationPoint(x, y, z)
    }

    /**
     * Set normals vector
     * @param {Array} normals 3:3 array. Every 3 elements is a vector of normal 
     */
    setNormals (normals) {
        this.polygons[0].setNormals(normals)
        this.polygons[1].setNormals(normals)
    }
}
