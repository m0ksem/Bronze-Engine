function isObjectDeclaration(line: string): boolean {
  return line[0] === 'o'
}

function parseObjectName(line: string) {
  return line.split(' ')[1]
}

type Face = { 
  v: number[],
  vt?: number[],
  vn?: number[]
}

const unnamedObject = 'unnamed'

function createObject(name: string): {
  name: string,
  faces: Face[],
  mtl?: string
} {
  return {
    name: name,
    faces: [],
  }
}

function isVector(line: string): boolean {
  return line.slice(0, 2) === 'v '
}

function isVertexNormal(line: string): boolean {
  return line.slice(0, 2) === 'vn'
}

function isTextureCoordinate(line: string): boolean {
  return line.slice(0, 2) === 'vt'
}

function isFace(line: string): boolean {
  return line.slice(0, 1) === 'f'
}

function isMtl(line: string): boolean {
  return line.slice(0, 6) === 'usemtl'
}

function parseVector(line: string) {
  // v cordX cordY cordZ
  return line.split(' ').slice(1).map((v) => Number(v))
}

function parseVertexNormal(line: string) {
  // vn cordX cordY cordZ
  return line.split(' ').slice(1).map((vn) => Number(vn))
}

function parseTextureCoordinate(line: string) {
  // vt cordX cordY cordZ
  const vt = line.split(' ').slice(1, 3)

  return [Number(vt[0]), 1 - Number(vt[1])]
}

function parseFace(line: string) {
  const parsedFaces = line.split(' ').slice(1).filter((v) => v !== '')
  const faces = [parsedFaces[0], parsedFaces[1], parsedFaces[2]]

  // Transform non-triangles, to triangles
  for (let i = 3; i < parsedFaces.length; i++) {
    faces.push(parsedFaces[i - 3]);
    faces.push(parsedFaces[i - 1]);
    faces.push(parsedFaces[i]);
  }

  return faces.map((f) => {
    const [first, second, third] = f.split('/')

    if (second === "") { return { v: first, vn: third } }
    if (!third) { return { v: first, vt: second }}

    return { v: first, vt: second, vn: third }
  })
}

function parseMtl(line: string) {
  return line.split(' ')[1]
}

function getByIndex<T = string> (array: T[], index: number): T {
  if (index > array.length) {
    return getByIndex(array, index - array.length)
  }

  return array[index - 1]
}

export class ObjParser {
  public optimize(text: string) {
    // Remove CLRF '\r'
    let newText = text.split('\r').join('');
    // Fix 3ds Max double space after v
    newText = newText.split('v  ').join('v ');
  
    return newText
  }

  public parse(text: string) {
    const lines = text.split('\n')
    
    const objects = []

    const vertices: number[][] = []
    const normals: number[][] = []
    const textureCoordinates: number[][] = []

    let currentObject = createObject(unnamedObject)
    objects.push(currentObject)
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index];

      if (isObjectDeclaration(line)) {
        if (currentObject.name === unnamedObject) {
          currentObject.name = parseObjectName(line)
        } else {
          currentObject = createObject(parseObjectName(line))
          objects.push(currentObject)
        }
      } else if (isVector(line)) {
        vertices.push(parseVector(line))
      } else if (isVertexNormal(line)) {
        normals.push(parseVertexNormal(line))
      } else if (isTextureCoordinate(line)) {
        textureCoordinates.push(parseTextureCoordinate(line))
      } else if (isFace(line)) {
        const faces = parseFace(line)
          .map(({ v, vt, vn }) => {
            const face: Face = { v: getByIndex(vertices, Number(v)) }

            if (vt !== undefined) {
              face.vt = getByIndex(textureCoordinates, Number(vt))
            }

            if (vn !== undefined) {
              face.vn = getByIndex(normals, Number(vn))
            }

            return face
          })

        currentObject.faces.push(...faces)
      } else if (isMtl(line)) {
        currentObject.mtl = parseMtl(line)
      }
    }

    return objects.map((o) => {
      const facesList = o.faces.flat()
      
      const vertices = facesList.map((f) => f.v).flat()
      const textureCoordinates = facesList.map((f) => f.vt || []).flat()
      const normals = facesList.map((f) => f.vn || []).flat()

      return { vertices, textureCoordinates, normals, name: o.name, mtl: o.mtl }
    })
  }
}

export const objParser = new ObjParser();