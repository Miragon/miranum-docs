---
id: miranum-process
title: Process
sidebar_label: Process
description: "This section contains product manual content for miranum-process."
---

# Miranum-Process
Miranum-Process connects to the process engine (e.g. Camunda Platform 7 or 8) and enables users to start a process from code.
Once you have started the process, you can use [worker](./miranum-worker.md) to step through it.

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
When using the package structure of the hexagonal architecture we showed you in the [Quick-Reference](./quick-reference.md)
Miranum-Process needs to be imported into the **adapter-in** package.
We are using the **in** package since an outside Miranum port is used to start the process. Starting a process is a 
driver since it triggers the domain. 
```
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
If we use a REST-Controller to start a process we would need to add a request mapping for instance. But you are not limited 
to use REST and can also rely on gRPC and other API mechanisms. 
For the start of the process instance, we need the `StartProcessPort` from our Miranum-Process implementation. 

In the method `triggerProcessStart` we call the `startProcessPort` to start the actual process and submit a `StartProcessCommand`. 
The command contains the key of the process which we want to start as well as possible variables which we want to
initialize on startup of the process instance.

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
