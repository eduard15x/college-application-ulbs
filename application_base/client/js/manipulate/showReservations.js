const showReservations = function() {

    const reservations = document.querySelector('#reservations');
    const nameCurrentUser = document.querySelector('.user-span');
    const newArrWithMembers = []

    let currentUser = JSON.parse(localStorage.getItem('users'));
    let allMembersArr = JSON.parse(localStorage.getItem('teamMembers'));

    const reservationsContainer = document.querySelector('.container-reservations__list')

    reservations.addEventListener('click', () => {
        const loggedUser = nameCurrentUser.textContent;
        const selectObject = currentUser.find(element => element.username === loggedUser);
        // console.log(currentUser) //log the
        // console.log(loggedUser) //current user

        // console.log(selectObject) // log the current user object
        // console.log(selectObject.username) // log the current user username value
        
        //deleting duplicated objects
        selectObject.hotelBooked = selectObject.hotelBooked.filter((value, index, self) =>
            index === self.findIndex((t) => ( 
                t.name === value.name && t.location === value.location
            ))
        )
        // console.log(selectObject) // show 
        // console.log(selectObject.hotelBooked) // show the user added in the array

        let xxx = JSON.parse(localStorage.getItem(loggedUser))
        console.log(loggedUser)
        console.log(xxx)

        reservationsContainer.innerHTML = '';

        //render reservation items in container
        for ( let i = 0; i < xxx.length; i++) {
            reservationsContainer.innerHTML += `
            <li class="container-reservations__list--item">
                <p>${xxx[i].name}</p>
                <img src="${xxx[i].img}"></img>
                <button class="REMOVE-ME" data-remove="${xxx[i].name}">REMOVE</button>
            </li>
            `
        }
    })
    
    
    document.addEventListener('click', (e) => {
        if (e.target.className === 'ADD-ME') {
            // console.log(e.target.getAttribute('replace')); //log the name of selected attrribute which is the name of item
            // console.log(`My reservation ${allMembersArr}`);
            // console.log(allMembersArr); //log array list with all team members from team

            const dataAttribute = e.target.getAttribute('replace');
            const filterMembers = allMembersArr.find( member => member.name === dataAttribute);
            // console.log(filterMembers);//get current object selected
            // console.log(filterMembers.name);//get name value of the object selected

            newArrWithMembers.push(filterMembers)
            // console.log(newArrWithMembers)//get array with members added after BOOK-ME

            const loggedUser = nameCurrentUser.textContent; // get name of usser logged in
            const selectObject = currentUser.find(element => element.username === loggedUser);
            
            // console.log(currentUser); //(6) [{…}, {…}, {…}, {…}, {…}, {…}]
            console.log(loggedUser); //dada (user username)

            console.log('aici te rog')
            console.log(currentUser.length)
            console.log(currentUser)
            // selectObject.hotelBooked.push(filterMembers);
            // // console.log(selectObject) //{username: 'dada', email: 'dada', password: 'dada', hotelBooked: Array(1)}

            //create an array with selected options for each user
            if (localStorage.getItem(loggedUser) === null) {


                selectObject.hotelBooked.push(filterMembers);
                localStorage.setItem( loggedUser , JSON.stringify(selectObject.hotelBooked));
                let xxx = JSON.parse(localStorage.getItem(loggedUser))
                console.log('uitati noul array')
                console.log(xxx)
            } else {
                let xxx = JSON.parse(localStorage.getItem(loggedUser))
                xxx.push(filterMembers);
                //deleting duplicated objects
                xxx = xxx.filter((value, index, self) =>
                    index === self.findIndex((t) => ( 
                        t.name === value.name && t.location === value.location
                    ))
                )
                localStorage.setItem( loggedUser , JSON.stringify(xxx));
                let dax = JSON.parse(localStorage.getItem(loggedUser))
                console.log('asta e arrayus dupa ce exista')
                console.log(dax)
            }


            // console.log('aici te rog')
            // console.log(selectObject.hotelBooked.length)
            // console.log(selectObject.hotelBooked)
        }

        if (e.target.className === "REMOVE-ME") {
            const currentAttribute = e.target.getAttribute('data-remove');
            const loggedUser = nameCurrentUser.textContent

            console.log(currentAttribute)
            let arrayReserv = JSON.parse(localStorage.getItem(loggedUser))
            console.log(arrayReserv)
            let newArrayWithoutItem = arrayReserv.filter( el => el.name !== currentAttribute)
            localStorage.setItem(loggedUser, JSON.stringify(newArrayWithoutItem));
            let checkLS = JSON.parse(localStorage.getItem(loggedUser))
            console.log(checkLS)


            reservationsContainer.innerHTML = '';
            //render reservation items in container
            for ( let i = 0; i < checkLS.length; i++) {
                reservationsContainer.innerHTML += `
                <li class="container-reservations__list--item">
                    <p>${checkLS[i].name}</p>
                    <img src="${checkLS[i].img}"></img>
                    <button class="REMOVE-ME" data-remove="${checkLS[i].name}">REMOVE</button>
                </li>
                `
            }
        }
    })
}







export { showReservations }; 
