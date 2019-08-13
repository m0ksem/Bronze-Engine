<h1 align="center"> Bronze-Engine </h1>

<h4 align="center">Simple game engine based on WebGL with JavaScript.  </h4>

<div style="text-align:center" align="center">
 <a href="http://m0ksem.design/Bronze-Engine/docs/globals"><b>Docs</b></a> -
 <a href="https://github.com/m0ksem/Bronze-Engine/projects/2"><b>Development plan</b></a> -
 <a href="https://github.com/m0ksem/Bronze-Editor"><b>Editor</b></a>
</div>

## Examples 

 - 🏗 <a href="http://m0ksem.design/Bronze-Engine/examples/dev"><b>Dev polygon</b></a> - polygon for testing new features.
 - 🎯 <a href="http://m0ksem.design/Bronze-Engine/examples/aim-training/"><b>Aim training</b></a> - simple game shooter game.
 - 👻 <a href="http://m0ksem.design/Bronze-Engine/examples/horror/"><b>Horror</b></a> - the horror game, showing the possibilities of light in the engine.
 - 🧐 <a href="http://m0ksem.design/Bronze-Engine/examples/strategy/"><b>Strategy</b></a> - the game demo, showing the possibilities of camera and different shaders.
 - 🚘 <a href="https://m0ksem.design/Bronze-Engine/examples/nightcall/"><b>Nightcall</b></a> - the game demo, showing the mtl support and work with many objects of the same type.
 
## Plans
<a href="https://github.com/m0ksem/Bronze-Engine/projects/2">Roadmap</a>  
- [X] Create easy object loading.  
- [ ] Create SceneBundler  
- [ ] Create Editor for SceneBundler. Scene can be easy created and deployed in site.    
## Using (vanillaJS)
 1. Setup  
 Download last realese and use it   
 ```js 
 <script src="Bronze.min.js"></script>
 ```
 2. Define engine
 ```js
 // Creating instance of engine
 var engine = new Bronze.Engine(canvas)
 // Creating camera for engine
 var camera = new Bronze.Camera(engine)
 // You can also define controls object for control camera or objects.
 var controls = new Bronze.Controls(engine)
 ```
 3. Map building
```js
// Create all texture files
var texture = new Bronze.Texture(engine)  
    texture.setColor(159, 136, 105, 255)  // If engine draws before all resources loaded color will be shown
    texture.loadFrom("path/to/texture.png")
// Creating instance of some object
var object = new Bronze.Object(Engine)
    object.loadFromObj("path/to/object.obj")
    object.setTexture(texture)
// We can transform him
    object.setPosition(0, 200, 500)
    object.setRotation(0, 90, 45)
    object.scale(2, 3, 2)
// Also we can set animation function
    object.animate(60, (obj) => {
        obj.rotate(+1, 0, 0)
        if (!(obj.position.y == 100)) {
          obj.move(0, -10, 0)
        }
    })
```
## Development
```console
# Install dependencies
yarn install

# Serve with hot reload at localhost:8080 
yarn dev 

# Production build with minification 
yarn run build

# Create docs
yarn run build:docs
```

## Author
© <a href="https://github.com/m0ksem">Nedoshev Maksym</a>
