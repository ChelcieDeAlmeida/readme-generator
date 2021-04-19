// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = init => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project? (Required)',
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter a name for your project!');
                    return false;
                }

            }
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'What is this project about? (Required)',
            validate: projectDescInput => {
                if (projectDescInput) {
                    return true;
                } else {
                    console.log('Woah! Your project needs a description!');
                }
            }
        },
        {
            type: 'Input',
            name: 'languages',
            message: 'What technologies did you use for this project? (Required)',
            validate: languagesInput => {
                if (languagesInput) {
                    return true;
                } else {
                    console.log('Please select the technologies you used');
                }
            }
        },
        {
            type: 'input',
            name: 'installationInst',
            message: 'What are the steps required to install your project? (Required)',
            validate: installationInstInput => {
                if (installationInstInput) {
                    return true;
                } else {
                    console.log('Please enter your installation instructions');
                }
            }
        },
        {
            type: 'input',
            name: 'usageInst',
            message: 'What are the use cases for this application? (Required)',
            validate: usageInstInput => {
                if (usageInstInput) {
                    return true;
                } else {
                    console.log('Please describe use cases for your application');
                }
            }
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Would you like to credit your collaborators if any?',
            default: false
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please select the license(s) that apply to your project',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'ISC License', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Please enter your Github username (Required)',
            validate: githubUserInput => {
                if (githubUserInput) {
                    return true;
                } else {
                    console.log('Please enter your Github username')
                }
            }
        },
        {
            type: 'input',
            name: 'testCases',
            message: 'Add some test case scenarios'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Other users may need to contact you, please enter your email')
                }
            }
        }
    ])
}

questions()
    .then(init => {
        const readMd = generateMarkdown(init);

        // TODO: Create a function to write README file
        fs.writeFile('README.md', readMd, err => {
            if (err) throw new Error(err);

            console.log('Your README.md file has been generated');
        });
    });
