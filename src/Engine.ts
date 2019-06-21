import { getWebGL } from "./webgl/Utils";
import UI from "./ui/UI";
import Camera from "./Camera";
import { Texture } from "./textures/Texture";
import Entity from "./objects/Entity";
import { Debugger } from "./debug/Debugger";
import { Controls } from "./Controls";
import { Shaders } from "./webgl/Shaders";
import Light from "./lights/Light";
import { distance, Vector3 } from "./math/Vector3";
import BronzeError from "./debug/Error";
import { ColorTexture } from "./textures/ColorTexture";

export class Engine {
  public div: HTMLDivElement;
  public canvas: HTMLCanvasElement;
  public webgl: WebGLRenderingContext;
  public width: number;
  public height: number;
  public camera: Camera | null = null;
  public debugger: Debugger | null = null;
  public controls: Controls | null = null;
  public lightsPositions: Array<number> = [];
  public lightsRanges: Array<number> = [];
  public globalLightMinValue: number = 0.5;
  public noTexture: ColorTexture;
  public reflections: boolean = false;
  public status: string = "Creating";
  public selectedObject: Entity | null = null;

  readonly shaders: Shaders;
  readonly textures: Array<Texture> = [];
  readonly lights: Array<Light> = [];

  private _ui: UI | null = null;
  private _objectsWithoutAlpha: Array<Entity> = [];
  private _objectsWithAlpha: Array<Entity> = [];
  private _resourcesLoaded: boolean = false;
  private _texturesLoaded: boolean = false;
  private _objectsLoaded: boolean = false;
  private _loadedObjectsCount: number = 0;
  private _loadedTexturesCount: number = 0;
  private _onResourcesLoadedHandlers: Array<Function> = [];
  private _onObjectSelectedHandlers: Array<Function> = [];
  private _running: boolean = false;
  private _onRun: Array<Function> = [];
  private _onFrameHandlers: Array<Function> = [];

  constructor(div: HTMLDivElement) {
    this.div = div;
    this.width = div.offsetWidth;
    this.height = div.offsetHeight;
    this.canvas = document.createElement("canvas");
    this.canvas.width = div.offsetWidth;
    this.canvas.height = div.offsetHeight;
    this.webgl = getWebGL(this.canvas);

    this.addOnResourcesLoadedListener(() => {
      if (!this.reflections) {
        this.appendCanvas();
        this.status = "Drawing";
      } else {
        this.status = "Creating reflections";
      }
    });

    this.shaders = new Shaders(this.webgl);
    this.shaders.default.use();

    this.webgl.viewport(0, 0, this.width, this.height);
    this.webgl.enable(this.webgl.CULL_FACE);
    this.webgl.enable(this.webgl.DEPTH_TEST);

    this.noTexture = new ColorTexture(this);

    this.infoConsoleLog();
  }

  public set ui(v: UI | null) {
    this._ui = v;
    let objectsCount = this.objects.length + this.ui!.objects.length;

    this._loadedObjectsCount += 1;

    if (this.running && this._loadedObjectsCount == objectsCount) {
      this._objectsLoaded = true;
      if (this._texturesLoaded) {
        this._resourcesLoaded = true;
        this._onResourcesLoadedHandlers.forEach(func => {
          func();
        });
      }
    }
  }

  public get ui(): UI | null {
    return this._ui;
  }

  public get objects(): Entity[] {
    return this._objectsWithoutAlpha.concat(this._objectsWithAlpha);
  }
  public get resourcesLoaded(): boolean {
    return this._resourcesLoaded;
  }

  public get texturesLoaded(): boolean {
    return this._texturesLoaded;
  }

  public get objectsLoaded(): boolean {
    return this._objectsLoaded;
  }

  public get running(): boolean {
    return this._running;
  }

  public appendCanvas() {
    this.div.appendChild(this.canvas);
    this.onCanvasResized();
  }

  /**
   * Attach camera to engine.
   * @param camera
   */
  public setCamera(camera: Camera) {
    this.camera = camera;
  }

  /**
   * Update drawing parameters for correct drawing resized canvas. Use it when canvas resized.
   */
  public onCanvasResized() {
    if (this.canvas.clientWidth != 0) {
      this.canvas.width = this.canvas.clientWidth;
      this.canvas.height = this.canvas.clientHeight;
      this.width = this.canvas.clientWidth;
      this.height = this.canvas.clientHeight;
    }
    this.webgl.viewport(0, 0, this.width, this.height);
  }

  public addObject(object: Entity): void {
    if (object.texture.alpha) {
      this._objectsWithAlpha.push(object);
    } else {
      this._objectsWithoutAlpha.push(object);
    }
  }
  /**
   * Removes objects if its exist
   */
  public removeObject(object: Entity): Entity {
    let index: number = -1;
    if (object.texture.alpha) {
      index = this._objectsWithAlpha.indexOf(object);
      if (index == -1) {
        console.warn("Objects", this.objects);
        new BronzeError("Object not found");
      }
      return this._objectsWithAlpha.splice(index, 1)[0];
    } else {
      index = this._objectsWithoutAlpha.indexOf(object);
      if (index == -1) {
        console.warn("Objects", this.objects);
        new BronzeError("Object not found");
      }
      return this._objectsWithoutAlpha.splice(index, 1)[0];
    }
  }

  public addOnObjectSelectedListener(callback: Function): void {
    this._onObjectSelectedHandlers.push(callback);
  }

  public addOnResourcesLoadedListener(callback: Function): void {
    this._onResourcesLoadedHandlers.push(callback);
  }

  /**
   * Function should be executed when texture loaded and ready to use.
   */
  public textureLoaded(texture: Texture) {
    this._loadedTexturesCount += 1;
    texture.loaded = true;

    if (this.running && this._loadedTexturesCount == this.textures.length) {
      this._texturesLoaded = true;
      if (this.objectsLoaded) {
        this._resourcesLoaded = true;
        this._onResourcesLoadedHandlers.forEach(func => {
          func();
        });
      }
    }
  }

  /**
   * Function should be executed when object loaded and ready to use.
   */
  public objectLoaded(object: Entity) {
    let objectsCount = this.objects.length;
    if (this.ui) {
      objectsCount += this.ui!.objects.length;
    }

    this._loadedObjectsCount += 1;
    object.loaded = true;

    if (this.running && this._loadedObjectsCount >= objectsCount) {
      this._objectsLoaded = true;
      if (this._texturesLoaded) {
        this._resourcesLoaded = true;
        this._onResourcesLoadedHandlers.forEach(func => {
          func();
        });
      }
    }
  }

  public setDrawingRange(range: number) {
    if (this.camera != null) {
      this.camera.range = range;
    } else {
      throw 'Failed to set drawing range. Camera wasn\'t set.';
    }
  }

  public drawToFrameBuffer (framebuffer: WebGLFramebuffer, width: number, height: number, update: boolean = false) {
    const webgl = this.webgl;

    webgl.bindFramebuffer(webgl.FRAMEBUFFER, framebuffer);
    webgl.enable(this.webgl.CULL_FACE);
    webgl.enable(this.webgl.DEPTH_TEST);
    webgl.clearColor(0, 0, 0, 0);
    webgl.clear(webgl.COLOR_BUFFER_BIT | webgl.DEPTH_BUFFER_BIT);
    webgl.viewport(0, 0, width, height);

    if (update) {
      this.update()
    }
    this.draw()

    webgl.bindFramebuffer(webgl.FRAMEBUFFER, null);
    webgl.clearColor(0, 0, 0, 0);
    webgl.clear(webgl.COLOR_BUFFER_BIT | webgl.DEPTH_BUFFER_BIT);
  }

  public captureFrame(
    camera: Camera,
    options?: {
      background?: string | HTMLImageElement;
      width?: number;
      height?: number;
      imageAlpha?: number;
      noDrawObjects?: Entity[];
      drawUI?: boolean;
      backgroundAlpha?: number;
    }
  ): HTMLCanvasElement {
    let currentCamera = this.camera;
    let currentCanvasSize = [this.canvas.width, this.canvas.height];
    let drawUI = false;
    let imageHeight = 128;
    let imageWidth = 128;
    let background: HTMLImageElement | string = "rgba(0, 0, 0, 0)";
    let backgroundAlpha = 1;
    let imageAlpha = 1;
    let noDrawObjects: Entity[] = [];
    if (options != null) {
      drawUI = options.drawUI || drawUI;
      imageHeight = options.height || imageHeight;
      imageWidth = options.width || imageWidth;
      background = options.background || background;
      backgroundAlpha = options.backgroundAlpha || backgroundAlpha;
      imageAlpha = options.imageAlpha || imageAlpha;
      noDrawObjects = options.noDrawObjects || [];
    }
    this.width = imageWidth;
    this.height = imageHeight;
    this.canvas.width = imageWidth;
    this.canvas.height = imageHeight;
    this.onCanvasResized();

    this.camera = camera;
    this.webgl.clear(this.webgl.COLOR_BUFFER_BIT | this.webgl.DEPTH_BUFFER_BIT);
    this.shaders.default.use();
    this.webgl.uniform3fv(this.shaders.default.lightPositionsLocation, this.lightsPositions);
    this.webgl.uniform1fv(this.shaders.default.lightRangesLocation, this.lightsRanges);
    this.webgl.uniform1i(this.shaders.default.lightsCountLocation, this.lights.length);
    this.webgl.uniform1f(this.shaders.default.lightMinValueLocation, this.globalLightMinValue);

    this.update();

    for (let i = 0; i < this.objects.length; i++) {
      const object = this.objects[i];
      if (noDrawObjects.indexOf(object) == -1) {
        if (drawUI || !object.UIElement) {
          object.draw();
        }
      }
    }

    let frame = document.createElement("canvas");
    frame.height = this.canvas.height;
    frame.width = this.canvas.width;
    let context = frame.getContext("2d")!;
    context.globalAlpha = backgroundAlpha;
    if (typeof background === "string") {
      context.fillStyle = background;
      context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    } else if (background.constructor === HTMLImageElement) {
      context.drawImage(background, 0, 0, frame.width, frame.height);
    }
    context.globalAlpha = imageAlpha;
    context.drawImage(this.canvas, 0, 0);

    this.camera = currentCamera;
    this.canvas.width = currentCanvasSize[0];
    this.canvas.height = currentCanvasSize[1];
    this.width = currentCanvasSize[0];
    this.height = currentCanvasSize[1];
    this.onCanvasResized();
    return frame;
  }

  public render() {
    this.beforeFrame();
    this.update();
    this.draw();
  }

  public run() {
    _engine = this;
    this._running = true;
    this.status = "Loading resources";

    if (this._loadedTexturesCount == this.textures.length) {
      this._texturesLoaded = true;
    }

    let objectsCount = this.objects.length;
    if (this.ui) {
      objectsCount += this.ui!.objects.length + 1;
    }

    if (this._loadedObjectsCount == objectsCount) {
      this._objectsLoaded = true;
      if (this.textureLoaded) {
        this._resourcesLoaded = true;
        this._onResourcesLoadedHandlers.forEach(func => {
          func(this.textures.length);
        });
      }
    }

    requestAnimationFrameEngine();
    for (let i = 0; i < this._onRun.length; i++) {
      this._onRun[i];
    }
  }

  public stop() {
    this._running = false;
  }

  public addOnFrameHandler(callback: Function): Function {
    this._onFrameHandlers.push(callback);
    return callback;
  }

  public removeOnFrameHandler(func: Function) {
    let index = this._onFrameHandlers.indexOf(func);
    this._onFrameHandlers.splice(index, 1);
  }

  private beforeFrame() {
    for (let i = 0; i < this._onFrameHandlers.length; i++) {
      const func = this._onFrameHandlers[i];
      func();
    }
  }

  private async update() {
    if (this.camera && this.controls && this.controls.controlFunction) {
      this.camera.moving.set(0, 0, 0);
      this.camera.moving.add(this.camera.animatedMoving);
      this.controls.controlFunction();
      if (this.debugger != null) {
        this.debugger.updateInfo();
      }
      this.camera.isCollision = false
      this.controls.mouse.movement.x = 0;
      this.controls.mouse.movement.y = 0;
    }

    this.selectedObject = null;

    for (let i = this._objectsWithoutAlpha.length; i--;) {
      const object = this._objectsWithoutAlpha[i];
      object.updateMatrixes();
      if (object.checkCollision) {
        object.checkCollision(this.camera!.position, this.camera!.moving, this.camera!.collisionBox, (coordinate: string) => {
          this.camera!.moving[coordinate] = 0;
          this.camera!.isCollision = true;
        });
      }
    }

    for (let i = this._objectsWithAlpha.length; i--;) {
      const object = this._objectsWithAlpha[i];
      object.updateMatrixes();
      if (object.checkCollision) {
        object.checkCollision(this.camera!.position, this.camera!.moving, this.camera!.collisionBox, (coordinate: string) => {
          this.camera!.moving[coordinate] = 0;
          this.camera!.isCollision = true;
        });
      }
    }

    this.camera!.position.move(this.camera!.moving.x, this.camera!.moving.y, this.camera!.moving.z);

    this.camera!.computeMatrix();

    this.ui!.objects.forEach(object => {
      object.updateMatrixes();
      object.update();
    });

    this._objectsWithoutAlpha.forEach((element, index) => {
      element.update();
      if (element.texture.alpha) {
        this._objectsWithAlpha.push(element);
        this._objectsWithoutAlpha.splice(index, 1);
      }
    });

    this._objectsWithAlpha.sort((a, b) => {
      return distance(b.position, this.camera!.position) - distance(a.position, this.camera!.position);
    });

    this._objectsWithAlpha.forEach(element => {
      element.update();
    });

    if (this.selectedObject && this._onObjectSelectedHandlers.length > 0) {
      for (let i = 0; i < this._onObjectSelectedHandlers.length; i++) {
        this._onObjectSelectedHandlers[i]();
      }
    }
  }

  private async draw() {
    this.webgl.clear(this.webgl.COLOR_BUFFER_BIT | this.webgl.DEPTH_BUFFER_BIT);
    this.shaders.default.use();
    this.webgl.uniform3fv(this.shaders.default.lightPositionsLocation, this.lightsPositions);
    this.webgl.uniform1fv(this.shaders.default.lightRangesLocation, this.lightsRanges);
    this.webgl.uniform1i(this.shaders.default.lightsCountLocation, this.lights.length);
    this.webgl.uniform1f(this.shaders.default.lightMinValueLocation, this.globalLightMinValue);
    this.shaders.shadersRequireLights.forEach(shader => {
      shader.use();
      this.webgl.uniform3fv(shader.lightPositionsLocation, this.lightsPositions);
      this.webgl.uniform1fv(shader.lightRangesLocation, this.lightsRanges);
      this.webgl.uniform1i(shader.lightsCountLocation, this.lights.length);
      this.webgl.uniform1f(shader.lightMinValueLocation, this.globalLightMinValue);
    });

    this.ui!.draw();

    this.objects.forEach(async (object) => {
      await object.draw();
    });

    this._objectsWithAlpha.forEach(object => {
      object.draw();
    });

    this.ui!.drawUI();
  }

  private infoConsoleLog() {
    console.log();
    console.log("   %c%s", "color: rgba(247, 137, 74, 1); text-align: center; font-size: 16px; font-weight: 700", "Bronze Engine is running");
    console.log();
    console.info("   Version : 0.3.00");
    console.info("   Docs  : http://m0ksem.design/Bronze-Engine/docs/global");
    console.info("   GitHub  : https://github.com/m0ksem/Bronze-Engine");
    console.info("   Author  : https://github.com/m0ksem");
    console.log();
  }
}

export default Engine;

let _engine: Engine;

/**
 * RequestAnimationFrame wrapper for Engine rendering.
 * @private
 */
function requestAnimationFrameEngine() {
  requestAnimationFrame(requestAnimationFrameEngine);
  if (!_engine.running) {
    return;
  }
  _engine.render();
}

(function() {
  let lastTime = 0;
  let vendors = ["ms", "moz", "webkit", "o"];
  let win: any = window as any;
  for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = win[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame = win[vendors[x] + "CancelAnimationFrame"] || win[vendors[x] + "CancelRequestAnimationFrame"];
  }

  if (!window.requestAnimationFrame)
    window.requestAnimationFrame = function(callback: Function) {
      let currTime = new Date().getTime();
      let timeToCall = Math.max(0, 16 - (currTime - lastTime));
      let id = window.setTimeout(function() {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

  if (!window.cancelAnimationFrame)
    window.cancelAnimationFrame = function(id) {
      clearTimeout(id);
    };
})();
