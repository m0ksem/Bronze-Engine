export function getWebgl2Context(canvas: HTMLCanvasElement) {
  const webgl = canvas.getContext("webgl2")

  if (webgl === null) {
    throw new Error("Can not get webgl context")
  }

  return webgl
}

export function getContext2D(canvas: HTMLCanvasElement) {
  const context = canvas.getContext("2d")

  if (context === null) {
    throw new Error("Can not get context")
  }

  return context
}