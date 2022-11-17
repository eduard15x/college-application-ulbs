const getJSONTeam = function() {

    let teamList = $('.container-contact-list');
    let arrayObjectTeam = [];

    $.getJSON('app_base/data/team/team.json', (team) => {
        arrayObjectTeam.push(team);
        localStorage.setItem('teamMembers', JSON.stringify(team));
        arrayObjectTeam = JSON.parse(localStorage.getItem('teamMembers'));

        for ( let i = 0; i < arrayObjectTeam.length; i++) {
            teamList.append(
            `<li class="container-contact-list__item js-add-item-list">
                <img src="${arrayObjectTeam[i].img}" alt="${arrayObjectTeam[i].name}" class="container-contact-list__item--img">
                <p class="container-contact-list__item--text">${arrayObjectTeam[i].name}</p>
                <p class="container-contact-list__item--text">${arrayObjectTeam[i].role}</p>
                <span class="container-contact-list__item--span"> 
                    <a href="mailto:${arrayObjectTeam[i].mail}"><i class="fa-regular fa-envelope"></i></a> 
                    <a href="tel:${arrayObjectTeam[i].tel}"><i class="fa-solid fa-phone-volume"></i></a> 
                </span>
            </li>`
            )
        }
    });
}

export {getJSONTeam}
