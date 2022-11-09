
const showReservations = function() {

    const reservations = document.querySelector('#reservations');
    const nume = document.querySelector('.user-span');
    let myReservation = [];

    reservations.addEventListener('click', () => {
        const loggedUser = nume.textContent;
        console.log('dadada')
        
        let currentUser = JSON.parse(localStorage.getItem('users'));
        console.log(currentUser)
        console.log(loggedUser)
        const selectObject = currentUser.find(element => element.username === loggedUser);

        console.log(selectObject)
        console.log(selectObject.username)

        let newObjectHotel = {
            name: 'maioko',
            location: 'London'
        }

        let oldObjectHotel = {
            name: 'jdhagudhagdua',
            location: 'cacaca'
        }

        selectObject.hotelBooked.push(newObjectHotel)
        selectObject.hotelBooked.push(oldObjectHotel)

        console.log(selectObject)


    })

    myReservation = JSON.parse(localStorage.getItem('teamMembers'));
    console.log(`My reservation ${myReservation}`)
    console.log(myReservation)

    const logClick = document.getElementsByClassName('ADD-ME');
    console.log(logClick)
    console.log(logClick.length)
    document.addEventListener('click', (e) => {
        if (e.target.className === 'ADD-ME') {
            console.log('BOOKED')
            console.log(e.target.getAttribute('replace'))
        }
    })
    // ***
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
