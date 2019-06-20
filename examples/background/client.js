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

let camera = new Bronze.Camera()
    camera.setPosition(0, 800, 1500)
    camera.setRotation(-45, 0, 0)
    camera.setFieldOfView(90)
    camera.setCubeCollisionBox(100)
    engine.setCamera(camera)
    engine.setDrawingRange(100000000000000)

let controls = new Bronze.Controls(engine)
controls.lockPointer(true)

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

let vertexShaderSource = document.getElementById('vertexShader').innerHTML
let fragmentShaderSource = document.getElementById('fragShader').innerText
let fragmentErrorShaderSource = document.getElementById('fragShaderError').innerText

let backgroundShader = engine.shaders.addProgram("selected", vertexShaderSource, fragmentShaderSource, options);
engine.shaders.shadersRequireLights.push(engine.shaders.selected)

engine.globalLightMinValue = 0.01
let moonLight = new Bronze.Light(engine)
    moonLight.setPosition(10000, 9000, 10000)
    moonLight.range = 13370
    moonLight.on()

// Run engine
engine.run()
