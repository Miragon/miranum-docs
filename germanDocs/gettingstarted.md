---
sidebar_position: 1
---

# Getting Started with Miranum

## Setup
Bevor das volle Potenzial von Miranum ausgeschöpft werden kann benötigen Sie folgende VS-Code Extensions:

[Miranum: Console](https://marketplace.visualstudio.com/items?itemName=miragon-gmbh.miranum-console)

[Miranum: BPMN-Modeler](https://marketplace.visualstudio.com/items?itemName=miragon-gmbh.vs-code-bpmn-modeler)

[Miranum: Form](https://marketplace.visualstudio.com/items?itemName=miragon-gmbh.miranum-vs-code-forms)


## Ihr erstes BPMN-Projekt
Öffnen Sie den Reiter Miranum-Console in der side-bar links und drücken Sie "generate project". 
(Alternativ kann auch über einen rechts-click auf einen Ordner und dann unter dem Reiter "generate" -> "generateProject" ein Projekt generiert werden)
Nun sollte sich ein neues Fenster öffnen, in dem Sie die Option haben einen Namen und einen Pfad anzugeben/auszuwählen.
Geben Sie ihrem Projekt einen passenden Namen und wählen Sie einen für Sie passenden Pfad aus.

![gettingStartet_1](docs/guides/getting-started/img/gettingStartet_step1.png)

Nun da das basic Projekt steht können wir mit dem Modellieren anfangen. 
Gehen Sie dafür mit vs-code in ihren Projektordner (Datei -> Öffnen -> Ihr Projekt) und öffnen das sich darin befindende .bpmn File.
Dieses sollte zurzeit fast leer sein. Lassen Sie uns das schnell ändern, indem wir eine "Task" hinzufügen.
Diese Task können wir nun durch erneutes auswählen und klicken auf den Schraubenschlüssel zu einer "UserTask" machen

![gettingStartet_2](docs/guides/getting-started/img/gettingStartet_step2.png)

Unser erstes feature behandelt nun die sogenannte form-property.
Wer sich mit Camunda bereits auskennt, weiß wie komplex diese sein kann.
Durch Miranum jedoch können Sie sich hier viele kleinigkeiten sparen. 
Formulare müssen nun nicht mehr umständlich hin und her kopiert werden und sich deren Form-keys gemerkt werden, 
nein all dies wird Ihnen durch eine optimierte Struktur und ein bequemes drop-down Menü vereinfacht.
Nehmen wir jedoch an die zwei generierten forms erfüllen nicht unsere erwartungen, kein Problem - wir erstellen uns ein weiteres Formular.
Öffnen Sie hierfür erneut die Miranum-Console, diesmal wollen wir jedoch nur ein File generieren. Drücken Sie also "generate file", 
geben Sie dem File einen passenden Namen und wählen Sie den Typen "form" aus. 
(Wie zuvor kann auch über rechts-click "generate" -> "generateFile" gegangen werden)

Das neu generierte Form-File wird durch die miranum.json automatisch im Form-Ordner abgelegt, und kann so im drop-down Menü verwendet werden.
Wir sind jedoch noch nicht fertig, schließlich wollen wir ja unser eigenes Formular erstellen. Klicken Sie dafür auf das Formular.
Durch die Extension sollte sich nun ein neuer Editor aufmachen, in dem Sie sowohl einen Builder, als auch eine Preview sehen.
Konzentrieren wir uns zuerst auf den Builder. Ziehen Sie von den auswählbaren Elementen hierfür ein Group- und dann ein TextField-Objekt in ihre Sektion.
In der Preview sollte sogleich eine Veränderung zu sehen sein, sollte dies nicht der Fall sein, laden Sie bitte die Seite neu.
Gut gemacht! Wir haben nun unser erstes Formular erstellt, zugegeben, es is noch etwas simpel, aber das können wir durch zwei weitere Objekte schnell ändern.
Fügen Sie also noch ein Number-Object und einen Switch Ihrer Gruppe hinzu.

![gettingStartet_3](docs/guides/getting-started/img/gettingStartet_step3.gif)

Lasst uns nun die Objekte benennen. Hierfür müssen Sie den Options-Button (die drei Punkte) und dann "Edit" drücken.
Hierdurch sollte sich ein neues Fenster öffnen, welches Ihnen vielerlei Optionen bietet.
Da wir nur den Namen ändern wollen konzentrieren wir uns auf das Feld "title" und ändern diesen zu "Artikel".
Lassen Sie uns nun auch die Nummer zu "Preis", und den Switch zu "Genehmigen" ändern.
Klasse, nun haben wir ein vollständiges Formular welches sicht in unser bpmn-diagram einbinden lässt.
Klicken Sie hierfür auf das .bpmn File (Schließen und Öffnen Sie das BPMN-file) und selektieren die UserTask.
Wählen Sie unter Form Ihr neu erstelltes Formular aus, und es sollte sich eine input-variable befüllen.

![gettingStartet_4](docs/guides/getting-started/img/gettingStartet_step4.gif)

Nun fügen wir noch einen weiteren Task hinzu und beenden unser BPMN mit dem "End-Event" Objekt.
Machen Sie den Task zu einer "ServiceTask". (Sollten Sie vergessen haben wie dies geht: 
klicken Sie auf den Task, wählen Sie den Schraubenschlüssel aus, und dann die ServiceTask - ein Zahnrad)

Damit ist unser Diagramm fertig, sieht Ihres genauso aus?:

![gettingStartet_5](docs/guides/getting-started/img/gettingStartet_step5.png)

Lassen Sie uns jedoch noch ein paar Verfeinerungen daran vornehmen. 
Beginnen wir damit ein Template anzubinden. Da das Generieren eines Projektes keine element-templates liefert, müssen Sie für dieses Beispiel, das sich in [miranum-ide](https://github.com/FlowSquad/miranum-ide/blob/main/resources/templates/basicTemplates/mail-task-template.json)
befindet, kopieren und bei sich im Unterordner "element-templates" ablegen.
Um dieses nun nutzen zu können, müssen Sie bei der eben erstellten Service-Task auf den Knopf "+ Select" in der Template-property drücken.
Dies sollte ein neues Fenster öffnen, in dem Sie ihr Template auswählen können. (Stellen Sie sicher das, das Template zurzeit nicht geöffnet ist, da vs-code es sonst nicht lesen kann) 
Wählen Sie die "Mail Task" aus und befüllen Sie die Felder folgendermaßen:
Als "recipient" tragen Sie Ihre email-adresse ein, als "content" das Wort "Willkommen", und als "subject" das Wort "Geschenk".

Wir wollen auch die Titel unserer Tasks ändern. 
Falls Sie noch nicht mit Camunda vertraut sind, Titel können über den Reiter "General" und dann die Property "Name" vergeben werden.
Benennen wir als unsere UserTask "Geschenk erstellung" und unsere ServiceTask "Mail versenden".

![gettingStartet_6](docs/guides/getting-started/img/gettingStartet_step6.gif)

Mit dem jetzigen Ergebnis sind wir zufrieden und können unser Projekt somit final deployen.
Hierfür rechts-klicken Sie den Ordner, klicken dann auf "Deploy All", und wählen danach Ihre gewünschte Target-Umgebung aus.

![gettingStartet_7](docs/guides/getting-started/img/gettingStartet_step7.png)

