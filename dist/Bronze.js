(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Bronze", [], factory);
	else if(typeof exports === 'object')
		exports["Bronze"] = factory();
	else
		root["Bronze"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/Utils.js
/**
 * Returns webgl context
 * 
 * @param {string} id id of canvas on DOM.
 * 
 * @return {CanvasRenderingContext2D} WebGL context.
 */
function getWebGLById(id) {
  var canvas = document.getElementById(id);
  var webGL = canvas.getContext("experimental-webgl");
  window.addEventListener('resize', function () {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  });
  return webGL;
}
/**
 * Returns webgl context
 * 
 * @param {HTMLElement} canvas canvas DOM element.
 * 
 * @return {CanvasRenderingContext2D} WebGL context.
 */

function getWebGL(canvas) {
  var webGL = canvas.getContext("experimental-webgl");
  window.addEventListener('resize', function () {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  });
  return webGL;
}
/**
 * Creates a shader from script DOM element source.
 * There are two types: shader/fragment and shader/vertex.
 * 
 * @param {String} shaderText text content of shader.
 * @param {CanvasRenderingContext2D} webGL webGL context to compile shader.
 * 
 * @return compiled shader.
 */

function compileShader(shaderText, type, webGL) {
  var source = shaderText;
  var shader;

  if (type == "fragment") {
    shader = webGL.createShader(webGL.FRAGMENT_SHADER);
  } else if (type == "vertex") {
    shader = webGL.createShader(webGL.VERTEX_SHADER);
  } else {
    console.log("Wrong shader type");
    return null;
  }

  webGL.shaderSource(shader, source);
  webGL.compileShader(shader);

  if (!webGL.getShaderParameter(shader, webGL.COMPILE_STATUS)) {
    throw "Could not compile shader:" + webGL.getShaderInfoLog(shader);
  }

  return shader;
}
/**
 * Creates a program, attaches shaders and link program.
 * 
 * @param {CanvasRenderingContext2D} webGL WebGL context for creating program.
 * @param vertexShader compiled vertexShader.
 * @param fragmentShader compiled fragmentShader.
 * @param {Bool} [deleteShaders] will delete shader after attaching.
 * 
 * @return shader program.
 */

function createWebGLProgram(webGL, vertexShader, fragmentShader, deleteShaders) {
  var shaderProgram = webGL.createProgram();
  webGL.attachShader(shaderProgram, vertexShader);
  webGL.attachShader(shaderProgram, fragmentShader);
  webGL.linkProgram(shaderProgram);
  webGL.useProgram(shaderProgram);

  if (deleteShaders) {
    webGL.deleteShader(vertexShader);
    webGL.deleteShader(fragmentShader);
  }

  return shaderProgram;
}
// CONCATENATED MODULE: ./src/Texture.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Texture =
/*#__PURE__*/
function (_Image) {
  _inherits(Texture, _Image);

  /**
   * Texture for polygons.
   * @param {String} path - path to image location.
   * @param {Number} [width] - custom width for image.
   * @param {Number} [height] - custom height for image.
   */
  function Texture(path, width, height) {
    var _this;

    _classCallCheck(this, Texture);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Texture).call(this));
    _this.src = path;

    if (width != null && height != null) {
      _this.width = width;
      _this.height = height;
    }

    _this.coords = [];

    _this.addEventListener('load', function () {
      _this.loaded = true;
    });

    _this.color = new Uint8Array([255, 255, 255, 255]);
    _this._textureBlockLocation = null;
    return _this;
  }
  /**
   * Scale image width by x, height by y.
   * @param {Number} x
   * @param {Number} y
   */


  _createClass(Texture, [{
    key: "scale",
    value: function scale(x, y) {
      this.width = width * x;
      this.height = height * y;
    }
    /**
     * Setting texture coords.
     * @param {Array} coords 
     */

  }, {
    key: "setCoords",
    value: function setCoords(coords) {
      this.coords = coords;
    }
    /**
     * Setting color of polygon. The color will be shown until the texture is loaded.
     * @param {Number} r red value from 0 to 255.
     * @param {Number} g green value from 0 to 255.
     * @param {Number} b blue value from 0 to 255.
     * @param {Number} a alpha value from 0 to 255.
     */

  }, {
    key: "setColorRGBA",
    value: function setColorRGBA(r, g, b, a) {
      this.color = new Uint8Array([r, g, b, a]);
    }
  }]);

  return Texture;
}(_wrapNativeSuper(Image));


// CONCATENATED MODULE: ./src/math/Matrixes.js
function Matrixes_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Matrixes_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Matrixes_createClass(Constructor, protoProps, staticProps) { if (protoProps) Matrixes_defineProperties(Constructor.prototype, protoProps); if (staticProps) Matrixes_defineProperties(Constructor, staticProps); return Constructor; }

var Matrix =
/*#__PURE__*/
function () {
  /**
   * Create Unit matrix
   */
  function Matrix() {
    Matrixes_classCallCheck(this, Matrix);

    this.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    return this;
  }
  /**
   * Setting this matrix as perspective projection matrix
   * @param {Number} fieldOfViewInRadians fieldOfView of camera
   * @param {Number} width canvas width
   * @param {Number} height canvas height
   * @param {Number} near range of drawn z-coordinates start
   * @param {Number} far range of drawn z-coordinates end
   */


  Matrixes_createClass(Matrix, [{
    key: "perspective",
    value: function perspective(fieldOfViewInRadians, width, height, near, far) {
      var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
      var rangeInv = 1.0 / (near - far);
      this.matrix = [f / (width / height), 0, 0, 0, 0, f, 0, 0, 0, 0, (near + far) * rangeInv, -1, 0, 0, near * far * rangeInv * 2, 0];
      return this;
    }
    /**
     * Mupltiplying this matrix by another
     * @param {Array} matrix 
     */

  }, {
    key: "multiply",
    value: function multiply(matrix) {
      var a00 = this.matrix[0 * 4 + 0];
      var a01 = this.matrix[0 * 4 + 1];
      var a02 = this.matrix[0 * 4 + 2];
      var a03 = this.matrix[0 * 4 + 3];
      var a10 = this.matrix[1 * 4 + 0];
      var a11 = this.matrix[1 * 4 + 1];
      var a12 = this.matrix[1 * 4 + 2];
      var a13 = this.matrix[1 * 4 + 3];
      var a20 = this.matrix[2 * 4 + 0];
      var a21 = this.matrix[2 * 4 + 1];
      var a22 = this.matrix[2 * 4 + 2];
      var a23 = this.matrix[2 * 4 + 3];
      var a30 = this.matrix[3 * 4 + 0];
      var a31 = this.matrix[3 * 4 + 1];
      var a32 = this.matrix[3 * 4 + 2];
      var a33 = this.matrix[3 * 4 + 3];
      var b00 = matrix[0 * 4 + 0];
      var b01 = matrix[0 * 4 + 1];
      var b02 = matrix[0 * 4 + 2];
      var b03 = matrix[0 * 4 + 3];
      var b10 = matrix[1 * 4 + 0];
      var b11 = matrix[1 * 4 + 1];
      var b12 = matrix[1 * 4 + 2];
      var b13 = matrix[1 * 4 + 3];
      var b20 = matrix[2 * 4 + 0];
      var b21 = matrix[2 * 4 + 1];
      var b22 = matrix[2 * 4 + 2];
      var b23 = matrix[2 * 4 + 3];
      var b30 = matrix[3 * 4 + 0];
      var b31 = matrix[3 * 4 + 1];
      var b32 = matrix[3 * 4 + 2];
      var b33 = matrix[3 * 4 + 3];
      this.matrix = [b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30, b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31, b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32, b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33, b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30, b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31, b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32, b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33, b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30, b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31, b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32, b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33, b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30, b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31, b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32, b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33];
    }
    /**
     * Return multyply this matrix by another
     * @param {Array} matrix
     * @return {Array} result of multiply
     */

  }, {
    key: "multiply_",
    value: function multiply_(matrix) {
      var a00 = this.matrix[0 * 4 + 0];
      var a01 = this.matrix[0 * 4 + 1];
      var a02 = this.matrix[0 * 4 + 2];
      var a03 = this.matrix[0 * 4 + 3];
      var a10 = this.matrix[1 * 4 + 0];
      var a11 = this.matrix[1 * 4 + 1];
      var a12 = this.matrix[1 * 4 + 2];
      var a13 = this.matrix[1 * 4 + 3];
      var a20 = this.matrix[2 * 4 + 0];
      var a21 = this.matrix[2 * 4 + 1];
      var a22 = this.matrix[2 * 4 + 2];
      var a23 = this.matrix[2 * 4 + 3];
      var a30 = this.matrix[3 * 4 + 0];
      var a31 = this.matrix[3 * 4 + 1];
      var a32 = this.matrix[3 * 4 + 2];
      var a33 = this.matrix[3 * 4 + 3];
      var b00 = matrix[0 * 4 + 0];
      var b01 = matrix[0 * 4 + 1];
      var b02 = matrix[0 * 4 + 2];
      var b03 = matrix[0 * 4 + 3];
      var b10 = matrix[1 * 4 + 0];
      var b11 = matrix[1 * 4 + 1];
      var b12 = matrix[1 * 4 + 2];
      var b13 = matrix[1 * 4 + 3];
      var b20 = matrix[2 * 4 + 0];
      var b21 = matrix[2 * 4 + 1];
      var b22 = matrix[2 * 4 + 2];
      var b23 = matrix[2 * 4 + 3];
      var b30 = matrix[3 * 4 + 0];
      var b31 = matrix[3 * 4 + 1];
      var b32 = matrix[3 * 4 + 2];
      var b33 = matrix[3 * 4 + 3];
      return [b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30, b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31, b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32, b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33, b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30, b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31, b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32, b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33, b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30, b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31, b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32, b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33, b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30, b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31, b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32, b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33];
    }
    /**
     * Multyplying matrix by transition matrix (x, y, z)
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "translate",
    value: function translate(x, y, z) {
      this.multiply(Matrixes.translation(x, y, z));
    }
    /**
     * Multyplying matrix by transition matrix (x, y, z)
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "translate_",
    value: function translate_(x, y, z) {
      return this.multiply_(Matrixes.translation(x, y, z));
    }
    /**
     * Multiplying matrix by rotationX(angle)
     * @param {Number} angle in radians 
     */

  }, {
    key: "rotateX",
    value: function rotateX(angle) {
      this.multiply(Matrixes.rotationX(angle));
    }
    /**
     * Multiplying matrix by rotationY(angle)
     * @param {Number} angle in radians
     */

  }, {
    key: "rotateY",
    value: function rotateY(angle) {
      this.multiply(Matrixes.rotationY(angle));
    }
    /**
     * Multiplying matrix by rotationZ(angle)
     * @param {Number} angle in radians 
     */

  }, {
    key: "rotateZ",
    value: function rotateZ(angle) {
      this.multiply(Matrixes.rotationZ(angle));
    }
    /**
     * Multoplying matrix by scale matrix (x, y, z)
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "scale",
    value: function scale(x, y, z) {
      this.multiply(Matrixes.scaling(x, y, z));
    }
  }]);

  return Matrix;
}();
/**
 * Class for default matrixes
 * @private
 */

var MatrixesClass =
/*#__PURE__*/
function () {
  function MatrixesClass() {
    Matrixes_classCallCheck(this, MatrixesClass);
  }

  Matrixes_createClass(MatrixesClass, [{
    key: "unit",

    /**
     * Returns unit matrix
     */
    value: function unit() {
      return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    }
    /**
     * Returns translation matrix.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "translation",
    value: function translation(x, y, z) {
      return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
    }
    /**
     * Returns rotation matrix for x axis.
     * @param {Number} angle angle in radians
     */

  }, {
    key: "rotationX",
    value: function rotationX(angle) {
      var c = Math.cos(angle);
      var s = Math.sin(angle);
      return [1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1];
    }
    /**
     * Returns rotation matrix for y axis.
     * @param {Number} angle angle in radians
     */

  }, {
    key: "rotationY",
    value: function rotationY(angle) {
      var c = Math.cos(angle);
      var s = Math.sin(angle);
      return [c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1];
    }
    /**
     * Returns rotation matrix for z axis.
     * @param {Number} angle angle in radians
     */

  }, {
    key: "rotationZ",
    value: function rotationZ(angle) {
      var c = Math.cos(angle);
      var s = Math.sin(angle);
      return [c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    }
    /**
     * Returns scaling matrix for every axis
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "scaling",
    value: function scaling(x, y, z) {
      return [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1];
    }
    /**
     * Returns multiply of two matrixes.
     * @param {Array} matrix1 
     * @param {Array} matrix2 
     */

  }, {
    key: "multiply",
    value: function multiply(matrix1, matrix2) {
      var a00 = matrix1[0 * 4 + 0];
      var a01 = matrix1[0 * 4 + 1];
      var a02 = matrix1[0 * 4 + 2];
      var a03 = matrix1[0 * 4 + 3];
      var a10 = matrix1[1 * 4 + 0];
      var a11 = matrix1[1 * 4 + 1];
      var a12 = matrix1[1 * 4 + 2];
      var a13 = matrix1[1 * 4 + 3];
      var a20 = matrix1[2 * 4 + 0];
      var a21 = matrix1[2 * 4 + 1];
      var a22 = matrix1[2 * 4 + 2];
      var a23 = matrix1[2 * 4 + 3];
      var a30 = matrix1[3 * 4 + 0];
      var a31 = matrix1[3 * 4 + 1];
      var a32 = matrix1[3 * 4 + 2];
      var a33 = matrix1[3 * 4 + 3];
      var b00 = matrix2[0 * 4 + 0];
      var b01 = matrix2[0 * 4 + 1];
      var b02 = matrix2[0 * 4 + 2];
      var b03 = matrix2[0 * 4 + 3];
      var b10 = matrix2[1 * 4 + 0];
      var b11 = matrix2[1 * 4 + 1];
      var b12 = matrix2[1 * 4 + 2];
      var b13 = matrix2[1 * 4 + 3];
      var b20 = matrix2[2 * 4 + 0];
      var b21 = matrix2[2 * 4 + 1];
      var b22 = matrix2[2 * 4 + 2];
      var b23 = matrix2[2 * 4 + 3];
      var b30 = matrix2[3 * 4 + 0];
      var b31 = matrix2[3 * 4 + 1];
      var b32 = matrix2[3 * 4 + 2];
      var b33 = matrix2[3 * 4 + 3];
      return [b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30, b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31, b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32, b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33, b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30, b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31, b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32, b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33, b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30, b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31, b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32, b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33, b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30, b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31, b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32, b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33];
    }
  }, {
    key: "vec3Multiply",
    value: function vec3Multiply(matrix, vector3) {
      // c11 = a11 · b11 + a12 · b21 + a13 · b31 + a14 · b41
      // c21 = a21 · b11 + a22 · b21 + a23 · b31 + a24 · b41
      // c31 = a31 · b11 + a32 · b21 + a33 · b31 + a34 · b41
      // c41 = a41 · b11 + a42 · b21 + a43 · b31 + a44 · b41
      // console.log(matrix[0] * vector3[0] )
      var c1 = matrix[0] * vector3[0] + matrix[1] * vector3[1] + matrix[2] * vector3[2] + matrix[3] * vector3[3];
      var c2 = matrix[4] * vector3[0] + matrix[5] * vector3[1] + matrix[6] * vector3[2] + matrix[7] * vector3[3];
      var c3 = matrix[8] * vector3[0] + matrix[9] * vector3[1] + matrix[10] * vector3[2] + matrix[11] * vector3[3];
      var c4 = matrix[12] * vector3[0] + matrix[13] * vector3[1] + matrix[14] * vector3[2] + matrix[15] * vector3[3];
      return [c1, c2, c3, c4];
    }
  }, {
    key: "transformVector",
    value: function transformVector(matrix, vector) {
      var transformed = new Float32Array(4);

      for (var i = 0; i < 4; ++i) {
        transformed[i] = 0.0;

        for (var j = 0; j < 4; ++j) {
          transformed[i] += vector[j] * matrix[j * 4 + i];
        }
      }

      return transformed;
    }
    /**
    * Computes the inverse of a matrix.
    * @param {Matrix4} matrix matrix to compute inverse of
    * @return {Matrix4} result or a new matrix
    */

  }, {
    key: "inverse",
    value: function inverse(matrix) {
      var result = new Float32Array(16);
      var m00 = matrix[0 * 4 + 0];
      var m01 = matrix[0 * 4 + 1];
      var m02 = matrix[0 * 4 + 2];
      var m03 = matrix[0 * 4 + 3];
      var m10 = matrix[1 * 4 + 0];
      var m11 = matrix[1 * 4 + 1];
      var m12 = matrix[1 * 4 + 2];
      var m13 = matrix[1 * 4 + 3];
      var m20 = matrix[2 * 4 + 0];
      var m21 = matrix[2 * 4 + 1];
      var m22 = matrix[2 * 4 + 2];
      var m23 = matrix[2 * 4 + 3];
      var m30 = matrix[3 * 4 + 0];
      var m31 = matrix[3 * 4 + 1];
      var m32 = matrix[3 * 4 + 2];
      var m33 = matrix[3 * 4 + 3];
      var tmp_0 = m22 * m33;
      var tmp_1 = m32 * m23;
      var tmp_2 = m12 * m33;
      var tmp_3 = m32 * m13;
      var tmp_4 = m12 * m23;
      var tmp_5 = m22 * m13;
      var tmp_6 = m02 * m33;
      var tmp_7 = m32 * m03;
      var tmp_8 = m02 * m23;
      var tmp_9 = m22 * m03;
      var tmp_10 = m02 * m13;
      var tmp_11 = m12 * m03;
      var tmp_12 = m20 * m31;
      var tmp_13 = m30 * m21;
      var tmp_14 = m10 * m31;
      var tmp_15 = m30 * m11;
      var tmp_16 = m10 * m21;
      var tmp_17 = m20 * m11;
      var tmp_18 = m00 * m31;
      var tmp_19 = m30 * m01;
      var tmp_20 = m00 * m21;
      var tmp_21 = m20 * m01;
      var tmp_22 = m00 * m11;
      var tmp_23 = m10 * m01;
      var t0 = tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31 - (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
      var t1 = tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31 - (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
      var t2 = tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31 - (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
      var t3 = tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21 - (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
      var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
      result[0] = d * t0;
      result[1] = d * t1;
      result[2] = d * t2;
      result[3] = d * t3;
      result[4] = d * (tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30 - (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
      result[5] = d * (tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30 - (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
      result[6] = d * (tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30 - (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
      result[7] = d * (tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20 - (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
      result[8] = d * (tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33 - (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
      result[9] = d * (tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33 - (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
      result[10] = d * (tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33 - (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
      result[11] = d * (tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23 - (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
      result[12] = d * (tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12 - (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
      result[13] = d * (tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22 - (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
      result[14] = d * (tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02 - (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
      result[15] = d * (tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12 - (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));
      return result;
    }
  }]);

  return MatrixesClass;
}();
/**
 * Default Matrixes
 */


var Matrixes = new MatrixesClass();
// CONCATENATED MODULE: ./src/math/Vectors.js
/**
 * Normalize a vector.
 * @param {Array[3]} vector vector to normalize.
 * @return {Array[3]} normalized vector
 */
function Vectors_normalize(vector) {
  var result = new Float32Array(3);
  var length = Math.sqrt(vector[0] * vector[0] + vector[1] * vector[1] + vector[2] * vector[2]);

  if (length > 0.00001) {
    result[0] = vector[0] / length;
    result[1] = vector[1] / length;
    result[2] = vector[2] / length;
    return result;
  } else {
    return false;
  }
}
// CONCATENATED MODULE: ./src/math/Math.js
/**
 * Converting radians to degress
 * @param {Number} rad radians
 * @return {Number} degress
 */
function radToDeg(rad) {
  return rad * 180 / Math.PI;
}
/**
 * Converting degress to radians
 * @param {Number} deg
 * @return {Number} radians
 */

function degToRad(deg) {
  return deg * Math.PI / 180;
}
/**
 * Returns true if value is square.
 * @param {Number} value 
 */

function isPowerOf2(value) {
  return (value & value - 1) === 0;
}
// CONCATENATED MODULE: ./src/Engine.js
function Engine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Engine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Engine_createClass(Constructor, protoProps, staticProps) { if (protoProps) Engine_defineProperties(Constructor.prototype, protoProps); if (staticProps) Engine_defineProperties(Constructor, staticProps); return Constructor; }







/* babel-plugin-inline-import './shaders/fragment-shader.glsl' */
var fragmentShaderSource = "precision mediump float;\r\n\r\nvarying vec2 v_texcoord;\r\nvarying vec3 v_normal;\r\n\r\nuniform sampler2D u_texture;\r\nuniform vec3 u_reverseLightDirection;\r\nvarying vec3 v_surfaceToLight;\r\n\r\nvoid main() {\r\n    vec3 normal = normalize(v_normal);\r\n    // float light = dot(normal, u_reverseLightDirection);\r\n    vec3 surfaceToLightDirection = normalize(v_surfaceToLight);\r\n    float light = dot(v_normal, surfaceToLightDirection);\r\n    if (light < 0.5)\r\n        light = 0.5;\r\n    \r\n    gl_FragColor = texture2D(u_texture, v_texcoord);\r\n    gl_FragColor.rgb *= (light);\r\n    if(gl_FragColor.a < 0.2)\r\n        discard;\r\n}";

/* babel-plugin-inline-import './shaders/vertex-shader.glsl' */
var vertexShaderSource = "attribute vec4 a_position;\r\nattribute vec2 a_texcoord;\r\nattribute vec4 a_normal;\r\n\r\nuniform mat4 u_matrix;\r\nuniform mat4 u_objectRotation;\r\nuniform vec3 u_lightWorldPosition;\r\nuniform mat4 u_cameraMatrix;\r\n\r\nvarying vec2 v_texcoord;\r\nvarying vec3 v_normal;\r\nvarying vec3 v_surfaceToLight;\r\n\r\n\r\nvoid main() {\r\n    gl_Position = u_matrix * a_position;\r\n    \r\n    v_texcoord = a_texcoord;\r\n    v_normal = vec3(u_objectRotation * a_normal);\r\n\r\n    vec3 surfaceWorldPosition = (u_cameraMatrix * a_position).xyz;\r\n    \r\n    v_surfaceToLight = u_lightWorldPosition; // - surfaceWorldPosition;\r\n}";
var Engine_Engine =
/*#__PURE__*/
function () {
  /**
   * GameEngine core class.
   * @param {HTMLElement} canvas
   */
  function Engine(canvas) {
    Engine_classCallCheck(this, Engine);

    this.webGL = getWebGL(canvas);
    this.canvas = canvas;
    this.width = canvas.width;
    this.height = canvas.height;
    this.polygons = [];
    this.objects = [];
    this.textures = [];
    this.camera = null;
    this.debugger = null;
    this.controls = null;
    this.selectedObject = null;
    this._globalPossitionBuffer = this.webGL.createBuffer();
    this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._globalPossitionBuffer);
    this._globalTextureBuffer = this.webGL.createBuffer();
    this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._globalTextureBuffer);
    canvas.addEventListener('resize', function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    this.initShaders();
    this.noTexture = new Texture();
    this.noTexture.setColorRGBA(219, 58, 52, 255);
    this.bindTexture(this.noTexture);
  }
  /**
   * Creating shaders and attaching to webGL context.
   */


  Engine_createClass(Engine, [{
    key: "initShaders",
    value: function initShaders() {
      var vertex = compileShader(vertexShaderSource, "vertex", this.webGL);
      var fragment = compileShader(fragmentShaderSource, "fragment", this.webGL);
      this.shaderProgram = createWebGLProgram(this.webGL, vertex, fragment, false);
      this.positionLocation = this.webGL.getAttribLocation(this.shaderProgram, "a_position");
      this.texcoordLocation = this.webGL.getAttribLocation(this.shaderProgram, "a_texcoord");
      this.textureLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_texture");
      this.matrixLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_matrix");
      this.objectRotationLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_objectRotation");
      this.normalLocation = this.webGL.getAttribLocation(this.shaderProgram, "a_normal");
      this.everseLightDirectionLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_reverseLightDirection");
      this.lightWorldPositionLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_lightWorldPosition");
      this.cameraLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_cameraMatrix");
      this.webGL.useProgram(this.shaderProgram);
      this.webGL.viewport(0, 0, this.width, this.height);
      this.webGL.enable(this.webGL.CULL_FACE);
      this.webGL.enable(this.webGL.DEPTH_TEST);
    }
    /**
     * @param {Camera} camera
     */

  }, {
    key: "setCamera",
    value: function setCamera(camera) {
      this.camera = camera;
    }
    /**
     * Binding texture to engine.
     * @param {Texture} texture 
     */

  }, {
    key: "bindTexture",
    value: function bindTexture(texture) {
      var _this = this;

      texture._textureBlockLocation = this.textures.length;
      this.textures.push(texture);
      texture._WebGLtexture = this.webGL.createTexture();
      this.webGL.activeTexture(this.webGL.TEXTURE0 + texture._textureBlockLocation);
      this.webGL.bindTexture(this.webGL.TEXTURE_2D, texture._WebGLtexture);

      if (texture.loaded) {
        this.webGL.texImage2D(this.webGL.TEXTURE_2D, 0, this.webGL.RGBA, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, texture);
        this.webGL.generateMipmap(this.webGL.TEXTURE_2D);

        if (isPowerOf2(image.width) && isPowerOf2(image.height)) {
          this.webGL.generateMipmap(this.webGL.TEXTURE_2D);
        } else {
          this.webGL.texParameteri(this.webGL.TEXTURE_2D, this.webGL.TEXTURE_WRAP_S, this.webGL.CLAMP_TO_EDGE);
          this.webGL.texParameteri(this.webGL.TEXTURE_2D, this.webGL.TEXTURE_WRAP_T, this.webGL.CLAMP_TO_EDGE);
          this.webGL.texParameteri(this.webGL.TEXTURE_2D, this.webGL.TEXTURE_MIN_FILTER, this.webGL.LINEAR);
        }
      } else {
        this.webGL.texImage2D(this.webGL.TEXTURE_2D, 0, this.webGL.RGBA, 1, 1, 0, this.webGL.RGBA, this.webGL.UNSIGNED_BYTE, texture.color);
        texture.addEventListener('load', function () {
          _this.webGL.activeTexture(_this.webGL.TEXTURE0 + texture._textureBlockLocation);

          _this.webGL.texImage2D(_this.webGL.TEXTURE_2D, 0, _this.webGL.RGBA, _this.webGL.RGBA, _this.webGL.UNSIGNED_BYTE, texture);

          if (isPowerOf2(texture.width) && isPowerOf2(texture.height)) {
            _this.webGL.generateMipmap(_this.webGL.TEXTURE_2D);
          } else {
            _this.webGL.texParameteri(_this.webGL.TEXTURE_2D, _this.webGL.TEXTURE_WRAP_S, _this.webGL.CLAMP_TO_EDGE);

            _this.webGL.texParameteri(_this.webGL.TEXTURE_2D, _this.webGL.TEXTURE_WRAP_T, _this.webGL.CLAMP_TO_EDGE);

            _this.webGL.texParameteri(_this.webGL.TEXTURE_2D, _this.webGL.TEXTURE_MIN_FILTER, _this.webGL.LINEAR);
          }
        });
      }
    }
    /**
     * Function to update all positions, size etc.
     */

  }, {
    key: "update",
    value: function update() {
      var _this2 = this;

      var temp;
      var rot;
      var parentRot;
      var world;

      if (this.camera._controlFunction != null) {
        this.camera._controlFunction();
      }

      this.selectedObject = null;
      this.polygons.forEach(function (element) {
        temp = new Matrix();
        temp.perspective(_this2.camera.fieldOfViewRad, _this2.width, _this2.height, 1, 20000);
        temp.multiply(_this2.camera.inserved);
        world = new Matrix();
        world.multiply(Matrixes.inverse(Matrixes.translation(element.rotationPoint[0], element.rotationPoint[1], element.rotationPoint[2])));
        world.translate(element.position[0], element.position[1], element.position[2]);
        rot = Matrixes.multiply(Matrixes.rotationX(element.rotation[0]), Matrixes.rotationY(element.rotation[1]));
        rot = Matrixes.multiply(rot, Matrixes.rotationZ(element.rotation[2]));

        if (element.parentRotation != null) {
          parentRot = Matrixes.multiply(Matrixes.rotationX(element.parentRotation[0]), Matrixes.rotationY(element.parentRotation[1]));
          parentRot = Matrixes.multiply(parentRot, Matrixes.rotationZ(element.parentRotation[2]));
          element._world = parentRot;
          rot = Matrixes.multiply(parentRot, rot);
        }

        world.multiply(rot);
        world.translate(element.rotationPoint[0], element.rotationPoint[1], element.rotationPoint[2]);
        world.scale(1, 1, 1);
        temp.multiply(world.matrix);
        element._matrix = temp.matrix;
        element._rotataionMatrix = rot;
      });
      this.objects.forEach(function (element) {
        temp = new Matrix();
        temp.perspective(_this2.camera.fieldOfViewRad, _this2.width, _this2.height, 1, 20000);
        temp.multiply(_this2.camera.inserved);
        world = new Matrix();
        world.multiply(Matrixes.inverse(Matrixes.translation(element.rotationPoint[0], element.rotationPoint[1], element.rotationPoint[2])));
        world.translate(element.position[0], element.position[1], element.position[2]);
        rot = Matrixes.multiply(Matrixes.rotationX(element.rotation[0]), Matrixes.rotationY(element.rotation[1]));
        rot = Matrixes.multiply(rot, Matrixes.rotationZ(element.rotation[2]));
        parentRot = Matrixes.multiply(Matrixes.rotationX(element.parentRotation[0]), Matrixes.rotationY(element.parentRotation[1]));
        parentRot = Matrixes.multiply(parentRot, Matrixes.rotationZ(element.parentRotation[2]));
        element._world = parentRot;
        rot = Matrixes.multiply(parentRot, rot);
        world.multiply(rot);
        world.translate(element.rotationPoint[0], element.rotationPoint[1], element.rotationPoint[2]);
        world.scale(element.scaling[0], element.scaling[1], element.scaling[2]);
        temp.multiply(world.matrix);
        var mouseOverHitBox = false;
        element.collisionBoxes.forEach(function (collisionBox) {
          var boxInPixels = [];

          for (var ix = 0; ix < collisionBox.x.length; ix++) {
            var x = collisionBox.x[ix];

            for (var iy = 0; iy < collisionBox.y.length; iy++) {
              var y = collisionBox.y[iy];

              for (var iz = 0; iz < collisionBox.z.length; iz++) {
                var z = collisionBox.z[iz];
                var coordsInPixels = Matrixes.transformVector(temp.matrix, [x, y, z, 1]);
                coordsInPixels[0] = coordsInPixels[0] / coordsInPixels[3];
                coordsInPixels[1] = coordsInPixels[1] / coordsInPixels[3];
                coordsInPixels[0] = (coordsInPixels[0] * 0.5 + 0.5) * _this2.width;
                coordsInPixels[1] = (coordsInPixels[1] * -0.5 + 0.5) * _this2.height;
                if (coordsInPixels[0] > -_this2.width && coordsInPixels[0] < _this2.width && coordsInPixels[1] > -_this2.height && coordsInPixels[1] < _this2.height) boxInPixels.push({
                  x: coordsInPixels[0],
                  y: coordsInPixels[1]
                });
              }
            }
          }

          var smallest = [10000, 10000];
          var biggest = [-10000, -10000];

          for (var i = 0; i < boxInPixels.length; i++) {
            var box = boxInPixels[i];

            if (box.x < smallest[0]) {
              smallest[0] = box.x;
            } else if (box.x > biggest[0]) {
              biggest[0] = box.x;
            }

            if (box.y < smallest[1]) {
              smallest[1] = box.y;
            } else if (box.y > biggest[1]) {
              biggest[1] = box.y;
            }
          }

          if (_this2.controls.mouse.x > smallest[0] && _this2.controls.mouse.x < biggest[0] && _this2.controls.mouse.y > smallest[1] && _this2.controls.mouse.y < biggest[1]) {
            mouseOverHitBox = true;
          }

          var mouse = _this2.controls.mouse;

          if (mouseOverHitBox) {
            _this2.selectedObject = element;

            _this2.debugger.logArray[2].output = function () {
              return "Hitbox x " + mouse.x + " > " + smallest[0] + " && " + mouse.x + " < " + biggest[0];
            };

            _this2.debugger.logArray[3].output = function () {
              return "Hitbox y " + mouse.y + " > " + smallest[1] + " && " + mouse.y + " < " + biggest[1];
            };
          }
        });
        var selectedObject = _this2.selectedObject;

        if (selectedObject != null) {
          _this2.debugger.logArray[4].output = function () {
            return "Mouse over " + selectedObject.name;
          };
        } else {
          _this2.debugger.logArray[4].output = function () {
            return "There are no objects over mouse";
          };
        }

        element._matrix = temp.matrix;
        element._rotataionMatrix = rot;
      });
    }
    /**
     * Main drawing function. All polygons are drawn here.
     */

  }, {
    key: "draw",
    value: function draw() {
      var _this3 = this;

      this.webGL.clear(this.webGL.COLOR_BUFFER_BIT | this.webGL.DEPTH_BUFFER_BIT);
      this.webGL.uniform3fv(this.everseLightDirectionLocation, Vectors_normalize([-0.1, 0.5, 1]));
      this.webGL.uniform3fv(this.lightWorldPositionLocation, [0, 100, 400]);
      this.webGL.uniformMatrix4fv(this.cameraLocation, false, this.camera.matrix);
      this.polygons.forEach(function (element) {
        _this3.webGL.enableVertexAttribArray(_this3.positionLocation);

        _this3.webGL.bindBuffer(_this3.webGL.ARRAY_BUFFER, element._vertexesBuffer);

        _this3.webGL.vertexAttribPointer(_this3.positionLocation, 3, _this3.webGL.FLOAT, false, 0, 0);

        _this3.webGL.enableVertexAttribArray(_this3.texcoordLocation);

        _this3.webGL.bindBuffer(_this3.webGL.ARRAY_BUFFER, element._coordsBuffer);

        _this3.webGL.vertexAttribPointer(_this3.texcoordLocation, 2, _this3.webGL.FLOAT, false, 0, 0);

        _this3.webGL.enableVertexAttribArray(_this3.normalLocation);

        _this3.webGL.bindBuffer(_this3.webGL.ARRAY_BUFFER, element._normalBuffer);

        _this3.webGL.vertexAttribPointer(_this3.normalLocation, 3, _this3.webGL.FLOAT, false, 0, 0);

        _this3.webGL.uniform1i(_this3.textureLocation, element.texture._textureBlockLocation);

        _this3.webGL.uniformMatrix4fv(_this3.matrixLocation, false, element._matrix);

        _this3.webGL.uniformMatrix4fv(_this3.objectRotationLocation, false, element._world);

        _this3.webGL.drawArrays(_this3.webGL.TRIANGLES, 0, 3);
      });
      this.objects.forEach(function (o) {
        o.faces.forEach(function (face) {
          // console.log(face)
          _this3.webGL.enableVertexAttribArray(_this3.positionLocation);

          _this3.webGL.bindBuffer(_this3.webGL.ARRAY_BUFFER, face.vertexesBuffer);

          _this3.webGL.vertexAttribPointer(_this3.positionLocation, 3, _this3.webGL.FLOAT, false, 0, 0);

          _this3.webGL.enableVertexAttribArray(_this3.texcoordLocation);

          _this3.webGL.bindBuffer(_this3.webGL.ARRAY_BUFFER, face.coordsBuffer);

          _this3.webGL.vertexAttribPointer(_this3.texcoordLocation, 2, _this3.webGL.FLOAT, false, 0, 0);

          _this3.webGL.enableVertexAttribArray(_this3.normalLocation);

          _this3.webGL.bindBuffer(_this3.webGL.ARRAY_BUFFER, face.normalBuffer);

          _this3.webGL.vertexAttribPointer(_this3.normalLocation, 3, _this3.webGL.FLOAT, false, 0, 0);

          _this3.webGL.uniform1i(_this3.textureLocation, o.texture._textureBlockLocation);

          _this3.webGL.uniformMatrix4fv(_this3.matrixLocation, false, o._matrix);

          _this3.webGL.uniformMatrix4fv(_this3.objectRotationLocation, false, o._world);

          _this3.webGL.drawArrays(_this3.webGL.TRIANGLES, 0, face.vertexes.length / face.vertexesCount);
        });
      });

      if (this.debugger != null) {
        this.debugger.updateInfo();
      } // alert()

    }
    /**
     * Rendering function.
     */

  }, {
    key: "render",
    value: function render() {
      this.update();
      this.draw();
    }
    /**
     * Start rendering.
     */

  }, {
    key: "run",
    value: function run() {
      e = this;
      requestAnimationFrameEngine();
    }
  }]);

  return Engine;
}();
var e;
/**
 * RequestAnimationFrame wrapper for Engine rendering.
 */

function requestAnimationFrameEngine() {
  requestAnimationFrame(requestAnimationFrameEngine);
  e.render();
}

(function () {
  var lastTime = 0;
  var vendors = ['ms', 'moz', 'webkit', 'o'];

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
    window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback, element) {
    var currTime = new Date().getTime();
    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
    var id = window.setTimeout(function () {
      callback(currTime + timeToCall);
    }, timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };
  if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function (id) {
    clearTimeout(id);
  };
})();
// CONCATENATED MODULE: ./src/Camera.js
function Camera_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Camera_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Camera_createClass(Constructor, protoProps, staticProps) { if (protoProps) Camera_defineProperties(Constructor.prototype, protoProps); if (staticProps) Camera_defineProperties(Constructor, staticProps); return Constructor; }




var Camera_Camera =
/*#__PURE__*/
function () {
  /**
   * Creates camera object
   */
  function Camera() {
    Camera_classCallCheck(this, Camera);

    this.position = [0, 0, 100];
    this.up = [0, 1, 0];
    this.target = [0, 0, 0];
    this.fieldOfView = 90;
    this.fieldOfViewRad = degToRad(90);
    this.matrix = Matrixes.unit();
    this.position = [0, 0, 0];
    this.rotation = [0, 0, 0];
    this._collisions = false;
    this._lookUpMatrix = null;
  }
  /**
   * Sets field of view for camera
   * @param {Number} angle 
   */


  Camera_createClass(Camera, [{
    key: "setFieldOfView",
    value: function setFieldOfView(angle) {
      this.fieldOfView = angle;
      this.fieldOfViewRad = degToRad(angle);
    }
    /**
     * Sets collision
     * @param {*} bool 
     */

  }, {
    key: "setCollisions",
    value: function setCollisions(bool) {
      this._collisions = bool;
    }
    /**
     * Absolutly sets position for camera
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "setPosition",
    value: function setPosition(x, y, z) {
      this.position = [x, y, z];
      this.computeMatrix();
    }
    /**
     * Moving camera
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "move",
    value: function move(x, y, z) {
      // let translationMatrix = Matrixes.translation(x, y, z)
      // let matrix = Matrixes.multiply(translationMatrix, this.rotationMatrix)
      // let xt = this.rotationMatrix[0] * x + this.rotationMatrix[1] * y + this.rotationMatrix[2] * z + this.rotationMatrix[3]
      // let yt = y//this.rotationMatrix[4] * x + this.rotationMatrix[5] * y + this.rotationMatrix[6] * z + this.rotationMatrix[7]
      // let zt = this.rotationMatrix[8] * x + this.rotationMatrix[9] * y + this.rotationMatrix[10] * z + this.rotationMatrix[11]
      this.position[0] += x;
      this.position[1] += y;
      this.position[2] += z;
      this.computeMatrix();
    }
    /**
     * Rotate for x, y, z deggres.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "rotate",
    value: function rotate(x, y, z) {
      this.rotation[0] += x;
      this.rotation[1] += y;
      this.rotation[2] += z;
      this.computeMatrix();
    }
  }, {
    key: "setRotation",
    value: function setRotation(x, y, z) {
      this.rotation = [x, y, z];
      this.computeMatrix();
    }
  }, {
    key: "computeMatrix",
    value: function computeMatrix() {
      this.matrix = Matrixes.unit();
      this.matrix = Matrixes.multiply(this.matrix, Matrixes.translation(this.position[0], this.position[1], this.position[2]));
      var rotation = new Matrix();
      rotation.multiply(Matrixes.rotationY(degToRad(this.rotation[1])));
      rotation.multiply(Matrixes.rotationX(degToRad(this.rotation[0])));
      rotation.multiply(Matrixes.rotationZ(degToRad(this.rotation[2])));
      this.matrix = Matrixes.multiply(this.matrix, rotation.matrix);

      if (this._lookUpMatrix != null) {
        this.matrix = Matrixes.multiply(this.matrix, this.lookAt(camera._lookUpMatrix, [0, 1, 0]));
      }

      this.rotationMatrix = Matrixes.inverse(rotation.matrix);
      this.inserved = Matrixes.inverse(this.matrix);
    }
    /**
     * Sets fuction to control camera.
     * @param {Function} handler 
     */

  }, {
    key: "setControl",
    value: function setControl(handler) {
      this._controlFunction = handler;
    }
  }, {
    key: "setLookUp",
    value: function setLookUp(x, y, radius) {
      if (x == null) {
        this._lookUpMatrix = null;
        return;
      }

      this._lookUpMatrix = [x, y, radius];
    }
    /**
     * @deprecated
     * @param {*} result 
     */

  }, {
    key: "lookAt",
    value: function lookAt(target, up) {
      if (target != null) {
        var zAxis = normalize(subVec3(this.position, target));
        var xAxis = normalize(cross(up, zAxis));
        var yAxis = normalize(cross(zAxis, xAxis));
        return [xAxis[0], xAxis[1], xAxis[2], 0, yAxis[0], yAxis[1], yAxis[2], 0, zAxis[0], zAxis[1], zAxis[2], 0, this.position[0], this.position[1], this.position[2], 1];
      } else {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0];
      }
    }
  }]);

  return Camera;
}();
// CONCATENATED MODULE: ./src/Controls.js
function Controls_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Controls_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Controls_createClass(Constructor, protoProps, staticProps) { if (protoProps) Controls_defineProperties(Constructor.prototype, protoProps); if (staticProps) Controls_defineProperties(Constructor, staticProps); return Constructor; }

var Controls =
/*#__PURE__*/
function () {
  /**
   * Help class for creating user controls
   * @param {Engine} engine 
   */
  function Controls(engine) {
    Controls_classCallCheck(this, Controls);

    engine.controls = this;
    this.keys = [];
    this._handlers = [];
    this._mouseHandlers = [null, null, null, null, null, null];
    this.mouse = {
      x: 0,
      y: 0,
      buttons: [false, false, false]
    };
    var self = this;

    for (var i = 0; i < 255; i++) {
      this.keys[i] = false;
      this._handlers[i] = null;
    }

    window.onkeydown = function (event) {
      self.keys[event.keyCode] = true;

      if (self._handlers[event.keyCode] != null) {
        self._handlers[event.keyCode]();
      }

      return false;
    };

    window.onkeyup = function (event) {
      self.keys[event.keyCode] = false;
      return false;
    };

    engine.canvas.addEventListener('mousemove', function (evt) {
      var mousePos = engine.canvas.getBoundingClientRect();
      var x = evt.clientX - mousePos.left;
      var y = evt.clientY - mousePos.top;
      self.mouse.x = x;
      self.mouse.y = y;
    }, false);

    window.onmousedown = function (event) {
      self.mouse.buttons[event.button] = true;
      if (self._mouseHandlers[2 + event.button] != null) self._mouseHandlers[2 + event.button]();
      return false;
    };

    window.onmouseup = function (event) {
      self.mouse.buttons[event.button] = false;
      return false;
    };
  }
  /**
   * Sets handler for keyboard key down
   * @param {Number} keyCode 
   * @param {Function} handler 
   */


  Controls_createClass(Controls, [{
    key: "onKeyDown",
    value: function onKeyDown(keyCode, handler) {
      this._handlers[keyCode] = handler;
    }
    /**
     * Sets handler for mouse key down.
     * @param {Number} keyCode 
     * @param {Function} handler 
     */

  }, {
    key: "onMouseDown",
    value: function onMouseDown(keyCode, handler) {
      this._mouseHandlers[2 + keyCode] = handler;
    }
    /**
     * Sets handler for mouse moving
     * @param {Function} handler 
     */

  }, {
    key: "onMouseMove",
    value: function onMouseMove(handler) {
      engine.canvas.addEventListener('mousemove', handler, false);
    }
  }]);

  return Controls;
}();
// CONCATENATED MODULE: ./src/Debugger.js
function Debugger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Debugger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Debugger_createClass(Constructor, protoProps, staticProps) { if (protoProps) Debugger_defineProperties(Constructor.prototype, protoProps); if (staticProps) Debugger_defineProperties(Constructor, staticProps); return Constructor; }

var Debugger =
/*#__PURE__*/
function () {
  /**
   * Debuger for engine.
   * @param {Engine} engine 
   */
  function Debugger(engine) {
    Debugger_classCallCheck(this, Debugger);

    engine.debugger = this;
    this.logArray = [];
    this.element = null;
  }

  Debugger_createClass(Debugger, [{
    key: "setElemenent",
    value: function setElemenent(element) {
      this.element = element;
    }
  }, {
    key: "addLog",
    value: function addLog(name, object, value, view, output) {
      output = output || this.defaultOutput;
      this.logArray.push({
        name: name,
        object: object,
        value: value,
        view: view,
        output: output
      });
      this.addView(view);
    }
  }, {
    key: "createLogView",
    value: function createLogView() {
      var node = document.createElement('p');
      return node;
    }
  }, {
    key: "defaultOutput",
    value: function defaultOutput(log) {
      return log.name + " : " + log.object[log.value];
    }
  }, {
    key: "addView",
    value: function addView(view) {
      this.element.appendChild(view);
    }
  }, {
    key: "updateInfo",
    value: function updateInfo() {
      this.logArray.forEach(function (e) {
        e.view.innerText = e.output(e);
      });
    }
  }]);

  return Debugger;
}();
// CONCATENATED MODULE: ./src/objects/Polygon.js
function Polygon_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Polygon_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Polygon_createClass(Constructor, protoProps, staticProps) { if (protoProps) Polygon_defineProperties(Constructor.prototype, protoProps); if (staticProps) Polygon_defineProperties(Constructor, staticProps); return Constructor; }

var Polygon =
/*#__PURE__*/
function () {
  /**
   * Triangle polygon.
   * @param {Engine} core Engine object to which the polygon will be attached.
   */
  function Polygon(engine) {
    Polygon_classCallCheck(this, Polygon);

    if (engine) {
      engine.polygons.push(this);
    }

    this.webGL = engine.webGL;
    this.points = [];
    this.texture = null;
    this.vertexes = [];
    this.position = [0, 0, 0];
    this.rotation = [0, 0, 0];
    this.rotationPoint = [0, 0, 0];
    this.parentRotation = [0, 0, 0];
    this.normals = [0, 1, 0, 0, 1, 0, 0, 1, 0];
    this._vertexesBuffer = null;
  }
  /**
   * Setting texture for polygon.
   * @param {Texture} texture 
   */


  Polygon_createClass(Polygon, [{
    key: "setTexture",
    value: function setTexture(texture) {
      this.texture = texture;
    }
    /**
     * Setting texture coords.
     * @param {Array} coords array of coords of texture.
     */

  }, {
    key: "setTextureCoords",
    value: function setTextureCoords(coords) {
      this.textureCoords = coords;
      this._coordsBuffer = this.webGL.createBuffer();
      this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._coordsBuffer);
      this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.textureCoords), this.webGL.STATIC_DRAW);
    }
    /**
     * Setting vertexes array.
     * @param {Array[Number]} vertexes
     */

  }, {
    key: "setVertexes",
    value: function setVertexes(vertexes) {
      this.vertexes = vertexes;
      this._vertexesBuffer = this.webGL.createBuffer();
      this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._vertexesBuffer);
      this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webGL.STATIC_DRAW);
    }
    /**
     * Translate polygon for x,y,z pixels.
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "setPosition",
    value: function setPosition(x, y, z) {
      this.position[0] = x;
      this.position[1] = y;
      this.position[2] = z;
    }
    /**
     * Add rotation for x, y, z axis for current rotation.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "rotate",
    value: function rotate(x, y, z) {
      this.rotation[0] += x;
      this.rotation[1] += y;
      this.rotation[2] += z;
    }
    /**
     * Set rotate for x, y, z axis.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "setRotation",
    value: function setRotation(x, y, z) {
      this.rotation[0] = x;
      this.rotation[1] = y;
      this.rotation[2] = z;
    }
    /**
     * Setting coordinates for rotation point
     * @param {Number} x
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "setRotationPoint",
    value: function setRotationPoint(x, y, z) {
      this.rotationPoint = [x, y, z];
    }
    /**
     * Setting rotation values of parent object
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "setParentRotation",
    value: function setParentRotation(x, y, z) {
      this.parentRotation = [x, y, z];
    }
    /**
     * Update function. Can be overloaded for creation animation or smth else.
     */

  }, {
    key: "update",
    value: function update() {}
    /**
     * Set normals for this polygon.
     * @param {array} normals 3 normals vector. 
     */

  }, {
    key: "setNormals",
    value: function setNormals(normals) {
      this.normals = normals;
      this._normalBuffer = this.webGL.createBuffer();
      this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._normalBuffer);
      this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(this.normals), this.webGL.STATIC_DRAW);
    }
  }]);

  return Polygon;
}();
// CONCATENATED MODULE: ./src/objects/Rect.js
function Rect_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Rect_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Rect_createClass(Constructor, protoProps, staticProps) { if (protoProps) Rect_defineProperties(Constructor.prototype, protoProps); if (staticProps) Rect_defineProperties(Constructor, staticProps); return Constructor; }



var Rect_Rect =
/*#__PURE__*/
function () {
  /**
   * Flat rectangle with square texture.
   * @param {Engine} engine 
   */
  function Rect(engine) {
    Rect_classCallCheck(this, Rect);

    this.polygons = new Array(2);
    this.position = [0, 0, 0];
    this.rotationPoint = [0, 0, 0];
    var p = new Polygon(engine);
    p.setVertexes([0, 0, 0, 100, 100, 0, 0, 100, 0]);
    p.setTextureCoords([0, 1, 1, 0, 0, 0]);
    this.polygons[0] = p;
    p = new Polygon(engine);
    p.setVertexes([100, 100, 0, 0, 0, 0, 100, 0, 0]);
    p.setTextureCoords([1, 0, 0, 1, 1, 1]);
    this.polygons[1] = p;
    this.setNormals([0, 0, 1, 0, 0, 1, 0, 0, 1]);
  }
  /**
   * Setting square texture for rect
   * @param {Texture} texture
   */


  Rect_createClass(Rect, [{
    key: "setTexture",
    value: function setTexture(texture) {
      this.polygons[0].setTexture(texture);
      this.polygons[1].setTexture(texture);
    }
    /**
     * Changing size of rect
     * @param {Number} width
     * @param {Number} height
     */

  }, {
    key: "setSize",
    value: function setSize(width, height) {
      this.width = width;
      this.height = height;
      this.polygons[0].setVertexes([0, 0, 0, width, height, 0, 0, height, 0]);
      this.polygons[1].setVertexes([width, height, 0, 0, 0, 0, width, 0, 0]);
    }
    /**
     * Change position of all polygons in rect.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "setPosition",
    value: function setPosition(x, y, z) {
      this.position = [x, y, z];
      this.polygons[0].setPosition(x, y, z);
      this.polygons[1].setPosition(x, y, z);
    }
    /**
     * Set rotation for x, y, z axis.
     * @param {*} x in deg
     * @param {*} y in deg
     * @param {*} z in deg
     */

  }, {
    key: "rotate",
    value: function rotate(x, y, z) {
      var xrad = degToRad(x);
      var yrad = degToRad(y);
      var zrad = degToRad(z);
      this.polygons[0].rotate(xrad, yrad, zrad);
      this.polygons[1].rotate(xrad, yrad, zrad);
    }
    /**
     * Seting rotation of parent object in radians
     * @param {Number} x parent rotation of x axis in radians
     * @param {Number} y parent rotation of y axis in radians
     * @param {Number} z parent rotation of z axis in radians
     */

  }, {
    key: "setParentRotation",
    value: function setParentRotation(x, y, z) {
      this.polygons[0].setParentRotation(x, y, z);
      this.polygons[1].setParentRotation(x, y, z);
    }
    /**
     * Sets rotation point coordinats
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "setRotationPoint",
    value: function setRotationPoint(x, y, z) {
      this.polygons[0].setRotationPoint(x, y, z);
      this.polygons[1].setRotationPoint(x, y, z);
    }
    /**
     * Set normals vector
     * @param {Array} normals 3:3 array. Every 3 elements is a vector of normal 
     */

  }, {
    key: "setNormals",
    value: function setNormals(normals) {
      this.polygons[0].setNormals(normals);
      this.polygons[1].setNormals(normals);
    }
  }]);

  return Rect;
}();
// CONCATENATED MODULE: ./src/objects/Cube.js
function Cube_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Cube_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Cube_createClass(Constructor, protoProps, staticProps) { if (protoProps) Cube_defineProperties(Constructor.prototype, protoProps); if (staticProps) Cube_defineProperties(Constructor, staticProps); return Constructor; }



var Cube_Cube =
/*#__PURE__*/
function () {
  /**
   * Flat rectangle with square texture.
   * @param {Engine} engine 
   */
  function Cube(engine) {
    Cube_classCallCheck(this, Cube);

    this.faces = [new Rect_Rect(engine), // front
    new Rect_Rect(engine), // right
    new Rect_Rect(engine), // back
    new Rect_Rect(engine), // left
    new Rect_Rect(engine), // top
    new Rect_Rect(engine) // bottom
    ];
    this.position = [0, 0, 0];
    this.rotation = [0, 0, 0];
    this.faces[0].rotate(0, 0, 0);
    this.faces[0].setRotationPoint(-100, -100, 100);
    this.faces[0].setPosition(0, 0, 0);
    this.faces[0].setNormals([0, 0, 1, 0, 0, 1, 0, 0, 1]);
    this.faces[1].rotate(0, 90, 0);
    this.faces[1].setRotationPoint(-100, -100, 100);
    this.faces[1].position = [0, 0, 0];
    this.faces[1].setNormals([1, 0, 0, 1, 0, 0, 1, 0, 0]);
    this.faces[2].rotate(0, -180, 0);
    this.faces[2].setRotationPoint(-100, -100, 100);
    this.faces[2].position = [0, 0, 0];
    this.faces[2].setNormals([0, 0, -1, 0, 0, -1, 0, 0, -1]);
    this.faces[3].rotate(0, 270, 0);
    this.faces[3].setRotationPoint(-100, -100, 100);
    this.faces[3].position = [0, 0, 0];
    this.faces[3].setNormals([-1, 0, 0, -1, 0, 0, -1, 0, 0]);
    this.faces[4].rotate(-90, 0, 0);
    this.faces[4].setRotationPoint(-100, -100, 100);
    this.faces[4].position = [0, 0, 0];
    this.faces[4].setNormals([0, 1, 0, 0, 1, 0, 0, 1, 0]);
    this.faces[5].rotate(90, 0, 0);
    this.faces[5].setRotationPoint(-100, -100, 100);
    this.faces[5].position = [0, 0, 0];
    this.faces[5].setNormals([0, -1, 0, 0, -1, 0, 0, -1, 0]);
  }

  Cube_createClass(Cube, [{
    key: "_updateFaces",
    value: function _updateFaces() {
      this.faces[0].setPosition(this.position[0], this.position[1], this.position[2]);
    }
    /**
     * Setting square texture for cube.
     * @param {Texture} front texture.
     * @param {Texture} right texture.
     * @param {Texture} back texture.
     * @param {Texture} left texture.
     * @param {Texture} top texture.
     * @param {Texture} bottom texture.
     */

  }, {
    key: "setTexture",
    value: function setTexture(front, right, back, left, top, bottom) {
      this.faces[0].setTexture(front);
      this.faces[1].setTexture(right);
      this.faces[2].setTexture(back);
      this.faces[3].setTexture(left);
      this.faces[4].setTexture(top);
      this.faces[5].setTexture(bottom);
    }
    /**
     * Changing size of rect
     * @param {Number} width
     * @param {Number} height
     */

  }, {
    key: "setSize",
    value: function setSize(width, height, depth) {
      this.width = width;
      this.height = height;
      this.depth = depth;
      this.faces.forEach(function (face) {
        face.setSize(width, height);
        face.setRotationPoint(-width / 2, -height / 2, depth / 2);
      });
    }
    /**
     * Change position of all polygons in rect.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "setPosition",
    value: function setPosition(x, y, z) {
      this.position = [x, y, z];
      this.faces[0].setPosition(x, y, z);
      this.faces[1].setPosition(x, y, z);
      this.faces[2].setPosition(x, y, z);
      this.faces[3].setPosition(x, y, z);
      this.faces[4].setPosition(x, y, z);
      this.faces[5].setPosition(x, y, z);
    }
    /**
     * Set rotation for x, y, z axis.
     * @param {*} x in deg
     * @param {*} y in deg
     * @param {*} z in deg
     */

  }, {
    key: "rotate",
    value: function rotate(x, y, z) {
      this.rotation[0] += x;
      this.rotation[1] += y;
      this.rotation[2] += z;
      var xrad = degToRad(this.rotation[0]);
      var yrad = degToRad(this.rotation[1]);
      var zrad = degToRad(this.rotation[2]);
      this.faces.forEach(function (face) {
        face.setParentRotation(xrad, yrad, zrad);
      });
    }
    /**
     * Set rotation for x, y, z axis.
     * @param {*} x in deg
     * @param {*} y in deg
     * @param {*} z in deg
     */

  }, {
    key: "setRotation",
    value: function setRotation(x, y, z) {
      var xrad = degToRad(x);
      var yrad = degToRad(y);
      var zrad = degToRad(z);
      this.faces.forEach(function (face) {
        face.setParentRotation(xrad, yrad, zrad);
      });
    }
  }, {
    key: "animation",
    value: function animation() {
      this.rotate(0, 0, 0);
    }
    /**
     * 
     * @param {Number} fps 
     * @param {Function} [animateFucntion] default - animation function
     */

  }, {
    key: "animate",
    value: function animate(fps, animateFucntion) {
      animateFucntion = animateFucntion || this.animation;
      setInterval(animateFucntion, 1000 / fps);
    }
  }]);

  return Cube;
}();
// CONCATENATED MODULE: ./src/objects/Object.js
function Object_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Object_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Object_createClass(Constructor, protoProps, staticProps) { if (protoProps) Object_defineProperties(Constructor.prototype, protoProps); if (staticProps) Object_defineProperties(Constructor, staticProps); return Constructor; }

var _Object =
/*#__PURE__*/
function () {
  function Object(engine) {
    Object_classCallCheck(this, Object);

    engine.objects.push(this);
    this.webGL = engine.webGL;
    this.texture = engine.noTexture;
    this.position = [0, 0, 0];
    this.rotation = [0, 0, 0];
    this.scaling = [1, 1, 1];
    this.rotationPoint = [0, 0, 0];
    this.parentRotation = [0, 0, 0];
    this.faces = [];
    this.collisionBoxes = [];
  }
  /**
   * Setting texture for object.
   * @param {Texture} texture 
   */


  Object_createClass(Object, [{
    key: "setTexture",
    value: function setTexture(texture) {
      this.texture = texture;
    }
    /**
     * Translate polygon for x,y,z pixels.
     * 
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "setPosition",
    value: function setPosition(x, y, z) {
      this.position[0] = x;
      this.position[1] = y;
      this.position[2] = z;
    }
  }, {
    key: "move",
    value: function move(x, y, z) {
      this.position[0] += x;
      this.position[1] += y;
      this.position[2] += z;
    }
    /**
     * Add rotation for x, y, z axis for current rotation.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "rotate",
    value: function rotate(x, y, z) {
      this.rotation[0] += x;
      this.rotation[1] += y;
      this.rotation[2] += z;
    }
    /**
     * Set rotate for x, y, z axis.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "setRotation",
    value: function setRotation(x, y, z) {
      this.rotation[0] = x;
      this.rotation[1] = y;
      this.rotation[2] = z;
    }
    /**
     * Setting coordinates for rotation point
     * @param {Number} x
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "setRotationPoint",
    value: function setRotationPoint(x, y, z) {
      this.rotationPoint = [x, y, z];
    }
    /**
     * Setting rotation values of parent object
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     */

  }, {
    key: "setParentRotation",
    value: function setParentRotation(x, y, z) {
      this.parentRotation = [x, y, z];
    }
  }, {
    key: "scale",
    value: function scale(x, y, z) {
      this.scaling = [x, y, z];
    }
    /**
     * Default animation function for overload
     */

  }, {
    key: "animation",
    value: function animation() {
      this.rotate(0, 0, 0);
    }
    /**
     * 
     * @param {Number} fps 
     * @param {Function} [animateFucntion] default - animation function
     */

  }, {
    key: "animate",
    value: function animate(fps, animateFucntion) {
      animateFucntion = animateFucntion || this.animation;
      setInterval(animateFucntion, 1000 / fps);
    }
    /**
     * Function to compile object from text of .obj file.
     * @param {String} fileText
     */

  }, {
    key: "compile",
    value: function compile(fileText) {
      var _this = this;

      var vertexes = [];
      var textureCoords = [];
      var normals = [];
      var splited = fileText.split('\n');
      var collisionBox = {
        x: [0, 0],
        y: [0, 0],
        z: [0, 0]
      };
      splited.forEach(function (element) {
        var values = element.split(' ');
        var name = 0;

        for (var i = values.length; i--;) {
          if (values[i] == "" || values[i] == "\r") values.splice(i, 1);
        }

        if (values[name] == 'v') {
          var v1 = parseFloat(values[1]);
          var v2 = parseFloat(values[2]);
          var v3 = parseFloat(values[3]);

          if (collisionBox.x[1] < v1) {
            collisionBox.x[1] = v1;
          }

          if (collisionBox.y[1] < v2) {
            collisionBox.y[1] = v2;
          }

          if (collisionBox.z[1] < v3) {
            collisionBox.z[1] = v3;
          }

          if (collisionBox.x[0] > v1) {
            collisionBox.x[0] = v1;
          }

          if (collisionBox.y[0] > v2) {
            collisionBox.y[0] = v2;
          }

          if (collisionBox.z[0] > v3) {
            collisionBox.z[0] = v3;
          }

          vertexes.push([v1, v2, v3]);
        } else if (values[name] == 'vn') {
          normals.push([parseFloat(values[1]), parseFloat(values[2]), parseFloat(values[3])]);
        } else if (values[name] == 'vt') {
          textureCoords.push([parseFloat(values[1]), parseFloat(values[2])]);
        } else if (values[name] == "f") {
          var _loop = function _loop(_i) {
            var face = values[_i].split('/');

            if (face[length - 1] == "\r") {
              return "break";
            }

            var faceVertexes = null,
                faceTextureCoords = null,
                faceNormals = void 0;

            for (var k = 0; k < _this.faces.length; k++) {
              var _element = _this.faces[k];

              if (_element.vertexesCount == values.length - 1) {
                faceVertexes = _element.vertexes;
                faceTextureCoords = _element.textureCoords;
                faceNormals = _element.normals;
              }
            }

            if (faceVertexes == null) {
              _this.faces.push({
                vertexesCount: values.length - 1,
                vertexes: [],
                textureCoords: [],
                normals: []
              });

              faceVertexes = _this.faces[_this.faces.length - 1].vertexes;
              faceTextureCoords = _this.faces[_this.faces.length - 1].textureCoords;
              faceNormals = _this.faces[_this.faces.length - 1].normals;
            }

            var vertexPosition = parseFloat(face[0]);
            if (vertexPosition < 0) vertexPosition = vertexes.length + vertexPosition + 1;
            var textureCoordPosition = parseFloat(face[1]);
            if (textureCoordPosition < 0) textureCoordPosition = textureCoords.length + textureCoordPosition + 1;
            var normalPosition = parseFloat(face[2]);
            if (normalPosition < 0) normalPosition = normals.length + normalPosition + 1;
            vertexes[vertexPosition - 1].forEach(function (vertex) {
              faceVertexes.push(vertex);
            });

            if (textureCoords.length > 0) {
              textureCoords[textureCoordPosition - 1].forEach(function (textureCoord) {
                faceTextureCoords.push(textureCoord);
              });
            }

            if (face[2] != undefined) {
              normals[normalPosition - 1].forEach(function (normal) {
                faceNormals.push(normal);
              });
            } else {
              faceNormals.push(0, 0, 0);
            }
          };

          for (var _i = 1; _i < values.length; _i++) {
            var _ret = _loop(_i);

            if (_ret === "break") break;
          }
        }
      });

      for (var i = 0; i < this.faces.length; i++) {
        var element = this.faces[i];
        element.vertexesBuffer = this.webGL.createBuffer();
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, element.vertexesBuffer);
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(element.vertexes), this.webGL.STATIC_DRAW);
        element.coordsBuffer = this.webGL.createBuffer();
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, element.coordsBuffer);
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(element.textureCoords), this.webGL.STATIC_DRAW);
        element.normalBuffer = this.webGL.createBuffer();
        this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, element.normalBuffer);
        this.webGL.bufferData(this.webGL.ARRAY_BUFFER, new Float32Array(element.normals), this.webGL.STATIC_DRAW);
      }

      this.collisionBoxes.push(collisionBox);
    }
    /**
     * Async load object using ajax and compile on load.
     * @param {String} path 
     */

  }, {
    key: "loadFromObj",
    value: function loadFromObj(path) {
      var self = this;
      var objectsLoader = new XMLHttpRequest();
      objectsLoader.open('GET', path);

      objectsLoader.onreadystatechange = function () {
        if (objectsLoader.readyState == 4) {
          self.compile(objectsLoader.responseText);
        }
      };

      objectsLoader.send();
    }
  }]);

  return Object;
}();


// CONCATENATED MODULE: ./src/Bronze.js
/* concated harmony reexport Engine */__webpack_require__.d(__webpack_exports__, "Engine", function() { return Engine_Engine; });
/* concated harmony reexport Camera */__webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera_Camera; });
/* concated harmony reexport Controls */__webpack_require__.d(__webpack_exports__, "Controls", function() { return Controls; });
/* concated harmony reexport Debugger */__webpack_require__.d(__webpack_exports__, "Debugger", function() { return Debugger; });
/* concated harmony reexport Texture */__webpack_require__.d(__webpack_exports__, "Texture", function() { return Texture; });
/* concated harmony reexport Rect */__webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect_Rect; });
/* concated harmony reexport Cube */__webpack_require__.d(__webpack_exports__, "Cube", function() { return Cube_Cube; });
/* concated harmony reexport Object */__webpack_require__.d(__webpack_exports__, "Object", function() { return _Object; });









/***/ })
/******/ ]);
});