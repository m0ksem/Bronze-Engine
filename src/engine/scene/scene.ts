import { ZDepthShader } from './../shaders/z-depth';
import { 
  BufferTexture, 
  ColorTexture, 
  DefuseShader, 
  Matrix4, 
  NormalShader, 
  Object3D, 
  PerspectiveCamera,
  PointLightShader,
  ColorShader,
  Texture,
  WorldPositionShader,
  StorageTexture
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

/** Note: for now object MTL is required */
export class Scene {
  constructor(options: SceneOptions) {
    const { renderer, camera, objects, lights = [], textures = {} } = options;

    const colorShader = new ColorShader(renderer.webgl)
    const defuseShader = new DefuseShader(renderer.webgl)
    const normalShader = new NormalShader(renderer.webgl)
    const worldPositionShader = new WorldPositionShader(renderer.webgl)
    const pointLightShader = new PointLightShader(renderer.webgl)


    const defuseMap = new BufferTexture(renderer)
    const normalMap = new BufferTexture(renderer)
    const specularColorMap = new BufferTexture(renderer)
    const shininessMap = new StorageTexture(renderer)
    const ambientMap = new BufferTexture(renderer)
    const worldPositionMap = new StorageTexture(renderer)


    renderer.addBeforeRenderListener(() => {
      normalMap.clear()
      defuseMap.clear()
      specularColorMap.clear()
      shininessMap.clear()
      ambientMap.clear()
      worldPositionMap.clear()
    })

    const noTexture = new ColorTexture(renderer.webgl, '#e63946')

    if (objects) {
      const entries = Object.entries(objects)

      renderer.addRenderListener(() => {
        defuseMap.activeTexture(2)
        normalMap.activeTexture(3)
        specularColorMap.activeTexture(4)
        worldPositionMap.activeTexture(5)
        ambientMap.activeTexture(6)
        shininessMap.activeTexture(7)

        entries.forEach(([name, o]) => {
          const matrix = Matrix4.multiply(camera.matrix, o.worldMatrix)

          o.render((plane, entity) => {
            const mtl = entity.mtl[plane.mtl]

            defuseMap.render(() => {
              const objectTextures = textures[name]
              const texture = (objectTextures && objectTextures[plane.mtl || 'no-texture']) || noTexture
              texture.activeTexture(0)
              defuseShader.render(matrix, plane.verticesBuffer, plane.textureCoordinatesBuffer, texture, plane.vertices.length)
            })

            worldPositionMap.render(() => {
              worldPositionShader.render(matrix, entity.worldMatrix, plane.verticesBuffer, plane.vertices.length)
            })

            normalMap.render(() => {
              normalShader.render(matrix, plane.verticesBuffer, plane.normalsBuffer, plane.vertices.length)
            })

            specularColorMap.render(() => {
              colorShader.render(
                matrix, 
                plane.verticesBuffer, 
                [...mtl.specularColor], 
                plane.vertices.length,
              )
            })

            shininessMap.render(() => {
              colorShader.render(
                matrix, 
                plane.verticesBuffer, 
                [mtl.specularExponent], 
                plane.vertices.length,
              )
            })
            
            ambientMap.render(() => {
              colorShader.render(matrix, plane.verticesBuffer, entity.mtl[plane.mtl!].ambient, plane.vertices.length)
            })
          })
        })

        lights.forEach((light) => {
          pointLightShader.render(
            camera,
            defuseMap, 
            normalMap, 
            specularColorMap,
            shininessMap, 
            ambientMap, 
            worldPositionMap,
            light._position,
            light.color,
            light.minLight,
            light.range
          )
        })
      })
    }
  }
}