const showReservations = function() {

    const reservations = document.querySelector('#reservations');
    const nameCurrentUser = document.querySelector('.user-span');
    const newArrWithHotels = []

    let currentUser = JSON.parse(localStorage.getItem('users'));
    let allHotelsArr = JSON.parse(localStorage.getItem('hotelsList'));

    const reservationsContainer = document.querySelector('.container-reservations__list');

    reservations.addEventListener('click', () => {
        // console.log(loggedUser) //current user
        const loggedUser = nameCurrentUser.textContent;
        // console.log(selectObject) // log the current user object
        const selectObject = currentUser.find(element => element.username === loggedUser);
        
        //deleting duplicated objects
        selectObject.hotelBooked = selectObject.hotelBooked.filter((value, index, self) =>
            index === self.findIndex((t) => ( 
                t.name === value.name && t.location === value.location
            ))
        );

        let xxx = JSON.parse(localStorage.getItem(loggedUser));
        reservationsContainer.innerHTML = '';
        //render reservation items in container
        for ( let i = 0; i < xxx.length; i++) {
            reservationsContainer.innerHTML += `
            <li class="container-reservations__list--item">
                <p>${xxx[i].name}</p>
                <img src="${xxx[i].image[0]}"></img>
                <button class="REMOVE-ME" data-remove="${xxx[i].name}">REMOVE</button>
            </li>
            `
        }
    });
    
    document.addEventListener('click', (e) => {
        if (e.target.className === 'Book-Now') {
            //allHotelsArr = >  array list with all hotels
            const dataAttribute = e.target.getAttribute('data-name');
            const filterMembers = allHotelsArr.find( hotel => hotel.name === dataAttribute);
            //filterMembers => get current object selected
            //filterMembers.name => get name value of the object selected
            newArrWithHotels.push(filterMembers)
            //newArrWithHotels => array with members added after BOOK-NOW
            //loggedUser => name of usser logged in
            const loggedUser = nameCurrentUser.textContent;
            const selectObject = currentUser.find(element => element.username === loggedUser);
            
            if (localStorage.getItem(loggedUser) === null) {
                selectObject.hotelBooked.push(filterMembers);
                localStorage.setItem( loggedUser , JSON.stringify(selectObject.hotelBooked));
            } else {
                let xxx = JSON.parse(localStorage.getItem(loggedUser));
                xxx.push(filterMembers);
                //deleting duplicated objects
                xxx = xxx.filter((value, index, self) =>
                    index === self.findIndex((t) => ( 
                        t.name === value.name && t.location === value.location
                    ))
                );
                localStorage.setItem( loggedUser , JSON.stringify(xxx));
            }
        }

        if (e.target.className === "REMOVE-ME") {
            const currentAttribute = e.target.getAttribute('data-remove');
            const loggedUser = nameCurrentUser.textContent;
            let arrayReserv = JSON.parse(localStorage.getItem(loggedUser));
            let newArrayWithoutItem = arrayReserv.filter( el => el.name !== currentAttribute);
            localStorage.setItem(loggedUser, JSON.stringify(newArrayWithoutItem));
            let checkLS = JSON.parse(localStorage.getItem(loggedUser));

            reservationsContainer.innerHTML = '';
            //render reservation items in container
            for ( let i = 0; i < checkLS.length; i++) {
                reservationsContainer.innerHTML += `
                <li class="container-reservations__list--item">
                    <p>${checkLS[i].name}</p>
                    <img src="${checkLS[i].image[0]}"></img>
                    <button class="REMOVE-ME" data-remove="${checkLS[i].name}">REMOVE</button>
                </li>
                `
            }
        }
    });
}

export { showReservations }; 
