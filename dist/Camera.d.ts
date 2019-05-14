import { Entity, CollisionBox } from "./objects/Entity";
import { Vector3 } from "./math/Vector3";
import { Engine } from "./Engine";
/**
 * Creates camera object.
 * @class
 * @constructor
 */
export default class Camera {
    /**
     * Field of view for drawing in angles.
     */
    fieldOfView: number;
    /**
     * Field of view in radians.
     */
    fieldOfViewRad: number;
    /**
     * Camera rotation.
     * @readonly
     */
    rotation: Vector3;
    /**
     * Set range of camera for view.
     * @default 20000
     */
    range: number;
    /**
     * Matrix of camera.
     */
    matrix: Array<number>;
    /**
     * Rotation matrix of this camera.
     */
    rotationMatrix: Array<number>;
    /**
     * Inverse matrix of this camera.
     */
    inverseMatrix: Array<number>;
    /**
     * Inverse matrix of this camera rotation.
     */
    inverseRotationMatrix: Array<number>;
    /**
     * True if camera move.
     */
    moved: boolean;
    /**
     * Array of moving values for camera for frame.
     */
    moving: Vector3;
    /**
     * Collision box for camera.
     */
    collisionBox: CollisionBox;
    /**
     * True if camera have collisions.
     */
    collisions: boolean;
    readonly engine: Engine;
    private _position;
    constructor(engine: Engine);
    /**
     * Camera position.
     * @public
     * @type
     */
    /**
    * Camera position.
    * @public
    */
    position: Vector3;
    setCubeCollisionBox(size: number): void;
    /**
     * Sets field of view for camera.
     * @param {Number} angle
     * @public
     */
    setFieldOfView(angle: number): void;
    /**
     * Sets collision.
     * @param {boolean} bool
     * @public
     */
    setCollisions(bool: boolean): void;
    /**
     * Execute when camera have collision with object
     * @param {Object} object
     */
    onCollision(object: Entity): void;
    /**
     * Absolutely sets position for camera.
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @public
     */
    setPosition(x: number, y: number, z: number): void;
    /**
     * Move camera.
     */
    move(x: number, y: number, z: number): void;
    /**
     * Rotate for x, y, z degrees.
     */
    rotate(x: number, y: number, z: number): void;
    /**
     * Sets rotation angles
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     */
    setRotation(x: number, y: number, z: number): void;
    /**
     * Compute camera matrix with rotation, positions.
     */
    computeMatrix(): void;
}
export { Camera };
