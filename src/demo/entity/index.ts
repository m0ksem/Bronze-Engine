import './style.css'
import KittenObj from './kitten.obj?raw'
import CubeObj from './cube.obj?raw'
import skyboxImage from './skybox.png'
import { 
  Engine, PerspectiveCamera, Controls, 
  objParser, NormalShader, Matrix4,
  SkyboxTexture, SkyboxShader, WebGLRenderer 
} from '../../engine'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const renderer = new WebGLRenderer(canvas, { cullFace: true, depthTest: true })
const engine = new Engine(renderer)

const camera = new PerspectiveCamera(renderer)
const controls = new Controls(engine)

const skyboxShader = new SkyboxShader(engine.renderer.webgl)
const normalShader = new NormalShader(renderer.webgl)

function createBuffer (array: number[]) {
  const buffer = engine.renderer.webgl.createBuffer()!
  engine.renderer.webgl.bindBuffer(renderer.webgl.ARRAY_BUFFER, buffer)
  engine.renderer.webgl.bufferData(renderer.webgl.ARRAY_BUFFER, new Float32Array(array), renderer.webgl.STATIC_DRAW);
  return buffer
}

const kittenObj = objParser.parse(KittenObj)[0]
const kitten = {
  vertices: createBuffer(kittenObj.vertices),
  normals: createBuffer(kittenObj.normals),
  verticesLength: kittenObj.vertices.length
}

const cubeObj = objParser.parse(CubeObj)[0]
const cube = {
  vertices: createBuffer(cubeObj.vertices),
  normals: createBuffer(cubeObj.normals),
  verticesLength: cubeObj.vertices.length
}

const skyboxTexture = new SkyboxTexture(engine.renderer.webgl)
skyboxTexture.src = skyboxImage

camera.setPosition(0, 1.5, 0)

engine.renderer.addRenderListener(() => {
  skyboxShader.render(camera.matrix, skyboxTexture)

  let matrix = Matrix4.multiply(camera.matrix, Matrix4.scaling(1, 1, 1))
  matrix = Matrix4.translateZ(matrix, -10)
  normalShader.render(matrix, kitten.vertices, kitten.normals, kitten.verticesLength)

  matrix = Matrix4.multiply(camera.matrix, Matrix4.scaling(1, 1, 1))
  matrix = Matrix4.translateX(matrix, -10)
  normalShader.render(matrix, cube.vertices, cube.normals, cube.verticesLength)

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
