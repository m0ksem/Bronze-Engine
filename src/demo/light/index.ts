import './style.css'
import PlantObjSource from './plant/plant.obj?raw'
import PlantDefuseTexture from './plant/plant.jpg'

import { 
  Engine, PerspectiveCamera, Controls, 
  DirectionalLightShader,
  WebGLRenderer,
  Object3D, Matrix4,
  CanvasTexture,
  NormalShader,
  DefuseShader,
  ImageTexture
} from '../../engine'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const renderer = new WebGLRenderer(canvas, { cullFace: true, depthTest: true, blend: true })
const engine = new Engine(renderer)

const camera = new PerspectiveCamera(renderer)
const controls = new Controls(engine)

const directionalLightShader = new DirectionalLightShader(renderer.webgl)

const defuseTexture = new CanvasTexture(renderer)
const defuseShader = new DefuseShader(renderer.webgl)
const plantDefuseTexture = new ImageTexture(renderer.webgl, PlantDefuseTexture)

const normalTexture = new CanvasTexture(renderer)
const normalShader = new NormalShader(renderer.webgl)

const plant = new Object3D(renderer.webgl, PlantObjSource)
plant.setPosition(0, -2, -10)

camera.setPosition(0, 1.5, 0)

engine.renderer.addRenderListener(() => {
  normalTexture.clear()
  defuseTexture.clear()

  plant.render((object, entity) => {
    const matrix = Matrix4.multiply(camera.matrix, entity.worldMatrix)
  
    normalTexture.render(() => {
      normalShader.render(matrix, object.verticesBuffer, object.normalsBuffer, object.vertices.length)
    })
  
    defuseTexture.render(() => {
      defuseShader.render(matrix, object.verticesBuffer, object.textureCoordinatesBuffer, plantDefuseTexture, object.vertices.length)
    })
  })

  directionalLightShader.render(defuseTexture, normalTexture, [1, 0, 0])
  

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
