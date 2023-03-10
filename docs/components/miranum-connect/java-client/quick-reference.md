---
id: java-quick-reference
title: Quick-Reference
sidebar_label: Quick-Reference
description: "This section contains product manual content for miranum-connect and its use within a java client ."
---

# Java Client
## Dependencies 
To use the Java Miranum-Connect library, declare the following Maven dependency in your project:     
```xml
<dependency>
 <groupId>io.miragon.miranum</groupId>
 <artifactId>connect</artifactId>
 <version>0.1.0-SNAPSHOT</version>
</dependency>
```

This library can be used only in combination with SpringBoot. Miranum-Connect is currently available as **snapshot-release** 
in [maven-central](https://s01.oss.sonatype.org/content/repositories/snapshots/io/miragon/miranum/). You can import all Java moduls 
as dependencies. Make sure to use the latest version 

:::info
To pull dependencies from the maven snapshot repo it needs to be part of the [settings.xml](https://github.com/FlowSquad/miranum) for your user profile
:::

## Project Structure 
To make use of all the benefits Miranum-Connect provides, we recommend using a package structure suited for hexagonal architectures. 
Below you can find such an exemplary high-level folder structure. 

```bash
my-project
├── my-project-camunda7
├── my-project-camunda8
└── my-project-core
│   └── src
│     └── main
│       └── java
│         ├── adapter
│         │   ├── in
│         │   └── out
│         ├── application
│         │   ├── port
│         │   │    ├── in
│         │   │    └── out
│         │   ├── service
│         └── domain
.
```

- **my-project-camunda7**: contains the executable bpmn file for Camunda 7
- **my-project-camunda8**: contains the executable bpmn file for Camunda 8 
- **my-project-core**: contains the domain entities, use-cases as well as ports and adapters. This library is used by the Camunda 7 or Camunda 8 starter project.
