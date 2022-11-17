const getJSONHotels = function() {

    const hotelsList = document.querySelector('.hotels-list');
    const modalContainer = $('.container-more-images'); //use jquery selector for easier transition
    const modalImg = document.querySelector('.container-more-images__image');
    const prevImg = document.querySelector('.prev-image');
    const nextImg = document.querySelector('.next-image');
    const closeModal = document.querySelector('.close-images-modal');
    let indexImage = 0;
    //setting array to store data for localStorage
    let hotelsArray = [];
    //use jquery for easier transition to default hide the modal for images
    modalContainer.hide();

    fetch('app_base/data/hotels/hotels.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (hotels) {

            //assing to hotelsArray all data from 'hotels' -> send data in localStorage => parse data from localStorage in hotelsArray
            hotelsArray.push(hotels);
            localStorage.setItem('hotelsList', JSON.stringify(hotels));
            hotelsArray = JSON.parse(localStorage.getItem('hotelsList'));

            //render hotels on page, in my 'hotelsList' ul
            for (let i = 0; i < hotelsArray.length; i++) {
                hotelsList.innerHTML += `
                <li class="hotels-list__item" title="Click for more photos">
                    <h2 class="hotels-list__item--title">${hotelsArray[i].name}</h2>
                    <h3 class="hotels-list__item--stars">${hotelsArray[i].stars}</h3>
                    <h3 class="hotels-list__item--location">${hotelsArray[i].location}</h3>
                    <img class="hotels-list__item--img" src="${hotelsArray[i].image[0]}" alt="${hotelsArray[i].alt}">
                    <button class="Book-Now hotels-list__item--button" data-name="${hotelsArray[i].name}" title="Click to book">Book now</button> 
                </li>
                `
            }

            //Getting the collection of NodeList
            const hotelsFromList= document.querySelectorAll('.hotels-list__item');
            
            //Create function for each li-item to open modal with specific data
            hotelsFromList.forEach( (element, index) => {
                    element.addEventListener('click', () => {
                        indexImage = 0;
                        modalImg.setAttribute('src', hotelsArray[index].image[indexImage]);
                        modalImg.setAttribute('data-index', index);
                        modalContainer.show(500);
                    })
            });

            //Event for 'prev' button -> prev image
            prevImg.addEventListener('click', () => {
                indexImage--;
                if( indexImage == -1) { indexImage = 3 }
                const currentLiIndex = document.querySelector('.container-more-images__image').getAttribute('data-index');
                modalImg.setAttribute('src', hotelsArray[currentLiIndex].image[indexImage]);
            });

            //Event for 'next' button -> next image
            nextImg.addEventListener('click', () => {
                indexImage++;
                if ( indexImage == 4) { indexImage = 0 }
                const currentLiIndex = document.querySelector('.container-more-images__image').getAttribute('data-index');
                modalImg.setAttribute('src', hotelsArray[currentLiIndex].image[indexImage]);
            });

            //Event for 'close' button -> close modal on click
            closeModal.addEventListener('click', () => {
                modalContainer.hide(500)
            });

            //Event for modal -> close modal on pressing ESC
            document.addEventListener('keydown', (e) => {
                if (e.which === 27) {
                    modalContainer.hide(500);
                }
            });

            //Short animation when you hover on a li-item
            $('.hotels-list__item').hover(
                function() {
                    $(this).css({'box-shadow': '0px 0px 20px 12px #3f5561'});
                },
                function() {
                    $(this).css({'box-shadow': '0px 0px 18px 10px #bfbfbf'});
                }
            );
        })
}

export {getJSONHotels};
