const getJSONTeam = function() {

    let teamList = $('.container-contact-list')
    
    $.getJSON('data/team/team.json', (team) => {
        console.log(team)
        console.log(team[1])

        // team.each(function(index) {
        //     teamList.html(
        //         `
        //         <li>Name ${team[index].name}</li>
        //         `
        //     )
        // })

        $.each(team, function() {
            $.each(this, function(index, value) {
                teamList.html(`
                <li>Name ${this.index}</li>
                `)
            })
        })
    })

}

export {getJSONTeam}
