import { createTexture } from './utils'

export abstract class Texture {
  public textureIndex = 0

  protected webgl: WebGL2RenderingContext
  protected webglTexture: WebGLTexture | null = null
  protected color = new Uint8Array([229, 91, 91, 255])

  constructor(ctx: WebGL2RenderingContext, noDefaultTexture?: boolean) {
    this.webgl = ctx

    if (!noDefaultTexture) {
      this.webglTexture = this.createWebglTexture(this.textureIndex)
    }
  }

  public activeTexture(index: number = 0) {
    this.webgl.activeTexture(this.webgl.TEXTURE0 + index)
    this.webgl.bindTexture(this.webgl.TEXTURE_2D, this.webglTexture)
    this.textureIndex = index
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