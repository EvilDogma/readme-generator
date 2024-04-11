// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "No License":
      return ''
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    case "EPL-2.0":
      return "![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)"
    case "IPL-1.0":
      return "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)"
    case "GPL-3.0":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
    case "Apache-2.0" :
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)"
    case "ISC":
      return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)"

  }
  // ["No License", "MIT", { name: "Eclipse Public License 2.0", value: "EPL-2.0" }, { name: "Open Software License 3.0", value: "OSL-3.0" }, { name: "GNU General Public License v3.0", value: "GPL-3.0" }, { name: "Apache license 2.0", value: "Apache-2.0" }, "ISC"]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "No License":
      return ''
    case "MIT":
      return "https://opensource.org/licenses/MIT"
    
    case "EPL-2.0":
      return "https://opensource.org/licenses/EPL-2.0"
      
    case "IPL-1.0":
      return "https://opensource.org/licenses/IPL-1.0"
      
    case "GPL-3.0":
      return "https://www.gnu.org/licenses/gpl-3.0"
      
    case "Apache-2.0" :
      return "https://opensource.org/licenses/Apache-2.0"
      
    case "ISC":
      return "https://opensource.org/licenses/ISC"
      
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[${license}](${renderLicenseLink(license)})`

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log(data)
  return `# ${data.title}
  ## Description
  ${renderLicenseBadge(data.license)}
  ${data.description}
  ## Table of Contents
  - [Installation](#installation) 
  - [Usage](#usage) 
  - [License](#license) 
  - [Contributing](#contributing) 
  - [Testing](#testing) 
  - [Questions](#questions) 
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contributing}
  ## Testing
  ${data.testing}
  ## Questions

`
  // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
}

// const testData = {title: 'will',
// description: 'dfddf',
// installation: 'dfdf',
// usage: 'dfdf',
// testing: 'dfdf',
// contributing: 'dfdf',
// license: 'EPL-2.0'}

// console.log(generateMarkdown(testData))

module.exports = generateMarkdown;
