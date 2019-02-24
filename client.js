let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let engine = new Engine(canvas)
let camera = new Camera()
    camera.setPosition(0, 800, 0)
    camera.setRotation(-90, 0, 0)
    // camera.setPosition(0, 800, 600)
    // camera.setRotation(-45, 180, 0)
    camera.setFieldOfView(90)
    let xrot = 0.1, yrot = 0, zrot = 0;
    let movz = 2
    setInterval(function () {
        camera.move(0, 0, movz)
        camera.rotate(xrot, yrot, zrot)
        if (camera.rotation[0] > -45) {
            xrot = 0
            movz = 0
            yrot = 1
        }
        if (camera.rotation[1] > 180) {
            yrot = 0
        }
    }, 6)
engine.setCamera(camera)

let dirtTexture = new Texture("./assets/texture/dirt.jpg")
    dirtTexture.setColorRGBA(159, 136, 105, 255)
let rjunTexture = new Texture("./assets/texture/rjun.jpg")
    rjunTexture.setColorRGBA(159, 136, 105, 255)



let rect = new Rect(engine)
    rect.setTexture(dirtTexture)
    rect.setSize(1000, 1000)
    rect.setPosition(-500, 0, 500)
    rect.rotate(-90, 0, 0)
    rect.setRotationPoint(0, 0, 0)

let cube = new Cube(engine)
    cube.setTexture(dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture)
    cube.setSize(400, 400, 400)
    cube.setPosition(1000, 0, 200)
    cube.rotate(0, 45, 0)
    // setInterval(function () {
    //     cube.rotate(1, 2, 3)
    // }, 16)

    cube1 = new Cube(engine)
    cube1.setTexture(dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture)
    cube1.setSize(200, 200, 200)
    cube1.setPosition(-100, 0, 100)
    cube1.rotate(0, 45, 0)
    // setInterval(function () {
    //     cube1.rotate(0, 1, 0)
    // }, 16)

    cube2 = new Cube(engine)
    cube2.setTexture(dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture)
    cube2.setSize(200, 200, 200)
    cube2.setPosition(-100, 0, 100)
    cube2.rotate(0, 45, 0)
    // setInterval(function () {
    //     cube2.rotate(0, 0, 5)
    // }, 16)

    cube3 = new Cube(engine)
    cube3.setTexture(rjunTexture, rjunTexture, rjunTexture, rjunTexture, rjunTexture, rjunTexture)
    cube3.setSize(200, 200, 200)
    cube3.setPosition(-100, 0, 1600)
    cube3.rotate(30, 45, 0)
    // setInterval(function () {
    //     cube3.rotate(0, 1, 0)
    // }, 16)

    
engine.run()
