
export const Vector = {
  add(vec1: number[], vec2: number[]) {
    let longest, shorten

    if (vec1.length >= vec2.length) {
      longest = vec1
      shorten = vec2
    } else {
      longest = vec2
      shorten = vec1
    }
    
    const resultVec = []
    for (let i = 0; i < longest.length; i++) {
      resultVec.push(longest[i] + (shorten[i] || 0))
    }


    return resultVec
  },

  arrayToXYZ(v: number[]): Vector3 {
    return { x: v[0], y: v[1], z: v[2] }
  },

  xyzToArray(v: Vector3) {
    return [v.x, v.y, v.z]
  }
}

export type Vector3 = { x: number, y: number, z: number }
export type Vector3Array = [number, number, number]