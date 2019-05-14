import { Engine } from '../Engine';
import Entity from './Entity';
export declare class Skybox extends Entity {
    constructor(engine: Engine);
    updateMatrixes(): void;
    /**
     * Updating camera matrix for drawing Skybox
     */
    update(): void;
    /**
     * Function draws skybox
     */
    draw(): void;
}
