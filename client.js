let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let engine = new Engine(canvas)
engine.initShaders()
engine.setCamera(new Camera())

let dirtTexture = new Texture("./assets/texture/dirt.jpg")
    dirtTexture.setColorRGBA(159, 136, 105, 255)


let p = new Polygon(engine)
    p.setTexture(dirtTexture)
    p.setVertexes([
      0, 0, 0,
      0, 100, 0,
      100, 100, 0,
      100, 0, 0,
      0, 0, 0
    ])
    p.setTextureCoords([
      0, 0,
      0, 1,
      1, 1
    ])
    p = new Polygon(engine)
    p.setTexture(dirtTexture)
    p.setVertexes([
      0, 0, 0,
      100, 100, 0,
      100, 0, 0,
    ])
    p.setTextureCoords([
      0, 0,
      1, 1,
      1, 0
    ])

    p = new Polygon(engine)
    p.setTexture(dirtTexture)
    p.setVertexes([
        // left column front
        0,   0,  0,
        0, 150,  0,
        30,   0,  0,
        0, 150,  0,
        30, 150,  0,
        30,   0,  0,

        // top rung front
        30,   0,  0,
        30,  30,  0,
        100,   0,  0,
        30,  30,  0,
        100,  30,  0,
        100,   0,  0,

        // middle rung front
        30,  60,  0,
        30,  90,  0,
        67,  60,  0,
        30,  90,  0,
        67,  90,  0,
        67,  60,  0,

        // left column back
          0,   0,  30,
         30,   0,  30,
          0, 150,  30,
          0, 150,  30,
         30,   0,  30,
         30, 150,  30,

        // top rung back
         30,   0,  30,
        100,   0,  30,
         30,  30,  30,
         30,  30,  30,
        100,   0,  30,
        100,  30,  30,

        // middle rung back
         30,  60,  30,
         67,  60,  30,
         30,  90,  30,
         30,  90,  30,
         67,  60,  30,
         67,  90,  30,

        // top
          0,   0,   0,
        100,   0,   0,
        100,   0,  30,
          0,   0,   0,
        100,   0,  30,
          0,   0,  30,

        // top rung right
        100,   0,   0,
        100,  30,   0,
        100,  30,  30,
        100,   0,   0,
        100,  30,  30,
        100,   0,  30,

        // under top rung
        30,   30,   0,
        30,   30,  30,
        100,  30,  30,
        30,   30,   0,
        100,  30,  30,
        100,  30,   0,

        // between top rung and middle
        30,   30,   0,
        30,   60,  30,
        30,   30,  30,
        30,   30,   0,
        30,   60,   0,
        30,   60,  30,

        // top of middle rung
        30,   60,   0,
        67,   60,  30,
        30,   60,  30,
        30,   60,   0,
        67,   60,   0,
        67,   60,  30,

        // right of middle rung
        67,   60,   0,
        67,   90,  30,
        67,   60,  30,
        67,   60,   0,
        67,   90,   0,
        67,   90,  30,

        // bottom of middle rung.
        30,   90,   0,
        30,   90,  30,
        67,   90,  30,
        30,   90,   0,
        67,   90,  30,
        67,   90,   0,

        // right of bottom
        30,   90,   0,
        30,  150,  30,
        30,   90,  30,
        30,   90,   0,
        30,  150,   0,
        30,  150,  30,

        // bottom
        0,   150,   0,
        0,   150,  30,
        30,  150,  30,
        0,   150,   0,
        30,  150,  30,
        30,  150,   0,

        // left side
        0,   0,   0,
        0,   0,  30,
        0, 150,  30,
        0,   0,   0,
        0, 150,  30,
        0, 150,   0
    ])
    p.setTextureCoords([
      0, 0,
      1, 1,
      1, 0
    ])


// let rect = new Rect(engine)
//     rect.setTexture(dirtTexture)
//     rect.setSize(200, 250)
//     rect.setPosition(0, 0, 0)
//     rect = new Rect(engine)
//     rect.setTexture(dirtTexture)
//     rect.setSize(200, 250)
//     rect.rotate(0, 0, 0)
//     rect = new Rect(engine)
//     rect.setTexture(dirtTexture)
//     rect.setPosition(200, 0, 0)
//     rect.setSize(200, 250)
//     rect.rotate(0, 90, 0)

engine.run()
