!function webpackUniversalModuleDefinition(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["Dauphine JS"]=t():e["Dauphine JS"]=t()}(window,(function(){return function(e){var t={};function __webpack_require__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)__webpack_require__.d(n,r,function(t){return e[t]}.bind(null,r));return n},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"addEvent",(function(){return addEvent})),n.d(t,"removeEvent",(function(){return removeEvent})),n.d(t,"getClosest",(function(){return getClosest})),n.d(t,"getChildren",(function(){return getChildren})),n.d(t,"getPreviousSibling",(function(){return getPreviousSibling})),n.d(t,"getNextSibling",(function(){return getNextSibling})),n.d(t,"mergeObjects",(function(){return mergeObjects})),n.d(t,"deepMerge",(function(){return deepMerge})),n.d(t,"$",(function(){return $})),n.d(t,"$$",(function(){return $$})),n.d(t,"emitEvent",(function(){return emitEvent})),n.d(t,"getParams",(function(){return getParams})),n.d(t,"isEqual",(function(){return isEqual})),n.d(t,"ready",(function(){return ready})),n.d(t,"shuffle",(function(){return shuffle})),n.d(t,"animate",(function(){return animate})),n.d(t,"transition",(function(){return transition})),n.d(t,"debounce",(function(){return debounce})),n.d(t,"copy",(function(){return copy})),n.d(t,"buildQuery",(function(){return buildQuery})),n.d(t,"updateURL",(function(){return updateURL})),n.d(t,"findIndex",(function(){return findIndex})),n.d(t,"find",(function(){return find})),n.d(t,"isInViewport",(function(){return isInViewport})),n.d(t,"dedupe",(function(){return dedupe})),n.d(t,"getOffsetTop",(function(){return getOffsetTop}));const addEvent=function(e,t,n,r=!1){if(!t)throw"A selector is needed";if(!n||"function"!=typeof n)throw"A function callback is needed";var o;["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(e){return"function"==typeof document.body[e]&&(o=e,!0)})),"string"==typeof t?document.addEventListener(e,e=>{e.target[o](t)&&n(e,e.target)},r):t.addEventListener(e,e=>{n(e,e.target)},r)},removeEvent=function(e,t,n,r=!1){if(!t)throw"A selector is needed";if(!n||"function"!=typeof n)throw"A function callback is needed";"string"==typeof t?document.removeEventListener(e,n,r):t.removeEventListener(e,n,r)},getClosest=function(e,t){var n,r;for(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(e){return"function"==typeof document.body[e]&&(n=e,!0)}));e;){if((r=e.parentElement)&&r[n](t))return r;e=r}return null},getChildren=function(e,t){var n;return["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(e){return"function"==typeof document.body[e]&&(n=e,!0)})),Array.prototype.filter.call(e.children,(function(e){return e[n](t)}))},getPreviousSibling=function(e,t){var n;["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(e){return"function"==typeof document.body[e]&&(n=e,!0)}));var r=e.previousElementSibling;if(!t)return r;for(;r;){if(r[n](t))return r;r=r.previousElementSibling}},getNextSibling=function(e,t){var n;["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"].some((function(e){return"function"==typeof document.body[e]&&(n=e,!0)}));var r=e.nextElementSibling;if(!t)return r;for(;r;){if(r[n](t))return r;r=r.nextElementSibling}},mergeObjects=function(){for(var e={},t=0;t<arguments.length;t+=1)for(var n=arguments[t],r=Object.keys(n),o=0;o<r.length;o+=1)e[r[o]]=n[r[o]];return e},deepMerge=function(){var e=arguments.length;if(!(e<1)){if(e<2)return arguments[0];for(var t=1;t<e;t++)for(var n in arguments[t])"[object Object]"===Object.prototype.toString.call(arguments[t][n])?arguments[0][n]=deepMerge(arguments[0][n]||{},arguments[t][n]):arguments[0][n]=arguments[t][n];return arguments[0]}},$=function(e,t){return(t||document).querySelector(e)},$$=function(e,t){return Array.prototype.slice.call((t||document).querySelectorAll(e))},emitEvent=function(e,t,n){if(e){t=t||window,n=n||{};var r=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t.dispatchEvent(r)}},getParams=function(e){var t={},n=document.createElement("a");n.href=e||window.location.href;var r=n.search.substring(1).split("&");if(r.length<1||r[0].length<1)return t;for(var o=0;o<r.length;o++){var i=r[o].split("=");t[decodeURIComponent(i[0])]=decodeURIComponent(i[1])}return t},isEqual=function(e,t){var n=Object.prototype.toString.call(e);if(n!==Object.prototype.toString.call(t))return!1;if(["[object Array]","[object Object]"].indexOf(n)<0)return!1;var r="[object Array]"===n?e.length:Object.keys(e).length;if(r!==("[object Array]"===n?t.length:Object.keys(t).length))return!1;var compare=function(e,t){var n=Object.prototype.toString.call(e);if(["[object Array]","[object Object]"].indexOf(n)>=0){if(!isEqual(e,t))return!1}else{if(n!==Object.prototype.toString.call(t))return!1;if("[object Function]"===n){if(e.toString()!==t.toString())return!1}else if(e!==t)return!1}};if("[object Array]"===n){for(var o=0;o<r;o++)if(!1===compare(e[o],t[o]))return!1}else for(var i in e)if(e.hasOwnProperty(i)&&!1===compare(e[i],t[i]))return!1;return!0},ready=function(e){if("function"==typeof e)return"interactive"===document.readyState||"complete"===document.readyState?e():void document.addEventListener("DOMContentLoaded",e,!1)},shuffle=function(e){for(var t,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),t=e[r-=1],e[r]=e[n],e[n]=t;return e},animate=function(e,t,n,r){e&&t&&(e.removeAttribute("hidden"),e.classList.add(t),e.addEventListener("animationend",(function endAnimation(o){r&&(e.classList.remove(t),e.setAttribute("hidden","true")),n&&"function"==typeof n&&n(),e.removeEventListener("animationend",endAnimation,!1)}),!1))},transition=function(e,t,n,r){e&&t&&(e.removeAttribute("hidden"),e.classList.add(t),e.addEventListener("transitionend",(function endAnimation(o){r&&(e.classList.remove(t),e.setAttribute("hidden","true")),n&&"function"==typeof n&&n(),e.removeEventListener("transitionend",endAnimation,!1)}),!1))},debounce=function(e){var t;return function(){var n=this,r=arguments;t&&window.cancelAnimationFrame(t),t=window.requestAnimationFrame((function(){e.apply(n,r)}))}},copy=function(e){var t=Object.prototype.toString.call(e).slice(8,-1).toLowerCase();return"object"===t?function(){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[n]=copy(e[n]));return t}():"array"===t?e.map((function(e){return copy(e)})):e},buildQuery=function(e){if("string"==typeof e)return e;var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")},updateURL=function(e,t,n=!1){if(history.pushState){const r=t?e+"="+t:e,o=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+r+window.location.hash;n?window.history.pushState({path:o},"",o):window.history.replaceState({path:o},"",o)}},findIndex=function(e,t,n){return e&&e.length&&t?n?e.findIndex(e=>e[n]===t):e.indexOf(t):null},find=function(e,t,n,r=!1){return e&&e.length&&t&&n?r?e.filter(e=>e[n]===t):e.find(e=>e[n]===t):null},isInViewport=function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)},dedupe=function(e){return e.filter((function(t,n){return e.indexOf(t)===n}))},getOffsetTop=function(e){var t=0;if(e.offsetParent)for(;e;)t+=e.offsetTop,e=e.offsetParent;return t>=0?t:0}}])}));