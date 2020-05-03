import { Material } from "./Material";
import { Engine } from "../Engine";
import Entity from "../objects/Entity";
/**
 * Base class for materials which will attached to objects.
 * @param {Engine} engine
 * @param {Object} [object]
 */
export declare class Glass extends Material {
    constructor(engine: Engine, object: Entity);
    /**
     * Draws object using this material.
     * @param {Object} object
     */
    drawObject(object: Entity): void;
}
declare const _default: {
    Glass: typeof Glass;
};
export default _default;
