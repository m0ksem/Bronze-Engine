import './style.css'
import KittenObjSource from './kitten.obj?raw'
import CubeObjSource from './cube.obj?raw'
import { 
  Engine, PerspectiveCamera, Controls, 
  NormalShader, Matrix4,
  WebGLRenderer,
  Object3D
} from '../../engine'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const renderer = new WebGLRenderer(canvas, { cullFace: true, depthTest: true })
const engine = new Engine(renderer)

const camera = new PerspectiveCamera(renderer)
const controls = new Controls(engine)

const normalShader = new NormalShader(renderer.webgl)

const kitten = new Object3D(engine.renderer.webgl, KittenObjSource)
kitten.setPosition(0, 0, -10)
kitten.setRotation(0, 0, 180)

const cube = new Object3D(engine.renderer.webgl, CubeObjSource)
cube.setPosition(-5, 0, -10)

camera.setPosition(0, 1.5, 0)

engine.renderer.addRenderListener(() => {
  kitten.render((object, entity) => {
    const matrix = Matrix4.multiply(camera.matrix, entity.worldMatrix)
    normalShader.render(matrix, object.verticesBuffer, object.normalsBuffer, object.vertices.length)
  })

  cube.render((object, entity) => {
    const matrix = Matrix4.multiply(camera.matrix, entity.worldMatrix)
    normalShader.render(matrix, object.verticesBuffer, object.normalsBuffer, object.vertices.length)
  })

  if (controls.mouse.left) {
    camera.rotate(controls.mouse.movement.y, controls.mouse.movement.x, 0)
  }

  if (controls.keyboard.s) {
    camera.move(0, 0, 0.1)
  } else if (controls.keyboard.w) {
    camera.move(0, 0, -0.1)
  } else if (controls.keyboard.a) {
    camera.move(0.1, 0, 0)
  } else if (controls.keyboard.d) {
    camera.move(-0.1, 0, 0)
  }
})
