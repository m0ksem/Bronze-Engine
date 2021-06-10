import './styles/style.css'
import { SkyboxShader, Engine, SkyboxTexture, PerspectiveCamera, Controls, WebGLRenderer } from '../../engine'
import skyboxImage from './recourses/skyboxes/skybox.png'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const renderer = new WebGLRenderer(canvas)
const engine = new Engine(renderer)
const camera = new PerspectiveCamera(renderer)
const controls = new Controls(engine)

const skyboxShader = new SkyboxShader(renderer.webgl)

const skyboxTexture = new SkyboxTexture(renderer.webgl)
skyboxTexture.src = skyboxImage

engine.renderer.addRenderListener(() => {
  skyboxShader.render(camera.matrix, skyboxTexture)

  if (controls.mouse.left) {
    camera.rotate(controls.mouse.movement.y, controls.mouse.movement.x, 0)
  }
})
