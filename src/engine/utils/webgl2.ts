export function createBuffer (webgl: WebGL2RenderingContext, array: number[]) {
  const buffer = webgl.createBuffer()

  if (!buffer) {
    throw new Error('Could not create webgl buffer')
  }

  webgl.bindBuffer(webgl.ARRAY_BUFFER, buffer)
  webgl.bufferData(webgl.ARRAY_BUFFER, new Float32Array(array), webgl.STATIC_DRAW);
  return buffer
}
