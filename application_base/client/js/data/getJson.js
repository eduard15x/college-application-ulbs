const getJSON = function() {

    let array = [];

    $.getJSON('data/hotels/hotels.json', (hotels) => {
        // console.log(hotels)
        // console.log(hotels[1].name)
        // console.log(hotels.length)
        // array = hotels
        // let carousel = document.querySelectorAll('.hotels');
        // console.log(carousel)
        // console.log(carousel[2])
        // console.log(carousel.length)

        // for (let i = 0; i < carousel.length; i++) {
        //     carousel[i].innerHTML += hotels[i].name
        // }
        

        for ( let i = 0; i < hotels.length; i++) {
            
            let hotelList = document.querySelector('.hotels-list'); 
            hotelList.innerHTML += `
            <li class="hotels-list__item" title="Click for more photos">
                <h2 class="hotels-list__item--title">${hotels[i].name}</h2>
                <h3 class="hotels-list__item--stars">${hotels[i].stars}</h3>
                <h3 class="hotels-list__item--location">${hotels[i].location}</h3>
                <img src="${hotels[i].image1}" alt="${hotels[i].alt}">
            </li>
            `

        }

        //to use this.element you need to avoid arrow functions
        $('li').hover(
            function() {$(this).animate({'opacity' : '0.5'}, 225);
                        $(this).css({'box-shadow': 'none'});
            },
            function() {$(this).animate({'opacity': '1'}, 225);
                        $(this).css({'box-shadow': '0px 0px 18px 10px #bfbfbf'});
            }
        );

        $('li').click( function() {
            console.log($(this).text())
        })
    })
    
}

export {getJSON};
