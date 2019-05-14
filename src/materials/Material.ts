import { Engine } from "../Engine";
import Entity from "../objects/Entity";
import ShaderProgram from "../webgl/ShaderProgram";
import { ReflectionTexture } from "../textures/ReflectionTexture";

export abstract class Material implements MaterialInterface {
  public defaultDraw: Function | null = null;
  protected engine: Engine;
  private _object: Entity | null;
  protected webgl: WebGLRenderingContext;
  protected shaderProgram: ShaderProgram | null = null;

  constructor (engine: Engine, object: Entity) {
    this.engine = engine
    this._object = object || null
    this.webgl = engine.webgl
  }

  
  public get object() : Entity | null {
    return this._object
  }
  
  public set object(v : Entity | null) {
    this._object = v;
    if (v != null && v.texture instanceof ReflectionTexture) {
      v.texture.object = v
      v!.update()
      v!.updateMatrixes()
    }
  }
  

  /**
   * Adds shader for material.
   */
  public setShaderProgram (shaderProgram: ShaderProgram): void {
    this.shaderProgram = shaderProgram
  }

  /**
   * Draw object method for this material.
   * 
   */
  public drawObject(object: Entity): void {
    throw new Error("Method not implemented.");
  }
}

interface MaterialInterface {
  drawObject (object: Entity): void
  defaultDraw: Function | null
}