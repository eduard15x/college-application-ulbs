/*  - Clear input values when changing content
    - Setting password inputs attribute to type="password" when changing content
    - Display/Hide section Register/Login
*/
const displaySections = function() {
    let accountContainer = $('.container-account');
    let loginContainer = $('.login-box');
    let registerContainer = $('.register-box');
    let inputsForm = $('.container-account__form  input')


    accountContainer.click( (e) => {
        if ( e.target.className === 'register-button') {
            inputsForm.val('');
            togglePassword();
            loginContainer.hide();
            registerContainer.show(1200);
        } else if ( e.target.className === 'login-button' ) {
            inputsForm.val('');
            togglePassword();
            registerContainer.hide();
            loginContainer.show(1200);
        }
    } )
}

/*  - Display/Hide password when clicking on the icon
    - Also, icon change when you click on it
*/
const togglePassword = function() {
    let passwordInput = $('.password-input');
    let showPassword = $('.show-password');
    let hidePassword = $('.hide-password');

    passwordInput.attr('type', 'password')
    showPassword.show()
    hidePassword.hide();

    showPassword.click( () => {
        showPassword.hide();
        hidePassword.show();
        passwordInput.attr('type', 'text')
    })

    
    hidePassword.click( () => {
        hidePassword.hide();
        showPassword.show();
        passwordInput.attr('type', 'password')
    })
}

export {displaySections, togglePassword}
