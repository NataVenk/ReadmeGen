// TODO: Include packages needed for this application

const inquirer = require ("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs =require("fs");
// const error = require("console");
// TODO: Create an array of questions for user input
const questions = [
    {type: "input", name: "title", message: "Enter Your Project Title" },
    {type: "input", name: "description", message: "Provide a short description explaining the what, why, and how of your project"},
    // {type: "confirm", name: "content", message: "Would you like to add Table of Content?"},
    // {type: "list", name: "table", message: "select all that apply: "},
{ type:"input", name: "installation", message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running" },
{type: "input", name: "usage", message: "Provide instructions and examples for use. Include screenshots as needed."},
{type: "input", name: "credits", message: "List your collaborators, if any, with links to their GitHub profiles"},
{type: "input", name: "license", message: "Select your license" },
{type: "input", name: "badges", message: "Select your badges"},
{type: "input", name: "Features", message: "If your project has a lot of features, list them here."},
{type: "input", name: "how to contribute", message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so."},
{type: "input", name: "tests", message: "write tests for your application. Then provide examples on how to run them here"}


    
// ,  choices: ["Description", "Installation", "Usage", "Credits", "License", "Badges", "Features", "How to contribute", "Tests" ]

];


// TODO: Create a function to initialize app
function init() {

   inquirer.prompt(questions).then(answer =>{

    fs.writeFile("./dist/ReadMe.md", generateMarkdown(answer), (err) => 
    err ? console.error(err) : console.log('ReadMe Created!')
    );
  
   })

}

// Function call to initialize app
init();
