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
var Mathematics_namespaceObject = {};
__webpack_require__.r(Mathematics_namespaceObject);
__webpack_require__.d(Mathematics_namespaceObject, "radToDeg", function() { return radToDeg; });
__webpack_require__.d(Mathematics_namespaceObject, "degToRad", function() { return degToRad; });
__webpack_require__.d(Mathematics_namespaceObject, "isPowerOf2", function() { return isPowerOf2; });
__webpack_require__.d(Mathematics_namespaceObject, "default", function() { return Mathematics; });
var Vector3_namespaceObject = {};
__webpack_require__.r(Vector3_namespaceObject);
__webpack_require__.d(Vector3_namespaceObject, "Vector3", function() { return Vector3; });
__webpack_require__.d(Vector3_namespaceObject, "normalize", function() { return normalize; });
__webpack_require__.d(Vector3_namespaceObject, "rotationX", function() { return rotationX; });
__webpack_require__.d(Vector3_namespaceObject, "rotationY", function() { return rotationY; });
__webpack_require__.d(Vector3_namespaceObject, "rotationZ", function() { return rotationZ; });
__webpack_require__.d(Vector3_namespaceObject, "vecMultiply", function() { return vecMultiply; });
__webpack_require__.d(Vector3_namespaceObject, "multiply", function() { return multiply; });
__webpack_require__.d(Vector3_namespaceObject, "distance", function() { return distance; });
__webpack_require__.d(Vector3_namespaceObject, "length", function() { return Vector3_length; });
__webpack_require__.d(Vector3_namespaceObject, "angleBetweenVectors", function() { return angleBetweenVectors; });
__webpack_require__.d(Vector3_namespaceObject, "default", function() { return math_Vector3; });
var Vector2_namespaceObject = {};
__webpack_require__.r(Vector2_namespaceObject);
__webpack_require__.d(Vector2_namespaceObject, "Vector2", function() { return Vector2; });
__webpack_require__.d(Vector2_namespaceObject, "normalize", function() { return Vector2_normalize; });
__webpack_require__.d(Vector2_namespaceObject, "vec2Multiply", function() { return vec2Multiply; });
__webpack_require__.d(Vector2_namespaceObject, "multiply", function() { return Vector2_multiply; });
__webpack_require__.d(Vector2_namespaceObject, "distance", function() { return Vector2_distance; });
__webpack_require__.d(Vector2_namespaceObject, "length", function() { return Vector2_length; });
__webpack_require__.d(Vector2_namespaceObject, "angleBetweenVectors", function() { return Vector2_angleBetweenVectors; });
__webpack_require__.d(Vector2_namespaceObject, "default", function() { return math_Vector2; });
var Matrixes4_namespaceObject = {};
__webpack_require__.r(Matrixes4_namespaceObject);
__webpack_require__.d(Matrixes4_namespaceObject, "Matrix4", function() { return Matrix4; });
__webpack_require__.d(Matrixes4_namespaceObject, "unit", function() { return unit; });
__webpack_require__.d(Matrixes4_namespaceObject, "perspective", function() { return perspective; });
__webpack_require__.d(Matrixes4_namespaceObject, "projection", function() { return projection; });
__webpack_require__.d(Matrixes4_namespaceObject, "translation", function() { return translation; });
__webpack_require__.d(Matrixes4_namespaceObject, "translateX", function() { return translateX; });
__webpack_require__.d(Matrixes4_namespaceObject, "translateY", function() { return translateY; });
__webpack_require__.d(Matrixes4_namespaceObject, "translateZ", function() { return translateZ; });
__webpack_require__.d(Matrixes4_namespaceObject, "rotationX", function() { return Matrixes4_rotationX; });
__webpack_require__.d(Matrixes4_namespaceObject, "rotationY", function() { return Matrixes4_rotationY; });
__webpack_require__.d(Matrixes4_namespaceObject, "rotationZ", function() { return Matrixes4_rotationZ; });
__webpack_require__.d(Matrixes4_namespaceObject, "scaling", function() { return scaling; });
__webpack_require__.d(Matrixes4_namespaceObject, "rotation", function() { return Matrixes4_rotation; });
__webpack_require__.d(Matrixes4_namespaceObject, "multiply", function() { return Matrixes4_multiply; });
__webpack_require__.d(Matrixes4_namespaceObject, "multiplyScalar", function() { return multiplyScalar; });
__webpack_require__.d(Matrixes4_namespaceObject, "multiplyVector4", function() { return multiplyVector4; });
__webpack_require__.d(Matrixes4_namespaceObject, "transformVector", function() { return transformVector; });
__webpack_require__.d(Matrixes4_namespaceObject, "inverse", function() { return inverse; });
__webpack_require__.d(Matrixes4_namespaceObject, "transpose", function() { return transpose; });
__webpack_require__.d(Matrixes4_namespaceObject, "default", function() { return Matrixes4; });

// CONCATENATED MODULE: ./src/math/Mathematics.ts
/**
 * Converting radians to degrees.
 * @param radians
 * @return degrees
 */
function radToDeg(radians) {
  return radians * 180 / Math.PI;
}
/**
 * Converting degrees to radians.
 * @param degrees
 * @return  radians
 */

function degToRad(degrees) {
  return degrees * Math.PI / 180;
}
/**
 * Returns true if value is square.
 * @param value 
 */

function isPowerOf2(value) {
  return (value & value - 1) === 0;
}
/* harmony default export */ var Mathematics = ({
  radToDeg: radToDeg,
  degToRad: degToRad,
  isPowerOf2: isPowerOf2
});
// CONCATENATED MODULE: ./src/math/Vector3.ts
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Vector3 =
/*#__PURE__*/
function () {
  function Vector3(x, y, z) {
    _classCallCheck(this, Vector3);

    _defineProperty(this, "x", 0);

    _defineProperty(this, "y", 0);

    _defineProperty(this, "z", 0);

    this.set(x, y, z);
  }

  _createClass(Vector3, [{
    key: "set",
    value: function set(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
  }, {
    key: "move",
    value: function move(x, y, z) {
      this.x += x;
      this.y += y;
      this.z += z;
    }
  }, {
    key: "moveArray",
    value: function moveArray(array) {
      this.x += array[0];
      this.y += array[1];
      this.z += array[2];
    }
  }, {
    key: "scale",
    value: function scale(x, y, z) {
      this.x *= x;
      this.y *= y;
      this.z *= z;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.x, this.y, this.z];
    }
  }, {
    key: "copy",
    value: function copy() {
      return Object.assign(new Vector3(0, 0, 0), this);
    }
  }, {
    key: "add",
    value: function add(vector) {
      this.x += vector.x;
      this.y += vector.y;
      this.z += vector.z;
    }
  }, {
    key: "sub",
    value: function sub(vector) {
      this.x -= vector.x;
      this.y -= vector.y;
      this.z -= vector.z;
    }
  }]);

  return Vector3;
}();
/**
 * Normalize a vector.
 */

function normalize(vector) {
  var length = Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);

  if (length > 0.00001) {
    vector.x = vector.x / length;
    vector.y = vector.y / length;
    vector.z = vector.z / length;
    return vector;
  } else {
    return null;
  }
}
/**
 * Returns rotation matrix for x axis.
 * @public
 */

function rotationX(angle) {
  var c = Math.cos(angle);
  var s = Math.sin(angle);
  return [1, 0, 0, 0, c, s, 0, -s, c];
}
/**
 * Returns rotation matrix for y axis.
 */

function rotationY(angle) {
  var c = Math.cos(angle);
  var s = Math.sin(angle);
  return [c, 0, -s, 0, 1, 0, s, 0, c];
}
/**
 * Returns rotation matrix for z axis.
 * @param {Number} angle angle in radians.
 * @returns {Array}
 * @public
 */

function rotationZ(angle) {
  var c = Math.cos(angle);
  var s = Math.sin(angle);
  return [c, s, 0, -s, c, 0, 0, 0, 1];
}
/**
 * 
 * @param {Array} matrix
 * @param {Array} vector4
 * 
 * @returns {Array} [x, y, z, w] result of multiplying matrix and vector.
 * @public
 */

function vecMultiply(matrix, vector3) {
  var c1 = matrix[0] * vector3.x + matrix[1] * vector3.y + matrix[2] * vector3.z;
  var c2 = matrix[3] * vector3.x + matrix[4] * vector3.y + matrix[5] * vector3.z;
  var c3 = matrix[6] * vector3.x + matrix[7] * vector3.y + matrix[8] * vector3.z;
  return [c1, c2, c3];
}
/**
 * Returns multiply of two matrixes.
 */

function multiply(matrix1, matrix2) {
  var a00 = matrix1[0 * 3 + 0];
  var a01 = matrix1[0 * 3 + 1];
  var a02 = matrix1[0 * 3 + 2];
  var a10 = matrix1[1 * 3 + 0];
  var a11 = matrix1[1 * 3 + 1];
  var a12 = matrix1[1 * 3 + 2];
  var a20 = matrix1[2 * 3 + 0];
  var a21 = matrix1[2 * 3 + 1];
  var a22 = matrix1[2 * 3 + 2];
  var b00 = matrix2[0 * 3 + 0];
  var b01 = matrix2[0 * 3 + 1];
  var b02 = matrix2[0 * 3 + 2];
  var b10 = matrix2[1 * 3 + 0];
  var b11 = matrix2[1 * 3 + 1];
  var b12 = matrix2[1 * 3 + 2];
  var b20 = matrix2[2 * 3 + 0];
  var b21 = matrix2[2 * 3 + 1];
  var b22 = matrix2[2 * 3 + 2];
  return [b00 * a00 + b01 * a10 + b02 * a20, b00 * a01 + b01 * a11 + b02 * a21, b00 * a02 + b01 * a12 + b02 * a22, b10 * a00 + b11 * a10 + b12 * a20, b10 * a01 + b11 * a11 + b12 * a21, b10 * a02 + b11 * a12 + b12 * a22, b20 * a00 + b21 * a10 + b22 * a20, b20 * a01 + b21 * a11 + b22 * a21, b20 * a02 + b21 * a12 + b22 * a22];
}
/**
 * Return distance between two vectors.
 * @public
 */

function distance(vector1, vector2) {
  var squareSum = 0;
  squareSum += (vector1.x - vector2.x) * (vector1.x - vector2.x);
  squareSum += (vector1.y - vector2.y) * (vector1.y - vector2.y);
  squareSum += (vector1.z - vector2.z) * (vector1.z - vector2.z);
  return Math.sqrt(squareSum);
}
function Vector3_length(vector) {
  return Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
}
function angleBetweenVectors(vector1, vector2) {
  var mul = vector1.x * vector2.x + vector1.y * vector2.y + vector1.z * vector2.z;
  return mul / (Vector3_length(vector1) * Vector3_length(vector2));
}
/* harmony default export */ var math_Vector3 = ({
  Vector3: Vector3
});
// CONCATENATED MODULE: ./src/math/Vector2.ts
function Vector2_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Vector2_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Vector2_createClass(Constructor, protoProps, staticProps) { if (protoProps) Vector2_defineProperties(Constructor.prototype, protoProps); if (staticProps) Vector2_defineProperties(Constructor, staticProps); return Constructor; }

function Vector2_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Vector2 =
/*#__PURE__*/
function () {
  function Vector2(x, y) {
    Vector2_classCallCheck(this, Vector2);

    Vector2_defineProperty(this, "x", 0);

    Vector2_defineProperty(this, "y", 0);

    this.set(x, y);
  }

  Vector2_createClass(Vector2, [{
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "move",
    value: function move(x, y) {
      this.x += x;
      this.y += y;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.x, this.y, this.z];
    }
  }]);

  return Vector2;
}();
/**
 * Normalize a vector.
 */

function Vector2_normalize(vector) {
  var length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);

  if (length > 0.00001) {
    vector.x = vector.x / length;
    vector.y = vector.y / length;
    return vector;
  } else {
    return null;
  }
}
/**
 * @returns [x, y, z] result of multiplying matrix and vector.
 * @public
 */

function vec2Multiply(matrix, vector2) {
  var c1 = matrix[0] * vector2.x + matrix[1] * vector2.y;
  var c2 = matrix[3] * vector2.x + matrix[4] * vector2.y;
  return [c1, c2];
}
/**
 * Returns multiply of two matrixes.
 */

function Vector2_multiply(matrix1, matrix2) {
  var a00 = matrix1[0 * 3 + 0];
  var a01 = matrix1[0 * 3 + 1];
  var a02 = matrix1[0 * 3 + 2];
  var a10 = matrix1[1 * 3 + 0];
  var a11 = matrix1[1 * 3 + 1];
  var a12 = matrix1[1 * 3 + 2];
  var b00 = matrix2[0 * 3 + 0];
  var b01 = matrix2[0 * 3 + 1];
  var b10 = matrix2[1 * 3 + 0];
  var b11 = matrix2[1 * 3 + 1];
  return [b00 * a00 + b01 * a10, b00 * a01 + b01 * a11, b00 * a02 + b01 * a12, b10 * a00 + b11 * a10, b10 * a01 + b11 * a11, b10 * a02 + b11 * a12];
}
/**
 * Return distance between two vectors.
 * @public
 */

function Vector2_distance(vector1, vector2) {
  var squareSum = 0;
  squareSum += (vector1.x - vector2.x) * (vector1.x - vector2.x);
  squareSum += (vector1.y - vector2.y) * (vector1.y - vector2.y);
  return Math.sqrt(squareSum);
}
function Vector2_length(vector) {
  return Math.sqrt(vector.x * vector.x + vector.y * vector.y);
}
function Vector2_angleBetweenVectors(vector1, vector2) {
  var mul = vector1.x * vector2.x + vector1.y * vector2.y;
  return mul / (Vector2_length(vector1) * Vector2_length(vector2));
}
/* harmony default export */ var math_Vector2 = ({
  Vector2: Vector2
});
// CONCATENATED MODULE: ./src/math/Matrixes4.ts
function Matrixes4_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Matrixes4_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Matrixes4_createClass(Constructor, protoProps, staticProps) { if (protoProps) Matrixes4_defineProperties(Constructor.prototype, protoProps); if (staticProps) Matrixes4_defineProperties(Constructor, staticProps); return Constructor; }

function Matrixes4_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Matrix4 =
/*#__PURE__*/
function () {
  Matrixes4_createClass(Matrix4, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }]);

  function Matrix4() {
    Matrixes4_classCallCheck(this, Matrix4);

    Matrixes4_defineProperty(this, "_value", void 0);

    this._value = unit();
  }
  /**
   * Multiplying matrix by transition matrix (x, y, z).
   * @param x 
   * @param y 
   * @param z 
   * @public
   */


  Matrixes4_createClass(Matrix4, [{
    key: "translate",
    value: function translate(x, y, z) {
      this._value = Matrixes4_multiply(this._value, translation(x, y, z));
    }
  }, {
    key: "rotate",
    value: function rotate(x, y, z) {
      this._value = Matrixes4_multiply(this._value, Matrixes4_rotation(x, y, z));
    }
  }, {
    key: "scale",
    value: function scale(x, y, z) {
      this._value = Matrixes4_multiply(this._value, scaling(x, y, z));
    }
  }]);

  return Matrix4;
}();
/**
 * Returns unit matrix.
 */

function unit() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
/**
 * Setting this matrix as perspective projection matrix.
 * @param fieldOfViewInRadians fieldOfView of camera.
 * @param width canvas width.
 * @param height canvas height.
 * @param near range of drawn z-coordinates start.
 * @param far range of drawn z-coordinates end.
 * @public
 */

function perspective(fieldOfViewInRadians, width, height, near, far) {
  var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
  var rangeInv = 1.0 / (near - far);
  return [f / (width / height), 0, 0, 0, 0, f, 0, 0, 0, 0, (near + far) * rangeInv, -1, 0, 0, near * far * rangeInv * 2, 0];
}
/**
 * Sets this matrix to projection matrix without perspective.
 * @param width 
 * @param height
 */

function projection(width, height) {
  return [2 / width, 0, 0, 0, 0, -2 / height, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
/**
 * Returns translation matrix.
 */

function translation(x, y, z) {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
}
/**
 * Translate matrix by X
 * @param matrix 
 * @param x 
 */

function translateX(matrix, x) {
  return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5], matrix[6], matrix[7], matrix[8], matrix[9], matrix[10], matrix[11], x * matrix[0] + matrix[12], x * matrix[1] + matrix[13], x * matrix[2] + matrix[14], x * matrix[3] + matrix[15]];
}
/**
 * Translate matrix by Y
 * @param matrix 
 * @param y
 */

function translateY(matrix, y) {
  return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5], matrix[6], matrix[7], matrix[8], matrix[9], matrix[10], matrix[11], y * matrix[4] + matrix[12], y * matrix[5] + matrix[13], y * matrix[6] + matrix[14], y * matrix[7] + matrix[15]];
}
/**
 * Translate matrix by Z
 * @param matrix 
 * @param z
 */

function translateZ(matrix, z) {
  return [matrix[0], matrix[1], matrix[2], matrix[3], matrix[4], matrix[5], matrix[6], matrix[7], matrix[8], matrix[9], matrix[10], matrix[11], z * matrix[8] + matrix[12], z * matrix[9] + matrix[13], z * matrix[10] + matrix[14], z * matrix[11] + matrix[15]];
}
/**
 * Returns rotation matrix for x axis.
 */

function Matrixes4_rotationX(angle) {
  var c = Math.cos(angle);
  var s = Math.sin(angle);
  return [1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1];
}
/**
 * Returns rotation matrix for y axis.
 */

function Matrixes4_rotationY(angle) {
  var c = Math.cos(angle);
  var s = Math.sin(angle);
  return [c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1];
}
/**
 * Returns rotation matrix for z axis.
 */

function Matrixes4_rotationZ(angle) {
  var c = Math.cos(angle);
  var s = Math.sin(angle);
  return [c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
/**
 * Returns scaling matrix for every axis.
 */

function scaling(x, y, z) {
  return [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1];
}
/**
 * Return matrix of all three rotations
 * @param {number} x angle
 * @param {number} y angle
 * @param {number} z angle
 */

function Matrixes4_rotation(x, y, z) {
  return Matrixes4_multiply(Matrixes4_multiply(Matrixes4_rotationX(x), Matrixes4_rotationY(y)), Matrixes4_rotationZ(z));
}
/**
 * Returns multiply of two matrixes.
 */

function Matrixes4_multiply(matrix1, matrix2) {
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
/**
 * Multiply matrix on scalar
 * @param scalar a number which will multiply matrix
 */

function multiplyScalar(matrix, scalar) {
  for (var i = 0; i < matrix.length; i++) {
    matrix[i] *= scalar;
  }

  return matrix;
}
function multiplyVector4(matrix, vector4) {
  var c1 = matrix[0] * vector4[0] + matrix[1] * vector4[1] + matrix[2] * vector4[2] + matrix[3] * vector4[3];
  var c2 = matrix[4] * vector4[0] + matrix[5] * vector4[1] + matrix[6] * vector4[2] + matrix[7] * vector4[3];
  var c3 = matrix[8] * vector4[0] + matrix[9] * vector4[1] + matrix[10] * vector4[2] + matrix[11] * vector4[3];
  var c4 = matrix[12] * vector4[0] + matrix[13] * vector4[1] + matrix[14] * vector4[2] + matrix[15] * vector4[3];
  return [c1, c2, c3, c4];
}
/**
 * Transform vector by matrix
 * @returns vector4 [x, y, z, w]
 */

function transformVector(matrix, vector4) {
  var transformed = new Array(4);

  for (var i = 0; i < 4; ++i) {
    transformed[i] = 0.0;

    for (var j = 0; j < 4; ++j) {
      transformed[i] += vector4[j] * matrix[j * 4 + i];
    }
  }

  return transformed;
}
/**
 * Computes the inverse of a matrix.
 * @param  matrix matrix to compute inverse of.
 * @return new result matrix.
 * @public
 */

function inverse(matrix) {
  var result = new Array(16);
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
/**
 * Computes the transpose of a matrix.
 * @param matrix matrix to compute inverse of.
 * @return  new result matrix.
 * @public
 */

function transpose(matrix) {
  var new_matrix = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  new_matrix[0] = matrix[0];
  new_matrix[1] = matrix[4];
  new_matrix[2] = matrix[8];
  new_matrix[3] = matrix[12];
  new_matrix[4] = matrix[1];
  new_matrix[5] = matrix[5];
  new_matrix[6] = matrix[9];
  new_matrix[7] = matrix[13];
  new_matrix[8] = matrix[2];
  new_matrix[9] = matrix[6];
  new_matrix[10] = matrix[10];
  new_matrix[11] = matrix[14];
  new_matrix[12] = matrix[3];
  new_matrix[13] = matrix[7];
  new_matrix[14] = matrix[11];
  new_matrix[15] = matrix[15];
  return new_matrix;
}
/* harmony default export */ var Matrixes4 = ({
  Matrix4: Matrix4,
  unit: unit,
  projection: projection,
  perspective: perspective,
  inverse: inverse,
  multiplyVector4: multiplyVector4,
  transpose: transpose,
  multiply: Matrixes4_multiply,
  translation: translation,
  translateX: translateX
});
// CONCATENATED MODULE: ./src/webgl/Utils.ts
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function Utils_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function Utils_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getWebGLById(id) {
  var el = document.getElementById(id);

  if (!(el instanceof HTMLCanvasElement) && el == null) {
    throw new TypeError("Object with " + id + " not a canvas.");
  }

  var canvas = el;
  var webGL = canvas.getContext("experimental-webgl", {
    alpha: false
  });

  if (webGL == null) {
    throw new WebglError("Cannot get WebGL context.");
  }

  window.addEventListener("resize", function () {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  });
  return webGL;
}
function getWebGL(canvas) {
  var webGL = canvas.getContext("experimental-webgl");

  if (webGL == null) {
    throw new WebglError("Cannot get WebGL context.");
  }

  window.addEventListener("resize", function () {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  });
  return webGL;
}
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

  if (shader == null) {
    throw new WebglError("Cannot create shader.");
  }

  webGL.shaderSource(shader, source);
  webGL.compileShader(shader);

  if (!webGL.getShaderParameter(shader, webGL.COMPILE_STATUS)) {
    throw new WebglError("Could not compile shader:" + webGL.getShaderInfoLog(shader));
  }

  return shader;
}
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

var WebglError =
/*#__PURE__*/
function (_Error) {
  _inherits(WebglError, _Error);

  function WebglError(message) {
    var _this;

    Utils_classCallCheck(this, WebglError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WebglError).call(this, message));

    Utils_defineProperty(_assertThisInitialized(_this), "name", "WebglError");

    Error.captureStackTrace(_assertThisInitialized(_this), WebglError);
    return _this;
  }

  return WebglError;
}(_wrapNativeSuper(Error));

/* harmony default export */ var Utils = ({
  createWebGLProgram: createWebGLProgram,
  compileShader: compileShader,
  getWebGL: getWebGL,
  getWebGLById: getWebGLById
});
// CONCATENATED MODULE: ./src/webgl/ShaderProgram.ts
function ShaderProgram_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ShaderProgram_typeof = function _typeof(obj) { return typeof obj; }; } else { ShaderProgram_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ShaderProgram_typeof(obj); }

function ShaderProgram_possibleConstructorReturn(self, call) { if (call && (ShaderProgram_typeof(call) === "object" || typeof call === "function")) { return call; } return ShaderProgram_assertThisInitialized(self); }

function ShaderProgram_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ShaderProgram_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ShaderProgram_setPrototypeOf(subClass, superClass); }

function ShaderProgram_wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; ShaderProgram_wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !ShaderProgram_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return ShaderProgram_construct(Class, arguments, ShaderProgram_getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return ShaderProgram_setPrototypeOf(Wrapper, Class); }; return ShaderProgram_wrapNativeSuper(Class); }

function ShaderProgram_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function ShaderProgram_construct(Parent, args, Class) { if (ShaderProgram_isNativeReflectConstruct()) { ShaderProgram_construct = Reflect.construct; } else { ShaderProgram_construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) ShaderProgram_setPrototypeOf(instance, Class.prototype); return instance; }; } return ShaderProgram_construct.apply(null, arguments); }

function ShaderProgram_isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function ShaderProgram_setPrototypeOf(o, p) { ShaderProgram_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ShaderProgram_setPrototypeOf(o, p); }

function ShaderProgram_getPrototypeOf(o) { ShaderProgram_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ShaderProgram_getPrototypeOf(o); }

function ShaderProgram_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ShaderProgram_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ShaderProgram_createClass(Constructor, protoProps, staticProps) { if (protoProps) ShaderProgram_defineProperties(Constructor.prototype, protoProps); if (staticProps) ShaderProgram_defineProperties(Constructor, staticProps); return Constructor; }

function ShaderProgram_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ShaderProgram =
/*#__PURE__*/
function () {
  ShaderProgram_createClass(ShaderProgram, [{
    key: "program",
    get: function get() {
      return this._program;
    }
  }]);

  function ShaderProgram(webGL) {
    ShaderProgram_classCallCheck(this, ShaderProgram);

    ShaderProgram_defineProperty(this, "webGL", void 0);

    ShaderProgram_defineProperty(this, "VERTEX_SHADER", "vertex");

    ShaderProgram_defineProperty(this, "FRAGMENT_SHADER", "fragment");

    ShaderProgram_defineProperty(this, "ATTRIBUTE", "attribute");

    ShaderProgram_defineProperty(this, "UNIFORM", "uniform");

    ShaderProgram_defineProperty(this, "_program", null);

    ShaderProgram_defineProperty(this, "_vertexShader", null);

    ShaderProgram_defineProperty(this, "_fragmentShader", null);

    this.webGL = webGL;
    return this;
  }
  /**
   * Compiling and attaching shader to this program.
   * @param {String} type can be ['vertex', 'fragment'].
   * @param {String} source
   */


  ShaderProgram_createClass(ShaderProgram, [{
    key: "addShader",
    value: function addShader(type, source) {
      var shader;

      switch (type) {
        case "vertex" || false:
          shader = this.webGL.createShader(this.webGL.VERTEX_SHADER);
          this._vertexShader = shader;
          break;

        case "fragment" || false:
          shader = this.webGL.createShader(this.webGL.FRAGMENT_SHADER);
          this._fragmentShader = shader;
          break;

        default:
          throw new BronzeError("Wrong shader type.");
      }

      this.webGL.shaderSource(shader, source);
      this.webGL.compileShader(shader);

      if (!this.webGL.getShaderParameter(shader, this.webGL.COMPILE_STATUS)) {
        console.error("There are shader error:");
        console.error(this.webGL.getShaderInfoLog(shader));
        throw new BronzeError("Could not compile shader.");
      }
    }
    /**
     * @param {boolean} [deleteShaders] will delete shader after attaching.
     */

  }, {
    key: "create",
    value: function create() {
      var deleteShaders = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var program = this.webGL.createProgram();

      if (this._vertexShader == null && this._fragmentShader == null) {
        throw new BronzeError("Shader programs isn`t complete.");
      }

      this.webGL.attachShader(program, this._vertexShader);
      this.webGL.attachShader(program, this._fragmentShader);
      this.webGL.linkProgram(program);
      this.webGL.useProgram(program);

      if (deleteShaders) {
        this.webGL.deleteShader(this._vertexShader);
        this.webGL.deleteShader(this._fragmentShader);
      }

      this._program = program;
      return program;
    }
    /**
     * Linking variable of program to this object.
     * @param {String} type can be ['attribute', 'uniform']
     * @param {String} name variable name in shader.
     * @param {String} [customName] variable name in this object. By default its {name}.
     */

  }, {
    key: "linkVariable",
    value: function linkVariable(type, name, customName) {
      customName = customName || name;

      if (this[customName] !== undefined) {
        console.warn("Shader program: Custom name for uniform was switched from " + customName + " to " + customName + "1");
        customName = customName + "1";
      }

      if (this._program == null) {
        throw new BronzeError("Shader program is null.");
      }

      switch (type) {
        case this.ATTRIBUTE:
          this[customName] = this.webGL.getAttribLocation(this._program, name);
          break;

        case this.UNIFORM:
          this[customName] = this.webGL.getUniformLocation(this._program, name);
          break;

        default:
          throw "Wrong variable type";
      }

      return this[customName];
    }
    /**
     * Linking attribute variable of program to this object.
     * @param {String} name variable name in shader.
     * @param {String} [customName] variable name in this object. By default its {name}.
     */

  }, {
    key: "linkAttribute",
    value: function linkAttribute(name, customName) {
      customName = customName || name;

      if (this[customName] != undefined) {
        console.warn("Shader program: Custom name for uniform was switched from " + customName + " to " + customName + "1");
        customName = customName + "1";
      }

      if (this._program == null) {
        throw new BronzeError("Shader program is null.");
      }

      this[customName] = this.webGL.getAttribLocation(this.program, name);

      if (this[customName] == null) {
        throw new Error("Can not link uniform " + name + ". The variable may not be used in shader.");
      }

      return this[customName];
    }
    /**
     * Linking uniform variable of program to this object.
     * @param {String} name variable name in shader.
     * @param {String} [customName] variable name in this object. By default its {name}.
     */

  }, {
    key: "linkUniform",
    value: function linkUniform(name, customName) {
      customName = customName || name;

      if (this[customName] != undefined) {
        console.warn("Shader program: Custom name for attribute was switched from " + customName + " to " + customName + "1");
        customName = customName + "";
      }

      if (this._program == null) {
        throw new BronzeError("Shader program is null.");
      }

      this[customName] = this.webGL.getUniformLocation(this.program, name);

      if (this[customName] == null) {
        throw new Error("Can not link uniform " + name + ". The variable may not be used in shader.");
      }

      return this[customName];
    }
  }, {
    key: "use",
    value: function use() {
      this.webGL.useProgram(this.program);
    }
  }, {
    key: "useIn",
    value: function useIn(webGL) {
      webGL.useProgram(this.program);
    }
  }]);

  return ShaderProgram;
}();

var BronzeError =
/*#__PURE__*/
function (_Error) {
  ShaderProgram_inherits(BronzeError, _Error);

  function BronzeError(message) {
    var _this;

    ShaderProgram_classCallCheck(this, BronzeError);

    _this = ShaderProgram_possibleConstructorReturn(this, ShaderProgram_getPrototypeOf(BronzeError).call(this, message));

    ShaderProgram_defineProperty(ShaderProgram_assertThisInitialized(_this), "name", "WebglError");

    Error.captureStackTrace(ShaderProgram_assertThisInitialized(_this), BronzeError);
    return _this;
  }

  return BronzeError;
}(ShaderProgram_wrapNativeSuper(Error));

/* harmony default export */ var webgl_ShaderProgram = (ShaderProgram);
// CONCATENATED MODULE: ./src/webgl/Shaders.ts
function Shaders_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Shaders_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Shaders_createClass(Constructor, protoProps, staticProps) { if (protoProps) Shaders_defineProperties(Constructor.prototype, protoProps); if (staticProps) Shaders_defineProperties(Constructor, staticProps); return Constructor; }

function Shaders_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* babel-plugin-inline-import './shaders/default/fragment-shader.glsl' */
var fragmentShaderSource = "#define MAX_LIGHTS 28\r\n\r\nprecision mediump float;\r\n\r\nvarying vec2 v_texcoord;\r\nvarying vec3 v_normal;\r\n\r\nuniform sampler2D u_texture;\r\nuniform float u_lightRanges[MAX_LIGHTS];\r\nuniform float u_lightMinValue;\r\n\r\nvarying vec3 v_lightsDirections[MAX_LIGHTS];\r\nvarying float v_lightsCount;\r\n\r\nfloat computeLight(vec3 direction, float range) {\r\n    float light = dot(v_normal, normalize(direction));\r\n    float k = (range - length(direction)) / range;\r\n    if (k < 0.0) k = 0.0;\r\n    light = light * k;\r\n    if (light < u_lightMinValue) {\r\n        light = u_lightMinValue;\r\n    }\r\n    return light;\r\n}\r\n\r\nvoid main() {\r\n    float light = 0.0;\r\n\r\n    for (int i = 0; i < MAX_LIGHTS; i++) {\r\n        if (i > int(v_lightsCount)) {\r\n            break;\r\n        }\r\n        light += computeLight(v_lightsDirections[i], u_lightRanges[i]);\r\n    }\r\n    \r\n    gl_FragColor = texture2D(u_texture, v_texcoord);\r\n    if (gl_FragColor.a == 0.0) {\r\n        discard;\r\n    }\r\n    gl_FragColor.rgb *= (light);\r\n    gl_FragColor.rgb *= gl_FragColor.a;\r\n}\r\n";

/* babel-plugin-inline-import './shaders/default/vertex-shader.glsl' */
var vertexShaderSource = "#define MAX_LIGHTS 28\r\n\r\nattribute vec4 a_position;\r\nattribute vec2 a_texcoord;\r\nattribute vec4 a_normal;\r\n\r\nuniform mat4 u_matrix;\r\nuniform mat4 u_objectRotation;\r\nuniform mat4 u_worldMatrix;\r\n\r\nuniform vec3 u_lightPositions[MAX_LIGHTS];\r\nuniform int u_lightsCount;\r\n\r\nvarying vec2 v_texcoord;\r\nvarying vec3 v_normal;\r\nvarying vec3 v_lightsDirections[MAX_LIGHTS];\r\nvarying float v_lightsCount;\r\n\r\nvoid main() {\r\n    gl_Position = u_matrix * a_position;\r\n    \r\n    v_texcoord = a_texcoord;\r\n    v_normal = vec3(u_objectRotation * a_normal);\r\n\r\n    vec3 surfaceWorldPosition = (u_worldMatrix  * a_position).xyz;\r\n    for (int i = 0; i < MAX_LIGHTS; i++) {\r\n        if (i > int(u_lightsCount)) {\r\n            break;\r\n        }\r\n        v_lightsDirections[i] = u_lightPositions[i] - surfaceWorldPosition;\r\n    }\r\n\r\n    v_lightsCount = float(u_lightsCount);\r\n}\r\n";

/* babel-plugin-inline-import './shaders/cube-texture/fragment-shader.glsl' */
var cubeFragmentShaderSource = "#define MAX_LIGHTS 28\r\n\r\nprecision mediump float;\r\n\r\nvarying vec3 v_normal;\r\nvarying vec3 v_normalTex;\r\n\r\nuniform samplerCube u_texture;\r\nuniform float u_lightRanges[MAX_LIGHTS];\r\nuniform float u_lightMinValue;\r\n\r\nvarying vec3 v_lightsDirections[MAX_LIGHTS];\r\nvarying float v_lightsCount;\r\n\r\nfloat computeLight(vec3 direction, float range) {\r\n    float light = dot(v_normal, normalize(direction));\r\n    float k = (range - length(direction)) / range;\r\n    if (k < 0.0) k = 0.0;\r\n    light = light * k;\r\n    if (light < u_lightMinValue) {\r\n        light = u_lightMinValue;\r\n    }\r\n    return light;\r\n}\r\n\r\nvoid main() {\r\n    float light = 0.0;\r\n    for (int i = 0; i < MAX_LIGHTS; i++) {\r\n        if (i > int(v_lightsCount)) {\r\n            break;\r\n        }\r\n        light += computeLight(v_lightsDirections[i], u_lightRanges[i]);\r\n    }\r\n    \r\n    gl_FragColor = textureCube(u_texture, v_normalTex);\r\n    if (gl_FragColor.a == 0.0) {\r\n        discard;\r\n    }\r\n    gl_FragColor.rgb *= (light);\r\n    gl_FragColor.rgb *= gl_FragColor.a;\r\n}\r\n";

/* babel-plugin-inline-import './shaders/cube-texture/vertex-shader.glsl' */
var cubeVertexShaderSource = "#define MAX_LIGHTS 28\r\n\r\nattribute vec4 a_position;\r\nattribute vec2 a_texcoord;\r\nattribute vec4 a_normal;\r\n\r\nuniform mat4 u_matrix;\r\nuniform mat4 u_objectRotation;\r\nuniform vec3 u_lightPositions[MAX_LIGHTS];\r\nuniform int u_lightsCount;\r\nuniform mat4 u_worldMatrix;\r\n\r\nvarying vec3 v_normal;\r\nvarying vec3 v_normalTex;\r\nvarying vec3 v_lightsDirections[MAX_LIGHTS];\r\nvarying float v_lightsCount;\r\n\r\n\r\nvoid main() {\r\n    gl_Position = u_matrix * a_position;\r\n    \r\n    v_normal = vec3(u_objectRotation * a_normal);\r\n    v_normalTex = normalize(a_position.xyz);\r\n\r\n    vec3 surfaceWorldPosition = (u_worldMatrix  * a_position).xyz;\r\n    for (int i = 0; i < MAX_LIGHTS; i++) {\r\n        if (i > int(u_lightsCount)) {\r\n            break;\r\n        }\r\n        v_lightsDirections[i] = u_lightPositions[i] - surfaceWorldPosition;\r\n    }\r\n\r\n    v_lightsCount = float(u_lightsCount);\r\n}\r\n";

/* babel-plugin-inline-import './shaders/grid/fragment-shader.glsl' */
var gridFragmentShaderSource = "precision mediump float;\r\n\r\nvarying vec2 v_texcoord;\r\n\r\nuniform sampler2D u_texture;\r\n\r\nvoid main() {\r\n    gl_FragColor = texture2D(u_texture, v_texcoord);\r\n}";

/* babel-plugin-inline-import './shaders/grid/vertex-shader.glsl' */
var gridVertexShaderSource = "attribute vec4 a_position;\r\nattribute vec2 a_texcoord;\r\n\r\nuniform mat4 u_matrix;\r\nuniform vec2 u_moving;\r\nuniform vec2 u_cellSize;\r\n\r\nvarying vec2 v_texcoord;\r\n\r\nvoid main() {\r\n    gl_Position = u_matrix * a_position;\r\n    v_texcoord = vec2(a_texcoord.x + u_moving.x / u_cellSize.x, a_texcoord.y + (u_moving.y / u_cellSize.x));\r\n}";

/* babel-plugin-inline-import './shaders/reflection-texture/fragment-shader.glsl' */
var reflectionFragmentShaderSource = "#define MAX_LIGHTS 28\r\n\r\nprecision highp float;\r\n    \r\nuniform samplerCube u_texture;\r\nuniform float u_lightRanges[MAX_LIGHTS];\r\nuniform float u_lightMinValue;\r\n\r\nvarying vec3 v_lightsDirections[MAX_LIGHTS];\r\nvarying float v_lightsCount;\r\nvarying vec3 v_worldRotation;\r\nvarying vec3 v_normal;\r\nvarying vec3 v_surfaceToLightDirection;\r\n        \r\nfloat computeLight(vec3 direction, float range) {\r\n    float light = dot(normalize(v_worldRotation), normalize(direction));\r\n    float k = (range - length(direction)) / range;\r\n    if (k < 0.0) k = 0.0;\r\n    light = light * k;\r\n    if (light < u_lightMinValue) {\r\n        light = u_lightMinValue;\r\n    }\r\n    return light;\r\n}\r\n\r\nvoid main() {\r\n    vec3 worldNormal = normalize(v_normal);\r\n    vec3 eyeToSurfaceDir = normalize(v_worldRotation);\r\n    vec3 direction = reflect(eyeToSurfaceDir, vec3(0.0, 0.0, -1.0));\r\n    \r\n    gl_FragColor = textureCube(u_texture, direction);\r\n\r\n    float light = 0.0;\r\n\r\n    for (int i = 0; i < MAX_LIGHTS; i++) {\r\n        if (i > int(v_lightsCount)) {\r\n            break;\r\n        }\r\n        light += computeLight(v_lightsDirections[i], u_lightRanges[i]);\r\n    }\r\n\r\n    gl_FragColor.rgb *= (light);\r\n    if (gl_FragColor.a == 0.0) {\r\n        discard;\r\n    }\r\n    gl_FragColor.rgb *= gl_FragColor.a;\r\n}";

/* babel-plugin-inline-import './shaders/reflection-texture/vertex-shader.glsl' */
var reflectionVertexShaderSource = "#define MAX_LIGHTS 28\r\n\r\nattribute vec4 a_position;\r\nattribute vec3 a_normal;\r\n    \r\nuniform mat4 u_matrix;\r\nuniform mat4 u_rotationMatrix;\r\nuniform mat4 u_worldMatrix;\r\nuniform vec3 u_lightPositions[MAX_LIGHTS];\r\nuniform int u_lightsCount;\r\n\r\nvarying vec3 v_worldRotation;\r\nvarying vec3 v_normal;\r\nvarying vec3 v_surfaceToLightDirection;\r\nvarying vec3 v_lightsDirections[MAX_LIGHTS];\r\nvarying float v_lightsCount;\r\n    \r\nvoid main() {\r\n    gl_Position = u_matrix * a_position;\r\n    v_worldRotation = (u_rotationMatrix * a_position).xyz;\r\n    v_normal =  vec3(a_normal);\r\n\r\n    vec3 surfaceWorldPosition = (u_worldMatrix  * a_position).xyz;\r\n    for (int i = 0; i < MAX_LIGHTS; i++) {\r\n        if (i > int(u_lightsCount)) {\r\n            break;\r\n        }\r\n        v_lightsDirections[i] = u_lightPositions[i] - surfaceWorldPosition;\r\n    }\r\n\r\n    v_lightsCount = float(u_lightsCount);\r\n}";

/* babel-plugin-inline-import './shaders/skybox/fragment-shader.glsl' */
var skyboxFragmentShaderSource = "    precision mediump float;\r\n     \r\n    uniform samplerCube u_texture;\r\n    uniform mat4 u_matrix;\r\n     \r\n    varying vec4 v_position;\r\n    void main() {\r\n      vec4 t = u_matrix * v_position;\r\n      gl_FragColor = textureCube(u_texture, normalize(t.xyz / t.w));\r\n    }";

/* babel-plugin-inline-import './shaders/skybox/vertex-shader.glsl' */
var skyboxVertexShaderSource = "attribute vec4 a_position;\r\nvarying vec4 v_position;\r\nvoid main() {\r\n    v_position = a_position;\r\n    gl_Position = a_position;\r\n    gl_Position.z = .9999999;\r\n}";

/* babel-plugin-inline-import './shaders/screen/fragment-shader.glsl' */
var screenFragmentShaderSource = "precision mediump float;\r\n\r\nvarying vec2 v_texcoord;\r\nvarying vec3 v_normal;\r\n\r\nuniform sampler2D u_texture;\r\n\r\nvoid main() {\r\n    gl_FragColor = texture2D(u_texture, v_texcoord);\r\n    if (gl_FragColor.a == 0.0) {\r\n        discard;\r\n    }\r\n    gl_FragColor.rgb *= gl_FragColor.a;\r\n}\r\n";

/* babel-plugin-inline-import './shaders/screen/vertex-shader.glsl' */
var screenVertexShaderSource = "attribute vec4 a_position;\r\nattribute vec2 a_texcoord;\r\n\r\nvarying vec2 v_texcoord;\r\n\r\n\r\nvoid main() {\r\n    gl_Position = a_position;\r\n\r\n    v_texcoord = a_texcoord;\r\n}\r\n";
var Shaders_Shaders =
/*#__PURE__*/
function () {
  function Shaders(webGL) {
    Shaders_classCallCheck(this, Shaders);

    Shaders_defineProperty(this, "extensions", new Extensions());

    Shaders_defineProperty(this, "webGL", void 0);

    Shaders_defineProperty(this, "shadersRequireLights", []);

    this.webGL = webGL;
    var options = {
      removePrefixes: true,
      addLocationMarker: true
    };
    this.addExtension("anisotropic", "EXT_texture_filter_anisotropic");
    this.addExtension("standard", "OES_standard_derivatives");
    this.addProgram("default", vertexShaderSource, fragmentShaderSource, options);
    this.addProgram("cube", cubeVertexShaderSource, cubeFragmentShaderSource, options);
    this.addProgram("grid", gridVertexShaderSource, gridFragmentShaderSource, options);
    this.addProgram("reflection", reflectionVertexShaderSource, reflectionFragmentShaderSource, options);
    this.addProgram("skybox", skyboxVertexShaderSource, skyboxFragmentShaderSource, options);
    this.addProgram("screen", screenVertexShaderSource, screenFragmentShaderSource, options);
    this["default"].use();
    this.webGL.enable(this.webGL.BLEND);
    this.webGL.blendFunc(this.webGL.ONE, this.webGL.ONE_MINUS_SRC_ALPHA);
  }
  /**
   * Creates shaders program with {name} and add its to this objects. Auto linking uniforms and attributes.
   * @public
   * @param {String} name
   * @param {String} vertexSource
   * @param {String} fragmentSource
   * @param {Object} [options]
   */


  Shaders_createClass(Shaders, [{
    key: "addProgram",
    value: function addProgram(name, vertexSource, fragmentSource, options) {
      var program = new webgl_ShaderProgram(this.webGL);
      program.addShader("vertex", vertexSource);
      program.addShader("fragment", fragmentSource);
      program.create();
      program = this._linkAllAttributesFromSource(program, vertexSource, options);
      program = this._linkAllAttributesFromSource(program, fragmentSource, options);
      this[name] = program;
    }
  }, {
    key: "_linkAllAttributesFromSource",
    value: function _linkAllAttributesFromSource(program, source, options) {
      var rows = source.split(";").join("\r").split("\r");
      var outName;
      rows.forEach(function (row) {
        row = row.replace(new RegExp("\r", "g"), "");
        row = row.replace(new RegExp("\n", "g"), "");
        var words = row.split(" "); // console.log(words)

        for (var i = words.length - 1; i--;) {
          if (words[i] === "") {
            words.splice(i, 1);
          }
        }

        if (words[0].toLowerCase().includes("attribute")) {
          var inName = words[2];
          var arraySizeIndexStart = inName.indexOf("[");

          if (arraySizeIndexStart != -1) {
            inName = inName.slice(0, arraySizeIndexStart);
          }

          outName = inName;

          if (options && options.removePrefixes) {
            outName = outName.slice(2, outName.length);
          }

          if (options && options.addLocationMarker) {
            outName = outName + "Location";
          }

          program.linkAttribute(words[2], outName);
        } else if (words[0].toLowerCase().includes("uniform")) {
          var _inName = words[2];

          var _arraySizeIndexStart = _inName.indexOf("[");

          if (_arraySizeIndexStart != -1) {
            _inName = _inName.slice(0, _arraySizeIndexStart);
          }

          outName = _inName;

          if (options && options.removePrefixes) {
            outName = outName.slice(2, outName.length);
          }

          if (options && options.addLocationMarker) {
            outName = outName + "Location";
          }

          program.linkUniform(_inName, outName);
        }
      });
      return program;
    }
    /**
     * Adds extension form webgl to this object with custom name
     * @param {String} name custom name to use in shaders
     * @param {String} nameInWebGL extension name in webgl
     */

  }, {
    key: "addExtension",
    value: function addExtension(name, nameInWebGL) {
      this.extensions[name] = this.webGL.getExtension(nameInWebGL);
    }
  }]);

  return Shaders;
}();
var Options = function Options() {
  Shaders_classCallCheck(this, Options);

  Shaders_defineProperty(this, "addLocationMarker", false);

  Shaders_defineProperty(this, "removePrefixes", false);
};
var Extensions = function Extensions() {
  Shaders_classCallCheck(this, Extensions);
};
/* harmony default export */ var webgl_Shaders = (Shaders_Shaders);
// CONCATENATED MODULE: ./src/debug/Error.ts
function Error_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Error_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Error_BronzeError = function BronzeError(message) {
  Error_classCallCheck(this, BronzeError);

  throw new CustomError(message);
};

var CustomError = function CustomError(message) {
  Error_classCallCheck(this, CustomError);

  Error_defineProperty(this, "name", 'BronzeError');

  Error_defineProperty(this, "message", void 0);

  Error.apply(this, [message]);
  this.message = message;
};

CustomError.prototype = new Error();

var BronzeWarn = function BronzeWarn(message) {
  Error_classCallCheck(this, BronzeWarn);

  console.warn(message);
};

var BronzeLog = function BronzeLog(log) {
  Error_classCallCheck(this, BronzeLog);

  console.log(log);
};


/* harmony default export */ var debug_Error = (Error_BronzeError);
// CONCATENATED MODULE: ./src/textures/Texture.ts
function Texture_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Texture_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Texture_createClass(Constructor, protoProps, staticProps) { if (protoProps) Texture_defineProperties(Constructor.prototype, protoProps); if (staticProps) Texture_defineProperties(Constructor, staticProps); return Constructor; }

function Texture_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Texture_Texture =
/*#__PURE__*/
function () {
  function Texture(engine) {
    Texture_classCallCheck(this, Texture);

    Texture_defineProperty(this, "alpha", false);

    Texture_defineProperty(this, "color", new Uint8Array([229, 91, 91, 255]));

    Texture_defineProperty(this, "engine", void 0);

    Texture_defineProperty(this, "textureBlockLocation", -1);

    Texture_defineProperty(this, "loaded", false);

    Texture_defineProperty(this, "webglTexture", void 0);

    this.engine = engine;
  }
  /**
   * Sets color for texture
   * @param r number from 0 to 255
   * @param g number from 0 to 255
   * @param b number from 0 to 255
   * @param a number from 0 to 255
   */


  Texture_createClass(Texture, [{
    key: "setColor",
    value: function setColor(r, g, b, a) {
      if (r.constructor instanceof String) {
        var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(String(r));

        if (rgb == null) {
          new debug_Error('Wrong hex color!');
          return;
        }

        this.color = new Uint8Array([parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]), 255]);
      } else if (r.constructor === Number && g != undefined && b != undefined && a != undefined) {
        this.color = new Uint8Array([Number(r), g, b, a]);
      } else {
        new debug_Error('Wrong color');
        return;
      }

      var webgl = this.engine.webgl;
      webgl.activeTexture(webgl.TEXTURE0 + this.textureBlockLocation);
      webgl.bindTexture(webgl.TEXTURE_2D, this.webglTexture);
      webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, 1, 1, 0, webgl.RGBA, webgl.UNSIGNED_BYTE, this.color);
    }
  }]);

  return Texture;
}();
/* harmony default export */ var textures_Texture = (Texture_Texture);
// CONCATENATED MODULE: ./src/textures/ColorTexture.ts
function ColorTexture_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ColorTexture_typeof = function _typeof(obj) { return typeof obj; }; } else { ColorTexture_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ColorTexture_typeof(obj); }

function ColorTexture_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ColorTexture_possibleConstructorReturn(self, call) { if (call && (ColorTexture_typeof(call) === "object" || typeof call === "function")) { return call; } return ColorTexture_assertThisInitialized(self); }

function ColorTexture_getPrototypeOf(o) { ColorTexture_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ColorTexture_getPrototypeOf(o); }

function ColorTexture_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ColorTexture_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ColorTexture_setPrototypeOf(subClass, superClass); }

function ColorTexture_setPrototypeOf(o, p) { ColorTexture_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ColorTexture_setPrototypeOf(o, p); }

function ColorTexture_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var ColorTexture =
/*#__PURE__*/
function (_Texture) {
  ColorTexture_inherits(ColorTexture, _Texture);

  function ColorTexture(engine) {
    var _this;

    ColorTexture_classCallCheck(this, ColorTexture);

    _this = ColorTexture_possibleConstructorReturn(this, ColorTexture_getPrototypeOf(ColorTexture).call(this, engine));

    ColorTexture_defineProperty(ColorTexture_assertThisInitialized(_this), "textureBlockLocation", -1);

    _this.engine = engine;
    _this.textureBlockLocation = _this.engine.textures.length;

    _this.engine.textures.push(ColorTexture_assertThisInitialized(_this));

    var webgl = _this.engine.webgl;
    _this.webglTexture = webgl.createTexture();
    webgl.activeTexture(webgl.TEXTURE0 + _this.textureBlockLocation);
    webgl.bindTexture(webgl.TEXTURE_2D, _this.webglTexture);
    webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, 1, 1, 0, webgl.RGBA, webgl.UNSIGNED_BYTE, _this.color);

    _this.engine.textureLoaded(ColorTexture_assertThisInitialized(_this));

    _this.loaded = true;
    return _this;
  }

  return ColorTexture;
}(Texture_Texture);
/* harmony default export */ var textures_ColorTexture = (ColorTexture);
// CONCATENATED MODULE: ./src/Engine.ts
function Engine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Engine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Engine_createClass(Constructor, protoProps, staticProps) { if (protoProps) Engine_defineProperties(Constructor.prototype, protoProps); if (staticProps) Engine_defineProperties(Constructor, staticProps); return Constructor; }

function Engine_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Engine_Engine =
/*#__PURE__*/
function () {
  function Engine(div) {
    var _this = this;

    Engine_classCallCheck(this, Engine);

    Engine_defineProperty(this, "div", void 0);

    Engine_defineProperty(this, "canvas", void 0);

    Engine_defineProperty(this, "webgl", void 0);

    Engine_defineProperty(this, "width", void 0);

    Engine_defineProperty(this, "height", void 0);

    Engine_defineProperty(this, "camera", null);

    Engine_defineProperty(this, "debugger", null);

    Engine_defineProperty(this, "controls", null);

    Engine_defineProperty(this, "lightsPositions", []);

    Engine_defineProperty(this, "lightsRanges", []);

    Engine_defineProperty(this, "globalLightMinValue", 0.5);

    Engine_defineProperty(this, "noTexture", void 0);

    Engine_defineProperty(this, "reflections", false);

    Engine_defineProperty(this, "status", "Creating");

    Engine_defineProperty(this, "selectedObject", null);

    Engine_defineProperty(this, "shaders", void 0);

    Engine_defineProperty(this, "textures", []);

    Engine_defineProperty(this, "lights", []);

    Engine_defineProperty(this, "_ui", null);

    Engine_defineProperty(this, "_objectsWithoutAlpha", []);

    Engine_defineProperty(this, "_objectsWithAlpha", []);

    Engine_defineProperty(this, "_resourcesLoaded", false);

    Engine_defineProperty(this, "_texturesLoaded", false);

    Engine_defineProperty(this, "_objectsLoaded", false);

    Engine_defineProperty(this, "_loadedObjectsCount", 0);

    Engine_defineProperty(this, "_loadedTexturesCount", 0);

    Engine_defineProperty(this, "_onResourcesLoadedHandlers", []);

    Engine_defineProperty(this, "_onObjectSelectedHandlers", []);

    Engine_defineProperty(this, "_running", false);

    Engine_defineProperty(this, "_onRun", []);

    Engine_defineProperty(this, "_onFrameHandlers", []);

    this.div = div;
    this.width = div.offsetWidth;
    this.height = div.offsetHeight;
    this.canvas = document.createElement("canvas");
    this.canvas.width = div.offsetWidth;
    this.canvas.height = div.offsetHeight;
    this.webgl = getWebGL(this.canvas);
    this.addOnResourcesLoadedListener(function () {
      if (!_this.reflections) {
        _this.appendCanvas();

        _this.status = "Drawing";
      } else {
        _this.status = "Creating reflections";
      }
    });
    this.shaders = new Shaders_Shaders(this.webgl);
    this.shaders["default"].use();
    this.webgl.viewport(0, 0, this.width, this.height);
    this.webgl.enable(this.webgl.CULL_FACE);
    this.webgl.enable(this.webgl.DEPTH_TEST);
    this.noTexture = new ColorTexture(this);
    this.infoConsoleLog();
  }

  Engine_createClass(Engine, [{
    key: "appendCanvas",
    value: function appendCanvas() {
      this.div.appendChild(this.canvas);
      this.onCanvasResized();
    }
    /**
     * Attach camera to engine.
     * @param camera
     */

  }, {
    key: "setCamera",
    value: function setCamera(camera) {
      this.camera = camera;
    }
    /**
     * Update drawing parameters for correct drawing resized canvas. Use it when canvas resized.
     */

  }, {
    key: "onCanvasResized",
    value: function onCanvasResized() {
      if (this.canvas.clientWidth != 0) {
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        this.width = this.canvas.clientWidth;
        this.height = this.canvas.clientHeight;
      }

      this.webgl.viewport(0, 0, this.width, this.height);
    }
  }, {
    key: "addObject",
    value: function addObject(object) {
      if (object.texture.alpha) {
        this._objectsWithAlpha.push(object);
      } else {
        this._objectsWithoutAlpha.push(object);
      }
    }
    /**
     * Removes objects if its exist
     */

  }, {
    key: "removeObject",
    value: function removeObject(object) {
      var index = -1;

      if (object.texture.alpha) {
        index = this._objectsWithAlpha.indexOf(object);

        if (index == -1) {
          console.warn("Objects", this.objects);
          new debug_Error("Object not found");
        }

        return this._objectsWithAlpha.splice(index, 1)[0];
      } else {
        index = this._objectsWithoutAlpha.indexOf(object);

        if (index == -1) {
          console.warn("Objects", this.objects);
          new debug_Error("Object not found");
        }

        return this._objectsWithoutAlpha.splice(index, 1)[0];
      }

      return null;
    }
  }, {
    key: "addOnObjectSelectedListener",
    value: function addOnObjectSelectedListener(callback) {
      this._onObjectSelectedHandlers.push(callback);
    }
  }, {
    key: "addOnResourcesLoadedListener",
    value: function addOnResourcesLoadedListener(callback) {
      this._onResourcesLoadedHandlers.push(callback);
    }
    /**
     * Function should be executed when texture loaded and ready to use.
     */

  }, {
    key: "textureLoaded",
    value: function textureLoaded(texture) {
      this._loadedTexturesCount += 1;
      texture.loaded = true;

      if (this.running && this._loadedTexturesCount == this.textures.length) {
        this._texturesLoaded = true;

        if (this.objectsLoaded) {
          this._resourcesLoaded = true;

          this._onResourcesLoadedHandlers.forEach(function (func) {
            func();
          });
        }
      }
    }
    /**
     * Function should be executed when object loaded and ready to use.
     */

  }, {
    key: "objectLoaded",
    value: function objectLoaded(object) {
      var objectsCount = this.objects.length;

      if (this.ui) {
        objectsCount += this.ui.objects.length;
      }

      this._loadedObjectsCount += 1;
      object.loaded = true;

      if (this.running && this._loadedObjectsCount >= objectsCount) {
        this._objectsLoaded = true;

        if (this._texturesLoaded) {
          this._resourcesLoaded = true;

          this._onResourcesLoadedHandlers.forEach(function (func) {
            func();
          });
        }
      }
    }
  }, {
    key: "setDrawingRange",
    value: function setDrawingRange(range) {
      if (this.camera != null) {
        this.camera.range = range;
      } else {
        throw 'Failed to set drawing range. Camera wasn\'t set.';
      }
    }
  }, {
    key: "captureFrame",
    value: function captureFrame(camera, options) {
      var currentCamera = this.camera;
      var currentCanvasSize = [this.canvas.width, this.canvas.height];
      var drawUI = false;
      var imageHeight = 128;
      var imageWidth = 128;
      var background = "rgba(0, 0, 0, 0)";
      var backgroundAlpha = 1;
      var imageAlpha = 1;
      var noDrawObjects = [];

      if (options != null) {
        drawUI = options.drawUI || drawUI;
        imageHeight = options.height || imageHeight;
        imageWidth = options.width || imageWidth;
        background = options.background || background;
        backgroundAlpha = options.backgroundAlpha || backgroundAlpha;
        imageAlpha = options.imageAlpha || imageAlpha;
        noDrawObjects = options.noDrawObjects || [];
      }

      this.width = imageWidth;
      this.height = imageHeight;
      this.canvas.width = imageWidth;
      this.canvas.height = imageHeight;
      this.onCanvasResized();
      this.camera = camera;
      this.webgl.clear(this.webgl.COLOR_BUFFER_BIT | this.webgl.DEPTH_BUFFER_BIT);
      this.shaders["default"].use();
      this.webgl.uniform3fv(this.shaders["default"].lightPositionsLocation, this.lightsPositions);
      this.webgl.uniform1fv(this.shaders["default"].lightRangesLocation, this.lightsRanges);
      this.webgl.uniform1i(this.shaders["default"].lightsCountLocation, this.lights.length);
      this.webgl.uniform1f(this.shaders["default"].lightMinValueLocation, this.globalLightMinValue);
      this.update();

      for (var i = 0; i < this.objects.length; i++) {
        var object = this.objects[i];

        if (noDrawObjects.indexOf(object) == -1) {
          if (drawUI || !object.UIElement) {
            object.draw();
          }
        }
      }

      var frame = document.createElement("canvas");
      frame.height = this.canvas.height;
      frame.width = this.canvas.width;
      var context = frame.getContext("2d");
      context.globalAlpha = backgroundAlpha;

      if (typeof background === "string") {
        context.fillStyle = background;
        context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      } else if (background.constructor === HTMLImageElement) {
        context.drawImage(background, 0, 0, frame.width, frame.height);
      }

      context.globalAlpha = imageAlpha;
      context.drawImage(this.canvas, 0, 0);
      this.camera = currentCamera;
      this.canvas.width = currentCanvasSize[0];
      this.canvas.height = currentCanvasSize[1];
      this.width = currentCanvasSize[0];
      this.height = currentCanvasSize[1];
      this.onCanvasResized();
      return frame;
    }
  }, {
    key: "render",
    value: function render() {
      this.beforeFrame();
      this.update();
      this.draw();
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      _engine = this;
      this._running = true;
      this.status = "Loading resources";

      if (this._loadedTexturesCount == this.textures.length) {
        this._texturesLoaded = true;
      }

      var objectsCount = this.objects.length;

      if (this.ui) {
        objectsCount += this.ui.objects.length + 1;
      }

      if (this._loadedObjectsCount == objectsCount) {
        this._objectsLoaded = true;

        if (this.textureLoaded) {
          this._resourcesLoaded = true;

          this._onResourcesLoadedHandlers.forEach(function (func) {
            func(_this2.textures.length);
          });
        }
      }

      requestAnimationFrameEngine();

      for (var i = 0; i < this._onRun.length; i++) {
        this._onRun[i];
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      this._running = false;
    }
  }, {
    key: "addOnFrameHandler",
    value: function addOnFrameHandler(callback) {
      this._onFrameHandlers.push(callback);

      return callback;
    }
  }, {
    key: "removeOnFrameHandler",
    value: function removeOnFrameHandler(func) {
      var index = this._onFrameHandlers.indexOf(func);

      this._onFrameHandlers.splice(index, 1);
    }
  }, {
    key: "beforeFrame",
    value: function beforeFrame() {
      for (var i = 0; i < this._onFrameHandlers.length; i++) {
        var func = this._onFrameHandlers[i];
        func();
      }
    }
  }, {
    key: "update",
    value: function update() {
      var _this3 = this;

      if (this.camera && this.controls && this.controls.controlFunction) {
        this.camera.moving.set(0, 0, 0);
        this.camera.moving.add(this.camera.animatedMoving);
        this.controls.controlFunction();

        if (this["debugger"] != null) {
          this["debugger"].updateInfo();
        }

        this.controls.mouse.movement.x = 0;
        this.controls.mouse.movement.y = 0;
      }

      this.selectedObject = null;

      for (var i = 0; i < this._objectsWithoutAlpha.length; i++) {
        var object = this._objectsWithoutAlpha[i];
        object.updateMatrixes();

        if (object.checkCollision) {
          object.checkCollision(this.camera.position, this.camera.moving, this.camera.collisionBox, function (coordinate) {
            _this3.camera.moving[coordinate] = 0;
          });
        }
      }

      for (var _i = 0; _i < this._objectsWithAlpha.length; _i++) {
        var _object = this._objectsWithAlpha[_i];

        _object.updateMatrixes();

        if (_object.checkCollision) {
          _object.checkCollision(this.camera.position, this.camera.moving, this.camera.collisionBox, function (coordinate) {
            _this3.camera.moving[coordinate] = 0;
          });
        }
      }

      this.camera.position.move(this.camera.moving.x, this.camera.moving.y, this.camera.moving.z);
      this.camera.computeMatrix();
      this.ui.objects.forEach(function (object) {
        object.updateMatrixes();
        object.update();
      });

      this._objectsWithoutAlpha.forEach(function (element, index) {
        element.update();

        if (element.texture.alpha) {
          _this3._objectsWithAlpha.push(element);

          _this3._objectsWithoutAlpha.splice(index, 1);
        }
      });

      this._objectsWithAlpha.sort(function (a, b) {
        return distance(b.position, _this3.camera.position) - distance(a.position, _this3.camera.position);
      });

      this._objectsWithAlpha.forEach(function (element) {
        element.update();
      });

      if (this.selectedObject && this._onObjectSelectedHandlers.length > 0) {
        for (var _i2 = 0; _i2 < this._onObjectSelectedHandlers.length; _i2++) {
          this._onObjectSelectedHandlers[_i2]();
        }
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this4 = this;

      this.webgl.clear(this.webgl.COLOR_BUFFER_BIT | this.webgl.DEPTH_BUFFER_BIT);
      this.shaders["default"].use();
      this.webgl.uniform3fv(this.shaders["default"].lightPositionsLocation, this.lightsPositions);
      this.webgl.uniform1fv(this.shaders["default"].lightRangesLocation, this.lightsRanges);
      this.webgl.uniform1i(this.shaders["default"].lightsCountLocation, this.lights.length);
      this.webgl.uniform1f(this.shaders["default"].lightMinValueLocation, this.globalLightMinValue);
      this.shaders.shadersRequireLights.forEach(function (shader) {
        shader.use();

        _this4.webgl.uniform3fv(shader.lightPositionsLocation, _this4.lightsPositions);

        _this4.webgl.uniform1fv(shader.lightRangesLocation, _this4.lightsRanges);

        _this4.webgl.uniform1i(shader.lightsCountLocation, _this4.lights.length);

        _this4.webgl.uniform1f(shader.lightMinValueLocation, _this4.globalLightMinValue);
      });
      this.ui.draw();
      this.objects.forEach(function (object) {
        object.draw();
      });

      this._objectsWithAlpha.forEach(function (object) {
        object.draw();
      });

      this.ui.drawUI();
    }
  }, {
    key: "infoConsoleLog",
    value: function infoConsoleLog() {
      console.log();
      console.log("   %c%s", "color: rgba(247, 137, 74, 1); text-align: center; font-size: 16px; font-weight: 700", "Bronze Engine is running");
      console.log();
      console.info("   Version : 0.3.00");
      console.info("   Docs  : http://m0ksem.design/Bronze-Engine/docs/global");
      console.info("   GitHub  : https://github.com/m0ksem/Bronze-Engine");
      console.info("   Author  : https://github.com/m0ksem");
      console.log();
    }
  }, {
    key: "ui",
    set: function set(v) {
      this._ui = v;
      var objectsCount = this.objects.length + this.ui.objects.length;
      this._loadedObjectsCount += 1;

      if (this.running && this._loadedObjectsCount == objectsCount) {
        this._objectsLoaded = true;

        if (this._texturesLoaded) {
          this._resourcesLoaded = true;

          this._onResourcesLoadedHandlers.forEach(function (func) {
            func();
          });
        }
      }
    },
    get: function get() {
      return this._ui;
    }
  }, {
    key: "objects",
    get: function get() {
      return this._objectsWithoutAlpha.concat(this._objectsWithAlpha);
    }
  }, {
    key: "resourcesLoaded",
    get: function get() {
      return this._resourcesLoaded;
    }
  }, {
    key: "texturesLoaded",
    get: function get() {
      return this._texturesLoaded;
    }
  }, {
    key: "objectsLoaded",
    get: function get() {
      return this._objectsLoaded;
    }
  }, {
    key: "running",
    get: function get() {
      return this._running;
    }
  }]);

  return Engine;
}();
/* harmony default export */ var src_Engine = (Engine_Engine);

var _engine;
/**
 * RequestAnimationFrame wrapper for Engine rendering.
 * @private
 */


function requestAnimationFrameEngine() {
  if (!_engine.running) {
    return;
  }

  requestAnimationFrame(requestAnimationFrameEngine);

  _engine.render();
}

(function () {
  var lastTime = 0;
  var vendors = ["ms", "moz", "webkit", "o"];
  var win = window;

  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = win[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame = win[vendors[x] + "CancelAnimationFrame"] || win[vendors[x] + "CancelRequestAnimationFrame"];
  }

  if (!window.requestAnimationFrame) window.requestAnimationFrame = function (callback) {
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
// CONCATENATED MODULE: ./src/objects/Entity.ts
function Entity_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Entity_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Entity_createClass(Constructor, protoProps, staticProps) { if (protoProps) Entity_defineProperties(Constructor.prototype, protoProps); if (staticProps) Entity_defineProperties(Constructor, staticProps); return Constructor; }

function Entity_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Entity_Entity =
/*#__PURE__*/
function () {
  function Entity(engine) {
    Entity_classCallCheck(this, Entity);

    Entity_defineProperty(this, "name", "Just entity :)");

    Entity_defineProperty(this, "loaded", false);

    Entity_defineProperty(this, "verticalAlign", true);

    Entity_defineProperty(this, "vertexes", []);

    Entity_defineProperty(this, "textureCoordinates", []);

    Entity_defineProperty(this, "normals", []);

    Entity_defineProperty(this, "vertexesBuffer", null);

    Entity_defineProperty(this, "textureCoordinatesBuffer", null);

    Entity_defineProperty(this, "normalsBuffer", null);

    Entity_defineProperty(this, "matrix", unit());

    Entity_defineProperty(this, "rotationMatrix", unit());

    Entity_defineProperty(this, "worldMatrix", unit());

    Entity_defineProperty(this, "uiMatrix", null);

    Entity_defineProperty(this, "texture", void 0);

    Entity_defineProperty(this, "rotationInDeg", new Vector3(0, 0, 0));

    Entity_defineProperty(this, "rotation", new Vector3(0, 0, 0));

    Entity_defineProperty(this, "rotationSelf", new Vector3(0, 0, 0));

    Entity_defineProperty(this, "rotationPoint", new Vector3(0, 0, 0));

    Entity_defineProperty(this, "scaling", new Vector3(1, 1, 1));

    Entity_defineProperty(this, "selectable", false);

    Entity_defineProperty(this, "relativeToCameraPosition", {
      max: {
        x: 0,
        y: 0
      },
      min: {
        x: 0,
        y: 0
      },
      depth: 0
    });

    Entity_defineProperty(this, "_engine", void 0);

    Entity_defineProperty(this, "webgl", void 0);

    Entity_defineProperty(this, "camera", void 0);

    Entity_defineProperty(this, "maxSize", new Vector3(0, 0, 0));

    Entity_defineProperty(this, "minSize", new Vector3(0, 0, 0));

    Entity_defineProperty(this, "maxBaseSize", new Vector3(0, 0, 0));

    Entity_defineProperty(this, "minBaseSize", new Vector3(0, 0, 0));

    Entity_defineProperty(this, "hidden", false);

    Entity_defineProperty(this, "rotationPointPos", null);

    Entity_defineProperty(this, "shaderProgram", void 0);

    Entity_defineProperty(this, "_collisionBox", new Entity_CollisionBox());

    Entity_defineProperty(this, "_UIElement", false);

    Entity_defineProperty(this, "_animationInterval", void 0);

    Entity_defineProperty(this, "_position", new Vector3(0, 0, 0));

    this._engine = engine;
    this.webgl = engine.webgl;
    this.camera = engine.camera;
    this.texture = this._engine.noTexture;
    this.shaderProgram = engine.shaders["default"];
    engine.addObject(this);
  }

  Entity_createClass(Entity, [{
    key: "setPosition",
    value: function setPosition(value, y, z) {
      if (value.constructor === Vector3) {
        this.position = value;
      } else if (value.constructor === Array) {
        if (!this.UIElement) {
          this._position.set(value[0], value[1], value[2]);
        } else {
          this._position.set(this.engine.width / 100 * value[0], -this.engine.height / 100 * value[1], value[2]);
        }
      } else {
        if (!this.UIElement) {
          this._position.set(value, y, z);
        } else {
          this._position.set(this.engine.width / 100 * value, -this.engine.height / 100 * y, z);
        }
      }
    }
  }, {
    key: "move",
    value: function move(x, y, z) {
      this._position.move(x, y, z);
    }
  }, {
    key: "moveRelativeToTheCamera",
    value: function moveRelativeToTheCamera(x, y, z) {
      // let matrix = perspective(this.engine.camera!.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.engine.camera!.range);
      // matrix = multiply(matrix, this.engine.camera!.inverseMatrix);
      // matrix = multiply(matrix, translation(this.position.x, this.position.y, this.position.z))
      // let pos = transformVector(inverse(this.matrix), [x, y, 0, 1])
      // console.log(pos)
      // position = transformVector(this.camera!.rotationMatrix, position);
      this._position.move(x, y, z);
    }
    /**
     * Set rotation for x, y, z axis.
     * @param x in deg.
     * @param y in deg.
     * @param z in deg.
     * @public
     */

  }, {
    key: "setRotation",
    value: function setRotation(x, y, z) {
      var xRad = degToRad(x);
      var yRad = degToRad(y);
      var zRad = degToRad(z);
      this.rotationInDeg.set(x, y, z);
      this.rotation.set(xRad, yRad, zRad);
    }
  }, {
    key: "rotate",
    value: function rotate(x, y, z) {
      var xRad = degToRad(x);
      var yRad = degToRad(y);
      var zRad = degToRad(z);
      this.rotationInDeg.move(x, y, z);
      this.rotation.move(xRad, yRad, zRad);
    }
  }, {
    key: "rotateSelf",
    value: function rotateSelf(x, y, z) {
      var xRad = degToRad(x);
      var yRad = degToRad(y);
      var zRad = degToRad(z);
      this.rotationInDeg.move(x, y, z);
      this.rotationSelf.move(xRad, yRad, zRad);
    }
    /**
     * Set rotation point directly using coordinates.
     * @param x
     * @param y
     * @param z
     */

  }, {
    key: "setRotationPoint",
    value: function setRotationPoint(x, y, z) {
      if (x.constructor === String) {
        switch (x) {
          case "center":
            this.rotationPoint.set(0, 0, 0);
            this.rotationPoint.set(0, 0, 0);
            this.rotationPoint.set(0, 0, 0);
            this.rotationPointPos = "center";
            break;

          default:
            new Error_BronzeError("Wrong point type");
        }
      } else {
        this.rotationPoint.set(x, y, z);
      }
    }
    /**
     * Scale object.
     * @param x
     * @param y
     * @param z
     */

  }, {
    key: "scale",
    value: function scale(x, y, z) {
      this.scaling.set(x, y, z);
      this.maxSize.set(this.maxBaseSize.x * x, this.maxBaseSize.y * y, this.maxBaseSize.z * z);
      this.minSize.set(this.minBaseSize.x * x, this.minBaseSize.y * y, this.minBaseSize.z * z);
    }
  }, {
    key: "scaleToPixels",
    value: function scaleToPixels(x, y, z) {
      x = x != null ? x / Math.abs(this.maxBaseSize.x - this.minBaseSize.x) : this.scaling.x;
      y = y != null ? y / Math.abs(this.maxBaseSize.y - this.minBaseSize.y) : this.scaling.y;
      z = z != null ? z / Math.abs(this.maxBaseSize.z - this.minBaseSize.z) : this.scaling.z;
      this.scaling.set(x, y, z);
    }
  }, {
    key: "scaleToPixelsX",
    value: function scaleToPixelsX(x) {
      x = x / Math.abs(this.maxBaseSize.x - this.minBaseSize.x);
      this.scaling.set(x, x, x);
    }
    /**
     * Resize objects to pixels
     * @param x pixels
     * @param y pixels
     * @param z pixels
     */

  }, {
    key: "resize",
    value: function resize(x, y, z) {
      x = x / this.maxBaseSize.x;
      y = y / this.maxBaseSize.y;
      z = z / this.maxBaseSize.z;
      this.scaling.set(x, y, z);
      this.maxSize.set(this.maxBaseSize.x * x, this.maxBaseSize.y * y, this.maxBaseSize.z * z);
      this.minSize.set(this.minBaseSize.x * x, this.minBaseSize.y * y, this.minBaseSize.z * z);
    }
  }, {
    key: "setTexture",
    value: function setTexture(texture) {
      this.texture = texture;
    }
  }, {
    key: "checkCollision",
    value: function checkCollision(position, moving, movingObjectCollisionBox, callback) {
      if (!this.hidden && this.engine.camera.moved) {
        var maxPoint = [this.collisionBox.maxPoint.x, this.collisionBox.maxPoint.y, this.collisionBox.maxPoint.z, 1];
        var minPoint = [this.collisionBox.minPoint.x, this.collisionBox.minPoint.y, this.collisionBox.minPoint.z, 1];
        maxPoint = transformVector(this.worldMatrix, maxPoint);
        minPoint = transformVector(this.worldMatrix, minPoint);

        if (maxPoint[0] < minPoint[0]) {
          var temp = maxPoint[0];
          maxPoint[0] = minPoint[0];
          minPoint[0] = temp;
        }

        var maxX = maxPoint[0] - movingObjectCollisionBox.minPoint.x;
        var minX = minPoint[0] - movingObjectCollisionBox.maxPoint.x;

        if (maxPoint[1] < minPoint[1]) {
          var _temp = maxPoint[1];
          maxPoint[1] = minPoint[1];
          minPoint[1] = _temp;
        }

        var maxY = maxPoint[1] - movingObjectCollisionBox.minPoint.y;
        var minY = minPoint[1] - movingObjectCollisionBox.maxPoint.y;

        if (maxPoint[2] < minPoint[2]) {
          var _temp2 = maxPoint[2];
          maxPoint[2] = minPoint[2];
          minPoint[2] = _temp2;
        }

        var maxZ = maxPoint[2] - movingObjectCollisionBox.minPoint.z;
        var minZ = minPoint[2] - movingObjectCollisionBox.maxPoint.z;
        var newPosX = position.x + moving.x;
        var newPosY = position.y + moving.y;
        var newPosZ = position.z + moving.z;

        if (position.y > minY && position.y < maxY && position.z > minZ && position.z < maxZ) {
          if (position.x < minX && newPosX >= minX || position.x > maxX && newPosX <= maxX) {
            callback("x");
          }
        }

        if (position.x > minX && position.x < maxX && position.z > minZ && position.z < maxZ) {
          if (position.y < minY && newPosY >= minY || position.y > maxY && newPosY <= maxY) {
            callback("y");
          }
        }

        if (position.y > minY && position.y < maxY && position.x > minX && position.x < maxX) {
          if (position.z < minZ && newPosZ >= minZ || position.z > maxZ && newPosZ <= maxZ) {
            callback("z");
          }
        }
      }
    }
  }, {
    key: "useShader",
    value: function useShader(shader) {
      this.shaderProgram = shader;
    }
  }, {
    key: "updateRelativeToCameraPosition",
    value: function updateRelativeToCameraPosition() {
      var xs = [this.collisionBox.maxPoint.x, this.collisionBox.minPoint.x];
      var ys = [this.collisionBox.maxPoint.y, this.collisionBox.minPoint.y];
      var zs = [this.collisionBox.maxPoint.z, this.collisionBox.minPoint.z];
      var smallest = [1000000, 1000000];
      var biggest = [-1000000, -1000000, -1000000];

      for (var ix = 0; ix < 2; ix++) {
        var _x = xs[ix];

        for (var iy = 0; iy < 2; iy++) {
          var _y = ys[iy];

          for (var iz = 0; iz < 2; iz++) {
            var _z = zs[iz];
            var coordsInPixels = transformVector(this.matrix, [_x, _y, _z, 1]);
            coordsInPixels[0] = coordsInPixels[0] / coordsInPixels[3];
            coordsInPixels[1] = coordsInPixels[1] / coordsInPixels[3];
            coordsInPixels[0] = (coordsInPixels[0] * 0.5 + 0.5) * this.engine.width;
            coordsInPixels[1] = (coordsInPixels[1] * -0.5 + 0.5) * this.engine.height;
            coordsInPixels[0] = coordsInPixels[0] < 0 ? 0 : coordsInPixels[0];
            coordsInPixels[1] = coordsInPixels[1] < 0 ? 0 : coordsInPixels[1];
            coordsInPixels[0] = coordsInPixels[0] > this.engine.width ? this.engine.width : coordsInPixels[0];
            coordsInPixels[1] = coordsInPixels[1] > this.engine.height ? this.engine.height : coordsInPixels[1];

            if (coordsInPixels[0] < smallest[0]) {
              smallest[0] = coordsInPixels[0];
            } else if (coordsInPixels[0] > biggest[0]) {
              biggest[0] = coordsInPixels[0];
            }

            if (coordsInPixels[1] < smallest[1]) {
              smallest[1] = coordsInPixels[1];
            } else if (coordsInPixels[1] > biggest[1]) {
              biggest[1] = coordsInPixels[1];
            }

            if (coordsInPixels[2] > biggest[2]) {
              biggest[2] = coordsInPixels[2];
            }
          }
        }
      }

      this.relativeToCameraPosition = {
        max: {
          x: biggest[0],
          y: biggest[1]
        },
        min: {
          x: smallest[0],
          y: smallest[1]
        },
        depth: biggest[2]
      };
    }
  }, {
    key: "getPositionOnScreen",
    value: function getPositionOnScreen() {
      this.updateRelativeToCameraPosition();

      if (this.engine.controls.mouse.x > this.relativeToCameraPosition.min.x && this.engine.controls.mouse.x < this.relativeToCameraPosition.max.x && this.engine.controls.mouse.y > this.relativeToCameraPosition.min.y && this.engine.controls.mouse.y < this.relativeToCameraPosition.max.y) {
        if (this.engine.selectedObject == null || this.engine.selectedObject.relativeToCameraPosition.depth >= this.relativeToCameraPosition.depth) {
          this.engine.selectedObject = this;
        }
      }
    }
  }, {
    key: "updateMatrixes",
    value: function updateMatrixes() {
      var rot = Matrixes4_rotation(this.rotation.x, this.rotation.y, this.rotation.z);
      var world = translation(this._position.x, this._position.y, this._position.z);

      if (!this.verticalAlign) {
        world = Matrixes4_multiply(world, translation(0, -(this.maxSize.y - this.minSize.y) / 2, 0));
      }

      var afterRotation = rot;
      afterRotation = Matrixes4_multiply(afterRotation, translation(-this.minSize.x - (this.maxSize.x - this.minSize.x) / 2, -this.minSize.y - (this.maxSize.y - this.minSize.y) / 2, -this.minSize.z - (this.maxSize.z - this.minSize.z) / 2));
      afterRotation = Matrixes4_multiply(afterRotation, scaling(this.scaling.x, this.scaling.y, this.scaling.z));

      if (this.UIElement) {
        this.uiMatrix = Matrixes4_multiply(world, afterRotation);
        world = Matrixes4_multiply(this.camera.matrix, rot);
      } else {
        world = Matrixes4_multiply(world, afterRotation);
      }

      this.worldMatrix = world;
      this.rotationMatrix = rot;
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.hidden) {
        var matrix = perspective(this.engine.camera.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.engine.camera.range);

        if (!this.UIElement) {
          matrix = Matrixes4_multiply(matrix, this.engine.camera.inverseMatrix);
          matrix = Matrixes4_multiply(matrix, this.worldMatrix);
        } else {
          matrix = Matrixes4_multiply(matrix, this.uiMatrix);
          this.rotationMatrix = Matrixes4_multiply(this.engine.camera.rotationMatrix, this.rotationMatrix);
        }

        this.matrix = matrix;
      }

      if (this.selectable) {
        this.getPositionOnScreen();
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      if (!this.hidden && this.shaderProgram) {
        this.shaderProgram.use();
        this.engine.webgl.enableVertexAttribArray(this.shaderProgram.positionLocation);
        this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, this.vertexesBuffer);
        this.engine.webgl.vertexAttribPointer(this.shaderProgram.positionLocation, 3, this.engine.webgl.FLOAT, false, 0, 0);
        this.engine.webgl.enableVertexAttribArray(this.shaderProgram.texcoordLocation);
        this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, this.textureCoordinatesBuffer);
        this.engine.webgl.vertexAttribPointer(this.shaderProgram.texcoordLocation, 2, this.engine.webgl.FLOAT, false, 0, 0);
        this.engine.webgl.enableVertexAttribArray(this.shaderProgram.normalLocation);
        this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, this.normalsBuffer);
        this.engine.webgl.vertexAttribPointer(this.shaderProgram.normalLocation, 3, this.engine.webgl.FLOAT, false, 0, 0);
        this.engine.webgl.uniform1i(this.shaderProgram.textureLocation, this.texture.textureBlockLocation);
        this.engine.webgl.uniformMatrix4fv(this.shaderProgram.matrixLocation, false, this.matrix);
        this.engine.webgl.uniformMatrix4fv(this.shaderProgram.objectRotationLocation, false, this.rotationMatrix);
        this.engine.webgl.uniformMatrix4fv(this.shaderProgram.worldMatrixLocation, false, this.worldMatrix);
        this.engine.webgl.drawArrays(this.engine.webgl.TRIANGLES, 0, this.vertexes.length / 3);
      }
    }
  }, {
    key: "animate",
    value: function animate(fps, animateFunction) {
      var _this = this;

      animateFunction = animateFunction;
      this._animationInterval = setInterval(function () {
        animateFunction(_this);
      }, 1000 / fps);
      return this._animationInterval;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.hidden = true;
    }
  }, {
    key: "show",
    value: function show() {
      this.hidden = false;
    }
    /**
     * Deletes this object from engine.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.engine.removeObject(this);
    }
  }, {
    key: "engine",
    get: function get() {
      return this._engine;
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    },
    set: function set(v) {
      this._position = v;

      if (!this._UIElement) {
        this._position = v;
      } else {
        this._position.set(this.engine.width / 100 * v.x, -this.engine.height / 100 * v.y, v.z);
      }
    }
  }, {
    key: "UIElement",
    set: function set(v) {
      this._UIElement = v;

      if (this.engine.ui != null) {
        if (v) {
          this.engine.ui.addObject(this);
        } else {
          this.engine.ui.removeObject(this);
        }
      } else {
        new Error_BronzeError("UI not set for engine.");
      }
    },
    get: function get() {
      return this._UIElement;
    }
  }, {
    key: "collisionBox",
    get: function get() {
      if (!this._collisionBox) {
        throw new Error_BronzeError("Collision box is null");
      }

      return this._collisionBox;
    }
  }, {
    key: "size",
    get: function get() {
      return {
        base: {
          max: this.maxBaseSize,
          min: this.minBaseSize
        },
        current: {
          max: this.maxSize,
          min: this.minSize
        }
      };
    }
    /**
     * Sets position for object. Using another vector.
     */

  }]);

  return Entity;
}();

var Entity_CollisionBox =
/*#__PURE__*/
function () {
  function CollisionBox() {
    Entity_classCallCheck(this, CollisionBox);

    Entity_defineProperty(this, "maxPoint", new Vector3(0, 0, 0));

    Entity_defineProperty(this, "minPoint", new Vector3(0, 0, 0));

    Entity_defineProperty(this, "points", []);
  }

  Entity_createClass(CollisionBox, [{
    key: "generatePoints",
    value: function generatePoints() {}
  }]);

  return CollisionBox;
}();


/* harmony default export */ var objects_Entity = (Entity_Entity);
// CONCATENATED MODULE: ./src/Camera.ts
function Camera_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Camera_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Camera_createClass(Constructor, protoProps, staticProps) { if (protoProps) Camera_defineProperties(Constructor.prototype, protoProps); if (staticProps) Camera_defineProperties(Constructor, staticProps); return Constructor; }

function Camera_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/**
 * Creates camera object.
 * @class
 * @constructor
 */
var Camera_Camera =
/*#__PURE__*/
function () {
  /**
   * Field of view for drawing in angles.
   */

  /**
   * Field of view in radians.
   */

  /**
   * Camera rotation.
   * @readonly
   */

  /**
   * Set range of camera for view.
   * @default 20000
   */

  /**
   * Matrix of camera.
   */

  /**
   * Rotation matrix of this camera.
   */

  /**
   * Inverse matrix of this camera.
   */

  /**
   * Inverse matrix of this camera rotation.
   */

  /**
   * True if camera move.
   */

  /**
   * Array of moving values for camera for frame.
   */

  /**
   * Vector3 for animated
   */

  /**
   * Collision box for camera.
   */

  /**
   * True if camera have collisions.
   */
  function Camera(engine) {
    Camera_classCallCheck(this, Camera);

    Camera_defineProperty(this, "fieldOfView", 90);

    Camera_defineProperty(this, "fieldOfViewRad", degToRad(90));

    Camera_defineProperty(this, "rotation", new Vector3(0, 0, 0));

    Camera_defineProperty(this, "range", 20000);

    Camera_defineProperty(this, "matrix", unit());

    Camera_defineProperty(this, "rotationMatrix", unit());

    Camera_defineProperty(this, "inverseMatrix", unit());

    Camera_defineProperty(this, "inverseRotationMatrix", unit());

    Camera_defineProperty(this, "moved", false);

    Camera_defineProperty(this, "moving", new Vector3(0, 0, 0));

    Camera_defineProperty(this, "animatedMoving", new Vector3(0, 0, 0));

    Camera_defineProperty(this, "collisionBox", new Entity_CollisionBox());

    Camera_defineProperty(this, "collisions", true);

    Camera_defineProperty(this, "engine", void 0);

    Camera_defineProperty(this, "_position", new Vector3(0, 400, 500));

    this.engine = engine;
  }
  /**
   * Camera position.
   * @public
   * @type
   */


  Camera_createClass(Camera, [{
    key: "setCubeCollisionBox",
    value: function setCubeCollisionBox(size) {
      var halfSize = size / 2;
      this.collisionBox.minPoint.x = -halfSize;
      this.collisionBox.minPoint.y = -halfSize;
      this.collisionBox.minPoint.z = -halfSize;
      this.collisionBox.maxPoint.x = halfSize;
      this.collisionBox.maxPoint.y = halfSize;
      this.collisionBox.maxPoint.z = halfSize;
    }
    /**
     * Sets field of view for camera.
     * @param {Number} angle
     * @public
     */

  }, {
    key: "setFieldOfView",
    value: function setFieldOfView(angle) {
      this.fieldOfView = angle;
      this.fieldOfViewRad = degToRad(angle);
    }
    /**
     * Sets collision.
     * @param {boolean} bool
     * @public
     */

  }, {
    key: "setCollisions",
    value: function setCollisions(bool) {
      this.collisions = bool;
    }
    /**
     * Execute when camera have collision with object
     * @param {Object} object
     */

  }, {
    key: "onCollision",
    value: function onCollision(object) {
      this.moving.x = 0;
      this.moving.y = 0;
      this.moving.z = 0;
    }
    /**
     * Absolutely sets position for camera.
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @public
     */

  }, {
    key: "setPosition",
    value: function setPosition(x, y, z) {
      this.position.set(x, y, z);
    }
    /**
     * Move camera.
     */

  }, {
    key: "move",
    value: function move(x, y, z) {
      this.moving.move(x, y, z);
      this.moved = true;
    }
    /**
     * Smooth moving camera.
     * @param x 
     * @param y 
     * @param z 
     */

  }, {
    key: "moveAnimate",
    value: function moveAnimate(x, y, z) {
      var _this = this;

      var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 100;
      x = x / time;
      y = y / time;
      z = z / time;
      var vec = new Vector3(x, y, z);
      this.animatedMoving.add(vec);
      var t = time;
      var tick = this.engine.addOnFrameHandler(function () {
        t -= 1;

        if (t <= 0) {
          _this.engine.removeOnFrameHandler(tick);

          _this.animatedMoving.sub(vec);
        }
      });
    }
    /**
     * Rotate for x, y, z degrees.
     */

  }, {
    key: "rotate",
    value: function rotate(x, y, z) {
      this.rotation.x += x;
      this.rotation.y += y;
      this.rotation.z += z;
      this.computeMatrix();
    }
    /**
     * Sets rotation angles
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     */

  }, {
    key: "setRotation",
    value: function setRotation(x, y, z) {
      this.rotation.set(x, y, z);
      this.computeMatrix();
    }
    /**
     * Compute camera matrix with rotation, positions.
     */

  }, {
    key: "computeMatrix",
    value: function computeMatrix() {
      this.matrix = translation(this.position.x, this.position.y, this.position.z);
      var rotation = Matrixes4_rotationY(degToRad(this.rotation.y));
      rotation = Matrixes4_multiply(rotation, Matrixes4_rotationX(degToRad(this.rotation.x)));
      rotation = Matrixes4_multiply(rotation, Matrixes4_rotationZ(degToRad(this.rotation.z)));
      this.matrix = Matrixes4_multiply(this.matrix, rotation);
      this.rotationMatrix = rotation;
      this.inverseRotationMatrix = inverse(rotation);
      this.inverseMatrix = inverse(this.matrix);
    }
  }, {
    key: "position",
    get: function get() {
      return this._position;
    }
    /**
     * Camera position.
     * @public
     */
    ,
    set: function set(value) {
      this._position = value;
      this.computeMatrix();
    }
  }]);

  return Camera;
}();
/* harmony default export */ var src_Camera = (Camera_Camera);
// CONCATENATED MODULE: ./src/Controls.ts
function Controls_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Controls_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Controls_createClass(Constructor, protoProps, staticProps) { if (protoProps) Controls_defineProperties(Constructor.prototype, protoProps); if (staticProps) Controls_defineProperties(Constructor, staticProps); return Constructor; }

function Controls_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * Help class for creating user controls.
 * @class
 * @constructor
 */

var Controls_Controls =
/*#__PURE__*/
function () {
  /**
   * True if canvas focused.
   */

  /**
   * True if keys pressed. False if not.
   */

  /**
   * True if mouse cursor over canvas element.
   */

  /**
   * The time that the user must spend on a long press.
   * A long press counts as a right mouse click.
   */

  /**
   * Rebind default key events
   * @default true
   */

  /**
   * Functions which triggers if key pressed.
   */

  /**
   * Set focus only if canvas clicked like on default input or button.
   * If [true] then you need to click on canvas before it will be focused.
   * If [false] then you just need to move your cursor over canvas.
   * @type {boolean}
   * @default true
   * @private
   */

  /**
   * Functions which triggers if mouse button pressed.
   * @private
   */

  /**
   * Functions which triggers if mouse button pressed.
   * @private
   */

  /**
   * Help class for creating user controls.
   */
  function Controls(engine) {
    var _this = this;

    Controls_classCallCheck(this, Controls);

    Controls_defineProperty(this, "engine", void 0);

    Controls_defineProperty(this, "isFocused", false);

    Controls_defineProperty(this, "keys", []);

    Controls_defineProperty(this, "mouseOverCanvas", false);

    Controls_defineProperty(this, "pointerLocked", false);

    Controls_defineProperty(this, "mouse", new Controls_Mouse());

    Controls_defineProperty(this, "touch", new Controls_Touch());

    Controls_defineProperty(this, "longTouchTime", 500);

    Controls_defineProperty(this, "touchDuration", 100);

    Controls_defineProperty(this, "controlFunction", null);

    Controls_defineProperty(this, "_lockPointer", false);

    Controls_defineProperty(this, "_rebind", true);

    Controls_defineProperty(this, "_globalRebind", false);

    Controls_defineProperty(this, "_handlers", []);

    Controls_defineProperty(this, "_focusHandlers", []);

    Controls_defineProperty(this, "_blurHandlers", []);

    Controls_defineProperty(this, "_focusOnlyIfClick", true);

    Controls_defineProperty(this, "_mouseDownHandlers", [null, null, null, null, null, null]);

    Controls_defineProperty(this, "_mouseUpHandlers", [null, null, null, null, null, null]);

    engine.controls = this;
    this.engine = engine;

    for (var i = 0; i < 255; i++) {
      this.keys[i] = false;
      this._handlers[i] = null;
    }

    window.onkeydown = function (event) {
      if (_this.isFocused) {
        if (event.keyCode == 27) {
          engine.div.blur();
        }

        _this.keys[event.keyCode] = true;

        if (_this._handlers[event.keyCode] != null) {
          _this._handlers[event.keyCode](event);
        }

        return !_this._rebind;
      } else {
        if (_this._globalRebind) {
          return !_this._rebind;
        } else {
          return true;
        }
      }
    };

    window.onkeyup = function (event) {
      _this.keys[event.keyCode] = false;
      return !_this._rebind;
    };

    engine.div.setAttribute("tabindex", "0");

    engine.div.onblur = function () {
      _this.isFocused = false;

      for (var _i = 0; _i < _this._blurHandlers.length; _i++) {
        _this._blurHandlers[_i]();
      }
    };

    engine.div.onfocus = function () {
      _this.isFocused = true;

      for (var _i2 = 0; _i2 < _this._focusHandlers.length; _i2++) {
        _this._focusHandlers[_i2]();
      }
    };

    engine.div.onclick = function () {
      if (_this._focusOnlyIfClick && !_this.isFocused) {
        engine.div.focus();
      }

      if (_this._lockPointer) {
        engine.div.requestPointerLock();
      }
    };

    engine.div.oncontextmenu = function () {
      return false;
    };

    if (isTouchDevice()) {
      var toucheTime;

      var touchDurationFunction = function touchDurationFunction() {
        _this.touch.duration = new Date().getTime() - toucheTime;

        if (_this.touch.duration > _this.longTouchTime) {
          _this.touch.longClick = true;
          _this.touch.click = false;
          clearInterval();
        }
      };

      var durationCalculation;
      var touchMoved = false;
      engine.div.addEventListener("touchstart", function (event) {
        if (_this._mouseDownHandlers[2] != null) {
          _this._mouseDownHandlers[2](event);
        }

        durationCalculation = setInterval(touchDurationFunction, 100);
        toucheTime = new Date().getTime();
        _this.touch.duration = 0;
        touchMoved = false;
        return false;
      }, false);
      engine.div.addEventListener("touchend", function (event) {
        if (!touchMoved && _this.touch.duration < _this.longTouchTime) {
          _this.touch.click = true;
          setTimeout(function () {
            _this.touch.click = false;
          }, 100);
        } else {
          _this.touch.actionBeforeMove = null;
        }

        lastMousePosition = null;
        _this.touch.longClick = false;
        clearInterval(durationCalculation);
        return false;
      }, false);
      var lastMousePosition = null;
      engine.div.addEventListener("touchmove", function (event) {
        var mousePos = engine.div.getBoundingClientRect();
        var x = event.touches[0].clientX - mousePos.left;
        var y = event.touches[0].clientY - mousePos.top;
        _this.mouse.x = x;
        _this.mouse.y = y;

        if (lastMousePosition == null) {
          lastMousePosition = new Vector2(x, y);
        }

        var moveX = (x - lastMousePosition.x) * _this.mouse.sensitivity;
        var moveY = (y - lastMousePosition.y) * _this.mouse.sensitivity;
        _this.mouse.movement.x = moveX;
        _this.mouse.movement.y = moveY;
        lastMousePosition.x = x;
        lastMousePosition.y = y;
        _this.touch.x = x;
        _this.touch.y = y;
        _this.touch.movement.x = moveX;
        _this.touch.movement.y = moveY;

        if (!touchMoved) {
          if (_this.touch.duration > _this.longTouchTime) {
            _this.touch.actionBeforeMove = "long click";
            _this.touch.longClick = false;
          } else {
            _this.touch.actionBeforeMove = "click";
            _this.touch.click = false;
          }
        }

        touchMoved = true;
        clearInterval(durationCalculation);
      }, false);
    } else {
      var _lastMousePosition = null;
      engine.div.addEventListener("mousemove", function (event) {
        if (_this.isFocused) {
          if (!_this.pointerLocked) {
            var mousePos = engine.div.getBoundingClientRect();
            var x = event.clientX - mousePos.left;
            var y = event.clientY - mousePos.top;
            _this.mouse.x = x;
            _this.mouse.y = y;

            if (_lastMousePosition == null) {
              _lastMousePosition = new Vector2(x, y);
            }

            _this.mouse.movement.x = (x - _lastMousePosition.x) * _this.mouse.sensitivity;
            _this.mouse.movement.y = (y - _lastMousePosition.y) * _this.mouse.sensitivity;
            _lastMousePosition.x = x;
            _lastMousePosition.y = y;
          } else {
            _this.mouse.movement.x = -event.movementX * _this.mouse.sensitivity;
            _this.mouse.movement.y = -event.movementY * _this.mouse.sensitivity;
            _this.mouse.x = _this.engine.width / 2;
            _this.mouse.y = _this.engine.height / 2;
          }
        }
      }, false);
      window.addEventListener("mousemove", function (event) {
        var canvasPos = engine.div.getBoundingClientRect();
        var x = event.clientX;
        var y = event.clientY;

        if (x < canvasPos.right && x > canvasPos.left && y < canvasPos.bottom && y > canvasPos.top) {
          _this.mouseOverCanvas = true;

          if (!_this._focusOnlyIfClick && !_this.isFocused) {
            engine.div.focus();
          }
        } else {
          _this.mouseOverCanvas = false;

          if (!_this._focusOnlyIfClick) {
            engine.div.blur();
          }
        }
      });

      engine.div.onmousedown = function (event) {
        if (_this.isFocused) {
          _this.mouse.buttons[event.button] = true;
          if (_this._mouseDownHandlers[2 + event.button] != null) _this._mouseDownHandlers[2 + event.button](event);
          return false;
        }
      };

      engine.div.onmouseup = function (event) {
        _this.mouse.buttons[event.button] = false;
        if (_this._mouseUpHandlers[2 + event.button] != null) _this._mouseUpHandlers[2 + event.button](event);
        return false;
      };

      document.addEventListener("pointerlockchange", function () {
        if (document.pointerLockElement === engine.div) {
          engine.div.focus();
          _this.pointerLocked = true;
        } else {
          engine.div.blur();
          _this.pointerLocked = false;
        }
      }, false);
    }
  }
  /**
   * Sets mode when user need click to focus canvas
   */


  Controls_createClass(Controls, [{
    key: "clickForFocus",
    value: function clickForFocus(bool) {
      bool = bool || !this._focusOnlyIfClick;
      this._focusOnlyIfClick = bool;
    }
    /**
     * Set sensitivity for mouse movement
     * @default 1
     * @param sensitivity
     */

  }, {
    key: "setSensitivity",
    value: function setSensitivity(sensitivity) {
      this.mouse.sensitivity = sensitivity;
    }
    /**
     * Rebind default browser shortcut actions. Will switch rebind option.
     * @default true
     * @param bool switch to
     */

  }, {
    key: "rebindDefaultBrowserActions",
    value: function rebindDefaultBrowserActions(bool) {
      bool = bool || !this._rebind;
      this._rebind = bool;
    }
    /**
     * Rebind default browser shortcut actions on all page. By default rebind occurs only if canvas focused.
     * @default false
     * @param {boolean} bool
     */

  }, {
    key: "globalRebind",
    value: function globalRebind(bool) {
      bool = bool || !this._globalRebind;
      this._globalRebind = bool;
    }
    /**
     * Adds handler which will execute on canvas focus.
     * @param {Function} handler
     */

  }, {
    key: "addOnFocusHandler",
    value: function addOnFocusHandler(handler) {
      this._focusHandlers.push(handler);
    }
    /**
     * Adds handler which will execute on canvas blur.
     * @param {Function} handler
     */

  }, {
    key: "addOnBlurHandler",
    value: function addOnBlurHandler(handler) {
      this._blurHandlers.push(handler);
    }
    /**
     * Sets handler for keyboard key down.
     * @param {Number} keyCode
     * @param {Function} handler
     * @public
     */

  }, {
    key: "onKeyDown",
    value: function onKeyDown(keyCode, handler) {
      this._handlers[keyCode] = handler;
    }
    /**
     * Sets handler for mouse key down.
     * @param {Number} keyCode
     * @param {Function} handler
     * @public
     */

  }, {
    key: "onMouseDown",
    value: function onMouseDown(keyCode, handler) {
      this._mouseDownHandlers[2 + keyCode] = handler;
    }
    /**
     * Sets handler for mouse key down.
     * @param {Number} keyCode
     * @param {Function} handler
     * @public
     */

  }, {
    key: "onMouseUp",
    value: function onMouseUp(keyCode, handler) {
      this._mouseUpHandlers[2 + keyCode] = handler;
    }
    /**
     * Sets handler for mouse moving.
     * @param {Function} handler
     * @public
     */

  }, {
    key: "onMouseMove",
    value: function onMouseMove(handler) {
      this.engine.div.addEventListener("mousemove", handler, false);
    }
    /**
     * Sets function on right click for context menu.
     * @param {Function} handler
     * @public
     */

  }, {
    key: "onContextMenu",
    value: function onContextMenu(handler) {
      this.engine.div.oncontextmenu = handler;
    }
    /**
     * Lock pointer on canvas. Useful for FPS Games.
     * @default true
     * @param {boolean} [bool]
     */

  }, {
    key: "lockPointer",
    value: function lockPointer(bool) {
      bool = bool || !this._lockPointer;
      this._lockPointer = bool;
    }
  }, {
    key: "setControlFunction",
    value: function setControlFunction(func) {
      this.controlFunction = func;
    }
  }]);

  return Controls;
}();
/**
 * Mouse object which contains position and pressed buttons.
 * @property {Number} x mouse position x.
 * @property {Number} y mouse position y.
 * @property {Array}  buttons mouse buttons clicks.
 * @property {Number} movement.x mouse movement x from last frame.
 * @property {Number} movement.y mouse movement y from last frame.
 * @property {Number} sensitivity sensitivity for mouse movement.
 * @public
 */

var Controls_Mouse = function Mouse() {
  Controls_classCallCheck(this, Mouse);

  Controls_defineProperty(this, "x", 0);

  Controls_defineProperty(this, "y", 0);

  Controls_defineProperty(this, "movement", new Vector2(0, 0));

  Controls_defineProperty(this, "click", false);

  Controls_defineProperty(this, "longClick", false);

  Controls_defineProperty(this, "duration", null);

  Controls_defineProperty(this, "actionBeforeMove", null);

  Controls_defineProperty(this, "sensitivity", 1);

  Controls_defineProperty(this, "buttons", [false, false, false]);
};
/**
 * @type {Object}
 * @property {Number} x mouse position x.
 * @property {Number} y mouse position y.
 * @property {Number} movement.x mouse movement x from last frame.
 * @property {Number} movement.y mouse movement y from last frame.
 * @property {boolean} click is current action is click.
 * @property {boolean} longClick is current action is longClick.
 * @property {Number} duration how long does it take to press.
 * @property {String} actionBeforeMove 'click' or 'long click'
 * @public
 */

var Controls_Touch = function Touch() {
  Controls_classCallCheck(this, Touch);

  Controls_defineProperty(this, "x", 0);

  Controls_defineProperty(this, "y", 0);

  Controls_defineProperty(this, "movement", new Vector2(0, 0));

  Controls_defineProperty(this, "click", false);

  Controls_defineProperty(this, "longClick", false);

  Controls_defineProperty(this, "duration", null);

  Controls_defineProperty(this, "actionBeforeMove", null);
};

function isTouchDevice() {
  var prefixes = " -webkit- -moz- -o- -ms- ".split(" ");

  var mq = function mq(query) {
    return window.matchMedia(query).matches;
  };

  if ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch) {
    return true;
  }

  var query = ["(", prefixes.join("touch-enabled),("), "heartz", ")"].join("");
  return mq(query);
}

/* harmony default export */ var src_Controls = (Controls_Controls);
// CONCATENATED MODULE: ./src/textures/SimpleTexture.ts
function SimpleTexture_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { SimpleTexture_typeof = function _typeof(obj) { return typeof obj; }; } else { SimpleTexture_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return SimpleTexture_typeof(obj); }

function SimpleTexture_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function SimpleTexture_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function SimpleTexture_createClass(Constructor, protoProps, staticProps) { if (protoProps) SimpleTexture_defineProperties(Constructor.prototype, protoProps); if (staticProps) SimpleTexture_defineProperties(Constructor, staticProps); return Constructor; }

function SimpleTexture_possibleConstructorReturn(self, call) { if (call && (SimpleTexture_typeof(call) === "object" || typeof call === "function")) { return call; } return SimpleTexture_assertThisInitialized(self); }

function SimpleTexture_getPrototypeOf(o) { SimpleTexture_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SimpleTexture_getPrototypeOf(o); }

function SimpleTexture_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function SimpleTexture_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) SimpleTexture_setPrototypeOf(subClass, superClass); }

function SimpleTexture_setPrototypeOf(o, p) { SimpleTexture_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SimpleTexture_setPrototypeOf(o, p); }

function SimpleTexture_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var SimpleTexture_SimpleTexture =
/*#__PURE__*/
function (_Texture) {
  SimpleTexture_inherits(SimpleTexture, _Texture);

  function SimpleTexture(engine, path) {
    var _this;

    SimpleTexture_classCallCheck(this, SimpleTexture);

    _this = SimpleTexture_possibleConstructorReturn(this, SimpleTexture_getPrototypeOf(SimpleTexture).call(this, engine));

    SimpleTexture_defineProperty(SimpleTexture_assertThisInitialized(_this), "textureBlockLocation", -1);

    SimpleTexture_defineProperty(SimpleTexture_assertThisInitialized(_this), "mipmapFilter", 'LINEAR');

    SimpleTexture_defineProperty(SimpleTexture_assertThisInitialized(_this), "AUTO_GENERATE", 0);

    SimpleTexture_defineProperty(SimpleTexture_assertThisInitialized(_this), "QUICK_GENERATE", 1);

    SimpleTexture_defineProperty(SimpleTexture_assertThisInitialized(_this), "_mipmap", []);

    SimpleTexture_defineProperty(SimpleTexture_assertThisInitialized(_this), "_onTextureLoadedHandlers", []);

    SimpleTexture_defineProperty(SimpleTexture_assertThisInitialized(_this), "_width", -1);

    SimpleTexture_defineProperty(SimpleTexture_assertThisInitialized(_this), "_height", -1);

    SimpleTexture_defineProperty(SimpleTexture_assertThisInitialized(_this), "_image", new Image());

    SimpleTexture_defineProperty(SimpleTexture_assertThisInitialized(_this), "_mipmapGenerationMethod", -1);

    _this.engine = engine;
    _this.textureBlockLocation = _this.engine.textures.length;

    _this.engine.textures.push(SimpleTexture_assertThisInitialized(_this));

    var webgl = _this.engine.webgl;
    _this.webglTexture = webgl.createTexture();
    webgl.activeTexture(webgl.TEXTURE0 + _this.textureBlockLocation);
    webgl.bindTexture(webgl.TEXTURE_2D, _this.webglTexture);
    webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, 1, 1, 0, webgl.RGBA, webgl.UNSIGNED_BYTE, _this.color);
    return _this;
  }

  SimpleTexture_createClass(SimpleTexture, [{
    key: "setMipmapGenerationMethod",
    value: function setMipmapGenerationMethod(method) {
      this._mipmapGenerationMethod = method;
    }
  }, {
    key: "setSize",
    value: function setSize(width, height) {
      this.width = width;
      this.height = height;
      this._image.width = width;
      this._image.height = height;

      if (this.loaded) {
        this._createWebglTexture();
      }
    }
  }, {
    key: "_createWebglTexture",
    value: function _createWebglTexture() {
      var webgl = this.engine.webgl;
      webgl.activeTexture(webgl.TEXTURE0 + this.textureBlockLocation);
      var mipmapFilter;
      var mipmapRequire = true;

      switch (this.mipmapFilter) {
        case 'NEAREST':
          mipmapFilter = webgl.NEAREST;
          mipmapRequire = false;
          break;

        case 'LINEAR':
          mipmapFilter = webgl.LINEAR;
          mipmapRequire = false;
          break;

        case 'NEAREST_MIPMAP_NEAREST':
          mipmapFilter = webgl.NEAREST_MIPMAP_NEAREST;
          break;

        case 'LINEAR_MIPMAP_NEAREST':
          mipmapFilter = webgl.LINEAR_MIPMAP_NEAREST;
          break;

        case 'NEAREST_MIPMAP_LINEAR':
          mipmapFilter = webgl.LINEAR_MIPMAP_NEAREST;
          break;

        case 'LINEAR_MIPMAP_LINEAR':
          mipmapFilter = webgl.LINEAR_MIPMAP_LINEAR;
          break;

        default:
          mipmapRequire = false;
          mipmapFilter = webgl.LINEAR;
          break;
      }

      webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MIN_FILTER, mipmapFilter);
      webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_MAG_FILTER, webgl.LINEAR);

      if (this._mipmapGenerationMethod == this.QUICK_GENERATE) {
        if (this.width / this.height == 2) {
          var i = this.height;
          var offsetX = 0;

          while (true) {
            var tempCanvas = document.createElement("canvas");
            tempCanvas.width = i;
            tempCanvas.height = i;
            var tempCanvasContext = tempCanvas.getContext("2d");
            tempCanvasContext.drawImage(this._image, offsetX, 0, i, i, 0, 0, i, i);

            this._mipmap.push(tempCanvas);

            if (i == 1) {
              break;
            }

            offsetX += i;
            i = i / 2;
          }
        } else {
          return console.warn('Wrong _image sizes for quick generation _mipmap.');
        }
      }

      if (mipmapRequire && !(this._mipmapGenerationMethod == this.AUTO_GENERATE)) {
        if (this._mipmap.length > 0) {
          this._mipmap.forEach(function (mip, level) {
            webgl.texImage2D(webgl.TEXTURE_2D, level, webgl.RGBA, webgl.RGBA, webgl.UNSIGNED_BYTE, mip);
          });
        } else {
          console.warn('Need to generate mipmaps for texture:');
          console.warn(this);
        }
      } else {
        webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, webgl.RGBA, webgl.UNSIGNED_BYTE, this._image);
      }

      if ((mipmapRequire || this._mipmapGenerationMethod == this.AUTO_GENERATE) && isPowerOf2(this._width) && isPowerOf2(this._height)) {
        webgl.generateMipmap(webgl.TEXTURE_2D);
      } else {
        webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_WRAP_S, webgl.CLAMP_TO_EDGE);
        webgl.texParameteri(webgl.TEXTURE_2D, webgl.TEXTURE_WRAP_T, webgl.CLAMP_TO_EDGE);
      }
    }
  }, {
    key: "loadFrom",
    value: function loadFrom(path) {
      var _this2 = this;

      this._image.src = path;

      this._image.addEventListener('load', function () {
        _this2.engine.textureLoaded(_this2);

        _this2.loaded = true;

        for (var i = 0; i < _this2._onTextureLoadedHandlers.length; i++) {
          _this2._onTextureLoadedHandlers[i]();
        }

        if (_this2._height == -1 || _this2._width == -1) {
          _this2._height = _this2._image.height;
          _this2._width = _this2._image.width;
        }

        _this2._createWebglTexture();
      });
    }
  }, {
    key: "image",
    get: function get() {
      return this._image;
    }
  }, {
    key: "height",
    set: function set(v) {
      this._height = v;
      this._image.height = v;
    },
    get: function get() {
      return this._height;
    }
  }, {
    key: "width",
    set: function set(v) {
      this._width = v;
      this._image.width = v;
    },
    get: function get() {
      return this._width;
    }
  }]);

  return SimpleTexture;
}(Texture_Texture);
/* harmony default export */ var textures_SimpleTexture = (SimpleTexture_SimpleTexture);
// CONCATENATED MODULE: ./src/ui/UI.ts
function UI_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { UI_typeof = function _typeof(obj) { return typeof obj; }; } else { UI_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return UI_typeof(obj); }

function UI_possibleConstructorReturn(self, call) { if (call && (UI_typeof(call) === "object" || typeof call === "function")) { return call; } return UI_assertThisInitialized(self); }

function UI_getPrototypeOf(o) { UI_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return UI_getPrototypeOf(o); }

function UI_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function UI_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) UI_setPrototypeOf(subClass, superClass); }

function UI_setPrototypeOf(o, p) { UI_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return UI_setPrototypeOf(o, p); }

function UI_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function UI_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function UI_createClass(Constructor, protoProps, staticProps) { if (protoProps) UI_defineProperties(Constructor.prototype, protoProps); if (staticProps) UI_defineProperties(Constructor, staticProps); return Constructor; }

function UI_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * @class
 * @constructor
 * @param {Engine} e
 */

var UI_UI =
/*#__PURE__*/
function () {
  function UI(engine) {
    UI_classCallCheck(this, UI);

    UI_defineProperty(this, "canvas", void 0);

    UI_defineProperty(this, "div", void 0);

    UI_defineProperty(this, "width", void 0);

    UI_defineProperty(this, "height", void 0);

    UI_defineProperty(this, "centerX", void 0);

    UI_defineProperty(this, "centerY", void 0);

    UI_defineProperty(this, "context", void 0);

    UI_defineProperty(this, "objects", void 0);

    UI_defineProperty(this, "htmlElements", void 0);

    UI_defineProperty(this, "engine", void 0);

    UI_defineProperty(this, "Screen", Screen);

    UI_defineProperty(this, "images", []);

    UI_defineProperty(this, "webgl", void 0);

    UI_defineProperty(this, "_screen", void 0);

    UI_defineProperty(this, "_texture", void 0);

    UI_defineProperty(this, "_webglTexture", void 0);

    UI_defineProperty(this, "frameBuffer", void 0);

    this.width = engine.div.offsetWidth;
    this.height = engine.div.offsetHeight;
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.canvas.style.position = "absolute";
    this.canvas.style.height = "100%";
    this.canvas.style.width = "100%";
    this.canvas.style.zIndex = "999999";
    this.canvas.style.left = "0";
    this.canvas.style.right = "0";
    this.canvas.style.top = "0";
    this.div = document.createElement("div");
    this.div.style.position = "absolute";
    this.div.style.height = "100%";
    this.div.style.width = "100%";
    this.div.style.zIndex = "999999";
    this.div.style.left = "0";
    this.div.style.right = "0";
    this.div.style.top = "0";
    engine.div.appendChild(this.canvas);
    engine.div.appendChild(this.div);
    this.centerX = this.width / 2;
    this.centerY = this.height / 2;
    this.context = this.canvas.getContext("2d");
    this.objects = [];
    this.htmlElements = [];
    engine.ui = this;
    this.engine = engine;
    this.webgl = engine.webgl;
    this._screen = new Screen(this.engine);
    this._texture = {
      _textureBlockLocation: this.engine.textures.length
    };
    this.engine.textures.push(this._texture);
    this.engine.textureLoaded(this._texture);
    this.engine.webgl.activeTexture(this.engine.webgl.TEXTURE0 + this._texture._textureBlockLocation);
    this._webglTexture = this.webgl.createTexture();
    this.webgl.bindTexture(this.webgl.TEXTURE_2D, this._webglTexture);
    this.webgl.texImage2D(this.webgl.TEXTURE_2D, 0, this.webgl.RGBA, this.width, this.height, 0, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, null);
    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MAG_FILTER, this.webgl.NEAREST);
    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_MIN_FILTER, this.webgl.NEAREST);
    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_S, this.webgl.CLAMP_TO_EDGE);
    this.webgl.texParameteri(this.webgl.TEXTURE_2D, this.webgl.TEXTURE_WRAP_T, this.webgl.CLAMP_TO_EDGE);
    this.frameBuffer = this.webgl.createFramebuffer();
    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, this.frameBuffer);
    this.webgl.framebufferTexture2D(this.webgl.FRAMEBUFFER, this.webgl.COLOR_ATTACHMENT0, this.webgl.TEXTURE_2D, this._webglTexture, 0);
    var depthBuffer = this.webgl.createRenderbuffer();
    this.webgl.bindRenderbuffer(this.webgl.RENDERBUFFER, depthBuffer);
    this.webgl.renderbufferStorage(this.webgl.RENDERBUFFER, this.webgl.DEPTH_COMPONENT16, this.width, this.height);
    this.webgl.framebufferRenderbuffer(this.webgl.FRAMEBUFFER, this.webgl.DEPTH_ATTACHMENT, this.webgl.RENDERBUFFER, depthBuffer);
    this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, null);
  }
  /**
   * Adds object to draw.
   * @param element some UI element.
   */


  UI_createClass(UI, [{
    key: "addObject",
    value: function addObject(object) {
      this.objects.push(object);
      this.engine.removeObject(object);
    }
    /**
     * Removes element from drawing function.
     * @param element
     */

  }, {
    key: "removeObject",
    value: function removeObject(object) {
      var index = this.objects.indexOf(object);

      if (index != -1) {
        this.objects.splice(index, 1);
        this.engine.addObject(object);
      } else {
        console.warn("Object not found");
      }
    }
    /**
     * Adding DOM element upper game engine canvas.
     * @param element
     * @param position.vertical from 0 to 100
     */

  }, {
    key: "appendDOMElement",
    value: function appendDOMElement(element, name) {
      this.div.appendChild(element);
      this.htmlElements.push(new uiHTMLElement(name, element));
      return element;
    }
  }, {
    key: "addImage",
    value: function addImage(image, width, height, x, y) {
      image.width = width;
      image.height = height;
      var uiHTML = new uiHTMLImage('', image, x, y, width, height);
      this.images.push(uiHTML);
      return this.images[this.images.length - 1];
    }
  }, {
    key: "hide",
    value: function hide(element) {
      if (element instanceof SimpleTexture_SimpleTexture) {
        element = element.image;
      } else if (element instanceof uiHTMLElement) {
        element.hidden = true;
        element = element.el;
      }

      element.style.display = 'none';
    }
  }, {
    key: "show",
    value: function show(element) {
      if (element instanceof SimpleTexture_SimpleTexture) {
        element = element.image;
      } else if (element instanceof uiHTMLElement) {
        element.hidden = false;
        element = element.el;
      }

      element.style.display = 'block';
    }
    /**
     * Draws image on canvas. Read about addImage
     * @param image
     */

  }, {
    key: "drawImage",
    value: function drawImage(image) {
      this.context.drawImage(image, 0, 0);
    }
    /**
     * Clear canvas
     */

  }, {
    key: "clearCanvas",
    value: function clearCanvas() {
      this.context.clearRect(0, 0, this.width, this.height);
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this = this;

      var webgl = this.engine.webgl;
      webgl.bindFramebuffer(webgl.FRAMEBUFFER, this.frameBuffer);
      webgl.enable(this.webgl.CULL_FACE);
      webgl.enable(this.webgl.DEPTH_TEST);
      webgl.clearColor(0, 0, 0, 0);
      webgl.clear(webgl.COLOR_BUFFER_BIT | webgl.DEPTH_BUFFER_BIT);
      webgl.viewport(0, 0, this.engine.width, this.engine.height);
      this.context.clearRect(0, 0, this.width, this.height);
      this.images.forEach(function (img) {
        if (!img.hidden) {
          if (img.el instanceof HTMLImageElement) {
            var image = img.el;

            _this.context.drawImage(image, img.x, img.y, img.width, img.height);
          }
        }
      });
      this.objects.forEach(function (object) {
        object.draw();
      });

      this._screen.setTexture(this._texture);

      webgl.bindFramebuffer(webgl.FRAMEBUFFER, null);
      webgl.clearColor(0, 0, 0, 0);
      webgl.clear(webgl.COLOR_BUFFER_BIT | webgl.DEPTH_BUFFER_BIT);
    }
  }, {
    key: "drawUI",
    value: function drawUI() {
      this._screen.draw();
    }
  }]);

  return UI;
}();

var Screen =
/*#__PURE__*/
function () {
  function Screen(engine) {
    UI_classCallCheck(this, Screen);

    UI_defineProperty(this, "webgl", void 0);

    UI_defineProperty(this, "engine", void 0);

    UI_defineProperty(this, "shaderProgram", void 0);

    UI_defineProperty(this, "vertexes", void 0);

    UI_defineProperty(this, "textureCoords", void 0);

    UI_defineProperty(this, "vertexesBuffer", void 0);

    UI_defineProperty(this, "coordsBuffer", void 0);

    UI_defineProperty(this, "normalBuffer", void 0);

    UI_defineProperty(this, "texture", void 0);

    this.webgl = engine.webgl;
    this.engine = engine;
    this.shaderProgram = engine.shaders.screen;
    this.webgl.enable(this.webgl.CULL_FACE);
    this.webgl.enable(this.webgl.DEPTH_TEST);
    this.vertexes = [-1, -1, -1, 1, 1, -1, -1, 1, -1, 1, 1, -1, -1, -1, -1, 1, -1, -1];
    this.textureCoords = [0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0];
    this.vertexesBuffer = this.webgl.createBuffer();
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.vertexesBuffer);
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webgl.STATIC_DRAW);
    this.coordsBuffer = this.webgl.createBuffer();
    this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.coordsBuffer);
    this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.textureCoords), this.webgl.STATIC_DRAW);
  }

  UI_createClass(Screen, [{
    key: "setTexture",
    value: function setTexture(texture) {
      this.texture = texture;
    }
  }, {
    key: "draw",
    value: function draw() {
      this.webgl.bindFramebuffer(this.webgl.FRAMEBUFFER, null);
      this.shaderProgram.use();
      this.engine.webgl.enableVertexAttribArray(this.shaderProgram.positionLocation);
      this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, this.vertexesBuffer);
      this.engine.webgl.vertexAttribPointer(this.shaderProgram.positionLocation, 3, this.engine.webgl.FLOAT, false, 0, 0);
      this.engine.webgl.enableVertexAttribArray(this.shaderProgram.texcoordLocation);
      this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, this.coordsBuffer);
      this.engine.webgl.vertexAttribPointer(this.shaderProgram.texcoordLocation, 2, this.engine.webgl.FLOAT, false, 0, 0);
      this.engine.webgl.uniform1i(this.shaderProgram.textureLocation, this.texture._textureBlockLocation);
      this.engine.webgl.drawArrays(this.engine.webgl.TRIANGLES, 0, this.vertexes.length / 3);
    }
  }]);

  return Screen;
}();

var uiHTMLElement =
/*#__PURE__*/
function () {
  function uiHTMLElement(name, el) {
    UI_classCallCheck(this, uiHTMLElement);

    UI_defineProperty(this, "name", void 0);

    UI_defineProperty(this, "el", void 0);

    UI_defineProperty(this, "hidden", false);

    this.name = name;
    this.el = el;
  }

  UI_createClass(uiHTMLElement, [{
    key: "hide",
    value: function hide() {
      this.el.style.display = "none";
      this.hidden = true;
    }
  }, {
    key: "show",
    value: function show() {
      this.el.style.display = "block";
      this.hidden = false;
    }
  }]);

  return uiHTMLElement;
}();
var uiHTMLImage =
/*#__PURE__*/
function (_uiHTMLElement) {
  UI_inherits(uiHTMLImage, _uiHTMLElement);

  function uiHTMLImage(name, el, x, y, width, height) {
    var _this2;

    UI_classCallCheck(this, uiHTMLImage);

    _this2 = UI_possibleConstructorReturn(this, UI_getPrototypeOf(uiHTMLImage).call(this, name, el));

    UI_defineProperty(UI_assertThisInitialized(_this2), "x", 0);

    UI_defineProperty(UI_assertThisInitialized(_this2), "y", 0);

    UI_defineProperty(UI_assertThisInitialized(_this2), "width", 0);

    UI_defineProperty(UI_assertThisInitialized(_this2), "height", 0);

    _this2.x = x;
    _this2.y = y;
    _this2.width = width;
    _this2.height = height;
    return _this2;
  }

  return uiHTMLImage;
}(uiHTMLElement);
/* harmony default export */ var ui_UI = (UI_UI);
// CONCATENATED MODULE: ./src/debug/Debugger.ts
function Debugger_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Debugger_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Debugger_createClass(Constructor, protoProps, staticProps) { if (protoProps) Debugger_defineProperties(Constructor.prototype, protoProps); if (staticProps) Debugger_defineProperties(Constructor, staticProps); return Constructor; }

function Debugger_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Debugger for engine. Only for development.
 * @param {Engine} engine 
 * @class
 * @constructor
 */
var Debugger =
/*#__PURE__*/
function () {
  function Debugger(engine) {
    Debugger_classCallCheck(this, Debugger);

    Debugger_defineProperty(this, "logArray", void 0);

    Debugger_defineProperty(this, "element", void 0);

    engine["debugger"] = this;
    this.logArray = [];
    this.element = null;
  }

  Debugger_createClass(Debugger, [{
    key: "setElement",
    value: function setElement(element) {
      this.element = element;
    }
  }, {
    key: "addLog",
    value: function addLog(view, output) {
      this.logArray.push({
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
/* harmony default export */ var debug_Debugger = ({
  Debugger: Debugger
});
// CONCATENATED MODULE: ./src/textures/CubeTexture.ts
function CubeTexture_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CubeTexture_typeof = function _typeof(obj) { return typeof obj; }; } else { CubeTexture_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CubeTexture_typeof(obj); }

function CubeTexture_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CubeTexture_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CubeTexture_createClass(Constructor, protoProps, staticProps) { if (protoProps) CubeTexture_defineProperties(Constructor.prototype, protoProps); if (staticProps) CubeTexture_defineProperties(Constructor, staticProps); return Constructor; }

function CubeTexture_possibleConstructorReturn(self, call) { if (call && (CubeTexture_typeof(call) === "object" || typeof call === "function")) { return call; } return CubeTexture_assertThisInitialized(self); }

function CubeTexture_getPrototypeOf(o) { CubeTexture_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CubeTexture_getPrototypeOf(o); }

function CubeTexture_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CubeTexture_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CubeTexture_setPrototypeOf(subClass, superClass); }

function CubeTexture_setPrototypeOf(o, p) { CubeTexture_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CubeTexture_setPrototypeOf(o, p); }

function CubeTexture_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * Cube texture.
 * @class
 */
var CubeTexture =
/*#__PURE__*/
function (_Texture) {
  CubeTexture_inherits(CubeTexture, _Texture);

  function CubeTexture(engine) {
    var _this;

    CubeTexture_classCallCheck(this, CubeTexture);

    _this = CubeTexture_possibleConstructorReturn(this, CubeTexture_getPrototypeOf(CubeTexture).call(this, engine));

    CubeTexture_defineProperty(CubeTexture_assertThisInitialized(_this), "textures", void 0);

    CubeTexture_defineProperty(CubeTexture_assertThisInitialized(_this), "_onTextureLoad", void 0);

    CubeTexture_defineProperty(CubeTexture_assertThisInitialized(_this), "webgl", void 0);

    CubeTexture_defineProperty(CubeTexture_assertThisInitialized(_this), "_loadedTextureCount", 0);

    _this.engine = engine;

    _this.engine.textures.push(CubeTexture_assertThisInitialized(_this));

    _this.webgl = engine.webgl;
    _this.textureBlockLocation = _this.engine.textures.length;
    _this.webglTexture = _this.engine.webgl.createTexture();

    _this.engine.webgl.activeTexture(_this.engine.webgl.TEXTURE0 + _this.textureBlockLocation);

    _this.engine.webgl.bindTexture(_this.engine.webgl.TEXTURE_2D, _this.webglTexture);

    _this.engine.webgl.texImage2D(_this.engine.webgl.TEXTURE_2D, 0, _this.engine.webgl.RGBA, 1, 1, 0, _this.engine.webgl.RGBA, _this.engine.webgl.UNSIGNED_BYTE, _this.color);
    /**
     * Execute every function in array when texture loaded.
     * @type {Function[]}
     */


    _this._onTextureLoad = [];
    _this.loaded = false;
    _this.textures = {
      positiveX: null,
      negativeX: null,
      positiveY: null,
      negativeY: null,
      positiveZ: null,
      negativeZ: null
    };
    _this._loadedTextureCount = 0;
    return _this;
  }
  /**
   * Load images from path or url.
   */


  CubeTexture_createClass(CubeTexture, [{
    key: "setImagesFromPath",
    value: function setImagesFromPath(positiveX, negativeX, positiveY, negativeY, positiveZ, negativeZ) {
      var _this2 = this;

      this.textures.positiveX = new Image();
      this.textures.positiveX.crossOrigin = '';

      this.textures.positiveX.onload = function () {
        _this2._loadedTextureCount++;

        if (_this2._loadedTextureCount == 6) {
          _this2.loaded = true;

          _this2._onTextureLoad.forEach(function (func) {
            func(_this2);
          });

          _this2.bindCubeTexture();
        }
      };

      this.textures.positiveX.src = positiveX;
      this.textures.negativeX = new Image();
      this.textures.negativeX.crossOrigin = '';
      this.textures.negativeX.src = negativeX;

      this.textures.negativeX.onload = function () {
        _this2._loadedTextureCount++;

        if (_this2._loadedTextureCount == 6) {
          _this2.loaded = true;

          _this2._onTextureLoad.forEach(function (func) {
            func(_this2);
          });

          _this2.bindCubeTexture();
        }
      };

      this.textures.positiveY = new Image();
      this.textures.positiveY.crossOrigin = '';
      this.textures.positiveY.src = positiveY;

      this.textures.positiveY.onload = function () {
        _this2._loadedTextureCount++;

        if (_this2._loadedTextureCount == 6) {
          _this2.loaded = true;

          _this2._onTextureLoad.forEach(function (func) {
            func(_this2);
          });

          _this2.bindCubeTexture();
        }
      };

      this.textures.negativeY = new Image();
      this.textures.negativeY.crossOrigin = '';
      this.textures.negativeY.src = negativeY;

      this.textures.negativeY.onload = function () {
        _this2._loadedTextureCount++;

        if (_this2._loadedTextureCount == 6) {
          _this2.loaded = true;

          _this2._onTextureLoad.forEach(function (func) {
            func(_this2);
          });

          _this2.bindCubeTexture();
        }
      };

      this.textures.positiveZ = new Image();
      this.textures.positiveZ.crossOrigin = '';
      this.textures.positiveZ.src = positiveZ;

      this.textures.positiveZ.onload = function () {
        _this2._loadedTextureCount++;

        if (_this2._loadedTextureCount == 6) {
          _this2.loaded = true;

          _this2._onTextureLoad.forEach(function (func) {
            func(_this2);
          });

          _this2.bindCubeTexture();
        }
      };

      this.textures.negativeZ = new Image();
      this.textures.negativeZ.crossOrigin = '';
      this.textures.negativeZ.src = negativeZ;

      this.textures.negativeZ.onload = function () {
        _this2._loadedTextureCount++;

        if (_this2._loadedTextureCount == 6) {
          _this2.loaded = true;

          _this2._onTextureLoad.forEach(function (func) {
            func(_this2);
          });

          _this2.bindCubeTexture();
        }
      };
    }
    /**
     * Sets images that have src, but not loaded.
     */

  }, {
    key: "setLoadingImages",
    value: function setLoadingImages(positiveX, negativeX, positiveY, negativeY, positiveZ, negativeZ) {
      var _this3 = this;

      for (var i = 0; i < arguments.length - 1; i++) {
        if (arguments[i].width != arguments[i].height || arguments[i].height != arguments[i + 1].height || arguments[i + 1].width != arguments[i + 1].height) {
          throw 'Sizes of textures not are the same or texture isnt square.';
        }
      }

      this.textures.positiveX = this.engine.noTexture.webglTexture;
      positiveX.addEventListener('load', function () {
        _this3.textures.positiveX = positiveX;
        _this3._loadedTextureCount++;

        if (_this3._loadedTextureCount == 6) {
          _this3.loaded = true;

          _this3._onTextureLoad.forEach(function (func) {
            func(_this3);
          });

          _this3.bindCubeTexture();
        }
      });
      this.textures.negativeX = this.engine.noTexture.webglTexture;
      negativeX.addEventListener('load', function () {
        _this3.textures.negativeX = negativeX;
        _this3._loadedTextureCount++;

        if (_this3._loadedTextureCount == 6) {
          _this3.loaded = true;

          _this3._onTextureLoad.forEach(function (func) {
            func(_this3);
          });

          _this3.bindCubeTexture();
        }
      });
      this.textures.positiveY = this.engine.noTexture.webglTexture;
      positiveY.addEventListener('load', function () {
        _this3.textures.positiveY = positiveY;
        _this3._loadedTextureCount++;

        if (_this3._loadedTextureCount == 6) {
          _this3.loaded = true;

          _this3._onTextureLoad.forEach(function (func) {
            func(_this3);
          });

          _this3.bindCubeTexture();
        }
      });
      this.textures.negativeY = this.engine.noTexture.webglTexture;
      negativeY.addEventListener('load', function () {
        _this3.textures.negativeY = negativeY;
        _this3._loadedTextureCount++;

        if (_this3._loadedTextureCount == 6) {
          _this3.loaded = true;

          _this3._onTextureLoad.forEach(function (func) {
            func(_this3);
          });

          _this3.bindCubeTexture();
        }
      });
      this.textures.positiveZ = this.engine.noTexture.webglTexture;
      positiveZ.addEventListener('load', function () {
        _this3.textures.positiveZ = positiveZ;
        _this3._loadedTextureCount++;

        if (_this3._loadedTextureCount == 6) {
          _this3.loaded = true;

          _this3._onTextureLoad.forEach(function (func) {
            func(_this3);
          });

          _this3.bindCubeTexture();
        }
      });
      this.textures.negativeZ = this.engine.noTexture.webglTexture;
      negativeZ.addEventListener('load', function () {
        _this3.textures.negativeZ = negativeZ;
        _this3._loadedTextureCount++;

        if (_this3._loadedTextureCount == 6) {
          _this3.loaded = true;

          _this3._onTextureLoad.forEach(function (func) {
            func(_this3);
          });

          _this3.bindCubeTexture();
        }
      });
    }
    /**
     * Sets images that loaded.
     */

  }, {
    key: "setLoadedImages",
    value: function setLoadedImages(positiveX, negativeX, positiveY, negativeY, positiveZ, negativeZ) {
      this.textures.positiveX = positiveX;
      this.textures.negativeX = negativeX;
      this.textures.positiveY = positiveY;
      this.textures.negativeY = negativeY;
      this.textures.positiveZ = positiveZ;
      this.textures.negativeZ = negativeZ;
      this.loaded = true;
      this.bindCubeTexture();
    }
    /**
     * Set skybox from path
     * @param {string} texture 
     */

  }, {
    key: "setSkybox",
    value: function setSkybox(path) {
      var _this4 = this;

      var texture = new Image();
      texture.crossOrigin = '';
      texture.src = path;

      texture.onload = function () {
        var w = texture.width;
        var h = texture.height;
        var size;

        if (h / 3 == w / 4) {
          size = h / 3;
        } else {
          throw 'Wrong sizes for texture. Texture must be Skyblock 3x4 squares.';
        }

        var canvas = document.createElement('canvas');
        canvas.height = size;
        canvas.width = size;
        var context = canvas.getContext('2d');
        context.drawImage(texture, 0, size, size, size, 0, 0, size, size);
        _this4.textures.negativeX = canvas;
        canvas = document.createElement('canvas');
        canvas.height = size;
        canvas.width = size;
        context = canvas.getContext('2d');
        context.drawImage(texture, size * 2, size, size, size, 0, 0, size, size);
        _this4.textures.positiveX = canvas;
        canvas = document.createElement('canvas');
        canvas.height = size;
        canvas.width = size;
        context = canvas.getContext('2d');
        context.drawImage(texture, size, size, size, size, 0, 0, size, size);
        _this4.textures.positiveZ = canvas;
        canvas = document.createElement('canvas');
        canvas.height = size;
        canvas.width = size;
        context = canvas.getContext('2d');
        context.drawImage(texture, size * 3, size, size, size, 0, 0, size, size);
        _this4.textures.negativeZ = canvas;
        canvas = document.createElement('canvas');
        canvas.height = size;
        canvas.width = size;
        context = canvas.getContext('2d');
        context.drawImage(texture, size, 0, size, size, 0, 0, size, size);
        _this4.textures.positiveY = canvas;
        canvas = document.createElement('canvas');
        canvas.height = size;
        canvas.width = size;
        context = canvas.getContext('2d');
        context.drawImage(texture, size, size * 2, size, size, 0, 0, size, size);
        _this4.textures.negativeY = canvas;
        _this4.loaded = true;

        _this4._onTextureLoad.forEach(function (func) {
          func(_this4);
        });

        _this4.bindCubeTexture();
      };
    }
  }, {
    key: "bindCubeTexture",
    value: function bindCubeTexture() {
      this.engine.webgl.activeTexture(this.engine.webgl.TEXTURE0 + this.textureBlockLocation);
      this.webglTexture = this.webgl.createTexture();
      this.webgl.bindTexture(this.webgl.TEXTURE_CUBE_MAP, this.webglTexture);
      this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.positiveX);
      this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.negativeX);
      this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.positiveY);
      this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.negativeY);
      this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.positiveZ);
      this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.negativeZ);
      this.webgl.generateMipmap(this.webgl.TEXTURE_CUBE_MAP);
      this.webgl.texParameteri(this.webgl.TEXTURE_CUBE_MAP, this.webgl.TEXTURE_MIN_FILTER, this.webgl.LINEAR_MIPMAP_LINEAR);
      this.engine.textureLoaded(this);
      this.loaded = true;
    }
  }]);

  return CubeTexture;
}(Texture_Texture);
/* harmony default export */ var textures_CubeTexture = (CubeTexture);
// CONCATENATED MODULE: ./src/textures/ReflectionTexture.ts
function ReflectionTexture_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ReflectionTexture_typeof = function _typeof(obj) { return typeof obj; }; } else { ReflectionTexture_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ReflectionTexture_typeof(obj); }

function ReflectionTexture_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ReflectionTexture_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ReflectionTexture_createClass(Constructor, protoProps, staticProps) { if (protoProps) ReflectionTexture_defineProperties(Constructor.prototype, protoProps); if (staticProps) ReflectionTexture_defineProperties(Constructor, staticProps); return Constructor; }

function ReflectionTexture_possibleConstructorReturn(self, call) { if (call && (ReflectionTexture_typeof(call) === "object" || typeof call === "function")) { return call; } return ReflectionTexture_assertThisInitialized(self); }

function ReflectionTexture_getPrototypeOf(o) { ReflectionTexture_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ReflectionTexture_getPrototypeOf(o); }

function ReflectionTexture_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ReflectionTexture_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ReflectionTexture_setPrototypeOf(subClass, superClass); }

function ReflectionTexture_setPrototypeOf(o, p) { ReflectionTexture_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ReflectionTexture_setPrototypeOf(o, p); }

function ReflectionTexture_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var anotherTextures = [];
var loadedReflectionCount = 0;
/**
 * Reflection texture.
 */

var ReflectionTexture_ReflectionTexture =
/*#__PURE__*/
function (_CubeTexture) {
  ReflectionTexture_inherits(ReflectionTexture, _CubeTexture);

  function ReflectionTexture(engine, background, quality, reflectionAlpha) {
    var _this;

    ReflectionTexture_classCallCheck(this, ReflectionTexture);

    _this = ReflectionTexture_possibleConstructorReturn(this, ReflectionTexture_getPrototypeOf(ReflectionTexture).call(this, engine));

    ReflectionTexture_defineProperty(ReflectionTexture_assertThisInitialized(_this), "_background", void 0);

    ReflectionTexture_defineProperty(ReflectionTexture_assertThisInitialized(_this), "_quality", void 0);

    ReflectionTexture_defineProperty(ReflectionTexture_assertThisInitialized(_this), "_reflectionAlpha", -1);

    ReflectionTexture_defineProperty(ReflectionTexture_assertThisInitialized(_this), "_object", void 0);

    ReflectionTexture_defineProperty(ReflectionTexture_assertThisInitialized(_this), "_camera", void 0);

    anotherTextures.push(ReflectionTexture_assertThisInitialized(_this));
    engine.reflections = true;
    _this.alpha = true;
    _this.loaded = false;
    _this._background = background || 'rgba(0, 0, 0, 0)';
    _this._quality = quality || 512;
    _this._object = null;
    var texture = document.createElement('canvas');
    var context = texture.getContext('2d');
    texture.width = 16;
    texture.height = 16;

    if (typeof background === 'string') {
      if (!reflectionAlpha) {
        var _reflectionAlpha = background.replace('rgba(', '');

        _reflectionAlpha = _reflectionAlpha.replace(')', '');
        _reflectionAlpha = _reflectionAlpha.split(',')[3];
        _this._reflectionAlpha = Number(_reflectionAlpha);
      } else {
        _this._reflectionAlpha = Number(reflectionAlpha);
      }

      context.fillStyle = background;
      context.fillRect(0, 0, 16, 16);
    } else if (background.constructor === HTMLImageElement) {
      if (!reflectionAlpha) {
        _this._reflectionAlpha = 1;
      } else {
        _this._reflectionAlpha = Number(reflectionAlpha);
      }

      texture.width = Number(background.width);
      texture.height = Number(background.height);
      context.drawImage(background, 0, 0, background.width, background.height);
    }

    _this.webglTexture = _this.webgl.createTexture();

    _this.webgl.bindTexture(_this.webgl.TEXTURE_CUBE_MAP, _this.webglTexture);

    _this.webgl.texImage2D(_this.webgl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, _this.webgl.RGBA, _this.webgl.RGBA, _this.webgl.UNSIGNED_BYTE, texture);

    _this.webgl.texImage2D(_this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, _this.webgl.RGBA, _this.webgl.RGBA, _this.webgl.UNSIGNED_BYTE, texture);

    _this.webgl.texImage2D(_this.webgl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, _this.webgl.RGBA, _this.webgl.RGBA, _this.webgl.UNSIGNED_BYTE, texture);

    _this.webgl.texImage2D(_this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, _this.webgl.RGBA, _this.webgl.RGBA, _this.webgl.UNSIGNED_BYTE, texture);

    _this.webgl.texImage2D(_this.webgl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, _this.webgl.RGBA, _this.webgl.RGBA, _this.webgl.UNSIGNED_BYTE, texture);

    _this.webgl.texImage2D(_this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, _this.webgl.RGBA, _this.webgl.RGBA, _this.webgl.UNSIGNED_BYTE, texture);

    _this.webgl.generateMipmap(_this.webgl.TEXTURE_CUBE_MAP);

    _this.webgl.texParameteri(_this.webgl.TEXTURE_CUBE_MAP, _this.webgl.TEXTURE_MIN_FILTER, _this.webgl.LINEAR_MIPMAP_LINEAR);

    _this.engine.textureLoaded(ReflectionTexture_assertThisInitialized(_this));

    _this.engine.addOnResourcesLoadedListener(function () {
      if (_this.object != null) {
        setTimeout(function () {
          _this.generate();
        }, 1000);
      }
    });

    _this._camera = new Camera_Camera(_this.engine);
    _this._camera.fieldOfViewRad = _this.engine.camera.fieldOfViewRad;
    _this._camera.range = _this.engine.camera.range;
    return _this;
  }

  ReflectionTexture_createClass(ReflectionTexture, [{
    key: "generate",
    value: function generate() {
      this.object.updateMatrixes();
      this.object.update();
      this._camera.position = this.object.position.copy();

      if (!this.object.verticalAlign) {
        this._camera.position.move(0, -(this.object.size.current.max.y - this.object.size.current.min.y) / 2, 0);
      }

      this._camera.setRotation(0, 270, 0);

      var posXP = this.engine.captureFrame(this._camera, {
        background: this._background,
        width: this._quality,
        height: this._quality,
        imageAlpha: this._reflectionAlpha,
        noDrawObjects: [this.object]
      });

      this._camera.setRotation(0, 90, 0);

      var posXN = this.engine.captureFrame(this._camera, {
        background: this._background,
        width: this._quality,
        height: this._quality,
        imageAlpha: this._reflectionAlpha,
        noDrawObjects: [this.object]
      });

      this._camera.setRotation(-90, 0, 0);

      var posYP = this.engine.captureFrame(this._camera, {
        background: this._background,
        width: this._quality,
        height: this._quality,
        imageAlpha: this._reflectionAlpha,
        noDrawObjects: [this.object]
      });

      this._camera.setRotation(90, 0, 0);

      var posYN = this.engine.captureFrame(this._camera, {
        background: this._background,
        width: this._quality,
        height: this._quality,
        imageAlpha: this._reflectionAlpha,
        noDrawObjects: [this.object]
      });

      this._camera.setRotation(0, 0, 0);

      var posZP = this.engine.captureFrame(this._camera, {
        background: this._background,
        width: this._quality,
        height: this._quality,
        imageAlpha: this._reflectionAlpha,
        noDrawObjects: [this.object]
      });

      this._camera.setRotation(0, 180, 0);

      var posZN = this.engine.captureFrame(this._camera, {
        background: this._background,
        width: this._quality,
        height: this._quality,
        imageAlpha: this._reflectionAlpha,
        noDrawObjects: [this.object]
      });
      this.setLoadedImages(posXP, posXN, posYN, posYP, posZP, posZN);
      loadedReflectionCount++;

      if (anotherTextures.length == loadedReflectionCount) {
        for (var i = 0; i < anotherTextures.length; i++) {
          anotherTextures[i].generate();
        }

        this.engine.appendCanvas();
        this.engine.status = 'Drawing';
      }
    }
  }, {
    key: "bindCubeTexture",
    value: function bindCubeTexture() {
      this.engine.webgl.activeTexture(this.engine.webgl.TEXTURE0 + this.textureBlockLocation);
      this.webglTexture = this.webgl.createTexture();
      this.webgl.bindTexture(this.webgl.TEXTURE_CUBE_MAP, this.webglTexture);
      this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.positiveX);
      this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.negativeX);
      this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.positiveY);
      this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.negativeY);
      this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.positiveZ);
      this.webgl.texImage2D(this.webgl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, this.webgl.RGBA, this.webgl.RGBA, this.webgl.UNSIGNED_BYTE, this.textures.negativeZ);
      this.webgl.generateMipmap(this.webgl.TEXTURE_CUBE_MAP);
      this.webgl.texParameteri(this.webgl.TEXTURE_CUBE_MAP, this.webgl.TEXTURE_MIN_FILTER, this.webgl.LINEAR_MIPMAP_LINEAR);
      this.loaded = true;
    }
  }, {
    key: "object",
    get: function get() {
      return this._object;
    },
    set: function set(object) {
      object.updateMatrixes();
      object.update();
      this._object = object;

      if (this.engine.resourcesLoaded) {
        this.generate();
      }
    }
  }]);

  return ReflectionTexture;
}(CubeTexture);
/* harmony default export */ var textures_ReflectionTexture = (ReflectionTexture_ReflectionTexture);
// CONCATENATED MODULE: ./src/objects/Object.ts
function Object_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Object_typeof = function _typeof(obj) { return typeof obj; }; } else { Object_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Object_typeof(obj); }

function Object_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Object_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Object_createClass(Constructor, protoProps, staticProps) { if (protoProps) Object_defineProperties(Constructor.prototype, protoProps); if (staticProps) Object_defineProperties(Constructor, staticProps); return Constructor; }

function Object_possibleConstructorReturn(self, call) { if (call && (Object_typeof(call) === "object" || typeof call === "function")) { return call; } return Object_assertThisInitialized(self); }

function Object_getPrototypeOf(o) { Object_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Object_getPrototypeOf(o); }

function Object_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Object_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Object_setPrototypeOf(subClass, superClass); }

function Object_setPrototypeOf(o, p) { Object_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Object_setPrototypeOf(o, p); }

function Object_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var _Object =
/*#__PURE__*/
function (_Entity) {
  Object_inherits(_Object, _Entity);

  function _Object(engine) {
    var _this;

    Object_classCallCheck(this, _Object);

    _this = Object_possibleConstructorReturn(this, Object_getPrototypeOf(_Object).call(this, engine));

    Object_defineProperty(Object_assertThisInitialized(_this), "_drawingMode", void 0);

    _this._drawingMode = _this.webgl.TRIANGLES;
    _this.hidden = true;
    _this.name = "Just object :)";
    return _this;
  }
  /**
   * Sets how WebGL will draw object
   * @param {String} mode
   */


  Object_createClass(_Object, [{
    key: "setDrawingMode",
    value: function setDrawingMode(mode) {
      switch (mode) {
        case "TRIANGLES":
          this._drawingMode = this.webgl.TRIANGLES;
          break;

        case "DEFAULT":
          this._drawingMode = this.webgl.TRIANGLES;
          break;

        case "TRIANGLE_FAN":
          this._drawingMode = this.webgl.TRIANGLE_FAN;
          break;

        case "FAN":
          this._drawingMode = this.webgl.TRIANGLE_FAN;
          break;

        case "STRIP":
          this.webgl.TRIANGLE_STRIP;
          break;

        case "TRIANGLE_STRIP":
          this.webgl.TRIANGLE_STRIP;
          break;

        default:
          throw Error("Wrong drawing mode. See WebGL drawing mods.");
      }
    }
  }, {
    key: "compile",

    /**
     * Function to compile object from text of .obj file.
     * @param {String} fileText
     * @public
     */
    value: function compile(fileText) {
      var _this2 = this;

      var vertexes = [];
      var textureCoords = [];
      var normals = [];
      var splitted = fileText.split("\n");
      var collisionBox = {
        x: [0, 0],
        y: [0, 0],
        z: [0, 0]
      };
      splitted.forEach(function (element) {
        var values = element.split(" ");
        var name = 0;

        for (var i = values.length; i--;) {
          if (values[i] == "" || values[i] == "\r") values.splice(i, 1);
        }

        if (values[name] == "v") {
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
        } else if (values[name] == "vn") {
          normals.push([Number(values[1]), parseFloat(values[2]), parseFloat(values[3])]);
        } else if (values[name] == "vt") {
          textureCoords.push([parseFloat(values[1]), parseFloat(values[2])]);
        } else if (values[name] == "f") {
          // Transform 4 > faces to triangles
          var faces = [values[1], values[2], values[3]];

          if (values.length - 1 > 3) {
            for (var _i = 4; _i < values.length; _i++) {
              faces.push(values[_i - 3]);
              faces.push(values[_i - 1]);
              faces.push(values[_i]);
            }
          }

          for (var _i2 = 0; _i2 < faces.length; _i2++) {
            var point = faces[_i2];
            var indexes = point.split("/").map(function (el) {
              return Number(el);
            });
            var vertexPosition = indexes[0];
            if (vertexPosition <= 0) vertexPosition = vertexes.length + vertexPosition + 1;
            var textureCoordinatePosition = indexes[1];
            if (textureCoordinatePosition < 0) textureCoordinatePosition = textureCoords.length + textureCoordinatePosition + 1;
            var normalPosition = indexes[2];
            if (normalPosition < 0) normalPosition = normals.length + normalPosition + 1;
            vertexes[vertexPosition - 1].forEach(function (coordinate) {
              _this2.vertexes.push(coordinate);
            });

            if (textureCoordinatePosition != 0 && textureCoords[textureCoordinatePosition - 1] != undefined) {
              textureCoords[textureCoordinatePosition - 1].forEach(function (textureCoordinate) {
                _this2.textureCoordinates.push(textureCoordinate);
              });
            } else {
              _this2.textureCoordinates.push(1);

              _this2.textureCoordinates.push(1);
            }

            if (indexes[2] != undefined) {
              normals[normalPosition - 1].forEach(function (normal) {
                _this2.normals.push(normal);
              });
            } else {
              _this2.normals.push(1, 1, 1);
            }
          }
        }
      });
      this.vertexesBuffer = this.webgl.createBuffer();
      this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.vertexesBuffer);
      this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webgl.STATIC_DRAW);
      this.textureCoordinatesBuffer = this.webgl.createBuffer();
      this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.textureCoordinatesBuffer);
      this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.textureCoordinates), this.webgl.STATIC_DRAW);
      this.normalsBuffer = this.webgl.createBuffer();
      this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.normalsBuffer);
      this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.normals), this.webgl.STATIC_DRAW);
      this.maxBaseSize.set(collisionBox.x[0], collisionBox.y[0], collisionBox.z[0]);
      this.minBaseSize.set(collisionBox.x[1], collisionBox.y[1], collisionBox.z[1]);
      this.maxSize.set(collisionBox.x[0], collisionBox.y[0], collisionBox.z[0]);
      this.minSize.set(collisionBox.x[1], collisionBox.y[1], collisionBox.z[1]);
      this.maxSize.scale(this.scaling.x, this.scaling.y, this.scaling.z);
      this.minSize.scale(this.scaling.x, this.scaling.y, this.scaling.z);
      this.collisionBox.maxPoint = this.maxBaseSize;
      this.collisionBox.minPoint = this.minBaseSize;
      this.engine.objectLoaded(this);
      this.hidden = false;
    }
  }, {
    key: "onload",
    value: function onload() {}
    /**
     * Async load object using ajax and compile on load.
     * @param {String} path
     * @public
     */

  }, {
    key: "loadFromObj",
    value: function loadFromObj(path) {
      var self = this;
      var objectsLoader = new XMLHttpRequest();
      objectsLoader.open("GET", path);

      objectsLoader.onreadystatechange = function () {
        if (objectsLoader.readyState == 4) {
          self.compile(objectsLoader.responseText);
          self.onload();
        }
      };

      objectsLoader.send();
    }
  }, {
    key: "useMaterial",
    value: function useMaterial(material) {
      var _this3 = this;

      material.defaultDraw = this.draw;
      material.object = this;

      this.draw = function () {
        material.drawObject(_this3);
      };
    }
  }, {
    key: "drawingMode",
    set: function set(value) {
      this._drawingMode = value;
    },
    get: function get() {
      return this._drawingMode;
    }
  }]);

  return _Object;
}(Entity_Entity);



// CONCATENATED MODULE: ./src/objects/Rect.ts
function Rect_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Rect_typeof = function _typeof(obj) { return typeof obj; }; } else { Rect_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Rect_typeof(obj); }

function Rect_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Rect_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Rect_createClass(Constructor, protoProps, staticProps) { if (protoProps) Rect_defineProperties(Constructor.prototype, protoProps); if (staticProps) Rect_defineProperties(Constructor, staticProps); return Constructor; }

function Rect_possibleConstructorReturn(self, call) { if (call && (Rect_typeof(call) === "object" || typeof call === "function")) { return call; } return Rect_assertThisInitialized(self); }

function Rect_getPrototypeOf(o) { Rect_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Rect_getPrototypeOf(o); }

function Rect_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Rect_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Rect_setPrototypeOf(subClass, superClass); }

function Rect_setPrototypeOf(o, p) { Rect_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Rect_setPrototypeOf(o, p); }

function Rect_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Rect =
/*#__PURE__*/
function (_Entity) {
  Rect_inherits(Rect, _Entity);

  function Rect(engine) {
    var _this;

    Rect_classCallCheck(this, Rect);

    _this = Rect_possibleConstructorReturn(this, Rect_getPrototypeOf(Rect).call(this, engine));

    Rect_defineProperty(Rect_assertThisInitialized(_this), "width", 100);

    Rect_defineProperty(Rect_assertThisInitialized(_this), "height", 100);

    Rect_defineProperty(Rect_assertThisInitialized(_this), "name", "Just a rect :)");

    _this.vertexes = [0, 0, 0, 100, 100, 0, 0, 100, 0, 100, 100, 0, 0, 0, 0, 100, 0, 0];
    _this.textureCoordinates = [0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1];
    _this.normals = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1];
    _this.shaderProgram = _this.engine.shaders["default"];
    _this.vertexesBuffer = _this.webgl.createBuffer();

    _this.webgl.bindBuffer(_this.webgl.ARRAY_BUFFER, _this.vertexesBuffer);

    _this.webgl.bufferData(_this.webgl.ARRAY_BUFFER, new Float32Array(_this.vertexes), _this.webgl.STATIC_DRAW);

    _this.textureCoordinatesBuffer = _this.webgl.createBuffer();

    _this.webgl.bindBuffer(_this.webgl.ARRAY_BUFFER, _this.textureCoordinatesBuffer);

    _this.webgl.bufferData(_this.webgl.ARRAY_BUFFER, new Float32Array(_this.textureCoordinates), _this.webgl.STATIC_DRAW);

    _this.normalsBuffer = _this.webgl.createBuffer();

    _this.webgl.bindBuffer(_this.webgl.ARRAY_BUFFER, _this.normalsBuffer);

    _this.webgl.bufferData(_this.webgl.ARRAY_BUFFER, new Float32Array(_this.normals), _this.webgl.STATIC_DRAW);

    _this.collisionBox.maxPoint.set(100, 100, 0);

    _this.collisionBox.minPoint.set(0, 0, 0);

    _this.maxBaseSize.set(100, 100, 0);

    _this.maxSize = _this.maxBaseSize;

    _this.engine.objectLoaded(Rect_assertThisInitialized(_this));

    return _this;
  }
  /**
   * Scale object.
   * @param x
   * @param y
   */


  Rect_createClass(Rect, [{
    key: "scale",
    value: function scale(x, y) {
      this.scaling.set(x, y, 1);
      this.maxSize.set(this.maxBaseSize.x * x, this.maxBaseSize.y * y, 0);
      this.minSize.set(this.minBaseSize.x * x, this.minBaseSize.y * y, 0);

      if (this.rotationPointPos == "center") {
        this.rotationPoint.set(this.minSize.x + (this.maxSize.x - this.minSize.x) / 2, this.minSize.y + (this.maxSize.y - this.minSize.y) / 2, this.minSize.z + (this.maxSize.z - this.minSize.z) / 2);
      }
    }
    /**
     * Changing size of rect.
     * @param width
     * @param height
     * @public
     */

  }, {
    key: "setSize",
    value: function setSize(width, height) {
      this.width = width;
      this.height = height;
      this.scale(this.width / 100, this.height / 100);
    }
    /**
     * Sets size for one cell in pixels
     * @param width
     * @param height
     */

  }, {
    key: "setCellSize",
    value: function setCellSize(width, height) {
      this.setTextureRepeating(this.width / width, this.height / height);
    }
    /**
     * Repeats texture on rect.
     * @param x count for x
     * @param y count for y
     * @default {x:1,y:1}
     */

  }, {
    key: "setTextureRepeating",
    value: function setTextureRepeating(x, y) {
      this.textureCoordinates = [0, y, x, 0, 0, 0, x, 0, 0, y, x, y];
      this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.textureCoordinatesBuffer);
      this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.textureCoordinates), this.webgl.STATIC_DRAW);
    }
  }]);

  return Rect;
}(Entity_Entity);
/* harmony default export */ var objects_Rect = (Rect);
// CONCATENATED MODULE: ./src/objects/Skybox.ts
function Skybox_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Skybox_typeof = function _typeof(obj) { return typeof obj; }; } else { Skybox_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Skybox_typeof(obj); }

function Skybox_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Skybox_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Skybox_createClass(Constructor, protoProps, staticProps) { if (protoProps) Skybox_defineProperties(Constructor.prototype, protoProps); if (staticProps) Skybox_defineProperties(Constructor, staticProps); return Constructor; }

function Skybox_possibleConstructorReturn(self, call) { if (call && (Skybox_typeof(call) === "object" || typeof call === "function")) { return call; } return Skybox_assertThisInitialized(self); }

function Skybox_getPrototypeOf(o) { Skybox_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Skybox_getPrototypeOf(o); }

function Skybox_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Skybox_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Skybox_setPrototypeOf(subClass, superClass); }

function Skybox_setPrototypeOf(o, p) { Skybox_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Skybox_setPrototypeOf(o, p); }




var Skybox_Skybox =
/*#__PURE__*/
function (_Entity) {
  Skybox_inherits(Skybox, _Entity);

  function Skybox(engine) {
    var _this;

    Skybox_classCallCheck(this, Skybox);

    _this = Skybox_possibleConstructorReturn(this, Skybox_getPrototypeOf(Skybox).call(this, engine));
    _this.name = 'Just skybox :)';
    _this.webgl = engine.webgl;
    _this.vertexes = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1];
    _this.shaderProgram = engine.shaders.skybox;
    _this.texture = engine.noTexture;
    _this.vertexesBuffer = _this.webgl.createBuffer();

    _this.webgl.bindBuffer(_this.webgl.ARRAY_BUFFER, _this.vertexesBuffer);

    _this.webgl.bufferData(_this.webgl.ARRAY_BUFFER, new Float32Array(_this.vertexes), _this.webgl.STATIC_DRAW);

    _this.engine.objectLoaded(Skybox_assertThisInitialized(_this));
    /**
     * Skybox rotation. Angles in radians. Maybe you need setRotation() or rotate() methods? It'd be more convenient to use.
     * @type {Number[]}
     */


    return _this;
  }

  Skybox_createClass(Skybox, [{
    key: "updateMatrixes",
    value: function updateMatrixes() {
      var temp = perspective(this.engine.camera.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.engine.camera.range);
      var cameraM = this.engine.camera.inverseRotationMatrix;
      temp = Matrixes4_multiply(temp, cameraM);
      temp = Matrixes4_multiply(temp, Matrixes4_rotation(this.rotation.x, this.rotation.y, this.rotation.z));
      this.matrix = inverse(temp);
    }
    /**
     * Updating camera matrix for drawing Skybox
     */

  }, {
    key: "update",
    value: function update() {}
    /**
     * Function draws skybox
     */

  }, {
    key: "draw",
    value: function draw() {
      if (this.shaderProgram) {
        this.shaderProgram.use();
        this.engine.webgl.enableVertexAttribArray(this.shaderProgram.positionLocation);
        this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, this.vertexesBuffer);
        this.engine.webgl.vertexAttribPointer(this.shaderProgram.positionLocation, 2, this.engine.webgl.FLOAT, false, 0, 0);
        this.engine.webgl.uniform1i(this.shaderProgram.textureLocation, this.texture.textureBlockLocation);
        this.engine.webgl.uniformMatrix4fv(this.shaderProgram.matrixLocation, false, this.matrix);
        this.engine.webgl.drawArrays(this.engine.webgl.TRIANGLES, 0, this.vertexes.length / 2);
        this.engine.shaders["default"].use();
      } else {
        new BronzeWarn('Shader program is not set.');
      }
    }
  }]);

  return Skybox;
}(objects_Entity);
// CONCATENATED MODULE: ./src/objects/Grid.ts
function Grid_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Grid_typeof = function _typeof(obj) { return typeof obj; }; } else { Grid_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Grid_typeof(obj); }

function Grid_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Grid_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Grid_createClass(Constructor, protoProps, staticProps) { if (protoProps) Grid_defineProperties(Constructor.prototype, protoProps); if (staticProps) Grid_defineProperties(Constructor, staticProps); return Constructor; }

function Grid_possibleConstructorReturn(self, call) { if (call && (Grid_typeof(call) === "object" || typeof call === "function")) { return call; } return Grid_assertThisInitialized(self); }

function Grid_getPrototypeOf(o) { Grid_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Grid_getPrototypeOf(o); }

function Grid_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Grid_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Grid_setPrototypeOf(subClass, superClass); }

function Grid_setPrototypeOf(o, p) { Grid_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Grid_setPrototypeOf(o, p); }

function Grid_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Rect for using custom shaders
 * @class
 * @constructor
 */
var Grid_Grid =
/*#__PURE__*/
function (_Rect) {
  Grid_inherits(Grid, _Rect);

  /**
   * Flat rectangle with square texture.
   * @param engine
   */
  function Grid(engine) {
    var _this;

    Grid_classCallCheck(this, Grid);

    _this = Grid_possibleConstructorReturn(this, Grid_getPrototypeOf(Grid).call(this, engine));

    Grid_defineProperty(Grid_assertThisInitialized(_this), "cellSize", void 0);

    Grid_defineProperty(Grid_assertThisInitialized(_this), "movingMatrix", []);

    _this.shaderProgram = _this.engine.shaders.grid;
    _this.cellSize = [1000, 1000];
    _this.name = "Just a gird :)";
    return _this;
  }

  Grid_createClass(Grid, [{
    key: "draw",
    value: function draw() {
      this.shaderProgram.use();
      this.engine.webgl.texParameteri(this.engine.webgl.TEXTURE_2D, this.engine.shaders.extensions.anisotropic.TEXTURE_MAX_ANISOTROPY_EXT, 16);
      this.engine.webgl.enableVertexAttribArray(this.shaderProgram.positionLocation);
      this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, this.vertexesBuffer);
      this.engine.webgl.vertexAttribPointer(this.shaderProgram.positionLocation, 3, this.engine.webgl.FLOAT, false, 0, 0);
      this.engine.webgl.enableVertexAttribArray(this.shaderProgram.texcoordLocation);
      this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, this.textureCoordinatesBuffer);
      this.engine.webgl.vertexAttribPointer(this.shaderProgram.texcoordLocation, 2, this.engine.webgl.FLOAT, false, 0, 0);
      this.engine.webgl.uniform1i(this.shaderProgram.textureLocation, this.texture.textureBlockLocation);
      this.engine.webgl.uniformMatrix4fv(this.shaderProgram.matrixLocation, false, this.matrix);
      this.engine.webgl.uniform2fv(this.shaderProgram.movingLocation, this.movingMatrix);
      this.engine.webgl.uniform2fv(this.shaderProgram.cellSizeLocation, this.cellSize);
      this.engine.webgl.drawArrays(this.engine.webgl.TRIANGLES, 0, this.vertexes.length / 3);
    }
    /**
     * Updated matrixes
     */

  }, {
    key: "updateMatrixes",
    value: function updateMatrixes() {
      var world = inverse(translation(this.rotationPoint.x, this.rotationPoint.y, this.rotationPoint.z));
      world = Matrixes4_multiply(world, translation(this.position.x, this.position.y, this.position.z));
      var rot = Matrixes4_rotation(this.rotation.x, this.rotation.y, this.rotation.z);
      world = Matrixes4_multiply(world, rot);
      world = Matrixes4_multiply(world, translation(this.rotationPoint.x, this.rotationPoint.y, this.rotationPoint.z));
      world = Matrixes4_multiply(world, translation(-this.minSize.x - (this.maxSize.x - this.minSize.x) / 2, -this.minSize.y - (this.maxSize.y - this.minSize.y) / 2, -this.minSize.z - (this.maxSize.z - this.minSize.z) / 2));
      world = Matrixes4_multiply(world, scaling(this.scaling.x, this.scaling.y, this.scaling.z));
      this.worldMatrix = world;
      this.rotationMatrix = rot;
    }
    /**
     * Updates object
     */

  }, {
    key: "update",
    value: function update() {
      var matrix = perspective(this.engine.camera.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.engine.camera.range);
      var cameraMatrix = unit();
      cameraMatrix = Matrixes4_multiply(cameraMatrix, translation(0, this.engine.camera.position.y, 0));
      cameraMatrix = Matrixes4_multiply(cameraMatrix, this.engine.camera.rotationMatrix);
      matrix = Matrixes4_multiply(matrix, inverse(cameraMatrix));
      matrix = Matrixes4_multiply(matrix, this.worldMatrix);
      this.movingMatrix = [this.engine.camera.position.x, this.engine.camera.position.z];
      this.matrix = matrix;
    }
    /**
     * Sets size for one cell in pixels
     * @param width
     * @param height
     */

  }, {
    key: "setCellSize",
    value: function setCellSize(width, height) {
      this.cellSize = [width, height];
      this.setTextureRepeating(this.width / width, this.height / height);
    }
    /**
     * Changing size of rect.
     * @param width
     * @param height
     */

  }, {
    key: "setSize",
    value: function setSize(width, height) {
      this.width = width;
      this.height = height;
      this.vertexes = [0, 0, 0, width, height, 0, 0, height, 0, width, height, 0, 0, 0, 0, width, 0, 0];
      this.maxSize.set(width, height, 0);
      this.minSize.set(0, 0, 0);
      this.setCellSize(this.cellSize[0], this.cellSize[1]);
      this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.vertexesBuffer);
      this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webgl.STATIC_DRAW);
    }
  }]);

  return Grid;
}(Rect);
/* harmony default export */ var objects_Grid = (Grid_Grid);
// CONCATENATED MODULE: ./src/lights/Light.ts
function Light_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Light_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Light_createClass(Constructor, protoProps, staticProps) { if (protoProps) Light_defineProperties(Constructor.prototype, protoProps); if (staticProps) Light_defineProperties(Constructor, staticProps); return Constructor; }

function Light_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var lightsCount = 0;
var Light_Light =
/*#__PURE__*/
function () {
  function Light(engine) {
    Light_classCallCheck(this, Light);

    Light_defineProperty(this, "engine", void 0);

    Light_defineProperty(this, "_position", new Vector3(0, 0, 0));

    Light_defineProperty(this, "_range", 2000);

    Light_defineProperty(this, "_color", new Uint8Array([255, 255, 255, 255]));

    Light_defineProperty(this, "_index", -1);

    Light_defineProperty(this, "_on", false);

    Light_defineProperty(this, "_positionsWritten", false);

    Light_defineProperty(this, "_rangeWritten", false);

    lightsCount++;

    if (lightsCount > 28) {
      throw new Error('There are can be only 28 lights. Sorry :(');
    }

    this.engine = engine;
    this._range = 2000;
    this._on = false;
  }
  /**
    Range of light
   */


  Light_createClass(Light, [{
    key: "setPosition",
    value: function setPosition(value, y, z) {
      if (value.constructor === Vector3) {
        this._position = value;
        return;
      } else if (value.constructor === Array) {
        this._position.set(value[0], value[1], value[2]);

        return;
      } else {
        this._position.set(value, y, z);

        if (this._on && !this._positionsWritten) {
          this.engine.lightsPositions.push(value);
          this.engine.lightsPositions.push(y);
          this.engine.lightsPositions.push(z);
          this._positionsWritten = true;
        } else if (this._on) {
          this.engine.lightsPositions[this._index * 3 + 0] = value;
          this.engine.lightsPositions[this._index * 3 + 1] = y;
          this.engine.lightsPositions[this._index * 3 + 2] = z;
        }
      }
    }
    /**
     * Move light
     * @param x 
     * @param y 
     * @param z 
     */

  }, {
    key: "move",
    value: function move(x, y, z) {
      this.position.move(x, y, z);
    }
    /**
     * Set range for light
     */

  }, {
    key: "setRange",
    value: function setRange(value) {
      this.range = value;
    }
    /**
     * Setting color of light
     * @param r red value from 0 to 255.
     * @param g green value from 0 to 255.
     * @param b blue value from 0 to 255.
     * @param a alpha value from 0 to 255.
     * @public
     */

  }, {
    key: "setColorRGBA",
    value: function setColorRGBA(r, g, b, a) {
      this._color = new Uint8Array([r, g, b, a]);
    }
    /**
     * Turn light on. Light will be drawn if turned on.
     */

  }, {
    key: "on",
    value: function on() {
      this._index = this.engine.lights.length;
      this._on = true;
      this.engine.lights.push(this);
      this.position = this._position;
      this.range = this._range;
    }
    /**
     * Turn off light. Remove this light from drawing process.
     */

  }, {
    key: "off",
    value: function off() {
      var index = this._index;
      this.engine.lights.splice(index, 1);
      this.engine.lightsPositions.splice(index * 3 + 0, 3);
      this.engine.lightsRanges.splice(index, 1);
      this._positionsWritten = false;
      this._rangeWritten = false;
    }
  }, {
    key: "range",
    set: function set(value) {
      this._range = value;

      if (this._on && !this._rangeWritten) {
        this.engine.lightsRanges.push(value);
        this._rangeWritten = true;
      } else if (this._on) {
        this.engine.lightsRanges[this._index] = value;
      }
    }
    /**
     * Range of light
     */
    ,
    get: function get() {
      return this._range;
    }
  }, {
    key: "position",
    set: function set(value) {
      this._position = value;

      if (this._on && !this._positionsWritten) {
        this.engine.lightsPositions.push(value.x);
        this.engine.lightsPositions.push(value.y);
        this.engine.lightsPositions.push(value.z);
        this._positionsWritten = true;
      } else if (this._on) {
        this.engine.lightsPositions[this._index * 3 + 0] = value.x;
        this.engine.lightsPositions[this._index * 3 + 1] = value.y;
        this.engine.lightsPositions[this._index * 3 + 2] = value.z;
      }
    },
    get: function get() {
      return this._position;
    }
    /**
     * Sets position for object. Using another vector.
     */

  }]);

  return Light;
}();
/* harmony default export */ var lights_Light = (Light_Light);
// CONCATENATED MODULE: ./src/materials/Material.ts
function Material_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Material_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Material_createClass(Constructor, protoProps, staticProps) { if (protoProps) Material_defineProperties(Constructor.prototype, protoProps); if (staticProps) Material_defineProperties(Constructor, staticProps); return Constructor; }

function Material_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var Material_Material =
/*#__PURE__*/
function () {
  function Material(engine, object) {
    Material_classCallCheck(this, Material);

    Material_defineProperty(this, "defaultDraw", null);

    Material_defineProperty(this, "engine", void 0);

    Material_defineProperty(this, "_object", void 0);

    Material_defineProperty(this, "webgl", void 0);

    Material_defineProperty(this, "shaderProgram", null);

    this.engine = engine;
    this._object = object || null;
    this.webgl = engine.webgl;
  }

  Material_createClass(Material, [{
    key: "setShaderProgram",

    /**
     * Adds shader for material.
     */
    value: function setShaderProgram(shaderProgram) {
      this.shaderProgram = shaderProgram;
    }
    /**
     * Draw object method for this material.
     *
     */

  }, {
    key: "drawObject",
    value: function drawObject(object) {
      throw new Error("Method not implemented.");
    }
  }, {
    key: "object",
    get: function get() {
      return this._object;
    },
    set: function set(v) {
      this._object = v;

      if (v != null && v.texture instanceof ReflectionTexture_ReflectionTexture) {
        v.texture.object = v;
        v.update();
        v.updateMatrixes();
      }
    }
  }]);

  return Material;
}();
/* harmony default export */ var materials_Material = (Material_Material);
// CONCATENATED MODULE: ./src/materials/Glass.ts
function Glass_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Glass_typeof = function _typeof(obj) { return typeof obj; }; } else { Glass_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Glass_typeof(obj); }

function Glass_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Glass_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Glass_createClass(Constructor, protoProps, staticProps) { if (protoProps) Glass_defineProperties(Constructor.prototype, protoProps); if (staticProps) Glass_defineProperties(Constructor, staticProps); return Constructor; }

function Glass_possibleConstructorReturn(self, call) { if (call && (Glass_typeof(call) === "object" || typeof call === "function")) { return call; } return Glass_assertThisInitialized(self); }

function Glass_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Glass_getPrototypeOf(o) { Glass_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Glass_getPrototypeOf(o); }

function Glass_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Glass_setPrototypeOf(subClass, superClass); }

function Glass_setPrototypeOf(o, p) { Glass_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Glass_setPrototypeOf(o, p); }



/**
 * Base class for materials which will attached to objects. 
 * @param {Engine} engine
 * @param {Object} [object]
 */
var Glass =
/*#__PURE__*/
function (_Material) {
  Glass_inherits(Glass, _Material);

  function Glass(engine, object) {
    var _this;

    Glass_classCallCheck(this, Glass);

    _this = Glass_possibleConstructorReturn(this, Glass_getPrototypeOf(Glass).call(this, engine, object));
    _this.shaderProgram = engine.shaders.reflection;
    return _this;
  }
  /**
   * Draws object using this material.
   * @param {Object} object 
   */


  Glass_createClass(Glass, [{
    key: "drawObject",
    value: function drawObject(object) {
      if (object.texture.loaded && object.loaded) {
        this.shaderProgram.use();
        this.webgl.uniformMatrix4fv(this.shaderProgram.cameraLocation, false, this.engine.camera.matrix);
        this.webgl.uniform3fv(this.shaderProgram.lightPositionsLocation, this.engine.lightsPositions);
        this.webgl.uniform1fv(this.shaderProgram.lightRangesLocation, this.engine.lightsRanges);
        this.webgl.uniform1i(this.shaderProgram.lightsCountLocation, this.engine.lights.length);
        this.webgl.uniform1f(this.shaderProgram.lightMinValueLocation, this.engine.globalLightMinValue);
        this.engine.webgl.enableVertexAttribArray(this.shaderProgram.positionLocation);
        this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, object.vertexesBuffer);
        this.engine.webgl.vertexAttribPointer(this.shaderProgram.positionLocation, 3, this.engine.webgl.FLOAT, false, 0, 0);
        this.engine.webgl.enableVertexAttribArray(this.shaderProgram.normalLocation);
        this.engine.webgl.bindBuffer(this.engine.webgl.ARRAY_BUFFER, object.normalsBuffer);
        this.engine.webgl.vertexAttribPointer(this.shaderProgram.normalLocation, 3, this.engine.webgl.FLOAT, false, 0, 0);
        this.engine.webgl.uniform1i(this.shaderProgram.textureLocation, object.texture.textureBlockLocation);
        this.engine.webgl.uniformMatrix4fv(this.shaderProgram.matrixLocation, false, object.matrix);
        this.engine.webgl.uniformMatrix4fv(this.shaderProgram.worldMatrixLocation, false, object.worldMatrix);
        this.engine.webgl.uniformMatrix4fv(this.shaderProgram.rotationMatrixLocation, false, object.rotationMatrix);
        this.engine.webgl.uniform3fv(this.shaderProgram.worldCameraPositionLocation, new Float32Array(this.engine.camera.position.toArray()));
        this.engine.webgl.drawArrays(this.engine.webgl.TRIANGLES, 0, object.vertexes.length / 3);
      }
    }
  }]);

  return Glass;
}(Material_Material);
/* harmony default export */ var materials_Glass = ({
  Glass: Glass
});
// CONCATENATED MODULE: ./src/sounds/Sound.ts
function Sound_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Sound_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Sound_createClass(Constructor, protoProps, staticProps) { if (protoProps) Sound_defineProperties(Constructor.prototype, protoProps); if (staticProps) Sound_defineProperties(Constructor, staticProps); return Constructor; }

function Sound_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Sound =
/*#__PURE__*/
function () {
  /**
   * Simple sound object.
   * @param  src
   */
  function Sound(src) {
    var _this = this;

    var audioCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
    var volume = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.1;

    Sound_classCallCheck(this, Sound);

    Sound_defineProperty(this, "playing", false);

    Sound_defineProperty(this, "audios", void 0);

    Sound_defineProperty(this, "_audioCount", void 0);

    Sound_defineProperty(this, "_playableAudioIndex", 0);

    Sound_defineProperty(this, "_delay", 100);

    Sound_defineProperty(this, "_canBePlayed", true);

    Sound_defineProperty(this, "_canBePlayedInterval", null);

    Sound_defineProperty(this, "_loopInterval", -1);

    Sound_defineProperty(this, "_volume", 0.1);

    this.audios = [];
    this._audioCount = audioCount;
    var sources;

    if (!(src instanceof Array)) {
      sources = [];

      for (var i = 0; i < audioCount; i++) {
        sources.push(src);
      }
    } else if (src instanceof Array) {
      sources = src;
    } else {
      return;
    }

    var argIndex = 0;

    for (var _i = 0; _i < this._audioCount; _i++) {
      this.audios.push(new Audio(sources[argIndex]));
      this.audios[_i].volume = volume;
      argIndex++;

      if (argIndex === src.length) {
        argIndex = 0;
      }
    }

    this._canBePlayed = true;
    this._canBePlayedInterval = Number(setInterval(function () {
      _this._canBePlayed = true;
    }, this._delay));
    this.playing = false;
  }

  Sound_createClass(Sound, [{
    key: "play",
    value: function play() {
      if (this._canBePlayed) {
        this.audios[this._playableAudioIndex].play();

        this._playableAudioIndex++;

        if (this._playableAudioIndex == this._audioCount) {
          this._playableAudioIndex = 0;
        }

        this._canBePlayed = false;
      }
    }
  }, {
    key: "playLoop",
    value: function playLoop() {
      var _this2 = this;

      clearInterval(this._loopInterval);
      this._loopInterval = Number(setInterval(function () {
        _this2.play();
      }, this._delay));
      this.playing = true;
    }
  }, {
    key: "playLoopRandom",
    value: function playLoopRandom() {
      var _this3 = this;

      clearInterval(this._loopInterval);
      this._loopInterval = Number(setInterval(function () {
        if (_this3._canBePlayed) {
          _this3.audios[_this3._playableAudioIndex].play();

          _this3._playableAudioIndex = Math.floor(Math.random() * _this3._audioCount);

          if (_this3._playableAudioIndex == _this3._audioCount) {
            _this3._playableAudioIndex = 0;
          }

          _this3._canBePlayed = false;
        }
      }, this._delay));
      this.playing = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this._loopInterval);
      this._canBePlayed = false;
      this.playing = false;

      for (var i = 0; i < this.audios.length; i++) {
        var audio = this.audios[i];
        audio.pause();
        audio.currentTime = 0;
      }
    }
  }, {
    key: "volume",
    set: function set(v) {
      for (var i = 0; i < this._audioCount; i++) {
        this.audios[i].volume = v;
      }
    },
    get: function get() {
      return this._volume;
    }
  }, {
    key: "delay",
    set: function set(value) {
      var _this4 = this;

      this._delay = value;
      clearInterval(this._canBePlayedInterval);
      this._canBePlayedInterval = Number(setInterval(function () {
        _this4._canBePlayed = true;
      }, this._delay));
    },
    get: function get() {
      return this._delay;
    }
  }]);

  return Sound;
}();
/* harmony default export */ var sounds_Sound = (Sound);
// CONCATENATED MODULE: ./src/Bronze.ts
/* concated harmony reexport Engine */__webpack_require__.d(__webpack_exports__, "Engine", function() { return Engine_Engine; });
/* concated harmony reexport Camera */__webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera_Camera; });
/* concated harmony reexport Controls */__webpack_require__.d(__webpack_exports__, "Controls", function() { return Controls_Controls; });
/* concated harmony reexport UI */__webpack_require__.d(__webpack_exports__, "UI", function() { return UI_UI; });
/* concated harmony reexport Debugger */__webpack_require__.d(__webpack_exports__, "Debugger", function() { return Debugger; });
/* concated harmony reexport Texture */__webpack_require__.d(__webpack_exports__, "Texture", function() { return Texture_Texture; });
/* concated harmony reexport ColorTexture */__webpack_require__.d(__webpack_exports__, "ColorTexture", function() { return ColorTexture; });
/* concated harmony reexport SimpleTexture */__webpack_require__.d(__webpack_exports__, "SimpleTexture", function() { return SimpleTexture_SimpleTexture; });
/* concated harmony reexport CubeTexture */__webpack_require__.d(__webpack_exports__, "CubeTexture", function() { return CubeTexture; });
/* concated harmony reexport ReflectionTexture */__webpack_require__.d(__webpack_exports__, "ReflectionTexture", function() { return ReflectionTexture_ReflectionTexture; });
/* concated harmony reexport Entity */__webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity_Entity; });
/* concated harmony reexport CollisionBox */__webpack_require__.d(__webpack_exports__, "CollisionBox", function() { return Entity_CollisionBox; });
/* concated harmony reexport Object */__webpack_require__.d(__webpack_exports__, "Object", function() { return _Object; });
/* concated harmony reexport Rect */__webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* concated harmony reexport Skybox */__webpack_require__.d(__webpack_exports__, "Skybox", function() { return Skybox_Skybox; });
/* concated harmony reexport Grid */__webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid_Grid; });
/* concated harmony reexport Light */__webpack_require__.d(__webpack_exports__, "Light", function() { return Light_Light; });
/* concated harmony reexport Material */__webpack_require__.d(__webpack_exports__, "Material", function() { return Material_Material; });
/* concated harmony reexport Glass */__webpack_require__.d(__webpack_exports__, "Glass", function() { return Glass; });
/* concated harmony reexport Sound */__webpack_require__.d(__webpack_exports__, "Sound", function() { return Sound; });
/* concated harmony reexport Mathematics */__webpack_require__.d(__webpack_exports__, "Mathematics", function() { return Mathematics_namespaceObject; });
/* concated harmony reexport Vector3 */__webpack_require__.d(__webpack_exports__, "Vector3", function() { return Vector3_namespaceObject; });
/* concated harmony reexport Matrixes4 */__webpack_require__.d(__webpack_exports__, "Matrixes4", function() { return Matrixes4_namespaceObject; });
/* concated harmony reexport Vector2 */__webpack_require__.d(__webpack_exports__, "Vector2", function() { return Vector2_namespaceObject; });

























/***/ })
/******/ ]);
});