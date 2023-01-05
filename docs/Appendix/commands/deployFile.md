---
sidebar_position: 1
---

# Deploy A File

This command deploys an artifact to the target environment.
An artefact consists out of a type (string), a project (string), and a file
The file in itself consist out of a name, an extension, some content, a size, and a path

A command can look as the following:
```bash
    deploy-file -f file/path.type -t local --type bpms
```