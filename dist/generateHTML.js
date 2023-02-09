function generateHTML(employee) {
    console.log(employee);
    const template = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        ${generateSections(employee)}
    </body>
    </html>`

    return template
}


function generateSections(employee) {
    let sections= ``
    for(i=0; i<employee.length; i++) {
        if(employee[i].getRole() == "Manager") {
            sections +=`
            some html for manager: ${employee[i].getName()}`
        } else if(employee[i].getRole() == "Engineer") {
            sections +=`
            Engineer html goes here`
        }
    }

    return sections
}

module.exports = generateHTML;