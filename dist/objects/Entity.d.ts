import { Engine } from "../Engine";
import { Camera } from "../Camera";
import { Texture } from "../textures/Texture";
import { Vector3 } from "../math/Vector3";
import ShaderProgram from "../webgl/ShaderProgram";
export default abstract class Entity {
    name: string;
    loaded: boolean;
    verticalAlign: boolean;
    vertexes: number[];
    textureCoordinates: number[];
    normals: number[];
    vertexesBuffer: WebGLBuffer | null;
    textureCoordinatesBuffer: WebGLBuffer | null;
    normalsBuffer: WebGLBuffer | null;
    matrix: number[];
    rotationMatrix: number[];
    worldMatrix: number[];
    texture: Texture;
    rotationInDeg: Vector3;
    rotation: Vector3;
    rotationSelf: Vector3;
    rotationPoint: Vector3;
    scaling: Vector3;
    protected _engine: Engine;
    protected webgl: WebGLRenderingContext;
    protected camera: Camera | null;
    protected maxSize: Vector3;
    protected minSize: Vector3;
    protected maxBaseSize: Vector3;
    protected minBaseSize: Vector3;
    protected hidden: boolean;
    protected rotationPointPos: string | null;
    protected shaderProgram: ShaderProgram;
    protected _collisionBox: CollisionBox;
    protected _UIElement: boolean;
    private _animationInterval;
    private _position;
    constructor(engine: Engine);
    readonly engine: Engine;
    position: Vector3;
    UIElement: boolean;
    readonly collisionBox: CollisionBox;
    readonly size: {
        base: {
            max: Vector3;
            min: Vector3;
        };
        current: {
            max: Vector3;
            min: Vector3;
        };
    };
    /**
     * Sets position for object. Using another vector.
     */
    setPosition(vector: Vector3): void;
    /**
     * Sets position for object. Using array of coordinates.
     */
    setPosition(array: number[]): void;
    /**
     * Sets position for object. Using coordinates.
     */
    setPosition(x: number, y: number, z: number): void;
    move(x: number, y: number, z: number): void;
    moveRelativeToTheCamera(x: number, y: number, z: number): void;
    /**
     * Set rotation for x, y, z axis.
     * @param x in deg.
     * @param y in deg.
     * @param z in deg.
     * @public
     */
    setRotation(x: number, y: number, z: number): void;
    rotate(x: number, y: number, z: number): void;
    rotateSelf(x: number, y: number, z: number): void;
    /**
     * Set rotation point directly using coordinates.
     * @param x
     * @param y
     * @param z
     */
    setRotationPoint(x: number, y: number, z: number): void;
    /**
     *
     * @param {('bottomLeft'|'center'|'bottomRight')} point
     */
    setRotationPoint(point: String): void;
    /**
     * Scale object.
     * @param x
     * @param y
     * @param z
     */
    scale(x: number, y: number, z: number): void;
    /**
     * Resize objects to pixels
     * @param x pixels
     * @param y pixels
     * @param z pixels
     */
    resize(x: number, y: number, z: number): void;
    setTexture(texture: Texture): void;
    checkCollision(position: Vector3, moving: Vector3, movingObjectCollisionBox: CollisionBox, callback: Function): void;
    useShader(shader: ShaderProgram): void;
    updateMatrixes(): void;
    update(): void;
    draw(): void;
    animate(fps: number, animateFunction: (object: Entity) => void): any;
    /**
     * Deletes this object from engine.
     */
    destroy(): void;
}
declare class CollisionBox {
    maxPoint: Vector3;
    minPoint: Vector3;
}
export { Entity, CollisionBox };
