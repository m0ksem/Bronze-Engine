import { Entity } from "./Entity";
import { Engine } from "../Engine";
import { Material } from "../materials/Material";
export default class Object extends Entity {
    private _drawingMode;
    constructor(engine: Engine);
    /**
     * Sets how WebGL will draw object
     * @param {String} mode
     */
    setDrawingMode(mode: string): void;
    drawingMode: any;
    /**
     * Function to compile object from text of .obj file.
     * @param {String} fileText
     * @public
     */
    compile(fileText: String): void;
    onload(): void;
    /**
     * Async load object using ajax and compile on load.
     * @param {String} path
     * @public
     */
    loadFromObj(path: string): void;
    useMaterial(material: Material): void;
}
export { Object };
