---
id: miranum-worker
title: Worker
sidebar_label: Worker
description: "This section contains product manual content for miranum-worker."
---

# Miranum-Worker
A Miranum-Worker connects to the process engine (e.g. Camunda Platform 7 or 8) and fetches tasks of a certain type.
With this functionality, our integration perform various actions on such a task occurring in a process instance. After having
worked and completed a task via a worker, the process engine continues to the next step. 

To use the Miranum-Worker, declare the following Maven dependency in your project:
```xml
<dependency>
    <groupId>io.miragon.miranum</groupId>
    <artifactId>worker-api</artifactId>
    <version>0.1.0-SNAPSHOT</version>
</dependency>
```

This dependency is usually added to the **<...>-core** module, which was introduced in the 
[project structure](./quick-reference.md#project-structure) of our quick-reference. 

## Implementing a Miranum-Worker 
The Worker is typically implemented in the **adapter-in** package. This results out of the nature of the hexagonal architecture 
we are using. The worker acts as an input we receive from the engine which drives the integration.
```bash
└── my-project-core
│   └── src
│     └── main
│       └── java
│         ├── adapter
│         │   ├── in
```

Having created a class in the package we now want to add such kind of worker. Therefore, we want to check our imports. 
Make sure to use:
```java
import io.miragon.miranum.connect.worker.api.Worker;
```

In the next step we want to implement a method which acts as a worker. 
This happens by adding the `@Worker` annotation. You are required to set a type which is used as reference to specify which 
job worker request the respective service task job. 

Your method can be of any return type. Set void if you do not want to store anything back to the scope of the process engine. 
If you have an object in return it will be stored in a local-context in the process instance. If you want to use it globally 
make sure to define the input/output mappings in your process.

```java
@Worker(type = "doSomething") 
public void doSomething(DoSomethingCommand doSomethingCommand) {
    doSomethingUseCase.doSomething(doSomethingCommand);
}
```

### Commands and UseCases
As you can see in above examples we deal with Commands and UseCases. These are typically being created in the **ports-in** package
of our project structure.
```
│         ├── adapter
│         │   ├── in
│         │   └── out
│         ├── application
│         │   ├── port
│         │   │    ├── in
│         │   │    └── out
│         │   ├── service
```
The method has an input parameter of type `DoSomethingCommand`. This command contains the data which we need from 
the process in order to execute the worker. (e.g. a list of Strings). 

Whereas the `doSomethingUseCase` is an interface which exists in the same **ports-in** package.
The actual implementation of that interface can be found in the **service** package. The UseCase implementation could look
something like this:
```java
public class DoSomethingService implements DoSomethingUseCase {

    private final DomainObject domainObject;

    @Override
    public void doSomething(DoSomethingCommand doSomethingCommand) {
        domainObject.doSomething(doSomethingCommand.getSomething());
    }
}
```

That is also the point where we interact with our domain object and execute the actual business logic. Keep in mind that 
in a hexagonal architecture all dependencies point towards the domain object. On itself it has no dependencies to anything else. 

### Return variables to the process
Variables which are returned by the worker are treated as local variables for an activity by default. To change this,
[input / output mappings](https://docs.camunda.io/docs/components/concepts/variables/#inputoutput-variable-mappings) 
are required. (in this case we need the output mapping)

Below you can see an exemplary worker signature with return type `Something`. 
```java
@Worker(type = "doSomething") 
public Something doSomething(DoSomethingCommand doSomethingCommand) 
```

Opening up our BPMN file in Miranum IDE and having created a process featuring a service task which calls our worker, 
we want to add an output mapping. In there, we map the local variable `something` to the global variable `somethingGlobal`. 

![Output-Mapping](../static/img/output-mapping.png)

Having done so, the variable `somethingGlobal` is accessible over the whole lifespan of the process instance and can be
used as input in a subsequent activity of our process. 

:::info
For an actual example take a look on our [miranum-connect guide](../../../guides/getting-started/pizza-order-miranum.md).
:::


## Generate Camunda Element-Templates
:::note
This feature is currently only available for Camunda Platform 7.
:::

Camunda element-templates are pre-configured building blocks that simplify the process of designing and implementing processes
in the Camunda Platform. They are used to standardize and streamline the modeling process by providing predefined elements with 
pre-configured properties, which can be easily customized to meet specific business requirements. This leads to a standardized way 
of modelling processes across different departments and teams within an organization and accelerates the creation of new process models 
for organizations that frequently develop new processes.

To use the element-template generation feature for Camunda, the `miranum-core` dependency or `element-template-api` dependency 
needs to be added to the project. Additionally, it is required to add a specific dependency for the Workflow-Engine you are using. 
(E.g. `element-templates-c7` as the artifactId for Camunda Platform 7)
```xml
<dependency>
   <groupId>io.miragon.miranum</groupId>
   <artifactId>element-template-api</artifactId>
   <version>0.1.0-SNAPSHOT</version>
</dependency>
```
Having done so the `@GenerateElementTemplates` annotation needs to be added to a Miranum Worker method.
The properties shown below are required when adding the annotation:
```java
@Worker(type = "doSomething")
@GenerateElementTemplate(
        name = "Do Something",
        id = "do-something",
        type = "doSomething",
        appliesTo = {BPMNElementType.BPMN_SERVICE_TASK},
        version = "0.0.1")
public void doSomething(DoSomethingCommand doSomethingCommand) {};
```

To further customize the generated element-templates the `@ElementTemplateProperty` annotation can be added to input 
and output parameter of the worker definition. For example, the name, type and constraints are configured in the `DoSomethingCommand`.
```java
class DoSomethingCommand {
    @ElementTemplateProperty(name = "Variable A", type = "String", required = true)
    private String a;

    @ElementTemplateProperty(name = "Variable B", type = "String", required = true)
    private String b;
}
```

The element-templates are generated on startup (not on build). Currently, the generated templates are stored inside the 
`target` folder of the startup project and can be found in the `classes/element-templates` directory. If you require information 
on how to use element-templates in Camunda's Modeler, please refer to the [Camunda docs](https://docs.camunda.io/docs/components/modeler/desktop-modeler/element-templates/about-templates/).
