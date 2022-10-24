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
                <img src="${hotels[i].image[0]}" alt="${hotels[i].alt}">
            </li>
            `

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
                console.log(hotels[i]);
            })

        console.log(hotels[i].image)
        }

        

        // <div class="container-more-images">
        //     <p class="prev-image"><</p>
        //     <img src="/application_base/images/hotels/amsterdam/1.jpg" class="container-more-images__image"></img>
        //     <p class="next-image">></p>
        //     <p class="close-container">X</p>
        // </div>

        function displayMoreImages() {
            let containerImage = $('.container-more-images');
            containerImage.html(
                `
                <p class="prev-image"><</p>
                <img src="" class="container-more-images__image">
                <p class="next-image">></p>
                <p class="close-container">X</p>
                `
            )
            
            let src = ''
            let prevImg = $('.prev-image');
            let nextImg = $('.next-image');
            let imgDetail = $('.container-more-images__image');
            let index = 0;    
            let closeContainer = $('.close-container'); 
            containerImage.hide()

            closeContainer.click(() => {
                containerImage.hide(500)
            })

            for ( let j = 0; j < hotels.length; j++ ) {
                let liItems = document.querySelectorAll('.hotels-list__item')

                //function for every li to display more images base on its index
                liItems[j].addEventListener('click', function() {
                    imgDetail.attr('src', hotels[j].image[index])
                    containerImage.show(500)
                })
                
            click()
            }
        }

        displayMoreImages();  
    })
    
}

export {getJSON};
