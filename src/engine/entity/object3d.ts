import { Mtl } from './../parsers/mtl-parser';
import { Entity } from './entity';
import { createBuffer } from '../utils/webgl2'
import { objParser } from '../parsers/obj-parser'
import { mtlParser } from '../parsers/mtl-parser';

/** Type from .obj wavefront */
type NamedObject = {
  /** o [name] */
  name: string
  /** v [x, y, z] */
  vertices: number[]
  /** vn [x, y, z] */
  normals: number[]
  /** vt [x, y] */
  textureCoordinates: number[]

  verticesBuffer: WebGLBuffer
  normalsBuffer: WebGLBuffer
  textureCoordinatesBuffer: WebGLBuffer

  mtl?: string
}

export class Object3D extends Entity {
  private webgl: WebGL2RenderingContext

  public objects: NamedObject[] = []
  public mtl: Mtl[] | null = null

  constructor(webgl: WebGL2RenderingContext, objFileSource?: string, mtlFileSource?: string) {
    super()
    this.webgl = webgl

    if (objFileSource) { this.parseObj(objFileSource) }
    if (mtlFileSource) { this.parseMtl(mtlFileSource) }
  }

  parseObj(objFileSource: string) {
    const objects = objParser.parse(objFileSource)

    this.objects = objects.map((obj) => ({
      name: obj.name,
      vertices: obj.vertices,
      normals: obj.normals,
      mtl: obj.mtl,
      textureCoordinates: obj.textureCoordinates,
      verticesBuffer: createBuffer(this.webgl, obj.vertices),
      normalsBuffer: createBuffer(this.webgl, obj.normals),
      textureCoordinatesBuffer: createBuffer(this.webgl, obj.textureCoordinates)
    }))
  }

  parseMtl(mtlFileSource: string) {
    this.mtl = mtlParser.parse(mtlFileSource)
  }

  render(cb: (namedObject: NamedObject, entity: Object3D, mtl?: any) => any) {
    for (let i = 0; i < this.objects.length; i++) {
      cb(this.objects[i], this, this.mtl)
    }
  }
}
