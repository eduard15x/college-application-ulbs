import {toggleMenuBurger} from './burger/burgerMenu.js'
import {getJSON} from './data/getJson.js'

toggleMenuBurger();
getJSON();

$(document).ready(function(){
    $('.carousel-intro').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
      });
});
