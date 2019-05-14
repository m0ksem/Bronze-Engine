import { CubeTexture } from './CubeTexture';
import { Engine } from '../Engine';
import Entity from '../objects/Entity';
/**
 * Reflection texture.
 */
export declare class ReflectionTexture extends CubeTexture {
    private _background;
    private _quality;
    private _reflectionAlpha;
    private _object;
    private _camera;
    constructor(engine: Engine, background: string | HTMLImageElement, quality: number, reflectionAlpha: string | number);
    object: Entity;
    protected generate(): void;
    protected bindCubeTexture(): void;
}
