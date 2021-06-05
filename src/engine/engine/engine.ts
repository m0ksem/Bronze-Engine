import { WebGLRenderer } from "../renderer";

export class Engine {
  public renderer: WebGLRenderer

  private requestAnimationFrameIndex = -1;

  constructor(canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    this.renderer = new WebGLRenderer(canvas);
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
