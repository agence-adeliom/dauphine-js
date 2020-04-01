import './polyfill.js';
import './regex.js';
import {easing} from "../partials/easing";

/*!
 * Add Event Listener
 */
export const addEvent = function(event, selector, callback, options=false) {

    if(!selector){
        throw 'A selector is needed';
    }

    if(!callback || typeof callback !== "function"){
        throw 'A function callback is needed';
    }

    var matchesFn;

    // find vendor prefix
    ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
        if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    })

    if(typeof selector == 'string'){
        document.addEventListener(event, (event) => {
            if (event.target[matchesFn](selector)) {
                callback(event, event.target);
            }
        }, options);
    }
    else{
        if(selector.length){
            selector.forEach((el) => {
                el.addEventListener(event, (event) => {
                    callback(event, event.target);
                }, options);
            }); 
        }
        else{
            selector.addEventListener(event, (event) => {
                callback(event, event.target);
            }, options);
        }
    }

};


/*!
 * Remove Event Listener
 */
export const removeEvent = function(event, selector, callback, options=false) {

    if(!selector){
        throw 'A selector is needed';
    }

    if(!callback || typeof callback !== "function"){
        throw 'A function callback is needed';
    }

    if(typeof selector == 'string'){
        document.removeEventListener(event, callback, options);
    }
    else{
        if(selector.length){
            selector.forEach((el) => {
                el.removeEventListener(event, callback, options);
            }); 
        }
        else{
            selector.removeEventListener(event, callback, options);
        }
    }

};


/*!
 * Get closest parent
 */
export const getClosest = function(el, selector) {

    var matchesFn;

    // find vendor prefix
    ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
        if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    })

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
export const getChildren = function (elem, selector) {

    var matchesFn;

    // find vendor prefix
    ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
        if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    })

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
export const getPreviousSibling = function (elem, selector) {

    var matchesFn;

    // find vendor prefix
    ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
        if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    })

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
export const getNextSibling = function (elem, selector) {

    var matchesFn;

    // find vendor prefix
    ['matches','webkitMatchesSelector','mozMatchesSelector','msMatchesSelector','oMatchesSelector'].some(function(fn) {
        if (typeof document.body[fn] == 'function') {
            matchesFn = fn;
            return true;
        }
        return false;
    })


    // Get the next sibling element
    var sibling = elem.nextElementSibling;

    // If there's no selector, return the first sibling
    if (!selector) return sibling;

    // If the sibling matches our selector, use it
    // If not, jump to the next sibling and continue the loop
    while (sibling) {
        if (sibling[matchesFn](selector)) return sibling;
        sibling = sibling.nextElementSibling
    }

};


/*!
 * Merge Object
 */
export const mergeObjects = function() {
    var resObj = {};
    for(var i=0; i < arguments.length; i += 1) {
        var obj = arguments[i],
            keys = Object.keys(obj);
        for(var j=0; j < keys.length; j += 1) {
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
export const deepMerge = function () {

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
export const $ = function (selector, parent) {
    return (parent ? parent : document).querySelector(selector);
};


/*!
 * Get an array of all matching elements in the DOM
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} selector The element selector
 * @param  {Node}   parent   The parent to search in [optional]
 * @return {Array}           Th elements
 */
export const $$ = function (selector, parent) {
    return Array.prototype.slice.call((parent ? parent : document).querySelectorAll(selector));
};


/*!
 * Emit a custom event
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} type   The event type
 * @param  {Node}   elem   The element to attach the event to
 * @param  {Object} detail Any details to pass along with the event
 */
export const emitEvent = function (type, elem, detail) {

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
export const getParams = function (url) {
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
export const isEqual = function (value, other) {

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
    var compare = function (item1, item2) {

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
export const ready = function (fn) {

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
export const shuffle = function (array) {

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
export const animate = function (elem, animation, callback, hide, removeClass) {

    // If there's no element or animation, do nothing
    if (!elem || !animation) return;

    // Remove the [hidden] attribute
    elem.removeAttribute('hidden');

    // Apply the animation
    elem.classList.add(animation);

    // test if animation name exist
    if(getStyle(elem, "animation-name") === "none"){
        elem.classList.remove(animation);
        callback();
    }

    // Detect when the animation ends
    elem.addEventListener('animationend', function endAnimation (event) {

        // If the element should be hidden, hide it
        if (hide) {
            // Remove the animation class
            elem.classList.remove(animation);
            elem.setAttribute('hidden', 'true');
        }

        if(removeClass){
            // Remove the animation class
            elem.classList.remove(animation);
        }

        // Add callback when animation ends
        if(callback && typeof callback === "function"){
            callback();
        }

        // Remove this event listener
        elem.removeEventListener('animationend', endAnimation, false);

    }, false);
};

export const transition = function (elem, animation, callback, hide, removeClass) {
    // If there's no element or animation, do nothing
    if (!elem || !animation) return;

    // Remove the [hidden] attribute
    elem.removeAttribute('hidden');

    // Apply the animation
    elem.classList.add(animation);

    // Detect when the animation ends
    elem.addEventListener('transitionend', function endAnimation (event) {

        // If the element should be hidden, hide it
        if (hide) {
            // Remove the animation class
            elem.classList.remove(animation);
            elem.setAttribute('hidden', 'true');
        }

        if(removeClass){
            // Remove the animation class
            elem.classList.remove(animation);
        }

        // Add callback when animation ends
        if(callback && typeof callback === "function"){
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
export const debounce = function (fn) {

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

    }

};


/*!
 * Create an immutable clone of an array or object
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array|Object} obj The array or object to copy
 * @return {Array|Object}     The clone of the array or object
 */
export const copy = function (obj) {

    //
    // Methods
    //

    /**
     * Create an immutable copy of an object
     * @return {Object}
     */
    var cloneObj = function () {

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
    var cloneArr = function () {
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
export const buildQuery = function (data, encode=true) {
    if (typeof (data) === 'string') return data;
    var query = [];
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            if(encode){
                query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
            }
            else{
                query.push(key + '=' + data[key]);
            }
        }
    }
    return query.join('&');
};

export const updateURL = function(key, value, push=false) {
    if (history.pushState) {
        const obj = value ? key + '=' + value : key;
        const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?' + obj + window.location.hash;
        if(push){
            window.history.pushState({path:newurl},'', newurl);
        }
        else{
            window.history.replaceState({path:newurl},'', newurl);
        }
    }
};

export const findIndex = function (array, value, key) {
    if(array && array.length && value) {
        if(key){
            return array.findIndex((el) => {
                return el[key] === value;
            });
        }
        else{
            return array.indexOf(value);
        }
    }
    return null;
};

export const find = function (array, value, key, all=false) {
    if(array && array.length && value && key) {
        if(!all){
            return array.find((el) => {
                return el[key] === value;
            });
        }
        else{
            return array.filter((el) => {
                return el[key] === value;
            });
        }
    }
    return null;
};

export const removeFromArray = function(array, value, key){
    var i = array.length;
    while(i--){
        if(array[i] && array[i].hasOwnProperty(key) && (arguments.length > 2 && array[i][key] === value)) {
            array.splice(i,1);
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
export const isInViewport = function (elem) {
    var distance = elem.getBoundingClientRect();
    return (
        distance.top >= 0 &&
        distance.left >= 0 &&
        distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        distance.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

/*!
 * Remove duplicate items from an array
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array} arr The array
 * @return {Array}     A new array with duplicates removed
 */
export const dedupe = function (arr) {
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
export const getOffsetTop = function (elem) {
    var location = 0;
    if (elem.offsetParent) {
        while (elem) {
            location += elem.offsetTop;
            elem = elem.offsetParent;
        }
    }
    return location >= 0 ? location : 0;
};

export const hasNumbers = function(string) {
    var regex = /\d/g;
    return regex.test(string);
};

export const getStyle = function (elem, property, index=1) {
    const style = window.getComputedStyle(elem, null).getPropertyValue(property);
    if(hasNumbers(style)){
        const numbers = style.split(' ');
        if(numbers.length >= 2){
            return parseInt(numbers[index - 1], 10);
        }
        else{
            return parseInt(style, 10);
        }
    }
    else{
        return style;
    }
};

export const truncate = function (string, maxLength = 50) {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)}...`;
};

export const effect = easing;

export const animation = function (start, end, duration, easing, callback) {
    const timeStart = new Date().getTime();
    const timer = setInterval(function() {
        const time = new Date().getTime() - timeStart;
        const x = effect[easing](time/duration, time, start, end - start, duration);
        callback(x);
        if (time >= duration) clearInterval(timer);
    }, 1000 / 60);
};

export const isIE = function() {
    const ua = window.navigator.userAgent;
    const msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
        return true;
    }
    else {
        return false;
    }

    return false;
};
