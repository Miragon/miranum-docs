---
sidebar_position: 1
---

# Miranum.json
Die miranum.json ist die von Miranum gelieferte config Datei.
Sie definiert die Version des Projekts, dessen Namen, seine workspaces, sowie die zur verfügung stehenden deployment Umgebungen.

Im Folgenden wird auf das standard File bezug genommen:

```
{
  "projectVersion": "1.0.0",
  "name": "project-template",
  "workspace": {
    "forms": "forms",
    "elementTemplates": "element-templates",
    "configs": "configs"
  },
  "deployment": [
    {
      "plugin": "rest",
      "targetEnvironments": [
        {
          "name": "local",
          "url": "http://localhost:8080"
        },
        {
          "name": "dev",
          "url": "http://localhost:8080"
        },
        {
          "name": "test",
          "url": "http://localhost:8080"
        }
      ]
    }
  ]
}
```

## Version und Name
Sind beide selbsterklärend und bedürfen keiner ausführlicheren Erklärung.

## Workspace
Der workspace definiert die Ordner, in denen bestimmte für das BPMN-file benötigte typen abgelegt werden.
Hierbei gibt es standardmäßig die Typen "form", "element-template", und "config", jedoch können diese beliebig erweitert werden.
Der angegebene key muss jedoch stets in camelcase Schreibweise geschrieben sein.

## Deployment
Das deployment definiert die urls, unter denen unterstützte Files deployed werden können.
Die targetEnvironments können beliebig erweitert werden, wir empfehlen jedoch die drei standardmäßigen zu nutzen.