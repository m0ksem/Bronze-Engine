// Getting canvas
let div = document.getElementById('bronze')
div.width = window.innerWidth
div.height = window.innerHeight

let engine = new Bronze.Engine(div)

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    engine.canvasResized()
})

let camera = new Bronze.Camera(engine)
    camera.setPosition(0, 1200, 1000)
    camera.setRotation(-45, 0, 0)
    camera.setFieldOfView(30)
    camera.setCubeCollisionBox(100)
    engine.setCamera(camera)
    engine.setDrawingRange(100000000000000)

let controls = new Bronze.Controls(engine)
controls.lockPointer(false)

let debug = new Bronze.Debugger(engine)
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


let ui = new Bronze.UI(engine)
ui.appendDOMElement(debug.element)

// Setting control function for camera
controls.setSensitivity(1)
controls.lockPointer(false)

let options = {
    removePrefixes: true,
    addLocationMarker: true
};

let vertexShaderSource = document.getElementById('vertexShader').innerHTML
let fragmentShaderSource = document.getElementById('fragShader').innerText
let fragmentErrorShaderSource = document.getElementById('fragShaderError').innerText

let selectedObjectShader = engine.shaders.addProgram("selected", vertexShaderSource, fragmentShaderSource, options);
engine.shaders.shadersRequireLights.push(engine.shaders.selected)
let selectedObjectErrorShader = engine.shaders.addProgram("selectedError", vertexShaderSource, fragmentErrorShaderSource, options);
engine.shaders.shadersRequireLights.push(engine.shaders.selectedError)


engine.globalLightMinValue = 0.1
let sunLight = new Bronze.Light(engine)
    sunLight.setPosition(0, 500, -500)
    sunLight.range = 5000
    sunLight.on()

let grassTexture = new Bronze.SimpleTexture(engine)
    grassTexture.setColor(255, 255, 255, 255)
    grassTexture.mipmapFilter = 'LINEAR_MIPMAP_LINEAR'
    grassTexture.setMipmapGenerationMethod(grassTexture.AUTO_GENERATE)
    grassTexture.setSize(64, 64)
    grassTexture.loadFrom('./assets/texture/grid/grass.jpg')
let gridTexture = new Bronze.SimpleTexture(engine)
    gridTexture.setColor(255, 255, 255, 255)
    gridTexture.mipmapFilter = 'LINEAR_MIPMAP_LINEAR'
    gridTexture.setMipmapGenerationMethod(gridTexture.QUICK_GENERATE)
    gridTexture.loadFrom('./assets/texture/grid/grid.png')
    gridTexture.alpha = true
let selectedTexture = new Bronze.ColorTexture(engine)
selectedTexture.setColor(0, 204, 0, 127)
    selectedTexture.alpha = true

let houseTexture = new Bronze.SimpleTexture(engine)
    houseTexture.setColor(255, 255, 255, 255)
    houseTexture.loadFrom('./assets/texture/houses/house1.jpg')
let houseTexture2 = new Bronze.SimpleTexture(engine)
    houseTexture2.setColor(255, 255, 255, 255)
    houseTexture2.loadFrom('./assets/texture/houses/house2.jpg')

// Setting elements and objects 
let grid = new Bronze.Grid(engine)
    grid.setTexture(gridTexture)
    grid.setCellSize(100, 100)
    grid.setSize(50000, 50000)
    grid.setPosition(50, 0, 50)
    grid.setRotation(-90, 0, 0)
let grass = new Bronze.Rect(engine)
    grass.setTexture(grassTexture)
    grass.setSize(50000, 50000)
    grass.setCellSize(100, 100)
    grass.setPosition(50, -5, 50)
    grass.setRotation(-90, 0, 0)
let selectRect = new Bronze.Rect(engine)
    selectRect.setSize(100, 100)
    selectRect.setRotation(-90, 0, 0)
    selectRect.setTexture(selectedTexture)
    selectRect.setPosition(0, 2, 0)
let house1 = new Bronze.Object(engine)
    house1.setTexture(houseTexture)
    house1.setPosition(-100, -20, 0)
    house1.name = "House1"
    house1.loadFromObj("assets/objects/house1.obj")
    house1.setRotation(0, 180, 0)
    house1.onload = () => {
        house1.scaleToPixelsX(100, null, null)
    }
    house1.selectable = true
    house1.verticalAlign = false

    house2 = new Bronze.Object(engine)
    house2.setTexture(houseTexture2)
    house2.setPosition(10, 0, 0)
    house2.name = "House1"
    house2.loadFromObj("assets/objects/house2.obj")
    house2.setRotation(0, 180, 0)
    house2.onload = () => {
        house2.scaleToPixelsX(100, null, null)
    }
    house2.selectable = true
    house2.verticalAlign = false

let selectedObject = null
let error = false
let lastPosError = false
controls.setControlFunction(() => {
    if (controls.keys[32] && !error) {
        if (selectedObject != null) {
            selectedObject.useShader(engine.shaders.default)
            selectedObject = null
            selectedTexture.setColor(0, 255, 0, 100)
            controls.keys[32] = false
        }
    }

    if (controls.keys[87]) {
        camera.move(camera.inverseRotationMatrix[2] * -10, 0, camera.inverseRotationMatrix[10] * -10)
    }
    if (controls.keys[83]) {
        camera.move(camera.inverseRotationMatrix[2] * 10, 0, camera.inverseRotationMatrix[10] * 10)
    }
    if (controls.keys[65]) {
        camera.move(camera.inverseRotationMatrix[0] * -10, camera.inverseRotationMatrix[4] * -10, camera.inverseRotationMatrix[8] * -10)
    }
    if (controls.keys[68]) {
        camera.move(camera.inverseRotationMatrix[0] * 10, camera.inverseRotationMatrix[4] * 10, camera.inverseRotationMatrix[8] * 10)
    }

    error = false

    engine.objects.forEach(object => {
        if (Math.abs(object.position.x - selectRect.position.x) < 25 && 
            Math.abs(object.position.z - selectRect.position.z) < 25 &&
            object != selectRect) {
            if (controls.keys[32] && !lastPosError) {
                selectedObject = object
                selectedObject.useShader(engine.shaders.selected)
                selectedTexture.setColor(0, 250, 0, 200)
                controls.keys[32] = false
            } else if (selectedObject != null && object != selectedObject) {
                selectedObject.useShader(engine.shaders.selectedError)
                selectedTexture.setColor(250, 0, 0, 200)
                error = true
            }
        }
    })

    if (selectedObject != null && !error) {
        selectedObject.useShader(engine.shaders.selected)
        selectedTexture.setColor(0, 250, 0, 200)
    }
    lastPosError = error
    selectRect.updateRelativeToCameraPosition()

    let borderX = engine.width / 8
    let borderY = engine.height / 6

    if (controls.keys[39]) {
        if (selectRect.relativeToCameraPosition.max.x > engine.width - borderX) {
            let width = (borderX - (engine.width - selectRect.relativeToCameraPosition.max.x))
            camera.moveAnimate(width, 0, 0, 20)
        } else {
            if (selectedObject) {
                selectedObject.move(100, 0, 0)
            }
            selectRect.move(100, 0, 0)
        }
        controls.keys[39] = false
    }
    if (controls.keys[37]) {
        if (selectRect.relativeToCameraPosition.min.x < borderX) {
            let width = (borderX - selectRect.relativeToCameraPosition.min.x)
            camera.moveAnimate(-width, 0, 0, 20)
        } else {
            if (selectedObject) {
                selectedObject.move(-100, 0, 0)
            }
            selectRect.move(-100, 0, 0)
        }
        controls.keys[37] = false
    }
    if (controls.keys[38]) {
        
        if (selectRect.relativeToCameraPosition.min.y < borderY) {
            let width = (borderX - selectRect.relativeToCameraPosition.min.y)
            camera.moveAnimate(0, 0, -width, 20)
        } else {
            if (selectedObject) {
                selectedObject.move(0, 0, -100)
            }
            selectRect.move(0, 0, -100)
        }
        controls.keys[38] = false
    }
    if (controls.keys[40]) {
        if (selectRect.relativeToCameraPosition.max.y > engine.height - borderY) {
            let width = (borderY - (engine.height - selectRect.relativeToCameraPosition.max.y))
            camera.moveAnimate(0, 0, width, 20)
        } else {
            if (selectedObject) {
                selectedObject.move(0, 0, 100)
            }
            selectRect.move(0, 0, 100)
        }
        controls.keys[40] = false
    }
    
    // else if (selectRect.relativeToCameraPosition.max.x > engine.width - 200) {
    //     camera.move(200 - (engine.width - selectRect.relativeToCameraPosition.min.x), 0, 0)
    // }

    sunLight.setPosition(camera.position.x, 250, camera.position.z)
})

// Run engine
engine.run()
