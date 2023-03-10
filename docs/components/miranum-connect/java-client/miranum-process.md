---
id: miranum-process
title: Process
sidebar_label: Process
description: "This section contains product manual content for miranum-process."
---

# Miranum-Process
Miranum-Process connects to the process-engine (e.g. Camunda Platform 7 or 8) and enables users to start a process from code.
Once having started the process you could make use of [worker](./miranum-worker.md) to step through it. 

To use the Miranum-Process, declare the following Maven dependency in your project:
```xml
<dependency>
    <groupId>io.miragon.miranum</groupId>
    <artifactId>process-api</artifactId>
    <version>0.1.0-SNAPSHOT</version>
</dependency>
```

This dependency is usually added to the **<...>-core** module, which was introduced in the
[project structure](./quick-reference.md#project-structure) of our quick-reference. 

## Implementing Miranum-Process
Miranum-Process is typically being imported into the **adapter-in** package. This results out of the nature of the hexagonal 
architecture we are using. Especially since we use an outside Miranum port to start the process. Starting a process is a 
driver since it triggers the domain. 
```bash
└── my-project-core
│   └── src
│     └── main
│       └── java
│         ├── adapter
│         │   ├── in
```

Having created a class in the package we now want to add Miranum-Process to it. Therefore, we want to check our imports.
Make sure to use:
```java
import io.miragon.miranum.connect.process.api.StartProcessCommand;
import io.miragon.miranum.connect.process.impl.StartProcessPort;
```

In the next step we want to implement a method which starts a process instance from our code. 
Therefore, we need to specify the request mapping. Additionally , we need the `StartProcessPort` from our Miranum-Process
implementation. 

In the method `triggerProcessStart` we call the `startProcessPort` to start the actual process and submit a `StartProcessCommand` 
while doing so. The command contains the key of the process which we want to start as well as possible variables which we want to 
initialise on startup of the process-instance.

```java
@RestController
@RequestMapping("api/process")
@AllArgsConstructor
public class StartProcessController {


    private final StartProcessPort startProcessPort;

    @PutMapping("/start")
    public ResponseEntity<Void> triggerProcessStart(@RequestBody final StartProcessRequestDto startProcessRequestDto) {
        this.startProcessPort.startProcess(new StartProcessCommand(startProcessRequestDto.getProcessKey(), startProcessRequestDto.getVariables()));
        return ResponseEntity.ok().build();
    }
}
```

:::info
For an actual example take a look on our [miranum-connect guide](../../../guides/getting-started/pizza-order-miranum.md).
:::
