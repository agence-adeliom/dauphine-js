!function webpackUniversalModuleDefinition(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports["Dauphine JS"]=r():e["Dauphine JS"]=r()}(window,(function(){/******/
return function(e){// webpackBootstrap
/******/ // The module cache
/******/var r={};
/******/
/******/ // The require function
/******/function __webpack_require__(t){
/******/
/******/ // Check if module is in cache
/******/if(r[t])
/******/return r[t].exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var n=r[t]={
/******/i:t,
/******/l:!1,
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[t].call(n.exports,n,n.exports,__webpack_require__),
/******/
/******/ // Flag the module as loaded
/******/n.l=!0,n.exports;
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
/******/__webpack_require__.c=r,
/******/
/******/ // define getter function for harmony exports
/******/__webpack_require__.d=function(e,r,t){
/******/__webpack_require__.o(e,r)||
/******/Object.defineProperty(e,r,{enumerable:!0,get:t})
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
/******/__webpack_require__.t=function(e,r){
/******/if(
/******/1&r&&(e=__webpack_require__(e)),8&r)return e;
/******/if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;
/******/var t=Object.create(null);
/******/
/******/if(__webpack_require__.r(t),
/******/Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)__webpack_require__.d(t,n,function(r){return e[r]}.bind(null,n));
/******/return t;
/******/},
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/__webpack_require__.n=function(e){
/******/var r=e&&e.__esModule?
/******/function getDefault(){return e.default}:
/******/function getModuleExports(){return e};
/******/
/******/return __webpack_require__.d(r,"a",r),r;
/******/},
/******/
/******/ // Object.prototype.hasOwnProperty.call
/******/__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},
/******/
/******/ // __webpack_public_path__
/******/__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0);
/******/}
/************************************************************************/
/******/([
/* 0 */
/***/function(e,r,t){"use strict";function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.r(r),
/* harmony export (binding) */t.d(r,"default",(function(){return n}));var n=
/* */
function(){function Emitter(){!function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,Emitter),this.events={}}return function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}(Emitter,[{key:"on",value:function on(e,r){this.events[e]||(this.events[e]=[]),this.events[e].push(r)}},{key:"emit",value:function emit(e,r){var t=this.events[e];t&&t.forEach((function(e){e.call(null,r)}))}}]),Emitter}();
/***/}
/******/])}));