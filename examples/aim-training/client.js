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
    camera.setRotation(-45, 0, 0)
    camera.setFieldOfView(90)
    engine.setCamera(camera)

let controls = new Bronze.Controls(engine)
// // Setting Debugger @OnlyForDevelopment
// let debug = new Bronze.Debugger(engine)
//     debug.setElement(document.getElementById('debug'))
//     debug.addLog("Mouse x", controls.mouse, "x", debug.createLogView())
//     debug.addLog("Mouse y", controls.mouse, "y", debug.createLogView())
//     debug.addLog("Hitbox x:", engine, "width", debug.createLogView(), (log) => {
//         return log.name + " : " + "Unselected."
//     })
//     debug.addLog("Hitbox y:", camera.position, "", debug.createLogView(), (log) => {
//         return log.name + " : " + "Unselected."
//     })
//     debug.addLog("Object", camera.position, "", debug.createLogView())
//     debug.addLog("Z", camera.position, "", debug.createLogView())

// Setting control function for camera
controls.setSensitivity(1)
controls.lockPointer(true)

let ui = new Bronze.UI(engine)

camera.setControl(() => {
    // All coords
    // let xt = this.rotationMatrix[0] * x + this.rotationMatrix[1] * y + this.rotationMatrix[2] * z + this.rotationMatrix[3]
    // let yt = this.rotationMatrix[4] * x + this.rotationMatrix[5] * y + this.rotationMatrix[6] * z + this.rotationMatrix[7]
    // let zt = this.rotationMatrix[8] * x + this.rotationMatrix[9] * y + this.rotationMatrix[10] * z + this.rotationMatrix[11]
    // if (controls.keys[87]) {
    //     if (controls.keys[16]) {
    //         // camera.move(0, 10, 0)
    //         camera.move(0, 10, 0)
    //     } else {
    //         // camera.move(0, 0, -10)
    //         // camera.move(camera.rotationMatrix[2] * -10, camera.rotationMatrix[6] * -10, camera.rotationMatrix[10] * -10)
    //         camera.move(camera.rotationMatrix[2] * -10, 0, camera.rotationMatrix[10] * -10)
    //     }
    // }
    // if (controls.keys[83]) {
    //     if (controls.keys[16]) {
    //         // camera.move(0, -10, 0)
    //         camera.move(0, -10, 0)
    //     } else {
    //         // camera.move(0, 0, 10)
    //         // camera.move(camera.rotationMatrix[2] * 10, camera.rotationMatrix[6] * 10, camera.rotationMatrix[10] * 10)
    //         camera.move(camera.rotationMatrix[2] * 10, 0, camera.rotationMatrix[10] * 10)
    //     }
    // }
    // if (controls.keys[65]) {
    //     // camera.move(-10, 0, 0)
    //     camera.move(camera.rotationMatrix[0] * -10, camera.rotationMatrix[4] * -10, camera.rotationMatrix[8] * -10)
    // }
    // if (controls.keys[68]) {
    //     // camera.move(10, 0, 0)
    //     camera.move(camera.rotationMatrix[0] * 10, camera.rotationMatrix[4] * 10, camera.rotationMatrix[8] * 10)
    // }

    
    if (controls.mouse.buttons[2]) {
        if (engine.selectedObject != null) {
            const object = engine.selectedObject
            object.moveRelativeToTheCamera(controls.mouse.movement.x, -controls.mouse.movement.y, 0)
        }
    }

    if (controls.mouse.buttons[0] || controls.pointerLocked) {
        if (controls.keys[17]) {
            camera.rotate(0, 0, (controls.mouse.movement.y / 10)) //+ controls.mouse.movement.x / 10) / 2))
        } else {
            camera.rotate(controls.mouse.movement.y / 10, controls.mouse.movement.x / 10, 0)
        }
    }
})

// Loading textures
let gunTexture = new Bronze.Texture("./assets/texture/m4a1.png")
    gunTexture.setColorRGBA(41, 46, 48, 255)
let landTexture = new Bronze.Texture("./assets/texture/land.jpg")
    landTexture.setColorRGBA(51, 130, 0, 255)
let targetTexture = new Bronze.Texture("./assets/texture/target.png")
    targetTexture.setColorRGBA(0, 0, 0, 255)

// Binding textures
engine.bindTexture(gunTexture)
engine.bindTexture(landTexture)
engine.bindTexture(targetTexture)


let rect
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 16; x++) {
            rect = new Bronze.Rect(engine)
            rect.setTexture(landTexture)
            rect.setSize(1000, 1000)
            rect.setPosition(-8000 + 1000 * x, 0, 4000 - 1000 * y)
            rect.rotate(-90, 0, 0)
            rect.setRotationPoint(0, 0, 0)
            rect.setNormals([
                0, 1, 0,
                0, 1, 0,
                0, 1, 0,
            ])
        }
    }


let gun = new Bronze.Object(engine)
    gun.UIElement = true
    gun.setTexture(gunTexture)
    gun.setPosition(30, -40, -80)
    gun.name = "gun"
    gun.loadFromObj("assets/objects/m4a1.obj")
    gun.setRotationPoint(0, 0, -50)
    gun.setRotation(Bronze.degToRad(5), 160, 0)
    gun.scale(2, 2, 2)

for (let i = 0; i < 15; i++) {
    let position = {
        x: Math.floor(Math.random() * (5000 + 5000) - 5000),
        z: Math.floor(Math.random() * (-800 + 2000) - 2000)
    }
    let object = new Bronze.Object(engine)
        object.setTexture(gunTexture)
        object.setPosition(position.x, 0, position.z)
        object.name = "gun"
        object.loadFromObj("assets/objects/targhet.obj")
        object.setRotationPoint(0, 0, -50)
        object.setRotation(0, 0, 0)
        object.scale(30, 30, 30)

        let move = Math.floor(Math.random() * (3 + 3) - 3)
        object.animate(60, () => {
            object.move(move, 0, 0)
        })
}

// Run engine
engine.run()
