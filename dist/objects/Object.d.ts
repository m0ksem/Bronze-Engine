import { Entity } from "./Entity";
import { Engine } from "../Engine";
import { Material } from "../materials/Material";
import { MTL } from "./mtl";
export default class Object extends Entity {
    private _drawingMode;
    private afterLoadHidden;
    mtl: MTL | null;
    onLoadHandlers: Function[];
    private mtlRequired;
    private mtlRequiredFunction;
    private objLoaded;
    private objFileText;
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
    compile(fileText?: String): void;
    hide(): void;
    show(): void;
    addOnLoadHandler(func: Function): void;
    onload(): void;
    /**
     * Async load object using ajax and compile on load.
     * @param {String} path
     * @public
     */
    loadFromObj(path: string): void;
    loadMTL(path: string): Promise<void>;
    useMaterial(material: Material): void;
    private drawWithMTL;
    copy(): Object;
}
export { Object };
