
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
  }
}
