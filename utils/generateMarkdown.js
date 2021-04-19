// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else if (license) {
      if (license == 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      } else if (license == 'General Public License 2.0') {
        return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
      } else if (license == 'General Public License 3.0') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      } else if (license == 'Mozilla Public License 2.0') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      } else if (license == 'BSD 3-Clause License') {
        return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
      } else if (license == 'Apache License 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    }
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  } else if (license) {
    for (i = 0; i < 1; i++) {
      if (license == 'MIT') {
        return `
        https://opensource.org/licenses/MIT
        `
      } else if (license == 'General Public License 2.0') {
        return `
        https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html
        `
      } else if (license == 'General Public License 3.0') {
        return `
        https://www.gnu.org/licenses/gpl-3.0
        `
      } else if (license == 'Mozilla Public License 2.0') {
        return `
        https://opensource.org/licenses/MPL-2.0
        `
      } else if (license == 'BSD 3-Clause License') {
        return `
        https://opensource.org/licenses/BSD-3-Clause
        `
      } else if (license == 'Apache License 2.0') {
        return `
        https://opensource.org/licenses/Apache-2.0
        `
      }
    }
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else if (license) {
    for (i = 0; i < 1; i++) {
    return `## **_License_**
    
This project is covered under the ${license} license.
Click [here](${renderLicenseLink(license)}) to access more information on the license.`
}
  }
};

// TODO: Create a function to generate markdown for README
module.exports = (readmeInputs, license) => {
  console.log(readmeInputs, license);
  return ` # **_${readmeInputs.projectName}_**
  ${renderLicenseBadge(readmeInputs.license)}
  ## **_Description_**
  ${readmeInputs.projectDescription}
  ## **_Table of contents_**
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
    
  ## **_Installation_**
  ${readmeInputs.installationInst}
  ## **_Usage_**
  ${readmeInputs.usageInst}
  ## **_Contributing_**
  ${readmeInputs.credits}
  ## **_Tests_**
  ${readmeInputs.testCases}
${renderLicenseSection(readmeInputs.license)}
  ## **_Questions_**
  Please visit [my GitHub](https://github.com/${readmeInputs.githubUsername})
  and if you're still scratching your head over this, drop me a line here [email address](mailto:${readmeInputs.email}) and I'll reach out ASAP.
  `;
};