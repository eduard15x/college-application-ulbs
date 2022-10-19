const getJSON = function() {

    let array = [];
    let hotelList = $('.hotels-list');

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

        // for ( let i = 0; i < hotels.length; i++) {
        //     hotelList.html(`
        //     <li class="hotels-list__item">
        //         <h2>${hotels[i].name}</h2>
        //         <p>${hotels[i].stars}</p>
        //         <p>${hotels[i].location}</p>
        //         <img src="${hotels[i].image1}" alt="Hotel ${hotels[i].name}">
        //     </li>
        //     `)
        // }
        console.log(typeof hotels)
        $.each(hotels, (index, key) => {
            console.log(hotels[index].name)
        })

    })
}

export {getJSON};
