const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'list',
        name: 'employeeChoice',
        message: 'What type of employee is this?',
        choices: [
            'Manager',
            'Engineer',
            'Intern'
        ]
    },
    {
        type: 'input',
        name: 'employeeName',
        message: 'Employee\'s name?',
        // Validates the input
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You need to enter the employee\'s name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'Team Employee\'s Employee ID Number?',
        // Validates the input
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('You need to enter the employee\'s id');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'Team Employee\'s Email Address?',
        // Validates the input
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You need to enter the employee\'s email address');
                return false;
            }
        }
    }
];

const afterManagerQuestions = [
    {
        type: 'list',
        name: 'employeeChoice',
        message: 'What type of employee is this?',
        choices: [
            'Engineer',
            'Intern'
        ]
    },
    {
        type: 'input',
        name: 'employeeName',
        message: 'Employee\'s name?',
        // Validates the input
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('You need to enter the employee\'s name');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeID',
        message: 'Team Employee\'s Employee ID Number?',
        // Validates the input
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('You need to enter the employee\'s id');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: 'Team Employee\'s Email Address?',
        // Validates the input
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You need to enter the employee\'s email address');
                return false;
            }
        }
    }
];

// Manager Specific Question
let managerQuestion = [
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the Manager\'s Office number'
    }
];

// Engineer Specific Question
let engineerQuestion = [
    {
        type: 'input',
        name: 'githubID',
        message: 'What is the Engineer\'s GitHub profile'
    }
];

// Intern Specific Question
let internQuestion = [
    {
        type: 'input',
        name: 'githubID',
        message: 'What School does the Intern attend?'
    }
];

// Asks if the team is complete
let finalize = [
    {
        type: 'list',
        name: 'finalize',
        message: 'Is the team complete?',
        choices: [
            'Yes',
            'No'
        ]
    }
];



// Creates a function to initialize the app
function init() {
    inquirer.prompt(questions)
        .then(function (answers) {
            if (answers.employeeChoice === 'Manager') {
                inquirer.prompt(managerQuestion)
                    .then(function (managerAnswer) {
                        console.log(answers, managerAnswer);
                        handleEmployeeChoice(answers.employeeChoice);
                    });
            };
            if (answers.employeeChoice === 'Engineer') {
                inquirer.prompt(engineerQuestion)
                    .then(function (engineerAnswer) {
                        console.log(answers, engineerAnswer);
                        handleEmployeeChoice(answers.employeeChoice);
                    });
            };
            if (answers.employeeChoice === 'Intern') {
                inquirer.prompt(internQuestion)
                    .then(function (internAnswer) {
                        console.log(answers, internAnswer);
                        handleEmployeeChoice(answers.employeeChoice);
                    });
            };
        });
};

function afterManager() {
    inquirer.prompt(afterManagerQuestions)
        .then(function (answers) {
            if (answers.employeeChoice === 'Engineer') {
                inquirer.prompt(engineerQuestion)
                    .then(function (engineerAnswer) {
                        console.log(answers, engineerAnswer);
                        askFinal();
                    });
            };
            if (answers.employeeChoice === 'Intern') {
                inquirer.prompt(internQuestion)
                    .then(function (internAnswer) {
                        console.log(answers, internAnswer);
                        askFinal();
                    });
            };
        });
};

function askFinal() {
    inquirer.prompt(finalize)
        .then(function (finalizeAnswer) {
            if (finalizeAnswer.finalize === 'No') {
                handleEmployeeChoice();
            };
        });
};

function handleEmployeeChoice(employeeChoice) {
    if (employeeChoice === "Manager") {
        afterManager();
    } else {
        init();
    }
};

init();