!function webpackUniversalModuleDefinition(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["Dauphine JS"]=t():e["Dauphine JS"]=t()}(window,(function(){/******/
return function(e){// webpackBootstrap
/******/ // The module cache
/******/var t={};
/******/
/******/ // The require function
/******/function __webpack_require__(n){
/******/
/******/ // Check if module is in cache
/******/if(t[n])
/******/return t[n].exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var r=t[n]={
/******/i:n,
/******/l:!1,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[n].call(r.exports,r,r.exports,__webpack_require__),
/******/
/******/ // Flag the module as loaded
/******/r.l=!0,r.exports;
/******/}
/******/
/******/
/******/ // expose the modules object (__webpack_modules__)
/******/
/******/
/******/
/******/ // Load entry module and return exports
/******/return __webpack_require__.m=e,
/******/
/******/ // expose the module cache
/******/__webpack_require__.c=t,
/******/
/******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(e,t,n){
/******/__webpack_require__.o(e,t)||
/******/Object.defineProperty(e,t,{enumerable:!0,get:n})
/******/},
/******/
/******/ // define __esModule on exports
/******/__webpack_require__.r=function(e){
/******/"undefined"!=typeof Symbol&&Symbol.toStringTag&&
/******/Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})
/******/,Object.defineProperty(e,"__esModule",{value:!0})},
/******/
/******/ // create a fake namespace object
/******/ // mode & 1: value is a module id, require it
/******/ // mode & 2: merge all properties of value into the ns
/******/ // mode & 4: return value when already ns object
/******/ // mode & 8|1: behave like require
/******/__webpack_require__.t=function(e,t){
/******/if(
/******/1&t&&(e=__webpack_require__(e)),8&t)return e;
/******/if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;
/******/var n=Object.create(null);
/******/
/******/if(__webpack_require__.r(n),
/******/Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)__webpack_require__.d(n,r,function(t){return e[t]}.bind(null,r));
/******/return n;
/******/},
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(e){
/******/var t=e&&e.__esModule?
/******/function getDefault(){return e.default}:
/******/function getModuleExports(){return e};
/******/
/******/return __webpack_require__.d(t,"a",t),t;
/******/},
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},
/******/
/******/ // __webpack_public_path__
/******/__webpack_require__.p="",__webpack_require__(__webpack_require__.s=1);
/******/}
/************************************************************************/
/******/([
/* 0 */
/* 1 */
/***/,function(e,t,n){"use strict";n.r(t);
// CONCATENATED MODULE: ./partials/easing.js
var r={linear:function linear(e,t,n,r,u){return n+r*e},def:"easeOutQuad",swing:function swing(e,t,n,u,o){
//alert($.easing.default);
return r[r.def](e,t,n,u,o)},easeInQuad:function easeInQuad(e,t,n,r,u){return r*(t/=u)*t+n},easeOutQuad:function easeOutQuad(e,t,n,r,u){return-r*(t/=u)*(t-2)+n},easeInOutQuad:function easeInOutQuad(e,t,n,r,u){return(t/=u/2)<1?r/2*t*t+n:-r/2*(--t*(t-2)-1)+n},easeInCubic:function easeInCubic(e,t,n,r,u){return r*(t/=u)*t*t+n},easeOutCubic:function easeOutCubic(e,t,n,r,u){return r*((t=t/u-1)*t*t+1)+n},easeInOutCubic:function easeInOutCubic(e,t,n,r,u){return(t/=u/2)<1?r/2*t*t*t+n:r/2*((t-=2)*t*t+2)+n},easeInQuart:function easeInQuart(e,t,n,r,u){return r*(t/=u)*t*t*t+n},easeOutQuart:function easeOutQuart(e,t,n,r,u){return-r*((t=t/u-1)*t*t*t-1)+n},easeInOutQuart:function easeInOutQuart(e,t,n,r,u){return(t/=u/2)<1?r/2*t*t*t*t+n:-r/2*((t-=2)*t*t*t-2)+n},easeInQuint:function easeInQuint(e,t,n,r,u){return r*(t/=u)*t*t*t*t+n},easeOutQuint:function easeOutQuint(e,t,n,r,u){return r*((t=t/u-1)*t*t*t*t+1)+n},easeInOutQuint:function easeInOutQuint(e,t,n,r,u){return(t/=u/2)<1?r/2*t*t*t*t*t+n:r/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function easeInSine(e,t,n,r,u){return-r*Math.cos(t/u*(Math.PI/2))+r+n},easeOutSine:function easeOutSine(e,t,n,r,u){return r*Math.sin(t/u*(Math.PI/2))+n},easeInOutSine:function easeInOutSine(e,t,n,r,u){return-r/2*(Math.cos(Math.PI*t/u)-1)+n},easeInExpo:function easeInExpo(e,t,n,r,u){return 0==t?n:r*Math.pow(2,10*(t/u-1))+n},easeOutExpo:function easeOutExpo(e,t,n,r,u){return t==u?n+r:r*(1-Math.pow(2,-10*t/u))+n},easeInOutExpo:function easeInOutExpo(e,t,n,r,u){return 0==t?n:t==u?n+r:(t/=u/2)<1?r/2*Math.pow(2,10*(t-1))+n:r/2*(2-Math.pow(2,-10*--t))+n},easeInCirc:function easeInCirc(e,t,n,r,u){return-r*(Math.sqrt(1-(t/=u)*t)-1)+n},easeOutCirc:function easeOutCirc(e,t,n,r,u){return r*Math.sqrt(1-(t=t/u-1)*t)+n},easeInOutCirc:function easeInOutCirc(e,t,n,r,u){return(t/=u/2)<1?-r/2*(Math.sqrt(1-t*t)-1)+n:r/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function easeInElastic(e,t,n,r,u){var o=1.70158,i=0,a=r;if(0==t)return n;if(1==(t/=u))return n+r;if(i||(i=.3*u),a<Math.abs(r)){a=r;o=i/4}else o=i/(2*Math.PI)*Math.asin(r/a);return-a*Math.pow(2,10*(t-=1))*Math.sin((t*u-o)*(2*Math.PI)/i)+n},easeOutElastic:function easeOutElastic(e,t,n,r,u){var o=1.70158,i=0,a=r;if(0==t)return n;if(1==(t/=u))return n+r;if(i||(i=.3*u),a<Math.abs(r)){a=r;o=i/4}else o=i/(2*Math.PI)*Math.asin(r/a);return a*Math.pow(2,-10*t)*Math.sin((t*u-o)*(2*Math.PI)/i)+r+n},easeInOutElastic:function easeInOutElastic(e,t,n,r,u){var o=1.70158,i=0,a=r;if(0==t)return n;if(2==(t/=u/2))return n+r;if(i||(i=u*(.3*1.5)),a<Math.abs(r)){a=r;o=i/4}else o=i/(2*Math.PI)*Math.asin(r/a);return t<1?a*Math.pow(2,10*(t-=1))*Math.sin((t*u-o)*(2*Math.PI)/i)*-.5+n:a*Math.pow(2,-10*(t-=1))*Math.sin((t*u-o)*(2*Math.PI)/i)*.5+r+n},easeInBack:function easeInBack(e,t,n,r,u,o){return null==o&&(o=1.70158),r*(t/=u)*t*((o+1)*t-o)+n},easeOutBack:function easeOutBack(e,t,n,r,u,o){return null==o&&(o=1.70158),r*((t=t/u-1)*t*((o+1)*t+o)+1)+n},easeInOutBack:function easeInOutBack(e,t,n,r,u,o){return null==o&&(o=1.70158),(t/=u/2)<1?r/2*(t*t*((1+(o*=1.525))*t-o))+n:r/2*((t-=2)*t*((1+(o*=1.525))*t+o)+2)+n},easeInBounce:function easeInBounce(e,t,n,r,u){return r-$.easing.easeOutBounce(e,u-t,0,r,u)+n},easeOutBounce:function easeOutBounce(e,t,n,r,u){return(t/=u)<1/2.75?r*(7.5625*t*t)+n:t<2/2.75?r*(7.5625*(t-=1.5/2.75)*t+.75)+n:t<2.5/2.75?r*(7.5625*(t-=2.25/2.75)*t+.9375)+n:r*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function easeInOutBounce(e,t,n,r,u){return t<u/2?.5*$.easing.easeInBounce(e,2*t,0,r,u)+n:.5*$.easing.easeOutBounce(e,2*t-u,0,r,u)+.5*r+n}};
// CONCATENATED MODULE: ./test/utils.js
/* harmony export (binding) */n.d(t,"addEvent",(function(){return u})),
/* harmony export (binding) */n.d(t,"removeEvent",(function(){return o})),
/* harmony export (binding) */n.d(t,"getClosest",(function(){return i})),
/* harmony export (binding) */n.d(t,"getChildren",(function(){return a})),
/* harmony export (binding) */n.d(t,"getPreviousSibling",(function(){return c})),
/* harmony export (binding) */n.d(t,"getNextSibling",(function(){return f})),
/* harmony export (binding) */n.d(t,"mergeObjects",(function(){return s})),
/* harmony export (binding) */n.d(t,"deepMerge",(function(){return d})),
/* harmony export (binding) */n.d(t,"$",(function(){return l})),
/* harmony export (binding) */n.d(t,"$$",(function(){return p})),
/* harmony export (binding) */n.d(t,"emitEvent",(function(){return h})),
/* harmony export (binding) */n.d(t,"getParams",(function(){return b})),
/* harmony export (binding) */n.d(t,"isEqual",(function(){return m})),
/* harmony export (binding) */n.d(t,"ready",(function(){return v})),
/* harmony export (binding) */n.d(t,"shuffle",(function(){return _})),
/* harmony export (binding) */n.d(t,"animate",(function(){return g})),
/* harmony export (binding) */n.d(t,"transition",(function(){return y})),
/* harmony export (binding) */n.d(t,"debounce",(function(){return w})),
/* harmony export (binding) */n.d(t,"copy",(function(){return O})),
/* harmony export (binding) */n.d(t,"buildQuery",(function(){return M})),
/* harmony export (binding) */n.d(t,"updateURL",(function(){return I})),
/* harmony export (binding) */n.d(t,"findIndex",(function(){return S})),
/* harmony export (binding) */n.d(t,"find",(function(){return E})),
/* harmony export (binding) */n.d(t,"isInViewport",(function(){return j})),
/* harmony export (binding) */n.d(t,"dedupe",(function(){return k})),
/* harmony export (binding) */n.d(t,"getOffsetTop",(function(){return q})),
/* harmony export (binding) */n.d(t,"hasNumbers",(function(){return x})),
/* harmony export (binding) */n.d(t,"getStyle",(function(){return C})),
/* harmony export (binding) */n.d(t,"truncate",(function(){return P})),
/* harmony export (binding) */n.d(t,"effect",(function(){return A})),
/* harmony export (binding) */n.d(t,"animation",(function(){return Q}));
/*!
 * Add Event Listener
 */
var u=function addEvent(e,t,n){var r,u=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!t)throw"A selector is needed";if(!n||"function"!=typeof n)throw"A function callback is needed";// find vendor prefix
["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(e){return"function"==typeof document.body[e]&&(r=e,!0)})),"string"==typeof t?document.addEventListener(e,(function(e){e.target[r](t)&&n(e,e.target)}),u):t.addEventListener(e,(function(e){n(e,e.target)}),u)},o=function removeEvent(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!t)throw"A selector is needed";if(!n||"function"!=typeof n)throw"A function callback is needed";"string"==typeof t?document.removeEventListener(e,n,r):t.removeEventListener(e,n,r)},i=function getClosest(e,t){var n,r;// find vendor prefix
// traverse parents
for(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(e){return"function"==typeof document.body[e]&&(n=e,!0)}));e;){if((r=e.parentElement)&&r[n](t))return r;e=r}return null},a=function getChildren(e,t){var n;// find vendor prefix
return["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(e){return"function"==typeof document.body[e]&&(n=e,!0)})),Array.prototype.filter.call(e.children,(function(e){return e[n](t)}))},c=function getPreviousSibling(e,t){var n;// find vendor prefix
["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(e){return"function"==typeof document.body[e]&&(n=e,!0)}));// Get the next sibling element
var r=e.previousElementSibling;// If there's no selector, return the first sibling
if(!t)return r;// If the sibling matches our selector, use it
// If not, jump to the next sibling and continue the loop
for(;r;){if(r[n](t))return r;r=r.previousElementSibling}},f=function getNextSibling(e,t){var n;// find vendor prefix
["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(e){return"function"==typeof document.body[e]&&(n=e,!0)}));// Get the next sibling element
var r=e.nextElementSibling;// If there's no selector, return the first sibling
if(!t)return r;// If the sibling matches our selector, use it
// If not, jump to the next sibling and continue the loop
for(;r;){if(r[n](t))return r;r=r.nextElementSibling}},s=function mergeObjects(){for(var e={},t=0;t<arguments.length;t+=1)for(var n=arguments[t],r=Object.keys(n),u=0;u<r.length;u+=1)e[r[u]]=n[r[u]];return e},d=function deepMerge(){
// Make sure there are objects to merge
var e=arguments.length;if(!(e<1)){if(e<2)return arguments[0];// Merge all objects into first
for(var t=1;t<e;t++)for(var n in arguments[t])
// If it's an object, recursively merge
// Otherwise, push to key
"[object Object]"===Object.prototype.toString.call(arguments[t][n])?arguments[0][n]=deepMerge(arguments[0][n]||{},arguments[t][n]):arguments[0][n]=arguments[t][n];return arguments[0]}},l=function $(e,t){return(t||document).querySelector(e)},p=function $$(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))},h=function emitEvent(e,t,n){
// Make sure there's an event type
if(e){// Variables
t=t||window,n=n||{};// Create a new event
var r=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});// Dispatch the event
t.dispatchEvent(r)}},b=function getParams(e){var t={},n=document.createElement("a");n.href=e||window.location.href;var r=n.search.substring(1).split("&");if(r.length<1||r[0].length<1)return t;for(var u=0;u<r.length;u++){var o=r[u].split("=");t[decodeURIComponent(o[0])]=decodeURIComponent(o[1])}return t},m=function isEqual(e,t){
// Get the value type
var n=Object.prototype.toString.call(e);// If the two objects are not the same type, return false
if(n!==Object.prototype.toString.call(t))return!1;// If items are not an object or array, return false
if(["[object Array]","[object Object]"].indexOf(n)<0)return!1;// Compare the length of the length of the two items
var r="[object Array]"===n?e.length:Object.keys(e).length;if(r!==("[object Array]"===n?t.length:Object.keys(t).length))return!1;// Compare two items
var u=function compare(e,t){
// Get the object type
var n=Object.prototype.toString.call(e);// If an object or array, compare recursively
if(["[object Array]","[object Object]"].indexOf(n)>=0){if(!isEqual(e,t))return!1}else{
// If the two items are not the same type, return false
if(n!==Object.prototype.toString.call(t))return!1;// Else if it's a function, convert to a string and compare
// Otherwise, just compare
if("[object Function]"===n){if(e.toString()!==t.toString())return!1}else if(e!==t)return!1}};// Compare properties
if("[object Array]"===n){for(var o=0;o<r;o++)if(!1===u(e[o],t[o]))return!1}else for(var i in e)if(e.hasOwnProperty(i)&&!1===u(e[i],t[i]))return!1;// If nothing failed, return true
return!0},v=function ready(e){
// Sanity check
if("function"==typeof e)// If document is already loaded, run method
return"interactive"===document.readyState||"complete"===document.readyState?e():// Otherwise, wait until document is loaded
void document.addEventListener("DOMContentLoaded",e,!1)},_=function shuffle(e){// While there remain elements to shuffle...
for(var t,n,r=e.length;0!==r;)
// Pick a remaining element...
n=Math.floor(Math.random()*r),// And swap it with the current element.
t=e[r-=1],e[r]=e[n],e[n]=t;return e},g=function animate(e,t,n,r){
// If there's no element or animation, do nothing
e&&t&&(// Remove the [hidden] attribute
e.removeAttribute("hidden"),// Apply the animation
e.classList.add(t),// Detect when the animation ends
e.addEventListener("animationend",(function endAnimation(u){
// If the element should be hidden, hide it
r&&(
// Remove the animation class
e.classList.remove(t),e.setAttribute("hidden","true")),// Add callback when animation ends
n&&"function"==typeof n&&n(),// Remove this event listener
e.removeEventListener("animationend",endAnimation,!1)}),!1))},y=function transition(e,t,n,r){
// If there's no element or animation, do nothing
e&&t&&(// Remove the [hidden] attribute
e.removeAttribute("hidden"),// Apply the animation
e.classList.add(t),// Detect when the animation ends
e.addEventListener("transitionend",(function endAnimation(u){
// If the element should be hidden, hide it
r&&(
// Remove the animation class
e.classList.remove(t),e.setAttribute("hidden","true")),// Add callback when animation ends
n&&"function"==typeof n&&n(),// Remove this event listener
e.removeEventListener("transitionend",endAnimation,!1)}),!1))},w=function debounce(e){
// Setup a timer
var t;// Return a function to run debounced
return function(){
// Setup the arguments
var n=this,r=arguments;// If there's a timer, cancel it
t&&window.cancelAnimationFrame(t),// Setup the new requestAnimationFrame()
t=window.requestAnimationFrame((function(){e.apply(n,r)}))}},O=function copy(e){
//
// Methods
//
/**
   * Create an immutable copy of an object
   * @return {Object}
   */
var t=Object.prototype.toString.call(e).slice(8,-1).toLowerCase();
/**
   * Create an immutable copy of an array
   * @return {Array}
   */ // If an object
return"object"===t?function cloneObj(){
// Create new object
var t={};// Loop through each item in the original
// Recursively copy it's value and add to the clone
for(var n in e)e.hasOwnProperty(n)&&(t[n]=copy(e[n]));return t}():// If an array
"array"===t?function cloneArr(){return e.map((function(e){return copy(e)}))}():e},M=function buildQuery(e){if("string"==typeof e)return e;var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")},I=function updateURL(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(history.pushState){var r=t?e+"="+t:e,u=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+r+window.location.hash;n?window.history.pushState({path:u},"",u):window.history.replaceState({path:u},"",u)}},S=function findIndex(e,t,n){return e&&e.length&&t?n?e.findIndex((function(e){return e[n]===t})):e.indexOf(t):null},E=function find(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e&&e.length&&t&&n?r?e.filter((function(e){return e[n]===t})):e.find((function(e){return e[n]===t})):null},j=function isInViewport(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},k=function dedupe(e){return e.filter((function(t,n){return e.indexOf(t)===n}))},q=function getOffsetTop(e){var t=0;if(e.offsetParent)for(;e;)t+=e.offsetTop,e=e.offsetParent;return t>=0?t:0},x=function hasNumbers(e){return/\d/g.test(e)},C=function getStyle(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=window.getComputedStyle(e,null).getPropertyValue(t);if(x(r)){var u=r.split(" ");return u.length>=2?parseInt(u[n-1],10):parseInt(r,10)}return r},P=function truncate(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return e?e.length<=t?e:"".concat(e.substring(0,t),"..."):null},A=r,Q=function animation(e,t,n,r,u){var o=(new Date).getTime(),i=setInterval((function(){var a=(new Date).getTime()-o,c=A[r](a/n,a,e,t-e,n);u(c),a>=n&&clearInterval(i)}),1e3/60)};
/*!
 * Remove Event Listener
 */}
/******/])}));
//# sourceMappingURL=index.js.map