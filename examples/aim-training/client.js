// Getting canvas

let div = document.getElementById("bronze");
div.width = window.innerWidth;
div.height = window.innerHeight;

let engine = new Bronze.Engine(div);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  engine.canvasResized();
});

let camera = new Bronze.Camera();
camera.setPosition(0, 700, 0);
camera.setRotation(0, 0, 0);
camera.setFieldOfView(90);
engine.setCamera(camera);

let controls = new Bronze.Controls(engine);
controls.clickForFocus(true);
controls.setSensitivity(1);
controls.lockPointer(true);

// Loading textures
let gunTexture = new Bronze.ColorTexture(engine);
gunTexture.setColor(41, 46, 48, 255);
let targetTexture = new Bronze.ColorTexture(engine);
targetTexture.setColor(225, 0, 0, 255);
let friendlyTexture = new Bronze.ColorTexture(engine);
friendlyTexture.setColor(0, 225, 0, 255);
let crossHairTexture = new Bronze.SimpleTexture(engine);
crossHairTexture.setColor(0, 255, 0, 255);
crossHairTexture.loadFrom("./assets/texture/crosshair.png");
let skyboxTexture = new Bronze.CubeTexture(engine);
skyboxTexture.setImagesFromPath(
  "./assets/texture/skybox/posx.jpg",
  "./assets/texture/skybox/negx.jpg",
  "./assets/texture/skybox/posy.jpg",
  "./assets/texture/skybox/negy.jpg",
  "./assets/texture/skybox/posz.jpg",
  "./assets/texture/skybox/negz.jpg"
);
let shotSound = new Bronze.Sound("./assets/sounds/shot.wav", 60);
let screamSound = new Bronze.Sound(
  ["./assets/sounds/scream1.mp3",
  "./assets/sounds/scream2.mp3",
  "./assets/sounds/scream4.mp3",
  "./assets/sounds/scream4.mp3"]
);
screamSound.delay = 500;

let glass = new Bronze.Glass(engine);

engine.globalLightMinValue = 0.1;
let sunLight = new Bronze.Light(engine);
sunLight.setPosition(-10000, 9000, 10000);
sunLight.range = 133700;
sunLight.on();

let field = {
  width: 4000,
  height: 4000
};

let ui = new Bronze.UI(engine);
let counter = 0;
let counterDOMElement = document.getElementById("counter");
let loseScreen = document.getElementById("lose");
let winScreen = document.getElementById("win");
ui.appendDOMElement(counterDOMElement, "counter", { vertical: 0, horizontal: 0 });
loseScreen = ui.appendDOMElement(loseScreen, "lose", { vertical: 50, horizontal: 50 });
ui.hide(loseScreen);
winScreen = ui.appendDOMElement(winScreen, "win", { vertical: 50, horizontal: 50 });
ui.hide(winScreen);
counterDOMElement.innerHTML = "You killed " + counter + " enemies";
let crossHair = ui.addImage(crossHairTexture.image, 64, 64, ui.centerX - 32, ui.centerY - 32);

let skybox = new Bronze.Skybox(engine);
skybox.setTexture(skyboxTexture);

let gun = new Bronze.Object(engine);
    gun.UIElement = true;
    gun.setTexture(gunTexture);
    gun.setPosition(50, 50, -500);
    gun.name = "gun";
    gun.loadFromObj("assets/objects/m4a1.obj");
    gun.setRotation(5, -180, 0);
    gun.scale(50, 50, 50);

function scope() {
  gun.setPosition(0, 39.5, -400);
  gun.setRotation(-10, -180, 0);
  ui.hide(crossHair);
  camera.setFieldOfView(60);
}

function unscope() {
  gun.setPosition(50, 50, -500);
  gun.setRotation(5, -180, 0);
  ui.show(crossHair);
  camera.setFieldOfView(90);
}

let enemiesCount = 5;

let speedMultiply = 1;

for (let i = 0; i < enemiesCount; i++) {
  let position = {
    x: Math.floor(Math.random() * (field.width / 2 + field.width / 2) - field.width / 2),
    z: Math.floor(Math.random() * (field.height * 2 - -field.height) + -field.height)
  };
  let object = new Bronze.Object(engine);
  object.setTexture(targetTexture);
  object.setPosition(position.x, 0, position.z);
  object.name = "gun";
  object.loadFromObj("assets/objects/targhet.obj");
  object.setRotationPoint(0, 0, -50);
  object.setRotation(0, 0, 0);
  object.scale(30, -Math.floor(Math.random() * (56 - 45) - 45), 30);
  object.hits = 0;
  object.friendly = false;
  object.verticalAlign = false;
  object.selectable = true

  object.speed = {
    x: Math.floor(Math.random() * (10 + 15) - 10),
    z: Math.floor(Math.random() * (10 + 15) - 10)
  };
  object.animate(60, () => {
    if (object.position.x > field.width) {
      object.speed.x = -object.speed.x;
    } else if (object.position.x < -field.width) {
      object.speed.x = -object.speed.x;
    }
    if (object.position.z > field.height * 2) {
      object.speed.z = -object.speed.z;
    } else if (object.position.z < -field.height) {
      object.speed.z = -object.speed.z;
    }
    object.move(object.speed.x * speedMultiply, 0, object.speed.z * speedMultiply);
  });
}

for (let i = 0; i < 30; i++) {
  let position = {
    x: Math.floor(Math.random() * (field.width / 2 + field.width / 2) - field.width / 2),
    z: Math.floor(Math.random() * (field.height * 2 - -field.height) + -field.height)
  };
  let object = new Bronze.Object(engine);
  object.setTexture(friendlyTexture);
  object.setPosition(position.x, 0, position.z);
  object.name = "gun";
  object.loadFromObj("assets/objects/targhet.obj");
  object.setRotationPoint(0, 0, -50);
  object.setRotation(0, 0, 0);
  object.scale(30, -Math.floor(Math.random() * (56 - 45) - 45), 30);
  object.hits = 0;
  object.friendly = true;
  object.verticalAlign = false;
  object.selectable = true

  object.speed = {
    x: Math.floor(Math.random() * (10 + 15) - 10),
    z: Math.floor(Math.random() * (10 + 15) - 10)
  };
  object.animate(60, () => {
    if (object.position.x > field.width) {
      object.speed.x = -object.speed.x;
    } else if (object.position.x < -field.width) {
      object.speed.x = -object.speed.x;
    }
    if (object.position.z > field.height * 2) {
      object.speed.z = -object.speed.z;
    } else if (object.position.z < -field.height) {
      object.speed.z = -object.speed.z;
    }
    object.move(object.speed.x * speedMultiply, 0, object.speed.z * speedMultiply);
  });
}

controls.setControlFunction(() => {
  if (controls.mouse.buttons[0]) {
    shotSound.play();
    if (!screamSound.playing) {
      screamSound.playLoopRandom();
    }

    if (engine.selectedObject != null) {
      speedMultiply += 0.5;
      if (speedMultiply > 4) {
        speedMultiply = 4;
      }
      if (engine.selectedObject.hits === 3 || (engine.selectedObject.hits === 1 && engine.selectedObject.friendly)) {
        engine.selectedObject.destroy();
        if (!engine.selectedObject.friendly) {
          counter++;
          counterDOMElement.innerHTML = "You killed " + counter + " enemies. \n " + +(enemiesCount - counter) + " left.";
          if (counter == enemiesCount) {
            ui.show(winScreen);
            screamSound.stop();
            engine.stop();
          }
        } else {
          ui.show(loseScreen);
          screamSound.stop();
          engine.stop();
        }
      } else {
        engine.selectedObject.hits++;
      }
      controls.mouse.buttons[0] = false;
    }
  }

  if (controls.isFocused) {
    camera.rotate(controls.mouse.movement.y / 10, controls.mouse.movement.x / 10, 0);
  }
});

controls.onMouseDown(2, scope);
controls.onMouseUp(2, unscope);
controls.addOnBlurHandler(() => {
  screamSound.stop();
});

// Run engine
engine.run();
