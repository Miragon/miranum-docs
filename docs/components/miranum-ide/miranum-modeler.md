---
id: miranum-modeler
title: Miranum Modeler
sidebar_label: Miranum Modeler  
description: "This section contains an overview of the functionality of the Miranum Modeler."
---

> Model your BPMN 2.0 diagrams right in your IDE

Miranum Modeler is one part of our Integrated Development Environment ([Miranum-IDE](intro-miranum-ide.md)).
It's a Visual Studio Code (VS Code) plugin you can find in the [official marketplace](https://marketplace.visualstudio.com/items?itemName=miragon-gmbh.vs-code-bpmn-modeler).

The plugin targets the creation of Camunda Platform 7 compatible BPMN diagrams and enhance them with technical attributes.
It uses the Open Source Projects [bpmn-js](https://bpmn.io/toolkit/bpmn-js/) and [VS Code](https://code.visualstudio.com/) 
to make the life of an BPM Developer a little easier.

## Features

### Model your BPMN 2.0 diagram
1. Open a `.bpmn` file inside VS Code
2. Start modeling your own process
3. Use drag-and-drop or the append menu by selecting a BPMN element to create your BPMN diagram

![create-process.gif](@site/docs/components/miranum-ide/static/img/miranum-modeler/create-process.gif)

#### Use element templates
1. Create a new folder
   > Note: The folder must be next to the .bpmn file and must be named *_element-templates_*.
2. Place a new [element template](https://docs.camunda.io/docs/components/modeler/desktop-modeler/element-templates/about-templates/) inside the new created folder
3. Assign the element template to a BPMN element by using the menu on the right side  
   ![text-editor-btn](@site/docs/components/miranum-ide/static/img/miranum-modeler/add-element-templates-menu.png)
4. Configure your diagram with the newly added values

![add-element-templates.gif](@site/docs/components/miranum-ide/static/img/miranum-modeler/add-element-templates.gif)

#### Use the integrated text editor for quick fixes
1. Click the button on the navigation bar in the top right corner  
   ![text-editor-btn](@site/docs/components/miranum-ide/static/img/miranum-modeler/text-editor-btn.png)
2. This will open the text editor besides the BPMN editor
3. Now you can search or make changes directly in the text file
4. Changes are synchronized with the BPMN editor

![text-editor.gif](@site/docs/components/miranum-ide/static/img/miranum-modeler/text-editor.gif)

### Debugging

#### Use the integrated token-simulation plugin
1. Switch to the token simulation  
   ![token-sim-on](@site/docs/components/miranum-ide/static/img/miranum-modeler/token-sim-off.png)
2. Start simulating your process.
   > Note: Not every BPMN element is supported
3. This will give you a good first impression if your process is executable
4. Switch back to the editor to modify your process  
   ![token-sim-off](@site/docs/components/miranum-ide/static/img/miranum-modeler/token-sim-on.png)
 
![text-editor.gif](@site/docs/components/miranum-ide/static/img/miranum-modeler/token-sim.gif)

#### See logging information for errors
1. Click the button on the navigation bar in the top right corner  
   ![text-editor-btn](@site/docs/components/miranum-ide/static/img/miranum-modeler/logging-btn.png)
2. This will open the build in **Logger** underneath the editor
3. You can scroll through the messages to find errors

![text-editor.gif](@site/docs/components/miranum-ide/static/img/miranum-modeler/logging.gif)
