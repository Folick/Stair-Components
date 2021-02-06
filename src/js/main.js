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
    speed: 300,
    dots: true,
    arrows: false,
  });

});