---
id: miranum-message
title: Message
sidebar_label: Message
description: "This section contains product manual content for miranum-message."
---

# Miranum-Message
Miranum-Message connects to the process-engine (e.g. Camunda Platform 7 or 8) and enables users to correlate messages with 
process instance.

To use the Miranum-Message, declare the following Maven dependency in your project:
```xml
<dependency>
    <groupId>io.miragon.miranum</groupId>
    <artifactId>message-api</artifactId>
    <version>0.1.0-SNAPSHOT</version>
</dependency>
```

This dependency is usually added to the **<...>-core** module, which was introduced in the
[project structure](./quick-reference.md#project-structure) of our quick-reference. 

## Implementing Miranum-Message
Miranum-Message is typically being imported into the **adapter-in** package. This results out of the nature of the hexagonal
architecture we are using. 
```bash
└── my-project-core
│   └── src
│     └── main
│       └── java
│         ├── adapter
│         │   ├── in
```

Having created a class in the package we now want to add Miranum-Message to it. Therefore, we want to check our imports.
Make sure to use:
```java
import io.miragon.miranum.connect.message.api.CorrelateMessageCommand;
import io.miragon.miranum.connect.message.api.MessageApi;
```

In the next step we want to implement a method which handles the message correlation for you. To do so we need to initialise
the Message-API. Having done so, we can create a new method `correlateMessage` which gets the CorrelateMessageCommand as an input. 
Using `messageApi.correlateMessage` I can correlate the message with my process, by specifying the message name, correlation key
and the variables which should be sent back to the process.

```java
private final MessageApi messageApi;
    
public void correlateMessage(CorrelateMessageCommand message) {
    log.info("Received message: " + message);
    messageApi.correlateMessage(new CorrelateMessageCommand(message.getName(), message.getKey(), Map.of(message.getVariables())));
    log.info(message + " successfully correlated")
}
```

