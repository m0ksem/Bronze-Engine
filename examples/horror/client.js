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
    camera.setPosition(0, 400, 750)
    camera.setRotation(0, 0, 0)
    camera.setFieldOfView(90)
    camera.distanceBeforeCollision = 10
    camera.setCubeCollisionBox(100)
    camera.collisionBox.minPoint.y = -350
    engine.setCamera(camera)

let controls = new Bronze.Controls(engine)
    controls.clickForFocus(true)

// Setting control function for camera
controls.setSensitivity(1)
controls.lockPointer(true)

// Loading textures
let lampTexture = new Bronze.SimpleTexture(engine)
    lampTexture.setColor(41, 46, 48, 255)
    lampTexture.loadFrom("assets/texture/lamp.jpg")
let tableTexture = new Bronze.SimpleTexture(engine)
    tableTexture.setColor(41, 46, 48, 255)
    tableTexture.loadFrom("assets/texture/table.jpg")
let schoolChairTexture = new Bronze.SimpleTexture(engine)
    schoolChairTexture.setColor(41, 46, 48, 255)
    schoolChairTexture.loadFrom("assets/texture/school_chair.png")
let cubeTexture = new Bronze.SimpleTexture(engine)
    cubeTexture.setColor(41, 46, 48, 255)
    cubeTexture.loadFrom("assets/texture/cube.jpg")
let textTexture = new Bronze.SimpleTexture(engine)
    textTexture.setColor(41, 46, 48, 255)
    textTexture.loadFrom("assets/texture/text.png")
let landTexture = new Bronze.SimpleTexture(engine)
    landTexture.setColor(51, 130, 0, 255)
    landTexture.setSize(1, 1)
    landTexture.loadFrom("./assets/texture/land.png")
    landTexture.mipmapFilter = 'LINEAR_MIPMAP_LINEAR'
landTexture.setMipmapGenerationMethod(landTexture.AUTO_GENERATE)
let wallTexture = new Bronze.SimpleTexture(engine)
    wallTexture.setColor(41, 46, 48, 255)
    wallTexture.loadFrom("assets/texture/wall.png")
    wallTexture.mipmapFilter = 'LINEAR_MIPMAP_LINEAR'
    wallTexture.setMipmapGenerationMethod(wallTexture.AUTO_GENERATE)

let glass = new Bronze.Glass(engine)

// Setting lights
engine.globalLightMinValue = 0.001

let heroLamp = new Bronze.Light(engine)
    heroLamp.setPosition(0, 250, 0)
    heroLamp.range = 8000
    heroLamp.off()
let lamplight = new Bronze.Light(engine)
    lamplight.setPosition(0, 500, -500)
    lamplight.range = 1500
    lamplight.on()

let ui = new Bronze.UI(engine)

    // Main corridor
let floor = new Bronze.Rect(engine)
    floor.setTexture(landTexture)
    floor.setSize(500, 2500)
    floor.setTextureRepeating(1, 5)
    floor.setPosition(0, 0, -1250)
    floor.setRotation(-90, 0, 0)
    // Door
    floor = new Bronze.Rect(engine)
    floor.setTexture(landTexture)
    floor.setSize(500, 500)
    floor.setTextureRepeating(1, 1)
    floor.setPosition(500, 0, -1250)
    floor.setRotation(-90, 0, 0)
    // Room
    floor = new Bronze.Rect(engine)
    floor.setTexture(landTexture)
    floor.setSize(2500, 2500)
    floor.setTextureRepeating(5, 5)
    floor.setPosition(2000, 0, -2250)
    floor.setRotation(-90, 0, 0)

    floor = new Bronze.Rect(engine)
    floor.setTexture(landTexture)
    floor.setSize(500, 1000)
    floor.setTextureRepeating(1, 2)
    floor.setPosition(0, 0, 500)
    floor.setRotation(-90, 0, 0)

    // Main left 1
let wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(1000, 1000)
    wall.setTextureRepeating(2, 2)
    wall.setPosition(-250, 1000, -500)
    wall.setRotation(0, 90, 0)
    wall.verticalAlign = false
    // Main left 0
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(1000, 1000)
    wall.setTextureRepeating(2, 2)
    wall.setPosition(-250, 1000, 500)
    wall.setRotation(0, 90, 0)
    wall.verticalAlign = false
    // Main left 2
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(1000, 1000)
    wall.setTextureRepeating(2, 2)
    wall.setPosition(-250, 1000, -1500)
    wall.setRotation(0, 90, 0)
    wall.verticalAlign = false
    // Main left 2
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(500, 1000)
    wall.setTextureRepeating(1, 2)
    wall.setPosition(-250, 1000, -2250)
    wall.setRotation(0, 90, 0)
    wall.verticalAlign = false
    // Main back wall
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(500, 1000)
    wall.setTextureRepeating(1, 2)
    wall.setPosition(0, 1000, 1000)
    wall.setRotation(0, 180, 0)
    wall.verticalAlign = false
    // Main right 1
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(1000, 1000)
    wall.setTextureRepeating(2, 2)
    wall.setPosition(250, 1000, -500)
    wall.setRotation(0, -90, 0)
    wall.verticalAlign = false
    // Main right 0
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(1000, 1000)
    wall.setTextureRepeating(2, 2)
    wall.setPosition(250, 1000, 500)
    wall.setRotation(0, -90, 0)
    wall.verticalAlign = false
    // Main right 3
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(1000, 1000)
    wall.setTextureRepeating(2, 2)
    wall.setPosition(250, 1000, -2000)
    wall.setRotation(0, -90, 0)
    wall.verticalAlign = false
    // Main front wall
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(500, 1000)
    wall.setTextureRepeating(1, 2)
    wall.setPosition(0, 1000, -2500)
    wall.setRotation(0, 0, 0)
    wall.verticalAlign = false
    // Text 
    wall = new Bronze.Rect(engine)
    wall.setTexture(textTexture)
    wall.setSize(250, 350)
    wall.setTextureRepeating(1, 2)
    wall.setPosition(0, 500, -2498)
    wall.setRotation(0, 0, 0)
    wall.verticalAlign = false
    // Transition front wall
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(500, 1000)
    wall.setTextureRepeating(1, 2)
    wall.setPosition(500, 1000, -1500)
    wall.setRotation(0, 0, 0)
    wall.verticalAlign = false
    // Room wall right
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(2500, 1000)
    wall.setTextureRepeating(5, 2)
    wall.setPosition(3250, 1000, -2250)
    wall.setRotation(0, -90, 0)
    wall.verticalAlign = false
    // Room wall front
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(2500, 1000)
    wall.setTextureRepeating(5, 2)
    wall.setPosition(2000, 1000, -3500)
    wall.setRotation(0, 0, 0)
    wall.verticalAlign = false
    // Room wall left
    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(2000, 1000)
    wall.setTextureRepeating(4, 2)
    wall.setPosition(750, 1000, -2500)
    wall.setRotation(0, 90, 0)
    wall.verticalAlign = false

    wall = new Bronze.Rect(engine)
    wall.setTexture(wallTexture)
    wall.setSize(3000, 1000)
    wall.setTextureRepeating(6, 2)
    wall.setPosition(1750, 1000, -1000)
    wall.setRotation(0, 180, 0)
    wall.verticalAlign = false

let hiddenWall = new Bronze.Rect(engine)
    hiddenWall.setTexture(wallTexture)
    hiddenWall.setSize(500, 1000)
    hiddenWall.setTextureRepeating(1, 2)
    hiddenWall.setPosition(500, 1000, -1250)
    hiddenWall.setRotation(0, -90, 0)
    hiddenWall.verticalAlign = false

let lamp = new Bronze.Object(engine)
    lamp.setPosition(0, 800, -1000)
    lamp.setTexture(lampTexture)
    lamp.loadFromObj("assets/objects/lamp3.obj")
    lamp.scale(0.5, 0.5, 0.5)
let table = new Bronze.Object(engine)
    table.setPosition(50, 100, -2050)
    table.setTexture(tableTexture)
    table.loadFromObj("assets/objects/table.obj")
    table.setRotation(90, 270, 180)
    table.scale(1.5, 2, 2)
let cube = new Bronze.Object(engine)
    cube.setPosition(50, 100, -2250)
    cube.loadFromObj("assets/objects/cube.obj")
    cube.scale(100, 100, 100)
    cube.setTexture(cubeTexture)
let stickman = new Bronze.Object(engine)
    stickman.setPosition(3000, 1000, -4200)
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
    schoolChair.setPosition(1000, 60, -3000)
    schoolChair.loadFromObj("assets/objects/school_chair.obj")
    schoolChair.scale(60, 60, 60)

let scream = new Bronze.Sound('assets/sounds/scream.mp3')
let lightOffSound = new Bronze.Sound('assets/sounds/lightoff.mp3')

let speed = 5
controls.setControlFunction(() => {
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

        heroLamp.setPosition(camera.position.x, 250, camera.position.z)

        camera.rotate(controls.mouse.movement.y / 10, 0, 0)
        if (camera.rotation.x < -10 || camera.rotation.x > 40) { 
            camera.rotate(-controls.mouse.movement.y / 10, 0, 0)
        }
        camera.rotate(0, controls.mouse.movement.x / 10, 0)
        
        checkCorridorEnd()
        checkHand()
        checkCorridor()
    }
})

function checkCorridorEnd () {
    if (camera.position.z < -1600) {
        hiddenWall.hide()
    }
}


let lightOffed = false
function checkCorridor () {
    if (!lightOffed && camera.position.z < -50) {
        setTimeout(()=> {
            lamplight.off()
            heroLamp.on()
        }, 300)
        lightOffSound.play()
        lightOffed = true
        speed = 7
    }
}

let scared = false
function checkHand () {
    if (camera.rotation.x > 12 &&
    camera.position.x > 1900 && camera.position.z < -1800 && camera.position.z > -3000 &&
    !scared) {
        speed = 0
        setTimeout(() => {
            heroLamp.setRange(3000)
            hand.hide()
            speed = 60
        }, 4000)
        scream.play()
        scared = true
    }
}

// Run engine
engine.run()
