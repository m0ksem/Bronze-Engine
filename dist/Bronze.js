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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(13);

var assertThisInitialized = __webpack_require__(2);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(9);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(5);

var setPrototypeOf = __webpack_require__(9);

var isNativeFunction = __webpack_require__(14);

var construct = __webpack_require__(15);

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(0);

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(9);

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Mathematics_namespaceObject = {};
__webpack_require__.r(Mathematics_namespaceObject);
__webpack_require__.d(Mathematics_namespaceObject, "radToDeg", function() { return radToDeg; });
__webpack_require__.d(Mathematics_namespaceObject, "degToRad", function() { return degToRad; });
__webpack_require__.d(Mathematics_namespaceObject, "dropCircle", function() { return dropCircle; });
__webpack_require__.d(Mathematics_namespaceObject, "dropCircleRad", function() { return dropCircleRad; });
__webpack_require__.d(Mathematics_namespaceObject, "isPowerOf2", function() { return isPowerOf2; });
__webpack_require__.d(Mathematics_namespaceObject, "default", function() { return Mathematics; });
var Vector3_namespaceObject = {};
__webpack_require__.r(Vector3_namespaceObject);
__webpack_require__.d(Vector3_namespaceObject, "Vector3", function() { return Vector3_Vector3; });
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
__webpack_require__.d(Vector2_namespaceObject, "Vector2", function() { return Vector2_Vector2; });
__webpack_require__.d(Vector2_namespaceObject, "normalize", function() { return Vector2_normalize; });
__webpack_require__.d(Vector2_namespaceObject, "vec2Multiply", function() { return vec2Multiply; });
__webpack_require__.d(Vector2_namespaceObject, "multiply", function() { return Vector2_multiply; });
__webpack_require__.d(Vector2_namespaceObject, "distance", function() { return Vector2_distance; });
__webpack_require__.d(Vector2_namespaceObject, "length", function() { return Vector2_length; });
__webpack_require__.d(Vector2_namespaceObject, "angleBetweenVectors", function() { return Vector2_angleBetweenVectors; });
__webpack_require__.d(Vector2_namespaceObject, "default", function() { return math_Vector2; });
var Matrixes4_namespaceObject = {};
__webpack_require__.r(Matrixes4_namespaceObject);
__webpack_require__.d(Matrixes4_namespaceObject, "Matrix4", function() { return Matrixes4_Matrix4; });
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
function dropCircle(deg) {
  var piCount = Math.ceil(deg / 360);
  return deg - 360 * piCount;
}
function dropCircleRad(rad) {
  var piCount = Math.ceil(rad / Math.PI);
  return rad - Math.PI * piCount;
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(3);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(0);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// CONCATENATED MODULE: ./src/math/Vector3.ts



var Vector3_Vector3 =
/*#__PURE__*/
function () {
  function Vector3(x, y, z) {
    classCallCheck_default()(this, Vector3);

    defineProperty_default()(this, "x", 0);

    defineProperty_default()(this, "y", 0);

    defineProperty_default()(this, "z", 0);

    this.set(x, y, z);
  }

  createClass_default()(Vector3, [{
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
  Vector3: Vector3_Vector3
});
// CONCATENATED MODULE: ./src/math/Vector2.ts



var Vector2_Vector2 =
/*#__PURE__*/
function () {
  function Vector2(x, y) {
    classCallCheck_default()(this, Vector2);

    defineProperty_default()(this, "x", 0);

    defineProperty_default()(this, "y", 0);

    this.set(x, y);
  }

  createClass_default()(Vector2, [{
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
  Vector2: Vector2_Vector2
});
// CONCATENATED MODULE: ./src/math/Matrixes4.ts



var Matrixes4_Matrix4 =
/*#__PURE__*/
function () {
  createClass_default()(Matrix4, [{
    key: "value",
    get: function get() {
      return this._value;
    }
  }]);

  function Matrix4() {
    classCallCheck_default()(this, Matrix4);

    defineProperty_default()(this, "_value", void 0);

    this._value = unit();
  }
  /**
   * Multiplying matrix by transition matrix (x, y, z).
   * @param x 
   * @param y 
   * @param z 
   * @public
   */


  createClass_default()(Matrix4, [{
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
  Matrix4: Matrixes4_Matrix4,
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(8);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(5);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(2);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(7);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(10);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: ./src/webgl/Utils.ts







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
    throw new Utils_WebglError("Cannot get WebGL context.");
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
    throw new Utils_WebglError("Cannot get WebGL context.");
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
    throw new Utils_WebglError("Cannot create shader.");
  }

  webGL.shaderSource(shader, source);
  webGL.compileShader(shader);

  if (!webGL.getShaderParameter(shader, webGL.COMPILE_STATUS)) {
    throw new Utils_WebglError("Could not compile shader:" + webGL.getShaderInfoLog(shader));
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

var Utils_WebglError =
/*#__PURE__*/
function (_Error) {
  inherits_default()(WebglError, _Error);

  function WebglError(message) {
    var _this;

    classCallCheck_default()(this, WebglError);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(WebglError).call(this, message));

    defineProperty_default()(assertThisInitialized_default()(_this), "name", "WebglError");

    Error.captureStackTrace(assertThisInitialized_default()(_this), WebglError);
    return _this;
  }

  return WebglError;
}(wrapNativeSuper_default()(Error));

/* harmony default export */ var Utils = ({
  createWebGLProgram: createWebGLProgram,
  compileShader: compileShader,
  getWebGL: getWebGL,
  getWebGLById: getWebGLById
});
// CONCATENATED MODULE: ./src/debug/Error.ts


var Error_BronzeError = function BronzeError(message) {
  classCallCheck_default()(this, BronzeError);

  throw new Error_CustomError(message);
};

var Error_CustomError = function CustomError(message) {
  classCallCheck_default()(this, CustomError);

  defineProperty_default()(this, "name", 'BronzeError');

  defineProperty_default()(this, "message", void 0);

  Error.apply(this, [message]);
  this.message = message;
};

Error_CustomError.prototype = new Error();

var Error_BronzeWarn = function BronzeWarn(message) {
  classCallCheck_default()(this, BronzeWarn);

  console.warn(message);
};

var Error_BronzeLog = function BronzeLog(log) {
  classCallCheck_default()(this, BronzeLog);

  console.log(log);
};


/* harmony default export */ var debug_Error = (Error_BronzeError);
// CONCATENATED MODULE: ./src/webgl/ShaderProgram.ts




var ShaderProgram_ShaderProgram =
/*#__PURE__*/
function () {
  createClass_default()(ShaderProgram, [{
    key: "program",
    get: function get() {
      return this._program;
    }
    /**
     * Object of webgl shader.
     * @param webGL 
     */

  }]);

  function ShaderProgram(webGL) {
    classCallCheck_default()(this, ShaderProgram);

    defineProperty_default()(this, "webGL", void 0);

    defineProperty_default()(this, "VERTEX_SHADER", "vertex");

    defineProperty_default()(this, "FRAGMENT_SHADER", "fragment");

    defineProperty_default()(this, "ATTRIBUTE", "attribute");

    defineProperty_default()(this, "UNIFORM", "uniform");

    defineProperty_default()(this, "_program", null);

    defineProperty_default()(this, "_vertexShader", null);

    defineProperty_default()(this, "_fragmentShader", null);

    this.webGL = webGL;
    return this;
  }
  /**
   * Compiling and attaching shader to this program.
   * @param {String} type can be ['vertex', 'fragment'].
   * @param {String} source
   */


  createClass_default()(ShaderProgram, [{
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
          throw new Error_BronzeError("Wrong shader type.");
      }

      this.webGL.shaderSource(shader, source);
      this.webGL.compileShader(shader);

      if (!this.webGL.getShaderParameter(shader, this.webGL.COMPILE_STATUS)) {
        console.error("There are shader error:");
        console.error(this.webGL.getShaderInfoLog(shader));
        throw new Error_BronzeError("Could not compile shader.");
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
        throw new Error_BronzeError("Shader programs isn`t complete.");
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
        throw new Error_BronzeError("Shader program is null.");
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
        throw new Error_BronzeError("Shader program is null.");
      }

      this[customName] = this.webGL.getAttribLocation(this.program, name);

      if (this[customName] == null || this[customName] == -1) {
        throw new Error("Can not link attribute " + name + ". The variable may not be used in shader.");
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
        throw new Error_BronzeError("Shader program is null.");
      }

      this[customName] = this.webGL.getUniformLocation(this.program, name);

      if (this[customName] == null || this[customName] == -1) {
        throw new Error("Can not link uniform " + name + ". The variable may not be used in shader.");
      }

      return this[customName];
    }
    /**
     * Set WebGL to use this shader.
     */

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
/* harmony default export */ var webgl_ShaderProgram = (ShaderProgram_ShaderProgram);
// CONCATENATED MODULE: ./src/webgl/Shaders.ts





/* babel-plugin-inline-import './shaders/default/fragment-shader.glsl' */
var fragmentShaderSource = "#define MAX_LIGHTS 28\r\n\r\nprecision mediump float;\r\n\r\n\r\nuniform sampler2D u_texture;\r\nuniform float u_lightRanges[MAX_LIGHTS];\r\nuniform float u_lightMinValue;\r\nuniform vec3 u_lightPositions[MAX_LIGHTS];\r\nuniform int u_lightsCount;\r\n\r\nvarying vec3 v_surfaceWorldPosition;\r\nvarying vec2 v_texcoord;\r\nvarying vec3 v_normal;\r\n\r\nfloat computeLight(vec3 direction, float range) {\r\n    float light = dot(v_normal, normalize(direction));\r\n    float k = (range - length(direction)) / range;\r\n    if (k < 0.0) k = 0.0;\r\n    light = light * k;\r\n    if (light < u_lightMinValue) {\r\n        light = u_lightMinValue;\r\n    }\r\n    return light;\r\n}\r\n\r\nvoid main() {\r\n    float light = 0.0;\r\n\r\n    for (int i = 0; i < MAX_LIGHTS; i++) {\r\n        if (i > int(u_lightsCount)) {\r\n            break;\r\n        }\r\n        vec3 direction = u_lightPositions[i] - v_surfaceWorldPosition;\r\n        light += computeLight(direction, u_lightRanges[i]);\r\n    }\r\n    \r\n    gl_FragColor = texture2D(u_texture, v_texcoord);\r\n    if (gl_FragColor.a == 0.0) {\r\n        discard;\r\n    }\r\n    gl_FragColor.rgb *= light;\r\n    gl_FragColor.rgb *= gl_FragColor.a;\r\n}";

/* babel-plugin-inline-import './shaders/default/vertex-shader.glsl' */
var vertexShaderSource = "#define MAX_LIGHTS 28\r\n\r\nattribute vec4 a_position;\r\nattribute vec2 a_texcoord;\r\nattribute vec4 a_normal;\r\n\r\nuniform mat4 u_matrix;\r\nuniform mat4 u_objectRotation;\r\nuniform mat4 u_worldMatrix;\r\n\r\nvarying vec2 v_texcoord;\r\nvarying vec3 v_normal;\r\nvarying vec3 v_surfaceWorldPosition;\r\n\r\nvoid main() {\r\n    gl_Position = u_matrix * a_position;\r\n    \r\n    v_texcoord = a_texcoord;\r\n    v_normal = vec3(u_objectRotation * a_normal);\r\n\r\n    v_surfaceWorldPosition = (u_worldMatrix  * a_position).xyz;\r\n}";

/* babel-plugin-inline-import './shaders/cube-texture/fragment-shader.glsl' */
var cubeFragmentShaderSource = "#define MAX_LIGHTS 28\r\n\r\nprecision mediump float;\r\n\r\nuniform samplerCube u_texture;\r\nuniform float u_lightRanges[MAX_LIGHTS];\r\nuniform float u_lightMinValue;\r\nuniform vec3 u_lightPositions[MAX_LIGHTS];\r\nuniform int u_lightsCount;\r\n\r\nvarying vec3 v_surfaceWorldPosition;\r\nvarying vec3 v_normal;\r\nvarying vec3 v_normalTex;\r\n\r\nfloat computeLight(vec3 direction, float range) {\r\n    float light = dot(v_normal, normalize(direction));\r\n    float k = (range - length(direction)) / range;\r\n    if (k < 0.0) k = 0.0;\r\n    light = light * k;\r\n    if (light < u_lightMinValue) {\r\n        light = u_lightMinValue;\r\n    }\r\n    return light;\r\n}\r\n\r\nvoid main() {\r\n    float light = 0.0;\r\n\r\n    for (int i = 0; i < MAX_LIGHTS; i++) {\r\n        if (i > int(u_lightsCount)) {\r\n            break;\r\n        }\r\n        vec3 direction = u_lightPositions[i] - v_surfaceWorldPosition;\r\n        light += computeLight(direction, u_lightRanges[i]);\r\n    }\r\n    \r\n    gl_FragColor = textureCube(u_texture, normalize(v_normalTex));\r\n    if (gl_FragColor.a == 0.0) {\r\n        discard;\r\n    }\r\n    gl_FragColor.rgb *= light;\r\n    gl_FragColor.rgb *= gl_FragColor.a;\r\n}";

/* babel-plugin-inline-import './shaders/cube-texture/vertex-shader.glsl' */
var cubeVertexShaderSource = "#define MAX_LIGHTS 28\r\n\r\nattribute vec4 a_position;\r\n// attribute vec2 a_texcoord;\r\nattribute vec4 a_normal;\r\n\r\nuniform mat4 u_matrix;\r\nuniform mat4 u_objectRotation;\r\nuniform mat4 u_worldMatrix;\r\n\r\nvarying vec3 v_normal;\r\nvarying vec3 v_normalTex;\r\nvarying vec3 v_surfaceWorldPosition;\r\n\r\nvoid main() {\r\n    gl_Position = u_matrix * a_position;\r\n\r\n    v_normalTex = normalize(a_position.xyz);\r\n    v_normal = vec3(u_objectRotation * a_normal);\r\n\r\n    v_surfaceWorldPosition = (u_worldMatrix  * a_position).xyz;\r\n}";

/* babel-plugin-inline-import './shaders/grid/fragment-shader.glsl' */
var gridFragmentShaderSource = "precision mediump float;\r\n\r\nvarying vec2 v_texcoord;\r\n\r\nuniform sampler2D u_texture;\r\n\r\nvoid main() {\r\n    gl_FragColor = texture2D(u_texture, v_texcoord);\r\n}";

/* babel-plugin-inline-import './shaders/grid/vertex-shader.glsl' */
var gridVertexShaderSource = "attribute vec4 a_position;\r\nattribute vec2 a_texcoord;\r\n\r\nuniform mat4 u_matrix;\r\nuniform vec2 u_moving;\r\nuniform vec2 u_cellSize;\r\n\r\nvarying vec2 v_texcoord;\r\n\r\nvoid main() {\r\n    gl_Position = u_matrix * a_position;\r\n    v_texcoord = vec2(a_texcoord.x + u_moving.x / u_cellSize.x, a_texcoord.y + (u_moving.y / u_cellSize.x));\r\n}";

/* babel-plugin-inline-import './shaders/reflection-texture/fragment-shader.glsl' */
var reflectionFragmentShaderSource = "#define MAX_LIGHTS 28\r\n\r\nprecision highp float;\r\n    \r\nuniform samplerCube u_texture;\r\nuniform float u_lightRanges[MAX_LIGHTS];\r\nuniform float u_lightMinValue;\r\nuniform vec3 u_lightPositions[MAX_LIGHTS];\r\nuniform int u_lightsCount;\r\n\r\nvarying float v_lightsCount;\r\nvarying vec3 v_worldRotation;\r\nvarying vec3 v_normal;\r\nvarying vec3 v_surfaceToLightDirection;\r\nvarying vec3 v_surfaceWorldPosition;\r\n        \r\nfloat computeLight(vec3 direction, float range) {\r\n    float light = dot(normalize(v_worldRotation), normalize(direction));\r\n    float k = (range - length(direction)) / range;\r\n    if (k < 0.0) k = 0.0;\r\n    light = light * k;\r\n    if (light < u_lightMinValue) {\r\n        light = u_lightMinValue;\r\n    }\r\n    return light;\r\n}\r\n\r\nvoid main() {\r\n    vec3 worldNormal = normalize(v_normal);\r\n    vec3 eyeToSurfaceDir = normalize(v_worldRotation);\r\n    vec3 direction = reflect(eyeToSurfaceDir, vec3(0.0, 0.0, -1.0));\r\n    \r\n    gl_FragColor = textureCube(u_texture, direction);\r\n\r\n    float light = 0.0;\r\n\r\n    for (int i = 0; i < MAX_LIGHTS; i++) {\r\n        if (i > int(u_lightsCount)) {\r\n            break;\r\n        }\r\n        vec3 direction = u_lightPositions[i] - v_surfaceWorldPosition;\r\n        light += computeLight(direction, u_lightRanges[i]);\r\n    }\r\n\r\n    gl_FragColor.rgb *= (light);\r\n    if (gl_FragColor.a == 0.0) {\r\n        discard;\r\n    }\r\n    gl_FragColor.rgb *= gl_FragColor.a;\r\n}";

/* babel-plugin-inline-import './shaders/reflection-texture/vertex-shader.glsl' */
var reflectionVertexShaderSource = "#define MAX_LIGHTS 28\r\n\r\nattribute vec4 a_position;\r\nattribute vec3 a_normal;\r\n    \r\nuniform mat4 u_matrix;\r\nuniform mat4 u_rotationMatrix;\r\nuniform mat4 u_worldMatrix;\r\n\r\n\r\nvarying vec3 v_worldRotation;\r\nvarying vec3 v_normal;\r\nvarying vec3 v_surfaceToLightDirection;\r\nvarying vec3 v_surfaceWorldPosition;\r\n    \r\nvoid main() {\r\n    gl_Position = u_matrix * a_position;\r\n    v_worldRotation = (u_rotationMatrix * a_position).xyz;\r\n    v_normal =  vec3(a_normal);\r\n    v_surfaceWorldPosition = (u_worldMatrix  * a_position).xyz;\r\n}";

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
    classCallCheck_default()(this, Shaders);

    defineProperty_default()(this, "extensions", new Shaders_Extensions());

    defineProperty_default()(this, "webGL", void 0);

    defineProperty_default()(this, "shadersRequireLights", []);

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
   * @param {String} name shader name
   * @param {String} vertexSource shader text
   * @param {String} fragmentSource shader text
   * @param {Options} [options]
   */


  createClass_default()(Shaders, [{
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
    /**
     * Load shader from Path
     * @param name 
     * @param vertexPath 
     * @param fragmentPath 
     * @param options 
     */

  }, {
    key: "loadShaders",
    value: function loadShaders(name, vertexPath, fragmentPath, options) {
      var vertexShader = new XMLHttpRequest();
      vertexShader.open("GET", vertexPath, false);
      vertexShader.send(null);
      var fragmentShader = new XMLHttpRequest();
      fragmentShader.open("GET", fragmentPath, false);
      fragmentShader.send(null);
      this.addProgram(name, vertexShader.responseText, fragmentShader.responseText, options);
    }
    /**
     * Linking all variables from shaders.
     * @param program 
     * @param source 
     * @param options 
     */

  }, {
    key: "_linkAllAttributesFromSource",
    value: function _linkAllAttributesFromSource(program, source, options) {
      var rows = source.split(";").join("\r").split("\r");
      var outName;
      rows.forEach(function (row) {
        row = row.replace(new RegExp("\r", "g"), "");
        row = row.replace(new RegExp("\n", "g"), "");
        var words = row.split(" ");

        for (var i = words.length - 1; i--;) {
          if (words[i] === "") {
            words.splice(i, 1);
          }
        }

        if (words[0].toLowerCase() == "attribute") {
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
        } else if (words[0].toLowerCase() == "uniform") {
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
var Shaders_Options = function Options() {
  classCallCheck_default()(this, Options);

  defineProperty_default()(this, "addLocationMarker", false);

  defineProperty_default()(this, "removePrefixes", false);
};
var Shaders_Extensions = function Extensions() {
  classCallCheck_default()(this, Extensions);
};
/* harmony default export */ var webgl_Shaders = (Shaders_Shaders);
// CONCATENATED MODULE: ./src/textures/Texture.ts




var Texture_Texture =
/*#__PURE__*/
function () {
  function Texture(engine) {
    classCallCheck_default()(this, Texture);

    defineProperty_default()(this, "alpha", false);

    defineProperty_default()(this, "color", new Uint8Array([229, 91, 91, 255]));

    defineProperty_default()(this, "engine", void 0);

    defineProperty_default()(this, "textureBlockLocation", -1);

    defineProperty_default()(this, "loaded", false);

    defineProperty_default()(this, "webglTexture", void 0);

    this.engine = engine;
  }
  /**
   * Sets color for texture
   * @param r number from 0 to 255
   * @param g number from 0 to 255
   * @param b number from 0 to 255
   * @param a number from 0 to 255
   */


  createClass_default()(Texture, [{
    key: "setColor",
    value: function setColor(r, g, b, a) {
      if (!g) {
        var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(String(r));

        if (rgb == null) {
          new debug_Error('Wrong hex color!');
          return;
        }

        this.color = new Uint8Array([parseInt(rgb[0]), parseInt(rgb[1]), parseInt(rgb[2]), 255]);
      } else if (g != undefined && b != undefined && a != undefined) {
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
  }, {
    key: "setAlpha",
    value: function setAlpha(a) {
      this.color[3] = a;
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







var ColorTexture_ColorTexture =
/*#__PURE__*/
function (_Texture) {
  inherits_default()(ColorTexture, _Texture);

  function ColorTexture(engine) {
    var _this;

    classCallCheck_default()(this, ColorTexture);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(ColorTexture).call(this, engine));

    defineProperty_default()(assertThisInitialized_default()(_this), "textureBlockLocation", -1);

    _this.engine = engine;
    _this.textureBlockLocation = _this.engine.textures.length;

    _this.engine.textures.push(assertThisInitialized_default()(_this));

    var webgl = _this.engine.webgl;
    _this.webglTexture = webgl.createTexture();
    webgl.activeTexture(webgl.TEXTURE0 + _this.textureBlockLocation);
    webgl.bindTexture(webgl.TEXTURE_2D, _this.webglTexture);
    webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, 1, 1, 0, webgl.RGBA, webgl.UNSIGNED_BYTE, _this.color);

    _this.engine.textureLoaded(assertThisInitialized_default()(_this));

    _this.loaded = true;
    return _this;
  }

  return ColorTexture;
}(Texture_Texture);
/* harmony default export */ var textures_ColorTexture = (ColorTexture_ColorTexture);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(11);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// CONCATENATED MODULE: ./src/objects/Entity.ts









var Entity_Entity =
/*#__PURE__*/
function () {
  function Entity(engine) {
    classCallCheck_default()(this, Entity);

    defineProperty_default()(this, "name", "Just entity :)");

    defineProperty_default()(this, "loaded", false);

    defineProperty_default()(this, "verticalAlign", true);

    defineProperty_default()(this, "vertexes", []);

    defineProperty_default()(this, "textureCoordinates", []);

    defineProperty_default()(this, "normals", []);

    defineProperty_default()(this, "vertexesBuffer", null);

    defineProperty_default()(this, "textureCoordinatesBuffer", null);

    defineProperty_default()(this, "normalsBuffer", null);

    defineProperty_default()(this, "matrix", unit());

    defineProperty_default()(this, "rotationMatrix", unit());

    defineProperty_default()(this, "worldMatrix", unit());

    defineProperty_default()(this, "worldMatrixWithoutScaling", unit());

    defineProperty_default()(this, "uiMatrix", null);

    defineProperty_default()(this, "texture", void 0);

    defineProperty_default()(this, "rotationInDeg", new Vector3_Vector3(0, 0, 0));

    defineProperty_default()(this, "rotation", new Vector3_Vector3(0, 0, 0));

    defineProperty_default()(this, "rotationSelf", new Vector3_Vector3(0, 0, 0));

    defineProperty_default()(this, "rotationPoint", new Vector3_Vector3(0, 0, 0));

    defineProperty_default()(this, "scaling", new Vector3_Vector3(1, 1, 1));

    defineProperty_default()(this, "selectable", false);

    defineProperty_default()(this, "relativeToCameraPosition", {
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

    defineProperty_default()(this, "_engine", void 0);

    defineProperty_default()(this, "webgl", void 0);

    defineProperty_default()(this, "camera", void 0);

    defineProperty_default()(this, "maxSize", new Vector3_Vector3(0, 0, 0));

    defineProperty_default()(this, "minSize", new Vector3_Vector3(0, 0, 0));

    defineProperty_default()(this, "maxBaseSize", new Vector3_Vector3(0, 0, 0));

    defineProperty_default()(this, "minBaseSize", new Vector3_Vector3(0, 0, 0));

    defineProperty_default()(this, "hidden", false);

    defineProperty_default()(this, "rotationPointPos", null);

    defineProperty_default()(this, "shaderProgram", void 0);

    defineProperty_default()(this, "_collisionBox", new Entity_CollisionBox());

    defineProperty_default()(this, "_UIElement", false);

    defineProperty_default()(this, "_animationInterval", void 0);

    defineProperty_default()(this, "_position", new Vector3_Vector3(0, 0, 0));

    this._engine = engine;
    this.webgl = engine.webgl;
    this.camera = engine.camera;
    this.texture = this._engine.noTexture;
    this.shaderProgram = engine.shaders["default"];
    engine.addObject(this);
  }

  createClass_default()(Entity, [{
    key: "setPosition",
    value: function setPosition(value, y, z) {
      if (value.constructor === Vector3_Vector3) {
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
    value: function () {
      var _checkCollision = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(position, moving, movingObjectCollisionBox, callback) {
        var maxPoint, minPoint, temp, maxX, minX, _temp, maxY, minY, _temp2, maxZ, minZ, newPosX, newPosY, newPosZ;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.hidden && this.engine.camera.moved) {
                  maxPoint = [this.collisionBox.maxPoint.x, this.collisionBox.maxPoint.y, this.collisionBox.maxPoint.z, 1];
                  minPoint = [this.collisionBox.minPoint.x, this.collisionBox.minPoint.y, this.collisionBox.minPoint.z, 1];
                  maxPoint = transformVector(this.worldMatrix, maxPoint);
                  minPoint = transformVector(this.worldMatrix, minPoint);

                  if (maxPoint[0] < minPoint[0]) {
                    temp = maxPoint[0];
                    maxPoint[0] = minPoint[0];
                    minPoint[0] = temp;
                  }

                  maxX = maxPoint[0] - movingObjectCollisionBox.minPoint.x;
                  minX = minPoint[0] - movingObjectCollisionBox.maxPoint.x;

                  if (maxPoint[1] < minPoint[1]) {
                    _temp = maxPoint[1];
                    maxPoint[1] = minPoint[1];
                    minPoint[1] = _temp;
                  }

                  maxY = maxPoint[1] - movingObjectCollisionBox.minPoint.y;
                  minY = minPoint[1] - movingObjectCollisionBox.maxPoint.y;

                  if (maxPoint[2] < minPoint[2]) {
                    _temp2 = maxPoint[2];
                    maxPoint[2] = minPoint[2];
                    minPoint[2] = _temp2;
                  }

                  maxZ = maxPoint[2] - movingObjectCollisionBox.minPoint.z;
                  minZ = minPoint[2] - movingObjectCollisionBox.maxPoint.z;
                  newPosX = position.x + moving.x;
                  newPosY = position.y + moving.y;
                  newPosZ = position.z + moving.z;

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

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function checkCollision(_x, _x2, _x3, _x4) {
        return _checkCollision.apply(this, arguments);
      }

      return checkCollision;
    }()
  }, {
    key: "useShader",
    value: function useShader(shader) {
      this.shaderProgram = shader;
    }
  }, {
    key: "updateRelativeToCameraPosition",
    value: function () {
      var _updateRelativeToCameraPosition = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee2() {
        var xs, ys, zs, smallest, biggest, ix, _x5, iy, _y, iz, _z, coordsInPixels;

        return regenerator_default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                xs = [this.collisionBox.maxPoint.x, this.collisionBox.minPoint.x];
                ys = [this.collisionBox.maxPoint.y, this.collisionBox.minPoint.y];
                zs = [this.collisionBox.maxPoint.z, this.collisionBox.minPoint.z];
                smallest = [1000000, 1000000];
                biggest = [-1000000, -1000000, -1000000];

                for (ix = 0; ix < 2; ix++) {
                  _x5 = xs[ix];

                  for (iy = 0; iy < 2; iy++) {
                    _y = ys[iy];

                    for (iz = 0; iz < 2; iz++) {
                      _z = zs[iz];
                      coordsInPixels = transformVector(this.matrix, [_x5, _y, _z, 1]);
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

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function updateRelativeToCameraPosition() {
        return _updateRelativeToCameraPosition.apply(this, arguments);
      }

      return updateRelativeToCameraPosition;
    }()
  }, {
    key: "getPositionOnScreen",
    value: function () {
      var _getPositionOnScreen = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3() {
        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.updateRelativeToCameraPosition();

              case 2:
                if (this.engine.controls.mouse.x > this.relativeToCameraPosition.min.x && this.engine.controls.mouse.x < this.relativeToCameraPosition.max.x && this.engine.controls.mouse.y > this.relativeToCameraPosition.min.y && this.engine.controls.mouse.y < this.relativeToCameraPosition.max.y) {
                  if (this.engine.selectedObject == null || this.engine.selectedObject.relativeToCameraPosition.depth >= this.relativeToCameraPosition.depth) {
                    this.engine.selectedObject = this;
                  }
                }

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function getPositionOnScreen() {
        return _getPositionOnScreen.apply(this, arguments);
      }

      return getPositionOnScreen;
    }()
  }, {
    key: "updateMatrixes",
    value: function () {
      var _updateMatrixes = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee4() {
        var rot, world, afterRotation;
        return regenerator_default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                rot = Matrixes4_rotation(this.rotation.x, this.rotation.y, this.rotation.z);
                world = translation(this._position.x, this._position.y, this._position.z);

                if (!this.verticalAlign) {
                  world = Matrixes4_multiply(world, translation(0, -(this.maxSize.y - this.minSize.y) / 2, 0));
                }

                afterRotation = rot;
                afterRotation = Matrixes4_multiply(afterRotation, translation(-this.minSize.x - (this.maxSize.x - this.minSize.x) / 2, -this.minSize.y - (this.maxSize.y - this.minSize.y) / 2, -this.minSize.z - (this.maxSize.z - this.minSize.z) / 2));
                afterRotation = Matrixes4_multiply(afterRotation, scaling(this.scaling.x, this.scaling.y, this.scaling.z));
                this.worldMatrixWithoutScaling = world;

                if (this.UIElement) {
                  this.uiMatrix = Matrixes4_multiply(world, afterRotation);
                  world = Matrixes4_multiply(this.camera.matrix, rot);
                } else {
                  world = Matrixes4_multiply(world, afterRotation);
                }

                this.worldMatrix = world;
                this.rotationMatrix = rot;

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function updateMatrixes() {
        return _updateMatrixes.apply(this, arguments);
      }

      return updateMatrixes;
    }()
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
    classCallCheck_default()(this, CollisionBox);

    defineProperty_default()(this, "maxPoint", new Vector3_Vector3(0, 0, 0));

    defineProperty_default()(this, "minPoint", new Vector3_Vector3(0, 0, 0));

    defineProperty_default()(this, "points", []);
  }

  createClass_default()(CollisionBox, [{
    key: "generatePoints",
    value: function generatePoints() {}
  }]);

  return CollisionBox;
}();


/* harmony default export */ var objects_Entity = (Entity_Entity);
// CONCATENATED MODULE: ./src/textures/SimpleTexture.ts









var SimpleTexture_SimpleTexture =
/*#__PURE__*/
function (_Texture) {
  inherits_default()(SimpleTexture, _Texture);

  function SimpleTexture(engine) {
    var _this;

    classCallCheck_default()(this, SimpleTexture);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(SimpleTexture).call(this, engine));

    defineProperty_default()(assertThisInitialized_default()(_this), "textureBlockLocation", -1);

    defineProperty_default()(assertThisInitialized_default()(_this), "mipmapFilter", 'LINEAR');

    defineProperty_default()(assertThisInitialized_default()(_this), "AUTO_GENERATE", 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "QUICK_GENERATE", 1);

    defineProperty_default()(assertThisInitialized_default()(_this), "_mipmap", []);

    defineProperty_default()(assertThisInitialized_default()(_this), "_onTextureLoadedHandlers", []);

    defineProperty_default()(assertThisInitialized_default()(_this), "_width", -1);

    defineProperty_default()(assertThisInitialized_default()(_this), "_height", -1);

    defineProperty_default()(assertThisInitialized_default()(_this), "_image", new Image());

    defineProperty_default()(assertThisInitialized_default()(_this), "_mipmapGenerationMethod", -1);

    _this.engine = engine;
    _this.textureBlockLocation = _this.engine.textures.length;

    _this.engine.textures.push(assertThisInitialized_default()(_this));

    var webgl = _this.engine.webgl;
    _this.webglTexture = webgl.createTexture();
    webgl.activeTexture(webgl.TEXTURE0 + _this.textureBlockLocation);
    webgl.bindTexture(webgl.TEXTURE_2D, _this.webglTexture);
    webgl.texImage2D(webgl.TEXTURE_2D, 0, webgl.RGBA, 1, 1, 0, webgl.RGBA, webgl.UNSIGNED_BYTE, _this.color);
    return _this;
  }

  createClass_default()(SimpleTexture, [{
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
// CONCATENATED MODULE: ./src/objects/mtl/MTL.ts




var MTL_MTL =
/*#__PURE__*/
function () {
  function MTL(fileText, engine, path) {
    var _this = this;

    classCallCheck_default()(this, MTL);

    defineProperty_default()(this, "elements", []);

    var splitted = fileText.split("\n");
    var currentMTL;
    splitted.forEach(function (row) {
      var words = row.split(' ');

      for (var i = words.length; i--;) {
        if (words[i] == "" || words[i] == "\r") words.splice(i, 1);
      }

      if (words[0] == "newmtl") {
        currentMTL = new MTL_MTLElement(words[1], engine);

        _this.elements.push(currentMTL);
      }

      if (words[0] == "map_Kd") {
        var texture = new SimpleTexture_SimpleTexture(engine);
        var p = path.split('/');
        p.splice(-1, 1);
        p = p.join('/');
        texture.loadFrom(p + words[1]);
        texture.alpha = true;
        currentMTL.texture = texture;
      }

      if (words[0] == "Kd") {
        currentMTL.texture.setColor(parseFloat(words[1]) * 255, parseFloat(words[2]) * 255, parseFloat(words[3]) * 255, 255);
      }

      if (words[0] == "d") {
        currentMTL.texture.setAlpha(parseFloat(words[1]) * 255);
      }
    });
  }

  createClass_default()(MTL, [{
    key: "getElementByName",
    value: function getElementByName(name) {
      for (var i = 0; i < this.elements.length; i++) {
        var element = this.elements[i];

        if (element.name == name) {
          return element;
        }
      }

      return null;
    }
  }]);

  return MTL;
}();
var MTL_MTLElement =
/*#__PURE__*/
function () {
  function MTLElement(name, engine) {
    classCallCheck_default()(this, MTLElement);

    defineProperty_default()(this, "webgl", void 0);

    defineProperty_default()(this, "name", void 0);

    defineProperty_default()(this, "vertexes", []);

    defineProperty_default()(this, "textureCoordinates", []);

    defineProperty_default()(this, "normals", []);

    defineProperty_default()(this, "vertexesBuffer", null);

    defineProperty_default()(this, "textureCoordinatesBuffer", null);

    defineProperty_default()(this, "normalsBuffer", null);

    defineProperty_default()(this, "texture", void 0);

    this.name = name;
    this.webgl = engine.webgl;
    this.texture = engine.noTexture;
  }

  createClass_default()(MTLElement, [{
    key: "commit",
    value: function commit() {
      this.vertexesBuffer = this.webgl.createBuffer();
      this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.vertexesBuffer);
      this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.vertexes), this.webgl.STATIC_DRAW);
      this.textureCoordinatesBuffer = this.webgl.createBuffer();
      this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.textureCoordinatesBuffer);
      this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.textureCoordinates), this.webgl.STATIC_DRAW);
      this.normalsBuffer = this.webgl.createBuffer();
      this.webgl.bindBuffer(this.webgl.ARRAY_BUFFER, this.normalsBuffer);
      this.webgl.bufferData(this.webgl.ARRAY_BUFFER, new Float32Array(this.normals), this.webgl.STATIC_DRAW);
    }
  }]);

  return MTLElement;
}();
// CONCATENATED MODULE: ./src/objects/Object.ts














var Object_Object =
/*#__PURE__*/
function (_Entity) {
  inherits_default()(Object, _Entity);

  function Object(engine) {
    var _this;

    classCallCheck_default()(this, Object);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Object).call(this, engine));

    defineProperty_default()(assertThisInitialized_default()(_this), "_drawingMode", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "afterLoadHidden", false);

    defineProperty_default()(assertThisInitialized_default()(_this), "mtl", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "onLoadHandlers", []);

    defineProperty_default()(assertThisInitialized_default()(_this), "mtlRequired", false);

    defineProperty_default()(assertThisInitialized_default()(_this), "mtlRequiredFunction", null);

    defineProperty_default()(assertThisInitialized_default()(_this), "objLoaded", false);

    _this._drawingMode = _this.webgl.TRIANGLES;
    _this.hidden = true;
    _this.name = "Just object :)";
    return _this;
  }
  /**
   * Sets how WebGL will draw object
   * @param {String} mode
   */


  createClass_default()(Object, [{
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
      var currentMTL = null;
      var currentVertexes = this.vertexes;
      var currentNormals = this.normals;
      var currentTextureCoords = this.textureCoordinates;
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
          normals.push([parseFloat(values[1]), parseFloat(values[2]), parseFloat(values[3])]);
        } else if (values[name] == "vt") {
          textureCoords.push([parseFloat(values[1]), parseFloat(values[2])]);
        } else if (_this2.mtl != null && values[name] == "usemtl") {
          currentMTL = _this2.mtl.getElementByName(values[1]);

          if (currentMTL == undefined) {
            return;
          }

          currentVertexes = currentMTL.vertexes;
          currentNormals = currentMTL.normals;
          currentTextureCoords = currentMTL.textureCoordinates;
        } else if (values[name] == "f") {
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
              currentVertexes.push(coordinate);
            });

            if (textureCoords[textureCoordinatePosition - 1] != undefined) {
              currentTextureCoords.push(textureCoords[textureCoordinatePosition - 1][0]);
              currentTextureCoords.push(Math.abs(1 - textureCoords[textureCoordinatePosition - 1][1]));
            } else {
              currentTextureCoords.push(1);
              currentTextureCoords.push(1);
            }

            if (indexes[2] != undefined) {
              normals[normalPosition - 1].forEach(function (normal) {
                currentNormals.push(normal);
              });
            } else {
              currentNormals.push(1, 1, 1);
            }
          }
        }
      });

      if (this.mtl) {
        for (var i = 0; i < this.mtl.elements.length; i++) {
          var element = this.mtl.elements[i];
          element.commit();
        }

        var buffer = this.draw;
        this.draw = this.drawWithMTL;
        this.drawWithMTL = this.draw;
      }

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
      this.hidden = this.afterLoadHidden;

      this.hide = function () {
        _this2.hidden = true;
      };

      this.show = function () {
        _this2.hidden = false;
      };
    }
  }, {
    key: "hide",
    value: function hide() {
      this.afterLoadHidden = true;
    }
  }, {
    key: "show",
    value: function show() {
      this.afterLoadHidden = false;
    }
  }, {
    key: "addOnLoadHandler",
    value: function addOnLoadHandler(func) {
      this.onLoadHandlers.push(func);
    }
  }, {
    key: "onload",
    value: function onload() {
      var _this3 = this;

      this.onLoadHandlers.forEach(function (element) {
        element(_this3);
      });
    }
    /**
     * Async load object using ajax and compile on load.
     * @param {String} path
     * @public
     */

  }, {
    key: "loadFromObj",
    value: function loadFromObj(path) {
      var _this4 = this;

      var self = this;
      var objectsLoader = new XMLHttpRequest();
      objectsLoader.open("GET", path);

      objectsLoader.onreadystatechange = function () {
        if (objectsLoader.readyState == 4) {
          if (_this4.mtl || !_this4.mtlRequired) {
            self.compile(objectsLoader.responseText);
            self.onload();
            self.objLoaded = true;
          } else {
            _this4.mtlRequiredFunction = function () {
              self.objLoaded = true;
              self.compile(objectsLoader.responseText);
              self.onload();
            };
          }
        } else if (objectsLoader.readyState == 0) {
          console.log('Error in ' + _this4.name);
          new debug_Error('Can not load object file.');
        }
      };

      objectsLoader.send();
    }
  }, {
    key: "loadMTL",
    value: function () {
      var _loadMTL = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(path) {
        var _this5 = this;

        var loader;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                loader = new XMLHttpRequest();
                this.mtlRequired = true;
                loader.open("GET", path);

                loader.onreadystatechange = function () {
                  if (loader.readyState == 4) {
                    _this5.mtl = new MTL_MTL(loader.responseText, _this5.engine, path);

                    if (_this5.objLoaded && _this5.mtlRequiredFunction) {
                      _this5.mtlRequiredFunction();
                    }
                  } else if (loader.readyState == 0) {
                    console.log('Error in ' + _this5.name);
                    new debug_Error('Can not load MTL file.');
                  }
                };

                loader.send();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function loadMTL(_x) {
        return _loadMTL.apply(this, arguments);
      }

      return loadMTL;
    }()
  }, {
    key: "useMaterial",
    value: function useMaterial(material) {
      var _this6 = this;

      material.defaultDraw = this.draw;
      material.object = this;

      this.draw = function () {
        material.drawObject(_this6);
      };
    }
  }, {
    key: "drawWithMTL",
    value: function drawWithMTL() {
      var _this7 = this;

      if (!this.hidden && this.shaderProgram && this.mtl) {
        this.shaderProgram.use();
        this.engine.webgl.uniformMatrix4fv(this.shaderProgram.matrixLocation, false, this.matrix);
        this.engine.webgl.uniformMatrix4fv(this.shaderProgram.objectRotationLocation, false, this.rotationMatrix);
        this.engine.webgl.uniformMatrix4fv(this.shaderProgram.worldMatrixLocation, false, this.worldMatrix);
        this.mtl.elements.forEach(function (elem) {
          if (elem.texture != null) {
            _this7.engine.webgl.uniform1i(_this7.shaderProgram.textureLocation, elem.texture.textureBlockLocation);
          } else {
            _this7.engine.webgl.uniform1i(_this7.shaderProgram.textureLocation, _this7.texture.textureBlockLocation);
          }

          _this7.engine.webgl.enableVertexAttribArray(_this7.shaderProgram.positionLocation);

          _this7.engine.webgl.bindBuffer(_this7.engine.webgl.ARRAY_BUFFER, elem.vertexesBuffer);

          _this7.engine.webgl.vertexAttribPointer(_this7.shaderProgram.positionLocation, 3, _this7.engine.webgl.FLOAT, false, 0, 0);

          _this7.engine.webgl.enableVertexAttribArray(_this7.shaderProgram.texcoordLocation);

          _this7.engine.webgl.bindBuffer(_this7.engine.webgl.ARRAY_BUFFER, elem.textureCoordinatesBuffer);

          _this7.engine.webgl.vertexAttribPointer(_this7.shaderProgram.texcoordLocation, 2, _this7.engine.webgl.FLOAT, false, 0, 0);

          _this7.engine.webgl.enableVertexAttribArray(_this7.shaderProgram.normalLocation);

          _this7.engine.webgl.bindBuffer(_this7.engine.webgl.ARRAY_BUFFER, elem.normalsBuffer);

          _this7.engine.webgl.vertexAttribPointer(_this7.shaderProgram.normalLocation, 3, _this7.engine.webgl.FLOAT, false, 0, 0);

          _this7.engine.webgl.drawArrays(_this7.engine.webgl.TRIANGLES, 0, elem.vertexes.length / 3);
        });
      }
    }
  }, {
    key: "copy",
    value: function copy() {
      var _this8 = this;

      var obj = new Object(this.engine);

      for (var attr in objectSpread_default()({}, this)) {
        // @ts-ignore - These are two completely identical objects.
        obj[attr] = this[attr];
      }

      var copyAttrs = function copyAttrs(object, original) {
        object.vertexes = original.vertexes;
        object.normals = original.normals;
        object.textureCoordinates = original.textureCoordinates;
        object.vertexesBuffer = original.vertexesBuffer;
        object.normalsBuffer = original.normalsBuffer;
        object.textureCoordinatesBuffer = original.textureCoordinatesBuffer;
        object.mtl = original.mtl;
        object.draw = original.draw;
        object.maxBaseSize = original.maxBaseSize;
        object.maxSize = original.maxSize;
        object.shaderProgram = original.shaderProgram;
      };

      obj.position = this.position.copy();
      obj.scaling = this.scaling.copy();
      obj.rotation = this.rotation.copy();

      obj.hide = function () {
        obj.hidden = true;
      };

      obj.show = function () {
        obj.hidden = false;
      };

      obj.hide();
      this.addOnLoadHandler(function () {
        copyAttrs(obj, _this8);

        _this8.engine.objectLoaded(obj);

        obj.show();
      });
      return obj;
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

  return Object;
}(Entity_Entity);



// CONCATENATED MODULE: ./src/Engine.ts











var Engine_Engine =
/*#__PURE__*/
function () {
  function Engine(div) {
    var _this = this;

    classCallCheck_default()(this, Engine);

    defineProperty_default()(this, "div", void 0);

    defineProperty_default()(this, "canvas", void 0);

    defineProperty_default()(this, "webgl", void 0);

    defineProperty_default()(this, "width", void 0);

    defineProperty_default()(this, "height", void 0);

    defineProperty_default()(this, "camera", null);

    defineProperty_default()(this, "debugger", null);

    defineProperty_default()(this, "controls", null);

    defineProperty_default()(this, "lightsPositions", []);

    defineProperty_default()(this, "lightsRanges", []);

    defineProperty_default()(this, "globalLightMinValue", 0.5);

    defineProperty_default()(this, "noTexture", void 0);

    defineProperty_default()(this, "reflections", false);

    defineProperty_default()(this, "status", "Creating");

    defineProperty_default()(this, "selectedObject", null);

    defineProperty_default()(this, "shaders", void 0);

    defineProperty_default()(this, "textures", []);

    defineProperty_default()(this, "lights", []);

    defineProperty_default()(this, "_ui", null);

    defineProperty_default()(this, "_objectsWithoutAlpha", []);

    defineProperty_default()(this, "_objectsWithAlpha", []);

    defineProperty_default()(this, "_resourcesLoaded", false);

    defineProperty_default()(this, "_texturesLoaded", false);

    defineProperty_default()(this, "_objectsLoaded", false);

    defineProperty_default()(this, "_loadedObjectsCount", 0);

    defineProperty_default()(this, "_loadedTexturesCount", 0);

    defineProperty_default()(this, "_onResourcesLoadedHandlers", []);

    defineProperty_default()(this, "_onObjectSelectedHandlers", []);

    defineProperty_default()(this, "_running", false);

    defineProperty_default()(this, "_onRun", []);

    defineProperty_default()(this, "_onFrameHandlers", []);

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
    this.noTexture = new ColorTexture_ColorTexture(this);
    this.infoConsoleLog();
  }

  createClass_default()(Engine, [{
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
      if (object.texture.alpha || object instanceof Object_Object && object.mtl) {
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
    key: "drawToFrameBuffer",
    value: function drawToFrameBuffer(framebuffer, width, height) {
      var update = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var webgl = this.webgl;
      webgl.bindFramebuffer(webgl.FRAMEBUFFER, framebuffer);
      webgl.enable(this.webgl.CULL_FACE);
      webgl.enable(this.webgl.DEPTH_TEST);
      webgl.clearColor(0, 0, 0, 0);
      webgl.clear(webgl.COLOR_BUFFER_BIT | webgl.DEPTH_BUFFER_BIT);
      webgl.viewport(0, 0, width, height);

      if (update) {
        this.update();
      }

      this.draw();
      webgl.bindFramebuffer(webgl.FRAMEBUFFER, null);
      webgl.clearColor(0, 0, 0, 0);
      webgl.clear(webgl.COLOR_BUFFER_BIT | webgl.DEPTH_BUFFER_BIT);
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
    value: function () {
      var _update = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var _this3 = this;

        var i, object, _i, _object, _i2;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(this.camera && this.controls && this.controls.controlFunction)) {
                  _context.next = 10;
                  break;
                }

                this.camera.moving.set(0, 0, 0);
                this.camera.moving.add(this.camera.animatedMoving);
                this.controls.controlFunction();

                if (this["debugger"] != null) {
                  this["debugger"].updateInfo();
                }

                this.camera.isCollision = false;
                this.controls.mouse.movement.x = 0;
                this.controls.mouse.movement.y = 0;
                _context.next = 11;
                break;

              case 10:
                return _context.abrupt("return");

              case 11:
                this.selectedObject = null;

                for (i = this._objectsWithoutAlpha.length; i--;) {
                  object = this._objectsWithoutAlpha[i];
                  object.updateMatrixes();

                  if (this.camera.collisions && object.checkCollision) {
                    object.checkCollision(this.camera.position, this.camera.moving, this.camera.collisionBox, function (coordinate) {
                      _this3.camera.moving[coordinate] = 0;
                      _this3.camera.isCollision = true;
                    });
                  }
                }

                for (_i = this._objectsWithAlpha.length; _i--;) {
                  _object = this._objectsWithAlpha[_i];

                  _object.updateMatrixes();

                  if (this.camera.collisions && _object.checkCollision) {
                    _object.checkCollision(this.camera.position, this.camera.moving, this.camera.collisionBox, function (coordinate) {
                      _this3.camera.moving[coordinate] = 0;
                      _this3.camera.isCollision = true;
                    });
                  }
                }

                this.camera.position.move(this.camera.moving.x, this.camera.moving.y, this.camera.moving.z);
                this.camera.computeMatrix();

                if (this.ui) {
                  this.ui.objects.forEach(function (object) {
                    object.updateMatrixes();
                    object.update();
                  });
                }

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
                  for (_i2 = 0; _i2 < this._onObjectSelectedHandlers.length; _i2++) {
                    this._onObjectSelectedHandlers[_i2]();
                  }
                }

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function update() {
        return _update.apply(this, arguments);
      }

      return update;
    }()
  }, {
    key: "draw",
    value: function () {
      var _draw = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee3() {
        var _this4 = this;

        return regenerator_default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
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

                if (this.ui) {
                  this.ui.draw();
                }

                this.objects.forEach(
                /*#__PURE__*/
                function () {
                  var _ref = asyncToGenerator_default()(
                  /*#__PURE__*/
                  regenerator_default.a.mark(function _callee2(object) {
                    return regenerator_default.a.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return object.draw();

                          case 2:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());

                this._objectsWithAlpha.forEach(function (object) {
                  object.draw();
                });

                if (this.ui) {
                  this.ui.drawUI();
                }

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function draw() {
        return _draw.apply(this, arguments);
      }

      return draw;
    }()
  }, {
    key: "infoConsoleLog",
    value: function infoConsoleLog() {
      console.log();
      console.log("   %c%s", "color: rgba(247, 137, 74, 1); text-align: center; font-size: 16px; font-weight: 700", "Bronze Engine is running");
      console.log();
      console.info("   Version : 0.3.002");
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
  requestAnimationFrame(requestAnimationFrameEngine);

  if (!_engine.running) {
    return;
  }

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
// CONCATENATED MODULE: ./src/Camera.ts








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
   * Vector3 for animated moving.
   */

  /**
   * Collision box for camera.
   */

  /**
   * True if camera have collisions.
   */

  /**
   * True if collision has occurred.
   */
  function Camera(engine) {
    classCallCheck_default()(this, Camera);

    defineProperty_default()(this, "fieldOfView", 90);

    defineProperty_default()(this, "fieldOfViewRad", degToRad(90));

    defineProperty_default()(this, "rotation", new Vector3_Vector3(0, 0, 0));

    defineProperty_default()(this, "range", 20000);

    defineProperty_default()(this, "matrix", unit());

    defineProperty_default()(this, "rotationMatrix", unit());

    defineProperty_default()(this, "inverseMatrix", unit());

    defineProperty_default()(this, "inverseRotationMatrix", unit());

    defineProperty_default()(this, "moved", false);

    defineProperty_default()(this, "moving", new Vector3_Vector3(0, 0, 0));

    defineProperty_default()(this, "animatedMoving", new Vector3_Vector3(0, 0, 0));

    defineProperty_default()(this, "collisionBox", new Entity_CollisionBox());

    defineProperty_default()(this, "collisions", true);

    defineProperty_default()(this, "isCollision", false);

    defineProperty_default()(this, "engine", void 0);

    defineProperty_default()(this, "_position", new Vector3_Vector3(0, 400, 500));

    this.engine = engine;
  }
  /**
   * Camera position.
   * @public
   * @type
   */


  createClass_default()(Camera, [{
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
      this.isCollision = true;
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
      var vec = new Vector3_Vector3(x, y, z);
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

    classCallCheck_default()(this, Controls);

    defineProperty_default()(this, "engine", void 0);

    defineProperty_default()(this, "isFocused", false);

    defineProperty_default()(this, "keys", []);

    defineProperty_default()(this, "mouseOverCanvas", false);

    defineProperty_default()(this, "pointerLocked", false);

    defineProperty_default()(this, "mouse", new Controls_Mouse());

    defineProperty_default()(this, "touch", new Controls_Touch());

    defineProperty_default()(this, "longTouchTime", 500);

    defineProperty_default()(this, "touchDuration", 100);

    defineProperty_default()(this, "controlFunction", null);

    defineProperty_default()(this, "_lockPointer", false);

    defineProperty_default()(this, "_rebind", true);

    defineProperty_default()(this, "_globalRebind", false);

    defineProperty_default()(this, "_handlers", []);

    defineProperty_default()(this, "_focusHandlers", []);

    defineProperty_default()(this, "_blurHandlers", []);

    defineProperty_default()(this, "_focusOnlyIfClick", true);

    defineProperty_default()(this, "_mouseDownHandlers", [null, null, null, null, null, null]);

    defineProperty_default()(this, "_mouseUpHandlers", [null, null, null, null, null, null]);

    engine.controls = this;
    this.engine = engine;

    for (var i = 0; i < 255; i++) {
      this.keys[i] = false;
      this._handlers[i] = null;
    }

    engine.div.onkeydown = function (event) {
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

    engine.div.onkeyup = function (event) {
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
          lastMousePosition = new Vector2_Vector2(x, y);
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
        if (!_this._focusOnlyIfClick || _this.isFocused) {
          if (!_this.pointerLocked) {
            var mousePos = engine.div.getBoundingClientRect();
            var x = event.clientX - mousePos.left;
            var y = event.clientY - mousePos.top;
            _this.mouse.x = x;
            _this.mouse.y = y;

            if (_lastMousePosition == null) {
              _lastMousePosition = new Vector2_Vector2(x, y);
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

          if (!_this._focusOnlyIfClick || !_this.isFocused) {
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
   * Sets mode when user need click to focus canvas.
   */


  createClass_default()(Controls, [{
    key: "clickForFocus",
    value: function clickForFocus(bool) {
      bool = bool || !this._focusOnlyIfClick;
      this._focusOnlyIfClick = bool;
    }
    /**
     * Sets auto focus and deletes click for focus. Canvas always focused.
     */

  }, {
    key: "autoFocus",
    value: function autoFocus() {
      this._focusOnlyIfClick = false;
    }
    /**
     * Set sensitivity for mouse movement.
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
  classCallCheck_default()(this, Mouse);

  defineProperty_default()(this, "x", 0);

  defineProperty_default()(this, "y", 0);

  defineProperty_default()(this, "movement", new Vector2_Vector2(0, 0));

  defineProperty_default()(this, "click", false);

  defineProperty_default()(this, "longClick", false);

  defineProperty_default()(this, "duration", null);

  defineProperty_default()(this, "actionBeforeMove", null);

  defineProperty_default()(this, "sensitivity", 1);

  defineProperty_default()(this, "buttons", [false, false, false]);
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
  classCallCheck_default()(this, Touch);

  defineProperty_default()(this, "x", 0);

  defineProperty_default()(this, "y", 0);

  defineProperty_default()(this, "movement", new Vector2_Vector2(0, 0));

  defineProperty_default()(this, "click", false);

  defineProperty_default()(this, "longClick", false);

  defineProperty_default()(this, "duration", null);

  defineProperty_default()(this, "actionBeforeMove", null);
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
// CONCATENATED MODULE: ./src/ui/UI.ts










/**
 * @class
 * @constructor
 * @param {Engine} e
 */

var UI_UI =
/*#__PURE__*/
function () {
  function UI(engine) {
    classCallCheck_default()(this, UI);

    defineProperty_default()(this, "canvas", void 0);

    defineProperty_default()(this, "div", void 0);

    defineProperty_default()(this, "width", void 0);

    defineProperty_default()(this, "height", void 0);

    defineProperty_default()(this, "centerX", void 0);

    defineProperty_default()(this, "centerY", void 0);

    defineProperty_default()(this, "context", void 0);

    defineProperty_default()(this, "objects", void 0);

    defineProperty_default()(this, "htmlElements", void 0);

    defineProperty_default()(this, "engine", void 0);

    defineProperty_default()(this, "Screen", UI_Screen);

    defineProperty_default()(this, "images", []);

    defineProperty_default()(this, "webgl", void 0);

    defineProperty_default()(this, "_screen", void 0);

    defineProperty_default()(this, "_texture", void 0);

    defineProperty_default()(this, "_webglTexture", void 0);

    defineProperty_default()(this, "frameBuffer", void 0);

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
    this._screen = new UI_Screen(this.engine);
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


  createClass_default()(UI, [{
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
      this.htmlElements.push(new UI_uiHTMLElement(name, element));
      return element;
    }
  }, {
    key: "addImage",
    value: function addImage(image, width, height, x, y) {
      image.width = width;
      image.height = height;
      var uiHTML = new UI_uiHTMLImage('', image, x, y, width, height);
      this.images.push(uiHTML);
      return this.images[this.images.length - 1];
    }
  }, {
    key: "hide",
    value: function hide(element) {
      if (element instanceof SimpleTexture_SimpleTexture) {
        element = element.image;
      } else if (element instanceof UI_uiHTMLElement) {
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
      } else if (element instanceof UI_uiHTMLElement) {
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
    value: function () {
      var _draw = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var _this = this;

        var webgl;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                webgl = this.engine.webgl;
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

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function draw() {
        return _draw.apply(this, arguments);
      }

      return draw;
    }()
  }, {
    key: "drawUI",
    value: function drawUI() {
      this._screen.draw();
    }
  }]);

  return UI;
}();

var UI_Screen =
/*#__PURE__*/
function () {
  function Screen(engine) {
    classCallCheck_default()(this, Screen);

    defineProperty_default()(this, "webgl", void 0);

    defineProperty_default()(this, "engine", void 0);

    defineProperty_default()(this, "shaderProgram", void 0);

    defineProperty_default()(this, "vertexes", void 0);

    defineProperty_default()(this, "textureCoords", void 0);

    defineProperty_default()(this, "vertexesBuffer", void 0);

    defineProperty_default()(this, "coordsBuffer", void 0);

    defineProperty_default()(this, "normalBuffer", void 0);

    defineProperty_default()(this, "texture", void 0);

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

  createClass_default()(Screen, [{
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

var UI_uiHTMLElement =
/*#__PURE__*/
function () {
  function uiHTMLElement(name, el) {
    classCallCheck_default()(this, uiHTMLElement);

    defineProperty_default()(this, "name", void 0);

    defineProperty_default()(this, "el", void 0);

    defineProperty_default()(this, "hidden", false);

    this.name = name;
    this.el = el;
  }

  createClass_default()(uiHTMLElement, [{
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
var UI_uiHTMLImage =
/*#__PURE__*/
function (_uiHTMLElement) {
  inherits_default()(uiHTMLImage, _uiHTMLElement);

  function uiHTMLImage(name, el, x, y, width, height) {
    var _this2;

    classCallCheck_default()(this, uiHTMLImage);

    _this2 = possibleConstructorReturn_default()(this, getPrototypeOf_default()(uiHTMLImage).call(this, name, el));

    defineProperty_default()(assertThisInitialized_default()(_this2), "x", 0);

    defineProperty_default()(assertThisInitialized_default()(_this2), "y", 0);

    defineProperty_default()(assertThisInitialized_default()(_this2), "width", 0);

    defineProperty_default()(assertThisInitialized_default()(_this2), "height", 0);

    _this2.x = x;
    _this2.y = y;
    _this2.width = width;
    _this2.height = height;
    return _this2;
  }

  return uiHTMLImage;
}(UI_uiHTMLElement);
/* harmony default export */ var ui_UI = (UI_UI);
// CONCATENATED MODULE: ./src/debug/Debugger.ts




/**
 * Debugger for engine. Only for development.
 * @param {Engine} engine 
 * @class
 * @constructor
 */
var Debugger_Debugger =
/*#__PURE__*/
function () {
  function Debugger(engine) {
    classCallCheck_default()(this, Debugger);

    defineProperty_default()(this, "logArray", void 0);

    defineProperty_default()(this, "element", void 0);

    engine["debugger"] = this;
    this.logArray = [];
    this.element = null;
  }

  createClass_default()(Debugger, [{
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
  Debugger: Debugger_Debugger
});
// CONCATENATED MODULE: ./src/textures/CubeTexture.ts









/**
 * Cube texture.
 * @class
 */
var CubeTexture_CubeTexture =
/*#__PURE__*/
function (_Texture) {
  inherits_default()(CubeTexture, _Texture);

  function CubeTexture(engine) {
    var _this;

    classCallCheck_default()(this, CubeTexture);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(CubeTexture).call(this, engine));

    defineProperty_default()(assertThisInitialized_default()(_this), "textures", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "_onTextureLoad", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "webgl", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "_loadedTextureCount", 0);

    _this.engine = engine;

    _this.engine.textures.push(assertThisInitialized_default()(_this));

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


  createClass_default()(CubeTexture, [{
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
/* harmony default export */ var textures_CubeTexture = (CubeTexture_CubeTexture);
// CONCATENATED MODULE: ./src/textures/ReflectionTexture.ts









var anotherTextures = [];
var loadedReflectionCount = 0;
/**
 * Reflection texture.
 */

var ReflectionTexture_ReflectionTexture =
/*#__PURE__*/
function (_CubeTexture) {
  inherits_default()(ReflectionTexture, _CubeTexture);

  function ReflectionTexture(engine, background, quality, reflectionAlpha) {
    var _this;

    classCallCheck_default()(this, ReflectionTexture);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(ReflectionTexture).call(this, engine));

    defineProperty_default()(assertThisInitialized_default()(_this), "_background", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "_quality", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "_reflectionAlpha", -1);

    defineProperty_default()(assertThisInitialized_default()(_this), "_object", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "_camera", void 0);

    anotherTextures.push(assertThisInitialized_default()(_this));
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

    _this.engine.textureLoaded(assertThisInitialized_default()(_this));

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

  createClass_default()(ReflectionTexture, [{
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
}(CubeTexture_CubeTexture);
/* harmony default export */ var textures_ReflectionTexture = (ReflectionTexture_ReflectionTexture);
// CONCATENATED MODULE: ./src/objects/Rect.ts








var Rect_Rect =
/*#__PURE__*/
function (_Entity) {
  inherits_default()(Rect, _Entity);

  function Rect(engine) {
    var _this;

    classCallCheck_default()(this, Rect);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Rect).call(this, engine));

    defineProperty_default()(assertThisInitialized_default()(_this), "width", 100);

    defineProperty_default()(assertThisInitialized_default()(_this), "height", 100);

    defineProperty_default()(assertThisInitialized_default()(_this), "name", "Just a rect :)");

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

    _this.engine.objectLoaded(assertThisInitialized_default()(_this));

    return _this;
  }
  /**
   * Scale object.
   * @param x
   * @param y
   */


  createClass_default()(Rect, [{
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
/* harmony default export */ var objects_Rect = (Rect_Rect);
// CONCATENATED MODULE: ./src/objects/Skybox.ts











var Skybox_Skybox =
/*#__PURE__*/
function (_Entity) {
  inherits_default()(Skybox, _Entity);

  function Skybox(engine) {
    var _this;

    classCallCheck_default()(this, Skybox);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Skybox).call(this, engine));
    _this.name = 'Just skybox :)';
    _this.webgl = engine.webgl;
    _this.vertexes = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1];
    _this.shaderProgram = engine.shaders.skybox;
    _this.texture = engine.noTexture;
    _this.vertexesBuffer = _this.webgl.createBuffer();

    _this.webgl.bindBuffer(_this.webgl.ARRAY_BUFFER, _this.vertexesBuffer);

    _this.webgl.bufferData(_this.webgl.ARRAY_BUFFER, new Float32Array(_this.vertexes), _this.webgl.STATIC_DRAW);

    _this.engine.objectLoaded(assertThisInitialized_default()(_this));
    /**
     * Skybox rotation. Angles in radians. Maybe you need setRotation() or rotate() methods? It'd be more convenient to use.
     * @type {Number[]}
     */


    return _this;
  }

  createClass_default()(Skybox, [{
    key: "updateMatrixes",
    value: function () {
      var _updateMatrixes = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var temp, cameraM;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                temp = perspective(this.engine.camera.fieldOfViewRad, this.engine.width, this.engine.height, 1, this.engine.camera.range);
                cameraM = this.engine.camera.inverseRotationMatrix;
                temp = Matrixes4_multiply(temp, cameraM);
                temp = Matrixes4_multiply(temp, Matrixes4_rotation(this.rotation.x, this.rotation.y, this.rotation.z));
                this.matrix = inverse(temp);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateMatrixes() {
        return _updateMatrixes.apply(this, arguments);
      }

      return updateMatrixes;
    }()
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
        new Error_BronzeWarn('Shader program is not set.');
      }
    }
  }]);

  return Skybox;
}(objects_Entity);
// CONCATENATED MODULE: ./src/objects/Grid.ts












/**
 * Rect for using custom shaders
 * @class
 * @constructor
 */
var Grid_Grid =
/*#__PURE__*/
function (_Rect) {
  inherits_default()(Grid, _Rect);

  /**
   * Flat rectangle with square texture.
   * @param engine
   */
  function Grid(engine) {
    var _this;

    classCallCheck_default()(this, Grid);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Grid).call(this, engine));

    defineProperty_default()(assertThisInitialized_default()(_this), "cellSize", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "movingMatrix", []);

    _this.shaderProgram = _this.engine.shaders.grid;
    _this.cellSize = [1000, 1000];
    _this.name = "Just a gird :)";
    return _this;
  }

  createClass_default()(Grid, [{
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
    value: function () {
      var _updateMatrixes = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        var world, rot;
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                world = inverse(translation(this.rotationPoint.x, this.rotationPoint.y, this.rotationPoint.z));
                world = Matrixes4_multiply(world, translation(this.position.x, this.position.y, this.position.z));
                rot = Matrixes4_rotation(this.rotation.x, this.rotation.y, this.rotation.z);
                world = Matrixes4_multiply(world, rot);
                world = Matrixes4_multiply(world, translation(this.rotationPoint.x, this.rotationPoint.y, this.rotationPoint.z));
                world = Matrixes4_multiply(world, translation(-this.minSize.x - (this.maxSize.x - this.minSize.x) / 2, -this.minSize.y - (this.maxSize.y - this.minSize.y) / 2, -this.minSize.z - (this.maxSize.z - this.minSize.z) / 2));
                world = Matrixes4_multiply(world, scaling(this.scaling.x, this.scaling.y, this.scaling.z));
                this.worldMatrix = world;
                this.rotationMatrix = rot;

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateMatrixes() {
        return _updateMatrixes.apply(this, arguments);
      }

      return updateMatrixes;
    }()
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
}(Rect_Rect);
/* harmony default export */ var objects_Grid = (Grid_Grid);
// CONCATENATED MODULE: ./src/lights/Light.ts




var lightsCount = 0;
var Light_Light =
/*#__PURE__*/
function () {
  function Light(engine) {
    classCallCheck_default()(this, Light);

    defineProperty_default()(this, "engine", void 0);

    defineProperty_default()(this, "_position", new Vector3_Vector3(0, 0, 0));

    defineProperty_default()(this, "_range", 2000);

    defineProperty_default()(this, "_color", new Uint8Array([255, 255, 255, 255]));

    defineProperty_default()(this, "_index", -1);

    defineProperty_default()(this, "_on", false);

    defineProperty_default()(this, "_positionsWritten", false);

    defineProperty_default()(this, "_rangeWritten", false);

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


  createClass_default()(Light, [{
    key: "setPosition",
    value: function setPosition(value, y, z) {
      if (value.constructor === Vector3_Vector3) {
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
    key: "destroy",
    value: function destroy() {
      this.off();
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




var Material_Material =
/*#__PURE__*/
function () {
  function Material(engine, object) {
    classCallCheck_default()(this, Material);

    defineProperty_default()(this, "defaultDraw", null);

    defineProperty_default()(this, "engine", void 0);

    defineProperty_default()(this, "_object", void 0);

    defineProperty_default()(this, "webgl", void 0);

    defineProperty_default()(this, "shaderProgram", null);

    this.engine = engine;
    this._object = object || null;
    this.webgl = engine.webgl;
  }

  createClass_default()(Material, [{
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







/**
 * Base class for materials which will attached to objects. 
 * @param {Engine} engine
 * @param {Object} [object]
 */
var Glass_Glass =
/*#__PURE__*/
function (_Material) {
  inherits_default()(Glass, _Material);

  function Glass(engine, object) {
    var _this;

    classCallCheck_default()(this, Glass);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Glass).call(this, engine, object));
    _this.shaderProgram = engine.shaders.reflection;
    return _this;
  }
  /**
   * Draws object using this material.
   * @param {Object} object 
   */


  createClass_default()(Glass, [{
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
  Glass: Glass_Glass
});
// CONCATENATED MODULE: ./src/sounds/Sound.ts



var Sound_Sound =
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

    classCallCheck_default()(this, Sound);

    defineProperty_default()(this, "playing", false);

    defineProperty_default()(this, "audios", void 0);

    defineProperty_default()(this, "_audioCount", void 0);

    defineProperty_default()(this, "_playableAudioIndex", 0);

    defineProperty_default()(this, "_delay", 100);

    defineProperty_default()(this, "_canBePlayed", true);

    defineProperty_default()(this, "_canBePlayedInterval", null);

    defineProperty_default()(this, "_loopInterval", -1);

    defineProperty_default()(this, "_volume", 0.1);

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

  createClass_default()(Sound, [{
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
/* harmony default export */ var sounds_Sound = (Sound_Sound);
// CONCATENATED MODULE: ./src/Bronze.ts
/* concated harmony reexport Engine */__webpack_require__.d(__webpack_exports__, "Engine", function() { return Engine_Engine; });
/* concated harmony reexport Camera */__webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera_Camera; });
/* concated harmony reexport Controls */__webpack_require__.d(__webpack_exports__, "Controls", function() { return Controls_Controls; });
/* concated harmony reexport UI */__webpack_require__.d(__webpack_exports__, "UI", function() { return UI_UI; });
/* concated harmony reexport Debugger */__webpack_require__.d(__webpack_exports__, "Debugger", function() { return Debugger_Debugger; });
/* concated harmony reexport Texture */__webpack_require__.d(__webpack_exports__, "Texture", function() { return Texture_Texture; });
/* concated harmony reexport ColorTexture */__webpack_require__.d(__webpack_exports__, "ColorTexture", function() { return ColorTexture_ColorTexture; });
/* concated harmony reexport SimpleTexture */__webpack_require__.d(__webpack_exports__, "SimpleTexture", function() { return SimpleTexture_SimpleTexture; });
/* concated harmony reexport CubeTexture */__webpack_require__.d(__webpack_exports__, "CubeTexture", function() { return CubeTexture_CubeTexture; });
/* concated harmony reexport ReflectionTexture */__webpack_require__.d(__webpack_exports__, "ReflectionTexture", function() { return ReflectionTexture_ReflectionTexture; });
/* concated harmony reexport Entity */__webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity_Entity; });
/* concated harmony reexport CollisionBox */__webpack_require__.d(__webpack_exports__, "CollisionBox", function() { return Entity_CollisionBox; });
/* concated harmony reexport Object */__webpack_require__.d(__webpack_exports__, "Object", function() { return Object_Object; });
/* concated harmony reexport Rect */__webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect_Rect; });
/* concated harmony reexport Skybox */__webpack_require__.d(__webpack_exports__, "Skybox", function() { return Skybox_Skybox; });
/* concated harmony reexport Grid */__webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid_Grid; });
/* concated harmony reexport Light */__webpack_require__.d(__webpack_exports__, "Light", function() { return Light_Light; });
/* concated harmony reexport Material */__webpack_require__.d(__webpack_exports__, "Material", function() { return Material_Material; });
/* concated harmony reexport Glass */__webpack_require__.d(__webpack_exports__, "Glass", function() { return Glass_Glass; });
/* concated harmony reexport Sound */__webpack_require__.d(__webpack_exports__, "Sound", function() { return Sound_Sound; });
/* concated harmony reexport Math */__webpack_require__.d(__webpack_exports__, "Math", function() { return Mathematics_namespaceObject; });
/* concated harmony reexport Vector3 */__webpack_require__.d(__webpack_exports__, "Vector3", function() { return Vector3_namespaceObject; });
/* concated harmony reexport Matrixes4 */__webpack_require__.d(__webpack_exports__, "Matrixes4", function() { return Matrixes4_namespaceObject; });
/* concated harmony reexport Vector2 */__webpack_require__.d(__webpack_exports__, "Vector2", function() { return Vector2_namespaceObject; });

























/***/ })
/******/ ]);
});