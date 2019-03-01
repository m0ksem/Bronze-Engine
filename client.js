let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let engine = new Engine(canvas)
let camera = new Camera()
    camera.setPosition(0, 800, 1500)
    camera.setRotation(-45, 0, 0)
    camera.setFieldOfView(90)
    let xrot = 0.1, yrot = 0, zrot = 0;
    let movz = 2
engine.setCamera(camera)

let controls = new Controls(engine)
let lastMousePositionX = null
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
                camera.move(camera.rotationMatrix[2] * -10, 0, camera.rotationMatrix[10] * -10)
            }
        }
        if (controls.keys[83]) {
            if (controls.keys[16]) {
                // camera.move(0, -10, 0)
                camera.move(0, -10, 0)
            } else {
                // camera.move(0, 0, 10)
                // camera.move(camera.rotationMatrix[2] * 10, camera.rotationMatrix[6] * 10, camera.rotationMatrix[10] * 10)
                camera.move(camera.rotationMatrix[2] * 10, 0, camera.rotationMatrix[10] * 10)
            }
        }
        if (controls.keys[65]) {
            // camera.move(-10, 0, 0)
            camera.move(camera.rotationMatrix[0] * -10, camera.rotationMatrix[4] * -10, camera.rotationMatrix[8] * -10)
        }
        if (controls.keys[68]) {
            // camera.move(10, 0, 0)
            camera.move(camera.rotationMatrix[0] * 10, camera.rotationMatrix[4] * 10, camera.rotationMatrix[8] * 10)
        }
        if (controls.mouse.buttons[0]) {
            if (lastMousePosition == null) {
                lastMousePosition = {
                    x: controls.mouse.x, 
                    y: controls.mouse.y
                }
            }
            if (controls.keys[17]) {
                camera.rotate(0, 0, ((controls.mouse.y - lastMousePosition.y) / 10)) //+ (controls.mouse.x - lastMousePosition.x) / 10) / 2))
            } else {
                camera.rotate((controls.mouse.y - lastMousePosition.y) / 10, (controls.mouse.x - lastMousePosition.x) / 10, 0)
            }
            lastMousePosition.x = controls.mouse.x
            lastMousePosition.y = controls.mouse.y
        } else {
            lastMousePosition = null
        }
    })

let dirtTexture = new Texture("./assets/texture/dirt.jpg")
    dirtTexture.setColorRGBA(159, 136, 105, 255)
let rjunTexture = new Texture("./assets/texture/rjun.jpg")
    rjunTexture.setColorRGBA(255, 255, 255, 255)
let grassTexture = new Texture("./assets/texture/grass.png")
    grassTexture.setColorRGBA(255, 255, 255, 255)
let transparentTexture = new Texture("./assets/texture/road.png")
    transparentTexture.setColorRGBA(255, 255, 255, 255)
let transparentTextureDoor = new Texture("./assets/texture/door.png")
    transparentTextureDoor.setColorRGBA(255, 255, 255, 255)
let colaTexture = new Texture("./assets/texture/cola.png")
    colaTexture.setColorRGBA(255, 255, 255, 255)
let fridgeTexture = new Texture("./assets/texture/fridge.png")
    fridgeTexture.setColorRGBA(255, 255, 255, 255)
let woodTexture = new Texture("./assets/texture/wood.jpg")
    woodTexture.setColorRGBA(255, 255, 255, 255)
let houseTexture = new Texture("./assets/texture/house.png")
    houseTexture.setColorRGBA(255, 255, 255, 255)

    engine.bindTexture(dirtTexture)
    engine.bindTexture(rjunTexture)
    engine.bindTexture(grassTexture)
    engine.bindTexture(transparentTexture)
    engine.bindTexture(transparentTextureDoor)
    engine.bindTexture(colaTexture)
    engine.bindTexture(fridgeTexture)
    engine.bindTexture(woodTexture)
    engine.bindTexture(houseTexture)

let rect
    for (let y = 0; y < 8; y++) {
        for (let x = 0; x < 8; x++) {
            rect = new Rect(engine)
            rect.setTexture(grassTexture)
            rect.setSize(1000, 1000)
            rect.setPosition(-4000 + 1000 * x, 0, 4000 - 1000 * y)
            rect.rotate(-90, 0, 0)
            rect.setRotationPoint(0, 0, 0)
            rect.setNormals([
                0, 1, 0,
                0, 1, 0,
                0, 1, 0,
            ])
        }
    }
    rect = new Rect(engine)
    rect.setTexture(transparentTexture)
    rect.setSize(1000, 1000)
    rect.setPosition(-500, 1, 1500)
    rect.rotate(-90, 0, 0)
    rect.setRotationPoint(0, 0, 0)
    rect.setNormals([
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,
    ])

    rect = new Rect(engine)
    rect.setTexture(transparentTextureDoor)
    rect.setSize(1000, 1000)
    rect.setPosition(-500, 0, 500)
    rect.rotate(0, 0, 0)
    rect.setRotationPoint(0, 0, 0)
    rect.setNormals([
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
    ])

    rect = new Rect(engine)
    rect.setTexture(dirtTexture)
    rect.setSize(1000, 1000)
    rect.setPosition(-500, 0, -500)
    rect.rotate(0, 0, 0)
    rect.setRotationPoint(0, 0, 0)
    rect.setNormals([
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,
    ])
    rect = new Rect(engine)
    rect.setTexture(dirtTexture)
    rect.setSize(1000, 1000)
    rect.setPosition(500, 0, -500)
    rect.rotate(0, -90, 0)
    rect.setRotationPoint(0, 0, 0)
    rect.setNormals([
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,
    ])
    rect = new Rect(engine)
    rect.setTexture(rjunTexture)
    rect.setSize(1000, 1000)
    rect.setPosition(-500, 0, 500)
    rect.rotate(0, 90, 0)
    rect.setRotationPoint(0, 0, 0)
    rect.setNormals([
        1, 0, 1,
        1, 0, 1,
        1, 0, 1,
    ])


let cube = new Cube(engine)
    cube.setTexture(dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture)
    cube.setSize(400, 400, 400)
    cube.setPosition(1000, 0, 200)
    cube.rotate(0, 45, 0)
    cube.animate(60, () => {
        cube.rotate(0.1, 0.2, 0.3)
    })


let cube1 = new Cube(engine)
    cube1.setTexture(dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture)
    cube1.setSize(200, 200, 200)
    cube1.setPosition(-100, 0, 100)
    cube1.rotate(0, 45, 0)
    cube1.animate(60, () => {
        cube1.rotate(0.1, 1, 0)
    })


 let cube2 = new Cube(engine)
    cube2.setTexture(rjunTexture, dirtTexture, rjunTexture, dirtTexture, dirtTexture, dirtTexture)
    cube2.setSize(200, 200, 200)
    cube2.setPosition(-400, 0, 100)
    cube2.rotate(0, 0, 0)
    cube2.animate(60, () => {
        cube2.rotate(2, -0, 0)
    })

let cube3 = new Cube(engine)
    cube3.setTexture(rjunTexture, rjunTexture, rjunTexture, rjunTexture, rjunTexture, rjunTexture)
    cube3.setSize(200, 200, 200)
    cube3.setPosition(-100, 0, 1600)
    cube3.rotate(-15, 45, 0)
    cube3.animate(60, () => {
        cube3.rotate(0, 1, 0)
    })



let object = new Object(engine)
    object.setTexture(colaTexture)
    object.setPosition(250, 0, 800)
    object.loadFromObj("assets/objects/cola.obj")
    // object.rotate(0, 45, 45)
    object.setRotationPoint(0, 0, 0)
    object.scale(10, 10, 10)
    let xpos = 0, ypos = 0, zpos = 0, xdir = -1
    object.animate(30, () => {
        object.setPosition(250 + xpos, 0, zpos + 800)
        xpos += xdir
        if (xpos < -3) {
            xdir = 1
        } else if (xpos > 3) {
            xdir = -1
        }
    }) 

let fridge = new Object(engine)
    fridge.setTexture(fridgeTexture)
    fridge.setPosition(-500, 0, 800)
    fridge.loadFromObj("assets/objects/fridge.obj")
    fridge.scale(10, 10, 10)

let deer = new Object(engine)
    deer.setPosition(1000, 0, 800)
    deer.loadFromObj("assets/objects/deer.obj")
    deer.scale(0.3, 0.3, 0.3)

let house = new Object(engine)
    house.setTexture(houseTexture)
    house.setPosition(-2000, 2, 800)
    house.setRotation(0, 45, 0)
    house.loadFromObj("assets/objects/house.obj")
    house.scale(100, 100, 100)

engine.run()
