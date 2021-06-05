export function createTexture(webgl: WebGLRenderingContextBase) {
  const texture = webgl.createTexture()

  if (texture === null) {
    throw new Error('Could not create texture')
  }

  return texture
}