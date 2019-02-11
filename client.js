let canvas = document.getElementById("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight

let engine = new Engine(canvas)
engine.initShaders()

let p = new Polygon(engine)
    p.setTexture(new Texture("./assets/texture/dirt.jpg"))
    p.setVertexes([
        -0.5, -0.5,
        0.5, -0.5,
        -0.5, 0.5
    ])
    p = new Polygon(engine)
    p.setTexture(new Texture("./assets/texture/dirt.jpg"))
    p.setVertexes([
        0.5, 0.5,
        -0.5, 0.5,
        0.5, -0.5
    ])

engine.run()