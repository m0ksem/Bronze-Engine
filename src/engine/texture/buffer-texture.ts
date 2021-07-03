import { WebGLRenderer } from "..";
import { Texture } from "./texture"

export class CanvasTexture extends Texture {
  public frameBuffer

  constructor(render: WebGLRenderer) {
    const { webgl } = render
    super(webgl)

    this.frameBuffer = this.webgl.createFramebuffer()
    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, this.frameBuffer);
    this.webgl.framebufferTexture2D(this.webgl.FRAMEBUFFER, this.webgl.COLOR_ATTACHMENT0, this.webgl.TEXTURE_2D, this.webglTexture, 0);

    this.setTextureSize(render.width, render.height);

    // this.webgl.viewport(0, 0, render.width, render.height);
    // this.webgl.clearColor(0, 0, 0, 0);
    // this.webgl.clear(this.webgl.COLOR_BUFFER_BIT | this.webgl.DEPTH_BUFFER_BIT)

    // const depthBuffer = this.webgl.createRenderbuffer();
    // this.webgl.bindRenderbuffer(this.webgl.RENDERBUFFER, depthBuffer);

    // this.webgl.renderbufferStorage(this.webgl.RENDERBUFFER, this.webgl.DEPTH_COMPONENT16, render.width, render.height);
    // this.webgl.framebufferRenderbuffer(this.webgl.FRAMEBUFFER, this.webgl.DEPTH_ATTACHMENT, this.webgl.RENDERBUFFER, depthBuffer);

    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, null);
  }

  private setTextureSize(width: number, height: number) {
    this.webgl.bindTexture(this.webgl.TEXTURE_2D, this.webglTexture)
    this.webgl.texImage2D(
      this.webgl.TEXTURE_2D, 
      0, 
      this.webgl.RGBA,
      width, 
      height,
      0, 
      this.webgl.RGBA,
      this.webgl.UNSIGNED_BYTE, 
      null
    );
  }

  public render(cb: (...args: any[]) => any) {
    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, this.frameBuffer);
    this.webgl.clear(this.webgl.COLOR_BUFFER_BIT)
    cb()
    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, null);
  }
}