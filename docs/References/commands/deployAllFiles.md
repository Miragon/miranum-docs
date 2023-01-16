---
sidebar_position: 2
---

# Deploy All Files

Dieser Command deployed alle sich im Ordner befindenden Artefakte in eine gewünschte Umgebung.
Im Hintergrund wird hierfür dieselbe Deploy-methode wie beim deployFile genutzt.

Eine gültige Eingabe kann wie folgt aussehen:
```bash
    deploy-all -d path/to/directory -t local
```

Als weiter Hilfe hier die Ausgabe des help-commands:
```bash
[help]    
    mandatory fields:
    -d or --directory <directory> :   "specify the directory of the source files"
    -t or --target <target>       :   "specify the target environment"
```
