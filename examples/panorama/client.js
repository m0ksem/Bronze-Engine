// Getting canvas

var div = document.getElementById("bronze");
div.width = window.innerWidth;
div.height = window.innerHeight;

var engine = new Bronze.Engine(div);

// window.addEventListener("resize", () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   engine.canvasResized();
// });

var camera = new Bronze.Camera(engine);
camera.setPosition(0, 0, 0);
camera.setPosition(60, 0, -300);
camera.setRotation(0, 180, 0);
camera.setFieldOfView(90);
camera.collisions = false;
engine.setCamera(camera);
engine.setDrawingRange(100000000000000);

engine.globalLightMinValue = 0.01;
var moonLight = new Bronze.Light(engine);
moonLight.setPosition(-500, 500, 2500);
moonLight.range = 5000;
moonLight.on();

var skyboxTexture = new Bronze.CubeTexture(engine);
skyboxTexture.setImagesFromPath(
"./assets/skybox/xp.png",
"./assets/skybox/xn.png",
"./assets/skybox/yp.png",
"./assets/skybox/yn.png",
"./assets/skybox/zp.png",
"./assets/skybox/zn.png"
)
// skyboxTexture.setSkybox("./assets/skybox/skybox.png");

// var panorama = new Bronze.Object(engine);
// panorama.setTexture(skyboxTexture)
// console.log(engine.shaders.cube)
// console.log(engine.shaders.default)
// panorama.loadFromObj("assets/objects/cube.obj");
// panorama.useShader(engine.shaders.cube)

// panorama.setPosition(0, 0, 0)
// panorama.scale(1000, 1000, 1000);

var skybox = new Bronze.Skybox(engine)
    skybox.setTexture(skyboxTexture)

var controls = new Bronze.Controls(engine);
controls.lockPointer(true);
controls.setSensitivity(1);
controls.setControlFunction(function () {
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
    if (engine.selectedObject != null) {
        const object = engine.selectedObject
        if (!controls.keys[17]) {
            object.moveRelativeToTheCamera(controls.mouse.movement.x, 0, controls.mouse.movement.y)
        } else {
            object.moveRelativeToTheCamera(0, -controls.mouse.movement.y, 0)
        }
    }
}

if (controls.mouse.buttons[0] || controls.pointerLocked || controls.touch.actionBeforeMove == 'click') {
    if (controls.keys[17]) {
        camera.rotate(0, 0, (controls.mouse.movement.y / 10)) //+ controls.mouse.movement.x / 10) / 2))
    } else {
        camera.rotate(controls.mouse.movement.y / 10, controls.mouse.movement.x / 10, 0)
    }
}

});

engine.run();
