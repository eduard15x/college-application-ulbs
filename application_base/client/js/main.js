import { authentication } from './authentication/authentication.js';
import {toggleMenuBurger} from './burger/burgerMenu.js';
import {getJSONHotels} from './data/getJsonHotels.js';
import { getJSONTeam } from './data/getJsonTeam.js';
import {displaySections, togglePassword} from './account/myAccount.js';
import { displayContainers } from './manipulate/displayContainers.js';

toggleMenuBurger();
getJSONHotels();
getJSONTeam();
displaySections();
togglePassword();
displayContainers();
authentication();

$(document).ready(function(){
    $('.container-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 520,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
});




console.log('DE AICI INCEPEM');
console.log('DE AICI INCEPEM');
console.log('DE AICI INCEPEM');
console.log('-');
console.log('-');

console.log('Asta este arrayObjects');

console.log('-');
console.log('-');
console.log('AICI TERMINAM');
console.log('AICI TERMINAM');
console.log('AICI TERMINAM');
