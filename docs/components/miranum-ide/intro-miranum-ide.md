---
id: intro-miranum-ide
title: About to Miranum-IDE
sidebar_label: About Miranum-IDE  
description: "This section contains an introduction to Miranum-IDE."
---

:::note
To get started right away follow the [getting-started guide](../../guides/quick-start/miranum-ide/miranum-ide-quickstart).
:::

Miranum-IDE is an Integrated Development Environment targeted for designing and developing process automation projects. 
It is build and released as three separate Visual Studio Code plugins.

![Example of the Miranum IDE](@site/docs/components/miranum-ide/static/img/example-ide.png)

The picture above shows how Miranum IDE looks like. On the left side you are able to see the form editor whose output is
rendered next to it. On the right side you are able to see the Modeler plugin which allows users to design BPMN processes 
and enrich them with technical attributes.

| **Pain Points**                                                                    | **Miranum IDE**                                                                                           |
|-----------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| Separate tooling for developers to model and enrich processes with technical attributes | Developers can stick to **VS Code** in order to collaborate with Business Analysts on automation projects |
| Collaboration between IT and Business is a struggle                                     | **Collaborate** on **all** of the **assets** of a process application                                     |
| Versioning of process artifacts is a tough and ressource intensive process              | **Deploy** and version artifacts with ease                                                                |
| Confusing management of Forms and Data                                                  | Use the proven **JSON Schema** to create **extensive forms** and manage data assets in a used fashion     |



To create **end-to-end process application** a collaboration platform for **various roles** (technical and non-technical) is needed. 
Since processes need **multiple artifacts** like templates (forms, mails, PDF), workflow assets (BPMN, DMN) and configuration files 
(secrets, connectors) we see the growing need for a platform being capable of handling all of them. With **Visual Studio Code** developers 
are able to work in a familiar environment. Even non-technical personas are able to visit VS Code through the browser and do not need to
fear any technical complexity. 
Through the **Live Share** plugin for VS Code a real-time collaboration on the mentioned artifacts is easily possible. Empowering Business 
and IT to work even closer together. 

The picture below visualises the one collaboration platform we do establish with our VS Code plugins. 

![Miranum IDE overview](@site/docs/components/miranum-ide/static/img/miranum-ide.svg)

Besides of making collaboration and asset management easier, the **deployment** of a process application gets easier as well. 
Instead of needing to make sure that the right form version fits to the right process and vice versa you can handle this right 
in your git repository where the project lives in. It is comparable to a **mono-repo** for your **process-application**. This should 
help **versioning** your application and assets more **easily**.

![Miranum IDE deployment bundle](@site/docs/components/miranum-ide/static/img/miranum-ide-deployment-bundle.svg)
