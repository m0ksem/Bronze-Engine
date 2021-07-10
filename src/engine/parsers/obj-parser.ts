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
  vertices: number[]
  normals: number[]
  textureCoordinates: number[]
  mtl?: string
} {
  return {
    name: name,
    faces: [],
    vertices: [],
    normals: [],
    textureCoordinates: [],
  }
}

function isVertex(line: string): boolean {
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

function parseVertex(line: string) {
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
  const parsedFaces = line.split(' ').slice(1)
  const faces = []

  // Todo move this to obj precompiler
  if (parsedFaces[parsedFaces.length - 1] === '') { parsedFaces.splice(-1) }

  // Transform non-triangles, to triangles
  for (let i = 2; i < parsedFaces.length; i++) {
    faces.push(parsedFaces[0].split('/'));
    faces.push(parsedFaces[i - 1].split('/'));
    faces.push(parsedFaces[i].split('/'));
  }

  return faces
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

    const parsedVertices: number[][] = []
    const parsedNormals: number[][] = []
    const parsedTextureCoordinates: number[][] = []

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
      } else if (isVertex(line)) {
        parsedVertices.push(parseVertex(line))
      } else if (isVertexNormal(line)) {
        parsedNormals.push(parseVertexNormal(line))
      } else if (isTextureCoordinate(line)) {
        parsedTextureCoordinates.push(parseTextureCoordinate(line))
      } else if (isFace(line)) {
        parseFace(line)
          .forEach(([vIndex, vtIndex, vnIndex]) => {
            currentObject.vertices.push(...getByIndex(parsedVertices, Number(vIndex)))

            if (vtIndex !== '') {
              currentObject.textureCoordinates.push(...getByIndex(parsedTextureCoordinates, Number(vtIndex)))
            } else {
              currentObject.textureCoordinates.push(0, 0)
            }

            if (vnIndex !== '') {
              currentObject.normals.push(...getByIndex(parsedNormals, Number(vnIndex)))
            }
          })
      } else if (isMtl(line)) {
        currentObject.mtl = parseMtl(line)
      }
    }

    return objects
  }
}

export const objParser = new ObjParser();