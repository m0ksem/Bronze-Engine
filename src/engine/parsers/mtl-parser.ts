function isMtlDeclaration(line: string) {
  return line.slice(0, 7) === 'newmtl '
}

function parseMtlName(line: string) {
  return line.slice(7)
}

function isTexture(line: string) {
  return line.slice(0, 7) === 'map_Kd '
}

function isColor(line: string) {
  return line.slice(0, 2) === 'Kd'
}

function parseTexture(line: string) {
  return line.slice(7)
}

function parseColor(line: string) {
  return line.split(' ').slice(1).map((v) => Number(v))
}

function createMtl(name: string): Mtl {
  return {
    name,
    color: [255, 0, 255],
    specularColor: [0.35, 0.35, 0.35],
    specularExponent: 32,
    ambient: [1, 1, 1],
  }
}

const ambientParser = { 
  test: (line: string) => line.slice(0, 2) === 'Ka', 
  parse: (line: string) => line.split(' ').slice(1).map((v) => Number(v)) 
}

const specularColor = {
  test: (line: string) => line.slice(0, 2) === 'Ks',
  parse: (line: string) => line.split(' ').slice(1).map((v) => Number(v))
}

const specularExponent = {
  test: (line: string) => line.slice(0, 2) === 'Ns', 
  parse: (line: string) => Number(line.split(' ')[1])
}

export type Mtl = { 
  name: string, 
  texture?: string, 
  color: number[], 
  specularColor: number[],
  specularExponent: number,
  ambient: number[],
}

export class MtlParser {
  public optimize(text: string) {
    // Remove CLRF '\r'
    let newText = text.split('\r').join('');
    // Fix 3ds Max double space after v
    newText = newText.split('	').join('');
  
    return newText
  }

  public parse(text: string): { [key: string]: Mtl } {
    const lines = text.split('\n')
    
    const list: { [key: string]: Mtl } = {}
    let currentMtl: Mtl = createMtl('no-name-mtl')
  
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index]

      if (isMtlDeclaration(line)) {
        currentMtl = createMtl(parseMtlName(line))
        list[currentMtl.name] = currentMtl
        continue
      }

      if (!currentMtl) { throw new Error('MTL has not initialized. Looks like internal bug.') }
      
      
      if (isTexture(line)) {
        currentMtl.texture = parseTexture(line)
      } else if (isColor(line)) {
        currentMtl.color = parseColor(line)
      } else if (specularColor.test(line)) {
        currentMtl.specularColor = specularColor.parse(line)
      } else if (specularExponent.test(line)) {
        currentMtl.specularExponent = specularExponent.parse(line)
      } else if (ambientParser.test(line)) {
        currentMtl.ambient = ambientParser.parse(line)
      }
    }

    return list
  }

  public mapMtl<T>(mtl: Record<string, Mtl>, cb: (mtl: Mtl) => T): { [key: string]: T} {
    return Object
      .values(mtl)
      .reduce((acc, mtl) => ({ ...acc, [mtl.name]: cb(mtl) }), {})
  }
}

export const mtlParser = new MtlParser();