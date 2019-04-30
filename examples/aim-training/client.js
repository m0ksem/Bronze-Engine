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
    camera.setPosition(0, 800, 1500)
    camera.setRotation(0, 0, 0)
    camera.setFieldOfView(90)
    engine.setCamera(camera)

let controls = new Bronze.Controls(engine)
    controls.clickForFocus(true)

// Setting control function for camera
controls.setSensitivity(1)
controls.lockPointer(true)

// Loading textures
let gunTexture = new Bronze.SimpleTexture("")
    gunTexture.setColorRGBA(41, 46, 48, 255)
    gunTexture.bind(engine)
let landTexture = new Bronze.SimpleTexture("./assets/texture/land.jpg")
    landTexture.setColorRGBA(51, 130, 0, 255)
    landTexture.setSize(1, 1)
    landTexture.bind(engine)
let targetTexture = new Bronze.SimpleTexture("")
    targetTexture.setColorRGBA(225, 0, 0, 255)
    targetTexture.bind(engine)
let friendlyTexture = new Bronze.SimpleTexture("")
    friendlyTexture.setColorRGBA(0, 225, 0, 255)
    friendlyTexture.bind(engine)
let crossHairTexture = new Bronze.SimpleTexture("./assets/texture/crosshair.png")
    crossHairTexture.setColorRGBA(0, 255, 0, 255)
    crossHairTexture.bind(engine)
let skyboxTexture = new Bronze.CubeTexture()
    skyboxTexture.bind(engine)
    skyboxTexture.setImagesFromPath('./assets/texture/skybox/posx.jpg', './assets/texture/skybox/negx.jpg', 
    './assets/texture/skybox/posy.jpg', './assets/texture/skybox/negy.jpg',
    './assets/texture/skybox/posz.jpg', './assets/texture/skybox/negz.jpg')
let shotSound = new Bronze.Sound('./assets/sounds/shot.wav')
let screamSound = new Bronze.Sound('./assets/sounds/scream1.mp3',
    './assets/sounds/scream2.mp3', './assets/sounds/scream4.mp3',
    './assets/sounds/scream4.mp3')
screamSound.delay = 500


let glass = new Bronze.Glass(engine)

engine.globalLightMinValue = 0.01
let sunLight = new Bronze.Light(engine)
sunLight.position = [-10000, 9000, 10000]
sunLight.range = 133700
sunLight.on()

let field = {
    width: 4000,
    height: 4000
}

let ui = new Bronze.UI(engine)
let counter = 0
let counterDOMElement = document.getElementById('counter')
let loseScreen = document.getElementById('lose')
let winScreen = document.getElementById('win')
ui.appendDOMElement(counterDOMElement, 'counter', { vertical: 0, horizontal: 0 })
loseScreen = ui.appendDOMElement(loseScreen, 'lose', { vertical: 50, horizontal: 50 })
loseScreen.hide()
winScreen = ui.appendDOMElement(winScreen, 'win', { vertical: 50, horizontal: 50 })
winScreen.hide()
counterDOMElement.innerHTML = 'You killed ' + counter + ' enemies'
let crossHair = ui.addImage(crossHairTexture, 64, 64, ui.centerX - 32, ui.centerY - 32)

let skybox = new Bronze.Skybox(engine)
skybox.setTexture(skyboxTexture)

let cube = new Bronze.Cube(engine)
cube.setSize(100, 100, 100)
cube.setPosition(1700, 400, 800)
cube.setTexture(new Bronze.ReflectionTexture(engine, 'rgba(117, 171, 188, 0.2)', 2048, 0.8))
cube.animate(60, () => {
    cube.rotate(0.5, 0.8, 1.0)
})
cube.useMaterial(glass)

let gun = new Bronze.Object(engine)
    gun.UIElement = true
    gun.setTexture(gunTexture)
    gun.setPosition(100, -230, 350)
    gun.name = "gun"
    gun.loadFromObj("assets/objects/m4a1.obj")
    gun.setRotation(10, -180, 0)
    gun.scale(50, 50, 50)

function scope() {
    gun.setPosition(0, -157, 500)
    gun.setRotation(0, -180, 0)
    crossHair.hide()
    camera.setFieldOfView(60)
}

function unscope() {
    gun.setPosition(100, -230, 350)
    gun.setRotation(10, -180, 0)
    crossHair.show()
    camera.setFieldOfView(90)
}

let enemiesCount = 5

let speedMultiply = 1 

for (let i = 0; i < enemiesCount; i++) {
    let position = {
        x: Math.floor(Math.random() * (field.width / 2 + field.width / 2) - field.width / 2),
        z: Math.floor(Math.random() * (field.height * 2 - (-field.height)) + (-field.height))
    }
    let object = new Bronze.Object(engine)
    object.setTexture(targetTexture)
    object.setPosition(position.x, 0, position.z)
    object.name = "gun"
    object.loadFromObj("assets/objects/targhet.obj")
    object.setRotationPoint(0, 0, -50)
    object.setRotation(0, 0, 0)
    object.scale(30, -Math.floor(Math.random() * (56 - 45) - 45), 30)
    object.hits = 0
    object.friendly = false

    object.speed = {
        x: Math.floor(Math.random() * (10 + 15) - 10),
        z: Math.floor(Math.random() * (10 + 15) - 10)
    }
    object.animate(60, () => {
        if (object.position[0] > field.width) {
            object.speed.x = - object.speed.x
        }
        else if (object.position[0] < -field.width) {
            object.speed.x = - object.speed.x
        }
        if (object.position[2] > field.height * 2) {
            object.speed.z = - object.speed.z
        }
        else if (object.position[2] < -field.height) {
            object.speed.z = - object.speed.z
        }
        object.move(object.speed.x * speedMultiply, 0, object.speed.z * speedMultiply)
    })
}


for (let i = 0; i < 30; i++) {
    let position = {
        x: Math.floor(Math.random() * (field.width / 2 + field.width / 2) - field.width / 2),
        z: Math.floor(Math.random() * (field.height * 2 - (-field.height)) + (-field.height))
    }
    let object = new Bronze.Object(engine)
    object.setTexture(friendlyTexture)
    object.setPosition(position.x, 0, position.z)
    object.name = "gun"
    object.loadFromObj("assets/objects/targhet.obj")
    object.setRotationPoint(0, 0, -50)
    object.setRotation(0, 0, 0)
    object.scale(30, -Math.floor(Math.random() * (56 - 45) - 45), 30)
    object.hits = 0
    object.friendly = true

    object.speed = {
        x: Math.floor(Math.random() * (10 + 15) - 10),
        z: Math.floor(Math.random() * (10 + 15) - 10)
    }
    object.animate(60, () => {
        if (object.position[0] > field.width) {
            object.speed.x = - object.speed.x
        }
        else if (object.position[0] < -field.width) {
            object.speed.x = - object.speed.x
        }
        if (object.position[2] > field.height * 2) {
            object.speed.z = - object.speed.z
        }
        else if (object.position[2] < -field.height) {
            object.speed.z = - object.speed.z
        }
        object.move(object.speed.x * speedMultiply, 0, object.speed.z * speedMultiply)
    })
}

camera.setControl(() => {
    if (controls.mouse.buttons[0]) {
        shotSound.play()
        screamSound.playLoopRandom()
        if (engine.selectedObject != null ) {
            speedMultiply += 0.5
            if (speedMultiply > 4) {
                speedMultiply = 4
            }
            if (engine.selectedObject.hits === 3) {
                engine.selectedObject.destroy()
                if (!engine.selectedObject.friendly) {
                    counter++
                    counterDOMElement.innerHTML = 'You killed ' + counter + ' enemies. \n ' +
                        + (enemiesCount - counter) + ' left.'
                    if (counter == enemiesCount) {
                        winScreen.show()
                        screamSound.stop()
                        engine.stop()
                    }
                } else {
                    loseScreen.show()
                    screamSound.stop()
                    engine.stop()
                }
            } else {
                engine.selectedObject.hits++
            }
            controls.mouse.buttons[0] = false
        }
    }

    if (controls.isFocused) {
        camera.rotate(controls.mouse.movement.y / 10, controls.mouse.movement.x / 10, 0)
    }
})

controls.onMouseDown(2, scope)
controls.onMouseUp(2, unscope)
controls.addOnBlurHandler(() => {
    screamSound.stop()
})

// Run engine
engine.run()
