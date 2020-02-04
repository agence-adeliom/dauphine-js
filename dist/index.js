!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["Dauphine JS"]=t():e["Dauphine JS"]=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.animation=t.effect=t.truncate=t.getStyle=t.hasNumbers=t.getOffsetTop=t.dedupe=t.isInViewport=t.find=t.findIndex=t.updateURL=t.buildQuery=t.copy=t.debounce=t.transition=t.animate=t.shuffle=t.ready=t.isEqual=t.getParams=t.emitEvent=t.$$=t.$=t.deepMerge=t.mergeObjects=t.getNextSibling=t.getPreviousSibling=t.getChildren=t.getClosest=t.removeEvent=t.addEvent=void 0;var r=n(1);
/*!
 * Add Event Listener
 */
/*!
 * Remove Event Listener
 */
t.addEvent=function(e,t,n){var r,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!t)throw"A selector is needed";if(!n||"function"!=typeof n)throw"A function callback is needed";["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(e){return"function"==typeof document.body[e]&&(r=e,!0)})),"string"==typeof t?document.addEventListener(e,(function(e){e.target[r](t)&&n(e,e.target)}),o):t.addEventListener(e,(function(e){n(e,e.target)}),o)};
/*!
 * Get closest parent
 */
t.removeEvent=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!t)throw"A selector is needed";if(!n||"function"!=typeof n)throw"A function callback is needed";"string"==typeof t?document.removeEventListener(e,n,r):t.removeEventListener(e,n,r)};
/*!
 * Get all direct descendant elements that match a selector
 * Dependency: the matches() polyfill: https://vanillajstoolkit.com/polyfills/matches/
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element to get direct descendants for
 * @param  {String} selector The selector to match against
 * @return {Array}           The matching direct descendants
 */
t.getClosest=function(e,t){var n,r;for(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(e){return"function"==typeof document.body[e]&&(n=e,!0)}));e;){if((r=e.parentElement)&&r[n](t))return r;e=r}return null};
/*!
 * Get previous sibling of an element that matches selector
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element
 * @param  {String} selector The selector to match against
 * @return {Node}            The sibling
 */
t.getChildren=function(e,t){var n;return["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(e){return"function"==typeof document.body[e]&&(n=e,!0)})),Array.prototype.filter.call(e.children,(function(e){return e[n](t)}))};
/*!
 * Get next sibling of an element that matches selector
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element
 * @param  {String} selector The selector to match against
 * @return {Node}            The sibling
 */
t.getPreviousSibling=function(e,t){var n;["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(e){return"function"==typeof document.body[e]&&(n=e,!0)}));var r=e.previousElementSibling;if(!t)return r;for(;r;){if(r[n](t))return r;r=r.previousElementSibling}};
/*!
 * Merge Object
 */
t.getNextSibling=function(e,t){var n;["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(e){return"function"==typeof document.body[e]&&(n=e,!0)}));var r=e.nextElementSibling;if(!t)return r;for(;r;){if(r[n](t))return r;r=r.nextElementSibling}};
/*!
 * Deep merge two or more objects into the first.
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param   {Object} objects  The objects to merge together
 * @returns {Object}          Merged values of defaults and options
 */
t.mergeObjects=function(){for(var e={},t=0;t<arguments.length;t+=1)for(var n=arguments[t],r=Object.keys(n),o=0;o<r.length;o+=1)e[r[o]]=n[r[o]];return e};
/*!
 * Get the first matching element in the DOM
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} selector The element selector
 * @param  {Node}   parent   The parent to search in [optional]
 * @return {Node}            The element
 */
t.deepMerge=function e(){var t=arguments.length;if(!(t<1)){if(t<2)return arguments[0];for(var n=1;n<t;n++)for(var r in arguments[n])"[object Object]"===Object.prototype.toString.call(arguments[n][r])?arguments[0][r]=e(arguments[0][r]||{},arguments[n][r]):arguments[0][r]=arguments[n][r];return arguments[0]}};
/*!
 * Get an array of all matching elements in the DOM
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} selector The element selector
 * @param  {Node}   parent   The parent to search in [optional]
 * @return {Array}           Th elements
 */
t.$=function(e,t){return(t||document).querySelector(e)};
/*!
 * Emit a custom event
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {String} type   The event type
 * @param  {Node}   elem   The element to attach the event to
 * @param  {Object} detail Any details to pass along with the event
 */
t.$$=function(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))};t.emitEvent=function(e,t,n){if(e){t=t||window,n=n||{};var r=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t.dispatchEvent(r)}};
/*!
 * Check if two objects or arrays are equal
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object|Array}  value  The first object or array to compare
 * @param  {Object|Array}  other  The second object or array to compare
 * @return {Boolean}              Returns true if they're equal
 */
t.getParams=function(e){var t={},n=document.createElement("a");n.href=e||window.location.href;var r=n.search.substring(1).split("&");if(r.length<1||r[0].length<1)return t;for(var o=0;o<r.length;o++){var i=r[o].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return t};
/*!
 * Run event after the DOM is ready
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} fn Callback function
 */
t.isEqual=function e(t,n){var r=Object.prototype.toString.call(t);if(r!==Object.prototype.toString.call(n))return!1;if(["[object Array]","[object Object]"].indexOf(r)<0)return!1;var o="[object Array]"===r?t.length:Object.keys(t).length;if(o!==("[object Array]"===r?n.length:Object.keys(n).length))return!1;var i=function(t,n){var r=Object.prototype.toString.call(t);if(["[object Array]","[object Object]"].indexOf(r)>=0){if(!e(t,n))return!1}else{if(r!==Object.prototype.toString.call(n))return!1;if("[object Function]"===r){if(t.toString()!==n.toString())return!1}else if(t!==n)return!1}};if("[object Array]"===r){for(var u=0;u<o;u++)if(!1===i(t[u],n[u]))return!1}else for(var a in t)if(t.hasOwnProperty(a)&&!1===i(t[a],n[a]))return!1;return!0};t.ready=function(e){if("function"==typeof e)return"interactive"===document.readyState||"complete"===document.readyState?e():void document.addEventListener("DOMContentLoaded",e,!1)};
/*!
 * Apply a CSS animation to an element
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem      The element to animate
 * @param  {String}  animation The type of animation to apply
 * @param  {Function}  callback  Get a callback the when animation ends
 * @param  {Boolean} hide      If true, apply the [hidden] attribute after the animation is done
 */
t.shuffle=function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e};t.animate=function(e,t,n,r){e&&t&&(e.removeAttribute("hidden"),e.classList.add(t),e.addEventListener("animationend",(function o(i){r&&(e.classList.remove(t),e.setAttribute("hidden","true")),n&&"function"==typeof n&&n(),e.removeEventListener("animationend",o,!1)}),!1))};t.transition=function(e,t,n,r){e&&t&&(e.removeAttribute("hidden"),e.classList.add(t),e.addEventListener("transitionend",(function o(i){r&&(e.classList.remove(t),e.setAttribute("hidden","true")),n&&"function"==typeof n&&n(),e.removeEventListener("transitionend",o,!1)}),!1))};
/*!
 * Create an immutable clone of an array or object
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array|Object} obj The array or object to copy
 * @return {Array|Object}     The clone of the array or object
 */
t.debounce=function(e){var t;return function(){var n=this,r=arguments;t&&window.cancelAnimationFrame(t),t=window.requestAnimationFrame((function(){e.apply(n,r)}))}};
/*!
 * Build a query string from an object of data
 * (c) 2018 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Object} data The data to turn into a query string
 * @return {String}      The query string
 */
t.copy=function e(t){var n=Object.prototype.toString.call(t).slice(8,-1).toLowerCase();return"object"===n?function(){var n={};for(var r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}():"array"===n?t.map((function(t){return e(t)})):t};t.buildQuery=function(e){if("string"==typeof e)return e;var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")};t.updateURL=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(history.pushState){var r=t?e+"="+t:e,o=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+r+window.location.hash;n?window.history.pushState({path:o},"",o):window.history.replaceState({path:o},"",o)}};t.findIndex=function(e,t,n){return e&&e.length&&t?n?e.findIndex((function(e){return e[n]===t})):e.indexOf(t):null};
/*!
 * Determine if an element is in the viewport
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}    elem The element
 * @return {Boolean}      Returns true if element is in the viewport
 */
t.find=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e&&e.length&&t&&n?r?e.filter((function(e){return e[n]===t})):e.find((function(e){return e[n]===t})):null};
/*!
 * Remove duplicate items from an array
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Array} arr The array
 * @return {Array}     A new array with duplicates removed
 */
t.isInViewport=function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)};
/*!
 * Get an element's distance from the top of the Document.
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node} elem The element
 * @return {Number}    Distance from the top in pixels
 */
t.dedupe=function(e){return e.filter((function(t,n){return e.indexOf(t)===n}))};t.getOffsetTop=function(e){var t=0;if(e.offsetParent)for(;e;)t+=e.offsetTop,e=e.offsetParent;return t>=0?t:0};var o=function(e){return/\d/g.test(e)};t.hasNumbers=o;t.getStyle=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=window.getComputedStyle(e,null).getPropertyValue(t);if(o(r)){var i=r.split(" ");return i.length>=2?parseInt(i[n-1],10):parseInt(r,10)}return r};t.truncate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return e?e.length<=t?e:"".concat(e.substring(0,t),"..."):null};var i=r.easing;t.effect=i;t.animation=function(e,t,n,r,o){var u=(new Date).getTime(),a=setInterval((function(){var c=(new Date).getTime()-u,f=i[r](c/n,c,e,t-e,n);o(f),c>=n&&clearInterval(a)}),1e3/60)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.easing=void 0;var r={linear:function(e,t,n,r,o){return n+r*e},def:"easeOutQuad",swing:function(e,t,n,o,i){return r[r.def](e,t,n,o,i)},easeInQuad:function(e,t,n,r,o){return r*(t/=o)*t+n},easeOutQuad:function(e,t,n,r,o){return-r*(t/=o)*(t-2)+n},easeInOutQuad:function(e,t,n,r,o){return(t/=o/2)<1?r/2*t*t+n:-r/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,r,o){return r*(t/=o)*t*t+n},easeOutCubic:function(e,t,n,r,o){return r*((t=t/o-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,r,o){return(t/=o/2)<1?r/2*t*t*t+n:r/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,r,o){return r*(t/=o)*t*t*t+n},easeOutQuart:function(e,t,n,r,o){return-r*((t=t/o-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,r,o){return(t/=o/2)<1?r/2*t*t*t*t+n:-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,r,o){return r*(t/=o)*t*t*t*t+n},easeOutQuint:function(e,t,n,r,o){return r*((t=t/o-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,r,o){return(t/=o/2)<1?r/2*t*t*t*t*t+n:r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,r,o){return-r*Math.cos(t/o*(Math.PI/2))+r+n},easeOutSine:function(e,t,n,r,o){return r*Math.sin(t/o*(Math.PI/2))+n},easeInOutSine:function(e,t,n,r,o){return-r/2*(Math.cos(Math.PI*t/o)-1)+n},easeInExpo:function(e,t,n,r,o){return 0==t?n:r*Math.pow(2,10*(t/o-1))+n},easeOutExpo:function(e,t,n,r,o){return t==o?n+r:r*(1-Math.pow(2,-10*t/o))+n},easeInOutExpo:function(e,t,n,r,o){return 0==t?n:t==o?n+r:(t/=o/2)<1?r/2*Math.pow(2,10*(t-1))+n:r/2*(2-Math.pow(2,-10*--t))+n},easeInCirc:function(e,t,n,r,o){return-r*(Math.sqrt(1-(t/=o)*t)-1)+n},easeOutCirc:function(e,t,n,r,o){return r*Math.sqrt(1-(t=t/o-1)*t)+n},easeInOutCirc:function(e,t,n,r,o){return(t/=o/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+n:r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,r,o){var i=1.70158,u=0,a=r;if(0==t)return n;if(1==(t/=o))return n+r;if(u||(u=.3*o),a<Math.abs(r)){a=r;i=u/4}else i=u/(2*Math.PI)*Math.asin(r/a);return-a*Math.pow(2,10*(t-=1))*Math.sin((t*o-i)*(2*Math.PI)/u)+n},easeOutElastic:function(e,t,n,r,o){var i=1.70158,u=0,a=r;if(0==t)return n;if(1==(t/=o))return n+r;if(u||(u=.3*o),a<Math.abs(r)){a=r;i=u/4}else i=u/(2*Math.PI)*Math.asin(r/a);return a*Math.pow(2,-10*t)*Math.sin((t*o-i)*(2*Math.PI)/u)+r+n},easeInOutElastic:function(e,t,n,r,o){var i=1.70158,u=0,a=r;if(0==t)return n;if(2==(t/=o/2))return n+r;if(u||(u=o*(.3*1.5)),a<Math.abs(r)){a=r;i=u/4}else i=u/(2*Math.PI)*Math.asin(r/a);return t<1?a*Math.pow(2,10*(t-=1))*Math.sin((t*o-i)*(2*Math.PI)/u)*-.5+n:a*Math.pow(2,-10*(t-=1))*Math.sin((t*o-i)*(2*Math.PI)/u)*.5+r+n},easeInBack:function(e,t,n,r,o,i){return null==i&&(i=1.70158),r*(t/=o)*t*((i+1)*t-i)+n},easeOutBack:function(e,t,n,r,o,i){return null==i&&(i=1.70158),r*((t=t/o-1)*t*((i+1)*t+i)+1)+n},easeInOutBack:function(e,t,n,r,o,i){return null==i&&(i=1.70158),(t/=o/2)<1?r/2*(t*t*((1+(i*=1.525))*t-i))+n:r/2*((t-=2)*t*((1+(i*=1.525))*t+i)+2)+n},easeInBounce:function(e,t,n,r,o){return r-$.easing.easeOutBounce(e,o-t,0,r,o)+n},easeOutBounce:function(e,t,n,r,o){return(t/=o)<1/2.75?r*(7.5625*t*t)+n:t<2/2.75?r*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?r*(7.5625*(t-=2.25/2.75)*t+.9375)+n:r*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,r,o){return t<o/2?.5*$.easing.easeInBounce(e,2*t,0,r,o)+n:.5*$.easing.easeOutBounce(e,2*t-o,0,r,o)+.5*r+n}};t.easing=r}])}));