const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { type } = require('os');
const Choices = require('inquirer/lib/objects/choices');

// using the "name" field as an identifiyer for the area in the README
const questions = [
        {
            type: 'input',
            name:'title',
            message:'What is the title of your project?'
        },
        {
            type:'input',
            name:'description',
            message:'Tell me a little about the project'
        },
        {
            type:'input',
            name:'installation',
            message:'How do you install the project?'
        },
        {
            type:'input',
            name:'usage',
            message:'How do you use the project?'
        },
        {
            type:'input',
            name:'credits',
            message:'Who helped you with this project?'
        },
        {
            type:'checkbox',
            name:'license',
            message:'Which license do you want to use?(check all that apply)',
            choices:['MIT', 'Apache','ISC','NONE']
        },
        {
            type:'link',
            name:'github',
            message:'Please provide your github handle:'
        },
        {
            type:'input',
            name:'email',
            message:'Please provide your email:'
        }
    ];

// when writeToFile is called, the filename (i.e. README.md) and the data will be imported
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
