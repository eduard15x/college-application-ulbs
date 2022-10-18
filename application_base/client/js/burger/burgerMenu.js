const toggleMenuBurger = function() {

    let burgerIcon = document.querySelector('.burger-menu');
    let mobileNav = document.querySelector('.container-nav');

    burgerIcon.addEventListener('click', () => {
        if (mobileNav.className === 'container-nav') {
            mobileNav.className += ' d-none';
        } else {
            mobileNav.className = 'container-nav';
        }
    });
}



export {toggleMenuBurger};
