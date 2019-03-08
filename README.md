<h1 align="center"> Bronze-Engine 🧱</h1>

<h4 align="center">Simple game engine based on WebGL with JavaScript.  </h4>

<div style="text-align:center" align="center">
 <a href="http://m0ksem.design/Bronze-Engine/"><b>Deployment</b></a> -
 <a href="http://m0ksem.design/Bronze-Engine/docs/global"><b>Docs</b></a> -
 <a href="https://github.com/m0ksem/Bronze-Engine/projects/2"><b>Development plan</b></a> -
 <a href="https://github.com/m0ksem/Bronze-Editor"><b>Editor</b></a>
</div>

## Using
 1. Setup  
 Download last realese and use it `<script src="Bronze.js"></script>`  
 or  
 Add package to your nodejs project `npm i @m0ksem/bronze` or `yarn add @m0ksem/bronze`   
 2. Create engine   `var Engine = new Bronze.Engine(canvas)`
 3. Create camera   `var camera = new Bronze.Camera(Engine)`
 4. Create controls `var controls = new Bronze.Controls(Engine)`
 5. Load textures  
```js
let Texture = new Bronze.Texture("path/to/texture.png")  
Texture.setColorRGBA(159, 136, 105, 255)  
Engine.bindTexture(Texture)  
```
 6. Create some objects `var object = new Bronze.Object(Engine)`  
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
yarn run build

# Create docs
yarn run build-docs
```

## Author
 ⚰️ <a href="https://github.com/m0ksem">m0ksem</a>
