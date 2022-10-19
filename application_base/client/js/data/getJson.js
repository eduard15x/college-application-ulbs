const getJSON = function() {

    let array = []
    
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
    })
}

export {getJSON};
