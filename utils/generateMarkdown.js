// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
------------------------------------------------
# Table of Contents

[Description](#Description)

[Installation](#Installation)

[Usage](#Usage)

[Credits](#Credits)

[License](#License)

[Badge](#Badge)

[GitHub](#GitHub)

[GitHub-Repo](#Github-Repo)

-------------------------------------------------

## Description
${data.description}

## Installation
${data.Instalation}

## Usage
${data.Usage}

## Credits
${data.Credits}

## License
${data.License}

## Tests
${data.test}

## Contributors
${data.contributors}

## Badge
[![License](https://img.shields.io/badge/License-${data.License}-blue.svg)](https://opensource.org/licenses/${data.License})

## GitHub
${data.username}

https://github.com/${data.username}

## GitHub-Repo
${data.repository}

https://github.com/${data.username}/${data.repository}

`;
}

module.exports = generateMarkdown;
