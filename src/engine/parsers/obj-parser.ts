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

function createObject(name: string): {
  name: string,
  faces: Face[],
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

    const vertices: string[][] = []
    const normals: string[][] = []
    const textureCoordinates: string[][] = []

    let currentObject = createObject('unnamed')
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index];

      if (isObjectDeclaration(line)) {
        currentObject = createObject(parseObjectName(line))
        objects.push(currentObject)
      } else if (isVector(line)) {
        vertices.push(parseVector(line))
      } else if (isVertexNormal(line)) {
        normals.push(parseVertexNormal(line))
      } else if (isTextureCoordinate(line)) {
        textureCoordinates.push(parseTextureCoordinate(line))
      } else if (isFace(line)) {
        const faces = parseFace(line)
          .map(({ v, vt, vn }) => {
            const face: Face = { v: getByIndex(vertices, Number(v)).map((num) => parseFloat(num)) }

            if (vt !== undefined) {
              face.vt = getByIndex(textureCoordinates, Number(vt)).map((num) => parseFloat(num))
            }

            if (vn !== undefined) {
              face.vn = getByIndex(normals, Number(vn)).map((num) => parseFloat(num))
            }

            return face
          })

        currentObject.faces.push(...faces)
      }
    }

    return objects.map((o) => {
      const facesList = o.faces.flat()
      
      const vertices = facesList.map((f) => f.v).flat()
      const textureCoordinates = facesList.map((f) => f.vt || []).flat()
      const normals = facesList.map((f) => f.vn || []).flat()

      return { vertices, textureCoordinates, normals, name: o.name }
    })
  }
}

export const objParser = new ObjParser();