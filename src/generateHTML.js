function renderManagercard(managerAnswers) {
    return `<div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Manager</h2>
                        <h3 class="card-subtitle mb-2 text-muted">${managerAnswers.name}</h3>
                        <p class="card-text">ID:${managerAnswers.id}</p>
                        <p class="card-text">ID:${managerAnswers.office}</p>
                        <a href="#" class="card-link">${managerAnswers.email}</a>
                      </div>
                </div>
            </div>`
}

function renderEngineercard(teamAnswers) {
    return `<div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Engineer</h2>
                        <h3 class="card-subtitle mb-2 text-muted">${teamAnswers.name}</h3>
                        <p class="card-text">ID:${teamAnswers.id}</p>
                        <a href="#" class="card-link">${teamAnswers.github}</a>
                        <a href="#" class="card-link">${teamAnswers.email}</a>
                      </div>
                </div>
            </div>`
}

function renderInterncard(teamAnswers) {
    return `<div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Manager</h2>
                        <h3 class="card-subtitle mb-2 text-muted">${teamAnswers.name}</h3>
                        <p class="card-text">ID:${teamAnswers.id}</p>
                        <p class="card-text">ID:${teamAnswers.school}</p>
                        <a href="#" class="card-link">${teamAnswers.email}</a>
                      </div>
                </div>
            </div>`
}

function generateHTML(teamData) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
            integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
        <title>My Team</title>
    </head>
    
    <body>
        <header class="jumbotron">
            <h1>My Team</h1>
        </header>
        <div class="row">
        ${renderTeamcards(teamData)}
        </div>
    
    </body>`
}

module.exports = generateHTML;
