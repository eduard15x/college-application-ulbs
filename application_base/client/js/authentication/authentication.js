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
        let currentUser = [];
        let allUsers = {
            username: username.val(),
            email: email.val(),
            password: password.val(),
        };

        if (username.val() === '' || email.val() === '' || password.val() === '') {
            alert('Form is incomplete!');
        } else {
            if (localStorage.getItem('users') === null) {
                currentUser.push(allUsers);
                localStorage.setItem('users', JSON.stringify(currentUser));
                alert('Account created!');
                location.reload();
            }  else {
                currentUser = JSON.parse(localStorage.getItem('users'));
                const checkUsernameExists = element => element.username === username.val();
                const checkEmailExists = element => element.email === email.val();

                if(currentUser.some(checkUsernameExists) === false && currentUser.some(checkEmailExists) === false) {
                    currentUser.push(allUsers);
                    localStorage.setItem('users', JSON.stringify(currentUser));
                    //test
                    console.log(currentUser.some(checkUsernameExists))
                    console.log(currentUser.some(checkEmailExists))
                    alert('Account created!');
                    location.reload();
                } else {
                    alert('Username or email already exist');
                    return
                }
            }
        }
    });


    const finalUsers = JSON.parse(localStorage.getItem('users'));

    loginUser.on('click', () => {
        userLoggedIn.text();
        let currentUser = [];
        currentUser = JSON.parse(localStorage.getItem('users'));
        const filterArray = finalUsers.filter( user => 
            user.username === loginUsername.val()
            && user.email === loginEmail.val() 
            && user.password === loginPassword.val()
        )
        console.log(`This is finalUsers from localStorage ${filterArray}`)
        console.log(filterArray)

        if (filterArray.length > 0 && loginUsername.val() !== '' && loginEmail.val() !== '' && loginPassword.val() !== '') {
            alert('Welcome');
            showContainers();
            console.log(currentUser);
            userLoggedIn.text(`Hello, ${loginUsername.val()}!`);

            
            console.log(`This is the currentUser from parsed from localStorage ${currentUser}`)
            console.log(currentUser);
        } else if (loginUsername.val() === '' || loginEmail.val() === '' || loginPassword.val() === '') {
            alert('Complete the data')
        } else  {
            alert('Wrong data')
            console.log(`This is the currentUser from parsed from localStorage ${currentUser}`)
            console.log(currentUser);
        }
    });

}

    
export { authentication };
