import { Mtl } from './../parsers/mtl-parser';
import { Entity } from './entity';
import { createBuffer } from '../utils/webgl2'
import { objParser, ParsedPlane } from '../parsers/obj-parser'
import { mtlParser } from '../parsers/mtl-parser';

type Buffers = {
  verticesBuffer: WebGLBuffer
  normalsBuffer: WebGLBuffer
  textureCoordinatesBuffer: WebGLBuffer
}

type Plane = ParsedPlane & Buffers

/** Type from .obj wavefront */
type BufferedObject = { name: string, planes: Plane[]  }

export class Object3D extends Entity {
  private webgl: WebGL2RenderingContext

  public objects: BufferedObject[] = []
  public mtl: { [key: string]: Mtl } = {}

  constructor(webgl: WebGL2RenderingContext, objFileSource?: string, mtlFileSource?: string) {
    super()
    this.webgl = webgl

    if (objFileSource) { this.parseObj(objFileSource) }
    if (mtlFileSource) { this.parseMtl(mtlFileSource) }
  }

  parseObj(objFileSource: string) {
    const objects = objParser.parse(objFileSource)

    this.objects = objects.map<BufferedObject>((obj) => ({
      ...obj,
      planes: obj.planes.map((plane) => ({
        ...plane,
        verticesBuffer: createBuffer(this.webgl, plane.vertices),
        normalsBuffer: createBuffer(this.webgl, plane.normals),
        textureCoordinatesBuffer: createBuffer(this.webgl, plane.textureCoordinates)
      })),      
    }))
  }

  parseMtl(mtlFileSource: string) {
    this.mtl = mtlParser.parse(mtlFileSource)
  }

  render(cb: (plane: Plane, entity: Object3D, mtl?: any) => any) {
    for (let o = 0; o < this.objects.length; o++) {
      for (let p = 0; p < this.objects[o].planes.length; p++) {
        cb(this.objects[o].planes[p], this, this.mtl)
      }
    }
  }
}
