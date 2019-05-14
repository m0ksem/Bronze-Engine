import { Engine } from "../Engine";
import Entity from "../objects/Entity";
import ShaderProgram from "../webgl/ShaderProgram";
export declare abstract class Material implements MaterialInterface {
    defaultDraw: Function | null;
    protected engine: Engine;
    private _object;
    protected webgl: WebGLRenderingContext;
    protected shaderProgram: ShaderProgram | null;
    constructor(engine: Engine, object: Entity);
    object: Entity | null;
    /**
     * Adds shader for material.
     */
    setShaderProgram(shaderProgram: ShaderProgram): void;
    /**
     * Draw object method for this material.
     *
     */
    drawObject(object: Entity): void;
}
interface MaterialInterface {
    drawObject(object: Entity): void;
    defaultDraw: Function | null;
}
export {};
