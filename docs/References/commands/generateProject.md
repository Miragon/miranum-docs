---
sidebar_position: 4
---

# Generate A Project
Dieser Command generiert ein BPMN-Projekt mit allen zusätzlichen form-/config-files und element-templates.
Das BPMN-Projekt basiert auf der in [miranum-ide](https://github.com/FlowSquad/miranum-ide/tree/main/resources/templates/project-template) definierten Struktur.
Der Nutzer kann sich hierbei einen Ziel-Ordner aussuchen, indem er diesen mit -p definiert, oder sich bereits in diesem befindet.

Eine gültige Eingabe kann wie folgt aussehen:
```bash
    generate-project -n MyProject -p path/of/Destination
```

Als weiter Hilfe hier die Ausgabe des help-commands:
```bash
[help]    
    mandatory fields:
    -n or --name <name>         :   "specify the project name"

    optional:
    -p or --path <filepath>     :   "specify the targeted path"
```