const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const fs = require('fs');
const output_direct = path.resolve(__dirname, 'dist');
const outputPath = path.join(output_direct, 'ourteam.html');
const generateTeam = require('./src/template.js');
const { default: inquirer } = require('inquirer');

teamArray = [];
// Function for team builder app
function teamApp () {
    // Inquirer prompt for adding employees to generate
    function createTeam () {
        inquirer.prompt([{
            type: 'list',
            message:'What level of employee are you adding to the team?',
            name: "addEmployeePrompt",
            choices: ['Manager, Engineer, Intern, No more to add to the team.']
        }]).then(function(userInput) {
            switch(userInput.addEmployeePrompt) {
                case 'Manager':
                    addManager();
                    break;
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;

                default:
                    buildHtml();
            }
        })
    }

    // OOP Functions
    // Inquirer Prompts for Manager Positions
    function addManager() {
        inquirer.prompt ([
            {
                type: 'input',
                name:'managerName',
                message: 'Input the name of the Manager.'
            },
            {
                type: 'input',
                name: 'managerId',
                message: "Input Manager's ID no."
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: "Input the Manager's email."
            },
            {
                type: 'input',
                name: 'managerOfficeNo',
                message: "Input the Manager's office number."
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNo);
            teamArray.push(manager);
            createTeam();
        });
    }
    // Inquirer prompts for Engineer positions
    function addEngineer() {
        inquirer.prompt ([
            {
                type: 'input',
                name:'engineerName',
                message: 'Input the name of the Engineer.'
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "Input Engineer's ID no."
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "Input the Engineer's email."
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "Input the Engineer's Github username."
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamArray.push(engineer);
            createTeam();
        });
    }
    // Inquirer prompts for Intern positions
    function addIntern() {
        inquirer.prompt ([
            {
                type: 'input',
                name:'InternName',
                message: 'Input the name of the Intern.'
            },
            {
                type: 'input',
                name: 'engineerId',
                message: "Input Intern's ID no."
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: "Input the Intern's email."
            },
            {
                type: 'input',
                name: 'engineerGithub',
                message: "Input the Interns's Github username."
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internGithub);
            teamArray.push(intern);
            createTeam();
        });
    }

    function buildHtml() {
        console.log('Team Generated!!')
        fs.writeFileSync(outputPath, generateTeam(teamArray),"utf-8")
    }
    createTeam();
}
//Runs the team builder app
teamApp();