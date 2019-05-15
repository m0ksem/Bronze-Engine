import { perspective, unit } from "../math/Matrixes4";
import { Engine } from "../Engine";
import { Entity } from "../objects/Entity";
import { Texture } from "../textures/Texture";
import ShaderProgram from "../webgl/ShaderProgram";

/**
 * @class
 * @constructor
 * @param {Engine} e
 */
export default class UI {
  canvas: HTMLCanvasElement;
  div: HTMLDivElement;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
  context: CanvasRenderingContext2D;
  objects: Array<Entity>;
  htmlElements: Array<uiHTMLElement>;
  engine: Engine;
  private webgl: WebGLRenderingContext;
  private _screen: Screen;
  private _texture: any;
  private _webglTexture: any;
  private frameBuffer: any;
  Screen = Screen;
  images: uiHTMLElement[] = [];

  constructor(engine: Engine) {
    this.width = engine.div.offsetWidth;
    this.height = engine.div.offsetHeight;

    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.position = "absolute";
    this.canvas.style.height = "100%";
    this.canvas.style.width = "100%";
    this.canvas.style.zIndex = "999999";
    this.canvas.style.left = "0";
    this.canvas.style.right = "0";
    this.canvas.style.top = "0";
    

    this.div = document.createElement("div");
    this.div.style.position = "absolute";
    this.div.style.height = "100%";
    this.div.style.width = "100%";
    this.div.style.zIndex = "999999";
    this.div.style.left = "0";
    this.div.style.right = "0";
    this.div.style.top = "0";

    engine.div.appendChild(this.canvas);
    engine.div.appendChild(this.div);

    this.centerX = this.width / 2;
    this.centerY = this.height / 2;

    this.context = this.canvas.getContext("2d")!;

    this.objects = [];

    this.htmlElements = [];

    engine.ui = this;
    this.engine = engine;
    this.webgl = engine.webgl;

    this._screen = new Screen(this.engine);

    this._texture = { _textureBlockLocation: this.engine.textures.length };
    this.engine.textures.push(this._texture);
    this.engine.textureLoaded(this._texture);
    this.engine.webgl.activeTexture(this.engine.webgl.TEXTURE0 + this._texture._textureBlockLocation);

    this._webglTexture = this.webgl.createTexture();
    this.webgl.bindTexture(this.webgl.TEXTURE_2D, this._webglTexture);

    this.webgl.texImage2D(this.webgl.TEXTURE_2D, 0, this.webgl.RGBA, this.width, this.height, 0, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, null);

    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MAG_FILTER, this.webgl.NEAREST);
    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MIN_FILTER, this.webgl.NEAREST);
    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.CLAMP_TO_EDGE);
    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.CLAMP_TO_EDGE);

    this.frameBuffer = this.webgl.createFramebuffer();
    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, this.frameBuffer);
    this.webgl.framebufferTexture2D(this.webgl.FRAMEBUFFER, this.webgl.COLOR_ATTACHMENT0, this.webgl.TEXTURE_2D, this._webglTexture, 0);

    const depthBuffer = this.webgl.createRenderbuffer();
    this.webgl.bindRenderbuffer(this.webgl.RENDERBUFFER, depthBuffer);

    this.webgl.renderbufferStorage(this.webgl.RENDERBUFFER, this.webgl.DEPTH_COMPONENT16, this.width, this.height);
    this.webgl.framebufferRenderbuffer(this.webgl.FRAMEBUFFER, this.webgl.DEPTH_ATTACHMENT, this.webgl.RENDERBUFFER, depthBuffer);

    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, null);
  }

  /**
   * Adds object to draw.
   * @param element some UI element.
   */
  addObject(object: Entity) {
    this.objects.push(object);
    this.engine.removeObject(object);
  }

  /**
   * Removes element from drawing function.
   * @param element
   */
  removeObject(object: Entity) {
    let index = this.objects.indexOf(object);
    if (index != -1) {
      this.objects.splice(index, 1);
      this.engine.addObject(object);
    } else {
      console.warn("Object not found");
    }
  }

  /**
   * Adding DOM element upper game engine canvas.
   * @param element
   * @param position.vertical from 0 to 100
   */
  appendDOMElement(element: HTMLElement, name: string) {
    this.div.appendChild(element);
    this.htmlElements.push(new uiHTMLElement(name, element));

    return element;
  }


  addImage(image: HTMLImageElement, width: number, height: number, x: number, y: number) {
    image.width = width
    image.height = height
    this.images.push(new uiHTMLElement('', image))

    return image
  }

  hide (element: HTMLElement) {
    element.style.display = 'none'
  }

  show (element: HTMLElement) {
    element.style.display = 'block'
  }

  /**
   * Draws image on canvas. Read about addImage
   * @param image
   */
  drawImage(image: HTMLImageElement | HTMLCanvasElement) {
    this.context.drawImage(image, 0, 0);
  }

  /**
   * Clear canvas
   */
  clearCanvas() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  draw() {
    const webgl = this.engine.webgl;

    webgl.bindFramebuffer(webgl.FRAMEBUFFER, this.frameBuffer);
    webgl.enable(this.webgl.CULL_FACE);
    webgl.enable(this.webgl.DEPTH_TEST);
    webgl.clearColor(0, 0, 0, 0);
    webgl.clear(webgl.COLOR_BUFFER_BIT | webgl.DEPTH_BUFFER_BIT);

    webgl.viewport(0, 0, this.engine.width, this.engine.height);

    this.objects.forEach(object => {
      object.draw();
    });

    this._screen.setTexture(this._texture);
    webgl.bindFramebuffer(webgl.FRAMEBUFFER, null);

    webgl.clearColor(0, 0, 0, 0);
    webgl.clear(webgl.COLOR_BUFFER_BIT | webgl.DEPTH_BUFFER_BIT);
  }

  drawUI() {
    this._screen.draw();
  }
}

class Screen {
  webgl: WebGLRenderingContext;
  engine: Engine;
  shaderProgram: ShaderProgram;
  vertexes: number[];
  textureCoords: number[];
  vertexesBuffer: any;
  coordsBuffer: any;
  normalBuffer: any;
  texture: any;
  constructor(engine: Engine) {
    this.webgl = engine.webgl;
    this.engine = engine;
    this.shaderProgram = engine.shaders.screen;

    this.webgl.enable(this.webgl.CULL_FACE);
    this.webgl.enable(this.webgl.DEPTH_TEST);

    this.vertexes = [-1, -1, -1, 1, 1, -1, -1, 1, -1, 1, 1, -1, -1, -1, -1, 1, -1, -1];

    this.textureCoords = [0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0];

    this.vertexesBuffer = this.webgl.createBuffer();
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.vertexesBuffer);
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webgl.STATIC_DRAW);

    this.coordsBuffer = this.webgl.createBuffer();
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.coordsBuffer);
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.textureCoords), this.webgl.STATIC_DRAW);
  }

  setTexture(texture: Texture) {
    this.texture = texture;
  }

  draw() {
    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, null);

    this.shaderProgram.use();

    this.engine.webgl.enableVertexAttribArray(this.shaderProgram.positionLocation);
    this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, this.vertexesBuffer);
    this.engine.webgl.vertexAttribPointer(this.shaderProgram.positionLocation, 3, this.engine.webgl.FLOAT, false, 0, 0);

    this.engine.webgl.enableVertexAttribArray(this.shaderProgram.texcoordLocation);
    this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, this.coordsBuffer);
    this.engine.webgl.vertexAttribPointer(this.shaderProgram.texcoordLocation, 2, this.engine.webgl.FLOAT, false, 0, 0);

    this.engine.webgl.uniform1i(this.shaderProgram.textureLocation, this.texture._textureBlockLocation);

    this.engine.webgl.drawArrays(this.engine.webgl.TRIANGLES, 0, this.vertexes.length / 3);
  }
}

export class uiHTMLElement {
  public name: string;
  public el: HTMLElement;

  constructor(name: string, el: HTMLElement) {
    this.name = name;
    this.el = el;
  }

  hide() {
    this.el.style.display = "none";
  }

  show() {
    this.el.style.display = "block";
  }
}

export { UI };
