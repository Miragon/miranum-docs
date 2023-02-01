---
sidebar_position: 1
---

# Miranum.json
The miranum.json is the config file provided by Miranum.
It defines the version of the project, its name, its workspaces and the available deployment environments.

In the following we refer to the standard file which is created after project generation:

```
{
  "$schema": "url",
  "projectVersion": "1.0.0",
  "name": "project-template",
  "workspace": [
    { "type": "bpmn", "path": "", "extension": ".bpmn" },
    { "type": "dmn", "path": "", "extension": ".dmn" },
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

## Version and Name
Both are self-explanatory and do not require any explanation.

## Workspace
The workspace defines all files or types that can be generated and used in the BPMN.
For this, you specify the desired type, the folder path under which it is to be stored and the desired file extension.
By default, there are the types "bpmn", "dmn", "form", "element-template" and "config", but the workspace can be extended/changed as desired.

## Deployment
The deployment defines the urls under which supported files ("bpmn", "dmn", "form", "config") can be deployed.
The targetEnvironments can be extended as desired, but we recommend using the three standard ones in modified form.
