function isObjectDeclaration(line: string): boolean {
  return line[0] === 'o'
}

function parseObjectName(line: string) {
  return line.split(' ')[1]
}

type Face = { 
  v: number[],
  vt?: number[],
  vn: number[]
}

function createObject(name: string): {
  name: string,
  vertices: string[][],
  normals: string[][],
  textureCoordinates: string[][],
  faces: Face[],
} {
  return {
    name: name,
    vertices: [],
    normals: [],
    textureCoordinates: [],
    faces: []
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

function parseVector(line: string) {
  // v cordX cordY cordZ
  return line.split(' ').slice(1)
}

function parseVertexNormal(line: string) {
  // vn cordX cordY cordZ
  return line.split(' ').slice(1)
}

function parseTextureCoordinate(line: string) {
  // vt cordX cordY cordZ
  return line.split(' ').slice(1)
}

function parseFace(line: string) {
  const parsedFaces = line.split(' ').slice(1)
  const faces = [parsedFaces[0], parsedFaces[1], parsedFaces[2]]

  for (let i = 3; i < parsedFaces.length; i++) {
    faces.push(parsedFaces[i - 3]);
    faces.push(parsedFaces[i - 1]);
    faces.push(parsedFaces[i]);
  }

  return faces.map((f) => {
    // TODO: edge-cases
    const [v, vt, vn] = f.split('/')

    if (vt === "") { return { v, vn } }

    return { v, vt, vn }
  })
}

function getByIndex<T = string> (array: T[], index: number): T {
  if (index > array.length) {
    return getByIndex(array, index - array.length)
  }

  return array[index - 1]
}

export class ObjParser {
  public parse(text: string) {
    const lines = text.split('\n')
    
    const objects = []

    let currentObject = createObject('unamed')
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index];

      if (isObjectDeclaration(line)) {
        currentObject = createObject(parseObjectName(line))
        objects.push(currentObject)
      } else if (isVector(line)) {
        currentObject.vertices.push(parseVector(line))
      } else if (isVertexNormal(line)) {
        currentObject.normals.push(parseVertexNormal(line))
      } else if (isTextureCoordinate(line)) {
        currentObject.textureCoordinates.push(parseTextureCoordinate(line))
      } else if (isFace(line)) {
        const faces = parseFace(line)
          .map(({ v, vt, vn }) => ({
            v:  getByIndex(currentObject.vertices, Number(v)).map((v) => parseFloat(v)),
            // vt: getByIndex(currentObject.vertices, Number(vt)).map((v) => parseFloat(v)),
            vn: getByIndex(currentObject.vertices, Number(vn)).map((v) => parseFloat(v)),
          }))

        currentObject.faces.push(...faces)
      }
    }

    return objects.map((o) => {
      const facesList = o.faces.flat()
      
      const vertices = facesList.map((f) => f.v).flat()
      const textureCoordinates = facesList.map((f) => f.vt).flat()
      const normals = facesList.map((f) => f.vn).flat()

      return { vertices, textureCoordinates, normals, name: o.name }
    })
  }
}

export const objParser = new ObjParser();