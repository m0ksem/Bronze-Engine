import './style.css'
import houseObjSource from './house/house.obj?raw'
import SceneMtlSource from './house/house.mtl?raw'
import WaterTexture from './house/1.jpg'

import { 
  Engine, PerspectiveCamera, Controls, 
  WebGLRenderer, Object3D, ColorTexture,
  objParser, mtlParser, Scene, PointLight, ImageTexture, Texture,
} from '../../engine'

const canvas = document.getElementById('canvas') as HTMLCanvasElement
canvas.width = window.innerWidth
canvas.height = window.innerHeight

const renderer = new WebGLRenderer(canvas, { cullFace: false, depthTest: true, blend: true })
const engine = new Engine(renderer)

const camera = new PerspectiveCamera(renderer)
const controls = new Controls(engine)

const waterTexture = new ImageTexture(renderer.webgl, WaterTexture)
const house = new Object3D(renderer.webgl, objParser.optimize(houseObjSource), mtlParser.optimize(SceneMtlSource))
camera.setPosition(10, 2, 10)

const houseMtlTextures: Record<string, Texture> = mtlParser.mapMtl(house.mtl, (mtl) => new ColorTexture(renderer.webgl, mtl.color.map((c) => c * 255)) )
houseMtlTextures['agua'] = waterTexture

console.log(house)

const light = new PointLight()
light.setPosition(0, 10, 2)
light.color = [128, 128, 128]

const scene = new Scene({
  renderer,
  camera,
  objects: { house },
  lights: [light],
  textures: { house: houseMtlTextures }
})


function HSLToRGB([h, s, l]: number[]) {
  // Must be fractions of 1
  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
      x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      m = l - c/2,
      r = 0,
      g = 0,
      b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;  
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return [r, g, b]
}

let hslColor = [0, 50, 50]

engine.renderer.addAfterRenderListener(() => {
  if (controls.keyboard.KeyL) { 
    if (hslColor[0] >= 360) {
      hslColor[0] = 0
    } else {
      hslColor[0] = hslColor[0] + 0.5
    }
  
    light.color = HSLToRGB(hslColor)
  }
})

engine.renderer.addBeforeRenderListener(() => { 
  if (controls.mouse.left) {
    if (controls.keyboard.KeyR) {
      house.rotate(controls.mouse.movement.y * 100, controls.mouse.movement.x * 100, 0)
    }    
  }

  if (controls.mouse.middle) {
    camera.rotate(controls.mouse.movement.y, controls.mouse.movement.x, 0)
  }

  if (controls.keyboard.KeyS) {
    if (controls.keyboard.ShiftLeft) {
      camera.move(0, -0.1, 0)
    } else {
      camera.move(0, 0, 0.1)
    }
  } else if (controls.keyboard.KeyW) {
    if (controls.keyboard.ShiftLeft) {
      camera.move(0, 0.1, 0)
    } else {
      camera.move(0, 0, -0.1)
    }
  } else if (controls.keyboard.KeyA) {
    camera.move(0.1, 0, 0)
  } else if (controls.keyboard.KeyD) {
    camera.move(-0.1, 0, 0)
  }
})
