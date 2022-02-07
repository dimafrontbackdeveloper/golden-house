// // убрать всем кнопкам стандартно поведение перезагрузки страницы
// const allButtons = document.getElementsByTagName('.button');

// for (let i = 0; i < allButtons.length; i++) {
//   allButtons[i].addEventListener('click', (e) => {
//     e.preventDefault();
//   });
// }

// при загрузке дом, показать контент
document.addEventListener('DOMContentLoaded', async () => {
  const loadBG = document.querySelector('.load-bg'),
    loadBGLogo = document.querySelector('.load-bg__logo'),
    loadBGIntro = document.querySelector('.load-bg__intro');

  document.body.classList.add('body--active');
  loadBGLogo.classList.add('load-bg__logo--active');
  loadBGIntro.classList.add('load-bg__intro--active');

  await setTimeout(() => {
    document.body.classList.remove('body--active');
    loadBG.classList.add('load-bg--end');
  }, 1100);
});

// отркрывание полного текста
const questionsItems = document.querySelectorAll('.questions__item'),
  vacanciesItems = document.querySelectorAll('.vacancies__item');

questionsItems.forEach((el) => {
  el.addEventListener('click', (e) => {
    el.classList.toggle('questions__item--open');
  });
});

vacanciesItems.forEach((el) => {
  el.addEventListener('click', () => {
    el.classList.toggle('vacancies__item--open');
  });
});

// slider
new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.arrow-next',
    prevEl: '.arrow-prev',
  },
});

// Смена цвета шапки
const header = document.querySelector('.header');
(function () {
  addEventListener('scroll', () => {
    if (pageYOffset >= 100) {
      header.classList.add('header--active');
    } else {
      header.classList.remove('header--active');
    }
  });
})();

// Burger
const closeBurger = document.querySelector('.close-burger'),
  burger = document.querySelector('.burger'),
  burgerMenu = document.querySelector('.burger-menu'),
  headerNavItems = document.querySelectorAll('.header__nav-item');

closeBurger.addEventListener('click', () => {
  document.body.classList.remove('body--active');
  burgerMenu.classList.remove('burger-menu--active');
});

burger.addEventListener('click', () => {
  document.body.classList.add('body--active');
  burgerMenu.classList.add('burger-menu--active');
});

headerNavItems.forEach((item) => {
  item.addEventListener('click', () => {
    document.body.classList.remove('body--active');
    burgerMenu.classList.remove('burger-menu--active');
  });
});

// Всплытие попапа регистрации/логина

const showPopupButtons = document.querySelectorAll('.show-popup'),
  darkBG = document.querySelector('.dark-bg'),
  popup = document.querySelector('.popup'),
  closePopup = document.querySelector('.close-popup'),
  popupForm = document.querySelector('.popup__form'),
  popupFormButton = document.querySelector('.popup__form-button'),
  alertGood = document.querySelector('.alert-good'),
  showAlertGoodButtons = document.querySelectorAll('.show-alert-good');

showPopupButtons.forEach((button) => {
  button.addEventListener('click', () => openFormPopup());
});

closePopup.addEventListener('click', () => hidePopup());

function hidePopup() {
  darkBG.classList.remove('dark-bg--active');
  popup.classList.remove('popup--active');
  document.body.classList.remove('body--active');
}

function openFormPopup() {
  darkBG.classList.add('dark-bg--active');
  popup.classList.add('popup--active');
  popupForm.classList.add('popup__form--active');
  closePopup.classList.add('close-popup--active');
  document.body.classList.add('body--active');
}

popupFormButton.addEventListener('click', (e) => hideFormPopup(e));

async function hideFormPopup(e) {
  e.preventDefault();

  popupForm.classList.remove('popup__form--active');
  closePopup.classList.remove('close-popup--active');
  openAlertGood();

  await setTimeout(() => {
    darkBG.classList.remove('dark-bg--active');
    popup.classList.remove('popup--active');

    hideAlertGood();
    document.body.classList.remove('body--active');
  }, 1000);
}

function openAlertGood() {
  alertGood.classList.add('alert-good--active');
}

function hideAlertGood() {
  alertGood.classList.remove('alert-good--active');
}

showAlertGoodButtons.forEach((button) => {
  button.addEventListener('click', async (e) => {
    e.preventDefault();

    darkBG.classList.add('dark-bg--active');
    popup.classList.add('popup--active');
    openAlertGood();
    setTimeout(() => {
      darkBG.classList.remove('dark-bg--active');
      popup.classList.remove('popup--active');
      hideAlertGood();
    }, 1400);
  });
});
