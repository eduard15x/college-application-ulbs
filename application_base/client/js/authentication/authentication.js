const authentication = function() {

    //user register
    let firstName = $('#first-name');
    let secondName = $('#second-name');
    let email = $('#user-email');
    let confirmEmail = $('#user-confirm-email');
    let confirmPassword = $('#user-confirm-password');
    let password = $('#user-password');
    const registerUser = $('#register-account');
    //user login
    let loginEmail = $('#login-user-email');
    let loginPassword = $('#login-user-password')
    const loginUser = $('#login-account');
    

    registerUser.on('click', () => {
        let currentUser = [];
        let allUsers = {
            firstName: firstName.val(),
            secondName: secondName.val(),
            email: email.val(),
            confirmEmail: confirmEmail.val(),
            password: password.val(),
            confirmPassword: confirmPassword.val(),
        };

        if (firstName.val() === '' || secondName.val() === '' || email.val() === '' ||
        confirmEmail.val() === '' || password.val() === '' ||confirmPassword.val() === '') {
            alert('Form is incomplete!');
        } 
        else if (email.val() !== confirmEmail.val()) {
            alert(`Email doesn't match!`)
        } 
        else if (password.val() !== confirmPassword.val()) {
            alert(`Password doesn't match!`)
        } 
        else {
            if (localStorage.getItem('users') === null) {
                currentUser.push(allUsers);
                localStorage.setItem('users', JSON.stringify(currentUser));
            } 
            else {
                currentUser = JSON.parse(localStorage.getItem('users'));
                currentUser.push(allUsers);
                localStorage.setItem('users', JSON.stringify(currentUser));
            }

            console.log(currentUser);
            alert ('Registration completed, you can log in!')
        }
    });


    const finalUser = JSON.parse(localStorage.getItem('users'));

    loginUser.on('click', () => {
        const filterArray = finalUser.filter( user => 
            user.email === loginEmail.val() && user.password === loginPassword.val())
        console.log(filterArray);
        if (filterArray.length > 0) {
            alert('Welcome')
        } else if (loginEmail.val() === '' || loginPassword.val() === '') {
            alert('Complete the form')
        } else  {
            alert('username')
            location.href='myfile.php?bo_table=movie&wr_id=756'
        }
    });

}


export { authentication };
