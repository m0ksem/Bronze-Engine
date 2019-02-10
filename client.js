let engine = new Engine(document.getElementById("canvas"))
engine.initShaders()

let p = new Polygon(engine)
    p.setTexture(new Texture("./assets/texture/dirt.jpg"))
    p.setVertexes([
        -0.5, -0.5,  -0.5,
        -0.5,  0.5,  -0.5,
        0.5, -0.5,  -0.5
    ])

engine.run()