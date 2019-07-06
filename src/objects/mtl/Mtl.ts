import { SimpleTexture } from './../../textures/SimpleTexture'
import { Engine } from './../../Engine'

export class MTL {
  public elements: MTLElement = []

  constructor(fileText: String, engine: Engine, path: String) {
    let splitted: String[] = fileText.split("\n");
    let currentMTL: MTLElement
    splitted.forEach(row => {
      let words = row.split(' ')
      for (let i = words.length; i--; ) {
        if (words[i] == "" || words[i] == "\r") words.splice(i, 1);
      }
      if (words[0] == "newmtl") {
        currentMTL = new MTLElement(words[1], engine.webgl)
        this.elements.push(currentMTL)
      }
      if (words[0] == "map_Kd") {
        let texture = new SimpleTexture(engine)
        let p = path.split('/')
        p.splice(-1, 1)
        p = p.join('/')
        texture.loadFrom(p + words[1])
        texture.aplha = true
        currentMTL.texture = texture
      }
    })
  }

  getElementByName (name: String): MTLElement {
    for (let i = 0; i <  this.elements.length; i++) {
      const element = this.elements[i];
      if (element.name == name) {
        return element
      }
    }
  }
}

export class MTLElement {
  public webgl: WebGLRenderingContext
  public name: String
  public vertexes: number[][] = [];
  public textureCoordinates: number[][] = [];
  public normals: number[][] = [];
  public vertexesBuffer: WebGLBuffer[] | null = null;
  public textureCoordinatesBuffer: WebGLBuffer[] | null = null;
  public normalsBuffer: WebGLBuffer[] | null = null;
  public texture: Texture;

  constructor (name: String, webgl: WebGLRenderingContext) {
    this.name = name
    this.webgl = webgl
  }

  public commit () {
    this.vertexesBuffer = this.webgl.createBuffer();
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.vertexesBuffer);
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webgl.STATIC_DRAW);
    this.textureCoordinatesBuffer = this.webgl.createBuffer();
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.textureCoordinatesBuffer);
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.textureCoordinates), this.webgl.STATIC_DRAW);
    this.normalsBuffer = this.webgl.createBuffer();
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.normalsBuffer);
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.normals), this.webgl.STATIC_DRAW);
  }
}