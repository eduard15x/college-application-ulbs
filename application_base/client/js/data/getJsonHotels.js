const getJSONHotels = function() {

    $.getJSON('data/hotels/hotels.json', (hotels) => {
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
            
            
            // $('li').hover(
            //     function() {$(this).animate({'opacity' : '0.5'}, 225);
            //                 $(this).css({'box-shadow': 'none'});
            //     },
            //     function() {$(this).animate({'opacity': '1'}, 225);
            //                 $(this).css({'box-shadow': '0px 0px 18px 10px #bfbfbf'});
            //     }
            // );

        };
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
            let imgDetail = $('.container-more-images__image');
            
            let prevImg = $('.prev-image');
            let nextImg = $('.next-image');
            let closeContainer = $('.close-container'); 
            containerImage.hide()

            closeContainer.click(() => {
                containerImage.hide(500)
                indexImage = 0
            })
  
            let indexImage = 0;
            let liItems = $('.hotels-list__item');
            //function for every li to display more images base on its index

            console.log(liItems)
            console.log(liItems.length)

            liItems.each(function(index) {
                $(this).on('click', function() {
                    indexImage = 0
                    imgDetail.attr('src', hotels[index].image[indexImage])
                    containerImage.show(500)
                    
                    console.log('function' + ' ' + index)
                    console.log(indexImage)
                    
                    console.log(imgDetail.attr('src'))

                    nextImg.on('click', function() {
                        indexImage++;
                        if ( indexImage === 4) {
                            indexImage = 0
                        };
                    imgDetail.attr('src', hotels[index].image[indexImage])
                    console.log('function' + ' ' + index)
                    console.log(indexImage)
                    })
                })

                
            })
        }

        displayMoreImages();  
    })
    
}

export {getJSONHotels};
