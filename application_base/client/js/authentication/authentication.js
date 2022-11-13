const authentication = function() {

    //user register
    let username = $('#username');
    let email = $('#user-email');
    let password = $('#user-password');
    const registerUser = $('#register-account');
    //user login
    let loginUsername =$('#login-user-username');
    let loginEmail = $('#login-user-email');
    let loginPassword = $('#login-user-password')
    const loginUser = $('#login-account');
    //selectors for sections
    let headerContainer = $('.container-header');
    let mainContainer = $('.container-main');
    let footerContainer = $('.container-footer');
    let authenticationContainer = $('.container-account');
    //user logged in from nav
    let userLoggedIn = $('#userLoggedIn');

    function hideContainers() {
        headerContainer.hide();
        mainContainer.hide();
        footerContainer.hide();    
        authenticationContainer.show();
    }

    function showContainers() {
        headerContainer.show();
        mainContainer.show();
        footerContainer.show();
        authenticationContainer.hide();    
    }

    hideContainers()

    
    

    registerUser.on('click', () => {
        let currentUsers = [];
        let allUsers = {
            username: username.val(),
            email: email.val(),
            password: password.val(),
            hotelBooked: []
        };

        if (username.val() === '' || email.val() === '' || password.val() === '') {
            alert('Form is incomplete!');
        } else {
            if (localStorage.getItem('users') === null) {
                currentUsers.push(allUsers);
                localStorage.setItem('users', JSON.stringify(currentUsers));
                alert('Account created!');
                location.reload();
            }  else {
                currentUsers = JSON.parse(localStorage.getItem('users'));
                const checkUsernameExists = element => element.username === username.val();
                const checkEmailExists = element => element.email === email.val();

                if(currentUsers.some(checkUsernameExists) === false && currentUsers.some(checkEmailExists) === false) {
                    currentUsers.push(allUsers);
                    localStorage.setItem('users', JSON.stringify(currentUsers));
                    //test
                    console.log(currentUsers.some(checkUsernameExists))
                    console.log(currentUsers.some(checkEmailExists))
                    alert('Account created!');
                    location.reload();
                } else {
                    alert('Username or email already exist');
                    return
                }
            }
        }
    });

    loginUser.on('click', () => {
        userLoggedIn.text();
        let currentUsers = [];
        currentUsers = JSON.parse(localStorage.getItem('users'));
        const filterArray = currentUsers.filter( user => 
            user.username === loginUsername.val()
            && user.email === loginEmail.val()
            && user.password === loginPassword.val()
        )

        console.log(currentUsers);
        console.log(filterArray);

        if (filterArray.length > 0 && loginUsername.val() !== '' && loginEmail.val() !== '' && loginPassword.val() !== '') {
            alert('Welcome');
            showContainers();
            userLoggedIn.text(loginUsername.val());
            // console.log(currentUsers);//log the array of registered users
            // console.log(filterArray)//log the user that currently log in

        } else if (loginUsername.val() === '' || loginEmail.val() === '' || loginPassword.val() === '') {
            alert('Complete the data!');
        } else  {
            alert('Wrong data');
            console.log(`This is the currentUsers from parsed from localStorage ${currentUsers}`);
            console.log(currentUsers);
        }
    });

}

    
export { authentication };
