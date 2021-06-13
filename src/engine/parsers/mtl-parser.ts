function isMtlDeclaration(line: string) {
  return line.slice(0, 7) === 'newmtl '
}

function parseMtlName(line: string) {
  return line.slice(7)
}

function isTexture(line: string) {
  return line.slice(0, 7) === 'map_Kd '
}

function parseTexture(line: string) {
  return line.slice(7)
}

function createMtl(name: string): {
  name: string
  texture?: string,
} {
  return { name }
}

export class MtlParser {
  public parse(text: string): any {
    const lines = text.split('\n')
    
    const list: any[] = []
    let currentMtl = null
  
    for (let index = 0; index < lines.length; index++) {
      const line = lines[index]

      if (isMtlDeclaration(line)) {
        currentMtl = createMtl(parseMtlName(line))
        list.push(currentMtl)
      } else if (isTexture(line)) {
        currentMtl!.texture = parseTexture(line)
      }
    }

    return list
  }
}

export const mtlParser = new MtlParser();