// TODO: Include packages needed for this application
const fs = require("fs")
const { default: inquirer } = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = ["What is the project title?", "Enter a description of the application: ",
    "Enter the usage information of the project: ", "Enter contribution guidelines: ", "Enter test instructions", "Enter installation instructions: ", 
    "Enter your email address: ", "What is the license of the project: ", "Enter your github username: " 
];

const licenses = [
    "WTFPL",
    "MIT",
    "BSD 3-Clause",
    "CC0",
    "GNU GPL v3",
    "No License"
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: "input",
            message: questions[0],
            name: "title"
        },
        {
            type: "input",
            message: questions[1],
            name: "description"
        },
        {
            type: "input",
            message: questions[2],
            name: "usage"
        },
        {
            type: "input",
            message: questions[3],
            name: "contribution"
        },
        {
            type: "input",
            message: questions[4],
            name: "test"
        },
        {
            type: "input",
            message: questions[5],
            name: "installation" 
        },
        {
            type: "input",
            message: questions[6],
            name: "email"
        },
        {
            type: "input",
            message: questions[7],
            name: "license",
            choices: licenses
        },
        {
            type: "input",
            message: questions[8],
            name: "username"
        }
    ])
    .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile("ReadMe.md", markdown);
    })
    .catch((err) => {
        console.log("Program failed with: ")
        console.log(err);
    })
}

// Function call to initialize app
init();
