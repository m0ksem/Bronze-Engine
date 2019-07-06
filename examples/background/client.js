// Getting canvas

let div = document.getElementById('bronze')
div.width = window.innerWidth
div.height = window.innerHeight

let engine = new Bronze.Engine(div)

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    engine.canvasResized()
})

let camera = new Bronze.Camera()
    camera.setPosition(0, 2500, 5000)
    camera.setPosition(60, 300, 0)
    camera.setRotation(0, 0, 0)
    camera.setFieldOfView(90)
    camera.collisions = false
    engine.setCamera(camera)
    engine.setDrawingRange(100000000000000)

engine.globalLightMinValue = 0.01
let moonLight = new Bronze.Light(engine)
    moonLight.setPosition(-500, 500, 2500)
    moonLight.range = 5000
    moonLight.on()

let options = {
    removePrefixes: true,
    addLocationMarker: true
};

var vertexShader = new XMLHttpRequest();
vertexShader.open('GET', './shaders/vertex.glsl', false);
vertexShader.send(null);
var fragmentShader = new XMLHttpRequest();
fragmentShader.open('GET', './shaders/fragment.glsl', false);
fragmentShader.send(null);

let selectedObjectShader = engine.shaders.addProgram("buildings", vertexShader.responseText, fragmentShader.responseText, options);
engine.shaders.shadersRequireLights.push(engine.shaders.buildings)

// let skyboxTexture = new Bronze.CubeTexture(engine);
// skyboxTexture.setImagesFromPath(
//   "./assets/skybox/rt.png",
//   "./assets/skybox/lf.png",
//   "./assets/skybox/up.png",
//   "./assets/skybox/dn.png",
//   "./assets/skybox/bk.png",
//   "./assets/skybox/ft.png"
// );
let skyboxTexture = new Bronze.CubeTexture(engine)
    skyboxTexture.setSkybox('./assets/skybox/skybox.png')

// let gridTexture = new Bronze.SimpleTexture(engine)
//     gridTexture.setColor(255, 255, 255, 255)
//     gridTexture.mipmapFilter = 'LINEAR_MIPMAP_LINEAR'
//     gridTexture.setMipmapGenerationMethod(gridTexture.QUICK_GENERATE)
//     gridTexture.loadFrom('./assets/textures/grid.png')


let skybox = new Bronze.Skybox(engine);
skybox.setTexture(skyboxTexture);
skybox.rotate(0, 0, 0)

let car = new Bronze.Object(engine)
car.loadMTL("assets/objects/car/car.mtl")
car.loadFromObj("assets/objects/car/car.obj")
car.setPosition(60, 235, 0)
car.verticalAlign = false
car.scale(16, 20, 17)
car.rotate(0, 180, 0)

let zMod = -2000

let bridge = new Bronze.Object(engine)
bridge.loadMTL("assets/objects/bridge/bridge.mtl")
bridge.loadFromObj("assets/objects/bridge/bridge.obj")
bridge.setPosition(0, -100, -100)
bridge.verticalAlign = false
bridge.scale(100, 100, 100)
bridge.rotate(0, 90, 0)

let buildings = new Bronze.Object(engine)
buildings.loadFromObj("assets/objects/buildings.obj")
buildings.setPosition(1400, 200, 0)
buildings.verticalAlign = false
buildings.scale(50, 50, 50)
buildings.useShader(engine.shaders.buildings)

let scene = new Array(13)
for (let i = 0; i < 13; i++) {
    scene[i] = []
}

for (let i = 0; i < 13; i++) {
    buildings = buildings.copy()
    buildings.setPosition(1400, 200, -zMod * 6 + zMod * i)
    let random = Math.floor(Math.random() * 4);
    buildings.rotate(0, 90 * random, 0)
    scene[i].push(buildings)
}
for (let i = 0; i < 13; i++) {
    buildings = buildings.copy()
    buildings.setPosition(-1400, 200, -zMod * 6 + zMod * i)
    let random = Math.floor(Math.random() * 4);
    buildings.rotate(0, 90 * random, 0)
    scene[i].push(buildings)
}
for (let i = 0; i < 13; i++) {
    bridge = bridge.copy()
    bridge.setPosition(0, -100, -zMod * 6 + zMod * i)
    scene[i].push(bridge)
}


let controls = new Bronze.Controls(engine)
controls.lockPointer(true)
controls.setSensitivity(1)
let posZ = 0
let currentScene = 0
controls.setControlFunction(() => {
    if (controls.mouse.buttons[2] || controls.touch.actionBeforeMove == 'long click') {
        if (engine.selectedObject != null) {
            const object = engine.selectedObject
            if (!controls.keys[17]) {
                object.moveRelativeToTheCamera(controls.mouse.movement.x, 0, controls.mouse.movement.y)
            } else {
                object.moveRelativeToTheCamera(0, -controls.mouse.movement.y, 0)
            }
        }
    }

    if (controls.mouse.buttons[0] || controls.pointerLocked || controls.touch.actionBeforeMove == 'click') {
        if (controls.keys[17]) {
            camera.rotate(0, 0, (controls.mouse.movement.y / 10)) //+ controls.mouse.movement.x / 10) / 2))
        } else {
            camera.rotate(controls.mouse.movement.y / 10, controls.mouse.movement.x / 10, 0)
        }
    }

    car.position.z = posZ
    camera.position.z = posZ + 150
    moonLight.setPosition(1500, 500, posZ + 1000)
    posZ -= 10
    if (-posZ > -zMod * currentScene) {
        let sceneInArrayIndex = currentScene % 13
        let sceneFromArray = scene[sceneInArrayIndex]
        sceneFromArray[0].move(0, 0, zMod * 13)
        sceneFromArray[1].move(0, 0, zMod * 13)
        sceneFromArray[2].move(0, 0, zMod * 13)
        currentScene++
    }
})

// Run engine
engine.run()
