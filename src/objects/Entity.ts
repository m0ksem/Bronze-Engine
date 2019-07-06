import { Engine } from "../Engine";
import { Camera } from "../Camera";
import { Texture } from "../textures/Texture";
import { Vector3 } from "../math/Vector3";
import { angleBetweenVectors } from "../math/Vector2";
import { BronzeError } from "../debug/Error";
import ShaderProgram from "../webgl/ShaderProgram";
import { degToRad } from "../math/Mathematics";
import { translation, rotation, scaling, perspective, multiply, transformVector, unit, rotationY, rotationZ, inverse } from "../math/Matrixes4";

export abstract class Entity {
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
  public uiMatrix: number[] | null = null;
  public texture: Texture;
  public rotationInDeg: Vector3 = new Vector3(0, 0, 0);
  public rotation: Vector3 = new Vector3(0, 0, 0);
  public rotationSelf: Vector3 = new Vector3(0, 0, 0);
  public rotationPoint: Vector3 = new Vector3(0, 0, 0);
  public scaling: Vector3 = new Vector3(1, 1, 1);
  public selectable: boolean = false;
  public relativeToCameraPosition = {
    max: {
      x: 0,
      y: 0
    },
    min: {
      x: 0,
      y: 0
    },
    depth: 0
  };

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
      this._position.set((this.engine.width / 100) * v.x, (-this.engine.height / 100) * v.y, v.z);
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
    };
  } {
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
      if (!this.UIElement) {
        this._position.set(value[0], value[1], value[2]);
      } else {
        this._position.set((this.engine.width / 100) * value[0], (-this.engine.height / 100) * value[1], value[2]);
      }
    } else {
      if (!this.UIElement) {
        this._position.set(value, y!, z!);
      } else {
        this._position.set((this.engine.width / 100) * value, (-this.engine.height / 100) * y!, z!);
      }
    }
  }

  public move(x: number, y: number, z: number): void {
    this._position.move(x, y, z);
  }

  public moveRelativeToTheCamera(x: number, y: number, z: number): void {
    // let matrix = perspective(this.engine.camera!.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.engine.camera!.range);
    // matrix = multiply(matrix, this.engine.camera!.inverseMatrix);
    // matrix = multiply(matrix, translation(this.position.x, this.position.y, this.position.z))
    // let pos = transformVector(inverse(this.matrix), [x, y, 0, 1])

    // console.log(pos)

    // position = transformVector(this.camera!.rotationMatrix, position);
    this._position.move(x, y, z);
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
    this.maxSize.set(this.maxBaseSize.x * x, this.maxBaseSize.y * y, this.maxBaseSize.z * z);
    this.minSize.set(this.minBaseSize.x * x, this.minBaseSize.y * y, this.minBaseSize.z * z);
  }

  public scaleToPixels(x: number, y: number, z: number) {
    x = x != null ? x / Math.abs(this.maxBaseSize.x - this.minBaseSize.x) : this.scaling.x;
    y = y != null ? y / Math.abs(this.maxBaseSize.y - this.minBaseSize.y) : this.scaling.y;
    z = z != null ? z / Math.abs(this.maxBaseSize.z - this.minBaseSize.z) : this.scaling.z;
    this.scaling.set(x, y, z);
  }

  public scaleToPixelsX(x: number) {
    x = x / Math.abs(this.maxBaseSize.x - this.minBaseSize.x);
    this.scaling.set(x, x, x);
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
    this.maxSize.set(this.maxBaseSize.x * x, this.maxBaseSize.y * y, this.maxBaseSize.z * z);
    this.minSize.set(this.minBaseSize.x * x, this.minBaseSize.y * y, this.minBaseSize.z * z);
  }

  public setTexture(texture: Texture) {
    this.texture = texture;
  }

  public async checkCollision(position: Vector3, moving: Vector3, movingObjectCollisionBox: CollisionBox, callback: Function) {
    if (!this.hidden && this.engine.camera!.moved) {
      let maxPoint = [this.collisionBox.maxPoint.x, this.collisionBox.maxPoint.y, this.collisionBox.maxPoint.z, 1];
      let minPoint = [this.collisionBox.minPoint.x, this.collisionBox.minPoint.y, this.collisionBox.minPoint.z, 1];

      maxPoint = transformVector(this.worldMatrix, maxPoint);
      minPoint = transformVector(this.worldMatrix, minPoint);

      if (maxPoint[0] < minPoint[0]) {
        let temp = maxPoint[0];
        maxPoint[0] = minPoint[0];
        minPoint[0] = temp;
      }
      let maxX = maxPoint[0] - movingObjectCollisionBox.minPoint.x;
      let minX = minPoint[0] - movingObjectCollisionBox.maxPoint.x;
      if (maxPoint[1] < minPoint[1]) {
        let temp = maxPoint[1];
        maxPoint[1] = minPoint[1];
        minPoint[1] = temp;
      }
      let maxY = maxPoint[1] - movingObjectCollisionBox.minPoint.y;
      let minY = minPoint[1] - movingObjectCollisionBox.maxPoint.y;
      if (maxPoint[2] < minPoint[2]) {
        let temp = maxPoint[2];
        maxPoint[2] = minPoint[2];
        minPoint[2] = temp;
      }
      let maxZ = maxPoint[2] - movingObjectCollisionBox.minPoint.z;
      let minZ = minPoint[2] - movingObjectCollisionBox.maxPoint.z;

      let newPosX = position.x + moving.x;
      let newPosY = position.y + moving.y;
      let newPosZ = position.z + moving.z;

      if (position.y > minY && position.y < maxY && position.z > minZ && position.z < maxZ) {
        if ((position.x < minX && newPosX >= minX) || (position.x > maxX && newPosX <= maxX)) {
          callback("x");
        }
      }

      if (position.x > minX && position.x < maxX && position.z > minZ && position.z < maxZ) {
        if ((position.y < minY && newPosY >= minY) || (position.y > maxY && newPosY <= maxY)) {
          callback("y");
        }
      }

      if (position.y > minY && position.y < maxY && position.x > minX && position.x < maxX) {
        if ((position.z < minZ && newPosZ >= minZ) || (position.z > maxZ && newPosZ <= maxZ)) {
          callback("z");
        }
      }
    }
  }

  public useShader(shader: ShaderProgram): void {
    this.shaderProgram = shader;
  }

  public async updateRelativeToCameraPosition() {
    let xs = [this.collisionBox.maxPoint.x, this.collisionBox.minPoint.x];
    let ys = [this.collisionBox.maxPoint.y, this.collisionBox.minPoint.y];
    let zs = [this.collisionBox.maxPoint.z, this.collisionBox.minPoint.z];

    let smallest = [1000000, 1000000];
    let biggest = [-1000000, -1000000, -1000000];

    for (let ix = 0; ix < 2; ix++) {
      const x = xs[ix];
      for (let iy = 0; iy < 2; iy++) {
        const y = ys[iy];
        for (let iz = 0; iz < 2; iz++) {
          const z = zs[iz];

          let coordsInPixels = transformVector(this.matrix, [x, y, z, 1]);
          coordsInPixels[0] = coordsInPixels[0] / coordsInPixels[3];
          coordsInPixels[1] = coordsInPixels[1] / coordsInPixels[3];

          coordsInPixels[0] = (coordsInPixels[0] * 0.5 + 0.5) * this.engine.width;
          coordsInPixels[1] = (coordsInPixels[1] * -0.5 + 0.5) * this.engine.height;

          coordsInPixels[0] = coordsInPixels[0] < 0 ? 0 : coordsInPixels[0];
          coordsInPixels[1] = coordsInPixels[1] < 0 ? 0 : coordsInPixels[1];

          coordsInPixels[0] = coordsInPixels[0] > this.engine.width ? this.engine.width : coordsInPixels[0];
          coordsInPixels[1] = coordsInPixels[1] > this.engine.height ? this.engine.height : coordsInPixels[1];

          if (coordsInPixels[0] < smallest[0]) {
            smallest[0] = coordsInPixels[0];
          } else if (coordsInPixels[0] > biggest[0]) {
            biggest[0] = coordsInPixels[0];
          }
          if (coordsInPixels[1] < smallest[1]) {
            smallest[1] = coordsInPixels[1];
          } else if (coordsInPixels[1] > biggest[1]) {
            biggest[1] = coordsInPixels[1];
          }
          if (coordsInPixels[2] > biggest[2]) {
            biggest[2] = coordsInPixels[2];
          }
        }
      }
    }

    this.relativeToCameraPosition = {
      max: {
        x: biggest[0],
        y: biggest[1]
      },
      min: {
        x: smallest[0],
        y: smallest[1]
      },
      depth: biggest[2]
    };
  }

  public async getPositionOnScreen() {
    await this.updateRelativeToCameraPosition();
    if (
      this.engine.controls!.mouse.x > this.relativeToCameraPosition.min.x &&
      this.engine.controls!.mouse.x < this.relativeToCameraPosition.max.x &&
      this.engine.controls!.mouse.y > this.relativeToCameraPosition.min.y &&
      this.engine.controls!.mouse.y < this.relativeToCameraPosition.max.y
    ) {
      if (this.engine.selectedObject == null || this.engine.selectedObject.relativeToCameraPosition.depth >= this.relativeToCameraPosition.depth) {
        this.engine.selectedObject = this;
      }
    }
  }

  public async updateMatrixes() {
    let rot = rotation(this.rotation.x, this.rotation.y, this.rotation.z);
    let world = translation(this._position.x, this._position.y, this._position.z);
    if (!this.verticalAlign) {
      world = multiply(world, translation(0, -(this.maxSize.y - this.minSize.y) / 2, 0));
    }
    let afterRotation = rot;
    afterRotation = multiply(
      afterRotation,
      translation(
        -this.minSize.x - (this.maxSize.x - this.minSize.x) / 2,
        -this.minSize.y - (this.maxSize.y - this.minSize.y) / 2,
        -this.minSize.z - (this.maxSize.z - this.minSize.z) / 2
      )
    );
    afterRotation = multiply(afterRotation, scaling(this.scaling.x, this.scaling.y, this.scaling.z));
    if (this.UIElement) {
      this.uiMatrix = multiply(world, afterRotation);
      world = multiply(this.camera!.matrix, rot);
    } else {
      world = multiply(world, afterRotation);
    }

    this.worldMatrix = world;

    this.rotationMatrix = rot;
  }

  public update(): void {
    if (!this.hidden) {
      let matrix = perspective(this.engine.camera!.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.engine.camera!.range);
      if (!this.UIElement) {
        matrix = multiply(matrix, this.engine.camera!.inverseMatrix);
        matrix = multiply(matrix, this.worldMatrix);
      } else {
        matrix = multiply(matrix, this.uiMatrix!);

        this.rotationMatrix = multiply(this.engine.camera!.rotationMatrix, this.rotationMatrix);
      }

      this.matrix = matrix;
    }

    if (this.selectable) {
      this.getPositionOnScreen();
    }
  }

  public draw(): void {
    if (!this.hidden && this.shaderProgram) {
      this.shaderProgram.use();
      this.engine.webgl.enableVertexAttribArray(this.shaderProgram.positionLocation);
      this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, this.vertexesBuffer);
      this.engine.webgl.vertexAttribPointer(this.shaderProgram.positionLocation, 3, this.engine.webgl.FLOAT, false, 0, 0);

      this.engine.webgl.enableVertexAttribArray(this.shaderProgram.texcoordLocation);
      this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, this.textureCoordinatesBuffer);
      this.engine.webgl.vertexAttribPointer(this.shaderProgram.texcoordLocation, 2, this.engine.webgl.FLOAT, false, 0, 0);

      this.engine.webgl.enableVertexAttribArray(this.shaderProgram.normalLocation);
      this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, this.normalsBuffer);
      this.engine.webgl.vertexAttribPointer(this.shaderProgram.normalLocation, 3, this.engine.webgl.FLOAT, false, 0, 0);

      this.engine.webgl.uniform1i(this.shaderProgram.textureLocation, this.texture.textureBlockLocation);
      this.engine.webgl.uniformMatrix4fv(this.shaderProgram.matrixLocation, false, this.matrix);
      this.engine.webgl.uniformMatrix4fv(this.shaderProgram.objectRotationLocation, false, this.rotationMatrix);
      this.engine.webgl.uniformMatrix4fv(this.shaderProgram.worldMatrixLocation, false, this.worldMatrix);

      this.engine.webgl.drawArrays(this.engine.webgl.TRIANGLES, 0, this.vertexes.length / 3);
    }
  }

  public animate(fps: number, animateFunction: (object: Entity) => void) {
    animateFunction = animateFunction;
    this._animationInterval = setInterval(() => {
      animateFunction(this);
    }, 1000 / fps);
    return this._animationInterval;
  }

  public hide() {
    this.hidden = true;
  }

  public show() {
    this.hidden = false;
  }

  public copy (): Entity {
    // let obj = new Entity(this.engine)
    // return Object.assign(obj, this)
  }

  /**
   * Deletes this object from engine.
   */
  public destroy() {
    this.engine.removeObject(this)
  }
}

class CollisionBox {
  public maxPoint: Vector3 = new Vector3(0, 0, 0);
  public minPoint: Vector3 = new Vector3(0, 0, 0);
  public points: Vector3[] = [];

  public generatePoints() {}
}

export { CollisionBox };
export default Entity;
