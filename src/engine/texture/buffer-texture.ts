import { WebGLRenderer } from "..";
import { Texture } from "./texture"
import { createTexture } from "./utils";

export class BufferTexture extends Texture {
  public frameBuffer
  public depthBuffer

  private textureFormat: number

  constructor(render: WebGLRenderer, textureFormat?: number) {
    const { webgl } = render
    super(webgl)

    this.textureFormat = textureFormat || webgl.RGBA

    this.frameBuffer = this.webgl.createFramebuffer()
    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, this.frameBuffer);
    this.webgl.framebufferTexture2D(this.webgl.FRAMEBUFFER, this.webgl.COLOR_ATTACHMENT0, this.webgl.TEXTURE_2D, this.webglTexture, 0);

    this.setTextureSize(render.width, render.height);

    this.depthBuffer = this.webgl.createRenderbuffer();
    this.webgl.bindRenderbuffer(this.webgl.RENDERBUFFER, this.depthBuffer);

    this.webgl.renderbufferStorage(this.webgl.RENDERBUFFER, this.webgl.DEPTH_COMPONENT16, render.width, render.height);

    this.webgl.bindRenderbuffer(this.webgl.RENDERBUFFER, null);
    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, null);
  }

  override createWebglTexture(index: number) {
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

  public clear() {
    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, this.frameBuffer);

    this.webgl.framebufferRenderbuffer(
      this.webgl.FRAMEBUFFER,
      this.webgl.DEPTH_ATTACHMENT,
      this.webgl.RENDERBUFFER,
      this.depthBuffer
    )
    
    this.webgl.clearDepth(1.0);
    this.webgl.clear(this.webgl.COLOR_BUFFER_BIT | this.webgl.DEPTH_BUFFER_BIT);

    this.webgl.framebufferRenderbuffer(
      this.webgl.FRAMEBUFFER,
      this.webgl.DEPTH_ATTACHMENT,
      this.webgl.RENDERBUFFER,
      null
    )

    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, null);
  }

  public render(cb: (...args: any[]) => any) {
    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, this.frameBuffer);

    this.webgl.framebufferRenderbuffer(
      this.webgl.FRAMEBUFFER,
      this.webgl.DEPTH_ATTACHMENT,
      this.webgl.RENDERBUFFER,
      this.depthBuffer
    )

    cb()

    this.webgl.framebufferRenderbuffer(
      this.webgl.FRAMEBUFFER,
      this.webgl.DEPTH_ATTACHMENT,
      this.webgl.RENDERBUFFER,
      null
    )
    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, null);
  }
}