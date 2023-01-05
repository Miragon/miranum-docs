---
sidebar_position: 3
---

# Generate A File

This command generates a file of a supported type.
Supportet types are: bpmn, dmn, form, config, element-templatet

A command can look as the following:
```bash
    generate-file -t bpmn -n testForm.form -p path/toBe
```
Additionally the user has the option to define his own templates (--template) that are to be used, and fill them with the data (--data) he wants.

```bash
[help]    
    mandatory fields:
    -t or --type <type>       :   "specify the file type that is to be generated"
    -n or --name <name>       :   "specify the file name"
    -p or --path <filepath>   :   "specify the targeted path"

    optional:
    --template <filepath>     :   "specify a custom template that is to be used"
    --data <JSON string>      :   "specify the data that is to be used for your template"
```
