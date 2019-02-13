let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let engine = new Engine(canvas)
engine.initShaders()

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

let rect = new Rect(engine)
    rect.setTexture(dirtTexture)
    rect.setSize(200, 250)

engine.run()
