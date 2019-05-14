export function getWebGLById(id: string): WebGLRenderingContext {
  let el: HTMLElement | null = document.getElementById(id);
  if (!(el instanceof HTMLCanvasElement) && el == null) {
    throw new TypeError("Object with " + id + " not a canvas.");
  }
  let canvas: HTMLCanvasElement = el as HTMLCanvasElement;
  let webGL = canvas.getContext("experimental-webgl", {
    alpha: false
  });
  if (webGL == null) {
    throw new WebglError("Cannot get WebGL context.");
  }
  window.addEventListener("resize", function() {
    canvas!.width = canvas!.offsetWidth;
    canvas!.height = canvas!.offsetHeight;
  });
  return webGL!;
}

export function getWebGL(canvas: HTMLCanvasElement): WebGLRenderingContext {
  let webGL = canvas.getContext("experimental-webgl");
  if (webGL == null) {
    throw new WebglError("Cannot get WebGL context.");
  }
  window.addEventListener("resize", function() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  });
  return webGL!;
}

export function compileShader(shaderText: string, type: string, webGL: WebGLRenderingContext) {
  let source = shaderText;

  let shader;

  if (type == "fragment") {
    shader = webGL.createShader(webGL.FRAGMENT_SHADER);
  } else if (type == "vertex") {
    shader = webGL.createShader(webGL.VERTEX_SHADER);
  } else {
    console.log("Wrong shader type");
    return null;
  }

  if (shader == null) {
    throw new WebglError("Cannot create shader.");
  }

  webGL.shaderSource(shader, source);
  webGL.compileShader(shader);

  if (!webGL.getShaderParameter(shader, webGL.COMPILE_STATUS)) {
    throw new WebglError("Could not compile shader:" + webGL.getShaderInfoLog(shader));
  }

  return shader;
}

export function createWebGLProgram(webGL: WebGLRenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader, deleteShaders: boolean) {
  let shaderProgram: WebGLProgram = webGL.createProgram()!;

  webGL.attachShader(shaderProgram, vertexShader);
  webGL.attachShader(shaderProgram, fragmentShader);

  webGL.linkProgram(shaderProgram);
  webGL.useProgram(shaderProgram);

  if (deleteShaders) {
    webGL.deleteShader(vertexShader);
    webGL.deleteShader(fragmentShader);
  }

  return shaderProgram;
}

class WebglError extends Error {
  readonly name: string = "WebglError";

  constructor(message: string) {
    super(message);
    Error.captureStackTrace(this, WebglError);
  }
}

export default {
  createWebGLProgram,
  compileShader,
  getWebGL,
  getWebGLById
};
