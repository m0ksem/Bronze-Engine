let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let engine = new Engine(canvas)
let camera = new Camera()
    camera.setPosition(100, 800, 3000)
    camera.setRotation(-45, 0, 0)
    camera.setFieldOfView(60)
    setInterval(function () {
        camera.move(0, 10, 0)
        camera.rotate(0, 0, 0)
    }, 16)
engine.setCamera(camera)

let dirtTexture = new Texture("./assets/texture/dirt.jpg")
    dirtTexture.setColorRGBA(159, 136, 105, 255)



let rect = new Rect(engine)
    rect.setTexture(dirtTexture)
    rect.setSize(2000, 1000)
    rect.setPosition(0, 0, 0)
    rect.rotate(-90, 0, 0)
    rect.setRotationPoint(0, 0, 0)

let cube = new Cube(engine)
    cube.setTexture(dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture)
    cube.setSize(400, 400, 400)
    cube.setPosition(2000, 0, 0)
    cube.rotate(0, 45, 0)
    setInterval(function () {
        cube.rotate(1, 2, 3)
    }, 16)

    cube1 = new Cube(engine)
    cube1.setTexture(dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture)
    cube1.setSize(200, 200, 200)
    cube1.setPosition(0, 0, 0)
    cube1.rotate(0, 45, 0)
    setInterval(function () {
        cube1.rotate(0, 1, 0)
    }, 16)

    cube2 = new Cube(engine)
    cube2.setTexture(dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture)
    cube2.setSize(200, 200, 200)
    cube2.setPosition(400, 0, 0)
    cube2.rotate(0, 45, 0)
    setInterval(function () {
        cube2.rotate(0, 0, 5)
    }, 16)

    
engine.run()
