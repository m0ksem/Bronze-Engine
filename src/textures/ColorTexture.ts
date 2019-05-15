import { Engine } from "../Engine";
import { Texture } from "./Texture";
import {isPowerOf2} from '../math/Mathematics'

export default class ColorTexture extends Texture {
  public textureBlockLocation: number = -1
  
  constructor(engine: Engine) {
    super(engine)
    this.engine = engine
    this.textureBlockLocation = this.engine.textures.length
    this.engine.textures.push(this)
    let webgl = this.engine.webgl
    this.webglTexture = webgl.createTexture()
    webgl.activeTexture(webgl.TEXTURE0 + this.textureBlockLocation)
    webgl.bindTexture(webgl.TEXTURE_2D, this.webglTexture)
    webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, 1, 1, 0, webgl.RGBA, webgl.UNSIGNED_BYTE, this.color);
    this.engine.textureLoaded(this)
    this.loaded = true
  }
}

export {
  ColorTexture
}