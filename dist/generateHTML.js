function generateHTML(employee) {
    console.log(employee);
    const template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
            integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
    <header class="mb-5 py-3 text-center"
        style="color: rgba(41, 128, 150, 0.979) ; background-color: rgba(51, 191, 226, 0.363);">
        <h1>My Team</h1>
    </header>

    <div class="container">
        <div class="row">
        ${generateSections(employee)}

    </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    </body>
    </html>`

    return template
}


function generateSections(employee) {
    let sections = ``
    for (i = 0; i < employee.length; i++) {
        if (employee[i].getRole() == "Manager") {
            sections += `

            <div class="col-sm-4" style="margin-bottom: 20px;">
            <div class="card">
                <div class="card-header" style="color: aliceblue; background-color: rgb(0, 132, 255);">
                    <h3>${employee[i].getName()}</h3>
                    <h4><i class="fas fa-mug-hot"></i> ${employee[i].getRole()}</h4>
                </div>
                <div class="card" style="width: 18rem;">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <p>ID: ${employee[i].getId()}</p>
                        </li>
                        <li class="list-group-item">Email: <a href="mailto:${employee[i].getEmail()}">${employee[i].getEmail()}</a></li>
                        <li class="list-group-item">
                            <p>Office Number: ${employee[i].getOffice()}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>`
        } else if (employee[i].getRole() == "Engineer") {
            sections += `
            <div class="col-sm-4" style="margin-bottom: 20px;">
                <div class="card">
                    <div class="card-header" style="color: aliceblue; background-color: rgb(0, 132, 255);">
                        <h3>${employee[i].getName()}</h3>
                        <h4><i class="fas fa-glasses"></i>${employee[i].getRole()}</h4>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <p>ID: ${employee[i].getId()}</p>
                            </li>
                            <li class="list-group-item">Email: <a href="mailto:${employee[i].getEmail()}">${employee[i].getEmail()}</a></li>
                            <li class="list-group-item">GitHub: <a href="https://github.com/${employee[i].getGithub()}">${employee[i].getGithub()}</a></li>
                        </ul>
                    </div>
                </div>
            </div>`
        } else if (employee[i].getRole() == "Intern") {
            sections += `
            <div class="col-sm-4" style="margin-bottom: 20px;">
                <div class="card">
                    <div class="card-header" style="color: aliceblue; background-color: rgb(0, 132, 255);">
                        <h3>${employee[i].getName()}</h3>
                        <h4><i class="fas fa-graduation-cap"></i> ${employee[i].getRole()}</h4>
                    </div>
                    <div class="card" style="width: 18rem;">
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <p>ID:</p>
                            </li>
                            <li class="list-group-item">Email: <a href="mailto:${employee[i].getEmail()}">${employee[i].getEmail()}</a></li>
                            <li class="list-group-item">
                                <p>School: ${employee[i].getSchool()}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>`
        }
    }

    return sections
}

module.exports = generateHTML;