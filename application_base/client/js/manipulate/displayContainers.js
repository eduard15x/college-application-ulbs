const displayContainers = function() {
    //create event listener for all containers on the page to render their own sections
    //define the buttons
    let homePage = $('#homePage');
    let moreDetailsPage = $('#moreDetailsPage');
    let contactPage = $('#contactPage');
    let reservationPage = $('#reservations');

    //define the containers/sections
    let sectionHomepage = $('.container-intro-home');
    let sectionMoreDetails = $('.container-more-details');
    let sectionContact = $('.container-contact');
    let sectionReservations = $('.container-reservations');

    // sectionHomepage.fadeIn(1000);
    sectionMoreDetails.hide();
    sectionContact.hide();
    sectionReservations.hide();
    //new implementation
    // sectionAccount.show();

    // offersPage
    // availabilityPage

    //create function for showing/hiding section
    function showSection(button, sectionDisplay, section1, section2, section3) {
        button.on('click', () => {
            sectionDisplay.fadeIn(750);
            section1.hide();
            section2.hide();
            section3.hide();
        });
    };
    //call function for every case
    showSection(homePage, sectionHomepage, sectionMoreDetails, sectionContact, sectionReservations);
    showSection(moreDetailsPage, sectionMoreDetails, sectionHomepage, sectionContact, sectionReservations);
    showSection(contactPage, sectionContact, sectionHomepage, sectionMoreDetails, sectionReservations);
    showSection(reservationPage, sectionReservations, sectionHomepage, sectionMoreDetails, sectionContact);
}

export { displayContainers }
