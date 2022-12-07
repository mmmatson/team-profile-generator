//works if you use team[0]
function addManagerCard(team) {
    return `<div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Manager</h2>
                        <h3 class="card-subtitle mb-2 text-muted">${team[0].name}</h3>
                        <p class="card-text">ID: ${team[0].id}</p>
                        <p class="card-text">${team[0].office}</p>
                        <a href="mailto:${team[0].email}" class="card-link">${team[0].email}</a>
                      </div>
                </div>
            </div>`
}

function addEngineerCard(team) {
    return `<div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Engineer</h2>
                        <h3 class="card-subtitle mb-2 text-muted">${team[i].name}</h3>
                        <p class="card-text">ID: ${team[i].id}</p>
                        <a href="https://github.com/${team[i].github}" class="card-link">${team[i].github}</a>
                        <a href="mailto:${team[i].email}" class="card-link">${team[i].email}</a>
                      </div>
                </div>
            </div>`
}

function addInternCard(team) {
    return `<div class="col-sm-4">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Intern</h2>
                        <h3 class="card-subtitle mb-2 text-muted">${team[i].name}</h3>
                        <p class="card-text">ID: ${team[i].id}</p>
                        <p class="card-text">${team[i].school}</p>
                        <a href="mailto:${team[i].email}" class="card-link">${team[i].email}</a>
                      </div>
                </div>
            </div>`
}

//if you add more than one employee to array you get error cannot read properties of undefined "length"
function generateContent(team) {
    let content = [];
    for (let i = 0; i < team.length; i++) {
        var role = team[i].role
        if (role === 'Manager') {
            addManagerCard(team);
            content = content.concat(addManagerCard(team));
        }
        if (role === 'Engineer') {
            addEngineerCard(team);
            content = content.concat(addEngineerCard(team));
        }
        if (role === 'Intern') {
            addInternCard(team);
            content = content.concat(addInternCard(team));
        }
    }
    let allContent = content.toString();
    return allContent;
}

function generateHTML(allContent) {
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
        ${generateContent(allContent)}
        </div>
    </body>`
}

module.exports = generateHTML;