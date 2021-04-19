// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else if (license) {
      if (license == 'GNU AGPLv3') {
        return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
      } else if (license == 'GNU GPLv3') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
      } else if (license == 'GNU LGPLv3') {
        return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
      } else if (license == 'Mozilla Public License 2.0') {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
      } else if (license == 'Apache License 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      } else if (license == 'MIT License') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
      } else if (license == 'Boost Software License 1.0') {
        return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
      } else if (license == 'ISC License') {
        return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
      } else if (license == 'The Unlicense') {
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`  
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
      if (license == 'GNU AGPLv3') {
        return `
        https://www.gnu.org/licenses/agpl-3.0
        `
      } else if (license == 'GNU GPLv3') {
        return `
        https://www.gnu.org/licenses/gpl-3.0
        `
      } else if (license == 'GNU LGPLv3') {
        return `
        https://www.gnu.org/licenses/lgpl-3.0
        `
      } else if (license == 'Mozilla Public License 2.0') {
        return `
        https://opensource.org/licenses/MPL-2.0
        `
      } else if (license == 'Apache License 2.0') {
        return `
        https://opensource.org/licenses/Apache-2.0
        `
      } else if (license == 'MIT License') {
        return `
        https://opensource.org/licenses/MIT
        `
      } else if (license == 'Boost Software License 1.0') {
        return `
        https://www.boost.org/LICENSE_1_0.txt
        `
      } else if (license == 'ISC License') {
        return `
        https://opensource.org/licenses/IS
        `
      } else if (license == 'The Unlicense') {
        return `
        http://unlicense.org/
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