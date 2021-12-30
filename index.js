// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require('fs')


// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please Enter Your Project Name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project.(Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please Enter Descriptipon about your project!')
                }
            }
        },

        {
            type: 'input',
            message: "Provide a step-by-step description of how to get the development environment running.",
            name: 'Instalation'
        },
        {
            type: 'input',
            message: "Provide instructions and examples for use. Include screenshots as needed.",
            name: 'Usage'
        },
        {
            type: 'input',
            message: "List your collaborators, if any, with links to their GitHub profiles.If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.If you followed tutorials, include links to those here as well.",
            name: 'Credits'
        },
        {
            type: 'input',
            message: "The last section of a good README is a license.",
            name: 'License'
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your Github Username? (Required)',
            validate: usernameInput => {
                if(usernameInput) {
                    return true;
                }else {
                    console.log('Please enter your GitHub Username!')
                }
            }
        },
        {
            type: 'input',
            name: 'repository',
            message: 'What is your GitHub Repository name? (Required)',
            validate: repositoryInput => {
                if(repositoryInput) {
                    return true;
                }else {
                    console.log('Please enter Repository name!')
                }
            }
        },

        //find all questions
    ]).then(answer => {
        console.log(answer.title);
        console.log(answer.description);
        console.log(answer)
        // look into fs.writeFile()
    })
}

    init();
