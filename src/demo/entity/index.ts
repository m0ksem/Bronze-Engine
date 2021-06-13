import './style.css'
import PlantObjSource from './plant/plant.obj?raw'
import PlantMtlSource from './plant/plant.mtl?raw'
import PlantDefuseTexture from './plant/plant.jpg'

import { 
  Engine, PerspectiveCamera, Controls, 
  DefuseShader, Matrix4,
  WebGLRenderer,
  Object3D, ImageTexture
} from '../../engine'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const renderer = new WebGLRenderer(canvas, { cullFace: true, depthTest: true })
const engine = new Engine(renderer)

const camera = new PerspectiveCamera(renderer)
const controls = new Controls(engine)

const defuseShader = new DefuseShader(renderer.webgl)

const plant = new Object3D(engine.renderer.webgl, (PlantObjSource), PlantMtlSource)
plant.setPosition(0, -2, -10)

const plantDefuseTexture = new ImageTexture(renderer.webgl, PlantDefuseTexture)

camera.setPosition(0, 1.5, 0)

engine.renderer.addRenderListener(() => {
  plant.render((object, entity) => {
    const matrix = Matrix4.multiply(camera.matrix, entity.worldMatrix)
    defuseShader.render(matrix, object.verticesBuffer, object.textureCoordinatesBuffer, plantDefuseTexture, object.vertices.length)
  })

  if (controls.mouse.left) {
    camera.rotate(controls.mouse.movement.y, controls.mouse.movement.x, 0)
  }

  if (controls.keyboard.KeyS) {
    camera.move(0, 0, 0.1)
  } else if (controls.keyboard.KeyW) {
    camera.move(0, 0, -0.1)
  } else if (controls.keyboard.KeyA) {
    camera.move(0.1, 0, 0)
  } else if (controls.keyboard.KeyD) {
    camera.move(-0.1, 0, 0)
  }
})
