export class Keyboard {
  [key: string]: any

  onKeydown(e: KeyboardEvent) {
    this[e.key] = true
  }

  onKeyup(e: KeyboardEvent) {
    delete this[e.key]
  }
}