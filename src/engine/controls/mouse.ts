export class Mouse {
  x: number = -1
  y: number = -1

  movement: { x: number, y: number} = { x: 0, y: 0 }

  left: boolean = false
  middle: boolean = false
  right: boolean = false

  sensitivity = 0.005

  onMouseDown(e: MouseEvent) {
    const buttons = ['left', 'middle', 'right']
    this[buttons[e.button] as 'left' | 'middle' |'right'] = true
  }

  onMouseUp(e: MouseEvent) {
    const buttons = ['left', 'middle', 'right']
    this[buttons[e.button] as 'left' | 'middle' |'right'] = false
  }

  onMouseMove(e: MouseEvent) {
    this.movement.x = e.movementX * this.sensitivity
    this.movement.y = e.movementY * this.sensitivity 
    this.x = e.offsetX
    this.y = - e.offsetY
  }
}
