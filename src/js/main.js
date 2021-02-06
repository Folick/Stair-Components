import $, {
  ready
} from 'jquery';
window.jQuery = $;
window.$ = $;
import './vendor/_slick.js';

$(function () {
  $('.burger').on('click', function () {
    $(this).toggleClass('burger--active'),
      $('.menu__list').toggleClass('menu__list--active'),
      $('body').toggleClass('no-scroll');
  });
  let menuBtn = $(".burger");
  let menu = $(".menu__list");
  $(document).on('click', function (e) {
    if (!menuBtn.is(e.target) && menuBtn.has(e.target).length === 0 &&
      !menu.is(e.target) && menu.has(e.target).length === 0
    ) {
      menu.removeClass('menu__list--active');
      $('.burger').removeClass('burger--active'),
        $('body').removeClass('no-scroll');
    }
  });
  $('.hero__slider').slick({
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
  });
  $('.product__slider').slick({
    slidesToShow: 5,
    infinite: true,
    prevArrow: `<button class="btn-reset slick-prev slick-arrow"><svg><use xlink:href="./images/sprite.svg#slide-prev"></use></svg></button>`,
    nextArrow: `<button class="btn-reset slick-next slick-arrow"><svg><use xlink:href="./images/sprite.svg#slide-next"></use></svg></button>`,
    responsive: [{
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 825,
        settings: {
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 500,
        settings: {
          centerMode: true,
          centerPadding: '50px',
          slidesToShow: 1,
        }
      }
    ]

  });
});