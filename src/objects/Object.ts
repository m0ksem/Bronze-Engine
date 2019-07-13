import { Entity } from "./Entity";
import { Engine } from "../Engine";
import { Material } from "../materials/Material";
import { MTL, MTLElement } from "./mtl/MTL"
import BronzeError from "../debug/Error";

export default class Object extends Entity {
  private _drawingMode: number;
  private afterLoadHidden = false;
  public mtl: MTL | null = null;
  public onLoadHandlers: Function[] = []
  private mtlRequired: boolean  = false
  private mtlRequiredFunction: Function | null = null
  private objLoaded = false

  constructor(engine: Engine) {
    super(engine);

    this._drawingMode = this.webgl.TRIANGLES;

    this.hidden = true;

    this.name = "Just object :)";
  }

  /**
   * Sets how WebGL will draw object
   * @param {String} mode
   */
  public setDrawingMode(mode: string) {
    switch (mode) {
      case "TRIANGLES":
        this._drawingMode = this.webgl.TRIANGLES;
        break;
      case "DEFAULT":
        this._drawingMode = this.webgl.TRIANGLES;
        break;
      case "TRIANGLE_FAN":
        this._drawingMode = this.webgl.TRIANGLE_FAN;
        break;
      case "FAN":
        this._drawingMode = this.webgl.TRIANGLE_FAN;
        break;
      case "STRIP":
        this.webgl.TRIANGLE_STRIP;
        break;
      case "TRIANGLE_STRIP":
        this.webgl.TRIANGLE_STRIP;
        break;
      default:
        throw Error("Wrong drawing mode. See WebGL drawing mods.");
    }
  }

  set drawingMode(value) {
    this._drawingMode = value;
  }

  get drawingMode() {
    return this._drawingMode;
  }

  /**
   * Function to compile object from text of .obj file.
   * @param {String} fileText
   * @public
   */
  public compile(fileText: String) {
    let vertexes: number[][] = [];
    let textureCoords: number[][] = [];
    let normals: number[][] = [];
    let splitted: String[] = fileText.split("\n");
    let collisionBox = {
      x: [0, 0],
      y: [0, 0],
      z: [0, 0]
    };

    let currentMTL: MTLElement | null = null
    let currentVertexes = this.vertexes
    let currentNormals = this.normals
    let currentTextureCoords = this.textureCoordinates

    splitted.forEach(element => {
      let values = element.split(" ");
      let name = 0;
      for (let i = values.length; i--; ) {
        if (values[i] == "" || values[i] == "\r") values.splice(i, 1);
      }

      if (values[name] == "v") {
        let v1 = parseFloat(values[1]);
        let v2 = parseFloat(values[2]);
        let v3 = parseFloat(values[3]);
        if (collisionBox.x[1] < v1) {
          collisionBox.x[1] = v1;
        }
        if (collisionBox.y[1] < v2) {
          collisionBox.y[1] = v2;
        }
        if (collisionBox.z[1] < v3) {
          collisionBox.z[1] = v3;
        }
        if (collisionBox.x[0] > v1) {
          collisionBox.x[0] = v1;
        }
        if (collisionBox.y[0] > v2) {
          collisionBox.y[0] = v2;
        }
        if (collisionBox.z[0] > v3) {
          collisionBox.z[0] = v3;
        }
        vertexes.push([v1, v2, v3]);
      } else if (values[name] == "vn") {
        normals.push([parseFloat(values[1]), parseFloat(values[2]), parseFloat(values[3])]);
      } else if (values[name] == "vt") {
        textureCoords.push([parseFloat(values[1]), parseFloat(values[2])]);
      } else if (this.mtl != null && values[name] == "usemtl") {
        currentMTL = this.mtl.getElementByName(values[1])
        if (currentMTL == undefined) {
          return
        }
        currentVertexes = currentMTL.vertexes
        currentNormals = currentMTL.normals
        currentTextureCoords = currentMTL.textureCoordinates
      } else if (values[name] == "f") {
        const faces = [values[1], values[2], values[3]];
        if (values.length - 1 > 3) {
          for (let i = 4; i < values.length; i++) {
            faces.push(values[i - 3]);
            faces.push(values[i - 1]);
            faces.push(values[i]);
          }
        }

        for (let i = 0; i < faces.length; i++) {
          const point = faces[i];

          let indexes = point.split("/").map(el => Number(el));

          let vertexPosition = indexes[0];
          if (vertexPosition <= 0) vertexPosition = vertexes.length + vertexPosition + 1;
          let textureCoordinatePosition = indexes[1];
          if (textureCoordinatePosition < 0) textureCoordinatePosition = textureCoords.length + textureCoordinatePosition + 1;
          let normalPosition = indexes[2];
          if (normalPosition < 0) normalPosition = normals.length + normalPosition + 1;

          vertexes[vertexPosition - 1].forEach(coordinate => {
            currentVertexes.push(coordinate);
          });

          if (textureCoords[textureCoordinatePosition - 1] != undefined) {
            currentTextureCoords.push(textureCoords[textureCoordinatePosition - 1][0]);
            currentTextureCoords.push(Math.abs(1 - textureCoords[textureCoordinatePosition - 1][1]));
          } else {
            currentTextureCoords.push(1);
            currentTextureCoords.push(1);
          }

          if (indexes[2] != undefined) {
            normals[normalPosition - 1].forEach(normal => {
              currentNormals.push(normal);
            });
          } else {
            currentNormals.push(1, 1, 1);
          }
        }
      }
    });

    if (this.mtl) {
      for (let i = 0; i < this.mtl.elements.length; i++) {
        const element = this.mtl.elements[i];
        element.commit()
      }
      let buffer = this.draw
      this.draw = this.drawWithMTL
      this.drawWithMTL = this.draw
    }

    this.vertexesBuffer = this.webgl.createBuffer();
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.vertexesBuffer);
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webgl.STATIC_DRAW);
    this.textureCoordinatesBuffer = this.webgl.createBuffer();
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.textureCoordinatesBuffer);
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.textureCoordinates), this.webgl.STATIC_DRAW);
    this.normalsBuffer = this.webgl.createBuffer();
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.normalsBuffer);
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.normals), this.webgl.STATIC_DRAW);

    this.maxBaseSize.set(collisionBox.x[0], collisionBox.y[0], collisionBox.z[0]);
    this.minBaseSize.set(collisionBox.x[1], collisionBox.y[1], collisionBox.z[1]);
    this.maxSize.set(collisionBox.x[0], collisionBox.y[0], collisionBox.z[0]);
    this.minSize.set(collisionBox.x[1], collisionBox.y[1], collisionBox.z[1]);
    this.maxSize.scale(this.scaling.x, this.scaling.y, this.scaling.z);
    this.minSize.scale(this.scaling.x, this.scaling.y, this.scaling.z);

    this.collisionBox.maxPoint = this.maxBaseSize;
    this.collisionBox.minPoint = this.minBaseSize;

    this.engine.objectLoaded(this);

    this.hidden = this.afterLoadHidden;

    this.hide = () => {
      this.hidden = true
    }

    this.show = () => {
      this.hidden = false
    }
  }

  public hide () {
    this.afterLoadHidden = true
  }

  public show () {
    this.afterLoadHidden = false
  }

  public addOnLoadHandler (func: Function) {
    this.onLoadHandlers.push(func)
  }

  public onload() {
    this.onLoadHandlers.forEach(element => {
      element(this)
    });
  }

  /**
   * Async load object using ajax and compile on load.
   * @param {String} path
   * @public
   */
  public loadFromObj(path: string) {
    let self = this;
    let objectsLoader = new XMLHttpRequest();
    objectsLoader.open("GET", path);
    objectsLoader.onreadystatechange = () => {
      if (objectsLoader.readyState == 4) {
        if (this.mtl || !this.mtlRequired) {
          self.compile(objectsLoader.responseText);
          self.onload();
          self.objLoaded = true
        } else {
          this.mtlRequiredFunction = () => {
            self.objLoaded = true
            self.compile(objectsLoader.responseText);
            self.onload();
          }
        }
      }
    };
    objectsLoader.send();
  }

  public async loadMTL(path: string) {
    let loader = new XMLHttpRequest();
    this.mtlRequired = true
    loader.open("GET", path)
    loader.onreadystatechange = () => {
      if (loader.readyState == 4) {
        this.mtl = new MTL(loader.responseText, this.engine, path)
        if (this.objLoaded && this.mtlRequiredFunction) {
          this.mtlRequiredFunction()
        } else {
          new BronzeError('No MTL required function')
        }
      } else {
        console.log('Error loading MTL')
      }
    }
    loader.send()
  }

  public useMaterial(material: Material) {
    material.defaultDraw = this.draw;
    material.object = this;
    this.draw = () => {
      material.drawObject(this);
    };
  }

  private drawWithMTL(): void {
    if (!this.hidden && this.shaderProgram && this.mtl) {
      this.shaderProgram.use();

      this.engine.webgl.uniformMatrix4fv(this.shaderProgram.matrixLocation, false, this.matrix);
      this.engine.webgl.uniformMatrix4fv(this.shaderProgram.objectRotationLocation, false, this.rotationMatrix);
      this.engine.webgl.uniformMatrix4fv(this.shaderProgram.worldMatrixLocation, false, this.worldMatrix);

      this.mtl.elements.forEach(elem => {
        if (elem.texture != null) {
          this.engine.webgl.uniform1i(this.shaderProgram.textureLocation, elem.texture.textureBlockLocation);
        } else {
          this.engine.webgl.uniform1i(this.shaderProgram.textureLocation, this.texture.textureBlockLocation);
        }
        this.engine.webgl.enableVertexAttribArray(this.shaderProgram.positionLocation);
        this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, elem.vertexesBuffer);
        this.engine.webgl.vertexAttribPointer(this.shaderProgram.positionLocation, 3, this.engine.webgl.FLOAT, false, 0, 0);

        this.engine.webgl.enableVertexAttribArray(this.shaderProgram.texcoordLocation);
        this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, elem.textureCoordinatesBuffer);
        this.engine.webgl.vertexAttribPointer(this.shaderProgram.texcoordLocation, 2, this.engine.webgl.FLOAT, false, 0, 0);

        this.engine.webgl.enableVertexAttribArray(this.shaderProgram.normalLocation);
        this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, elem.normalsBuffer);
        this.engine.webgl.vertexAttribPointer(this.shaderProgram.normalLocation, 3, this.engine.webgl.FLOAT, false, 0, 0);

        this.engine.webgl.drawArrays(this.engine.webgl.TRIANGLES, 0, elem.vertexes.length / 3);
      });
    }
  }

  public copy (): Object {
    let obj = new Object(this.engine)
    for (let attr in {...this}) {
      // @ts-ignore - These are two completely identical objects.
      obj[attr] = this[attr]
    }
    let copyAttrs = (object: Object, original: Object) => {
      object.vertexes = original.vertexes
      object.normals = original.normals
      object.textureCoordinates = original.textureCoordinates
      object.vertexesBuffer = original.vertexesBuffer
      object.normalsBuffer = original.normalsBuffer
      object.textureCoordinatesBuffer = original.textureCoordinatesBuffer
      object.mtl = original.mtl
      object.draw = original.draw
      object.maxBaseSize = original.maxBaseSize
      object.maxSize = original.maxSize
      object.shaderProgram = original.shaderProgram
    }

    obj.position = this.position.copy()
    obj.scaling = this.scaling.copy()
    obj.rotation = this.rotation.copy()

    obj.hide = () => {
      obj.hidden = true
    }

    obj.show = () => {
      obj.hidden = false
    }
    obj.hide()

    this.addOnLoadHandler(() => {
      copyAttrs(obj, this)
      this.engine.objectLoaded(obj)
      obj.show()
    })

    return obj
  }
}

export { Object };
