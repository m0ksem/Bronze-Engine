import { setupHook, getWebgl2Context } from "../utils"

export class WebGLRenderer {
  public webgl: WebGL2RenderingContext
  public canvas: HTMLCanvasElement

  get width() { return this.canvas.width } 
  get height() { return this.canvas.height }

  public addBeforeRenderListener: (fh: (ctx: WebGL2RenderingContext) => void) => void
  private beforeRender: (ctx: WebGL2RenderingContext) => void

  public addAfterRenderListener: (fh: (ctx: WebGL2RenderingContext) => void) => void
  private afterRender: (ctx: WebGL2RenderingContext) => void

  public addRenderListener: (fh: (ctx: WebGL2RenderingContext) => void) => void
  private render: (ctx: WebGL2RenderingContext) => void

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.webgl = getWebgl2Context(canvas)

    const beforeRenderHook = setupHook<[WebGL2RenderingContext]>()
    this.addBeforeRenderListener = beforeRenderHook.addHandler
    this.beforeRender = beforeRenderHook.execute

    const afterRenderHook = setupHook<[WebGL2RenderingContext]>()
    this.addAfterRenderListener = afterRenderHook.addHandler
    this.afterRender = afterRenderHook.execute

    const renderHook = setupHook<[WebGL2RenderingContext]>()
    this.addRenderListener = renderHook.addHandler
    this.render = renderHook.execute
  }

  renderCycle() {
    this.beforeRender(this.webgl)
    this.render(this.webgl)
    this.afterRender(this.webgl)
  }
}