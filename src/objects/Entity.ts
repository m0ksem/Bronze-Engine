import { Engine } from "../Engine";
import { Camera } from "../Camera";
import { Texture } from "../textures/Texture";
import { SimpleTexture } from "../textures/SimpleTexture";
import { Vector3 } from "../math/Vector3";
import { BronzeError } from "../debug/Error";
import ShaderProgram from "../webgl/ShaderProgram";
import { degToRad } from "../math/Mathematics";
import {
  translation,
  rotation,
  scaling,
  perspective,
  projection,
  multiply,
  inverse,
  transformVector,
  unit
} from "../math/Matrixes4";

export default abstract class Entity {
  public name: string = "Just entity :)";
  public loaded: boolean = false;
  public verticalAlign: boolean = true;
  public vertexes: number[] = [];
  public textureCoordinates: number[] = [];
  public normals: number[] = [];
  public vertexesBuffer: WebGLBuffer | null = null;
  public textureCoordinatesBuffer: WebGLBuffer | null = null;
  public normalsBuffer: WebGLBuffer | null = null;
  public matrix: number[] = unit();
  public rotationMatrix: number[] = unit();
  public worldMatrix: number[] = unit();
  public texture: Texture;
  public rotationInDeg: Vector3 = new Vector3(0, 0, 0);
  public rotation: Vector3 = new Vector3(0, 0, 0);
  public rotationSelf: Vector3 = new Vector3(0, 0, 0);
  public rotationPoint: Vector3 = new Vector3(0, 0, 0);
  public scaling: Vector3 = new Vector3(1, 1, 1);

  protected _engine: Engine;
  protected webgl: WebGLRenderingContext;
  protected camera: Camera | null;
  protected maxSize: Vector3 = new Vector3(0, 0, 0);
  protected minSize: Vector3 = new Vector3(0, 0, 0);
  protected maxBaseSize: Vector3 = new Vector3(0, 0, 0);
  protected minBaseSize: Vector3 = new Vector3(0, 0, 0);
  protected hidden: boolean = false;
  protected rotationPointPos: string | null = null;
  protected shaderProgram: ShaderProgram;
  protected _collisionBox = new CollisionBox();
  protected _UIElement: boolean = false;

  private _animationInterval: any;
  private _position: Vector3 = new Vector3(0, 0, 0);
  
  constructor(engine: Engine) {
    this._engine = engine;
    this.webgl = engine.webgl;
    this.camera = engine.camera;
    this.texture = this._engine.noTexture;
    this.shaderProgram = engine.shaders.default;

    engine.addObject(this);
  }

  public get engine(): Engine {
    return this._engine;
  }

  public get position(): Vector3 {
    return this._position;
  }
  public set position(v: Vector3) {
    this._position = v;
    if (!this._UIElement) {
      this._position = v;
    } else {
      this._position.set(
        (this.engine.width / 100) * v.x,
        (-this.engine.height / 100) * v.y,
        v.z
      );
    }
  }

  public set UIElement(v: boolean) {
    this._UIElement = v;
    if (this.engine.ui != null) {
      if (v) {
        this.engine.ui.addObject(this);
      } else {
        this.engine.ui.removeObject(this);
      }
    } else {
      new BronzeError("UI not set for engine.");
    }
  }
  public get UIElement(): boolean {
    return this._UIElement;
  }

  public get collisionBox(): CollisionBox {
    if (!this._collisionBox) {
      throw new BronzeError("Collision box is null");
    }
    return this._collisionBox;
  }

  public get size(): {
    base: {
      max: Vector3;
      min: Vector3;
    };
    current: {
      max: Vector3;
      min: Vector3;
    }
  } 
  {
    return {
      base: {
        max: this.maxBaseSize,
        min: this.minBaseSize
      },
      current: {
        max: this.maxSize,
        min: this.minSize
      }
    };
  }

  /**
   * Sets position for object. Using another vector.
   */
  public setPosition(vector: Vector3): void;
  /**
   * Sets position for object. Using array of coordinates.
   */
  public setPosition(array: number[]): void;
  /**
   * Sets position for object. Using coordinates.
   */
  public setPosition(x: number, y: number, z: number): void;

  public setPosition(value: any, y?: number, z?: number): void {
    if (value.constructor === Vector3) {
      this.position = value;
    } else if (value.constructor === Array) {
      this.position.set(value[0], value[1], value[2]);
    } else {
      this.position.set(value, y!, z!);
    }
  }

  public move(x: number, y: number, z: number): void {
    this._position.move(x, y, z);
  }

  public moveRelativeToTheCamera(x: number, y: number, z: number): void {
    let position = [x, y, z, 1];
    position = transformVector(this.matrix, position);
    this.position.moveArray(position);
  }

  /**
   * Set rotation for x, y, z axis.
   * @param x in deg.
   * @param y in deg.
   * @param z in deg.
   * @public
   */
  public setRotation(x: number, y: number, z: number): void {
    let xRad = degToRad(x);
    let yRad = degToRad(y);
    let zRad = degToRad(z);
    this.rotationInDeg.set(x, y, z);
    this.rotation.set(xRad, yRad, zRad);
  }

  public rotate(x: number, y: number, z: number): void {
    let xRad = degToRad(x);
    let yRad = degToRad(y);
    let zRad = degToRad(z);
    this.rotationInDeg.move(x, y, z);
    this.rotation.move(xRad, yRad, zRad);
  }

  public rotateSelf(x: number, y: number, z: number): void {
    let xRad = degToRad(x);
    let yRad = degToRad(y);
    let zRad = degToRad(z);
    this.rotationInDeg.move(x, y, z);
    this.rotationSelf.move(xRad, yRad, zRad);
  }

  /**
   * Set rotation point directly using coordinates.
   * @param x
   * @param y
   * @param z
   */
  public setRotationPoint(x: number, y: number, z: number): void;

  /**
   *
   * @param {('bottomLeft'|'center'|'bottomRight')} point
   */
  public setRotationPoint(point: String): void;

  public setRotationPoint(x: any, y?: number, z?: number): void {
    if (x.constructor === String) {
      switch (x) {
        case "center":
          this.rotationPoint.set(0, 0, 0);
          this.rotationPoint.set(0, 0, 0);
          this.rotationPoint.set(0, 0, 0);
          this.rotationPointPos = "center";
          break;
        default:
          new BronzeError("Wrong point type");
      }
    } else {
      this.rotationPoint.set(x!, y!, z!);
    }
  }

  /**
   * Scale object.
   * @param x
   * @param y
   * @param z
   */
  public scale(x: number, y: number, z: number) {
    this.scaling.set(x, y, z);
    this.maxSize.set(
      this.maxBaseSize.x * x,
      this.maxBaseSize.y * y,
      this.maxBaseSize.z * z
    );
    this.minSize.set(
      this.minBaseSize.x * x,
      this.minBaseSize.y * y,
      this.minBaseSize.z * z
    );
  }

  /**
   * Resize objects to pixels
   * @param x pixels
   * @param y pixels
   * @param z pixels
   */
  public resize(x: number, y: number, z: number) {
    x = x / this.maxBaseSize.x;
    y = y / this.maxBaseSize.y;
    z = z / this.maxBaseSize.z;
    this.scaling.set(x, y, z);
    this.maxSize.set(
      this.maxBaseSize.x * x,
      this.maxBaseSize.y * y,
      this.maxBaseSize.z * z
    );
    this.minSize.set(
      this.minBaseSize.x * x,
      this.minBaseSize.y * y,
      this.minBaseSize.z * z
    );
  }

  public setTexture(texture: Texture) {
    this.texture = texture;
  }

  public checkCollision(
    position: Vector3,
    moving: Vector3,
    movingObjectCollisionBox: CollisionBox,
    callback: Function
  ) {}

  public useShader(shader: ShaderProgram) {
    this.shaderProgram = shader;
  }

  public updateMatrixes() {
    let world = inverse(
      translation(
        this.rotationPoint.x,
        this.rotationPoint.y,
        this.rotationPoint.z
      )
    );
    world = multiply(
      world,
      translation(this._position.x, this._position.y, this._position.z)
    );
    if (!this.verticalAlign) {
      world = multiply(
        world,
        translation(0, -(this.maxSize.y - this.minSize.y) / 2, 0)
      );
    }
    let rot = rotation(this.rotation.x, this.rotation.y, this.rotation.z);
    world = multiply(world, rot);
    world = multiply(
      world,
      translation(
        this.rotationPoint.x,
        this.rotationPoint.y,
        this.rotationPoint.z
      )
    );
    world = multiply(
      world,
      translation(
        -this.minSize.x - (this.maxSize.x - this.minSize.x) / 2,
        -this.minSize.y - (this.maxSize.y - this.minSize.y) / 2,
        -this.minSize.z - (this.maxSize.z - this.minSize.z) / 2
      )
    );
    world = multiply(
      world,
      scaling(this.scaling.x, this.scaling.y, this.scaling.z)
    );

    this.worldMatrix = world;
    this.rotationMatrix = rot;
  }

  public update() {
    if (!this.hidden) {
      let matrix;
      if (!this.UIElement) {
        matrix = perspective(
          this.engine.camera!.fieldOfViewRad,
          this.engine.width,
          this.engine.height,
          1,
          this.engine.camera!.range
        );
        matrix = multiply(matrix, this.engine.camera!.inverseMatrix);
      } else {
        matrix = projection(
          this.engine.camera!.fieldOfViewRad,
          this.engine.width
        );
      }

      matrix = multiply(matrix, this.worldMatrix);

      this.matrix = matrix;
    }
  }

  public draw() {
    if (!this.hidden) {
      this.shaderProgram.use();
      this.engine.webgl.enableVertexAttribArray(
        this.shaderProgram.positionLocation
      );
      this.engine.webgl.bindBuffer(
        this.engine.webgl.ARRAY_BUFFER,
        this.vertexesBuffer
      );
      this.engine.webgl.vertexAttribPointer(
        this.shaderProgram.positionLocation,
        3,
        this.engine.webgl.FLOAT,
        false,
        0,
        0
      );

      this.engine.webgl.enableVertexAttribArray(
        this.shaderProgram.texcoordLocation
      );
      this.engine.webgl.bindBuffer(
        this.engine.webgl.ARRAY_BUFFER,
        this.textureCoordinatesBuffer
      );
      this.engine.webgl.vertexAttribPointer(
        this.shaderProgram.texcoordLocation,
        2,
        this.engine.webgl.FLOAT,
        false,
        0,
        0
      );

      this.engine.webgl.enableVertexAttribArray(
        this.shaderProgram.normalLocation
      );
      this.engine.webgl.bindBuffer(
        this.engine.webgl.ARRAY_BUFFER,
        this.normalsBuffer
      );
      this.engine.webgl.vertexAttribPointer(
        this.shaderProgram.normalLocation,
        3,
        this.engine.webgl.FLOAT,
        false,
        0,
        0
      );

      this.engine.webgl.uniform1i(
        this.shaderProgram.textureLocation,
        this.texture.textureBlockLocation
      );
      this.engine.webgl.uniformMatrix4fv(
        this.shaderProgram.matrixLocation,
        false,
        this.matrix
      );
      this.engine.webgl.uniformMatrix4fv(
        this.shaderProgram.objectRotationLocation,
        false,
        this.rotationMatrix
      );
      this.engine.webgl.uniformMatrix4fv(
        this.shaderProgram.worldMatrixLocation,
        false,
        this.worldMatrix
      );

      this.engine.webgl.drawArrays(
        this.engine.webgl.TRIANGLES,
        0,
        this.vertexes.length / 3
      );
    }
  }

  public animate(fps: number, animateFunction: (object: Entity) => void) {
    animateFunction = animateFunction;
    this._animationInterval = setInterval(() => {
      animateFunction(this);
    }, 1000 / fps);
    return this._animationInterval;
  }

  /**
   * Deletes this object from engine.
   */
  public destroy() {
    this.engine.objects.splice(this.engine.objects.indexOf(this), 1);
  }
}

class CollisionBox {
  public maxPoint: Vector3 = new Vector3(0, 0, 0);
  public minPoint: Vector3 = new Vector3(0, 0, 0);
}

export { Entity, CollisionBox };
