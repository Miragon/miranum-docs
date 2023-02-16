# Miranum Documentation 

This repository contains the Miranum documentation which can be found under [https://miranum.com/](https://miranum.com/)

## Documentation Guidelines
### PRs for every change
All changes have to be done in a separate Branch. As soon as the changes are done please open a PR. A GitHub Action runs 
with every commit to a Branch and checks if the documentation can be built. If you create a new branch make sure to name it according 
to what it does (e.g. feat/xyz or fix/xyz). Please use semantic commit messages as described in [here](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716).

### Structure
Name Markdown files according to the title. This makes it easier to find a file.
Avoid non-alphanumeric characters in titles. Use the file name as an internal document id to reference in the appropriate sidebars file.

### Style Guide 
We will be using the writing [style guide defined by Camunda](https://github.com/camunda/camunda-platform-docs/blob/main/howtos/technical-writing-styleguide.md).
It outlines writing techniques and practices to ensure uniform styling across documentation and to yield a more cohesive and organized user experience.
We also want to ensure a unified naming of our product components. Hence, please use **Miranum Connect**, **Miranum IDE**, **Miranum: Modeler**, **Miranum: Form Builder** and **Miranum: Console** if you are referring to them.  

## Setup
### Installation 
`npm install`

### Local Development 
`npm run start`

### Troubleshooting checklist
Have you pulled latest from `main`?
Have you run npm install? When we update dependencies in the project, they don't automatically get updated in your environment.
You'll need to run npm install occasionally to acquire dependency updates locally.

## Configuration
This documentation is built using [Docusaurus 2](https://docusaurus.io), a modern static website generator.
The framework is well documented and is used by many (open source) projects.
The documentation can be customized by setting parameters in docusaurus.config.js. Parameters are described here: https://v2.docusaurus.io/docs/docusaurus.config.js.
