---
id: miranum-cli-overview
title: Miranum CLI Overview
sidebar_label: Miranum CLI
description: "This section contains quickstart guides for our various Miranum tools."
---

# Miranum CLI Overview

If you are a fan of the command line, you can use the **Miranum CLI** to create, generate and deploy process artifacts.
The tool is available as a npm package and can be installed globally on your machine.

## Installation

You need to have [Node.js](https://nodejs.org/en/download) installed on your machine to use the **Miranum CLI**.
Node.js comes with npm, the Node.js package manager, which we will use to install our CLI tool.

To install the **Miranum CLI**, run the following commands in your terminal:

Make sure `npm` is installed on your machine:

```shell
npm -v
```

Install the **Miranum CLI** globally:

```shell
npm install -g @miragon/miranum-cli
```

## Usage

The **Miranum CLI** provides a set of commands to create, generate and deploy process artifacts.
We will explore some of these commands in more detail in the following sections.

### Create a new Project

The `generate` command to generate a new project knows three options:

* `-n`, `--name` - The name of the project
* `-p`, `--path` - The path where the project should be created
* `-h`, `--help` - Show help

The following command will create a new project with the name `my-project` in your home directory under the folder
`my-bpmn-projects`:

```shell
miranum-cli generate --name my-project --path ~/my-bpmn-projects
```

### Generate a Process Artifact

The `generate-file` command to generate a new process artifact knows four options:

* `-n`, `--name` - The name of the artifact
* `-p`, `--path` - The path where the artifact should be created
* `-t`, `--type` - The type of the artifact
* `-h`, `--help` - Show help

The following command will create a new DMN Decision Table with the name `my-decision-table` in the project folder
`my-project`:

```shell
miranum-cli generate-file --name my-decision-table --path ~/my-bpmn-projects/my-project --type dmn
```

:::info
The supported artifact types are:

* `bpmn` - BPMN diagram
* `dmn` - DMN Decision Table
* `form` - Form
* `config` - Configuration file
:::

### Deployment

The `deploy` command to deploy a process artifact knows three options:

* `-d`, `--directory` - The directory where the artifacts are located
* `-t`, `--target` - The target environment to deploy the artifacts to
* `-h`, `--help` - Show help

:::caution
The target environment must be configured in the `miranum.json` file.
:::

The following command will deploy all artifacts in the project folder `my-project` to the local target environment:

```shell
miranum-cli deploy --directory ~/my-bpmn-projects/my-project --target local
```
