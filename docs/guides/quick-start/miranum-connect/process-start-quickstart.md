---
id: process-start-quickstart
title: Start a Process Quickstart
sidebar_label: Start a Process
description: "This section introduces the concept of starting a process using the Miranum Connect API."
---

# Starting a Process with Miranum Connect

In this quickstart guide, we will cover how to use Miranum Connect to initiate a process. This feature allows you to start a process from your code, thereby offering great flexibility and control over your workflows.

:::info What you will learn
- How to add the necessary dependencies to use Miranum Process.
- How to start a process instance from your code.
:::

:::note
This guide assumes familiarity with Java and Maven.
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

## What's Next?

Congratulations on creating your first Miranum Worker! This is a crucial step in leveraging the full potential of
Miranum Connect.

From here, there's a lot you can explore next. You might want to delve deeper into performing tasks within a process
using your newly created worker. To learn how to further fine-tune your worker's capabilities, consider revisiting
our [Creating Workers](./worker-quickstart) guide.

For a broader view of how everything fits together, don't miss our [Showcases](../../showcases/showcases-overview) section.
It presents real-world applications using Miranum Connect, offering detailed examples of how workers can be effectively
utilized in different scenarios.

On top of this, to ensure you're getting the most out of Miranum Connect, we highly recommend our 
[Best Practices](../../best-practices/best-practices-overview) guide. This guide is a valuable resource packed with architectural advice and
tips that can enhance the effectiveness of your workers and your overall Miranum Connect usage.

Finally, now that you're comfortable with workers, consider venturing into other aspects of Miranum Connect. 
Explore our guides on 'Correlating Messages' or 'Starting a Process' to uncover more of the powerful features at
your disposal.
Stay curious, continue to expand your knowledge, and always enjoy the process of creating with Miranum Connect!