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
    camera.setPosition(700, 800, 1500)
    camera.setRotation(-45, 0, 0)
    camera.setFieldOfView(90)
    engine.setCamera(camera)
    engine.setDrawingRange(100000000000000)

let controls = new Bronze.Controls(engine)

let debug = new Bronze.Debugger(engine)
    debug.setElement(document.getElementById('debug'))
    debug.addLog(debug.createLogView(), () => {
        return 'Mouse x: ' + controls.mouse.x + ' y: ' + controls.mouse.y
    })
    debug.addLog(debug.createLogView(), () => {
        return 'Draw calls: ' + engine.drawCalls + ' (per frame ' + engine.drawCallsPerFrame + ')'
    })
    debug.addLog(debug.createLogView(), () => {
        if (engine.selectedObject == null) {
            return 'No objects selected'
        } else {
            return 'Selected object ' + engine.selectedObject.name
        }
    })
    debug.addLog(debug.createLogView(), () => {
        return 'Position ' + camera.position[0] + ', ' + camera.position[1] + ', ' + camera.position[2]
    })
debug.addLog(debug.createLogView(), () => {
    return 'Position max' + debug.maxPoint
})
debug.addLog(debug.createLogView(), () => {
    return 'Position min' + debug.minPoint
})


let ui = new Bronze.UI(engine)
ui.appendDOMElementWithCustomProperties(debug.element, {width: 'auto%'})

// Setting control function for camera
controls.setSensitivity(1)
controls.lockPointer(true)

camera.setControl(() => {
    // All coords
    // let xt = this.rotationMatrix[0] * x + this.rotationMatrix[1] * y + this.rotationMatrix[2] * z + this.rotationMatrix[3]
    // let yt = this.rotationMatrix[4] * x + this.rotationMatrix[5] * y + this.rotationMatrix[6] * z + this.rotationMatrix[7]
    // let zt = this.rotationMatrix[8] * x + this.rotationMatrix[9] * y + this.rotationMatrix[10] * z + this.rotationMatrix[11]
    if (controls.keys[87]) {
        if (controls.keys[16]) {
            // camera.move(0, 10, 0)
            camera.move(0, 10, 0)
        } else {
            // camera.move(0, 0, -10)
            // camera.move(camera.rotationMatrix[2] * -10, camera.rotationMatrix[6] * -10, camera.rotationMatrix[10] * -10)
            camera.move(camera.inverseRotationMatrix[2] * -10, 0, camera.inverseRotationMatrix[10] * -10)
        }
    }
    if (controls.keys[83]) {
        if (controls.keys[16]) {
            // camera.move(0, -10, 0)
            camera.move(0, -10, 0)
        } else {
            // camera.move(0, 0, 10)
            // camera.move(camera.rotationMatrix[2] * 10, camera.rotationMatrix[6] * 10, camera.rotationMatrix[10] * 10)
            camera.move(camera.inverseRotationMatrix[2] * 10, 0, camera.inverseRotationMatrix[10] * 10)
        }
    }
    if (controls.keys[65]) {
        // camera.move(-10, 0, 0)
        camera.move(camera.inverseRotationMatrix[0] * -10, camera.inverseRotationMatrix[4] * -10, camera.inverseRotationMatrix[8] * -10)
    }
    if (controls.keys[68]) {
        // camera.move(10, 0, 0)
        camera.move(camera.inverseRotationMatrix[0] * 10, camera.inverseRotationMatrix[4] * 10, camera.inverseRotationMatrix[8] * 10)
    }

    
    if (controls.mouse.buttons[2] || controls.touch.actionBeforeMove == 'long click') {
        if (engine.selectedObject != null) {
            const object = engine.selectedObject
            object.moveRelativeToTheCamera(controls.mouse.movement.x, 0, -controls.mouse.movement.y)
        }
    }

    if (controls.mouse.buttons[0] || controls.pointerLocked || controls.touch.actionBeforeMove == 'click') {
        if (controls.keys[17]) {
            camera.rotate(0, 0, (controls.mouse.movement.y / 10)) //+ controls.mouse.movement.x / 10) / 2))
        } else {
            camera.rotate(controls.mouse.movement.y / 10, controls.mouse.movement.x / 10, 0)
        }
    }

    // engine.globalLightPosition = [engine.camera.position[0], engine.camera.position[1] + 500, engine.camera.position[2] + 500]
})

// engine.globalLightPosition = [10000, 9000, 10000]
// engine.globalLightRange = 20000
engine.globalLightMinValue = 0.01
let moonLight = new Bronze.Light(engine)
    moonLight.position = [10000, 9000, 10000]
    moonLight.range = 13370
    moonLight.on()
let light = new Bronze.Light(engine)
    light.position = [0, 500, -250]
    light.range = 1200
    light.on()
    light = new Bronze.Light(engine)
    light.position = [0, 500, 800]
    light.range = 3200
    light.on()
    light = new Bronze.Light(engine)
    light.position = [2000, 500, 800]
    light.range = 2000
    light.on()
    
// engine.globalLightPosition = [0, 500, 0]
// engine.globalLightRange = 1200
// engine.globalLightMinValue = 0.01

// Loading textures
let dirtTexture = new Bronze.SimpleTexture("./assets/texture/dirt.jpg")
    dirtTexture.setColorRGBA(159, 136, 105, 255)
    dirtTexture.bind(engine)
    dirtTexture.setSize(64, 64)
let rjunTexture = new Bronze.SimpleTexture("./assets/texture/rjun.jpg")
    rjunTexture.setColorRGBA(255, 255, 255, 255)
    rjunTexture.bind(engine)
    rjunTexture.setSize(64, 64)
let grassTexture = new Bronze.SimpleTexture("./assets/texture/grass.png")
    grassTexture.setColorRGBA(255, 255, 255, 255)
    grassTexture.mipmapFilter = 'LINEAR_MIPMAP_LINEAR'
    grassTexture.onTextureLoad.push(grassTexture.autoGenerateMipmap)
    grassTexture.bind(engine)
    grassTexture.setSize(64, 64)
let gridTexture = new Bronze.SimpleTexture("./assets/texture/grid/gridtrans.png")
    gridTexture.setColorRGBA(255, 255, 255, 255)
    gridTexture.mipmapFilter = 'LINEAR_MIPMAP_LINEAR'
    gridTexture.onTextureLoad.push(gridTexture.quickGenerateMipmap)
    gridTexture.bind(engine)
let transparentTexture = new Bronze.SimpleTexture("./assets/texture/road.png")
    transparentTexture.setColorRGBA(255, 255, 255, 255)
    transparentTexture.bind(engine)
    transparentTexture.alpha = true
let transparentTextureDoor = new Bronze.SimpleTexture("./assets/texture/door.png")
    transparentTextureDoor.setColorRGBA(255, 255, 255, 255)
    transparentTextureDoor.bind(engine)
    transparentTextureDoor.alpha = true
let colaTexture = new Bronze.SimpleTexture("./assets/texture/cola.png")
    colaTexture.setColorRGBA(255, 255, 255, 255)
    colaTexture.bind(engine)
let woodTexture = new Bronze.SimpleTexture("./assets/texture/wood.jpg")
    woodTexture.setColorRGBA(255, 255, 255, 255)
    woodTexture.bind(engine)

let cubeTexture = new Bronze.CubeTexture()
    cubeTexture.bind(engine)
    cubeTexture.setLoadingImages(grassTexture, grassTexture, grassTexture, grassTexture, grassTexture, grassTexture)

let skyboxTexture = new Bronze.CubeTexture()
    skyboxTexture.bind(engine)
    skyboxTexture.setSkybox('./assets/texture/skybox.png')

let skybox = new Bronze.Skybox(engine)
skybox.setTexture(skyboxTexture)

let glass = new Bronze.Glass(engine)

// Setting elements and objects 
let grid = new Bronze.Grid(engine)
    grid.setTexture(gridTexture)
    grid.setCellSize(1000, 1000)
    let width = 50000, height = 50000
    grid.setSize(width, height)
    grid.setPosition(-width / 2, -5, height / 2)
    grid.setRotation(-90, 0, 0)
    grid.setRotationPoint(0, 0, 0)
    grid.setNormals([
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
    ])

let rect = new Bronze.Rect(engine)
    rect.setTexture(grassTexture)
    rect.setTextureRepeating(10, 10)
    width = 10000, height = 10000
    rect.setSize(width, height)
    rect.setPosition(-width / 2, 5, height / 2)
    rect.setRotation(-90, 0, 0)
    rect.setRotationPoint(0, 0, 0)

    rect = new Bronze.Rect(engine)
    rect.setTexture(transparentTexture)
    rect.setSize(1000, 1000)
    rect.setPosition(-500, 10, 1500)
    rect.rotate(-90, 0, 0)
    rect.setRotationPoint(0, 0, 0)

    rect = new Bronze.Rect(engine)
    rect.setTexture(dirtTexture)
    rect.setSize(1000, 1000)
    rect.setPosition(-500, 0, -500)
    rect.rotate(0, 0, 0)
    rect.setRotationPoint(0, 0, 0)

    rect = new Bronze.Rect(engine)
    rect.setTexture(dirtTexture)
    rect.setSize(1000, 1000)
    rect.setPosition(500, 0, -500)
    rect.rotate(0, -90, 0)
    rect.setRotationPoint(0, 0, 0)

    rect = new Bronze.Rect(engine)
    rect.setTexture(rjunTexture)
    rect.setSize(1000, 1000)
    rect.setPosition(-500, 0, 500)
    rect.rotate(0, 90, 0)
    rect.setRotationPoint(0, 0, 0)
  
let cube = new Bronze.Cube(engine)
    cube.setSize(100, 100, 100)
    cube.setPosition(1700, 400, 800)
    cube.setTexture(new Bronze.ReflectionTexture(engine, 'rgba(117, 171, 188, 0.2)', 2048, 0.8))
    cube.animate(60, () => {
        cube.rotate(0.5, 0.8, 1.0)
    })
    cube.useMaterial(glass)
let cube22 = new Bronze.Cube(engine)
    cube22.setSize(100, 100, 100)
    cube22.setPosition(1400, 400, 800)
    cube22.setTexture(new Bronze.ReflectionTexture(engine, 'rgba(117, 171, 188, 0.2)', 2048, 0.8))
    cube22.animate(60, () => {
        cube22.rotate(0.5, 0.8, 1.0)
    })
    cube22.useMaterial(glass)
    let deerRef = new Bronze.Object(engine)
    deerRef.name = "Deer transparent with reflection"
    deerRef.setPosition(0, 0, 0)
    deerRef.loadFromObj("assets/objects/deer.obj")
    deerRef.scale(0.3, 0.3, 0.3)
    deerRef.useMaterial(glass)
    deerRef.setTexture(new Bronze.ReflectionTexture(engine, 'rgba(117, 171, 188, 0.2)', 2048, 0.7))

    let cola1 = new Bronze.Object(engine)
    cola1.setPosition(500, 0, 1200)
    cola1.name = "box on ground"
    cola1.loadFromObj("assets/objects/cola.obj")
    cola1.setRotationPoint(0, 0, 0)
    cola1.scale(7, 7, 7)
    cola1.animate(60, () => {
        cola1.rotate(0, 0.05, 0)
    })
    cola1.useMaterial(glass)
    cola1.setTexture(new Bronze.ReflectionTexture(engine, 'rgba(117, 171, 188, 0.2)', 2048, 0.9))

let cube1 = new Bronze.Cube(engine)
cube1.setTexture(cubeTexture)
    cube1.setSize(200, 200, 200)
    cube1.setPosition(-100, 0, 1000)
    cube1.rotate(0, 45, 0)
    cube1.animate(60, () => {
        cube1.rotate(0.1, 1, 0)
    })


 let cube2 = new Bronze.Cube(engine)
    cube2.setTexture(cubeTexture)
    cube2.setSize(200, 200, 200)
    cube2.setPosition(-400, 0, 100)
    cube2.rotate(0, 0, 0)
    cube2.animate(60, () => {
        cube2.rotate(2, -0, 0)
    })

let deer2 = new Bronze.Object(engine)
    deer2.name = "Deer normal scaled on 0.3"
    deer2.setPosition(1800, 0, 800)
    deer2.loadFromObj("assets/objects/deer.obj")
    deer2.scale(0.3, 0.3, 0.3)

let cola2 = new Bronze.Object(engine)
    cola2.UIElement = true
    cola2.setTexture(colaTexture)
    cola2.setPosition(100, 100, -1400)
    cola2.name = "box"
    cola2.loadFromObj("assets/objects/cola.obj")
    cola2.setRotationPoint(0, 0, 0)
    cola2.setRotation(90, 25, 0)
    cola2.scale(20, 20, 20)


    rect = new Bronze.Rect(engine)
    rect.setTexture(transparentTextureDoor)
    rect.setSize(1000, 1000)
    rect.setPosition(-500, 0, 500)
    rect.rotate(0, 0, 0)
    rect.setRotationPoint(-100, 100, 100)

    rect = new Bronze.Rect(engine)
    rect.setTexture(transparentTextureDoor)
    rect.setSize(1000, 1000)
    rect.setPosition(500, 0, 500)
    rect.rotate(0, 180, 0)

    let roofRight = new Bronze.Rect(engine)
    roofRight.setTexture(woodTexture)
    roofRight.setSize(1000, 1000)
    roofRight.setPosition(-500, 1000, -500)
    roofRight.setRotation(90, 0, 0)


let cubeObj = new Bronze.Object(engine)
cubeObj.setPosition(50, 500, 1000)
cubeObj.name = "cube on ground"
cubeObj.loadFromObj("assets/objects/cube.obj")
cubeObj.setRotationPoint(0, 0, 0)
cubeObj.scale(100, 100, 100)
cubeObj.setTexture(colaTexture)
cubeObj.setTexture(new Bronze.ReflectionTexture(engine, 'rgba(117, 171, 188, 0.5)', 1024, 0.7))
cubeObj.useMaterial(glass)
cubeObj.alpha = true

let kitten = new Bronze.Object(engine)
kitten.setTexture(engine.noTexture)
kitten.setPosition(1500, 100, 0)
kitten.name = "box"
kitten.loadFromObj("assets/objects/kitten.obj")
kitten.setRotation(0, 180, 0)
kitten.scale(100, 100, 100)

// Run engine
engine.run()
// engine.stop()
