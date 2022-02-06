// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = 'README.md'
    data = "bumer";
   fs.writeFile(fileName, data, err =>{
    if(err) throw err;

    console.log('README is complete')
})
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();

    }

// Function call to initialize app
init();
