import { Texture } from "./texture"

export class ImageTexture extends Texture {
  public image = new Image(64, 64)

  get height() { return this.image.height }
  set height(val: number) { this.image.height = val }
  get width() { return this.image.width }
  set width(val: number) { this.image.width = val }

  constructor(webgl: WebGL2RenderingContext, src?: string) {
    super(webgl)
    if (src) { this.src = src }
  }

  set src(val: string) {
    this.image.src = val
    this.image.onload = () => {
      this.bindTexture()
    }
  }

  private bindTexture() {
    const { webgl } = this
    webgl.bindTexture(webgl.TEXTURE_2D, this.webglTexture)
    webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, webgl.RGBA, webgl.UNSIGNED_BYTE, this.image);
    webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_WRAP_S, webgl.CLAMP_TO_EDGE);
    webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_WRAP_T, webgl.CLAMP_TO_EDGE);
  }
}