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

### Troubleshooting Checklist
Have you pulled latest from `main`?
Have you run npm install? When we update dependencies in the project, they don't automatically get updated in your environment.
You'll need to run npm install occasionally to acquire dependency updates locally.

### Cloud Events Documentation
We generate the cloud events documentation from the `schema.json` files stored in the [static folder](./docs/apis/static/schemas). 
For that purpose we use the [Docusaurus-JSON-Schema-Plugin](https://jy95.github.io/docusaurus-json-schema-plugin/). If you want to 
update a schema file you simply need to replace the outdated one. In case you want to add a new one, make sure to to create a new 
`.mdx` file in the [cloud-events](./docs/apis/cloud-events) folder of the API documentation besides of adding the `schema.json`.
Import the new schema and add import the Docusaurus-JSON-Schema-Plugin via: 

```
import Schema from "../../static/schemas/bpmn/command/xyz.schema.json";
import JSONSchemaViewer from "docusaurus-json-schema-plugin/lib/theme/JSONSchemaViewer";

# <CommandName>
<JSONSchemaViewer schema={ Schema } />

# Source: 
<CodeBlock language="json">{JSON.stringify(Schema, null, 2)}</CodeBlock>
```

### Creating new files 
If you have created a new file for the documentation you always need to make sure that it contains a proper header: 
```
---
id: cloud-events-overview
title: Cloud Events Overview
sidebar_label: Overview
description: "This section provides an overview of the different Cloud Event commands which are supported by Miranum Connect."
---
```
If the page should show up in the sidebar it needs to be added to the [sidebar.js](./sidebars.js). By default, this should always be the case. 

## Configuration
This documentation is built using [Docusaurus 2](https://docusaurus.io), a modern static website generator.
The framework is well documented and is used by many (open source) projects.
The documentation can be customized by setting parameters in docusaurus.config.js. Parameters are described here: https://v2.docusaurus.io/docs/docusaurus.config.js.
