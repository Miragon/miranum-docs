---
id: miranum-ide-create-process-quickstart
title: Create your Process
sidebar_label: Create your Process
description: "This section introduces Miranum Modeler as the tool to create and edit BPMN processes or DMN decision tables."
---

import ElementPalette from "../static/img/miranumIDE_element-palette.png"
import ContextPad from "../static/img/miranumIDE_context-pad.png"
import PropertiesPanel from "../static/img/miranumIDE_properties-panel.png"
import CreateAppendMenu from "../static/img/miranumIDE_create-append-menu.png"

# Miranum Modeler Quickstart Guide

**Miranum Modeler** is one component of the Miranum IDE.
This plugin provides you with a custom editor to view and edit `.bpmn` and `.dmn` files.
It enables you to build BPMN 2.0 diagrams and DMN 1.3 decision tables.

:::info What You Will Learn
- [UI Elements of the BPMN Modeler](#ui-overview-bpmn-modeler)
- [Create a process](#create-a-process)
- [Create a decision table](#create-a-decision-table)
:::

## UI Overview BPMN Modeler

The Miranum Modeler opens automatically when you click on a `.bpmn` file in VS Code.
If you have used the Camunda Modeler in the past, the Miranum Modeler should look familiar to you.
If not, we give you a short introduction to the most important features.

### Element Palette

The Element Palette is located on the left side of the editor and contains all elements that can be used in a BPMN diagram.
You can drag and drop elements from the palette into the editor to add them to your process.

<img src={ElementPalette} alt="Element Palette" style={{width: 480}} />

### Context Pad

The Context Pad is shown when you select an element in the editor.
You can use it to quickly append a BPMN element to your process or to remove/morph the selected element.

<img src={ContextPad} alt="Context Pad" style={{width: 480}} />

### Properties Panel

The Properties Panel is located on the right side of the editor and shows the properties of the selected element.
You can use it to configure the selected element, like defining the input and output variables.

<img src={PropertiesPanel} alt="Properties Panel" style={{width: 480}} />

### Create/Append Menu

Instead of dragging and dropping elements from the Element Palette, you can also use the Create/Append Menu.
Normally you would drag and drop the element and then use the Context Menu to morph it to a specific type.
For example, you can drag and drop a `Task` and then morph it to a `User Task`.
With the menu you can directly create a `User Task` without the need to morph it.

<img src={CreateAppendMenu} alt="Create Append Menu" style={{width: 480}} />

With this in mind, let's create our first process.

## Create a Process

:::info
The Miranum Modeler can be used to model BPMN diagrams for **Camunda 7** and **Camunda 8**.
:::

The generated `.bpmn` file already contains a Start Event.
1. Double-click on it and enter a name
2. Select the Start Event and click on the `Append Menu` button in the Context Pad
3. Search for `User Task` and click on it to append it to the process
4. Double-click on the User Task and enter a name
5. Repeat steps 2-4 to add further elements to your process until it looks like this:

## Create a Decision Table

You can use the DMN Modeler for your DMN 1.3 models.
The Modeler opens on `.dmn` files and the UI Elements are the same as in the BPMN Modeler.
If you generated the `.dmn` file with the Miranum Console, it already contains a *Decision*.
1. Double-click on it and enter a name and a id
2. Drill down to the decision table by clicking on the `table` button on the top left corner of the decision
3. Define the input
   * Double-click on `When`
   * Enter a label
   * Enter the input expression (the variable from the process that holds the value)
   * Select the type of the input
   * Close the modal menu and add your rules by clicking on the `+` button
4. Define the output
   * Double-click on `Then`
   * Enter a label
   * Enter the output expression (the variable that can be accessed in the process)
   * Select the type of the output
   * For every rule you added in step 3, add a corresponding output value
5. Select your `Hit Policy`

### Link the Decision to your Process

1. Open your BPMN diagram
2. Select the `Business Rule Task`
3. Expand `Implementation` in the Properties Panel
4. Select `DMN` as the `Type`
5. Enter the ID of your decision in the `Decision Ref` field

   | `.dmn` | `.bpmn` |
   |--------|---------|
   | img    | img     |
 
6. Enter the variable name that will hold the output of the decision in the `Result Variable` field

   | `.dmn` | `.bpmn` |
   |--------|---------|
   | img    | img     |

7. Add the input variable in the `Inputs` section

   | `.dmn` | `.bpmn` |
   |--------|---------|
   | img    | img     |

