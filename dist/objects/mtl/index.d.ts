import { Texture } from '../../textures/Texture';
import { Engine } from '../../Engine';
export declare class MTL {
    elements: MTLElement[];
    constructor(fileText: String, engine: Engine, path: String);
    getElementByName(name: String): MTLElement | null;
}
export declare class MTLElement {
    webgl: WebGLRenderingContext;
    name: String;
    vertexes: number[];
    textureCoordinates: number[];
    normals: number[];
    vertexesBuffer: WebGLBuffer | null;
    textureCoordinatesBuffer: WebGLBuffer | null;
    normalsBuffer: WebGLBuffer | null;
    texture: Texture;
    constructor(name: String, engine: Engine);
    commit(): void;
}
