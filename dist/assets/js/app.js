!(function () {
  const e = document.querySelectorAll('.questions__item'),
    t = document.querySelectorAll('.vacancies__item');
  e.forEach((e) => {
    e.addEventListener('click', (t) => {
      e.classList.toggle('questions__item--open');
    });
  }),
    t.forEach((e) => {
      e.addEventListener('click', () => {
        e.classList.toggle('vacancies__item--open');
      });
    }),
    new Swiper('.swiper-container', {
      navigation: { nextEl: '.arrow-next', prevEl: '.arrow-prev' },
    });
  const c = document.querySelector('.header');
  addEventListener('scroll', () => {
    pageYOffset >= 100 ? c.classList.add('header--active') : c.classList.remove('header--active');
  });
  const o = document.querySelector('.close-burger'),
    s = document.querySelector('.burger'),
    a = document.querySelector('.burger-menu'),
    r = document.querySelectorAll('.header__nav-item');
  o.addEventListener('click', () => {
    document.body.classList.remove('body--active'), a.classList.remove('burger-menu--active');
  }),
    s.addEventListener('click', () => {
      document.body.classList.add('body--active'), a.classList.add('burger-menu--active');
    }),
    r.forEach((e) => {
      e.addEventListener('click', () => {
        document.body.addEventListener('DOMContentLoaded', () => {
          document.body.classList.remove('body--active'), a.classList.remove('burger-menu--active');
        });
      });
    });
  const i = document.querySelectorAll('.show-popup'),
    d = document.querySelector('.dark-bg'),
    n = document.querySelector('.popup'),
    l = document.querySelector('.close-popup'),
    u = document.querySelector('.popup__form'),
    v = document.querySelector('.popup__form-button'),
    m = document.querySelector('.alert-good'),
    p = document.querySelectorAll('.show-alert-good');
  function L() {
    m.classList.add('alert-good--active');
  }
  function y() {
    m.classList.remove('alert-good--active');
  }
  i.forEach((e) => {
    e.addEventListener(
      'click',
      () => (
        d.classList.add('dark-bg--active'),
        n.classList.add('popup--active'),
        u.classList.add('popup__form--active'),
        l.classList.add('close-popup--active'),
        void document.body.classList.add('body--active')
      ),
    );
  }),
    l.addEventListener(
      'click',
      () => (
        d.classList.remove('dark-bg--active'),
        n.classList.remove('popup--active'),
        void document.body.classList.remove('body--active')
      ),
    ),
    v.addEventListener('click', (e) =>
      (async function (e) {
        e.preventDefault(),
          u.classList.remove('popup__form--active'),
          l.classList.remove('close-popup--active'),
          L(),
          await setTimeout(() => {
            d.classList.remove('dark-bg--active'),
              n.classList.remove('popup--active'),
              y(),
              document.body.classList.remove('body--active');
          }, 1e3);
      })(e),
    ),
    p.forEach((e) => {
      e.addEventListener('click', async (e) => {
        e.preventDefault(),
          d.classList.add('dark-bg--active'),
          n.classList.add('popup--active'),
          L(),
          setTimeout(() => {
            d.classList.remove('dark-bg--active'), n.classList.remove('popup--active'), y();
          }, 1400);
      });
    });
})();
