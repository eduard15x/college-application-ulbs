console.log('dada')

// account
// homepage


let homepageload = document.querySelector('.homepage');
let accountload = document.querySelector('.account');

function account() {
    window.location = "C:/Users/hp/Desktop/Git Hub/school-application-ulbs/application_base/html/pages/account.html"
}

function homepage() {
    window.location = "/application_base/html/index.html"
}

console.log(homepageload)
console.log(accountload)

accountload.addEventListener('click', account)


