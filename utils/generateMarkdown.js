// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license == "none") {
    return " "
  }
  if (license == "GNU"){
  return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }
  if (license == "MIT"){
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license == "none") {
    return " "
  }
  return "- [License](#license)"

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "none") {
    return " "
  }
  return `
  ## License
  This project is licensed under the ${license} license.
   
  `
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
   ## Description 
   ${data.description}

   ## Table of Content
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
${renderLicenseLink (data.license)}

  ## Installation     
   ${data.installation}

   ## Usage
    ${data.usage}


  ${renderLicenseSection(data.license)}

  ${renderLicenseBadge(data.license)}

  ## Contributing
   ${data.Contributing}

  ## Test  
   ${data.tests}
  

  ## Questions

   Find me @  https://github.com/${data.github}

   or sent me a note @  ${data.email}

  
 

`;
}

module.exports = generateMarkdown;
