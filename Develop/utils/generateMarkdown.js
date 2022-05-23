// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    return renderLicenseLink(license);
  } else {
    return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    switch (license) {
      case "MIT":
        return renderLicenseSection(
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        );
      case "GNU GPLv3":
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      case "GNU AGPLv3":
        return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
      case "GNU LGPLv3":
        return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
      case "Mozilla Public 2.0":
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      case "Apache 2.0":
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      case "Boost Software 1.0":
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      case "Unlicense":
        return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    }
  } else {
    return;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License 
${license}
`;
  } else {
    return;
  }
}

// add in 'How to Contribute' section if confirmed
function confirmContributions(confirm, contributions) {
  if (confirm) {
    return `## How to Contribute
${contributions}
`;
  } else {
    return "";
  }
}

// add in 'Tests' section if confirmed
function confirmTest(confirm, tests) {
  if (confirm) {
    return `## Tests
${tests}
`;
  } else {
    return "";
  }
}

function generateTOC(confirm, license, contributions, tests) {
  if (confirm) {
    return (
      `## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
` +
      (license
        ? `- [License](#license)
`
        : "") +
      (contributions
        ? `- [How to Contribute](#how-to-contribute)
`
        : "") +
      (tests
        ? `- [Tests](#tests)
`
        : "") +
      `- [Questions](#questions)
`
    );
  } else "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // destructure answers based on their property
  const {
    title,
    description,
    installation,
    usage,
    contributionsConfirm,
    contributions,
    testConfirm,
    tests,
    license,
    userName,
    email,
    table,
  } = data;

  return `# ${title}

## Description
${description}

${generateTOC(table, license, contributionsConfirm, testConfirm)}
## Installation
${installation}

## Usage
${usage}

${renderLicenseBadge(license)}
${confirmContributions(contributionsConfirm, contributions)}
${confirmTest(testConfirm, tests)}
## Questions
If you have any questions related to this project, feel free to reference my [GitHub](github.com/${userName}) or send an [email](${email})
`;
}

module.exports = generateMarkdown;
