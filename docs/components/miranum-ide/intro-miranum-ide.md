---
id: intro-miranum-ide
title: About to Miranum-IDE
sidebar_label: About Miranum-IDE  
description: "This section contains an introduction to Miranum-IDE."
---

Miranum-IDE is an Integrated Development Environment targeted for designing and developing process automation projects. 
It is build and released as VS Code plugin. It consists out of three different plugins. To learn how to get started follow 
the [getting-started guide](../../guides/getting-started/gettingstarted-ide.md). 

To create end-to-end process application a collaboration platform for various roles (technical and non-technical) is needed. 
Since processes need multiple artifacts like templates (forms, mails, PDF), workflow assets (BPMN, DMN) and configuration files 
(secrets, connectors) we see the growing need for a platform being capable of handling all of them. With Visual Studio Code developers 
are able to work in a familiar environment. Even non-technical personas are able to visit VS Code through the browser and do not need to
fear any technical complexity. 
Through the Live Share plugin for VS Code a real-time collaboration on the mentioned artifacts is easily possible. Empowering Business 
and IT to work even closer together. 

The picture below visualises the one collaboration platform we try to establish with our VS Code plugins. 

![Miranum IDE overview](./references/img/miranum-ide.svg)

Besides of making collaboration and asset management easier, the deployment of a process application gets easier as well. 
Instead of needing to make sure that the right form version fits to the right process and vice verso you can handle this right 
in your git repository where the project lives in. It is comparable to a mono-repo for your process-application. This should 
help versioning your application and assets more easily.

![Miranum IDE deployment bundle](./references/img/miranum-ide-deployment-bundle.svg)

| **Pain Points**                                                            | **With Miranum IDE**                                                                                  |
|----------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| Collaboration between IT and Business is a struggle                        | Collaborate on all of the assets of a process application                                             |
| Versioning of process artifacts is a tough and ressource intensive process | Deploy and version artifacts with ease                                                                |
| Confusion management of Forms and Data                                     | Use the proven JSON Schema to create extensive forms and manage data assets in a used fashion         |
| Separate tooling for developers to model processes                         | Developers can stick to VS Code in order to collaborate with Business Analysts on automation projects |