function renderLicenseBadge(license) {
  if (!license){
    return "";
  }else{
   return `https://img.shields.io/badge/license-${license}-green`
  }
}

function renderLicenseLink(license) {
  if(!license){
    return "";
  }else{
    return '(https://shields.io/)'
  }
}

function renderLicenseSection(license) {
  if(!license){
    return "";
  }else{ 
    return `[![License](${renderLicenseBadge(license)})] ${renderLicenseLink(license)}`
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
