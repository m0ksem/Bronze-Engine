import { createTexture } from './utils'

export class Texture {
  protected static texturesCount = 0

  public textureIndex = -1

  protected webgl: WebGL2RenderingContext
  protected webglTexture: WebGLTexture
  protected color = new Uint8Array([229, 91, 91, 255])

  constructor(ctx: WebGL2RenderingContext) {
    this.textureIndex =Texture.texturesCount
    Texture.texturesCount += 1
    this.webgl = ctx
    this.webglTexture = this.createWebglTexture(this.textureIndex)
  }

  private createWebglTexture(index: number) {
    const { webgl } = this
    const webglTexture = createTexture(webgl)
    webgl.activeTexture(webgl.TEXTURE0 + index)
    webgl.bindTexture(webgl.TEXTURE_2D, webglTexture)
    webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, 1, 1, 0, webgl.RGBA, webgl.UNSIGNED_BYTE, this.color);
    webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_WRAP_S, webgl.CLAMP_TO_EDGE);
    webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_WRAP_T, webgl.CLAMP_TO_EDGE);
    webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MIN_FILTER, webgl.LINEAR);

    return webglTexture
  }
}