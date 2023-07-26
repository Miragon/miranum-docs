---
id: worker-quickstart
title: Create your first worker
sidebar_label: Your first worker
description: "This section introduces the concept of an worker and how to create a simple one."
---

# Creating Workers with Miranum Connect

This guide will help you understand how to create a Miranum Worker in your Java application using Miranum Connect.
Workers are essential components of the Miranum ecosystem that bridge the gap between your process engine and your tasks,
enabling streamlined process automation.

:::info What You Will Learn
- How to incorporate necessary dependencies to use Miranum Message
- How to implement and use the Message Correlation feature
:::

:::note
This guide assumes familiarity with Java and Maven.
:::

## What is a Miranum Worker?

A Miranum Worker interfaces with your process engine (like Camunda Platform 7 or 8) and fetches tasks of a specific type.
These tasks can then trigger various actions in the context of a process instance. After a task is completed, 
the process engine advances to the next step, maintaining a smooth flow of operations.

## Add the Necessary Dependencies

To start creating Workers, you'll need to add the Miranum `worker-api` dependency to your Maven project:

```xml
<dependency>
 <groupId>io.miragon.miranum</groupId>
 <artifactId>worker-api</artifactId>
 <version>${miranum.version}</version>
</dependency>
```

Please note, this is just the API dependency. To use the worker for a specific engine, you'll need to add the
corresponding engine-specific dependency. Here's an example for Camunda 7:

```xml
<dependency>
    <groupId>io.miragon.miranum</groupId>
    <artifactId>worker-adapter-c7</artifactId>
    <version>${miranum.version}</version>
</dependency>
```

## Creating a Worker

To declare a method as a Worker, you first need to import the `Worker` interface from the `worker-api`:

```java
import io.miragon.miranum.connect.worker.api.Worker;
```

You then annotate the method with the `@Worker` annotation, providing a type which identifies the tasks this worker
should fetch. Here's a simple example:

```java
@Worker(type = "my-type") 
public DoSomethingResult doSomething(DoSomethingCommand doSomethingCommand) {
    return doSomethingUseCase.doSomething(doSomethingCommand);
}
```

In the above example, the `doSomething` method is marked as a Worker that handles tasks of type `my-type`.
The `doSomethingCommand` parameter is a command object that encapsulates the data needed to execute the task.

The return type of your Worker method can vary based on your needs. If you don't want to store any result back to the
process engine, use `void`. If you want to store a result, your method can return an object which will be stored in a
local-context within the process instance. To use the result globally, define the input/output mappings in your process.

## What's Next?

Creating a Worker is a fundamental step in leveraging the power of Miranum Connect for process automation. With a few
simple steps, you can start orchestrating tasks directly from your process engine. For more complex examples and
advanced usage, please refer to our [Showcases](../../showcases/showcases-overview) and 
[Best Practices](../../best-practices/best-practices-overview) sections.

Here's what you can explore further:

1. **Explore Correlating Messages:** Correlation of messages is an integral part of interacting with your processes. It allows you to send signals and data to running process instances, helping you to asynchronously handle external system updates. Check out the 'Correlating Messages' guide for a comprehensive understanding.

2. **Start a Process:** Dive into our 'Starting a Process' guide to understand how you can initiate a process from your code. The ability to programmatically start your processes can open a world of possibilities for your applications.

3. **Build on the Basics:** Use the knowledge you've gained here to experiment further with Miranum Workers. Explore more complex tasks, try handling multiple types of tasks, or experiment with different return types to see how they affect the scope of your process engine.

Keep up the momentum and continue exploring the world of Miranum Connect!