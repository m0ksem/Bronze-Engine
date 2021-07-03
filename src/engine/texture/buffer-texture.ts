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

    const depthBuffer = this.webgl.createRenderbuffer();
    this.webgl.bindRenderbuffer(this.webgl.RENDERBUFFER, depthBuffer);

    this.webgl.renderbufferStorage(this.webgl.RENDERBUFFER, this.webgl.DEPTH_COMPONENT16, render.width, render.height);
    this.webgl.framebufferRenderbuffer(this.webgl.FRAMEBUFFER, this.webgl.DEPTH_ATTACHMENT, this.webgl.RENDERBUFFER, depthBuffer);

    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, null);
  }

  public render(cb: (...args: any[]) => any) {
    this.webgl.clearColor(0, 0, 0, 0)
    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, this.frameBuffer);
    cb()
    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, null);
  }
}