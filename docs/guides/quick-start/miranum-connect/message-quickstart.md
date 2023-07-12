---
id: message-quickstart
title: Correlate a Message
sidebar_label: Correlate a Message
description: "This section introduces the concept of correlating a message using the Miranum Connect API."
---

# Correlating Messages with Miranum Connect

Message correlation is an essential feature of Miranum Connect, enabling your application to interact asynchronously with running workflows. This guide will walk you through how to use the Message Correlation feature effectively, allowing you to update the state of your workflows based on external triggers.

:::info What You Will Learn
- How to incorporate necessary dependencies to use Miranum Message
- How to implement and use the Message Correlation feature
:::

:::note
This guide assumes familiarity with Java and Maven.
:::

## Add the Necessary Dependencies

To use the message correlation feature of Miranum Connect, you must add the `message-api` and an engine-specific dependency to your project. Here is an example of the Maven dependency for the `message-api`:

```xml
<dependency>
 <groupId>io.miragon.miranum</groupId>
 <artifactId>message-api</artifactId>
 <version>0.2.0</version>
</dependency>
```

Depending on the engine you're using, you will also need to include an engine-specific dependency. Here's an example for Camunda 7:

```xml
<dependency>
 <groupId>io.miragon.miranum</groupId>
 <artifactId>message-adapter-c7</artifactId>
 <version>${miranum.worker.version}</version>
</dependency>
```

## Correlating Messages with Running Workflows

With the necessary dependencies added, you can correlate messages with your running workflows. You can achieve this using the `MessageApi` class from the Miranum Message module.

Here is an example of how you can correlate a message using a `CorrelateMessageCommand`:

```java
import io.miragon.miranum.connect.message.api.CorrelateMessageCommand;
import io.miragon.miranum.connect.message.api.MessageApi;

private final MessageApi messageApi;
    
public void correlateMessage(CorrelateMessageCommand message) {
    log.info("Received message: " + message);
    messageApi.correlateMessage(new CorrelateMessageCommand(message.getName(), message.getKey(), Map.of(message.getVariables())));
    log.info(message + " successfully correlated")
}
```

If the correlation of the message is not possible, an exception will be thrown.

## What's Next?

You have now learned how to correlate messages with running workflows using Miranum Connect. This is a critical aspect of working with asynchronous systems and will significantly improve your ability to manage complex workflows.

If you want to expand your knowledge further, take a look at the other quickstart guides, [Creating Workers](./creating-workers.md) and [Starting a Process](./starting-a-process.md).

To delve deeper into the application of these features in real-world scenarios, refer to our [Showcases](./showcases.md) section. Also, make sure to visit the [Best Practices](./best-practices.md) section to understand the optimal ways to structure and use your Miranum Connect implementations.
