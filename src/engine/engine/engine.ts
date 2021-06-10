import { WebGLRenderer } from "../renderer";

export class Engine {
  public renderer: WebGLRenderer

  private requestAnimationFrameIndex = -1;

  constructor(renderer: WebGLRenderer) {
    this.renderer = renderer;
    this.start()
  }

  start() {
    this.requestAnimationFrameIndex = requestAnimationFrame(() => {
      this.renderer.renderCycle()
      this.start()
    })
  }

  stop() {
    cancelAnimationFrame(this.requestAnimationFrameIndex)
  }
}
