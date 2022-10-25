const getJSONTeam = function() {

    let teamList = $('.container-contact-list')
    let teamMemberArray = ''

    $.getJSON('data/team/team.json', (team) => {
        console.log(team)
        console.log(team[1])
        teamMemberArray = team
        console.log(typeof(teamMemberArray))
        console.log(teamMemberArray)

        $.each(team, function(key, value) {
            teamList.append(
            `<li class="container-contact-list__item">
                <img src="${value.img}" alt="${value.name}" class="container-contact-list__item--img">
                <p class="container-contact-list__item--text">${value.name}</p>
                <p class="container-contact-list__item--text">${value.role}</p>
                <span class="container-contact-list__item--span"> 
                    <a href="mailto:${value.mail}"><i class="fa-regular fa-envelope"></i></a> 
                    <a href="tel:${value.tel}"><i class="fa-solid fa-phone-volume"></i></a> 
                </span>
            </li>`)
                
        })
    })

}

export {getJSONTeam}
