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
            <li class="hotels-list__item">
                <h2>${hotels[i].name}</h2>
                <h3>${hotels[i].stars}</h3>
                <h3>${hotels[i].location}</h3>
                <img src="${hotels[i].image1}" alt="Hotel ${hotels[i].name}">
            </li>
            `

            console.log(hotels[i].name)
        }

        // console.log(typeof hotels)
        // $.each(hotels, (index, key) => {
        //     // console.log(hotels[index].name)

            
        // hotelList.html(`
        // <li class="hotels-list-item">
        //     <p>${hotels.}</p>
        // </li>
        // `)
        // })
    })
}

export {getJSON};
