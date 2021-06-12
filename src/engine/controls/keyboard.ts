export class Keyboard {
  [key: string]: any

  onKeydown(e: KeyboardEvent) {
    this[e.code] = true
  }

  onKeyup(e: KeyboardEvent) {
    delete this[e.code]
  }
}