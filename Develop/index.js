// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { resolve } = require("path");
const { rejects } = require("assert");

// TODO: Create an array of questions for user input
const questions = [
  // project title
  {
    type: "input",
    name: "title",
    message: "What is your project's name? (Required)",
    validate: (titleInput) => {
      if (titleInput) {
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
  {
    type: "input",
    name: "installation",
    message: "Enter in instructions on how to install your program. (Required)",
    validate: (installationInput) => {
      if (installationInput) {
        return true;
      } else {
        console.log("Please enter the project's installation instructions!");
        return false;
      }
    },
  },

  // usage information
  {
    type: "input",
    name: "usage",
    message: "Enter in instructions and examples for use. (Required)",
    validate: (usageInput) => {
      if (usageInput) {
        return true;
      } else {
        console.log("Please enter in a set of instructions for your project!");
      }
    },
  },

  // contribution guidelines
  {
    type: "confirm",
    name: "contributionsConfirm",
    message: "Would you like to add a 'How to Contribute' section?",
    default: false,
  },
  {
    type: "input",
    name: "contributions",
    message:
      "Please enter a brief description on how you would like users to contribute.",
    when: ({ contributionsConfirm }) => {
      if (contributionsConfirm) {
        return true;
      } else {
        return false;
      }
    },
  },

  // test instruction
  {
    type: "confirm",
    name: "testConfirm",
    message: 'Would you like to add a "Tests" section?',
    default: false,
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter in a description of the tests for your project.",
    when: ({ testConfirm }) => {
      if (testConfirm) {
        return true;
      } else {
        return false;
      }
    },
  },

  // license (list)
  {
    type: "checkbox",
    name: "license",
    message:
      "Which licenses would you like to select for your project? (Check any that apply)",
    choices: [
      "MIT",
      "GNU GPLv3",
      "GNU AGPLv3",
      "GNU LGPLv3",
      "Mozilla Public 2.0",
      "Apache 2.0",
      "Boost Software 1.0",
      "Unlicense",
    ],
  },

  // GitHub username
  {
    type: "input",
    name: "userName",
    message: "What is your GitHub username password? (Required)",
    validate: (userNameInput) => {
      if (userNameInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },

  // email address
  {
    type: "input",
    name: "email",
    message: "What email address should users contact you by? (Required)",
    validate: (emailInput) => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter in an email address!");
        return false;
      }
    },
  },

  // table of contents
  {
    type: "confirm",
    name: "table",
    message: "Would you like to include a table of contents?",
    default: true,
  },
];

const dummy = {
  project: "Horiseon Social Solutions Services Webpage",
  description:
    "The main webpage of Horiseon Social Soultion Services. Horison specializes in Search Engine Optimization, Online Reputation Management, and Social Media Marketing.",
  installation: "None",
  usage: "Screenshot here",
  contributionsConfirm: false,
  testConfirm: false,
  license: ["MIT"],
  userName: "jaguilar95",
  email: "josue.aguilar1995+horiseon@gmail.com",
  table: true,
};

// // TODO: Create a function to write README file
function writeToFile(fileContent) {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "README.md created successfully!",
      });
    });
  });
}

// TODO: Create a function to initialize app
const init = () => {
  return inquirer.prompt(questions);
};

// Function call to initialize app
// init()
//   .then((answers) => console.log(answers))
//   .catch((err) => {
//     console.log(err);
//   });

writeToFile(JSON.stringify(dummy));
