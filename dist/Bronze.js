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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 1 */
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
/* 2 */
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
/* 3 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(11);

var assertThisInitialized = __webpack_require__(12);

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

var setPrototypeOf = __webpack_require__(2);

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
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(3);

var setPrototypeOf = __webpack_require__(2);

var isNativeFunction = __webpack_require__(13);

var construct = __webpack_require__(14);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = function () {
  return this || typeof self === "object" && self;
}() || Function("return this")(); // Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.


var hadRuntime = g.regeneratorRuntime && Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0; // Save the old regeneratorRuntime in case it needs to be restored later.

var oldRuntime = hadRuntime && g.regeneratorRuntime; // Force reevalutation of runtime.js.

g.regeneratorRuntime = undefined;
module.exports = __webpack_require__(10);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch (e) {
    g.regeneratorRuntime = undefined;
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function (global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;

  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    } // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.


    return;
  } // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.


  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
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
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};

  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      prototype[method] = function (arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  runtime.mark = function (genFun) {
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
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  runtime.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
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
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };

  runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  runtime.async = function (innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
    return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
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
        } // Be forgiving, per 25.3.3.3.3 of the spec:
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
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
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
        if (delegate.iterator.return) {
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
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
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

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
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
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  Gp[iteratorSymbol] = function () {
    return this;
  };

  Gp.toString = function () {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

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
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
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
        var i = -1,
            next = function next() {
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
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  runtime.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
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
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function () {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function (exception) {
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

        return !!caught;
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
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
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
    complete: function (record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
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
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function (tryLoc) {
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
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
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
}( // In sloppy mode, unbound `this` refers to the global object, fallback to
// Function constructor if we're in global strict mode. That is sadly a form
// of indirect eval which violates Content Security Policy.
function () {
  return this || typeof self === "object" && self;
}() || Function("return this")());

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _typeof2(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof2 = function _typeof2(obj) {
      return typeof obj;
    };
  } else {
    _typeof2 = function _typeof2(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof2(obj);
}

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
/* 12 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(2);

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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/math/Math.js
/** @module Math */

/**
 * Converting radians to degrees.
 * @param {Number} radians
 * @return {Number} degrees
 */
function radToDeg(radians) {
  return radians * 180 / Math.PI;
}
/**
 * Converting degrees to radians.
 * @param {Number} degrees
 * @return {Number} radians
 */

function degToRad(degrees) {
  return degrees * Math.PI / 180;
}
/**
 * Returns true if value is square.
 * @param {Number} value 
 */

function isPowerOf2(value) {
  return (value & value - 1) === 0;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(0);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(1);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// CONCATENATED MODULE: ./src/math/Matrixes.js



/** @module Matrixes */

/**
 * Matrix class with math matrix methods.
 * @class
 * @constructor
 * @public
 */
var Matrixes_Matrix =
/*#__PURE__*/
function () {
  function Matrix() {
    classCallCheck_default()(this, Matrix);

    this.matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
    return this;
  }
  /**
   * Setting this matrix as perspective projection matrix.
   * @param {Number} fieldOfViewInRadians fieldOfView of camera.
   * @param {Number} width canvas width.
   * @param {Number} height canvas height.
   * @param {Number} near range of drawn z-coordinates start.
   * @param {Number} far range of drawn z-coordinates end.
   * @public
   */


  createClass_default()(Matrix, [{
    key: "perspective",
    value: function perspective(fieldOfViewInRadians, width, height, near, far) {
      var f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewInRadians);
      var rangeInv = 1.0 / (near - far);
      this.matrix = [f / (width / height), 0, 0, 0, 0, f, 0, 0, 0, 0, (near + far) * rangeInv, -1, 0, 0, near * far * rangeInv * 2, 0];
      return this;
    }
    /**
     * Multiplying this matrix by another.
     * @param {Array} matrix 
     * @public
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
     * Return multiply this matrix by another.
     * @param {Array} matrix
     * @return {Array} result of multiply.
     * @public
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
     * Multiplying matrix by transition matrix (x, y, z).
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */

  }, {
    key: "translate",
    value: function translate(x, y, z) {
      this.multiply(translation(x, y, z));
    }
    /**
     * Multiplying matrix by transition matrix (x, y, z).
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */

  }, {
    key: "translate_",
    value: function translate_(x, y, z) {
      return this.multiply_(translation(x, y, z));
    }
    /**
     * Multiplying matrix by rotationX(angle).
     * @param {Number} angle in radians.
     * @public
     */

  }, {
    key: "rotateX",
    value: function rotateX(angle) {
      this.multiply(rotationX(angle));
    }
    /**
     * Multiplying matrix by rotationY(angle).
     * @param {Number} angle in radians.
     * @public
     */

  }, {
    key: "rotateY",
    value: function rotateY(angle) {
      this.multiply(rotationY(angle));
    }
    /**
     * Multiplying matrix by rotationZ(angle).
     * @param {Number} angle in radians.
     * @public
     */

  }, {
    key: "rotateZ",
    value: function rotateZ(angle) {
      this.multiply(rotationZ(angle));
    }
    /**
     * Multiplying matrix by scale matrix (x, y, z).
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */

  }, {
    key: "scale",
    value: function scale(x, y, z) {
      this.multiply(scaling(x, y, z));
    }
  }]);

  return Matrix;
}();
/**
 * Returns unit matrix.
 * @returns {Array}
 * @public
 */

function unit() {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
/**
 * Returns translation matrix.
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} z 
 * @returns {Array}
 * @public
 */

function translation(x, y, z) {
  return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, x, y, z, 1];
}
/**
 * Returns rotation matrix for x axis.
 * @param {Number} angle angle in radians.
 * @returns {Array}
 * @public
 */

function rotationX(angle) {
  var c = Math.cos(angle);
  var s = Math.sin(angle);
  return [1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1];
}
/**
 * Returns rotation matrix for y axis.
 * @param {Number} angle angle in radians.
 * @returns {Array}
 * @public
 */

function rotationY(angle) {
  var c = Math.cos(angle);
  var s = Math.sin(angle);
  return [c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1];
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
  return [c, s, 0, 0, -s, c, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
}
/**
 * Returns scaling matrix for every axis.
 * @param {Number} x 
 * @param {Number} y 
 * @param {Number} z 
 * @returns {Array}
 * @public
 */

function scaling(x, y, z) {
  return [x, 0, 0, 0, 0, y, 0, 0, 0, 0, z, 0, 0, 0, 0, 1];
}
/**
 * Returns multiply of two matrixes.
 * @param {Array} matrix1 
 * @param {Array} matrix2 
 * @returns {Array}
 * @public
 */

function multiply(matrix1, matrix2) {
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
 * 
 * @param {Array} matrix
 * @param {Array} vector4
 * 
 * @returns {Array} [x, y, z, w] result of multiplying matrix and vector.
 * @public
 */

function vec3Multiply(matrix, vector4) {
  // c11 = a11 · b11 + a12 · b21 + a13 · b31 + a14 · b41
  // c21 = a21 · b11 + a22 · b21 + a23 · b31 + a24 · b41
  // c31 = a31 · b11 + a32 · b21 + a33 · b31 + a34 · b41
  // c41 = a41 · b11 + a42 · b21 + a43 · b31 + a44 · b41
  // console.log(matrix[0] * vector4[0] )
  var c1 = matrix[0] * vector4[0] + matrix[1] * vector4[1] + matrix[2] * vector4[2] + matrix[3] * vector4[3];
  var c2 = matrix[4] * vector4[0] + matrix[5] * vector4[1] + matrix[6] * vector4[2] + matrix[7] * vector4[3];
  var c3 = matrix[8] * vector4[0] + matrix[9] * vector4[1] + matrix[10] * vector4[2] + matrix[11] * vector4[3];
  var c4 = matrix[12] * vector4[0] + matrix[13] * vector4[1] + matrix[14] * vector4[2] + matrix[15] * vector4[3];
  return [c1, c2, c3, c4];
}
function transformVector(matrix, vector) {
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
 * @param {Array} matrix matrix to compute inverse of.
 * @return {Array} new result matrix.
 * @public
 */

function inverse(matrix) {
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
// CONCATENATED MODULE: ./src/math/Vectors.js
/** @module Vectors */

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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(4);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

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
 * @param {String} type type of shader.
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
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(6);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(3);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(7);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js
var wrapNativeSuper = __webpack_require__(8);
var wrapNativeSuper_default = /*#__PURE__*/__webpack_require__.n(wrapNativeSuper);

// CONCATENATED MODULE: ./src/Texture.js







/**
 * Texture for polygons or objects.
 * @class
 * @constructor
 * @param {String} path - path to image location.
 * @param {Number} [width] - custom width for image.
 * @param {Number} [height] - custom height for image.
 */
var Texture_Texture =
/*#__PURE__*/
function (_Image) {
  inherits_default()(Texture, _Image);

  function Texture(path, width, height) {
    var _this;

    classCallCheck_default()(this, Texture);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Texture).call(this));
    _this.src = path;

    if (width != null && height != null) {
      _this.width = width;
      _this.height = height;
    }
    /**
     * Texture coordinates.
     * @private
     */


    _this.coords = [];

    _this.addEventListener('load', function () {
      _this.loaded = true;
    });
    /**
     * Color of texture. Texture drawing with color if image was not set.
     * @readonly
     */


    _this.color = new Uint8Array([255, 255, 255, 255]);
    /**
     * Location of texture block in engine.
     * @private
     */

    _this._textureBlockLocation = null;
    return _this;
  }
  /**
   * Scale image width by x, height by y.
   * @param {Number} x
   * @param {Number} y
   * @public
   */


  createClass_default()(Texture, [{
    key: "scale",
    value: function scale(x, y) {
      this.width = width * x;
      this.height = height * y;
    }
    /**
     * Setting texture coords.
     * @param {Array} coords 
     * @public
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
     * @public
     */

  }, {
    key: "setColorRGBA",
    value: function setColorRGBA(r, g, b, a) {
      this.color = new Uint8Array([r, g, b, a]);
    }
  }]);

  return Texture;
}(wrapNativeSuper_default()(Image));


// CONCATENATED MODULE: ./src/objects/Object.js



/**
* Creates and bind to engine object. The object must be loaded from .obj file.
* @class
* @constructor
* @param {Engine} engine 
*/

var Object_Object =
/*#__PURE__*/
function () {
  function Object(engine) {
    classCallCheck_default()(this, Object);

    engine.objects.push(this);
    /**
     * Engine where object attached.
     * @type {Engine}
     * @private
     */

    this.engine = engine;
    /**
     * WebGL context of engine
     * @private
     */

    this.webGL = engine.webGL;
    /**
     * Camera of engine.
     * @type {Camera}
     * @private
     */

    this.camera = engine.camera;
    /**
     * Object texture.
     * @type {Texture} texture
     * @public
     */

    this.texture = engine.noTexture;
    /**
     * Object position vector. Maybe you need setPosition(), move() or moveRelativeToTheCamera() methods? It'd be more convenient to use.
     * @public
     * @type {Array.<{0: Number, 1: Number, 2: Number}>} vector 3 array
     * @property {Number} x position on axis x
     * @property {Number} y position on axis y
     * @property {Number} z position on axis z
     */

    this.position = [0, 0, 0];
    /**
     * Object rotation vector. Angles in radians. Maybe you need setRotation() or rotate() methods? It'd be more convenient to use.
     * @public
     * @type {Array.<{0: Number, 1: Number, 2: Number}>} vector 3 array
     * @property {Number} x rotation on axis x
     * @property {Number} y rotation on axis y
     * @property {Number} z rotation on axis z
     */

    this.rotation = [0, 0, 0];
    /**
     * Object scaling vector. Maybe you need scale() method? It'd be more convenient to use.
     * @public
     * @type {Array.<{0: Number, 1: Number, 2: Number}>} vector 3 array
     * @property {Number} x scaling on axis x
     * @property {Number} y scaling on axis x
     * @property {Number} z scaling on axis x
     */

    this.scaling = [1, 1, 1];
    /**
     * Object scaling vector. Angles in radians. Maybe you need setRotationPoint() method? It'd be more convenient to use.
     * @public
     * @type {Array.<{0: Number, 1: Number, 2: Number}>} vector 3 array
     * @property {Number} x rotation point coordinate on axis x
     * @property {Number} y rotation point coordinate on axis y
     * @property {Number} z rotation point coordinate on axis z
     */

    this.rotationPoint = [0, 0, 0];
    /**
     * Object scaling vector. Angles in radians. Maybe you need setParentRotation() method? It'd be more convenient to use.
     * @public
     * @type {Array.<{0: Number, 1: Number, 2: Number}>} vector 3 array
     * @property {Number} x parent rotation on axis x
     * @property {Number} y parent rotation on axis y
     * @property {Number} z parent rotation on axis z
     */

    this.parentRotation = [0, 0, 0];
    /**
     * These are the edges of the object on the monitor.
     * @readonly
     * @Type {Object}   
     * @property {Number} relativeCameraPosition.x.left
     * @property {Number} relativeCameraPosition.x.right
     * @property {Number} relativeCameraPosition.y.top
     * @property {Number} relativeCameraPosition.y.bottom
     * @property {Number} relativeCameraPosition.depth
     */

    this.relativeCameraPosition = null;
    /**
     * Faces of object. Needs to draw object. Creates when object is compiled.
     * @readonly
     * @type {Array}
     */

    this.faces = [];
    /**
     * Collision boxes coordinates array.
     * @type {
     *      x: Number[2],
     *      y: Number[2],
     *      z: Number[2]
     *  }
     * @property {Number[]} collisionBoxes.x contains array[2] of left and right x coords.
     * @property {Number[]} collisionBoxes.y contains array[2] of bottom and top y coords.
     * @property {Number[]} collisionBoxes.z contains array[2] of far and close z coords.
     * @public
     */

    this.collisionBoxes = [];
    /**
     * Sets whether the object will be attached to the camera like UI element.
     * @type {boolean}
     * @public
     */

    this.UIElement = false;
  }
  /**
   * Setting texture for object.
   * @param {Texture} texture 
   * @public
   */


  createClass_default()(Object, [{
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
     * @public
     */

  }, {
    key: "setPosition",
    value: function setPosition(x, y, z) {
      this.position[0] = x;
      this.position[1] = y;
      this.position[2] = z;
    }
    /**
     * Adds values to position which moves object.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */

  }, {
    key: "move",
    value: function move(x, y, z) {
      this.position[0] += x;
      this.position[1] += y;
      this.position[2] += z;
    }
    /**
     * Moves object around x, y, z axis relative to the camera angles.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */

  }, {
    key: "moveRelativeToTheCamera",
    value: function moveRelativeToTheCamera(x, y, z) {
      var pos = [x, y, z, 1];
      pos = vec3Multiply(this.camera.inventedMatrix, pos);
      this.position[0] += pos[0];
      this.position[1] += pos[1];
      this.position[2] += pos[2];
    }
    /**
     * Add rotation for x, y, z axis for current rotation.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z
     * @public
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
     * @public 
     */

  }, {
    key: "setRotation",
    value: function setRotation(x, y, z) {
      this.rotation[0] = x;
      this.rotation[1] = y;
      this.rotation[2] = z;
    }
    /**
     * Setting coordinates for rotation point.
     * @param {Number} x
     * @param {Number} y 
     * @param {Number} z
     * @public
     */

  }, {
    key: "setRotationPoint",
    value: function setRotationPoint(x, y, z) {
      this.rotationPoint = [x, y, z];
    }
    /**
     * Setting rotation values of parent object.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z
     * @public
     */

  }, {
    key: "setParentRotation",
    value: function setParentRotation(x, y, z) {
      this.parentRotation = [x, y, z];
    }
    /**
     * Set scaling for object.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */

  }, {
    key: "scale",
    value: function scale(x, y, z) {
      this.scaling = [x, y, z];
    }
    /**
     * Default animation function.
     * @private
     */

  }, {
    key: "animation",
    value: function animation() {
      this.rotate(0, 0, 0);
    }
    /**
     * Sets the animation function which execute every engine update.
     * @param {Number} fps
     * @param {Function} [animateFunction] default - animation function.
     * @public
     */

  }, {
    key: "animate",
    value: function animate(fps, animateFunction) {
      animateFunction = animateFunction || this.animation;
      setInterval(animateFunction, 1000 / fps);
    }
    /**
     * Function detaches from engine. If you need to clean memory, you this method and then you default javascript operator `delete`.
     * @public
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this.engine.splice(this.engine.objects.indexOf(this), 1);
    }
    /**
     * Function to compile object from text of .obj file.
     * @param {String} fileText
     * @public
     */

  }, {
    key: "compile",
    value: function compile(fileText) {
      var _this = this;

      var vertexes = [];
      var textureCoords = [];
      var normals = [];
      var splitted = fileText.split('\n');
      var collisionBox = {
        x: [0, 0],
        y: [0, 0],
        z: [0, 0]
      };
      splitted.forEach(function (element) {
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
     * @public
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
// CONCATENATED MODULE: ./src/map/Map.js



var Map_Map =
/*#__PURE__*/
function () {
  function Map(engine) {
    classCallCheck_default()(this, Map);

    this.engine = engine;
    this.objects = [];
    this.lands = [];
    this.camera;
  }

  createClass_default()(Map, [{
    key: "createObject",
    value: function createObject() {
      var object = new Object_Object(engine);
      this.engine.objects.push(object);
      return object;
    }
  }, {
    key: "addObject",
    value: function addObject(object) {
      this.objects.push(object);
    }
  }, {
    key: "removeObject",
    value: function removeObject(object) {
      var index = this.objects.indexOf(object);
      if (index == -1) return false;
      this.objects.splice(index, 1);
      return true;
    }
  }, {
    key: "removeObjectByName",
    value: function removeObjectByName(name) {
      var _this = this;

      this.objects.forEach(function (object) {
        if (object.name == name) {
          _this.removeObject(object);

          return true;
        }
      });
      return false;
    }
  }]);

  return Map;
}();
// CONCATENATED MODULE: ./src/Engine.js










/* babel-plugin-inline-import './shaders/fragment-shader.glsl' */
var fragmentShaderSource = "precision mediump float;\r\n\r\nvarying vec2 v_texcoord;\r\nvarying vec3 v_normal;\r\n\r\nuniform sampler2D u_texture;\r\nuniform vec3 u_reverseLightDirection;\r\nvarying vec3 v_surfaceToLight;\r\n\r\nvoid main() {\r\n    vec3 normal = normalize(v_normal);\r\n    // float light = dot(normal, u_reverseLightDirection);\r\n    vec3 surfaceToLightDirection = normalize(v_surfaceToLight);\r\n    float light = dot(v_normal, surfaceToLightDirection);\r\n    if (light < 0.5)\r\n        light = 0.5;\r\n    \r\n    gl_FragColor = texture2D(u_texture, v_texcoord);\r\n    gl_FragColor.rgb *= (light);\r\n    if(gl_FragColor.a < 0.2)\r\n        discard;\r\n}";

/* babel-plugin-inline-import './shaders/vertex-shader.glsl' */
var vertexShaderSource = "attribute vec4 a_position;\r\nattribute vec2 a_texcoord;\r\nattribute vec4 a_normal;\r\n\r\nuniform mat4 u_matrix;\r\nuniform mat4 u_objectRotation;\r\nuniform vec3 u_lightWorldPosition;\r\nuniform mat4 u_cameraMatrix;\r\n\r\nvarying vec2 v_texcoord;\r\nvarying vec3 v_normal;\r\nvarying vec3 v_surfaceToLight;\r\n\r\n\r\nvoid main() {\r\n    gl_Position = u_matrix * a_position;\r\n    \r\n    v_texcoord = a_texcoord;\r\n    v_normal = vec3(u_objectRotation * a_normal);\r\n\r\n    vec3 surfaceWorldPosition = (u_cameraMatrix * a_position).xyz;\r\n    \r\n    v_surfaceToLight = u_lightWorldPosition; // - surfaceWorldPosition;\r\n}";

/**
 * GameEngine core class.
 * @class
 * @constructor
 * @param {HTMLElement|HTMLCanvasElement} canvas
 */

var Engine_Engine =
/*#__PURE__*/
function () {
  function Engine(canvas) {
    classCallCheck_default()(this, Engine);

    /**
     * WebGL context of canvas
     * @private
     */
    this.webGL = getWebGL(canvas);
    /**
     * Canvas for drawing.
     * @readonly
     */

    this.canvas = canvas;
    /**
     * Width of drawing resolution
     * @type {Number}
     */

    this.width = canvas.width;
    /**
     * Height of drawing resolution.
     * @type {Number}
     */

    this.height = canvas.height;
    /**
     * @type {Polygon[]}
     * @private
     */

    this.polygons = [];
    /**
     * Array of objects in engine. You can remove objects. Get them by index. But do not add objects to array - use new Object()
     * @type {Objects[]}
     * @public
     */

    this.objects = [];
    /**
     * @type {Object}
     * @property {Array} ui.objects
     * @public
     */

    this.ui = {
      objects: []
      /**
       * @type {Array.<{Texture}>}
       * @private
       */

    };
    this.textures = [];
    /**
     * The camera that is attached to the engine.
     * @type {Camera}
     * @public
     */

    this.camera = null;
    /**
     * The debugger that is attached to the engine.
     * @type {Debugger}
     * @public
     */

    this.debugger = null;
    /**
     * The controls that is attached to the engine.
     * @type {Controls}
     * @public
     */

    this.controls = null;
    /**
     * An object that is under the cursor now.
     * @type {Object}
     * @readonly
     */

    this.selectedObject = null;
    this._globalPositionBuffer = this.webGL.createBuffer();
    this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._globalPositionBuffer);
    this._globalTextureBuffer = this.webGL.createBuffer();
    this.webGL.bindBuffer(this.webGL.ARRAY_BUFFER, this._globalTextureBuffer);

    this._initShaders();
    /**
     * Default texture for all object.
     * @type {Texture}
     * @public
     */


    this.noTexture = new Texture_Texture();
    this.noTexture.setColorRGBA(219, 58, 52, 255);
    this.bindTexture(this.noTexture);
    /**
     * Execute every time when object is selected
     * @type {Function}
     * @private
     */

    this._objectSelectHandler;
  }
  /**
   * Creating shaders and attaching to webGL context.
   * @private
   */


  createClass_default()(Engine, [{
    key: "_initShaders",
    value: function _initShaders() {
      var vertex = compileShader(vertexShaderSource, "vertex", this.webGL);
      var fragment = compileShader(fragmentShaderSource, "fragment", this.webGL);
      this.shaderProgram = createWebGLProgram(this.webGL, vertex, fragment, false);
      this.positionLocation = this.webGL.getAttribLocation(this.shaderProgram, "a_position");
      this.textureCoordinatesLocation = this.webGL.getAttribLocation(this.shaderProgram, "a_texcoord");
      this.textureLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_texture");
      this.matrixLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_matrix");
      this.objectRotationLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_objectRotation");
      this.normalLocation = this.webGL.getAttribLocation(this.shaderProgram, "a_normal");
      this.reverseLightDirectionLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_reverseLightDirection");
      this.lightWorldPositionLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_lightWorldPosition");
      this.cameraLocation = this.webGL.getUniformLocation(this.shaderProgram, "u_cameraMatrix");
      this.webGL.useProgram(this.shaderProgram);
      this.webGL.viewport(0, 0, this.width, this.height);
      this.webGL.enable(this.webGL.CULL_FACE);
      this.webGL.enable(this.webGL.DEPTH_TEST);
    }
    /**
     * Setting a camera to the engine. There are can be only one camera.
     * @param {Camera} camera
     * @public
     */

  }, {
    key: "setCamera",
    value: function setCamera(camera) {
      this.camera = camera;
    }
    /**
     * Update drawing parameters for correct drawing resized canvas.
     * @public
     */

  }, {
    key: "canvasResized",
    value: function canvasResized() {
      this.canvas.width = this.canvas.clientWidth;
      this.canvas.height = this.canvas.clientHeight;
      this.width = this.canvas.clientWidth;
      this.height = this.canvas.clientHeight;
      this.webGL.viewport(0, 0, this.width, this.height);
    }
    /**
     * Sets function when object is selected.
     * @param {Function(object)} handler
     * @public
     */

  }, {
    key: "onObjectSelect",
    value: function onObjectSelect(handler) {
      this._objectSelectHandler = handler;
    }
    /**
     * Binding texture to engine.
     * @param {Texture} texture 
     * @public
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
     * @private
     */

  }, {
    key: "_update",
    value: function _update() {
      var _this2 = this;

      var temp;
      var rot;
      var parentRot;
      var world;

      if (this.camera._controlFunction != null) {
        this.camera._controlFunction();

        this.controls.mouse.movement.x = 0;
        this.controls.mouse.movement.y = 0;
      }

      this.selectedObject = null;
      this.polygons.forEach(function (element) {
        temp = new Matrixes_Matrix();
        temp.perspective(_this2.camera.fieldOfViewRad, _this2.width, _this2.height, 1, 20000);
        temp.multiply(_this2.camera.inventedMatrix);
        world = new Matrixes_Matrix();
        world.multiply(inverse(translation(element.rotationPoint[0], element.rotationPoint[1], element.rotationPoint[2])));
        world.translate(element.position[0], element.position[1], element.position[2]);
        rot = multiply(rotationX(element.rotation[0]), rotationY(element.rotation[1]));
        rot = multiply(rot, rotationZ(element.rotation[2]));

        if (element.parentRotation != null) {
          parentRot = multiply(rotationX(element.parentRotation[0]), rotationY(element.parentRotation[1]));
          parentRot = multiply(parentRot, rotationZ(element.parentRotation[2]));
          element._world = parentRot;
          rot = multiply(parentRot, rot);
        }

        world.multiply(rot);
        world.translate(element.rotationPoint[0], element.rotationPoint[1], element.rotationPoint[2]);
        world.scale(1, 1, 1);
        temp.multiply(world.matrix);
        element._matrix = temp.matrix;
        element._rotationMatrix = rot;
      });
      var selectedObject = null;
      this.objects.forEach(function (element) {
        temp = new Matrixes_Matrix();
        temp.perspective(_this2.camera.fieldOfViewRad, _this2.width, _this2.height, 1, 20000);

        if (!element.UIElement) {
          temp.multiply(_this2.camera.inventedMatrix);
        }

        world = new Matrixes_Matrix();
        world.multiply(inverse(translation(element.rotationPoint[0], element.rotationPoint[1], element.rotationPoint[2])));
        world.translate(element.position[0], element.position[1], element.position[2]);
        rot = multiply(rotationX(element.rotation[0]), rotationY(element.rotation[1]));
        rot = multiply(rot, rotationZ(element.rotation[2]));
        parentRot = multiply(rotationX(element.parentRotation[0]), rotationY(element.parentRotation[1]));
        parentRot = multiply(parentRot, rotationZ(element.parentRotation[2]));
        element._world = parentRot;
        rot = multiply(parentRot, rot);
        world.multiply(rot);
        world.translate(element.rotationPoint[0], element.rotationPoint[1], element.rotationPoint[2]);
        world.scale(element.scaling[0], element.scaling[1], element.scaling[2]);
        temp.multiply(world.matrix);

        if (!element.UIElement) {
          var mouseOverHitBox = false;
          element.collisionBoxes.forEach(function (collisionBox) {
            var boxInPixels = [];

            for (var ix = 0; ix < collisionBox.x.length; ix++) {
              var x = collisionBox.x[ix];

              for (var iy = 0; iy < collisionBox.y.length; iy++) {
                var y = collisionBox.y[iy];

                for (var iz = 0; iz < collisionBox.z.length; iz++) {
                  var z = collisionBox.z[iz];
                  var coordsInPixels = transformVector(temp.matrix, [x, y, z, 1]);
                  coordsInPixels[0] = coordsInPixels[0] / coordsInPixels[3];
                  coordsInPixels[1] = coordsInPixels[1] / coordsInPixels[3];
                  coordsInPixels[0] = (coordsInPixels[0] * 0.5 + 0.5) * _this2.width;
                  coordsInPixels[1] = (coordsInPixels[1] * -0.5 + 0.5) * _this2.height;
                  coordsInPixels[0] = coordsInPixels[0] < 0 ? 0 : coordsInPixels[0];
                  coordsInPixels[1] = coordsInPixels[1] < 0 ? 0 : coordsInPixels[1];
                  coordsInPixels[0] = coordsInPixels[0] > _this2.width ? _this2.width : coordsInPixels[0];
                  coordsInPixels[1] = coordsInPixels[1] > _this2.height ? _this2.height : coordsInPixels[1];

                  if (coordsInPixels[2] >= 0) {
                    boxInPixels.push(coordsInPixels);
                  }
                }
              }
            }

            var smallest = [10000, 10000, -1000];
            var biggest = [-10000, -10000];

            for (var i = 0; i < boxInPixels.length; i++) {
              var box = boxInPixels[i];

              if (box[0] < smallest[0]) {
                smallest[0] = box[0];
              } else if (box[0] > biggest[0]) {
                biggest[0] = box[0];
              }

              if (box[1] < smallest[1]) {
                smallest[1] = box[1];
              } else if (box[1] > biggest[1]) {
                biggest[1] = box[1];
              }

              if (box[2] > smallest[2]) {
                smallest[2] = box[2];
              }
            }

            element.relativeCameraPosition = {
              x: {
                left: smallest[0],
                right: biggest[0]
              },
              y: {
                top: biggest[1],
                bottom: smallest[1]
              },
              depth: smallest[2]
            };

            if (_this2.controls.mouse.x > smallest[0] && _this2.controls.mouse.x < biggest[0] && _this2.controls.mouse.y > smallest[1] && _this2.controls.mouse.y < biggest[1]) {
              mouseOverHitBox = true;
            }

            var mouse = _this2.controls.mouse;

            if (mouseOverHitBox) {
              if (selectedObject == null) {
                selectedObject = element;
              }

              if (selectedObject.relativeCameraPosition.depth >= smallest[2]) {
                selectedObject = element;
              }
            }
          });
        }

        _this2.selectedObject = selectedObject;

        if (!element.UIElement && !_this2.selectedObject && _this2._objectSelectHandler != null) {
          _this2._objectSelectHandler(selectedObject);
        }

        element._matrix = temp.matrix;
        element._rotationMatrix = rot;
      });
    }
    /**
     * Main drawing function. All polygons are drawn here.
     * @private
     */

  }, {
    key: "_draw",
    value: function _draw() {
      var _this3 = this;

      this.webGL.clear(this.webGL.COLOR_BUFFER_BIT | this.webGL.DEPTH_BUFFER_BIT);
      this.webGL.uniform3fv(this.reverseLightDirectionLocation, Vectors_normalize([-0.1, 0.5, 1]));
      this.webGL.uniform3fv(this.lightWorldPositionLocation, [0, 100, 400]);
      this.webGL.uniformMatrix4fv(this.cameraLocation, false, this.camera.matrix);
      this.polygons.forEach(function (element) {
        _this3.webGL.enableVertexAttribArray(_this3.positionLocation);

        _this3.webGL.bindBuffer(_this3.webGL.ARRAY_BUFFER, element._vertexesBuffer);

        _this3.webGL.vertexAttribPointer(_this3.positionLocation, 3, _this3.webGL.FLOAT, false, 0, 0);

        _this3.webGL.enableVertexAttribArray(_this3.textureCoordinatesLocation);

        _this3.webGL.bindBuffer(_this3.webGL.ARRAY_BUFFER, element._coordsBuffer);

        _this3.webGL.vertexAttribPointer(_this3.textureCoordinatesLocation, 2, _this3.webGL.FLOAT, false, 0, 0);

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

          _this3.webGL.enableVertexAttribArray(_this3.textureCoordinatesLocation);

          _this3.webGL.bindBuffer(_this3.webGL.ARRAY_BUFFER, face.coordsBuffer);

          _this3.webGL.vertexAttribPointer(_this3.textureCoordinatesLocation, 2, _this3.webGL.FLOAT, false, 0, 0);

          _this3.webGL.enableVertexAttribArray(_this3.normalLocation);

          _this3.webGL.bindBuffer(_this3.webGL.ARRAY_BUFFER, face.normalBuffer);

          _this3.webGL.vertexAttribPointer(_this3.normalLocation, 3, _this3.webGL.FLOAT, false, 0, 0);

          _this3.webGL.uniform1i(_this3.textureLocation, o.texture._textureBlockLocation);

          _this3.webGL.uniformMatrix4fv(_this3.matrixLocation, false, o._matrix);

          _this3.webGL.uniformMatrix4fv(_this3.objectRotationLocation, false, o._world);

          _this3.webGL.drawArrays(_this3.webGL.TRIANGLES, 0, face.vertexes.length / face.vertexesCount);
        });

        _this3.webGL.enable(_this3.webGL.DEPTH_TEST);
      });
      this.ui.objects.forEach(function (o) {
        o.faces.forEach(function (face) {
          // console.log(face)
          _this3.webGL.enableVertexAttribArray(_this3.positionLocation);

          _this3.webGL.bindBuffer(_this3.webGL.ARRAY_BUFFER, face.vertexesBuffer);

          _this3.webGL.vertexAttribPointer(_this3.positionLocation, 3, _this3.webGL.FLOAT, false, 0, 0);

          _this3.webGL.enableVertexAttribArray(_this3.textureCoordinatesLocation);

          _this3.webGL.bindBuffer(_this3.webGL.ARRAY_BUFFER, face.coordsBuffer);

          _this3.webGL.vertexAttribPointer(_this3.textureCoordinatesLocation, 2, _this3.webGL.FLOAT, false, 0, 0);

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
      }
    }
    /**
     * Rendering function.
     * @public
     */

  }, {
    key: "render",
    value: function () {
      var _render = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee() {
        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._update();

              case 2:
                _context.next = 4;
                return this._draw();

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function render() {
        return _render.apply(this, arguments);
      }

      return render;
    }()
    /**
     * Start rendering with default requestAnimationFrame function.
     * @public
     */

  }, {
    key: "run",
    value: function run() {
      _engine = this;
      console.log();
      console.log('     %c%s', 'color: rgba(247, 137, 74, 1); text-align: center; font-size: 16px; font-weight: 700', "Bronze Engine is running");
      console.log();
      console.info('     Version : 0.0.1');
      console.info('     Docs    : http://m0ksem.design/Bronze-Engine/docs/global');
      console.info('     GitHub  : https://github.com/m0ksem/Bronze-Engine');
      console.log();
      requestAnimationFrameEngine();
    }
  }]);

  return Engine;
}();

var _engine;
/**
 * RequestAnimationFrame wrapper for Engine rendering.
 * @private
 */


function requestAnimationFrameEngine() {
  requestAnimationFrame(requestAnimationFrameEngine);

  _engine.render();
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




/**
 * Creates camera object.
 * @class
 * @constructor
 */

var Camera_Camera =
/*#__PURE__*/
function () {
  function Camera() {
    classCallCheck_default()(this, Camera);

    /**
     * Camera position.
     * @readonly
     * @type {Array.<{x: Number, y: Number, z: Number}>} vector 3
     */
    this.position = [0, 0, 100];
    this.up = [0, 1, 0];
    this.target = [0, 0, 0];
    /**
     * Field of view for drawing in angles.
     * @readonly
     * @type {Number} angle in degrees
     */

    this.fieldOfView = 90;
    /**
     * Field of view in radians.
     * @readonly
     * @type {Number} field of view in radians.
     */

    this.fieldOfViewRad = degToRad(90);
    /**
     * Matrix of camera.
     * @public
     * @type {Array.Array} matrix 4x4
     */

    this.matrix = unit();
    /**
     * Camera rotation.
     * @readonly
     * @type {Array.<{x: Number, y: Number, z: Number}>} vector 3
     */

    this.rotation = [0, 0, 0];
    /**
     * Sets collision for camera.
     * @readonly
     * @type {Array.<{x: Number, y: Number, z: Number}>} vector 3
     */

    this._collisions = false;
    this._lookUpMatrix = null;
  }
  /**
   * Sets field of view for camera.
   * @param {Number} angle
   * @public
   */


  createClass_default()(Camera, [{
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
      this._collisions = bool;
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
      this.position = [x, y, z];
      this.computeMatrix();
    }
    /**
     * Moving camera.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z
     * @public
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
     * Rotate for x, y, z degrees.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z
     * @public
     */

  }, {
    key: "rotate",
    value: function rotate(x, y, z) {
      this.rotation[0] += x;
      this.rotation[1] += y;
      this.rotation[2] += z;
      this.computeMatrix();
    }
    /**
     * Sets rotation angles
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */

  }, {
    key: "setRotation",
    value: function setRotation(x, y, z) {
      this.rotation = [x, y, z];
      this.computeMatrix();
    }
    /**
     * Compute camera matrix with rotation, positions.
     * @private
     */

  }, {
    key: "computeMatrix",
    value: function computeMatrix() {
      this.matrix = unit();
      this.matrix = multiply(this.matrix, translation(this.position[0], this.position[1], this.position[2]));
      var rotation = new Matrixes_Matrix();
      rotation.multiply(rotationY(degToRad(this.rotation[1])));
      rotation.multiply(rotationX(degToRad(this.rotation[0])));
      rotation.multiply(rotationZ(degToRad(this.rotation[2])));
      this.matrix = multiply(this.matrix, rotation.matrix);

      if (this._lookUpMatrix != null) {
        this.matrix = multiply(this.matrix, this.lookAt(camera._lookUpMatrix, [0, 1, 0]));
      }

      this.rotationMatrix = inverse(rotation.matrix);
      this.inventedMatrix = inverse(this.matrix);
    }
    /**
     * Sets function to control camera.
     * @param {Function} handler
     * @public
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
     * Sets camera to the coordinates
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



/**
 * Help class for creating user controls.
 * @class
 * @constructor
 * @param {Engine} engine 
 */
var Controls_Controls =
/*#__PURE__*/
function () {
  /**
   * Help class for creating user controls.
   * @param {Engine} engine 
   */
  function Controls(engine) {
    var _this = this;

    classCallCheck_default()(this, Controls);

    engine.controls = this;
    this.engine = engine;
    /**
     * True if mouse cursor over canvas element.
     * @type {boolean}
     * @readonly
     */

    this.mouseOverCanvas = false;
    /**
     * @type {boolean}
     * @private
     */

    this._lockPointer = true;
    /**
     * @type {boolean}
     * @public
     */

    this.pointerLocked = false;
    /**
     * Rebind
     * @type {boolean}
     * @private 
     */

    this._rebind = true;
    /**
     * Rebind
     * @type {boolean}
     * @private 
     */

    this._globalRebind = false;
    /**
     * Array in which the true elements if button are pressed. Every element corresponds to the button code.
     * @type {Array.<{boolean}>}
     * @readonly
     */

    this.keys = [];
    /**
     * Functions which triggers if key pressed.
     * @type {Array.<{Function}>}
     * @private
     */

    this._handlers = [];
    /**
     * Handlers for canvas on focus.
     * @type {Array.{Function}}
     * @private
     */

    this._focusHandlers = [];
    /**
     * Handlers for canvas on blur (or un focus).
     * @type {Array.{Function}}
     * @private
     */

    this._blurHandlers = [];
    /**
     * Set focus only if canvas clicked like on default input or button. 
     * If [true] then you need to click on canvas before it will be focused.
     * If [false] then you just need to move your cursor over canvas.
     * @type {boolean}
     * @default true
     * @private
     */

    this._focusOnlyIfClick = true;
    /**
     * Displays if canvas focused.
     * @type {boolean}
     * @readonly
     */

    this.isFocused = false;
    /**
     * Functions which triggers if mouse button pressed.
     * @type {Array.<{Function}>}
     * @private
     */

    this._mouseHandlers = [null, null, null, null, null, null];
    /**
     * Mouse object which contains position and pressed buttons.
     * @type {Object.{x: Number, y: Number, buttons: Array.<{0: boolean, 1: boolean, 2: boolean}>}}
     * @property {Number} x mouse position x
     * @property {Number} y mouse position y
     * @property {Array}  buttons mouse buttons clicks
     * @property {Number} movement.x mouse movement x from last frame
     * @property {Number} movement.y mouse movement y from last frame
     * @property {Number} sensitivity sensitivity for mouse movement
     * @public
     */

    this.mouse = {
      x: 0,
      y: 0,
      buttons: [false, false, false],
      movement: {
        x: 0,
        y: 0
      },
      sensitivity: 1
    };

    for (var i = 0; i < 255; i++) {
      this.keys[i] = false;
      this._handlers[i] = null;
    }

    window.onkeydown = function (event) {
      if (_this.isFocused) {
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

    engine.canvas.setAttribute('tabindex', '0');
    var lastMousePosition = null;
    engine.canvas.addEventListener('mousemove', function (event) {
      if (!_this.pointerLocked) {
        var mousePos = engine.canvas.getBoundingClientRect();
        var x = event.clientX - mousePos.left;
        var y = event.clientY - mousePos.top;
        _this.mouse.x = x;
        _this.mouse.y = y;

        if (lastMousePosition == null) {
          lastMousePosition = {
            x: x,
            y: y
          };
        }

        _this.mouse.movement.x = (x - lastMousePosition.x) * _this.mouse.sensitivity;
        _this.mouse.movement.y = (y - lastMousePosition.y) * _this.mouse.sensitivity;
        lastMousePosition.x = x;
        lastMousePosition.y = y;
      } else {
        _this.mouse.movement.x = -event.movementX * _this.mouse.sensitivity;
        _this.mouse.movement.y = -event.movementY * _this.mouse.sensitivity;
        _this.mouse.x = _this.engine.width / 2;
        _this.mouse.y = _this.engine.height / 2;
      }
    }, false);
    window.addEventListener('mousemove', function (event) {
      var canvasPos = engine.canvas.getBoundingClientRect();
      var x = event.clientX;
      var y = event.clientY;

      if (x < canvasPos.right && x > canvasPos.left && y < canvasPos.bottom && y > canvasPos.top) {
        _this.mouseOverCanvas = true;

        if (!_this._focusOnlyIfClick && !_this.isFocused) {
          engine.canvas.focus();
        }
      } else {
        _this.mouseOverCanvas = false;

        if (!_this._focusOnlyIfClick) {
          engine.canvas.blur();
        }
      }
    });

    engine.canvas.onclick = function () {
      if (_this._focusOnlyIfClick && !_this.isFocused) {
        engine.canvas.focus();
      }

      if (_this._lockPointer) {
        engine.canvas.requestPointerLock();
      }
    };

    engine.canvas.onmousedown = function (event) {
      _this.mouse.buttons[event.button] = true;
      if (_this._mouseHandlers[2 + event.button] != null) _this._mouseHandlers[2 + event.button](event);
      return false;
    };

    engine.canvas.onmouseup = function (event) {
      _this.mouse.buttons[event.button] = false;
      return false;
    };

    engine.canvas.oncontextmenu = function () {
      return false;
    };

    engine.canvas.onblur = function () {
      _this.isFocused = false;

      for (var _i = 0; _i < _this._focusHandlers.length; _i++) {
        _this._blurHandlers[_i]();
      }
    };

    engine.canvas.onfocus = function () {
      _this.isFocused = true;

      for (var _i2 = 0; _i2 < _this._focusHandlers.length; _i2++) {
        _this._focusHandlers[_i2]();
      }
    };

    document.addEventListener('pointerlockchange', function () {
      if (document.pointerLockElement === engine.canvas) {
        _this.pointerLocked = true;
      } else {
        _this.pointerLocked = false;
      }
    }, false);
  }
  /**
   * 
   */


  createClass_default()(Controls, [{
    key: "clickForFocus",
    value: function clickForFocus(bool) {
      bool = bool || !this._focusOnlyIfClick;
      this._focusOnlyIfClick = bool;
    }
    /**
     * Set sensitivity for mouse movement
     * @default 1
     * @param {Number} sensitivity 
     * @public
     */

  }, {
    key: "setSensitivity",
    value: function setSensitivity(sensitivity) {
      this.mouse.sensitivity = sensitivity;
    }
    /**
     * Rebind default browser shortcut actions. Will switch rebind option.
     * @default true
     * @param {boolean} [bool] switch to
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
      this._mouseHandlers[2 + keyCode] = handler;
    }
    /**
     * Sets handler for mouse moving.
     * @param {Function} handler 
     * @public
     */

  }, {
    key: "onMouseMove",
    value: function onMouseMove(handler) {
      this.engine.canvas.addEventListener('mousemove', handler, false);
    }
    /**
     * Sets function on right click for context menu.
     * @param {Function} handler 
     * @public
     */

  }, {
    key: "onContextMenu",
    value: function onContextMenu(handler) {
      this.engine.canvas.oncontextmenu = handler;
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
  }]);

  return Controls;
}();
// CONCATENATED MODULE: ./src/Debugger.js



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

    engine.debugger = this;
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
      if (object != null) {
        return log.name + " : " + log.object[log.value];
      }

      return "log.name";
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



/**
 * Triangle polygon.
 * @param {Engine} core Engine object to which the polygon will be attached.
 * @class
 * @constructor
 */
var Polygon_Polygon =
/*#__PURE__*/
function () {
  function Polygon(engine) {
    classCallCheck_default()(this, Polygon);

    if (engine) {
      engine.polygons.push(this);
    }

    this.webGL = engine.webGL;
    /**
     * Texture of polygon
     * @type {Texture}
     * @readonly
     */

    this.texture = null;
    /**
     * Vertexes of polygon.
     * @type {Array}
     * @readonly
     */

    this.vertexes = [];
    /**
     * Polygon position.
     * @readonly
     * @type {Array.<{x: Number, y: Number, z: Number}>} vector 3
     */

    this.position = [0, 0, 0];
    /**
     * Polygon rotation.
     * @readonly
     * @type {Array.<{x: Number, y: Number, z: Number}>} vector 3
     */

    this.rotation = [0, 0, 0];
    /**
     * Polygon rotation point.
     * @readonly
     * @type {Array.<{x: Number, y: Number, z: Number}>} vector 3
     */

    this.rotationPoint = [0, 0, 0];
    /**
    * Polygon parent rotation.
    * @readonly
    * @type {Array.<{x: Number, y: Number, z: Number}>} vector 3
    */

    this.parentRotation = [0, 0, 0];
    /**
    * Polygon normals.
    * @readonly
    * @type {Array.<{0: Number, 1: Number, 2: Number,
    *                3: Number, 4: Number, 5: Number,
    *                6: Number, 7: Number, 8: Number,}>} matrix 9
    */

    this.normals = [0, 1, 0, 0, 1, 0, 0, 1, 0];
    /**
     * WebGL texture buffer.
     * @private
     */

    this._vertexesBuffer = null;
  }
  /**
   * Setting texture for polygon.
   * @param {Texture} texture 
   * @public
   */


  createClass_default()(Polygon, [{
    key: "setTexture",
    value: function setTexture(texture) {
      this.texture = texture;
    }
    /**
     * Setting texture coords.
     * @param {Array} coords array of coords of texture.
     * @public
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
     * @public
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
     * @public
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
     * @public
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
     * @public
     */

  }, {
    key: "setRotation",
    value: function setRotation(x, y, z) {
      this.rotation[0] = x;
      this.rotation[1] = y;
      this.rotation[2] = z;
    }
    /**
     * Setting coordinates for rotation point.
     * @param {Number} x
     * @param {Number} y 
     * @param {Number} z 
     * @public
     */

  }, {
    key: "setRotationPoint",
    value: function setRotationPoint(x, y, z) {
      this.rotationPoint = [x, y, z];
    }
    /**
     * Setting rotation values of parent object.
     * @param {Number} x 
     * @param {Number} y 
     * @param {Number} z 
     * @public
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
     * @public
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




/**
 * Rect object created from polygons.
 * @param {Engine} engine
 * @class
 * @constructor
 */

var Rect_Rect =
/*#__PURE__*/
function () {
  /**
   * Flat rectangle with square texture.
   * @param {Engine} engine 
   */
  function Rect(engine) {
    classCallCheck_default()(this, Rect);

    /**
     * Rect polygons.
     * @private
     * @type {Array.<{0: Polygon, 1: Polygon}>} vector 3
     */
    this.polygons = new Array(2);
    /**
     * Rect position.
     * @readonly
     * @type {Array.<{x: Number, y: Number, z: Number}>} vector 3
     */

    this.position = [0, 0, 0];
    /**
     * Rect rotation point.
     * @readonly
     * @type {Array.<{x: Number, y: Number, z: Number}>} vector 3
     */

    this.rotationPoint = [0, 0, 0];
    var p = new Polygon_Polygon(engine);
    p.setVertexes([0, 0, 0, 100, 100, 0, 0, 100, 0]);
    p.setTextureCoords([0, 1, 1, 0, 0, 0]);
    this.polygons[0] = p;
    p = new Polygon_Polygon(engine);
    p.setVertexes([100, 100, 0, 0, 0, 0, 100, 0, 0]);
    p.setTextureCoords([1, 0, 0, 1, 1, 1]);
    this.polygons[1] = p;
    this.setNormals([0, 0, 1, 0, 0, 1, 0, 0, 1]);
  }
  /**
   * Setting square texture for rect.
   * @param {Texture} texture
   * @public
   */


  createClass_default()(Rect, [{
    key: "setTexture",
    value: function setTexture(texture) {
      this.polygons[0].setTexture(texture);
      this.polygons[1].setTexture(texture);
    }
    /**
     * Changing size of rect.
     * @param {Number} width
     * @param {Number} height
     * @public
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
     * @public
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
     * @param {*} x in deg.
     * @param {*} y in deg.
     * @param {*} z in deg.
     * @public
     */

  }, {
    key: "rotate",
    value: function rotate(x, y, z) {
      var xRad = degToRad(x);
      var yRad = degToRad(y);
      var zRad = degToRad(z);
      this.polygons[0].rotate(xRad, yRad, zRad);
      this.polygons[1].rotate(xRad, yRad, zRad);
    }
    /**
     * Setting rotation of parent object in radians.
     * @param {Number} x parent rotation of x axis in radians.
     * @param {Number} y parent rotation of y axis in radians.
     * @param {Number} z parent rotation of z axis in radians.
     * @public
     */

  }, {
    key: "setParentRotation",
    value: function setParentRotation(x, y, z) {
      this.polygons[0].setParentRotation(x, y, z);
      this.polygons[1].setParentRotation(x, y, z);
    }
    /**
     * Sets rotation point coordinates.
     * @param {Number} x
     * @param {Number} y
     * @param {Number} z
     * @public
     */

  }, {
    key: "setRotationPoint",
    value: function setRotationPoint(x, y, z) {
      this.polygons[0].setRotationPoint(x, y, z);
      this.polygons[1].setRotationPoint(x, y, z);
    }
    /**
     * Set normals vector.
     * @param {Array} normals 3:3 array. Every 3 elements is a vector of normal.
     * @public
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




/**
 * Cube object created from polygons.
 * @param {Engine} engine
 * @class
 * @constructor
 */

var Cube_Cube =
/*#__PURE__*/
function () {
  function Cube(engine) {
    classCallCheck_default()(this, Cube);

    /**
     * Faces of cube
     * @private
     * @type {Array.<{Rect}>}
     */
    this.faces = [new Rect_Rect(engine), // front
    new Rect_Rect(engine), // right
    new Rect_Rect(engine), // back
    new Rect_Rect(engine), // left
    new Rect_Rect(engine), // top
    new Rect_Rect(engine) // bottom
    ];
    /**
     * Cube position.
     * @readonly
     * @type {Array.<{x: Number, y: Number, z: Number}>} vector 3
     */

    this.position = [0, 0, 0];
    /**
     * Cube rotation.
     * @readonly
     * @type {Array.<{x: Number, y: Number, z: Number}>} vector 3
     */

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
  /**
   * Method updating faces.
   * @private
   */


  createClass_default()(Cube, [{
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
     * @public
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
     * @public
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
     * @public
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
     * @param {*} x in degrees.
     * @param {*} y in degrees.
     * @param {*} z in degrees.
     * @public
     */

  }, {
    key: "rotate",
    value: function rotate(x, y, z) {
      this.rotation[0] += x;
      this.rotation[1] += y;
      this.rotation[2] += z;
      var xRad = degToRad(this.rotation[0]);
      var yRad = degToRad(this.rotation[1]);
      var zRad = degToRad(this.rotation[2]);
      this.faces.forEach(function (face) {
        face.setParentRotation(xRad, yRad, zRad);
      });
    }
    /**
     * Set rotation for x, y, z axis.
     * @param {*} x in degrees.
     * @param {*} y in degrees.
     * @param {*} z in degrees.
     * @public
     */

  }, {
    key: "setRotation",
    value: function setRotation(x, y, z) {
      var xRad = degToRad(x);
      var yRad = degToRad(y);
      var zRad = degToRad(z);
      this.faces.forEach(function (face) {
        face.setParentRotation(xRad, yRad, zRad);
      });
    }
    /**
     * Default animation function
     * @private
     */

  }, {
    key: "animation",
    value: function animation() {
      this.rotate(1, 1, 1);
    }
    /**
     * Setting the animation function which execute every engine update.
     * @param {Number} [fps = 60] default - 60. Frame per second for this animation.
     * @param {Function} [animateFunction] default - animation function.
     * @public
     */

  }, {
    key: "animate",
    value: function animate(fps, animateFunction) {
      animateFunction = animateFunction || this.animation;
      this._animationInterval = setInterval(animateFunction, 1000 / fps);
    }
    /**
     * Removes animation.
     * @public
     */

  }, {
    key: "removeAnimation",
    value: function removeAnimation() {
      clearInterval(this._animationInterval);
    }
  }]);

  return Cube;
}();
// CONCATENATED MODULE: ./src/Bronze.js
/* concated harmony reexport radToDeg */__webpack_require__.d(__webpack_exports__, "radToDeg", function() { return radToDeg; });
/* concated harmony reexport degToRad */__webpack_require__.d(__webpack_exports__, "degToRad", function() { return degToRad; });
/* concated harmony reexport isPowerOf2 */__webpack_require__.d(__webpack_exports__, "isPowerOf2", function() { return isPowerOf2; });
/* concated harmony reexport Matrix */__webpack_require__.d(__webpack_exports__, "Matrix", function() { return Matrixes_Matrix; });
/* concated harmony reexport unit */__webpack_require__.d(__webpack_exports__, "unit", function() { return unit; });
/* concated harmony reexport translation */__webpack_require__.d(__webpack_exports__, "translation", function() { return translation; });
/* concated harmony reexport rotationX */__webpack_require__.d(__webpack_exports__, "rotationX", function() { return rotationX; });
/* concated harmony reexport rotationY */__webpack_require__.d(__webpack_exports__, "rotationY", function() { return rotationY; });
/* concated harmony reexport rotationZ */__webpack_require__.d(__webpack_exports__, "rotationZ", function() { return rotationZ; });
/* concated harmony reexport scaling */__webpack_require__.d(__webpack_exports__, "scaling", function() { return scaling; });
/* concated harmony reexport multiply */__webpack_require__.d(__webpack_exports__, "multiply", function() { return multiply; });
/* concated harmony reexport vec3Multiply */__webpack_require__.d(__webpack_exports__, "vec3Multiply", function() { return vec3Multiply; });
/* concated harmony reexport transformVector */__webpack_require__.d(__webpack_exports__, "transformVector", function() { return transformVector; });
/* concated harmony reexport inverse */__webpack_require__.d(__webpack_exports__, "inverse", function() { return inverse; });
/* concated harmony reexport normalize */__webpack_require__.d(__webpack_exports__, "normalize", function() { return Vectors_normalize; });
/* concated harmony reexport Engine */__webpack_require__.d(__webpack_exports__, "Engine", function() { return Engine_Engine; });
/* concated harmony reexport Camera */__webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera_Camera; });
/* concated harmony reexport Controls */__webpack_require__.d(__webpack_exports__, "Controls", function() { return Controls_Controls; });
/* concated harmony reexport Debugger */__webpack_require__.d(__webpack_exports__, "Debugger", function() { return Debugger_Debugger; });
/* concated harmony reexport Texture */__webpack_require__.d(__webpack_exports__, "Texture", function() { return Texture_Texture; });
/* concated harmony reexport Rect */__webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect_Rect; });
/* concated harmony reexport Cube */__webpack_require__.d(__webpack_exports__, "Cube", function() { return Cube_Cube; });
/* concated harmony reexport Object */__webpack_require__.d(__webpack_exports__, "Object", function() { return Object_Object; });
/* concated harmony reexport Map */__webpack_require__.d(__webpack_exports__, "Map", function() { return Map_Map; });













/***/ })
/******/ ]);
});