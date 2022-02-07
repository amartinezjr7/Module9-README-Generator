// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (!license){
    return "";
  }else{
   return `https://img.shields.io/badge/license-${license}-green`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return "";
  }else{
    return 'https://shields.io/'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return "";
  }else{ 
    return `[![License](${renderLicenseBadge(license)})] (${renderLicenseLink(license)})`
  }
}

function generateMarkdown(data) {
  return `# ${data.title} 

  ${renderLicenseSection(data.license)}

  ## Description 
  ${data.description}
  
  
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Test](#test)
  * [License](#license)
  
  
  ## Installation
  ${data.installation}
  
  
  
  ## Usage 
  ${data.usage}
  
  
  
  ## Credits
  ${data.credits}
  
  
  
  
  ## License
  ${data.license}
  

  ## Creator Info
  -github:(www.github.com/${data.github}) 
  -email: ${data.email}
`;
}

module.exports = generateMarkdown;
