// TODO: Include packages needed for this application

const inquirer = require ("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const fs =require("fs");
// const error = require("console");
// TODO: Create an array of questions for user input
const questions = [
    {type: "input", name: "title", message: "Enter Your Project Title" },
    {type: "input", name: "description", message: "Provide a short description explaining the what, why, and how of your project"},
    {type:"input", name: "installation", message: "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running" },
    {type: "input", name: "usage", message: "Provide instructions and examples for use. Include screenshots as needed."},
    {type: "list", name: "license", message: "Select your license", choices: ["MIT", "GNU", "none"] },
    {type: "input", name: "Contributing", message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so."},
    {type: "input", name: "tests", message: "write tests for your application. Then provide examples on how to run them here"},
    {type: "input", name: "github", message: "please enter your Github Username"},
    {type: "input", name: "email", message: "please add your email address"}

];


// TODO: Create a function to initialize app
function init() {

   inquirer.prompt(questions).then(answer =>{

    console.log(answer)

    fs.writeFile("./dist/ReadMe.md", generateMarkdown(answer), (err) => 
    err ? console.error(err) : console.log('ReadMe Created!')
    );
  
   })

}

// Function call to initialize app
init();




