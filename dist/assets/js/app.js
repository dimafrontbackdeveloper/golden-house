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

eval("// // убрать всем кнопкам стандартно поведение перезагрузки страницы\r\n// const allButtons = document.getElementsByTagName('.button');\r\n\r\n// for (let i = 0; i < allButtons.length; i++) {\r\n//   allButtons[i].addEventListener('click', (e) => {\r\n//     e.preventDefault();\r\n//   });\r\n// }\r\n\r\n// при загрузке дом, показать контент\r\ndocument.addEventListener('DOMContentLoaded', async () => {\r\n  const loadBG = document.querySelector('.load-bg'),\r\n    loadBGLogo = document.querySelector('.load-bg__logo'),\r\n    loadBGIntro = document.querySelector('.load-bg__intro');\r\n\r\n  document.body.classList.add('body--active');\r\n  loadBGLogo.classList.add('load-bg__logo--active');\r\n  loadBGIntro.classList.add('load-bg__intro--active');\r\n\r\n  await setTimeout(() => {\r\n    document.body.classList.remove('body--active');\r\n    loadBG.classList.add('load-bg--end');\r\n  }, 1100);\r\n});\r\n\r\n// отркрывание полного текста\r\nconst questionsItems = document.querySelectorAll('.questions__item'),\r\n  vacanciesItems = document.querySelectorAll('.vacancies__item');\r\n\r\nquestionsItems.forEach((el) => {\r\n  el.addEventListener('click', (e) => {\r\n    el.classList.toggle('questions__item--open');\r\n  });\r\n});\r\n\r\nvacanciesItems.forEach((el) => {\r\n  el.addEventListener('click', () => {\r\n    el.classList.toggle('vacancies__item--open');\r\n  });\r\n});\r\n\r\n// slider\r\nnew Swiper('.swiper-container', {\r\n  navigation: {\r\n    nextEl: '.arrow-next',\r\n    prevEl: '.arrow-prev',\r\n  },\r\n});\r\n\r\n// Смена цвета шапки\r\nconst header = document.querySelector('.header');\r\n(function () {\r\n  addEventListener('scroll', () => {\r\n    if (pageYOffset >= 100) {\r\n      header.classList.add('header--active');\r\n    } else {\r\n      header.classList.remove('header--active');\r\n    }\r\n  });\r\n})();\r\n\r\n// Burger\r\nconst closeBurger = document.querySelector('.close-burger'),\r\n  burger = document.querySelector('.burger'),\r\n  burgerMenu = document.querySelector('.burger-menu'),\r\n  headerNavItems = document.querySelectorAll('.header__nav-item');\r\n\r\ncloseBurger.addEventListener('click', () => {\r\n  document.body.classList.remove('body--active');\r\n  burgerMenu.classList.remove('burger-menu--active');\r\n});\r\n\r\nburger.addEventListener('click', () => {\r\n  document.body.classList.add('body--active');\r\n  burgerMenu.classList.add('burger-menu--active');\r\n});\r\n\r\nheaderNavItems.forEach((item) => {\r\n  item.addEventListener('click', () => {\r\n    document.body.classList.remove('body--active');\r\n    burgerMenu.classList.remove('burger-menu--active');\r\n  });\r\n});\r\n\r\n// Всплытие попапа регистрации/логина\r\n\r\nconst showPopupButtons = document.querySelectorAll('.show-popup'),\r\n  darkBG = document.querySelector('.dark-bg'),\r\n  popup = document.querySelector('.popup'),\r\n  closePopup = document.querySelector('.close-popup'),\r\n  popupForm = document.querySelector('.popup__form'),\r\n  popupFormButton = document.querySelector('.popup__form-button'),\r\n  alertGood = document.querySelector('.alert-good'),\r\n  showAlertGoodButtons = document.querySelectorAll('.show-alert-good');\r\n\r\nshowPopupButtons.forEach((button) => {\r\n  button.addEventListener('click', () => openFormPopup());\r\n});\r\n\r\nclosePopup.addEventListener('click', () => hidePopup());\r\n\r\nfunction hidePopup() {\r\n  darkBG.classList.remove('dark-bg--active');\r\n  popup.classList.remove('popup--active');\r\n  document.body.classList.remove('body--active');\r\n}\r\n\r\nfunction openFormPopup() {\r\n  darkBG.classList.add('dark-bg--active');\r\n  popup.classList.add('popup--active');\r\n  popupForm.classList.add('popup__form--active');\r\n  closePopup.classList.add('close-popup--active');\r\n  document.body.classList.add('body--active');\r\n}\r\n\r\npopupFormButton.addEventListener('click', (e) => hideFormPopup(e));\r\n\r\nasync function hideFormPopup(e) {\r\n  e.preventDefault();\r\n\r\n  popupForm.classList.remove('popup__form--active');\r\n  closePopup.classList.remove('close-popup--active');\r\n  openAlertGood();\r\n\r\n  await setTimeout(() => {\r\n    darkBG.classList.remove('dark-bg--active');\r\n    popup.classList.remove('popup--active');\r\n\r\n    hideAlertGood();\r\n    document.body.classList.remove('body--active');\r\n  }, 1000);\r\n}\r\n\r\nfunction openAlertGood() {\r\n  alertGood.classList.add('alert-good--active');\r\n}\r\n\r\nfunction hideAlertGood() {\r\n  alertGood.classList.remove('alert-good--active');\r\n}\r\n\r\nshowAlertGoodButtons.forEach((button) => {\r\n  button.addEventListener('click', async (e) => {\r\n    e.preventDefault();\r\n\r\n    darkBG.classList.add('dark-bg--active');\r\n    popup.classList.add('popup--active');\r\n    openAlertGood();\r\n    setTimeout(() => {\r\n      darkBG.classList.remove('dark-bg--active');\r\n      popup.classList.remove('popup--active');\r\n      hideAlertGood();\r\n    }, 1400);\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

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