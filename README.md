# Übung - Benutzerverwaltung :raising_hand: :briefcase:

Ziel dieser Übungsaufgabe ist es ein einfache Benutzerverwaltung auf Basis unserer bisherigen Angular-Kenntnisse zu entwickeln. Ihr könnt das Repository und das darin angelegte Angular Projekt als Ausgangspunkt benutzen.

## Projekt einrichten

1. Repository auschecken `ng clone <repository-link>`
2. Wechselt anschließend mit `git checkout dev` in den `dev` Branch. (Hier könnt ihr euch austoben und Entwickeln)
3. In Projektverzeichnis wechseln `cd benutzerverwaltung` und [VSCode] mit `code .` öffnen. (Falls das nicht funktioniert, einfach rechtsklick auf den Ordner und mit [VSCode] öffnen)
4. In der geöffneten Console `npm install` ausführen
5. Abschließend `ng serve`oder `npm start` ausführen und im Browser `http://localhost:4200/` aufrufen

## Ausgangssituation

Die Anwendung soll folgende Bestandteile beinhalten:

- Einen Header in dem der Titel angezeigt wird
- Ein Formular in das die persönlichen Daten eines Benutzers eingetragen werden können

  - Anrede (In Form einer Select-Box)
  - Vorname
  - Nachname
  - Email-Adresse
  - Alter
  - Submit-Button

- Wird das Formular mit einem Click auf Submit abgeschickt soll der Benutzer unterhalb des Formulars in Form einer **Unsortierten-Liste** angezeigt werden (alles in einer Zeile) Bspw.
  - Herr Hans Zimmer, hans.zimmer@xzy.de, 21 Jahre

> **Tipp**
>
> Ihr könnt Variablen innerhalb eines Strings ganz einfach folgendermaßen einbinden

    `string text ${variable} string text`

## :books: Aufgabe 1

#

Setzt die beschriebenen Inhalte in HTML um. Ihr könnt für die erste Aufgabe gerne alles erst einmal in erhalb der `AppComponent` Files umsetzen.

Farbliche Gestaltung und Anordnung überlasse ich ganz euch (tobt euch ein bisschen mit `CSS` aus und experimentiert ein bisschen :wink:)

Die Lösung bzw. eine mögliche Lösung der Aufgabe ist im `aufgabe-1` - Branch enthalten :wink:

## :books: Aufgabe 2

#

Legt für den Benutzer ein Datenmodell an (`class` oder `interface` überlasse ich euch). Legt anschließend in der `app.component.ts` ein paar Beispielbenutzer an und lasst sie innerhalb der zuvor angelegten Benutzerliste schon einmal in der oben beschriebenen Form ausgeben

Lösung in Branch `aufgabe-2`

## :books: Aufgabe 3

#

### a)

Verseht das Formular mit den entsprechenden Direktiven und Attributen, die beim **Template-driven Approach** verwendet werden. Und gebt den Inhalt des Formulars bei einem Click auf den Button in der Konsole aus.

### b)

Legt bei einem Click auf den Button einen neuen Nutzer an und fügt ihn der bereits gefüllten Beispielliste hinzu.

Komplette Lösung in Branch `aufgabe-3`

>**Tipp**
>
>Imports nicht vergessen :wink:


## :bomb: Zusatzaufgabe - Validierung

#

Letztes mal kamen wir aufgrund des Zeitmangels leider nicht mehr dazu das Thema `Validierung` anzugehen. Nichtsdestotrotz könnt ihr euch das Thema gerne selbst einmal anschauen und die :chestnut: versuchen zu knacken :wink:

Folgende Aufgabe:

- Erweitert die Eingabefelder um folgende `Constraints`

  - Vorname & Nachname: Maximale länge von **20 Zeichen**
  - Emailadresse: Muss der gültigen Form einer Emailadresse entsprechen `<text>@<text>.<text>`
  - Alter: Das mindestalter muss bei **18 Jahren** liegen

- Wenn eine ungültiges Formular abgeschickt wird sollen anschließend Fehlertexte unterhalb der entsprechenden Felder angezeigt werden

Komplette Lösung in Branch `zusatz`


>**Tipp**
>
>Hier ein paar Nachschlagehilfen:
>
>* [EmailValidator]
>* [TemplateDrivenForms]


[vscode]: https://code.visualstudio.com/
[emailvalidator]: https://angular.io/api/forms/EmailValidator
[templatedrivenforms]: https://angular.io/guide/forms
