// Getting canvas
var div = document.getElementById('bronze')
div.width = window.innerWidth
div.height = window.innerHeight

var engine = new Bronze.Engine(div)

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    engine.canvasResized()
})

var camera = new Bronze.Camera(engine)
    camera.setPosition(1500, 100, 1500)
    camera.setRotation(0, 0, 0)
    camera.setFieldOfView(90)
    camera.setCubeCollisionBox(100)
    engine.setCamera(camera)
    engine.setDrawingRange(100000000000000)

var controls = new Bronze.Controls(engine)
// controls.lockPointer(true)

var debug = new Bronze.Debugger(engine)
debug.setElement(document.getElementById('debug'))
debug.addLog(debug.createLogView(), () => {
    return 'Status ' + engine.status
})
debug.addLog(debug.createLogView(), () => {
    return 'Mouse position ' + controls.mouse.x + ' ' + controls.mouse.y
})
debug.addLog(debug.createLogView(), () => {
    return 'Mouse movement ' + controls.mouse.movement.x + ' ' + controls.mouse.movement.y
})
debug.addLog(debug.createLogView(), () => {
    if (engine.selectedObject) {
        return 'Selected object name ' + engine.selectedObject.name
    } else {
        return 'No objects selected'
    }
})


var ui = new Bronze.UI(engine)
ui.appendDOMElement(debug.element)

// Setting control function for camera
controls.setSensitivity(1)

let toCameraRange = null;

controls.setControlFunction(function () {
    // All coords
    // var xt = this.rotationMatrix[0] * x + this.rotationMatrix[1] * y + this.rotationMatrix[2] * z + this.rotationMatrix[3]
    // var yt = this.rotationMatrix[4] * x + this.rotationMatrix[5] * y + this.rotationMatrix[6] * z + this.rotationMatrix[7]
    // var zt = this.rotationMatrix[8] * x + this.rotationMatrix[9] * y + this.rotationMatrix[10] * z + this.rotationMatrix[11]
    if (controls.keys[87]) {
        if (controls.keys[16]) {
            // camera.move(0, 10, 0)
            camera.move(0, 10, 0)
        } else {
            // camera.move(0, 0, -10)
            // camera.move(camera.rotationMatrix[2] * -10, camera.rotationMatrix[6] * -10, camera.rotationMatrix[10] * -10)
            camera.move(camera.inverseRotationMatrix[2] * -10, 0, camera.inverseRotationMatrix[10] * -10)
        }
    }
    if (controls.keys[83]) {
        if (controls.keys[16]) {
            // camera.move(0, -10, 0)
            camera.move(0, -10, 0)
        } else {
            // camera.move(0, 0, 10)
            // camera.move(camera.rotationMatrix[2] * 10, camera.rotationMatrix[6] * 10, camera.rotationMatrix[10] * 10)
            camera.move(camera.inverseRotationMatrix[2] * 10, 0, camera.inverseRotationMatrix[10] * 10)
        }
    }
    if (controls.keys[65]) {
        // camera.move(-10, 0, 0)
        camera.move(camera.inverseRotationMatrix[0] * -10, camera.inverseRotationMatrix[4] * -10, camera.inverseRotationMatrix[8] * -10)
    }
    if (controls.keys[68]) {
        // camera.move(10, 0, 0)
        camera.move(camera.inverseRotationMatrix[0] * 10, camera.inverseRotationMatrix[4] * 10, camera.inverseRotationMatrix[8] * 10)
    }


    if (controls.mouse.buttons[2] || controls.touch.actionBeforeMove == 'long click') {
        if (engine.selectedObject) {
            const object = engine.selectedObject
            if (!controls.keys[17]) {
                toCameraRange = toCameraRange || Bronze.Vector3.distance(object.camera.position, object.position);
                object.moveRelativeToTheCamera(controls.mouse.x, controls.mouse.y, toCameraRange)
            } else {
                object.moveRelativeToTheCamera(0, -controls.mouse.movement.y, 0)
            }
        }
    } else {
        toCameraRange = null;
    }

    if (controls.mouse.buttons[0] || controls.pointerLocked || controls.touch.actionBeforeMove == 'click') {
        if (controls.keys[17]) {
            camera.rotate(0, 0, (controls.mouse.movement.y / 10)) //+ controls.mouse.movement.x / 10) / 2))
        } else {
            camera.rotate(controls.mouse.movement.y / 10, controls.mouse.movement.x / 10, 0)
        }
    }

    // engine.globalLightPosition = [engine.camera.position[0], engine.camera.position[1] + 500, engine.camera.position[2] + 500]
})

engine.globalLightMinValue = 0.01
// var moonLight = new Bronze.Light(engine)
//     moonLight.setPosition(10000, 9000, 10000)
//     moonLight.range = 20000
//     moonLight.on()
var light = new Bronze.Light(engine)
    // light.setPosition(0, 500, -250)
    // light.range = 1200
    // light.on()
    // light = new Bronze.Light(engine)
    // light.setPosition(0, 500, 800)
    // light.range = 3200
    // light.on()
    // light = new Bronze.Light(engine)
    light.setPosition(2000, 500, 800)
    light.range = 2000
    light.on()

// Loading textures
var dirtTexture = new Bronze.SimpleTexture(engine)
    dirtTexture.setColor(159, 136, 105, 255)
    dirtTexture.setSize(64, 64)
    dirtTexture.loadFrom("./assets/texture/dirt.jpg")
var rjunTexture = new Bronze.SimpleTexture(engine)
    rjunTexture.setColor(255, 255, 255, 255)
    rjunTexture.setSize(64, 64)
    rjunTexture.loadFrom('./assets/texture/rjun.jpg')
var grassTexture = new Bronze.SimpleTexture(engine)
    grassTexture.setColor(255, 255, 255, 255)
    grassTexture.mipmapFilter = 'LINEAR_MIPMAP_LINEAR'
    grassTexture.setMipmapGenerationMethod(grassTexture.AUTO_GENERATE)
    grassTexture.setSize(64, 64)
    grassTexture.loadFrom('./assets/texture/grass.png')
var gridTexture = new Bronze.SimpleTexture(engine)
    gridTexture.setColor(255, 255, 255, 255)
    gridTexture.mipmapFilter = 'LINEAR_MIPMAP_LINEAR'
    gridTexture.setMipmapGenerationMethod(gridTexture.QUICK_GENERATE)
    gridTexture.loadFrom('./assets/texture/grid/grid.png')
var transparentTexture = new Bronze.SimpleTexture(engine)
    transparentTexture.setColor(255, 255, 255, 255)
    transparentTexture.loadFrom('./assets/texture/road.png')
    transparentTexture.alpha = true
var transparentTextureDoor = new Bronze.SimpleTexture(engine)
    transparentTextureDoor.setColor(255, 255, 255, 255)
    transparentTextureDoor.loadFrom('./assets/texture/door.png')
    transparentTextureDoor.alpha = true
var colaTexture = new Bronze.SimpleTexture(engine)
    colaTexture.setColor(255, 255, 255, 255)
    colaTexture.loadFrom('./assets/texture/cola.png')
var woodTexture = new Bronze.SimpleTexture(engine)
    woodTexture.setColor(255, 255, 255, 255)
    woodTexture.loadFrom('./assets/texture/grass.png')

var cubeTexture = new Bronze.CubeTexture(engine)
    cubeTexture.setLoadingImages(grassTexture.image, grassTexture.image, grassTexture.image, grassTexture.image, grassTexture.image, grassTexture.image)

var skyboxTexture = new Bronze.CubeTexture(engine)
    skyboxTexture.setSkybox('./assets/texture/skybox.png')

var skybox = new Bronze.Skybox(engine)
    skybox.setTexture(skyboxTexture)

var glass = new Bronze.Glass(engine)

// Setting elements and objects 
var grid = new Bronze.Grid(engine)
    grid.setTexture(gridTexture)
    grid.setCellSize(1000, 1000)
    grid.setSize(50000, 50000)
    grid.setPosition(0, -5, 0)
    grid.setRotation(-90, 0, 0)

    width = 10000, height = 10000
var rect = new Bronze.Rect(engine)
    rect.setTexture(grassTexture)
    rect.setTextureRepeating(10, 10)
    rect.setSize(10000, 10000)
    rect.setPosition(0, 5, 0)
    rect.rotate(-90, 0, 0)
    rect.setRotationPoint(0, 0, 0)

    rect = new Bronze.Rect(engine)
    rect.setTexture(transparentTexture)
    rect.setSize(1000, 1000)
    rect.setPosition(0, 10, 1000)
    rect.rotate(-90, 0, 0)
    rect.setRotationPoint(0, 0, 0)

    rect = new Bronze.Rect(engine)
    rect.setTexture(dirtTexture)
    rect.setSize(1000, 1000)
    rect.setPosition(0, 500, -500)
    rect.rotate(0, 0, 0)
    rect.setRotationPoint(0, 0, 0)

    rect = new Bronze.Rect(engine)
    rect.setTexture(dirtTexture)
    rect.setSize(1000, 1000)
    rect.setPosition(500, 500, 0)
    rect.rotate(0, -90, 0)
    rect.setRotationPoint(0, 0, 0)

    rect = new Bronze.Rect(engine)
    rect.setTexture(rjunTexture)
    rect.setSize(1000, 1000)
    rect.setPosition(-500, 500, 0)
    rect.rotate(0, 90, 0)
    rect.setRotationPoint(0, 0, 0)

    rect = new Bronze.Rect(engine)
    rect.setTexture(transparentTextureDoor)
    rect.setSize(1000, 1000)
    rect.setPosition(0, 500, 500)
    rect.rotate(0, 0, 0)

    rect = new Bronze.Rect(engine)
    rect.setTexture(transparentTextureDoor)
    rect.setSize(1000, 1000)
    rect.setPosition(0, 500, 500)
    rect.rotate(0, 180, 0)

    rect = new Bronze.Rect(engine)
    rect.setTexture(woodTexture)
    rect.setSize(1000, 1000)
    rect.setPosition(0, 1000, 0)
    rect.setRotation(90, 0, 0)

var deerRef = new Bronze.Object(engine)
    deerRef.name = "Deer transparent with reflection"
    deerRef.setPosition(0, 0, 0)
    deerRef.loadFromObj("assets/objects/deer.obj")
    deerRef.scale(0.3, 0.3, 0.3)
    deerRef.setTexture(new Bronze.ReflectionTexture(engine, 'rgba(117, 171, 188, 0.2)', 1024, 0.7))
    deerRef.useMaterial(glass)
    deerRef.verticalAlign = false
    deerRef.selectable
    // deerRef.animate(60, (object) => {
    //     object.rotate(1, 2, 3)
    // })

var cola1 = new Bronze.Object(engine)
    cola1.setPosition(500, 0, 1200)
    cola1.name = "box on ground"
    cola1.loadFromObj("assets/objects/cola.obj")
    cola1.setRotationPoint(0, 0, 0)
    cola1.scale(7, 7, 7)
    cola1.setTexture(new Bronze.ReflectionTexture(engine, 'rgba(117, 171, 188, 0.2)', 1024, 0.9))
    cola1.useMaterial(glass)
    cola1.verticalAlign = false
    cola1.animate(60, () => {
        cola1.rotate(0, 0.2, 0)
    })

var deer2 = new Bronze.Object(engine)
    deer2.name = "Deer normal scaled on 0.3"
    deer2.setPosition(2000, 0, 800)
    deer2.loadFromObj("assets/objects/deer.obj")
    deer2.scale(0.3, 0.3, 0.3)
    deer2.verticalAlign = false
    deer2.selectable = true

var cola2 = new Bronze.Object(engine)
    cola2.UIElement = true
    cola2.setTexture(colaTexture)
    cola2.setPosition(100, 100, -1400)
    cola2.name = "UI ELEMENT BOX"
    cola2.loadFromObj("assets/objects/cola.obj")
    cola2.setRotationPoint(0, 0, 0)
    cola2.setRotation(90, 25, 0)
    cola2.scale(20, 20, 20)
    // cola2.animate(60, (object) => {
    //     object.rotate(1, 2, 3)
    // })


var cubeObj = new Bronze.Object(engine)
    cubeObj.setPosition(-2500, 150, 00)
    cubeObj.name = "cube"
    cubeObj.loadFromObj("assets/objects/cube.obj")
    cubeObj.setRotationPoint(0, 0, 0)
    cubeObj.scale(200, 200, 200)
    cubeObj.setTexture(rjunTexture)
    // cubeObj.setTexture(new Bronze.ReflectionTexture(engine, 'rgba(117, 171, 188, 0.0)', 1024, 1))
    // cubeObj.useMaterial(glass)
    cubeObj.alpha = true
    // cubeObj.verticalAlign = false

var kitten = new Bronze.Object(engine)
    kitten.setTexture(engine.noTexture)
    kitten.setPosition(1500, 100, 0)
    kitten.name = "Kitten"
    kitten.loadFromObj("assets/objects/kitten.obj")
    kitten.setRotation(0, 180, 0)
    kitten.scale(100, 100, 100)
    kitten.verticalAlign = false
    // kitten.animate(60, (object) => {
    //     object.rotate(1, 2, 3)
    // })
    kitten.selectable = true

var kitten2 = new Bronze.Object(engine)
    kitten2.setTexture(engine.noTexture)
    kitten2.setPosition(1300, 100, 0)
    kitten2.name = "Kitten"
    kitten2.loadFromObj("assets/objects/kitten.obj")
    kitten2.setRotation(0, 180, 0)
    kitten2.scale(100, 100, 100)
    kitten2.verticalAlign = false
    // kitten.animate(60, (object) => {
    //     object.rotate(1, 2, 3)
    // })
    kitten2.selectable = true

// function objectToString(obj, level = 0) {
//     var str = '{\n'
//     var keys = Object.keys(obj)
//     keys.forEach(key => {
//         var item = obj[key]
//         if (item.constructor instanceof Array) {
//             str += '\n' + objectToString(item)
//         } else if (item.constructor instanceof Number ||
//                    item.constructor instanceof String) {
//             str += key + ': ' + obj[key] + ',\n'
//         } else if (item.constructor instanceof Object) {
//             str += '\n' + objectToString(item)
//         } else {
//             str += key + ': ' + obj[key] + ',\n'
//         }
//     });
//     str += '}'
//     return str
// }

var uiKitten = new Bronze.Object(engine)
    uiKitten.UIElement = true
    uiKitten.setPosition(90, 0, -100)
    uiKitten.name = "UI ELEMENT BOX"
    uiKitten.loadFromObj("assets/objects/kitten.obj")
    uiKitten.setRotationPoint(0, 0, 0)
    uiKitten.setRotation(90, 25, 0)
    uiKitten.scale(20, 20, 20)
    // uiKitten.animate(60, (object) => {
    //     object.rotate(1, 2, 3)
    // })

// Run engine
engine.run()
