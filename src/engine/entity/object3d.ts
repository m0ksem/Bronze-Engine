import { Entity } from './entity';
import { createBuffer } from '../utils/webgl2'
import { objParser } from '../parsers/obj-parser'

// TODO: parse texture
/** Type from .obj wavefront */
type NamedObject = {
  /** o [name] */
  name: string
  /** v [x, y, z] */
  vertices: number[]
  /** vn [x, y, z] */
  normals: number[]

  verticesBuffer: WebGLBuffer
  normalsBuffer: WebGLBuffer
}

export class Object3D extends Entity {
  private webgl: WebGL2RenderingContext

  protected objects: NamedObject[] = []

  constructor(webgl: WebGL2RenderingContext, objFileSource?: string) {
    super()
    this.webgl = webgl

    if (objFileSource) { this.parseObj(objFileSource) }
  }

  parseObj(objFileSource: string) {
    const objects = objParser.parse(objFileSource)

    this.objects = objects.map((obj) => ({
      name: obj.name,
      vertices: obj.vertices,
      normals: obj.normals,
      verticesBuffer: createBuffer(this.webgl, obj.vertices),
      normalsBuffer: createBuffer(this.webgl, obj.normals)
    }))
  }

  render(cb: (namedObject: NamedObject, entity: Object3D) => any) {
    for (let i = 0; i < this.objects.length; i++) {
      cb(this.objects[i], this)
    }
  }
}
