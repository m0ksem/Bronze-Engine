import { Engine } from '../engine';
import { Keyboard } from './keyboard';
import { Mouse } from './mouse';


export class Controls {
  public keyboard = new Keyboard()
  public mouse = new Mouse()

  constructor(engine: Engine) {
    window.addEventListener('keydown', (e) => this.keyboard.onKeydown(e))
    window.addEventListener('keyup', (e) => this.keyboard.onKeyup(e))

    window.addEventListener('mousedown', (e) => this.mouse.onMouseDown(e))
    window.addEventListener('mouseup', (e) => this.mouse.onMouseUp(e))
    window.addEventListener('mousemove', (e) => this.mouse.onMouseMove(e))

    engine.renderer.addAfterRenderListener(() => {
      // Clear mouse movement because there is no event while mouse is not moving in DOM
      this.mouse.movement.x = 0
      this.mouse.movement.y = 0
    })
  }
}