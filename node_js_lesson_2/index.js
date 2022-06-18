const inquirer = require('inquirer');
// import inquirer from 'inquirer';
const fs = require('fs')

inquirer
  .prompt([
    /* Pass your questions in here */
    {
        message: 'What is your name?',
        name: 'name',
        type: 'input',
    },
    {
        message: 'What do you want your password to be?',
        name: 'password',
        type: 'password',
    },
    {
        message: 'Which pokemon do you want to choose?',
        name: 'pokemon',
        type: 'list',
        choices: ['Bulbasaur', 'Squirtle', 'Charmander'],
    },
    {
        message: "What is your rival's name?",
        name: 'rivalName',
        type: 'rawlist',
        choices: ['Blue', 'Gary', 'Bill']
    }
  ])
  .then((answers) => {
    // answers is an object where it has as it's keys all of the 'names' key from each question object
    // as the key, and each keys value will be the answer that the user gave for each question
    // Use user feedback for... whatever!!
    console.log(answers);
    fs.writeFile(`${answers.name}.json`, JSON.stringify(answers, null, 2), err => {
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