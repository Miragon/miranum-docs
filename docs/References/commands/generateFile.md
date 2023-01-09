---
sidebar_position: 3
---

# Generate A File

Dieser Command generiert ein File auf basis des angegebenen Typen.
Mögliche Typen sind: bpmn, dmn, form, config, element-template

Eine gültige Eingabe kann wie folgt aussehen:
```bash
    generate-file -t bpmn -n testForm.form -p path/toBe
```

Als weiter Hilfe hier die Ausgabe des help-commands:
```bash
[help]    
    mandatory fields:
    -t or --type <type>       :   "specify the file type that is to be generated"
    -n or --name <name>       :   "specify the file name"
    -p or --path <filepath>   :   "specify the targeted path"
```
