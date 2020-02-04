"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animation = exports.effect = exports.truncate = exports.getStyle = exports.hasNumbers = exports.getOffsetTop = exports.dedupe = exports.isInViewport = exports.find = exports.findIndex = exports.updateURL = exports.buildQuery = exports.copy = exports.debounce = exports.transition = exports.animate = exports.shuffle = exports.ready = exports.isEqual = exports.getParams = exports.emitEvent = exports.$$ = exports.$ = exports.deepMerge = exports.mergeObjects = exports.getNextSibling = exports.getPreviousSibling = exports.getChildren = exports.getClosest = exports.removeEvent = exports.addEvent = undefined;

var _easing = require("../partials/easing");

/*!
 * Add Event Listener
 */
var addEvent = exports.addEvent = function addEvent(event, selector, callback) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;


    if (!selector) {
        throw 'A selector is needed';
    }

    if (!callback || typeof callback !== "function") {
        throw 'A function callback is needed';
    }

    var matchesFn;

    // find vendor prefix
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
var removeEvent = exports.removeEvent = function removeEvent(event, selector, callback) {
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
var getClosest = exports.getClosest = function getClosest(el, selector) {

    var matchesFn;

    // find vendor prefix
    ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
        if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    });

    var parent;

    // traverse parents
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
var getChildren = exports.getChildren = function getChildren(elem, selector) {

    var matchesFn;

    // find vendor prefix
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
var getPreviousSibling = exports.getPreviousSibling = function getPreviousSibling(elem, selector) {

    var matchesFn;

    // find vendor prefix
    ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
        if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    });

    // Get the next sibling element
    var sibling = elem.previousElementSibling;

    // If there's no selector, return the first sibling
    if (!selector) return sibling;

    // If the sibling matches our selector, use it
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
var getNextSibling = exports.getNextSibling = function getNextSibling(elem, selector) {

    var matchesFn;

    // find vendor prefix
    ['matches', 'webkitMatchesSelector', 'mozMatchesSelector', 'msMatchesSelector', 'oMatchesSelector'].some(function (fn) {
        if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    });

    // Get the next sibling element
    var sibling = elem.nextElementSibling;

    // If there's no selector, return the first sibling
    if (!selector) return sibling;

    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
        if (sibling[matchesFn](selector)) return sibling;
        sibling = sibling.nextElementSibling;
    }
};

/*!
 * Merge Object
 */
var mergeObjects = exports.mergeObjects = function mergeObjects() {
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
var deepMerge = exports.deepMerge = function deepMerge() {

    // Make sure there are objects to merge
    var len = arguments.length;
    if (len < 1) return;
    if (len < 2) return arguments[0];

    // Merge all objects into first
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
var $ = exports.$ = function $(selector, parent) {
    return (parent ? parent : document).querySelector(selector);
};

/*!
 * Get an array of all matching elements in the DOM
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} selector The element selector
 * @param  {Node}   parent   The parent to search in [optional]
 * @return {Array}           Th elements
 */
var $$ = exports.$$ = function $$(selector, parent) {
    return Array.prototype.slice.call((parent ? parent : document).querySelectorAll(selector));
};

/*!
 * Emit a custom event
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} type   The event type
 * @param  {Node}   elem   The element to attach the event to
 * @param  {Object} detail Any details to pass along with the event
 */
var emitEvent = exports.emitEvent = function emitEvent(type, elem, detail) {

    // Make sure there's an event type
    if (!type) return;

    // Variables
    elem = elem || window;
    detail = detail || {};

    // Create a new event
    var event = new CustomEvent(type, {
        bubbles: true,
        cancelable: true,
        detail: detail
    });

    // Dispatch the event
    elem.dispatchEvent(event);
};

/**
 * Get the URL parameters
 * source: https://css-tricks.com/snippets/javascript/get-url-variables/
 * @param  {String} url The URL
 * @return {Object}     The URL parameters
 */
var getParams = exports.getParams = function getParams(url) {
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
var isEqual = exports.isEqual = function isEqual(value, other) {

    // Get the value type
    var type = Object.prototype.toString.call(value);

    // If the two objects are not the same type, return false
    if (type !== Object.prototype.toString.call(other)) return false;

    // If items are not an object or array, return false
    if (['[object Array]', '[object Object]'].indexOf(type) < 0) return false;

    // Compare the length of the length of the two items
    var valueLen = type === '[object Array]' ? value.length : Object.keys(value).length;
    var otherLen = type === '[object Array]' ? other.length : Object.keys(other).length;
    if (valueLen !== otherLen) return false;

    // Compare two items
    var compare = function compare(item1, item2) {

        // Get the object type
        var itemType = Object.prototype.toString.call(item1);

        // If an object or array, compare recursively
        if (['[object Array]', '[object Object]'].indexOf(itemType) >= 0) {
            if (!isEqual(item1, item2)) return false;
        }

        // Otherwise, do a simple comparison
        else {

                // If the two items are not the same type, return false
                if (itemType !== Object.prototype.toString.call(item2)) return false;

                // Else if it's a function, convert to a string and compare
                // Otherwise, just compare
                if (itemType === '[object Function]') {
                    if (item1.toString() !== item2.toString()) return false;
                } else {
                    if (item1 !== item2) return false;
                }
            }
    };

    // Compare properties
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
    }

    // If nothing failed, return true
    return true;
};

/*!
 * Run event after the DOM is ready
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn Callback function
 */
var ready = exports.ready = function ready(fn) {

    // Sanity check
    if (typeof fn !== 'function') return;

    // If document is already loaded, run method
    if (document.readyState === 'interactive' || document.readyState === 'complete') {
        return fn();
    }

    // Otherwise, wait until document is loaded
    document.addEventListener('DOMContentLoaded', fn, false);
};

/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = exports.shuffle = function shuffle(array) {

    var currentIndex = array.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
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
var animate = exports.animate = function animate(elem, animation, callback, hide) {

    // If there's no element or animation, do nothing
    if (!elem || !animation) return;

    // Remove the [hidden] attribute
    elem.removeAttribute('hidden');

    // Apply the animation
    elem.classList.add(animation);

    // Detect when the animation ends
    elem.addEventListener('animationend', function endAnimation(event) {

        // If the element should be hidden, hide it
        if (hide) {
            // Remove the animation class
            elem.classList.remove(animation);
            elem.setAttribute('hidden', 'true');
        }

        // Add callback when animation ends
        if (callback && typeof callback === "function") {
            callback();
        }

        // Remove this event listener
        elem.removeEventListener('animationend', endAnimation, false);
    }, false);
};

var transition = exports.transition = function transition(elem, animation, callback, hide) {
    // If there's no element or animation, do nothing
    if (!elem || !animation) return;

    // Remove the [hidden] attribute
    elem.removeAttribute('hidden');

    // Apply the animation
    elem.classList.add(animation);

    // Detect when the animation ends
    elem.addEventListener('transitionend', function endAnimation(event) {

        // If the element should be hidden, hide it
        if (hide) {
            // Remove the animation class
            elem.classList.remove(animation);
            elem.setAttribute('hidden', 'true');
        }

        // Add callback when animation ends
        if (callback && typeof callback === "function") {
            callback();
        }

        // Remove this event listener
        elem.removeEventListener('transitionend', endAnimation, false);
    }, false);
};

/**
 * Debounce functions for better performance
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn The function to debounce
 */
var debounce = exports.debounce = function debounce(fn) {

    // Setup a timer
    var timeout;

    // Return a function to run debounced
    return function () {

        // Setup the arguments
        var context = this;
        var args = arguments;

        // If there's a timer, cancel it
        if (timeout) {
            window.cancelAnimationFrame(timeout);
        }

        // Setup the new requestAnimationFrame()
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
var copy = exports.copy = function copy(obj) {

    //
    // Methods
    //

    /**
     * Create an immutable copy of an object
     * @return {Object}
     */
    var cloneObj = function cloneObj() {

        // Create new object
        var clone = {};

        // Loop through each item in the original
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
    };

    //
    // Inits
    //

    // Get object type
    var type = Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();

    // If an object
    if (type === 'object') {
        return cloneObj();
    }

    // If an array
    if (type === 'array') {
        return cloneArr();
    }

    // Otherwise, return it as-is
    return obj;
};

/*!
 * Build a query string from an object of data
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object} data The data to turn into a query string
 * @return {String}      The query string
 */
var buildQuery = exports.buildQuery = function buildQuery(data) {
    if (typeof data === 'string') return data;
    var query = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
        }
    }
    return query.join('&');
};

var updateURL = exports.updateURL = function updateURL(key, value) {
    var push = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    if (history.pushState) {
        var obj = value ? key + '=' + value : key;
        var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + obj + window.location.hash;
        if (push) {
            window.history.pushState({ path: newurl }, '', newurl);
        } else {
            window.history.replaceState({ path: newurl }, '', newurl);
        }
    }
};

var findIndex = exports.findIndex = function findIndex(array, value, key) {
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

var find = exports.find = function find(array, value, key) {
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

/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
var isInViewport = exports.isInViewport = function isInViewport(elem) {
    var distance = elem.getBoundingClientRect();
    return distance.top >= 0 && distance.left >= 0 && distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) && distance.right <= (window.innerWidth || document.documentElement.clientWidth);
};

/*!
 * Remove duplicate items from an array
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array} arr The array
 * @return {Array}     A new array with duplicates removed
 */
var dedupe = exports.dedupe = function dedupe(arr) {
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
var getOffsetTop = exports.getOffsetTop = function getOffsetTop(elem) {
    var location = 0;
    if (elem.offsetParent) {
        while (elem) {
            location += elem.offsetTop;
            elem = elem.offsetParent;
        }
    }
    return location >= 0 ? location : 0;
};

var hasNumbers = exports.hasNumbers = function hasNumbers(string) {
    var regex = /\d/g;
    return regex.test(string);
};

var getStyle = exports.getStyle = function getStyle(elem, property) {
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

var truncate = exports.truncate = function truncate(string) {
    var maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

    if (!string) return null;
    if (string.length <= maxLength) return string;
    return string.substring(0, maxLength) + "...";
};

var effect = exports.effect = _easing.easing;

var animation = exports.animation = function animation(start, end, duration, easing, callback) {
    var timeStart = new Date().getTime();
    var timer = setInterval(function () {
        var time = new Date().getTime() - timeStart;
        var x = effect[easing](time / duration, time, start, end - start, duration);
        callback(x);
        if (time >= duration) clearInterval(timer);
    }, 1000 / 60);
};