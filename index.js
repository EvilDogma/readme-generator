// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    message: "What is the title of your project?",
    name: "title"
},
{
    message: "Please enter a brief description of your project.",
    name: "description"
},
{
    message: "Please describe how to install your application.",
    name: "installation"
},
{
    message: "Please describe how to use your application.",
    name: "usage"
},
{
    message: "Please describe how to test your application.",
    name: "testing"
},
{
    message: "Please describe how to contribute to your application.",
    name: "contributing"
},
{
    type: "list",
    message: "Which license do you want to use?",
    name: "license",
    choices: ["MIT", { name: "Eclipse Public License 2.0", value: "EPL-2.0" }, { name: "Open Software License 3.0", value: "OSL-3.0" }, { name: "GNU General Public License v3.0", value: "GPL-3.0" }, { name: "Apache license 2.0", value: "Apache-2.0" }, "ISC"],
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => console.log(response))
        .catch(err => console.log(err))
}

// Function call to initialize app
init();
