(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["DauphineJS"] = factory();
	else
		root["DauphineJS"] = factory();
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./partials/easing.js
var easing = {
  linear: function linear(x, t, b, c, d) {
    return b + c * x;
  },
  def: 'easeOutQuad',
  swing: function swing(x, t, b, c, d) {
    //alert($.easing.default);
    return easing[easing.def](x, t, b, c, d);
  },
  easeInQuad: function easeInQuad(x, t, b, c, d) {
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function easeOutQuad(x, t, b, c, d) {
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function easeInOutQuad(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t + b;
    return -c / 2 * (--t * (t - 2) - 1) + b;
  },
  easeInCubic: function easeInCubic(x, t, b, c, d) {
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function easeOutCubic(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function easeInOutCubic(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t + 2) + b;
  },
  easeInQuart: function easeInQuart(x, t, b, c, d) {
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function easeOutQuart(x, t, b, c, d) {
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function easeInOutQuart(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
    return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
  },
  easeInQuint: function easeInQuint(x, t, b, c, d) {
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function easeOutQuint(x, t, b, c, d) {
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function easeInOutQuint(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
    return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
  },
  easeInSine: function easeInSine(x, t, b, c, d) {
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function easeOutSine(x, t, b, c, d) {
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function easeInOutSine(x, t, b, c, d) {
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function easeInExpo(x, t, b, c, d) {
    return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
  },
  easeOutExpo: function easeOutExpo(x, t, b, c, d) {
    return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
  },
  easeInOutExpo: function easeInOutExpo(x, t, b, c, d) {
    if (t == 0) return b;
    if (t == d) return b + c;
    if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  },
  easeInCirc: function easeInCirc(x, t, b, c, d) {
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function easeOutCirc(x, t, b, c, d) {
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function easeInOutCirc(x, t, b, c, d) {
    if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
  },
  easeInElastic: function easeInElastic(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;

    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);

    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: function easeOutElastic(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d) == 1) return b + c;
    if (!p) p = d * .3;

    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);

    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: function easeInOutElastic(x, t, b, c, d) {
    var s = 1.70158;
    var p = 0;
    var a = c;
    if (t == 0) return b;
    if ((t /= d / 2) == 2) return b + c;
    if (!p) p = d * (.3 * 1.5);

    if (a < Math.abs(c)) {
      a = c;
      var s = p / 4;
    } else var s = p / (2 * Math.PI) * Math.asin(c / a);

    if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
  },
  easeInBack: function easeInBack(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function easeOutBack(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function easeInOutBack(x, t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
  },
  easeInBounce: function easeInBounce(x, t, b, c, d) {
    return c - $.easing.easeOutBounce(x, d - t, 0, c, d) + b;
  },
  easeOutBounce: function easeOutBounce(x, t, b, c, d) {
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
    }
  },
  easeInOutBounce: function easeInOutBounce(x, t, b, c, d) {
    if (t < d / 2) return $.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
    return $.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
  }
};
// CONCATENATED MODULE: ./src/utils.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEvent", function() { return addEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEvent", function() { return removeEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClosest", function() { return getClosest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildren", function() { return getChildren; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPreviousSibling", function() { return getPreviousSibling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextSibling", function() { return getNextSibling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeObjects", function() { return mergeObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deepMerge", function() { return deepMerge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$", function() { return utils_$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$$", function() { return $$; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emitEvent", function() { return emitEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getParams", function() { return getParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return ready; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return animate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildQuery", function() { return buildQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateURL", function() { return updateURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromArray", function() { return removeFromArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInViewport", function() { return isInViewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dedupe", function() { return dedupe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffsetTop", function() { return getOffsetTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasNumbers", function() { return hasNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return getStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "truncate", function() { return truncate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effect", function() { return effect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animation", function() { return animation; });

/*!
 * Add Event Listener
 */

var addEvent = function addEvent(event, selector, callback) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!selector) {
    throw 'A selector is needed';
  }

  if (!callback || typeof callback !== "function") {
    throw 'A function callback is needed';
  }

  var matchesFn; // find vendor prefix

  ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
    if (typeof document.body[fn] == 'function') {
      matchesFn = fn;
      return true;
    }

    return false;
  });

  if (typeof selector == 'string') {
    document.addEventListener(event, function (event) {
      if (event.target[matchesFn](selector)) {
        callback(event, event.target);
      }
    }, options);
  } else {
    selector.addEventListener(event, function (event) {
      callback(event, event.target);
    }, options);
  }
};
/*!
 * Remove Event Listener
 */

var removeEvent = function removeEvent(event, selector, callback) {
  var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!selector) {
    throw 'A selector is needed';
  }

  if (!callback || typeof callback !== "function") {
    throw 'A function callback is needed';
  }

  if (typeof selector == 'string') {
    document.removeEventListener(event, callback, options);
  } else {
    selector.removeEventListener(event, callback, options);
  }
};
/*!
 * Get closest parent
 */

var getClosest = function getClosest(el, selector) {
  var matchesFn; // find vendor prefix

  ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
    if (typeof document.body[fn] == 'function') {
      matchesFn = fn;
      return true;
    }

    return false;
  });
  var parent; // traverse parents

  while (el) {
    parent = el.parentElement;

    if (parent && parent[matchesFn](selector)) {
      return parent;
    }

    el = parent;
  }

  return null;
};
/*!
 * Get all direct descendant elements that match a selector
 * Dependency: the matches() polyfill: https://vanillajstoolkit.com/polyfills/matches/
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element to get direct descendants for
 * @param  {String} selector The selector to match against
 * @return {Array}           The matching direct descendants
 */

var getChildren = function getChildren(elem, selector) {
  var matchesFn; // find vendor prefix

  ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
    if (typeof document.body[fn] == 'function') {
      matchesFn = fn;
      return true;
    }

    return false;
  });
  return Array.prototype.filter.call(elem.children, function (child) {
    return child[matchesFn](selector);
  });
};
/*!
 * Get previous sibling of an element that matches selector
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element
 * @param  {String} selector The selector to match against
 * @return {Node}            The sibling
 */

var getPreviousSibling = function getPreviousSibling(elem, selector) {
  var matchesFn; // find vendor prefix

  ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
    if (typeof document.body[fn] == 'function') {
      matchesFn = fn;
      return true;
    }

    return false;
  }); // Get the next sibling element

  var sibling = elem.previousElementSibling; // If there's no selector, return the first sibling

  if (!selector) return sibling; // If the sibling matches our selector, use it
  // If not, jump to the next sibling and continue the loop

  while (sibling) {
    if (sibling[matchesFn](selector)) return sibling;
    sibling = sibling.previousElementSibling;
  }
};
/*!
 * Get next sibling of an element that matches selector
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element
 * @param  {String} selector The selector to match against
 * @return {Node}            The sibling
 */

var getNextSibling = function getNextSibling(elem, selector) {
  var matchesFn; // find vendor prefix

  ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
    if (typeof document.body[fn] == 'function') {
      matchesFn = fn;
      return true;
    }

    return false;
  }); // Get the next sibling element

  var sibling = elem.nextElementSibling; // If there's no selector, return the first sibling

  if (!selector) return sibling; // If the sibling matches our selector, use it
  // If not, jump to the next sibling and continue the loop

  while (sibling) {
    if (sibling[matchesFn](selector)) return sibling;
    sibling = sibling.nextElementSibling;
  }
};
/*!
 * Merge Object
 */

var mergeObjects = function mergeObjects() {
  var resObj = {};

  for (var i = 0; i < arguments.length; i += 1) {
    var obj = arguments[i],
        keys = Object.keys(obj);

    for (var j = 0; j < keys.length; j += 1) {
      resObj[keys[j]] = obj[keys[j]];
    }
  }

  return resObj;
};
/*!
 * Deep merge two or more objects into the first.
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param   {Object} objects  The objects to merge together
 * @returns {Object}          Merged values of defaults and options
 */

var deepMerge = function deepMerge() {
  // Make sure there are objects to merge
  var len = arguments.length;
  if (len < 1) return;
  if (len < 2) return arguments[0]; // Merge all objects into first

  for (var i = 1; i < len; i++) {
    for (var key in arguments[i]) {
      // If it's an object, recursively merge
      // Otherwise, push to key
      if (Object.prototype.toString.call(arguments[i][key]) === '[object Object]') {
        arguments[0][key] = deepMerge(arguments[0][key] || {}, arguments[i][key]);
      } else {
        arguments[0][key] = arguments[i][key];
      }
    }
  }

  return arguments[0];
};
/*!
 * Get the first matching element in the DOM
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} selector The element selector
 * @param  {Node}   parent   The parent to search in [optional]
 * @return {Node}            The element
 */

var utils_$ = function $(selector, parent) {
  return (parent ? parent : document).querySelector(selector);
};
/*!
 * Get an array of all matching elements in the DOM
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} selector The element selector
 * @param  {Node}   parent   The parent to search in [optional]
 * @return {Array}           Th elements
 */

var $$ = function $$(selector, parent) {
  return Array.prototype.slice.call((parent ? parent : document).querySelectorAll(selector));
};
/*!
 * Emit a custom event
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} type   The event type
 * @param  {Node}   elem   The element to attach the event to
 * @param  {Object} detail Any details to pass along with the event
 */

var emitEvent = function emitEvent(type, elem, detail) {
  // Make sure there's an event type
  if (!type) return; // Variables

  elem = elem || window;
  detail = detail || {}; // Create a new event

  var event = new CustomEvent(type, {
    bubbles: true,
    cancelable: true,
    detail: detail
  }); // Dispatch the event

  elem.dispatchEvent(event);
};
/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */

var getParams = function getParams(url) {
  var params = {};
  var parser = document.createElement('a');
  parser.href = url ? url : window.location.href;
  var query = parser.search.substring(1);
  var vars = query.split('&');
  if (vars.length < 1 || vars[0].length < 1) return params;

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
  }

  return params;
};
/*!
 * Check if two objects or arrays are equal
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object|Array}  value  The first object or array to compare
 * @param  {Object|Array}  other  The second object or array to compare
 * @return {Boolean}              Returns true if they're equal
 */

var isEqual = function isEqual(value, other) {
  // Get the value type
  var type = Object.prototype.toString.call(value); // If the two objects are not the same type, return false

  if (type !== Object.prototype.toString.call(other)) return false; // If items are not an object or array, return false

  if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false; // Compare the length of the length of the two items

  var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
  var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
  if (valueLen !== otherLen) return false; // Compare two items

  var compare = function compare(item1, item2) {
    // Get the object type
    var itemType = Object.prototype.toString.call(item1); // If an object or array, compare recursively

    if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
      if (!isEqual(item1, item2)) return false;
    } // Otherwise, do a simple comparison
    else {
        // If the two items are not the same type, return false
        if (itemType !== Object.prototype.toString.call(item2)) return false; // Else if it's a function, convert to a string and compare
        // Otherwise, just compare

        if (itemType === '[object Function]') {
          if (item1.toString() !== item2.toString()) return false;
        } else {
          if (item1 !== item2) return false;
        }
      }
  }; // Compare properties


  if (type === '[object Array]') {
    for (var i = 0; i < valueLen; i++) {
      if (compare(value[i], other[i]) === false) return false;
    }
  } else {
    for (var key in value) {
      if (value.hasOwnProperty(key)) {
        if (compare(value[key], other[key]) === false) return false;
      }
    }
  } // If nothing failed, return true


  return true;
};
/*!
 * Run event after the DOM is ready
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn Callback function
 */

var ready = function ready(fn) {
  // Sanity check
  if (typeof fn !== 'function') return; // If document is already loaded, run method

  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    return fn();
  } // Otherwise, wait until document is loaded


  document.addEventListener('DOMContentLoaded', fn, false);
};
/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */

var shuffle = function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue, randomIndex; // While there remain elements to shuffle...

  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; // And swap it with the current element.

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
/*!
 * Apply a CSS animation to an element
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem      The element to animate
 * @param  {String}  animation The type of animation to apply
 * @param  {Function}  callback  Get a callback the when animation ends
 * @param  {Boolean} hide      If true, apply the [hidden] attribute after the animation is done
 */

var animate = function animate(elem, animation, callback, hide, removeClass) {
  // If there's no element or animation, do nothing
  if (!elem || !animation) return; // Remove the [hidden] attribute

  elem.removeAttribute('hidden'); // Apply the animation

  elem.classList.add(animation); // Detect when the animation ends

  elem.addEventListener('animationend', function endAnimation(event) {
    // If the element should be hidden, hide it
    if (hide) {
      // Remove the animation class
      elem.classList.remove(animation);
      elem.setAttribute('hidden', 'true');
    }

    if (removeClass) {
      // Remove the animation class
      elem.classList.remove(animation);
    } // Add callback when animation ends


    if (callback && typeof callback === "function") {
      callback();
    } // Remove this event listener


    elem.removeEventListener('animationend', endAnimation, false);
  }, false);
};
var transition = function transition(elem, animation, callback, hide, removeClass) {
  // If there's no element or animation, do nothing
  if (!elem || !animation) return; // Remove the [hidden] attribute

  elem.removeAttribute('hidden'); // Apply the animation

  elem.classList.add(animation); // Detect when the animation ends

  elem.addEventListener('transitionend', function endAnimation(event) {
    // If the element should be hidden, hide it
    if (hide) {
      // Remove the animation class
      elem.classList.remove(animation);
      elem.setAttribute('hidden', 'true');
    }

    if (removeClass) {
      // Remove the animation class
      elem.classList.remove(animation);
    } // Add callback when animation ends


    if (callback && typeof callback === "function") {
      callback();
    } // Remove this event listener


    elem.removeEventListener('transitionend', endAnimation, false);
  }, false);
};
/**
 * Debounce functions for better performance
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn The function to debounce
 */

var debounce = function debounce(fn) {
  // Setup a timer
  var timeout; // Return a function to run debounced

  return function () {
    // Setup the arguments
    var context = this;
    var args = arguments; // If there's a timer, cancel it

    if (timeout) {
      window.cancelAnimationFrame(timeout);
    } // Setup the new requestAnimationFrame()


    timeout = window.requestAnimationFrame(function () {
      fn.apply(context, args);
    });
  };
};
/*!
 * Create an immutable clone of an array or object
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array|Object} obj The array or object to copy
 * @return {Array|Object}     The clone of the array or object
 */

var copy = function copy(obj) {
  //
  // Methods
  //

  /**
   * Create an immutable copy of an object
   * @return {Object}
   */
  var cloneObj = function cloneObj() {
    // Create new object
    var clone = {}; // Loop through each item in the original
    // Recursively copy it's value and add to the clone

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        clone[key] = copy(obj[key]);
      }
    }

    return clone;
  };
  /**
   * Create an immutable copy of an array
   * @return {Array}
   */


  var cloneArr = function cloneArr() {
    return obj.map(function (item) {
      return copy(item);
    });
  }; //
  // Inits
  //
  // Get object type


  var type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase(); // If an object

  if (type === 'object') {
    return cloneObj();
  } // If an array


  if (type === 'array') {
    return cloneArr();
  } // Otherwise, return it as-is


  return obj;
};
/*!
 * Build a query string from an object of data
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object} data The data to turn into a query string
 * @return {String}      The query string
 */

var buildQuery = function buildQuery(data) {
  if (typeof data === 'string') return data;
  var query = [];

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
  }

  return query.join('&');
};
var updateURL = function updateURL(key, value) {
  var push = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (history.pushState) {
    var obj = value ? key + '=' + value : key;
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + obj + window.location.hash;

    if (push) {
      window.history.pushState({
        path: newurl
      }, '', newurl);
    } else {
      window.history.replaceState({
        path: newurl
      }, '', newurl);
    }
  }
};
var findIndex = function findIndex(array, value, key) {
  if (array && array.length && value) {
    if (key) {
      return array.findIndex(function (el) {
        return el[key] === value;
      });
    } else {
      return array.indexOf(value);
    }
  }

  return null;
};
var find = function find(array, value, key) {
  var all = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (array && array.length && value && key) {
    if (!all) {
      return array.find(function (el) {
        return el[key] === value;
      });
    } else {
      return array.filter(function (el) {
        return el[key] === value;
      });
    }
  }

  return null;
};
var removeFromArray = function removeFromArray(array, value, key) {
  var i = array.length;

  while (i--) {
    if (array[i] && array[i].hasOwnProperty(key) && arguments.length > 2 && array[i][key] === value) {
      array.splice(i, 1);
    }
  }

  return array;
};
/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */

var isInViewport = function isInViewport(elem) {
  var distance = elem.getBoundingClientRect();
  return distance.top >= 0 && distance.left >= 0 && distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) && distance.right <= (window.innerWidth || document.documentElement.clientWidth);
};
/*!
 * Remove duplicate items from an array
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array} arr The array
 * @return {Array}     A new array with duplicates removed
 */

var dedupe = function dedupe(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
};
/*!
 * Get an element's distance from the top of the Document.
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node} elem The element
 * @return {Number}    Distance from the top in pixels
 */

var getOffsetTop = function getOffsetTop(elem) {
  var location = 0;

  if (elem.offsetParent) {
    while (elem) {
      location += elem.offsetTop;
      elem = elem.offsetParent;
    }
  }

  return location >= 0 ? location : 0;
};
var hasNumbers = function hasNumbers(string) {
  var regex = /\d/g;
  return regex.test(string);
};
var getStyle = function getStyle(elem, property) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var style = window.getComputedStyle(elem, null).getPropertyValue(property);

  if (hasNumbers(style)) {
    var numbers = style.split(' ');

    if (numbers.length >= 2) {
      return parseInt(numbers[index - 1], 10);
    } else {
      return parseInt(style, 10);
    }
  } else {
    return style;
  }
};
var truncate = function truncate(string) {
  var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;
  if (!string) return null;
  if (string.length <= maxLength) return string;
  return "".concat(string.substring(0, maxLength), "...");
};
var effect = easing;
var animation = function animation(start, end, duration, easing, callback) {
  var timeStart = new Date().getTime();
  var timer = setInterval(function () {
    var time = new Date().getTime() - timeStart;
    var x = effect[easing](time / duration, time, start, end - start, duration);
    callback(x);
    if (time >= duration) clearInterval(timer);
  }, 1000 / 60);
};

/***/ })
/******/ ]);
});