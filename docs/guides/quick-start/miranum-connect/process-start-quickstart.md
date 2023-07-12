---
id: process-start-quickstart
title: Start a Process Quickstart
sidebar_label: Start a Process
description: "This section introduces the concept of starting a process using the Miranum Connect API."
---
# Quickstart Guide: Starting a Process with Miranum Connect

In this quickstart guide, we will cover how to use Miranum Connect to initiate a process. This feature allows you to start a process from your code, thereby offering great flexibility and control over your workflows.

:::info What you will learn
- How to add the necessary dependencies to use Miranum Process.
- How to start a process instance from your code.
:::

## Add the Necessary Dependencies

To start, we need to include the `process-api` dependency in our project. This is the core API that enables you to start a process with Miranum Connect. Include the following snippet in your `pom.xml` file:

```xml
<dependency>
 <groupId>io.miragon.miranum</groupId>
 <artifactId>process-api</artifactId>
 <version>0.2.0</version>
</dependency>
```

Depending on the engine you're working with, you'll also need to include the respective engine-specific dependency. Here is an example for Camunda 7:

```xml
<dependency>
 <groupId>io.miragon.miranum</groupId>
 <artifactId>process-adapter-c7</artifactId>
 <version>${miranum.worker.version}</version>
</dependency>
```

## Starting a Process from Code

With the necessary dependencies in place, you can now start a process instance from your code.

Here is an example of how to do this using a REST-Controller:

```java
import io.miragon.miranum.connect.process.api.StartProcessCommand;
import io.miragon.miranum.connect.process.impl.StartProcessPort;

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

In the above code:

- `StartProcessPort` is an interface provided by Miranum Process implementation.
- `StartProcessCommand` is an object that contains the key of the process which we want to start and any variables which we want to initialize on startup of the process instance.

That's it! You've now set up a simple mechanism to start processes with Miranum Connect.

## Next Steps

Once you have initiated a process, you might want to perform various actions or tasks. To learn how to do this, check out our guide on [Creating Workers](./creating-workers.md) with Miranum Connect.

For more complex scenarios, we recommend you to take a look at our [Best Practices](./best-practices.md) guide, which provides architectural advice for using Miranum Connect effectively.

Also, don't forget to check our [Showcases](./showcases.md) section, which provides real-world examples of applications using Miranum Connect.

Happy Coding!

<p align="right">(<a href="#top">back to top</a>)</p>