const getJSONTeam = function() {

    let teamList = $('.container-contact-list')
    let teamMemberArray = ''
    
    let arrayObjectTeam = [];

    $.getJSON('data/team/team.json', (team) => {
        console.log(team)
        console.log('dajhdajhdgashdgadhjkagdjkhagda')
        
        console.log(team[1])
        teamMemberArray = team
        console.log(typeof(teamMemberArray))
        console.log(teamMemberArray)

        
        arrayObjectTeam.push(team);
        localStorage.setItem('teamMembers', JSON.stringify(team));
        arrayObjectTeam = JSON.parse(localStorage.getItem('teamMembers'));

        console.log(arrayObjectTeam)
        console.log(arrayObjectTeam[0])
        console.log(arrayObjectTeam.length)

        // $.each(team, function(key, value) {
        //     teamList.append(
        //     `<li class="container-contact-list__item">
        //         <img src="${value.img}" alt="${value.name}" class="container-contact-list__item--img">
        //         <p class="container-contact-list__item--text">${value.name}</p>
        //         <p class="container-contact-list__item--text">${value.role}</p>
        //         <span class="container-contact-list__item--span"> 
        //             <a href="mailto:${value.mail}"><i class="fa-regular fa-envelope"></i></a> 
        //             <a href="tel:${value.tel}"><i class="fa-solid fa-phone-volume"></i></a> 
        //         </span>
        //     </li>`)
        // })
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
                <button class="ADD-ME" replace=${arrayObjectTeam[i].name}>BOOK NOW</button>
            </li>`
            )
        }
    })

}

export {getJSONTeam}
