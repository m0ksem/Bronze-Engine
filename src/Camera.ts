import * as Math from "./math/Mathematics";
import * as Matrixes from "./math/Matrixes4";
import { Entity, CollisionBox } from "./objects/Entity";
import { Vector3 } from "./math/Vector3";
import { Engine } from "./Engine";
import { perspective } from "./math/Matrixes4";

/**
 * Creates camera object.
 * @class
 * @constructor
 */
export class Camera {
  /**
   * Field of view for drawing in angles.
   */
  public fieldOfView: number = 90;
  /**
   * Field of view in radians.
   */
  public fieldOfViewRad: number = Math.degToRad(90);
  /**
   * Camera rotation.
   * @readonly
   */
  public rotation: Vector3 = new Vector3(0, 0, 0);
  /**
   * Set range of camera for view.
   * @default 20000
   */
  public range: number = 20000;

  public perspectiveMatrix: Array<number>;
  /**
   * Matrix of camera.
   */
  public matrix: Array<number> = Matrixes.unit();
  /**
   * Rotation matrix of this camera.
   */
  public rotationMatrix: Array<number> = Matrixes.unit();
  /**
   * Inverse matrix of this camera.
   */
  public inverseMatrix: Array<number> = Matrixes.unit();
  /**
   * Inverse matrix of this camera rotation.
   */
  public inverseRotationMatrix: Array<number> = Matrixes.unit();
  /**
   * True if camera move.
   */
  public moved: boolean = false;
  /**
   * Array of moving values for camera for frame.
   */
  public moving: Vector3 = new Vector3(0, 0, 0);
  /**
   * Vector3 for animated moving.
   */
  public animatedMoving: Vector3 = new Vector3(0, 0, 0);
  /**
   * Collision box for camera.
   */
  public collisionBox: CollisionBox = new CollisionBox();
  /**
   * True if camera have collisions.
   */
  public collisions: boolean = true;

  /**
   * True if collision has occurred.
   */
  public isCollision: boolean = false;

  public engine: Engine;

  private _position: Vector3 = new Vector3(0, 400, 500);

  constructor(engine: Engine) {
    this.engine = engine;
    this.perspectiveMatrix = perspective(this.fieldOfViewRad, engine.width, engine.height, 1, this.range);
  }

  /**
   * Camera position.
   * @public
   * @type
   */
  get position() {
    return this._position;
  }
  /**
   * Camera position.
   * @public
   */
  set position(value) {
    this._position = value;
    this.computeMatrix();
  }

  setCubeCollisionBox(size: number) {
    let halfSize = size / 2;
    this.collisionBox.minPoint.x = -halfSize;
    this.collisionBox.minPoint.y = -halfSize;
    this.collisionBox.minPoint.z = -halfSize;
    this.collisionBox.maxPoint.x = halfSize;
    this.collisionBox.maxPoint.y = halfSize;
    this.collisionBox.maxPoint.z = halfSize;
  }

  /**
   * Sets field of view for camera.
   * @param {Number} angle
   * @public
   */
  setFieldOfView(angle: number) {
    this.fieldOfView = angle;
    this.fieldOfViewRad = Math.degToRad(angle);
  }

  /**
   * Sets collision.
   * @param {boolean} bool
   * @public
   */
  setCollisions(bool: boolean) {
    this.collisions = bool;
  }

  /**
   * Execute when camera have collision with object
   * @param {Object} object
   */
  onCollision(object: Entity) {
    this.moving.x = 0;
    this.moving.y = 0;
    this.moving.z = 0;
    this.isCollision = true;
  }

  /**
   * Absolutely sets position for camera.
   * @param {Number} x
   * @param {Number} y
   * @param {Number} z
   * @public
   */
  public setPosition(x: number, y: number, z: number) {
    this.position.set(x, y, z);
  }

  /**
   * Move camera.
   */
  public move(x: number, y: number, z: number) {
    this.moving.move(x, y, z);
    this.moved = true;
  }

  /**
   * Smooth moving camera.
   * @param x
   * @param y
   * @param z
   */
  public moveAnimate(x: number, y: number, z: number, time: number = 100) {
    x = x / time;
    y = y / time;
    z = z / time;
    let vec = new Vector3(x, y, z);
    this.animatedMoving.add(vec);
    let t = time;
    let tick = this.engine.addOnFrameHandler(() => {
      t -= 1;
      if (t <= 0) {
        this.engine.removeOnFrameHandler(tick);
        this.animatedMoving.sub(vec);
      }
    });
  }

  /**
   * Rotate for x, y, z degrees.
   */
  public rotate(x: number, y: number, z: number) {
    this.rotation.x += x;
    this.rotation.y += y;
    this.rotation.z += z;
    this.computeMatrix();
  }

  /**
   * Sets rotation angles
   * @param {Number} x
   * @param {Number} y
   * @param {Number} z
   */
  public setRotation(x: number, y: number, z: number): void {
    this.rotation.set(x, y, z);
    this.computeMatrix();
  }

  /**
   * Compute camera matrix with rotation, positions.
   */
  public computeMatrix(): void {
    this.matrix = Matrixes.translation(this.position.x, this.position.y, this.position.z);
    let rotation = Matrixes.rotationY(Math.degToRad(this.rotation.y));
    rotation = Matrixes.multiply(rotation, Matrixes.rotationX(Math.degToRad(this.rotation.x)));
    rotation = Matrixes.multiply(rotation, Matrixes.rotationZ(Math.degToRad(this.rotation.z)));
    this.matrix = Matrixes.multiply(this.matrix, rotation);

    this.rotationMatrix = rotation;
    this.inverseRotationMatrix = Matrixes.inverse(rotation);
    this.inverseMatrix = Matrixes.inverse(this.matrix);
    this.perspectiveMatrix = perspective(this.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.range);
  }
}

export default Camera;
