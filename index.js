// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name:'title',
            message:'What is your name?'
        }
        
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, err =>{
    if(err) throw err;

    console.log('README is complete')
})
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInput){
        console.log(userInput)
    writeToFile('README.md',generateMarkdown(userInput))
    })
}

// Function call to initialize app
init();
