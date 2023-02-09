/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bootstrap-navbar.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bootstrap-navbar.js":
/*!************************************!*\
  !*** ./src/js/bootstrap-navbar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n/*eslint-disable*/\n\n\n/*-----------------------------------------------\n|   Top navigation opacity on scroll\n-----------------------------------------------*/\nconst navbarInit = () => {\n\tconst Selector = {\n\t\tNAV_ITEM: '.nav-item',\n\t\tNAVBAR: '.navbar',\n\t\tDROPDOWN: '.dropdown'\n\t};\n\n\t_utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resize(() => {\n\t\tlet navElements = document.querySelectorAll('.nav-item');\n\t\tnavElements.forEach(item => {\n\t\t\titem.removeAttribute('style');\n\t\t});\n\t\tlet dropElements = document.querySelectorAll('.category-list');\n\t\tdropElements.forEach(item => {\n\t\t\titem.innerHTML = ' ';\n\t\t});\n\t\tnavbar();\n\t});\n\n\tconst navbar = () => {\n\t\tlet totalWidth = 0;\n\n\t\tlet nav = document.querySelector(Selector.NAVBAR).clientWidth;\n\n\t\tlet dropdown = document.querySelector('.dropdown').clientWidth;\n\n\t\t// let navbarNav = document.querySelector('.navbar-nav').clientWidth;\n\n\t\tlet navbarWidth = nav - dropdown;\n\n\t\tlet elements = document.querySelectorAll('.nav-item');\n\n\t\telements.forEach(item => {\n\t\t\tlet itemWidth = item.clientWidth;\n\n\t\t\ttotalWidth = totalWidth + itemWidth;\n\n\t\t\tif (totalWidth > navbarWidth) {\n\t\t\t\tif (!item.classList.contains('dropdown')) {\n\t\t\t\t\titem.style.display = 'none';\n\t\t\t\t\tlet link = item.firstChild;\n\t\t\t\t\tlet linkItem = link.cloneNode(true);\n\n\t\t\t\t\tdocument.querySelector('.category-list').appendChild(linkItem);\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\n\t\tlet dropdownMenu = document.querySelectorAll('.dropdown-menu .nav-link');\n\n\t\tdropdownMenu.forEach(item => {\n\t\t\titem.classList.remove('nav-link');\n\t\t\titem.classList.add('dropdown-item');\n\t\t});\n\t};\n\n\twindow.addEventListener('load', event => {\n\t\tnavbar();\n\t});\n\n\tnavbar();\n\n\t// Toggle bg class on window resize\n\n\tlet backToToP = document.querySelector('.back-to-top');\n\tlet navbarEl = document.querySelector('.navbar');\n\n\tlet myScrollFunc = function () {\n\t\tlet y = window.scrollY;\n\t\tif (y >= 540) {\n\t\t\tbackToToP.style.opacity = '1';\n\t\t\tnavbarEl.classList.add('sticky-top');\n\t\t\tnavbarEl.classList.add('bg-white');\n\t\t} else {\n\t\t\tbackToToP.style.opacity = '0';\n\t\t\tnavbarEl.classList.remove('bg-light');\n\t\t}\n\t};\n\n\tlet navbarLink = document.querySelectorAll('.nav-link');\n\n\tdocument.addEventListener('click', function (e) {\n\t\tfor (let x = 0; x < navbarLink.length; x++) {\n\t\t\tnavbarLink[x].classList.remove('active');\n\t\t}\n\n\t\te.target.closest('li').classList.add('active');\n\t});\n\n\twindow.addEventListener('scroll', myScrollFunc);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbarInit);\n\n\n//# sourceURL=webpack:///./src/js/bootstrap-navbar.js?");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* -------------------------------------------------------------------------- */\n/*                                    Utils                                   */\n/* -------------------------------------------------------------------------- */\nconst docReady = (fn) => {\n  // see if DOM is already available\n  if (document.readyState === \"loading\") {\n    document.addEventListener(\"DOMContentLoaded\", fn);\n  } else {\n    setTimeout(fn, 1);\n  }\n};\n\nconst resize = (fn) => window.addEventListener(\"resize\", fn);\n\nconst isIterableArray = (array) => Array.isArray(array) && !!array.length;\n\nconst camelize = (str) => {\n  const text = str.replace(/[-_\\s.]+(.)?/g, (_, c) =>\n    c ? c.toUpperCase() : \"\"\n  );\n  return `${text.substr(0, 1).toLowerCase()}${text.substr(1)}`;\n};\n\nconst getData = (el, data) => {\n  try {\n    return JSON.parse(el.dataset[camelize(data)]);\n  } catch (e) {\n    return el.dataset[camelize(data)];\n  }\n};\n\n/* ----------------------------- Colors function ---------------------------- */\n\nconst hexToRgb = (hexValue) => {\n  let hex;\n  hexValue.indexOf(\"#\") === 0\n    ? (hex = hexValue.substring(1))\n    : (hex = hexValue);\n  // Expand shorthand form (e.g. \"03F\") to full form (e.g. \"0033FF\")\n  const shorthandRegex = /^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i;\n  const result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})$/i.exec(\n    hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)\n  );\n  return result\n    ? [\n        parseInt(result[1], 16),\n        parseInt(result[2], 16),\n        parseInt(result[3], 16),\n      ]\n    : null;\n};\n\nconst rgbaColor = (color = \"#fff\", alpha = 0.5) =>\n  `rgba(${hexToRgb(color)}, ${alpha})`;\n\n/* --------------------------------- Colors --------------------------------- */\n\nconst colors = {\n  primary: \"#0091e9\",\n  secondary: \"#002147\",\n  success: \"#00d27a\",\n  info: \"#27bcfd\",\n  warning: \"#FFC928\",\n  danger: \"#EE4D47\",\n  light: \"#F9FAFD\",\n  dark: \"#000\",\n};\n\nconst grays = {\n  white: \"#fff\",\n  100: \"#f9fafd\",\n  200: \"#edf2f9\",\n  300: \"#d8e2ef\",\n  400: \"#b6c1d2\",\n  500: \"#9da9bb\",\n  600: \"#748194\",\n  700: \"#5e6e82\",\n  800: \"#4d5969\",\n  900: \"#344050\",\n  1000: \"#232e3c\",\n  1100: \"#0b1727\",\n  black: \"#000\",\n};\n\nconst hasClass = (el, className) => {\n  !el && false;\n  return el.classList.value.includes(className);\n};\n\nconst addClass = (el, className) => {\n  el.classList.add(className);\n};\n\nconst getOffset = (el) => {\n  const rect = el.getBoundingClientRect();\n  const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;\n  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;\n  return { top: rect.top + scrollTop, left: rect.left + scrollLeft };\n};\n\nconst isScrolledIntoView = (el) => {\n  let top = el.offsetTop;\n  let left = el.offsetLeft;\n  const width = el.offsetWidth;\n  const height = el.offsetHeight;\n\n  while (el.offsetParent) {\n    // eslint-disable-next-line no-param-reassign\n    el = el.offsetParent;\n    top += el.offsetTop;\n    left += el.offsetLeft;\n  }\n\n  return {\n    all:\n      top >= window.pageYOffset &&\n      left >= window.pageXOffset &&\n      top + height <= window.pageYOffset + window.innerHeight &&\n      left + width <= window.pageXOffset + window.innerWidth,\n    partial:\n      top < window.pageYOffset + window.innerHeight &&\n      left < window.pageXOffset + window.innerWidth &&\n      top + height > window.pageYOffset &&\n      left + width > window.pageXOffset,\n  };\n};\n\nconst breakpoints = {\n  xs: 0,\n  sm: 576,\n  md: 768,\n  lg: 992,\n  xl: 1200,\n  xxl: 1540,\n};\n\nconst getBreakpoint = (el) => {\n  const classes = el && el.classList.value;\n  let breakpoint;\n  if (classes) {\n    breakpoint =\n      breakpoints[\n        classes\n          .split(\" \")\n          .filter((cls) => cls.includes(\"navbar-expand-\"))\n          .pop()\n          .split(\"-\")\n          .pop()\n      ];\n  }\n  return breakpoint;\n};\n\n/* --------------------------------- Cookie --------------------------------- */\n\nconst setCookie = (name, value, expire) => {\n  const expires = new Date();\n  expires.setTime(expires.getTime() + expire);\n  document.cookie = name + \"=\" + value + \";expires=\" + expires.toUTCString();\n};\n\nconst getCookie = (name) => {\n  var keyValue = document.cookie.match(\"(^|;) ?\" + name + \"=([^;]*)(;|$)\");\n  return keyValue ? keyValue[2] : keyValue;\n};\n\nconst settings = {\n  tinymce: {\n    theme: \"oxide\",\n  },\n  chart: {\n    borderColor: \"rgba(255, 255, 255, 0.8)\",\n  },\n};\n\n/* -------------------------- Chart Initialization -------------------------- */\n\nconst newChart = (chart, config) => {\n  const ctx = chart.getContext(\"2d\");\n  return new window.Chart(ctx, config);\n};\n\n/* ---------------------------------- Store --------------------------------- */\n\nconst getItemFromStore = (key, defaultValue, store = localStorage) => {\n  try {\n    return JSON.parse(store.getItem(key)) || defaultValue;\n  } catch {\n    return store.getItem(key) || defaultValue;\n  }\n};\n\nconst setItemToStore = (key, payload, store = localStorage) =>\n  store.setItem(key, payload);\nconst getStoreSpace = (store = localStorage) =>\n  parseFloat(\n    (\n      escape(encodeURIComponent(JSON.stringify(store))).length /\n      (1024 * 1024)\n    ).toFixed(2)\n  );\n\nconst utils = {\n  docReady,\n  resize,\n  isIterableArray,\n  camelize,\n  getData,\n  hasClass,\n  addClass,\n  hexToRgb,\n  rgbaColor,\n  colors,\n  grays,\n  getOffset,\n  isScrolledIntoView,\n  getBreakpoint,\n  setCookie,\n  getCookie,\n  newChart,\n  settings,\n  getItemFromStore,\n  setItemToStore,\n  getStoreSpace,\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (utils);\n\n\n//# sourceURL=webpack:///./src/js/utils.js?");

/***/ })

/******/ });