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

1. Automatische Vervollständigung
2. Syntax-Highlighting

Im Folgenden wird erklärt, wie beides in Visual-Studio-Code einfach zu erlangen ist.

## Automatische Vervollständigung
Folgende Möglichkeiten stehen Ihnen zur Verfügung um automatische Vervollständigung für Element-Templates zu erlangen.

### Von Miranum-Console generierte Element-Templates
Unsere generierten Element-Templates enthalten automatisch einen Support für automatische Vervollständigung in VS-Code.
Sie müssen in diesem Fall also nichts machen.

### Eigene Element-Templates
Durch das Hinzufügen einer "$schema" Property am Kopfe des Templates kann automatische Vervollständigung in VS-Code supportet werden.
Das Schema von Camunda für Element-Templates finden Sie unter: 
[https://unpkg.com/@camunda/element-templates-json-schema/resources/schema.json](https://unpkg.com/@camunda/element-templates-json-schema/resources/schema.json)

Es sollte danach folgendermaßen ausschauen:
<img src={singleSchema} alt="singleSchema"/>

### Automatische Vervollständigung für alle Schemas
Mit folgenden Schritten können Sie automatische Vervollständigung standardmäßig in VS-Code erlangen:

1. Gehen Sie in VS-Code zu Ihren Settings (zu finden unter: Code/File -> Preferences -> Settings)

2. Suchen Sie nach *"JSON"* und klicken Sie auf *"Edit in settings.json"*
<img src={jsonSettings} alt="jsonSettings" className="jsonSettings"/>

3. Die settings.json Datei sollte sich automatisch öffnen. 
Unter *"json.schemas": [...]* können nun schemas definiert werden.
Hierfür muss ein neuer Eintrag wie folgt angelegt werden:
Legen Sie ein JavaScript-Objekt mit den Attributen "fileMatch" und "url" an.
Unter *"fileMatch"* geben Sie etwas an das die Files auszeichnet, für welche das schema angewendet werden soll (i.d.R. die Dateiendung).
Unter *"url"* geben Sie die Url des schemas an das Sie verwenden wollen.
In unserem Fall speichern Sie sich also das folgende [schema](https://github.com/camunda/element-templates-json-schema/blob/master/packages/element-templates-json-schema/resources/schema.json)
ab, und legen hierfür einen Eintrag in der settings.json an.
Diese sollte dann ungefähr so aussehen:
<img src={schemaEntry} alt="schemaEntry" className="schemaEntry"/>

4. Genießen Sie ihre automatische Vervollständigung und Vorschläge durch die Tastenkombination: *Strg + Space*

Credit an FrontAid und ihren [Blog](https://frontaid.io/blog/json-schema-vscode/).


## JSON Syntax-Highlighting
Sollten Ihre Element-Templates nicht auf .json enden, müssen Sie dies VS-Code erst erklären.
Hierfür folgen Sie bitte den Schritten 1 und 2, wie in [Autocompletion für alle Schemas](#automatische-vervollständigung-für-alle-schemas)
angegeben, um in die *"settings.json"* zu gelangen.
In dieser können unter *"files.associations"* File-Assoziationen definiert werden.
Sie tragen also Ihre Endung als Key und *".json"* als Value ein.
Hier ein Beispiel, in dem Element-Templates auf *".element-template"* enden.
<img src={fileAssociations} alt="singleSchema" className="fileAssociations"/>
