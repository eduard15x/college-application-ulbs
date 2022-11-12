
const showReservations = function() {

    const reservations = document.querySelector('#reservations');
    const nume = document.querySelector('.user-span');
    let myReservation = [];

    myReservation = JSON.parse(localStorage.getItem('teamMembers'));
    console.log(`My reservation ${myReservation}`)
    console.log(myReservation)

    const logClick = document.getElementsByClassName('ADD-ME');
    console.log(logClick)
    console.log(logClick.length)

    const newArrWithMembers = []



    let currentUser = JSON.parse(localStorage.getItem('users'));

    
    let newObjectHotel = {
        name: 'maioko',
        location: 'London'
    }

    let oldObjectHotel = {
        name: 'jdhagudhagdua',
        location: 'cacaca'
    }

    reservations.addEventListener('click', () => {
        
        const loggedUser = nume.textContent;
        const selectObject = currentUser.find(element => element.username === loggedUser);
        console.log('dadada')
        
        console.log(currentUser)
        console.log(loggedUser)

        console.log(selectObject)
        console.log(selectObject.username)


        selectObject.hotelBooked.push(newObjectHotel)
        selectObject.hotelBooked.push(oldObjectHotel)

        
        console.log('uite')
        //deleting duplicated objects
        selectObject.hotelBooked = selectObject.hotelBooked.filter((value, index, self) =>
            index === self.findIndex((t) => ( 
                t.name === value.name && t.location === value.location
            ))
        )
        console.log(selectObject)


    })

    let hotelsListFromUserLoggedIn = JSON.parse(localStorage.getItem('users'))
    
    
    document.addEventListener('click', (e) => {
        if (e.target.className === 'ADD-ME') {
            console.log('BOOKED')
            console.log(e.target.getAttribute('replace'))
            console.log(`My reservation ${myReservation}`)
            console.log(myReservation)
            console.log(`My reservation ${myReservation}`)
            console.log(myReservation)

            const dataAttribute = e.target.getAttribute('replace')
            const filterMembers = myReservation.find( member => member.name === dataAttribute)
            console.log(filterMembers)
            console.log(filterMembers)
            console.log(filterMembers)
            console.log(filterMembers)
            console.log(filterMembers.name)
            console.log(typeof(filterMembers))
            JSON.stringify(filterMembers)
            console.log(filterMembers)
            console.log(typeof(filterMembers))

            console.log(newArrWithMembers)
            newArrWithMembers.push(filterMembers)
            console.log(newArrWithMembers)

            console.log(hotelsListFromUserLoggedIn)

            const loggedUser = nume.textContent;
            const selectObject = currentUser.find(element => element.username === loggedUser);
            console.log('dadada')
            
            console.log(currentUser)
            console.log(loggedUser)
            console.log('look')

            console.log(selectObject)
            selectObject.hotelBooked.push(filterMembers);
            
            console.log(selectObject)
            localStorage.setItem('usersHotels', JSON.stringify(currentUser))
            //making logic to add selected item in cart
        }
    })


    // const finalUsers = JSON.parse(localStorage.getItem('users'));

    // loginUser.on('click', () => {
    //     userLoggedIn.text();
    //     let currentUser = [];
    //     currentUser = JSON.parse(localStorage.getItem('users'));
    //     const filterArray = finalUsers.filter( user => 
    //         user.username === loginUsername.val()
    //         && user.email === loginEmail.val() 
    //         && user.password === loginPassword.val()
    //     )
    //     console.log(`This is finalUsers from localStorage ${filterArray}`)
    //     console.log(filterArray)
    //     console.log(typeof(filterArray))
    //     console.log(finalUsers)
    // const array1 = [{id: 1 , age: 20}, {id: 2, age: 30}]

    // const found = array1.find(element => element.id === 2)
    
    // console.log(found)

    // currentUser = JSON.parse(localStorage.getItem('users'));
    // const checkUsernameExists = element => element.username === username.val();
    // const checkEmailExists = element => element.email === email.val();

    // if(currentUser.some(checkUsernameExists) === false && currentUser.some(checkEmailExists) === false) {
    //     currentUser.push(allUsers);
    //     localStorage.setItem('users', JSON.stringify(currentUser));
    //     //test
    //     console.log(currentUser.some(checkUsernameExists))
    //     console.log(currentUser.some(checkEmailExists))

    

}







export { showReservations }; 
