import $, {
  ready
} from 'jquery';
window.jQuery = $;
window.$ = $;
import './vendor/_slick.js';

$(function () {

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
  });

});