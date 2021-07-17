import { 
  BufferTexture, 
  ColorTexture, 
  DefuseShader, 
  Matrix4, 
  NormalShader, 
  Object3D, 
  PerspectiveCamera,
  PointLightShader,
  SpecularShader,
  Texture,
  WorldPositionShader
} from "..";
import { PointLight } from "../light/point-light";
import { WebGLRenderer } from "../renderer";

declare type Camera = PerspectiveCamera // | OrthographicCamera

interface SceneOptions {
  renderer: WebGLRenderer,
  camera: Camera,
  objects?: Record<string, Object3D>
  lights?: PointLight[],
  /** @type { objectName: { mtlName: Texture } } */
  textures?: Record<string, Record<string, Texture>>
}

export class Scene {
  constructor(options: SceneOptions) {
    const { renderer, camera, objects, lights = [], textures = {} } = options;

    const defuseMap = new BufferTexture(renderer)
    const defuseShader = new DefuseShader(renderer.webgl)

    const normalMap = new BufferTexture(renderer)
    const normalShader = new NormalShader(renderer.webgl)

    const specularMap = new BufferTexture(renderer)
    const specularShader = new SpecularShader(renderer.webgl)

    const worldPositionMap = new BufferTexture(renderer)
    const worldPositionShader = new WorldPositionShader(renderer.webgl)

    const pointLightShader = new PointLightShader(renderer.webgl)

    renderer.addBeforeRenderListener(() => {
      normalMap.clear()
      defuseMap.clear()
      specularMap.clear() 
    })

    const noTexture = new ColorTexture(renderer.webgl, '#e63946')

    if (objects) {
      const entries = Object.entries(objects)

      renderer.addRenderListener(() => {
        entries.forEach(([name, o]) => {
          o.render((object, entity) => {
            const matrix = Matrix4.multiply(camera.matrix, entity.worldMatrix)
          
            defuseMap.render(() => {
              const objectTextures = textures[name]
              const texture = (objectTextures && objectTextures[object.mtl || 'no-texture']) || noTexture
              texture.activeTexture(1)
              defuseShader.render(matrix, object.verticesBuffer, object.textureCoordinatesBuffer, texture, object.vertices.length)
            })

            worldPositionMap.render(() => {
              worldPositionShader.render(matrix, entity.worldMatrix, object.verticesBuffer, object.vertices.length)
            })

            normalMap.render(() => {
              normalShader.render(matrix, object.verticesBuffer, object.normalsBuffer, object.vertices.length)
            })

            specularMap.render(() => {
              specularShader.render(matrix, object.verticesBuffer, entity.mtl[object.mtl!].specular, object.vertices.length)
            })          
          })

          defuseMap.activeTexture(0)
          normalMap.activeTexture(1)
          specularMap.activeTexture(2)
          worldPositionMap.activeTexture(3)

          lights.forEach((light) => {
            pointLightShader.render(defuseMap, normalMap, specularMap, worldPositionMap, light._position, light.minLight, light.range)
          })
        })
      })
    }
  }
}