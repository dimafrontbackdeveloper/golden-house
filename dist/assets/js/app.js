/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', async () => {\r\n  const loadBG = document.querySelector('.load-bg'),\r\n    loadBGLogo = document.querySelector('.load-bg__logo'),\r\n    loadBGIntro = document.querySelector('.load-bg__intro');\r\n\r\n  document.body.classList.add('body--active');\r\n  loadBGLogo.classList.add('load-bg__logo--active');\r\n  loadBGIntro.classList.add('load-bg__intro--active');\r\n\r\n  await setTimeout(() => {\r\n    document.body.classList.remove('body--active');\r\n    loadBG.classList.add('load-bg--end');\r\n  }, 1100);\r\n});\r\n\r\n// отркрывание полного текста\r\nconst questionsItems = document.querySelectorAll('.questions__item'),\r\n  vacanciesItems = document.querySelectorAll('.vacancies__item');\r\n\r\nquestionsItems.forEach((el) => {\r\n  el.addEventListener('click', (e) => {\r\n    el.classList.toggle('questions__item--open');\r\n  });\r\n});\r\n\r\nvacanciesItems.forEach((el) => {\r\n  el.addEventListener('click', () => {\r\n    el.classList.toggle('vacancies__item--open');\r\n  });\r\n});\r\n\r\n// slider\r\nnew Swiper('.swiper-container', {\r\n  navigation: {\r\n    nextEl: '.arrow-next',\r\n    prevEl: '.arrow-prev',\r\n  },\r\n});\r\n\r\n// Смена цвета шапки\r\nconst header = document.querySelector('.header');\r\n(function () {\r\n  addEventListener('scroll', () => {\r\n    if (pageYOffset >= 100) {\r\n      header.classList.add('header--active');\r\n    } else {\r\n      header.classList.remove('header--active');\r\n    }\r\n  });\r\n})();\r\n\r\n// Burger\r\nconst closeBurger = document.querySelector('.close-burger'),\r\n  burger = document.querySelector('.burger'),\r\n  burgerMenu = document.querySelector('.burger-menu'),\r\n  headerNavItems = document.querySelectorAll('.header__nav-item');\r\n\r\ncloseBurger.addEventListener('click', () => {\r\n  document.body.classList.remove('body--active');\r\n  burgerMenu.classList.remove('burger-menu--active');\r\n});\r\n\r\nburger.addEventListener('click', () => {\r\n  document.body.classList.add('body--active');\r\n  burgerMenu.classList.add('burger-menu--active');\r\n});\r\n\r\nheaderNavItems.forEach((item) => {\r\n  item.addEventListener('click', () => {\r\n    document.body.classList.remove('body--active');\r\n    burgerMenu.classList.remove('burger-menu--active');\r\n  });\r\n});\r\n\r\n// Всплытие попапа регистрации/логина\r\nconst authButtons = document.querySelectorAll('.auth'),\r\n  alertGoodButtons = document.querySelectorAll('.alert-good-button'),\r\n  popupBG = document.querySelector('.popup-bg'),\r\n  popupContainer = document.querySelector('.popup-container'),\r\n  popup = document.querySelector('.popup'),\r\n  closePopup = document.querySelector('.close-popup'),\r\n  popupSend = document.querySelector('.popup__send'),\r\n  alertGood = document.querySelector('.alert-good'),\r\n  popupForm = document.querySelector('.popup__form');\r\n\r\npopup.addEventListener('click', (e) => {\r\n  e.stopPropagation();\r\n});\r\n\r\npopupSend.addEventListener('click', async (e) => {\r\n  e.preventDefault();\r\n  popupForm.classList.add('popup__form--hide');\r\n  alertGood.classList.add('alert-good--active');\r\n\r\n  await setTimeout(() => {\r\n    hideAuthPopup();\r\n  }, 1000);\r\n});\r\n\r\nconst hideAuthPopup = async () => {\r\n  document.body.classList.remove('body--active');\r\n  popupContainer.classList.remove('popup--active');\r\n  popupBG.classList.remove('popup-bg--active');\r\n\r\n  await setTimeout(() => {\r\n    popupForm.classList.remove('popup__form--hide');\r\n    alertGood.classList.remove('alert-good--active');\r\n  }, 1000);\r\n};\r\n\r\nclosePopup.addEventListener('click', (e) => {\r\n  e.stopPropagation();\r\n  hideAuthPopup();\r\n});\r\n\r\nauthButtons.forEach((button) => {\r\n  button.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    e.stopPropagation();\r\n    popupContainer.classList.toggle('popup--active');\r\n    popupBG.classList.toggle('popup-bg--active');\r\n    document.body.classList.toggle('body--active');\r\n  });\r\n});\r\n\r\nalertGoodButtons.forEach((button) => {\r\n  button.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n    e.stopPropagation();\r\n    // popupContainer.classList.toggle('popup--good');\r\n    // alertGood.classList.toggle('alert-good--active');\r\n    popupBG.classList.toggle('popup-bg--active');\r\n    document.body.classList.toggle('body--active');\r\n  });\r\n});\r\n\r\ndocument.body.addEventListener('click', (e) => {\r\n  console.log(e.target.classList);\r\n  e.stopPropagation();\r\n  hideAuthPopup();\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	
/******/ })()
;