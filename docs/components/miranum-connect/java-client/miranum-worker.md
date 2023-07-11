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
    <version>0.2.0</version>
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
we want to add an output mapping. In there, we map the local variable `somethingLocal` to the global variable `somethingGlobal`. 

![Output-Mapping](../static/img/output-mapping.png)

Having done so, the variable `somethingGlobal` is accessible over the whole lifespan of the process instance and can be
used as input in a subsequent activity of our process. 

:::info
For an actual example take a look on our [miranum-connect guide](../../../guides/getting-started/pizza-order-miranum.md).
:::

### Retry mechanism
If a job fails the worker can perform retries. Be aware that the behavior differs between Camunda Platform 7 & 8. 
In Camunda Platform 8 the retries are set in the BPMN file. Camunda 7 does not provide the functionality to set 
retries in the BPMN file. Hence, we developed two different approaches to set the retries in miranum-connect for Camunda 7.

In **Camunda 7**:
* By default, the worker will retry 3 times.
* To override the default retries count use the `miranum.camunda7.worker.defaultRetries` application property.
* Or add an input parameter, as shown below, to the service task specifying the retry count for that task. The process variable will override the default value of retries. 
```xml
<!-- BPMN Diagram -->
<camunda:inputParameter name="retries">5</camunda:inputParameter>
```

## Generate Camunda Element Templates

Camunda element templates are pre-configured building blocks that simplify the process of designing and implementing processes
in the Camunda Platform. They are used to standardize and streamline the modeling process by providing predefined elements with 
pre-configured properties, which can be easily customized to meet specific business requirements. This leads to a standardized way 
of modelling processes across different departments and teams within an organization and accelerates the creation of new process models 
for organizations that frequently develop new processes.
Miranum supports the generation of element templates for Camunda 7 and Camunda 8.

Here's a comprehensive guide on how to generate and use these element templates using Miranum's Maven Plugin and API.

### Step 1: Set Up Maven Plugin
To generate element templates, you first need to add the `element-templates-generator-maven-plugin` to your Maven project.
This plugin supports both Camunda 7 and 8. The relevant configuration is shown below:

```xml
<plugin>
    <groupId>io.miragon.miranum</groupId>
    <artifactId>element-templates-generator-maven-plugin</artifactId>
    <version>${project.version}</version>

    <configuration>
        <targetPlatforms>camunda7</targetPlatforms>
    </configuration>
</plugin>
```

The `targetPlatforms` configuration determines which Camunda version the plugin targets. You can target multiple versions by either separating them with commas or using multiple `<targetPlatform>` tags.
```xml
<configuration>
    <targetPlatform>camunda7</targetPlatform>
    <targetPlatform>camunda8</targetPlatform>
</configuration>
```

### Step 2: Add API Dependency

The next step is to add the `element-template-api` dependency to your Maven project. This API is necessary for specifying which worker should generate an element template.
Here's how to add the dependency:

```xml
<dependency>
    <groupId>io.miragon.miranum</groupId>
    <artifactId>element-template-api</artifactId>
    <version>${project.version}</version>
    <scope>compile</scope>
</dependency>
```

### Step 3: Add ElementTemplate-Annotation to Worker

To generate an element template, use the `@ElementTemplate` annotation on a Miranum Worker method.
This annotation should at least specify the template's name and description.
Here's an example:
```java
@Worker(type = "doSomething")
@ElementTemplate(
        name = "Do Something",
        description = "This is a description")
public void doSomething(DoSomethingCommand doSomethingCommand) {};
```

### Step 4: Customize Your Template
To customize your element templates, use the `@ElementTemplateProperty` annotation on properties of the worker's input and output parameters.
This allows you to specify properties such as the name, type, and constraints for each parameter.

Here's an example that configures two string parameters, "Variable A" and "Variable B", for a `DoSomethingCommand`:
```java
class DoSomethingCommand {
    @ElementTemplateProperty(name = "Variable A", type = "String", required = true)
    private String a;

    @ElementTemplateProperty(name = "Variable B", type = "String", required = true)
    private String b;
}
```

### Step 5: Accessing Your Templates

Once your Maven project is built, your element templates will be generated and stored in the `classes/element-templates` directory within the `target` folder of your project. 
The templates will be in a subdirectory corresponding to the target Camunda version.

You can customize the output directory by adding the `outputDirectory` property to your plugin configuration and specifying your preferred path.

Refer to the [Camunda docs](https://docs.camunda.io/docs/components/modeler/desktop-modeler/element-templates/about-templates/) for more information on using element templates in Camunda's Modeler.