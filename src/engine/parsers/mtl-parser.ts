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
  return line.split(' ').slice(1).map((v) => Number(v) * 255)
}

function createMtl(name: string): Mtl {
  return { name, color: [255, 0, 255] }
}

export type Mtl = { name: string, texture?: string, color: number[] }

export class MtlParser {
  public optimize(text: string) {
    // Remove CLRF '\r'
    let newText = text.split('\r').join('');
    // Fix 3ds Max double space after v
    newText = newText.split('	').join('');
  
    return newText
  }

  public parse(text: string): Mtl[] {
    const lines = text.split('\n')
    
    const list = []
    let currentMtl = null
  
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index]

      if (isMtlDeclaration(line)) {
        currentMtl = createMtl(parseMtlName(line))
        list.push(currentMtl)
      } else if (isTexture(line)) {
        currentMtl!.texture = parseTexture(line)
      } else if (isColor(line)) {
        currentMtl!.color = parseColor(line)
      }
    }

    return list
  }
}

export const mtlParser = new MtlParser();