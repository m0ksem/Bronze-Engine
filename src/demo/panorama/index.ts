import './styles/style.css'
import { SkyboxShader, Engine, SkyboxTexture, PerspectiveCamera, Controls } from '../../engine'
import skyboxImage from './recourses/skyboxes/skybox.png'

const canvas = document.getElementById('canvas') as HTMLCanvasElement

const engine = new Engine(canvas)

const skyboxTexture = new SkyboxTexture(engine.renderer.webgl)
skyboxTexture.src = skyboxImage

const skyboxShader = new SkyboxShader(engine.renderer.webgl)

const camera = new PerspectiveCamera(engine.renderer)
const controls = new Controls(engine)

engine.renderer.addRenderListener(() => {
  skyboxShader.render(camera.matrix, skyboxTexture)

  if (controls.mouse.left) {
    camera.rotate(controls.mouse.movement.y, controls.mouse.movement.x, 0)
  }
})
