---
sidebar_position: 1
---

# Deploy A File

Dieser Command deployed ein Artefakt in eine gewünschte Umgebung.
Ein Artefakt besteht hierbei aus einem Type (string), einem Projekt (string), und einem File.
Das File wiederum besteht aus einem Namen, einer Extension, Content, einer Größe und einem Pfad.

Eine gültige Eingabe kann wie folgt aussehen:
```bash
    deploy-file -f file/path.type -t local --type bpmn
```

Als weiter Hilfe hier die Ausgabe des help-commands:
```bash
[help]    
    mandatory fields:
    -f or --file <file>       :   "specify the file in your project"
    -t or --target <target>   :   "specify the target environment"
    --type <type>             :   "specify the file type"
```
