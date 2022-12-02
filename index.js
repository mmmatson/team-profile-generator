//Packages needed for this application
const inquirer = require("inquirer");

//Questions to prompt user for input
const managerQuestions = () => {
    return inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is the team manager's name?",
        },
        {
            name: "id",
            type: "input",
            message: "What is the team manager's employee id?",
        },
        {
            name: "email",
            type: "input",
            message: "What is the team manager's email address?",
        },
        {
            name: "office",
            type: "input",
            message: "What is the team manager's office phone number?",
        }
    ])
        .then(managerAnswers => {
            console.log(managerAnswers);
            teamQuestions();
        })
}

const teamQuestions = () => {
    return inquirer.prompt([
        {
            name: "add",
            type: "confirm",
            message: "Would you like to add another employee to the team?",
        },
        {
            when: input => { return input.add === true },
            name: "role",
            type: "list",
            message: "What is the employee's role?",
            choices: ["Engineer", "Intern"],
        },
        {
            when: input => { return input.add === true },
            name: "name",
            type: "input",
            message: "What is the employee's name?",
        },
        {
            when: input => { return input.add === true },
            name: "id",
            type: "input",
            message: "What is the employee's id?",
        },
        {
            when: input => { return input.add === true },
            name: "email",
            type: "input",
            message: "What is the employee's email address?",
        },
        {
            when: input => { return input.role === "Engineer" },
            name: "github",
            type: "input",
            message: "What is the engineer's GitHub username?",
        },
        {
            when: input => { return input.role === "Intern" },
            name: "school",
            type: "input",
            message: "What school does the intern currently attend or most recently graduate from?",
        }
    ])
        .then((teamAnswers) => {
            console.log(teamAnswers);
            if (teamAnswers.add === true) {
                teamQuestions();
            }
        });
};


//Define function to initialize app
function init() {
    managerQuestions();
}

// Call function to initialize app
init();