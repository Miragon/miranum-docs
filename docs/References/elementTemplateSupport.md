---
sidebar_position: 2
---
import styles from './styling/elementTemplateSupport.css';
import fileAssociations from './img/fileAssociations.png';
import singleSchema from './img/singleSchema.png';
import schemaEntry from './img/schemaEntry.png';
import jsonSettings from './img/jsonSettings.png';

# Template-Support
Für einfacheres Entwickeln von Element-Templates wünschen sich Modellierer und Entwickler in der Regel zwei Dinge:

1. Autocompletion
2. Syntax-Highlighting

Im Folgenden wird erklärt, wie beides in VS-Code einfach zu erlangen ist.

## Autocomplete
Folgende Möglichkeiten stehen Ihnen zur Verfügung um Autocompletion für Element-Templates zu erlangen.

### Von Miranum-Console generierte Element-Templates
Unsere generierten Element-Templates enthalten automatisch ein Autocomplete Support in VS-Code.
Sie müssen in diesem Fall also nichts machen.

### Eigene Element-Templates
Durch das Hinzufügen einer "$schema" Property am Kopfe des Templates kann Autocompletion supportet werden.
Das Schema von Camunda für Element-Templates finden Sie unter: 
[https://unpkg.com/@camunda/element-templates-json-schema/resources/schema.json](https://unpkg.com/@camunda/element-templates-json-schema/resources/schema.json)

Es sollte danach folgendermaßen ausschauen:
<img src={singleSchema} alt="singleSchema"/>

### Autocompletion für alle Schemas
Credit an Bruno Paz und seinen [Artikel](https://dev.to/brpaz/how-to-create-your-own-auto-completion-for-json-and-yaml-files-on-vs-code-with-the-help-of-json-schema-k1i), 
in dem er durch folgende Schritte erklärt, wie Autocompletion für Visual-Studio-Code zu erlangen ist.

1. Gehen Sie in VS-Code zu Ihren Settings (zu finden unter: Code/File -> Preferences -> Settings)

2. Suchen Sie nach *"JSON"* und klicken Sie auf *"Edit in settings.json"*
<img src={jsonSettings} alt="jsonSettings" className="jsonSettings"/>

3. Die settings.json Datei sollte sich automatisch öffnen. 
Unter *"json.schemas": [...]* können nun schemas definiert werden.
Hierfür muss in einem Java-Object ein Key-Value-Paar angelegt werden, der Key ist der Absolute-Pfad zum schema welches unterstützt werden soll, 
und der Value ist etwas das die Files auszeichnet, für welche es angewendet werden soll (i.d.R. die Dateiendung).
In unserem Fall speichern Sie sich also das folgende [schema](https://github.com/camunda/element-templates-json-schema/blob/master/packages/element-templates-json-schema/resources/schema.json)
ab, und legen hierfür einen Eintrag in der settings.json an.
Diese sollte dann ungefähr so aussehen:
<img src={schemaEntry} alt="schemaEntry" className="schemaEntry"/>

4. Genießen Sie ihr Autocomplete und Vorschläge durch die Tastenkombination: *Strg + Space*

## JSON Syntax-Highlighting
Sollten Ihre Element-Templates nicht auf .json enden, müssen Sie dies VS-Code erst erklären.
Hierfür folgen Sie bitte den Schritten 1 und 2, wie in **Autocompletion für alle Schemas** angegeben, um in die *"settings.json"* zu gelangen.
In dieser können unter *"files.associations"* File-Assoziationen definiert werden.
Sie tragen also Ihre Endung als Key und *".json"* als Value ein.
Hier ein Beispiel, in dem Element-Templates auf *".element-template"* enden.
<img src={fileAssociations} alt="singleSchema" className="fileAssociations"/>
