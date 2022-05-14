// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  // project title
  {
    type: "input",
    name: "project",
    message: "What is your project's name? (Required)",
    validate: (projectInput) => {
      if (projectInput) {
        return true;
      } else {
        console.log("Please enter your name!");
        return false;
      }
    },
  },

  // description
  {
    type: "input",
    name: "description",
    message: "Enter in a brief description of your project. (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("Please enter a project description!");
        return false;
      }
    },
  },

  // installation instruction

  // usage information

  // contribution guidelines

  // test instruction

  // license (list)

  // GitHub username

  // email address

  // table of contents
];

const promptUser = () => {
  return inquirer.prompt(questions);
};

promptUser()
  .then((answers) => console.log(answers))
  .catch((err) => {
    console.log(err);
  });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
