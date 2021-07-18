import { setupHook, getWebgl2Context } from "../utils"

interface WebGLRendererOptions {
  viewport?: { x: number; y: number, width: number; height: number },
  cullFace?: boolean,
  depthTest?: boolean
  blend?: boolean
}

function applyWebGLRendererOptions(webgl: WebGL2RenderingContext, options: WebGLRendererOptions) {
  if (options.viewport) {
    webgl.viewport(options.viewport.x, options.viewport.y, options.viewport.width, options.viewport.height)
  }

  if (options.depthTest) {
    webgl.enable(webgl.DEPTH_TEST)
  }

  if (options.cullFace) {
    webgl.enable(webgl.CULL_FACE)
  }

  if (options.blend) {
    // Enabling alpha for light
    webgl.enable(webgl.BLEND)
    webgl.blendFunc(webgl.ONE, webgl.ONE_MINUS_SRC_ALPHA)
  }

  if (!webgl.getExtension("EXT_color_buffer_float")) {
    console.error("FLOAT color buffer not available");
  }
}

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

  constructor(canvas: HTMLCanvasElement, options: WebGLRendererOptions = { blend: true }) {
    this.canvas = canvas
    this.webgl = getWebgl2Context(canvas)
    applyWebGLRendererOptions(this.webgl, options)

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
    this.webgl.clear(this.webgl.COLOR_BUFFER_BIT)
    this.beforeRender(this.webgl)
    this.render(this.webgl)
    this.afterRender(this.webgl)
  }
}