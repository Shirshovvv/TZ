/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tz/./src/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n\r\ndocument.addEventListener('DOMContentLoaded', ()=>{\r\n    const cards = document.querySelectorAll('.card');\r\n    if(cards.length > 0){\r\n        cards.forEach(card=>{\r\n            const cardTimer = card.querySelector('.card__timer')\r\n            if(cardTimer){\r\n                const btn = card.querySelector('.card__banner__button');\r\n                const timerBody = card.querySelector('.card__timer__body')\r\n                countDown(timerBody, btn);\r\n            }\r\n            card.addEventListener('click', function(e){\r\n                if(e.target.classList == 'card__banner__button' && !e.target.disabled){\r\n                    console.log(this.dataset.name)\r\n                }\r\n            })\r\n        })\r\n    }\r\n    function countDown(timerBody, btn) {\r\n        let seconds = 81370,\r\n        timer = setInterval(function(){\r\n            if(seconds > 0){\r\n                seconds --;\r\n                let h = seconds/3600 ^ 0,\r\n                    m = (seconds - h*3600)/60 ^ 0,\r\n                    s = seconds - h*3600 - m*60,\r\n                    time = (h<10 ? \"0\"+h : h)+\":\"+(m<10 ? \"0\"+m : m)+\":\"+(s<10 ? \"0\"+s : s);\r\n                    timerBody.innerText = time\r\n            } else {\r\n                clearInterval(timer);\r\n                btn.setAttribute('disabled', '')\r\n            }\r\n        }, 1000)\r\n    }\r\n}) \n\n//# sourceURL=webpack://tz/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;