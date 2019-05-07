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
    camera.setPosition(0, 400, 0)
    camera.setRotation(0, 0, 0)
    camera.setFieldOfView(90)
    camera.distanceBeforeCollision = 10
    engine.setCamera(camera)

let controls = new Bronze.Controls(engine)
    controls.clickForFocus(true)

// Setting control function for camera
controls.setSensitivity(1)
controls.lockPointer(true)

// Loading textures
let lampTexture = new Bronze.SimpleTexture("assets/texture/lamp.jpg")
    lampTexture.setColorRGBA(41, 46, 48, 255)
    lampTexture.bind(engine)
let flashlightTexture = new Bronze.SimpleTexture("assets/texture/flashlight.png")
    flashlightTexture.setColorRGBA(41, 46, 48, 255)
    flashlightTexture.bind(engine)
let tableTexture = new Bronze.SimpleTexture("assets/texture/table.jpg")
    tableTexture.setColorRGBA(41, 46, 48, 255)
    tableTexture.bind(engine)
let schoolChairTexture = new Bronze.SimpleTexture("assets/texture/school_chair.png")
    schoolChairTexture.setColorRGBA(41, 46, 48, 255)
    schoolChairTexture.bind(engine)
let cubeTexture = new Bronze.SimpleTexture("assets/texture/cube.jpg")
    cubeTexture.setColorRGBA(41, 46, 48, 255)
    cubeTexture.bind(engine)
let landTexture = new Bronze.SimpleTexture("./assets/texture/land.png")
    landTexture.setColorRGBA(51, 130, 0, 255)
    landTexture.setSize(1, 1)
    landTexture.bind(engine)
    landTexture.mipmapFilter = 'LINEAR_MIPMAP_LINEAR'
    landTexture.onTextureLoad.push(landTexture.autoGenerateMipmap)
let wallTexture = new Bronze.SimpleTexture("assets/texture/wall.png")
    wallTexture.setColorRGBA(41, 46, 48, 255)
    wallTexture.bind(engine)
    wallTexture.mipmapFilter = 'LINEAR_MIPMAP_LINEAR'
    wallTexture.onTextureLoad.push(wallTexture.autoGenerateMipmap)
let skyboxTexture = new Bronze.CubeTexture()
    skyboxTexture.bind(engine)
    skyboxTexture.setImagesFromPath('./assets/texture/skybox/posx.jpg', './assets/texture/skybox/negx.jpg', 
    './assets/texture/skybox/posy.jpg', './assets/texture/skybox/negy.jpg',
    './assets/texture/skybox/posz.jpg', './assets/texture/skybox/negz.jpg')

let glass = new Bronze.Glass(engine)

// Setting lights
engine.globalLightMinValue = 0
// let corridorLamp = new Bronze.Light(engine)
//     corridorLamp.position = [50, 500, -1000]
//     corridorLamp.range = 1000
//     corridorLamp.on()

let heroLamp = new Bronze.Light(engine)
    heroLamp.position = [0, 250, 0]
    heroLamp.range = 900
    heroLamp.on()

let ui = new Bronze.UI(engine)

// let skybox = new Bronze.Skybox(engine)
// skybox.setTexture(skyboxTexture)

// Objects

    // Main corridor
let floor = new Bronze.Rect(engine)
    floor.setTexture(landTexture)
    floor.setSize(500, 2500)
    floor.setTextureRepeating(1, 5)
    floor.setPosition(-250, 0, -250)
    floor.setRotation(-90, 0, 0)
    // Door
    floor = new Bronze.Rect(engine)
    floor.setTexture(landTexture)
    floor.setSize(500, 500)
    floor.setTextureRepeating(1, 1)
    floor.setPosition(250, 0, -1250)
    floor.setRotation(-90, 0, 0)
    // Room
    floor = new Bronze.Rect(engine)
    floor.setTexture(landTexture)
    floor.setSize(2500, 2500)
    floor.setTextureRepeating(5, 5)
    floor.setPosition(750, 0, -1250)
    floor.setRotation(-90, 0, 0)

    // Main left 1
let wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(1000, 1000)
    wall.setTextureRepeating(2, 2)
    wall.setPosition(-250, 0, -250)
    wall.setRotation(0, 90, 0)
    // Main left 2
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(1000, 1000)
    wall.setTextureRepeating(2, 2)
    wall.setPosition(-250, 0, -1250)
    wall.setRotation(0, 90, 0)
    // Main left 2
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(500, 1000)
    wall.setTextureRepeating(1, 2)
    wall.setPosition(-250, 0, -2250)
    wall.setRotation(0, 90, 0)
    // Main right 1
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(1000, 1000)
    wall.setTextureRepeating(2, 2)
    wall.setPosition(250, 0, -1250)
    wall.setRotation(0, -90, 0)
    // Main right 3
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(1000, 1000)
    wall.setTextureRepeating(2, 2)
    wall.setPosition(250, 0, -2750)
    wall.setRotation(0, -90, 0)
    // Main front wall
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(500, 1000)
    wall.setTextureRepeating(1, 2)
    wall.setPosition(-250, 0, -2750)
    wall.setRotation(0, 0, 0)
    // Transition front wall
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(500, 1000)
    wall.setTextureRepeating(1, 2)
    wall.setPosition(250, 0, -1750)
    wall.setRotation(0, 0, 0)
    // Room wall right
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(2500, 1000)
    wall.setTextureRepeating(5, 2)
    wall.setPosition(3250, 0, -3750)
    wall.setRotation(0, -90, 0)
    // Room wall front
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(2500, 1000)
    wall.setTextureRepeating(5, 2)
    wall.setPosition(750, 0, -3750)
    wall.setRotation(0, 0, 0)
    // Room wall left
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(2000, 1000)
    wall.setTextureRepeating(4, 2)
    wall.setPosition(750, 0, -1750)
    wall.setRotation(0, 90, 0)


let lamp = new Bronze.Object(engine)
    lamp.setPosition(0, 250, -1000)
    lamp.setTexture(lampTexture)
    lamp.loadFromObj("assets/objects/lamp3.obj")
    lamp.scale(0.5, 0.5, 0.5)
let table = new Bronze.Object(engine)
    table.setPosition(-125, 50, -1000)
    table.setTexture(tableTexture)
    table.loadFromObj("assets/objects/table.obj")
    table.scale(1.5, 2, 2)
let cube = new Bronze.Object(engine)
    cube.setPosition(50, 100, -2500)
    cube.loadFromObj("/assets/objects/cube.obj")
    cube.scale(100, 100, 100)
    cube.setTexture(cubeTexture)
let stickman = new Bronze.Object(engine)
    stickman.setPosition(2000, 1000, -4500)
    stickman.loadFromObj("assets/objects/stickman.obj")
    stickman.scale(40, 40, 40)
    stickman.setRotation(65, 0, 15)
let hand = new Bronze.Object(engine)
    hand.setPosition(2750, 1000, -2500)
    hand.loadFromObj("assets/objects/hand.obj")
    hand.scale(10, 10, 10)
    hand.setRotation(0, 45, 45)
let schoolChair = new Bronze.Object(engine)
    schoolChair.setTexture(schoolChairTexture)
    schoolChair.setPosition(1000, 60, -3500)
    schoolChair.loadFromObj("assets/objects/school_chair.obj")
    schoolChair.scale(60, 60, 60)

let speed = 40
camera.setControl(() => {
    if (controls.isFocused) {
        if (controls.keys[87]) {
            camera.move(camera.inverseRotationMatrix[2] * -speed, 0, camera.inverseRotationMatrix[10] * -speed)
        }
        if (controls.keys[83]) {
            camera.move(camera.inverseRotationMatrix[2] * speed, 0, camera.inverseRotationMatrix[10] * speed)
        }
        if (controls.keys[65]) {
            camera.move(camera.inverseRotationMatrix[0] * -speed, 0, camera.inverseRotationMatrix[8] * -speed)
        }
        if (controls.keys[68]) {
            camera.move(camera.inverseRotationMatrix[0] * speed, 0, camera.inverseRotationMatrix[8] * speed)
        }

        heroLamp.setPosition(camera.position[0], 250, camera.position[2])

        camera.rotate(controls.mouse.movement.y / 10, controls.mouse.movement.x / 10, 0)
    }
})

function getPos () {
    console.log(camera.position)
}

// controls.onMouseDown(2, scope)
// controls.onMouseUp(2, unscope)

// Run engine
engine.run()
