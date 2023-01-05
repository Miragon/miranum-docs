---
sidebar_position: 4
---

# Generate A Project
this command generates a bpmn project with all neccesarry form-/config-files and element-templates.
The bpmn project is based on the structure in resources/templates/basicProjectTemplate.
The user has the possibility to select a certain destination directory, and can - should he wish to do so - force (f-flag) the system to overwrite any already existing files

A command can look as the following:
```bash
    generate-project -n MyProject -p path/of/Destination -f
```

```bash
[help]    
    mandatory fields:
    -n or --name <name>         :   "specify the project name"

    optional:
    -p or --path <filepath>     :   "specify the targeted path"
    -f or --force               :   "force overwriting the project"
```