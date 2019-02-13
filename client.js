let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let engine = new Engine(canvas)
engine.initShaders()

let dirtTexture = new Texture("./assets/texture/dirt.jpg")
  dirtTexture.setCoords([
    0, 0,
    0, 1,
    1, 0,
    0, 1,
    1, 1,
    1, 0
  ])
  dirtTexture.setColorRGBA(159, 136, 105, 255)

let p = new Polygon(engine)
    p.setTexture(dirtTexture)
    p.setVertexes([
        -0.5, -0.5,
        0.5, -0.5,
        -0.5, 0.5
    ])
    p = new Polygon(engine)
    p.setTexture(dirtTexture)
    p.setVertexes([
        0.5, 0.5,
        -0.5, 0.5,
        0.5, -0.5
    ])

engine.run()