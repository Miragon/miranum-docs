---
sidebar_position: 1
---

# Miranum.json
Die miranum.json ist die von Miranum gelieferte config Datei.
Sie definiert die Version des Projekts, dessen Namen, seine workspaces, sowie die zur verfügung stehenden deployment Umgebungen.

Im Folgenden wird auf das standard File bezug genommen, welches nach Projekt generierung erstellt wird:

```
{
  "$schema": "url",
  "projectVersion": "1.0.0",
  "name": "project-template",
  "workspace": [
    { "type": "form", "path": "forms", "extension": ".form" },
    { "type": "element-template", "path": "element-templates", "extension": ".json" },
    { "type": "config", "path": "configs", "extension": ".config.json" }
  ],
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
Der Workspace definiert spezielle Files oder Typen, die in das BPMN eingebunden werden können.
Hierfür, gibt man den gewünschten Typen, den Ordner-Pfad, unter dem dieser abgelegt werden soll, und die gewünschte File-Endung an.
Standardmäßig gibt es die Typen "form", "element-template", und "config", jedoch kann der workspace beliebig erweitert/verändert werden.

Wichtig zu beachten ist, dass der angegebene key stets in camelcase Schreibweise mit Endung "s" geschrieben sein muss.

## Deployment
Das Deployment definiert die urls, unter denen unterstützte Files deployt werden können.
Die targetEnvironments können beliebig erweitert werden, wir empfehlen jedoch die drei standardmäßigen in abgeänderter Form zu nutzen.