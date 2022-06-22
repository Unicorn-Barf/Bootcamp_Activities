const inquirer = require('inquirer');
// import inquirer from 'inquirer';
const fs = require('fs')
const htmlMaker = require('./htmlMaker');

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: 'What is your name?',
        name: 'name',
        type: 'input',
        default: 'Ho',
    },
    {
        message: 'What languages do you know?',
        name: 'languages',
        type: 'checkbox',
        choices: ['English', 'Spanish', 'Japanese'],
    },
    {
        message: 'What is your preferred method of communication?',
        name: 'prefLang',
        type: 'list',
        choices: ['English', 'Spanish', 'Japanese'],
    },
  ])
  .then((answers) => {
    // answers is an object where it has as it's keys all of the 'names' key from each question object
    // as the key, and each keys value will be the answer that the user gave for each question
    // Use user feedback for... whatever!!
    console.log(answers);
    fs.writeFile(`${answers.name}.html`, htmlMaker(answers), err => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log('Sucess!');
        }
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });