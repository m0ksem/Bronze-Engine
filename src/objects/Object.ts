import { Entity } from "./Entity";
import { Engine } from "../Engine";
import { Material } from "../materials/Material";

export default class Object extends Entity {
  private _drawingMode: number;

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
        normals.push([Number(values[1]), parseFloat(values[2]), parseFloat(values[3])]);
      } else if (values[name] == "vt") {
        textureCoords.push([parseFloat(values[1]), parseFloat(values[2])]);
      } else if (values[name] == "f") {
        // Transform 4 > faces to triangles
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
            this.vertexes.push(coordinate);
          });

          if (textureCoordinatePosition != 0 && textureCoords[textureCoordinatePosition - 1] != undefined) {
            textureCoords[textureCoordinatePosition - 1].forEach(textureCoordinate => {
              this.textureCoordinates.push(textureCoordinate);
            });
          } else {
            this.textureCoordinates!.push(1);
            this.textureCoordinates!.push(1);
          }

          if (indexes[2] != undefined) {
            normals[normalPosition - 1].forEach(normal => {
              this.normals.push(normal);
            });
          } else {
            this.normals.push(1, 1, 1);
          }
        }
      }
    });

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

    this.hidden = false;
  }

  public onload() {}

  /**
   * Async load object using ajax and compile on load.
   * @param {String} path
   * @public
   */
  public loadFromObj(path: string) {
    let self = this;
    let objectsLoader = new XMLHttpRequest();
    objectsLoader.open("GET", path);
    objectsLoader.onreadystatechange = function() {
      if (objectsLoader.readyState == 4) {
        self.compile(objectsLoader.responseText);
        self.onload();
      }
    };
    objectsLoader.send();
  }

  public useMaterial(material: Material) {
    material.defaultDraw = this.draw;
    material.object = this;
    this.draw = () => {
      material.drawObject(this);
    };
  }
}

export { Object };
