//Packages needed for this application
const inquirer = require("inquirer");

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

let team = [];

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
            const manager = new Manager (managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.office);
            team = team.concat(manager);
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
            if (teamAnswers.role === "Engineer")
            {
                const engineer = new Engineer (teamAnswers.name, teamAnswers.id, teamAnswers.email, teamAnswers.github);
                team = team.concat(engineer);
            }
            if (teamAnswers.role === "Intern")
            {
                const intern = new Intern (teamAnswers.name, teamAnswers.id, teamAnswers.email, teamAnswers.school);
                team = team.concat(intern);
            }
            if (teamAnswers.add === true) {
                teamQuestions();
            }
            if (teamAnswers.add === false) {
                console.log(team);
            }
        });
};

//Define function to initialize app
function init() {
    managerQuestions();
}

// Call function to initialize app
init();