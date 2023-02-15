---
id: intro-miranum-connect
title: About Miranum-Connect
sidebar_label: About Miranum-Connect  
description: "This section contains an introduction to Miranum-Connect."
---

:::note
Miranum-Connect is currently in early stage of development. No version is officially released yet. When using the framework
by cloning the repository it can happen that the API changes in future versions
:::

Miranum-Connect is a framework which enables developers to build reusable and technology neutral connectors and integrations
between products. For that purpose a hexagonal architecture with a strong domain focus is used. This open source project
is accessible form our [public repository](https://github.com/FlowSquad/miranum).

| **Pain Points**                                                                         | **Miranum Connect**                                                                                                                                                              |
|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| You need to touch **your code** to upgrade to newer versions of **third party systems** | Your **domain logic** is **independent** from any third party systems which calls or is called by your component                                                                 |
| It is hard to **change the vendor** once you have integrated to their systems           | By being **decoupled** you do not have any dependencies to other systems. You can **easily use another adapter** which is provided by the framework or **build one yourselves.** |


## Concept
The picture below illustrates what **Miranum-Connect** is and how it actually works. Let's set the scene first of all. 
A common use case in a business process is to **send an email**. Therefore, a developer usually needs to write some piece of
**integration** to an email server or a no-code tool can be used in order to do so automatically. Nevertheless, a quickly 
implemented interface or no/low-code solution can quickly create **dependencies** to the **technical environment**. Suddenly, 
you find yourself **tight into** a **vendors environment** or with non-reusable probably redundant connectors. 
Miranum-Connect eliminates exactly this problem! 

To do so it uses a **hexagonal architecture**. At its core we find **domain entities** and **use-cases** which represent **our business**. 
Outside, we find various **adapters** which are inwards and outwards facing. Given the rule of clean architecture, all dependencies 
are pointing towards the center. Hence, our **domain services and use-cases are independent of any other systems** (e.g. Camunda 
Platform 7 or our specific Imap Server). 
This allows us to model our domain code as freely as even possible. 

With **Miranum-Connect** you will be able to get some **out of the box adapters** to easily build such reusable connectors by **yourselves**. 


![Miranum-Connect example: Sending Mail](./references/img/miranum-connect-email.svg)