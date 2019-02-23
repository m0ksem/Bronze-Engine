let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let engine = new Engine(canvas)
engine.initShaders()
engine.setCamera(new Camera())

let dirtTexture = new Texture("./assets/texture/dirt.jpg")
    dirtTexture.setColorRGBA(159, 136, 105, 255)


// let p = new Polygon(engine)
//     p.setTexture(dirtTexture)
//     p.setPosition(0, 0, -200)
//     p.setVertexes([
//         1, 2, 3,
//         700, 800, 900,
//         40, 50, 60,
//     ])
    // p.rotate(0, 180, 0)
//     p.setTextureCoords([
//       0, 0,
//       0, 1,
//       1, 1
//     ])
//     p = new Polygon(engine)
//     p.setTexture(dirtTexture)
//     p.setVertexes([
//       0, 0, 0,
//       100, 100, 0,
//       100, 0, 0,
//     ])
//     p.setTextureCoords([
//       0, 0,
//       1, 1,
//       1, 0
//     ])

  


let rect = new Rect(engine)
    rect.setTexture(dirtTexture)
    rect.setSize(200, 200)
    rect.setPosition(-800, 0, -500)
    rect.setRotationPoint(-100, -100, -100)

//     rect.rotate(45, 45, 0)
//     setInterval(function () {
//         rect.rotate(1, 0, 1)
//     }, 16)
//     rect = new Rect(engine)
//     rect.setTexture(dirtTexture)
//     rect.setPosition(0, -100, -300)
//     rect.setSize(200, 200)
//     rect.rotate(0, 90, 0)
//     rect = new Rect(engine)
//     rect.setTexture(dirtTexture)
//     rect.setPosition(0, 100, -500)
//     rect.setSize(200, 200)
//     rect.rotate(0, 90, 0)
let cube = new Cube(engine)
    cube.setTexture(dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture)
    cube.setSize(400, 400, 400)
    cube.setPosition(800, 0, 0)
    cube.rotate(0, 45, 0)
    setInterval(function () {
        cube.rotate(1, 2, 3)
    }, 16)

    cube1 = new Cube(engine)
    cube1.setTexture(dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture)
    cube1.setSize(200, 200, 200)
    cube1.setPosition(0, 0, 0)
    cube1.rotate(-45, 45, 0)
    setInterval(function () {
        cube1.rotate(0, 1, 0)
    }, 16)

    cube2 = new Cube(engine)
    cube2.setTexture(dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture, dirtTexture)
    cube2.setSize(200, 200, 200)
    cube2.setPosition(400, 0, 0)
    cube2.rotate(-45, 45, 0)
    setInterval(function () {
        cube2.rotate(0, 0, 5)
    }, 16)

    
engine.run()
