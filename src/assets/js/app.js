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
const authButtons = document.querySelectorAll('.auth'),
  alertGoodButtons = document.querySelectorAll('.alert-good-button'),
  popupBG = document.querySelector('.popup-bg'),
  popupContainer = document.querySelector('.popup-container'),
  popup = document.querySelector('.popup'),
  closePopup = document.querySelector('.close-popup'),
  popupSend = document.querySelector('.popup__send'),
  alertGood = document.querySelector('.alert-good'),
  popupForm = document.querySelector('.popup__form');

popup.addEventListener('click', (e) => {
  e.stopPropagation();
});

popupSend.addEventListener('click', async (e) => {
  e.preventDefault();
  popupForm.classList.add('popup__form--hide');
  alertGood.classList.add('alert-good--active');

  await setTimeout(() => {
    hideAuthPopup();
  }, 1000);
});

const hideAuthPopup = async () => {
  document.body.classList.remove('body--active');
  popupContainer.classList.remove('popup--active');
  popupBG.classList.remove('popup-bg--active');

  await setTimeout(() => {
    popupForm.classList.remove('popup__form--hide');
    alertGood.classList.remove('alert-good--active');
  }, 1000);
};

closePopup.addEventListener('click', (e) => {
  e.stopPropagation();
  hideAuthPopup();
});

authButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    popupContainer.classList.toggle('popup--active');
    popupBG.classList.toggle('popup-bg--active');
    document.body.classList.toggle('body--active');
  });
});

alertGoodButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    // popupContainer.classList.toggle('popup--good');
    // alertGood.classList.toggle('alert-good--active');
    popupBG.classList.toggle('popup-bg--active');
    document.body.classList.toggle('body--active');
  });
});

document.body.addEventListener('click', (e) => {
  console.log(e.target.classList);
  e.stopPropagation();
  hideAuthPopup();
});
