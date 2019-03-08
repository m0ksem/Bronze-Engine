<h1 align="center"> Bronze-Engine 🧱</h1>

<h4 align="center">Simple game engine based on WebGL with JavaScript.  </h4>

<div style="text-align:center" align="center">
 <a href="http://m0ksem.design/Bronze-Engine/"><b>Deployment</b></a> -
<a href="http://m0ksem.design/Bronze-Engine/docs/"><b>Docs</b></a> -
<a href="https://github.com/m0ksem/Bronze-Engine/projects/2"><b>Development plan</b></a>
</div>

## Using
 1. Download release.
 2. Add            `<script src="Bronze.js"></script>`
 3. Setup engine   `var Engine = new Bronze.Engine(canvas)`
 4. Setup camera   `var camera = new Bronze.Camera(Engine)`
 5. Setup controls `var controls = new Bronze.Controls(Engine)`
 6. Load textures  
```js
let Texture = new Bronze.Texture("path/to/texture.png")  
Texture.setColorRGBA(159, 136, 105, 255)  
Engine.bindTexture(Texture)  
```
 7. Create some objects `var object = new Bronze.Object(Engine)`  
  Load object from obj file `object.loadFromObj("path/to/object.obj")`
  Set texture `object.setTexture(Texture)`
  Set position and rotation using appropriate methods.
## Development
```
# Install dependencies
yarn install

# Serve with hot reload at localhost:8080 
yarn run dev 

# Build for production with minification 
yarn run build.  
```

## Changelogs

 - Changed engine structure to es6.
 - Added finding element under mouse.
 - Added .obj loading.
 
## Author
 ⚰️ <a href="https://github.com/m0ksem">m0ksem</a>
