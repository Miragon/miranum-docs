---
id: intro-miranum-connect
title: About Miranum-Connect
sidebar_label: About Miranum-Connect  
description: "This section contains an introduction to Miranum-Connect."
---

Miranum-Connect is a framework which enables developers to build reusable and technology neutral connectors and integrations
between products. For that purpose a hexagonal architecture with a strong domain focus is used. This open source project
is accessible form our [public repository](https://github.com/FlowSquad/miranum). In comparison, the default approach without 
such a framework is to include dependencies to external components right into your code. Leading to problems when there is a 
need to migrate to newer versions or competitors. Miranum want to avoid any type of vendor lock-in. 

:::note
Miranum-Connect is currently in early stage of development. No version is officially released yet. When using the framework 
by cloning the repository it can happen that the API changes in future versions
:::

## Concept
The picture below illustrates what Miranum-Connect is and how it actually works. Let's set the scene first of all. 
A common use case in a business process is to send an email. Therefore, a developer usually needs to write some piece of
integration to an email server or a no-code tool can be used in order to do so automatically. Nevertheless, a quickly 
implemented interface or no/low-code solution can quickly create dependencies to the technical environment. Suddenly, 
you find yourself tight into a vendors environment or with non-reusable probably redundant connectors. 
Miranum-Connect eliminates exactly this problem! 

To do so it uses a hexagonal architecture. At its core we find domain entities and use-cases which represent our business. 
Outside, we find various adapters which are inwards and outwards facing. Given the rule of clean architecture, all dependencies 
are pointing towards the center. Hence, our domain services and use-cases are independent of any other systems (e.g. Camunda 
Platform 7 or our specific Imap Server). 
This allows us to model our domain code as freely as even possible. 

With Miranum-Connect you will be able to get some out of the box adapters to easily build such reusable connectors by yourselves. 


![Miranum-Connect example: Sending Mail](./references/img/miranum-connect-email.svg)