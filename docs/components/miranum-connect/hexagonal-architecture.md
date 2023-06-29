---
id: hexagonal-architecture
title: The Hexagonal Architecture
sidebar_label: The Hexagonal Architecture
description: "This section introduces the hexagonal architecture and it's advantages compared to the wide spread layer approach."
---

# Hexagonal Architecture
The hexagonal architecture, also known as Ports and Adapters, serves as an alternative to the previously discussed layered architecture \cite{Griffin}. The key difference is that all dependencies point inwards. At the core of the architecture lies the domain, which is independent of technologies and frameworks \cite{Griffin}.

![Hexagonal Architecture Diagram](images/hexagonal-architecture.png)

Figure 1: Hexagonal Architecture Diagram

## Domain Objects
In a domain rich with business rules, domain objects are the core of an application. Domain objects can contain both state and behavior. The closer the behavior aligns with the real world, the easier the code is to understand, replicate, and maintain.

Domain objects have no external dependencies. They provide an API through which use cases can be executed.

Since domain objects have no dependencies on other layers of the application, changes in other layers do not affect them. They can be evolved independently of dependencies. This exemplifies the Single Responsibility Principle\footnote{The Single Responsibility Principle, mentioned by Robert C. Martin in his paper "Design Principles and Design Patterns," is one of the main principles for clean software architecture \cite{RobertC.Martin}} which states that components should have only one reason to change. For our domain object, that reason is a change in business requirements.

With a single responsibility, domain objects can be developed without considering external dependencies. This ability for evolution makes the hexagonal architecture style suitable for the application of Domain-Driven Design (DDD)\footnote{DDD is an approach to software development that places the business logic and requirements, represented by a conceptual model, at the center of design and implementation of the software \cite{Evans.2019}}.

## Use Cases
Use cases can be seen as abstract descriptions of user interactions with software. In the context of the hexagonal architecture, they are established as primary elements in the codebase.

A use case can be understood as a class that handles all aspects of a specific application scenario. For example, in a travel application, there could be a class named `BookFlightUseCase` that provides a specific API allowing users to book a flight. The code within this class encompasses all validations and business rule logics specific to the use case, which cannot be implemented within domain objects. Any additional requirements would be delegated to domain objects. For example, there could be a domain object called `Flight`.

In alignment with domain objects, a use case class has no dependencies on external components. If it requires data or functions outside the hexagon, an output port is created.

## Input and Output Ports
Domain objects and use cases reside within the hexagon, representing the core of the application. Any communication to and from the outside world is facilitated through dedicated ports.

An input port is a simple interface that can be called by external components and implemented by a use case. The component calling such an input port is referred to as an input or driving adapter.

An output port, on the other hand, is a simple interface that can be called by use cases when they need something from outside the system. It could be an output port to a database, providing important data to the use cases. This interface is designed to cater to the needs of use cases but is implemented by an external component referred to as an output or driven adapter.

With input and output ports, there are clear points at which data enters and exits the system, facilitating understanding of the architecture.

## Adapters
Adapters form the outer layer of the hexagonal architecture. They are not part of the core but interact with it.

Input adapters or driving adapters call the input ports to perform specific tasks. An input adapter could be a web interface, where pressing a button in a web browser triggers a specific input port to execute the corresponding use case.

Output adapters or driven adapters are called by use cases and could provide data from a database, for example. An output adapter implements a set of output port interfaces. It's important to note that the interfaces are determined by the use cases, not the other way around.

Adapters facilitate the interchangeability of a specific layer of the application. If the application needs to be accessible from a different client in addition to the web, an alternative client input adapter can be added, utilizing the existing input port. If the application requires a different database, a new persistence adapter implementing the same output port interfaces can be added \cite{Hombergs.2019b}.