import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <main className="bg-slate-100 w-full overflow-hidden relative">
      <Navbar />
      <section className="min-h-screen p-10 pt-32 text-black">
        <p className="text-black">
          Datenschutzerklärung <br />
          <br /> Diese Datenschutzerklärung klärt Sie über die Art, den Umfang
          und Zweck der Verarbeitung von personenbezogenen Daten (nachfolgend
          kurz „Daten“) im Rahmen der Erbringung unserer Leistungen sowie
          innerhalb unseres Onlineangebotes und der mit ihm verbundenen
          Webseiten, Funktionen und Inhalte sowie externen Onlinepräsenzen, wie
          z.B. unser Social Media Profile auf (nachfolgend gemeinsam bezeichnet
          als „Onlineangebot“). Im Hinblick auf die verwendeten
          Begrifflichkeiten, wie z.B. „Verarbeitung“ oder „Verantwortlicher“
          verweisen wir auf die Definitionen im Art. 4 der
          Datenschutzgrundverordnung (DSGVO).
        </p>
        <br />
        <h5 className="font-semibold mb-1">VERANTWORTLICHER</h5>
        <address>
          QUICK PARTS GmbH <br />
          Europaallee 33 <br />
          <br />
          67657 Kaisersla utern <br />
          +49 631 5600 3025 <br />
          <a href="info@quickpartsgmbh.com" className="underline mt-1 block">
            info@quickpartsgmbh.com
          </a>
          <a href="www.quickpartsgmbh.com" className="underline block">
            www.quickpartsgmbh.com
          </a>
        </address>
        <p className="mt-8">
          Geschäftsführer: Wahab Baouchi <br />
          Impressum <br />
          Ansprechpartner für Fragen zum Datenschutz: Wahab Baluchi
        </p>
        <br />
        <h5 className="font-semibold mb-1">ARTEN DER VERARBEITETEN DATEN:</h5>
        <ul>
          <li>
            – Bestandsdaten (z.B., Personen-Stammdaten, Namen oder Adressen).
          </li>
          <li>– Kontaktdaten (z.B., E-Mail, Telefonnummern).</li>
          <li>– Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).</li>
          <li>
            – Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten,
            Zugriffszeiten).
          </li>
          <li>
            – Meta-/Kommunikationsdaten (z.B., Geräte-Informationen,
            IP-Adressen).
          </li>
        </ul>
        <br />
        <h5 className="font-semibold mb-1">KATEGORIEN BETROFFENER PERSONEN</h5>
        <p className="mb-8">
          Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir
          die betroffenen Personen zusammenfassend auch als „Nutzer“).
        </p>
        <br />
        <h5 className="font-semibold mb-1">ZWECK DER VERARBEITUNG</h5>
        <p className="mb-8">
          – Zurverfügungstellung des Onlineangebotes, seiner Funktionen und
          Inhalte. <br />– Beantwortung von Kontaktanfragen und Kommunikation
          mit Nutzern. <br />
          – Sicherheitsmaßnahmen. <br />– Reichweitenmessung/Marketing
        </p>
        <br />
        <h5 className="font-semibold mb-1">VERWENDETE BEGRIFFSBEZEICHNUNGEN</h5>
        <p className="mb-8">
          „Personenbezogene Daten“ sind alle Informationen, die sich auf eine
          identifizierte oder identifizierbare natürliche Person (im Folgenden
          „betroffene Person“) beziehen; als identifizierbar wird eine
          natürliche Person angesehen, die direkt oder indirekt, insbesondere
          mittels Zuordnung zu einer Kennung wie einem Namen, zu einer
          Kennnummer, zu Standortdaten, zu einer Online-Kennung (z.B. Cookie)
          oder zu einem oder mehreren besonderen Merkmalen identifiziert werden
          kann, die Ausdruck der physischen, physiologischen, genetischen,
          psychischen, wirtschaftlichen, kulturellen oder sozialen Identität
          dieser natürlichen Person sind.
        </p>
        <p className="mb-8">
          „Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren
          ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit
          personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch
          jeden Umgang mit Daten.
        </p>
        <p className="mb-8">
          „Pseudonymisierung“ die Verarbeitung personenbezogener Daten in einer
          Weise, dass die personenbezogenen Daten ohne Hinzuziehung zusätzlicher
          Informationen nicht mehr einer spezifischen betroffenen Person
          zugeordnet werden können, sofern diese zusätzlichen Informationen
          gesondert aufbewahrt werden und technischen und organisatorischen
          Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen
          Daten nicht einer identifizierten oder identifizierbaren natürlichen
          Person zugewiesen werden.
        </p>
        <br />
        <p className="mb-8">
          „Profiling“ jede Art der automatisierten Verarbeitung
          personenbezogener Daten, die darin besteht, dass diese
          personenbezogenen Daten verwendet werden, um bestimmte persönliche
          Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten,
          insbesondere um Aspekte bezüglich Arbeitsleistung, wirtschaftliche
          Lage, Gesundheit, persönliche Vorlieben, Interessen, Zuverlässigkeit,
          Verhalten, Aufenthaltsort oder Ortswechsel dieser natürlichen Person
          zu analysieren oder vorherzusagen.
        </p>
        <br />
        <p className="mb-8">
          Als „Verantwortlicher“ wird die natürliche oder juristische Person,
          Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit
          anderen über die Zwecke und Mittel der Verarbeitung von
          personenbezogenen Daten entscheidet, bezeichnet. „Auftragsverarbeiter“
          eine natürliche oder juristische Person, Behörde, Einrichtung oder
          andere Stelle, die personenbezogene Daten im Auftrag des
          Verantwortlichen verarbeitet.
        </p>
        <br />
       
        <p className="mb-8">
        MASSGEBLICHE RECHTSGRUNDLAGE
Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen unserer Datenverarbeitungen mit. Für Nutzer aus dem Geltungsbereich der Datenschutzgrundverordnung (DSGVO), d.h. der EU und des EWG gilt, sofern die Rechtsgrundlage in der Datenschutzerklärung nicht genannt wird, Folgendes:
Die Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 lit. a und Art. 7 DSGVO;
Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO;
Die Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO;
Für den Fall, dass lebenswichtige Interessen der betroffenen Person oder einer anderen natürlichen Person eine Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 Abs. 1 lit. d DSGVO als Rechtsgrundlage.
Die Rechtsgrundlage für die erforderliche Verarbeitung zur Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt oder in Ausübung öffentlicher Gewalt erfolgt, die dem Verantwortlichen übertragen wurde ist Art. 6 Abs. 1 lit. e DSGVO.
Die Rechtsgrundlage für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist Art. 6 Abs. 1 lit. f DSGVO.
Die Verarbeitung von Daten zu anderen Zwecken als denen, zu denen sie erhoben wurden, bestimmt sich nach den Vorgaben des Art 6 Abs. 4 DSGVO.
Die Verarbeitung von besonderen Kategorien von Daten (entsprechend Art. 9 Abs. 1 DSGVO) bestimmt sich nach den Vorgaben des Art. 9 Abs. 2 DSGVO.


SICHERHEITSMASSNAHME
Wir treffen nach Maßgabe der gesetzlichen Vorgabenunter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und Freiheiten natürlicher Personen, geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
 
Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der Eingabe, Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von Betroffenenrechten, Löschung von Daten und Reaktion auf Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl von Hardware, Software sowie Verfahren, entsprechend dem Prinzip des Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche Voreinstellungen.


ZUSAMMENARBEIT MIT AUFTRAGSVERARBEITERN, GEMEINSAM VERANTWORTLICHEN UND DRITTEN
Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen Personen und Unternehmen (Auftragsverarbeitern, gemeinsam Verantwortlichen oder Dritten) offenbaren, sie an diese übermitteln oder ihnen sonst Zugriff auf die Daten gewähren, erfolgt dies nur auf Grundlage einer gesetzlichen Erlaubnis (z.B. wenn eine Übermittlung der Daten an Dritte, wie an Zahlungsdienstleister, zur Vertragserfüllung erforderlich ist), Nutzer eingewilligt haben, eine rechtliche Verpflichtung dies vorsieht oder auf Grundlage unserer berechtigten Interessen (z.B. beim Einsatz von Beauftragten, Webhostern, etc.).
 
Sofern wir Daten anderen Unternehmen unserer Unternehmensgruppe offenbaren, übermitteln oder ihnen sonst den Zugriff gewähren, erfolgt dies insbesondere zu administrativen Zwecken als berechtigtes Interesse und darüberhinausgehend auf einer den gesetzlichen Vorgaben entsprechenden Grundlage.


ÜBERMITTLUNGEN IN DRITTLÄNDER
Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR) oder der Schweizer Eidgenossenschaft) verarbeiten oder dies im Rahmen der Inanspruchnahme von Diensten Dritter oder Offenlegung, bzw. Übermittlung von Daten an andere Personen oder Unternehmen geschieht, erfolgt dies nur, wenn es zur Erfüllung unserer (vor)vertraglichen Pflichten, auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen Verpflichtung oder auf Grundlage unserer berechtigten Interessen geschieht. Vorbehaltlich ausdrücklicher Einwilligung oder vertraglich erforderlicher Übermittlung, verarbeiten oder lassen wir die Daten nur in Drittländern mit einem anerkannten Datenschutzniveau, zu denen die unter dem „Privacy-Shield“ zertifizierten US-Verarbeiter gehören oder auf Grundlage besonderer Garantien, wie z.B. vertraglicher Verpflichtung durch sogenannte Standardschutzklauseln der EU-Kommission, dem Vorliegen von Zertifizierungen oder verbindlichen internen Datenschutzvorschriften verarbeiten (Art. 44 bis 49 DSGVO, Informationsseite der EU-Kommission).


RECHTE DER BETROFFENEN PERSONEN
Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
 
Sie haben entsprechend. den gesetzlichen Vorgaben das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen.
 
Sie haben nach Maßgabe der gesetzlichen Vorgaben das Recht zu verlangen, dass betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine Einschränkung der Verarbeitung der Daten zu verlangen.
 
Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die Sie uns bereitgestellt haben nach Maßgabe der gesetzlichen Vorgaben zu erhalten und deren Übermittlung an andere Verantwortliche zu fordern.
 
Sie haben ferner nach Maßgabe der gesetzlichen Vorgaben das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen.


WIDERRUFSRECHT
Sie haben das Recht, erteilte Einwilligungen mit Wirkung für die Zukunft zu widerrufen.


WIDERSPRUCHSRECHT
Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach Maßgabe der gesetzlichen Vorgaben jederzeit widersprechen. Der Widerspruch kann insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung erfolgen.


COOKIES UND WIDERSPRUCHSRECHT BEI DIREKTWERBUNG
Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern der Nutzer gespeichert werden. Innerhalb der Cookies können unterschiedliche Angaben gespeichert werden. Ein Cookie dient primär dazu, die Angaben zu einem Nutzer (bzw. dem Gerät auf dem das Cookie gespeichert ist) während oder auch nach seinem Besuch innerhalb eines Onlineangebotes zu speichern. Als temporäre Cookies, bzw. „Session-Cookies“ oder „transiente Cookies“, werden Cookies bezeichnet, die gelöscht werden, nachdem ein Nutzer ein Onlineangebot verlässt und seinen Browser schließt. In einem solchen Cookie kann z.B. der Inhalt eines Warenkorbs in einem Onlineshop oder ein Login-Status gespeichert werden. Als „permanent“ oder „persistent“ werden Cookies bezeichnet, die auch nach dem Schließen des Browsers gespeichert bleiben. So kann z.B. der Login-Status gespeichert werden, wenn die Nutzer diese nach mehreren Tagen aufsuchen. Ebenso können in einem solchen Cookie die Interessen der Nutzer gespeichert werden, die für Reichweitenmessung oder Marketingzwecke verwendet werden. Als „Third-Party-Cookie“ werden Cookies bezeichnet, die von anderen Anbietern als dem Verantwortlichen, der das Onlineangebot betreibt, angeboten werden (andernfalls, wenn es nur dessen Cookies sind spricht man von „First-Party Cookies“).
 
Wir können temporäre und permanente Cookies einsetzen und klären hierüber im Rahmen unserer Datenschutzerklärung auf.
 
Sofern wir die Nutzer um eine Einwilligung in den Einsatz von Cookies bitten (z.B. im Rahmen einer Cookie-Einwilligung), ist die Rechtsgrundlage dieser Verarbeitung Art. 6 Abs. 1 lit. a. DSGVO. Ansonsten werden die personenbezogenen Cookies der Nutzer entsprechend den nachfolgenden Erläuterungen im Rahmen dieser Datenschutzerklärung auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) oder sofern der Einsatz von Cookies zur Erbringung unserer vertragsbezogenen Leistungen erforderlich ist, gem. Art. 6 Abs. 1 lit. b. DSGVO, bzw. sofern der Einsatz von Cookies für die Wahrnehmung einer Aufgabe, die im öffentlichen Interesse liegt erforderlich ist oder in Ausübung öffentlicher Gewalt erfolgt, gem. Art. 6 Abs. 1 lit. e. DSGVO, verarbeitet.
 
Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner gespeichert werden, werden sie gebeten die entsprechende Option in den Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies können in den Systemeinstellungen des Browsers gelöscht werden. Der Ausschluss von Cookies kann zu Funktionseinschränkungen dieses Onlineangebotes führen.
 
Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der Dienste, vor allem im Fall des Trackings, über die US-amerikanische Seite http://www.aboutads.info/choices/ oder die EU-Seite http://www.youronlinechoices.com/ erklärt werden. Des Weiteren kann die Speicherung von Cookies mittels deren Abschaltung in den Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt werden können.


LÖSCHUNG VON DATEN
Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht oder in ihrer Verarbeitung eingeschränkt. Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die bei uns gespeicherten Daten gelöscht, sobald sie für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
 
Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung eingeschränkt. D.h. die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden müssen.


ÄNDERUNGEN UND AKTUALISIERUNGEN DER DATENSCHUTZERKLÄRUNG
Wir bitten Sie sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren. Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen eine Mitwirkungshandlung Ihrerseits (z.B. Einwilligung) oder eine sonstige individuelle Benachrichtigung erforderlich wird.


GESCHÄFTSBEZOGENE VERARBEITUNG
Zusätzlich verarbeiten wir
– Vertragsdaten (z.B., Vertragsgegenstand, Laufzeit, Kundenkategorie).
– Zahlungsdaten (z.B., Bankverbindung, Zahlungshistorie)
von unseren Kunden, Interessenten und Geschäftspartner zwecks Erbringung vertraglicher Leistungen, Service und Kundenpflege, Marketing, Werbung und Marktforschung.


BESTELLABWICKLUNG IM ONLINESHOP UND KUNDENKONTO
Wir verarbeiten die Daten unserer Kunden im Rahmen der Bestellvorgänge in unserem Onlineshop, um ihnen die Auswahl und die Bestellung der gewählten Produkte und Leistungen, sowie deren Bezahlung und Zustellung, bzw. Ausführung zu ermöglichen.
 
Zu den verarbeiteten Daten gehören Bestandsdaten, Kommunikationsdaten, Vertragsdaten, Zahlungsdaten und zu den von der Verarbeitung betroffenen Personen gehören unsere Kunden, Interessenten und sonstige Geschäftspartner. Die Verarbeitung erfolgt zum Zweck der Erbringung von Vertragsleistungen im Rahmen des Betriebs eines Onlineshops, Abrechnung, Auslieferung und der Kundenservices. Hierbei setzen wir Session Cookies für die Speicherung des Warenkorb-Inhalts und permanente Cookies für die Speicherung des Login-Status ein.
 
Die Verarbeitung erfolgt zur Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen (z.B. Durchführung von Bestellvorgängen) und soweit sie gesetzlich vorgeschrieben ist (z.B., gesetzlich erforderliche Archivierung von Geschäftsvorgängen zu Handels und Steuerzwecken). Dabei sind die als erforderlich gekennzeichneten Angaben zur Begründung und Erfüllung des Vertrages erforderlich. Die Daten offenbaren wir gegenüber Dritten nur im Rahmen der Auslieferung, Zahlung oder im Rahmen der gesetzlichen Erlaubnisse und Pflichten, als auch wenn dies auf Grundlage unserer berechtigten Interessen erfolgt, worüber wir Sie im Rahmen dieser Datenschutzerklärung informieren (z.B., gegenüber Rechts- und Steuerberatern, Finanzinstituten, Frachtunternehmen sowie Behörden).
 
Nutzer können optional ein Nutzerkonto anlegen, indem sie insbesondere ihre Bestellungen einsehen können. Im Rahmen der Registrierung, werden die erforderlichen Pflichtangaben den Nutzern mitgeteilt. Die Nutzerkonten sind nicht öffentlich und können von Suchmaschinen nicht indexiert werden. Wenn Nutzer ihr Nutzerkonto gekündigt haben, werden deren Daten im Hinblick auf das Nutzerkonto gelöscht, vorbehaltlich deren Aufbewahrung ist aus handels- oder steuerrechtlichen Gründen notwendig. Angaben im Kundenkonto verbleiben bis zu dessen Löschung mit anschließender Archivierung im Fall einer rechtlichen Verpflichtung oder unser berechtigten Interessen (z.B., im Fall von Rechtsstreitigkeiten). Es obliegt den Nutzern, ihre Daten bei erfolgter Kündigung vor dem Vertragsende zu sichern.


Im Rahmen der Registrierung und erneuter Anmeldungen sowie Inanspruchnahme unserer Onlinedienste, speichern wir die IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung. Die Speicherung erfolgt auf Grundlage unserer berechtigten Interessen, als auch der Nutzer an Schutz vor Missbrauch und sonstiger unbefugter Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich nicht, außer sie ist zur Verfolgung unserer gesetzlichen Ansprüche als berechtigtes Interesse erforderlich oder es besteht hierzu eine gesetzliche Verpflichtung.

Die Löschung erfolgt nach Ablauf gesetzlicher Gewährleistungs- und sonstiger vertraglicher Rechte oder Pflichten (z.B., Zahlungsansprüche oder Leistungspflichten aus Verträgen mir Kunden), wobei die Erforderlichkeit der Aufbewahrung der Daten alle drei Jahre überprüft wird; im Fall der Aufbewahrung aufgrund gesetzlicher Archivierungspflichten, erfolgt die Löschung insoweit nach deren Ablauf.

ADMINISTRATION, FINANZBUCHHALTUNG, BÜROORGANISATION, KONTAKTVERWALTUNG
Wir verarbeiten Daten im Rahmen von Verwaltungsaufgaben sowie Organisation unseres Betriebs, Finanzbuchhaltung und Befolgung der gesetzlichen Pflichten, wie z.B. der Archivierung. Hierbei verarbeiten wir dieselben Daten, die wir im Rahmen der Erbringung unserer vertraglichen Leistungen verarbeiten. Die Verarbeitungsgrundlagen sind Art. 6 Abs. 1 lit. c. DSGVO, Art. 6 Abs. 1 lit. f. DSGVO. Von der Verarbeitung sind Kunden, Interessenten, Geschäftspartner und Websitebesucher betroffen. Der Zweck und unser Interesse an der Verarbeitung liegt in der Administration, Finanzbuchhaltung, Büroorganisation, Archivierung von Daten, also Aufgaben die der Aufrechterhaltung unserer Geschäftstätigkeiten, Wahrnehmung unserer Aufgaben und Erbringung unserer Leistungen dienen. Die Löschung der Daten im Hinblick auf vertragliche Leistungen und die vertragliche Kommunikation entspricht den, bei diesen Verarbeitungstätigkeiten genannten Angaben.
Wir offenbaren oder übermitteln hierbei Daten an die Finanzverwaltung, Berater, wie z.B., Steuerberater oder Wirtschaftsprüfer sowie weitere Gebührenstellen und Zahlungsdienstleister.

 Ferner speichern wir auf Grundlage unserer betriebswirtschaftlichen Interessen Angaben zu Lieferanten, Veranstaltern und sonstigen Geschäftspartnern, z.B. zwecks späterer Kontaktaufnahme. Diese mehrheitlich unternehmensbezogenen Daten, speichern wir grundsätzlich dauerhaft.



KONTAKTAUFNAHME
Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via sozialer Medien) werden die Angaben des Nutzers zur Bearbeitung der Kontaktanfrage und deren Abwicklung gem. Art. 6 Abs. 1 lit. b. (im Rahmen vertraglicher-/vorvertraglicher Beziehungen), Art. 6 Abs. 1 lit. f. (andere Anfragen) DSGVO verarbeitet.. Die Angaben der Nutzer können in einem Customer-Relationship-Management System („CRM System“) oder vergleichbarer Anfragenorganisation gespeichert werden.

 Wir löschen die Anfragen, sofern diese nicht mehr erforderlich sind. Wir überprüfen die Erforderlichkeit alle zwei Jahre; Ferner gelten die gesetzlichen Archivierungspflichten.


HOSTING UND E-MAIL-VERSAND
Die von uns in Anspruch genommenen Hosting-Leistungen dienen der Zurverfügungstellung der folgenden Leistungen: Infrastruktur- und Plattformdienstleistungen, Rechenkapazität, Speicherplatz und Datenbankdienste, E-Mail-Versand, Sicherheitsleistungen sowie technische Wartungsleistungen, die wir zum Zwecke des Betriebs dieses Onlineangebotes einsetzen.
 
Hierbei verarbeiten wir, bzw. unser Hostinganbieter Bestandsdaten, Kontaktdaten, Inhaltsdaten, Vertragsdaten, Nutzungsdaten, Meta- und Kommunikationsdaten von Kunden, Interessenten und Besuchern dieses Onlineangebotes auf Grundlage unserer berechtigten Interessen an einer effizienten und sicheren Zurverfügungstellung dieses Onlineangebotes gem. Art. 6 Abs. 1 lit. f DSGVO i.V.m. Art. 28 DSGVO (Abschluss Auftragsverarbeitungsvertrag).


ERHEBUNG VON ZUGRIFFSDATEN UND LOGFILES
Wir, bzw. unser Hostinganbieter, erhebt auf Grundlage unserer berechtigten Interessen im Sinne des Art. 6 Abs. 1 lit. f. DSGVO Daten über jeden Zugriff auf den Server, auf dem sich dieser Dienst befindet (sogenannte Serverlogfiles). Zu den Zugriffsdaten gehören Name der abgerufenen Webseite, Datei, Datum und Uhrzeit des Abrufs, übertragene Datenmenge, Meldung über erfolgreichen Abruf, Browsertyp nebst Version, das Betriebssystem des Nutzers, Referrer URL (die zuvor besuchte Seite), IP-Adresse und der anfragende Provider.
Logfile-Informationen werden aus Sicherheitsgründen (z.B. zur Aufklärung von Missbrauchs- oder Betrugshandlungen) für die Dauer von maximal 7 Tagen gespeichert und danach gelöscht. Daten, deren weitere Aufbewahrung zu Beweiszwecken erforderlich ist, sind bis zur endgültigen Klärung des jeweiligen Vorfalls von der Löschung ausgenommen.


GOOGLE ANALYTICS
Wir setzen Google Analytics, einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“) ein. Google verwendet Cookies. Die durch das Cookie erzeugten Informationen über Benutzung des Onlineangebotes durch die Nutzer werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.


Google wird diese Informationen in unserem Auftrag benutzen, um die Nutzung unseres Onlineangebotes durch die Nutzer auszuwerten, um Reports über die Aktivitäten innerhalb dieses Onlineangebotes zusammenzustellen und um weitere, mit der Nutzung dieses Onlineangebotes und der Internetnutzung verbundene Dienstleistungen, uns gegenüber zu erbringen. Dabei können aus den verarbeiteten Daten pseudonyme Nutzungsprofile der Nutzer erstellt werden.

Wir setzen Google Analytics nur mit aktivierter IP-Anonymisierung ein. Das bedeutet, die IP-Adresse der Nutzer wird von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt.

Die von dem Browser des Nutzers übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Die Nutzer können die Speicherung der Cookies durch eine entsprechende Einstellung ihrer Browser-Software verhindern; die Nutzer können darüber hinaus die Erfassung der durch das Cookie erzeugten und auf ihre Nutzung des Onlineangebotes bezogenen Daten an Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem sie das unter folgendem Link verfügbare Browser-Plugin herunterladen und installieren: http://tools.google.com/dlpage/gaoptout?hl=de.
Sofern wir die Nutzer um eine Einwilligung bitten (z.B. im Rahmen einer Cookie-Einwilligung), ist die Rechtsgrundlage dieser Verarbeitung Art. 6 Abs. 1 lit. a. DSGVO. Ansonsten werden die personenbezogenen Daten der Nutzer auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) verarbeitet.

 Soweit Daten in den USA verarbeitet werden, weisen wir daraufhin, dass Google unter dem Privacy-Shield-Abkommen zertifiziert ist und hierdurch zusichert, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).

 Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsmöglichkeiten, erfahren Sie in der Datenschutzerklärung von Google (https://policies.google.com/privacy) sowie in den Einstellungen für die Darstellung von Werbeeinblendungen durch Google (https://adssettings.google.com/authenticated).

Die personenbezogenen Daten der Nutzer werden nach 14 Monaten gelöscht oder anonymisiert.


GOOGLE ADSENSE MIT NICHT-PERSONALISIERTEN ANZEIGEN
Wir nutzen die Dienste der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“).

 Wir Nutzen den Dienst AdSense, mit dessen Hilfe Anzeigen in unsere Webseite eingeblendet und wir für deren Einblendung oder sonstige Nutzung eine Entlohnung erhalten. Zu diesen Zwecken werden Nutzungsdaten, wie z.B. der Klick auf eine Anzeige und die IP-Adresse der Nutzer verarbeitet, wobei die IP-Adresse um die letzten beiden Stellen gekürzt wird. Daher erfolgt die Verarbeitung der Daten der Nutzer pseudonymisiert.

 Wir setzen Adsense mit nicht-personalisierten Anzeigen ein. Dabei werden die Anzeigen nicht auf Grundlage von Nutzerprofilen angezeigt. Nicht personalisierte Anzeigen basieren nicht auf früherem Nutzerverhalten. Beim Targeting werden Kontextinformationen herangezogen, unter anderem ein grobes (z. B. auf Ortsebene) geografisches Targeting basierend auf dem aktuellen Standort, dem Inhalt auf der aktuellen Website oder der App sowie aktuelle Suchbegriffe. Google unterbindet jedwedes personalisierte Targeting, also auch demografisches Targeting und Targeting auf Basis von Nutzerlisten.

 Sofern wir die Nutzer um eine Einwilligung bitten (z.B. im Rahmen einer Cookie-Einwilligung), ist die Rechtsgrundlage dieser Verarbeitung Art. 6 Abs. 1 lit. a. DSGVO. Ansonsten werden die personenbezogenen Daten der Nutzer auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) verarbeitet.

Soweit Daten in den USA verarbeitet werden, weisen wir daraufhin, dass Google unter dem Privacy-Shield-Abkommen zertifiziert ist und hierdurch zusichert, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).

 Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsmöglichkeiten, erfahren Sie in der Datenschutzerklärung von Google (https://policies.google.com/technologies/ads) sowie in den Einstellungen für die Darstellung von Werbeeinblendungen durch Google (https://adssettings.google.com/authenticated).

GOOGLE ADWORDS UND CONVERSION-MESSUNG
Wir nutzen die Dienste der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, („Google“).

Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).

Wir nutzen das Onlinemarketingverfahren Google „AdWords“, um Anzeigen im Google-Werbe-Netzwerk zu platzieren (z.B., in Suchergebnissen, in Videos, auf Webseiten, etc.), damit sie Nutzern angezeigt werden, die ein mutmaßliches Interesse an den Anzeigen haben. Dies erlaubt uns Anzeigen für und innerhalb unseres Onlineangebotes gezielter anzuzeigen, um Nutzern nur Anzeigen zu präsentieren, die potentiell deren Interessen entsprechen. Falls einem Nutzer z.B. Anzeigen für Produkte angezeigt werden, für die er sich auf anderen Onlineangeboten interessiert hat, spricht man hierbei vom „Remarketing“. Zu diesen Zwecken wird bei Aufruf unserer und anderer Webseiten, auf denen das Google-Werbe-Netzwerk aktiv ist, unmittelbar durch Google ein Code von Google ausgeführt und es werden sog. (Re)marketing-Tags (unsichtbare Grafiken oder Code, auch als „Web Beacons“ bezeichnet) in die Webseite eingebunden. Mit deren Hilfe wird auf dem Gerät der Nutzer ein individuelles Cookie, d.h. eine kleine Datei abgespeichert (statt Cookies können auch vergleichbare Technologien verwendet werden). In dieser Datei wird vermerkt, welche Webseiten der Nutzer aufgesucht, für welche Inhalte er sich interessiert und welche Angebote der Nutzer geklickt hat, ferner technische Informationen zum Browser und Betriebssystem, verweisende Webseiten, Besuchszeit sowie weitere Angaben zur Nutzung des Onlineangebotes.

Ferner erhalten wir ein individuelles „Conversion-Cookie“. Die mit Hilfe des Cookies eingeholten Informationen dienen Google dazu, Conversion-Statistiken für uns zu erstellen. Wir erfahren jedoch nur die anonyme Gesamtanzahl der Nutzer, die auf unsere Anzeige geklickt haben und zu einer mit einem Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden. Wir erhalten jedoch keine Informationen, mit denen sich Nutzer persönlich identifizieren lassen. 

Die Daten der Nutzer werden im Rahmen des Google-Werbe-Netzwerks pseudonym verarbeitet. D.h. Google speichert und verarbeitet z.B. nicht den Namen oder E-Mailadresse der Nutzer, sondern verarbeitet die relevanten Daten cookie-bezogen innerhalb pseudonymer Nutzerprofile. D.h. aus der Sicht von Google werden die Anzeigen nicht für eine konkret identifizierte Person verwaltet und angezeigt, sondern für den Cookie-Inhaber, unabhängig davon wer dieser Cookie-Inhaber ist. Dies gilt nicht, wenn ein Nutzer Google ausdrücklich erlaubt hat, die Daten ohne diese Pseudonymisierung zu verarbeiten. Die über die Nutzer gesammelten Informationen werden an Google übermittelt und auf Googles Servern in den USA gespeichert.

 Sofern wir die Nutzer um eine Einwilligung bitten (z.B. im Rahmen einer Cookie-Einwilligung), ist die Rechtsgrundlage dieser Verarbeitung Art. 6 Abs. 1 lit. a. DSGVO. Ansonsten werden die personenbezogenen Daten der Nutzer auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) verarbeitet.

 Soweit Daten in den USA verarbeitet werden, weisen wir daraufhin, dass Google unter dem Privacy-Shield-Abkommen zertifiziert ist und hierdurch zusichert, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).

 Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsmöglichkeiten, erfahren Sie in der Datenschutzerklärung von Google (https://policies.google.com/technologies/ads) sowie in den Einstellungen für die Darstellung von Werbeeinblendungen durch Google (https://adssettings.google.com/authenticated).

GOOGLE DOUBLECLICK
Wir nutzen die Dienste der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“).
Wir nutzen das Onlinemarketingverfahren Google „Doubleclick“, um Anzeigen im Google-Werbe-Netzwerk zu platzieren (z.B., in Suchergebnissen, in Videos, auf Webseiten, etc.). Double Click zeichnet sich dadurch aus, dass Anzeigen in Echtzeit anhand mutmaßlicher Interessen der Nutzer angezeigt werden. Dies erlaubt uns Anzeigen für und innerhalb unseres Onlineangebotes gezielter anzuzeigen, um Nutzern nur Anzeigen zu präsentieren, die potentiell deren Interessen entsprechen. Falls einem Nutzer z.B. Anzeigen für Produkte angezeigt werden, für die er sich auf anderen Onlineangeboten interessiert hat, spricht man hierbei vom „Remarketing“. Zu diesen Zwecken wird bei Aufruf unserer und anderer Webseiten, auf denen das Google-Werbe-Netzwerk aktiv ist, unmittelbar durch Google ein Code von Google ausgeführt und es werden sog. (Re)marketing-Tags (unsichtbare Grafiken oder Code, auch als „Web Beacons“ bezeichnet) in die Webseite eingebunden. Mit deren Hilfe wird auf dem Gerät der Nutzer ein individuelles Cookie, d.h. eine kleine Datei abgespeichert (statt Cookies können auch vergleichbare Technologien verwendet werden). In dieser Datei wird vermerkt, welche Webseiten der Nutzer aufgesucht, für welche Inhalte er sich interessiert und welche Angebote der Nutzer geklickt hat, ferner technische Informationen zum Browser und Betriebssystem, verweisende Webseiten, Besuchszeit sowie weitere Angaben zur Nutzung des Onlineangebotes.

Es wird ebenfalls die IP-Adresse der Nutzer erfasst, wobei diese innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum gekürzt und nur in Ausnahmefällen ganz an einen Server von Google in den USA übertragen und dort gekürzt wird. Die vorstehend genannten Informationen können seitens Google auch mit solchen Informationen aus anderen Quellen verbunden werden. Wenn der Nutzer anschließend andere Webseiten besucht, können ihm entsprechend seiner mutmaßlichen Interessen auf Grundlage seines Nutzerprofiles auf ihn abgestimmten Anzeigen angezeigt werden.

Die Daten der Nutzer werden im Rahmen des Google-Werbe-Netzwerks pseudonym verarbeitet. D.h. Google speichert und verarbeitet z.B. nicht den Namen oder E-Mailadresse der Nutzer, sondern verarbeitet die relevanten Daten cookie-bezogen innerhalb pseudonymer Nutzerprofile. D.h. aus der Sicht von Google werden die Anzeigen nicht für eine konkret identifizierte Person verwaltet und angezeigt, sondern für den Cookie-Inhaber, unabhängig davon wer dieser Cookie-Inhaber ist. Dies gilt nicht, wenn ein Nutzer Google ausdrücklich erlaubt hat, die Daten ohne diese Pseudonymisierung zu verarbeiten. Die von Google-Marketing-Services über die Nutzer gesammelten Informationen werden an Google übermittelt und auf Googles Servern in den USA gespeichert.

Sofern wir die Nutzer um eine Einwilligung bitten (z.B. im Rahmen einer Cookie-Einwilligung), ist die Rechtsgrundlage dieser Verarbeitung Art. 6 Abs. 1 lit. a. DSGVO. Ansonsten werden die personenbezogenen Daten der Nutzer auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) verarbeitet.

Soweit Daten in den USA verarbeitet werden, weisen wir daraufhin, dass Google unter dem Privacy-Shield-Abkommen zertifiziert ist und hierdurch zusichert, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active).

 Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsmöglichkeiten, erfahren Sie in der Datenschutzerklärung von Google (https://policies.google.com/technologies/ads) sowie in den Einstellungen für die Darstellung von Werbeeinblendungen durch Google (https://adssettings.google.com/authenticated).

ONLINEPRÄSENZEN IN SOZIALEN MEDIEN
Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und Plattformen, um mit den dort aktiven Kunden, Interessenten und Nutzern kommunizieren und sie dort über unsere Leistungen informieren zu können.
Wir weisen darauf hin, dass dabei Daten der Nutzer außerhalb des Raumes der Europäischen Union verarbeitet werden können. Hierdurch können sich für die Nutzer Risiken ergeben, weil so z.B. die Durchsetzung der Rechte der Nutzer erschwert werden könnte. Im Hinblick auf US-Anbieter die unter dem Privacy-Shield zertifiziert sind, weisen wir darauf hin, dass sie sich damit verpflichten, die Datenschutzstandards der EU einzuhalten.

Ferner werden die Daten der Nutzer im Regelfall für Marktforschungs- und Werbezwecke verarbeitet. So können z.B. aus dem Nutzungsverhalten und sich daraus ergebenden Interessen der Nutzer Nutzungsprofile erstellt werden. Die Nutzungsprofile können wiederum verwendet werden, um z.B. Werbeanzeigen innerhalb und außerhalb der Plattformen zu schalten, die mutmaßlich den Interessen der Nutzer entsprechen. Zu diesen Zwecken werden im Regelfall Cookies auf den Rechnern der Nutzer gespeichert, in denen das Nutzungsverhalten und die Interessen der Nutzer gespeichert werden. Ferner können in den Nutzungsprofilen auch Daten unabhängig der von den Nutzern verwendeten Geräte gespeichert werden (insbesondere wenn die Nutzer Mitglieder der jeweiligen Plattformen sind und bei diesen eingeloggt sind).

Die Verarbeitung der personenbezogenen Daten der Nutzer erfolgt auf Grundlage unserer berechtigten Interessen an einer effektiven Information der Nutzer und Kommunikation mit den Nutzern gem. Art. 6 Abs. 1 lit. f. DSGVO. Falls die Nutzer von den jeweiligen Anbietern der Plattformen um eine Einwilligung in die vorbeschriebene Datenverarbeitung gebeten werden, ist die Rechtsgrundlage der Verarbeitung Art. 6 Abs. 1 lit. a., Art. 7 DSGVO.

Für eine detaillierte Darstellung der jeweiligen Verarbeitungen und der Widerspruchsmöglichkeiten (Opt-Out), verweisen wir auf die nachfolgend verlinkten Angaben der Anbieter.

Auch im Fall von Auskunftsanfragen und der Geltendmachung von Nutzerrechten, weisen wir darauf hin, dass diese am effektivsten bei den Anbietern geltend gemacht werden können. Nur die Anbieter haben jeweils Zugriff auf die Daten der Nutzer und können direkt entsprechende Maßnahmen ergreifen und Auskünfte geben. Sollten Sie dennoch Hilfe benötigen, dann können Sie sich an uns wenden.

 – Facebook, -Seiten, -Gruppen, (Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland) auf Grundlage einer Vereinbarung über gemeinsame Verarbeitung personenbezogener Daten – Datenschutzerklärung: https://www.facebook.com/about/privacy/, speziell für Seiten: https://www.facebook.com/legal/terms/information_about_page_insights_data , Opt-Out: https://www.facebook.com/settings?tab=ads und http://www.youronlinechoices.com, Privacy Shield: https://www.privacyshield.gov/participant?id=a2zt0000000GnywAAC&status=Active.

 – Google/ YouTube (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland) – Datenschutzerklärung:  https://policies.google.com/privacy, Opt-Out: https://adssettings.google.com/authenticated, Privacy Shield: https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active.

– Instagram (Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA) – Datenschutzerklärung/ Opt-Out: http://instagram.com/about/legal/privacy/.

– Twitter (Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA) – Datenschutzerklärung: https://twitter.com/de/privacy, Opt-Out: https://twitter.com/personalization, Privacy Shield: https://www.privacyshield.gov/participant?id=a2zt0000000TORzAAO&status=Active.

 – Pinterest (Pinterest Inc., 635 High Street, Palo Alto, CA, 94301, USA) – Datenschutzerklärung/ Opt-Out: https://about.pinterest.com/de/privacy-policy.

 – LinkedIn (LinkedIn Ireland Unlimited Company Wilton Place, Dublin 2, Irland) – Datenschutzerklärung https://www.linkedin.com/legal/privacy-policy , Opt-Out: https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out, Privacy Shield: https://www.privacyshield.gov/participant?id=a2zt0000000L0UZAA0&status=Active.

 – Xing (XING AG, Dammtorstraße 29-32, 20354 Hamburg, Deutschland) – Datenschutzerklärung/ Opt-Out: https://privacy.xing.com/de/datenschutzerklaerung.

 – Wakalet (Wakelet Limited, 76 Quay Street, Manchester, M3 4PR, United Kingdom) – Datenschutzerklärung/ Opt-Out: https://wakelet.com/privacy.html.


 – Soundcloud (SoundCloud Limited, Rheinsberger Str. 76/77, 10115 Berlin, Deutschland) – Datenschutzerklärung/ Opt-Out: https://soundcloud.com/pages/privacy.

EINBINDUNG VON DIENSTEN UND INHALTEN DRITTER
Wir setzen innerhalb unseres Onlineangebotes auf Grundlage unserer berechtigten Interessen (d.h. Interesse an der Analyse, Optimierung und wirtschaftlichem Betrieb unseres Onlineangebotes im Sinne des Art. 6 Abs. 1 lit. f. DSGVO) Inhalts- oder Serviceangebote von Drittanbietern ein, um deren Inhalte und Services, wie z.B. Videos oder Schriftarten einzubinden (nachfolgend einheitlich bezeichnet als “Inhalte”).

 Dies setzt immer voraus, dass die Drittanbieter dieser Inhalte, die IP-Adresse der Nutzer wahrnehmen, da sie ohne die IP-Adresse die Inhalte nicht an deren Browser senden könnten. Die IP-Adresse ist damit für die Darstellung dieser Inhalte erforderlich. Wir bemühen uns nur solche Inhalte zu verwenden, deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden. Drittanbieter können ferner so genannte Pixel-Tags (unsichtbare Grafiken, auch als „Web Beacons“ bezeichnet) für statistische oder Marketingzwecke verwenden. Durch die „Pixel-Tags“ können Informationen, wie der Besucherverkehr auf den Seiten dieser Website ausgewertet werden. Die pseudonymen Informationen können ferner in Cookies auf dem Gerät der Nutzer gespeichert werden und unter anderem technische Informationen zum Browser und Betriebssystem, verweisende Webseiten, Besuchszeit sowie weitere Angaben zur Nutzung unseres Onlineangebotes enthalten, als auch mit solchen Informationen aus anderen Quellen verbunden werden.


VIMEO
Wir können die Videos der Plattform “Vimeo” des Anbieters Vimeo Inc., Attention: Legal Department, 555 West 18th Street New York, New York 10011, USA, einbinden. Datenschutzerklärung: https://vimeo.com/privacy. Wir weisen darauf hin, dass Vimeo Google Analytics einsetzen kann und verweisen hierzu auf die Datenschutzerklärung (https://policies.google.com/privacy) sowie Opt-Out-Möglichkeiten für Google-Analytics (http://tools.google.com/dlpage/gaoptout?hl=de) oder die Einstellungen von Google für die Datennutzung zu Marketingzwecken (https://adssettings.google.com/).


YOUTUBE
Wir binden die Videos der Plattform “YouTube” des Anbieters Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, ein. Datenschutzerklärung: https://www.google.com/policies/privacy/, Opt-Out: https://adssettings.google.com/authenticated.


GOOGLE FONTS
Wir binden die Schriftarten („Google Fonts“) des Anbieters Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, ein. Nach Angaben von Google werden die Daten der Nutzer allein zu Zwecken der Darstellung der Schriftarten im Browser der Nutzer verwendet. Die Einbindung erfolgt auf Grundlage unserer berechtigten Interessen an einer technisch sicheren, wartungsfreien und effizienten Nutzung von Schriftarten, deren einheitlicher Darstellung sowie Berücksichtigung möglicher lizenzrechtlicher Restriktionen für deren Einbindung. Datenschutzerklärung: https://www.google.com/policies/privacy/.


GOOGLE MAPS
Wir binden die Landkarten des Dienstes “Google Maps” des Anbieters Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland, ein. Zu den verarbeiteten Daten können insbesondere IP-Adressen und Standortdaten der Nutzer gehören, die jedoch nicht ohne deren Einwilligung (im Regelfall im Rahmen der Einstellungen ihrer Mobilgeräte vollzogen), erhoben werden. Die Daten können in den USA verarbeitet werden. Datenschutzerklärung: https://www.google.com/policies/privacy/, Opt-Out: https://adssettings.google.com/authenticated.


XING
Innerhalb unseres Onlineangebotes können Funktionen und Inhalte des Dienstes Xing, angeboten durch die XING AG, Dammtorstraße 29-32, 20354 Hamburg, Deutschland, eingebunden werden. Hierzu können z.B. Inhalte wie Bilder, Videos oder Texte und Schaltflächen gehören, mit denen Nutzer Inhalte dieses Onlineangebotes innerhalb von Xing teilen können. Sofern die Nutzer Mitglieder der Plattform Xing sind, kann Xing den Aufruf der o.g. Inhalte und Funktionen den dortigen Profilen der Nutzer zuordnen. Datenschutzerklärung von Xing: https://privacy.xing.com/de/datenschutzerklaerung. 


GOOGLE+
Innerhalb unseres Onlineangebotes können Funktionen und Inhalte der Plattform Google+, angeboten durch die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“), eingebunden werden. Hierzu können z.B. Inhalte wie Bilder, Videos oder Texte und Schaltflächen gehören, mit denen Nutzer Inhalte dieses Onlineangebotes innerhalb von Google teilen können. Sofern die Nutzer Mitglieder der Plattform Google+ sind, kann Google den Aufruf der o.g. Inhalte und Funktionen den dortigen Profilen der Nutzer zuordnen.

 Google ist unter dem Privacy-Shield-Abkommen zertifiziert und bietet hierdurch eine Garantie, das europäische Datenschutzrecht einzuhalten (https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active). Weitere Informationen zur Datennutzung durch Google, Einstellungs- und Widerspruchsmöglichkeiten, erfahren Sie in der Datenschutzerklärung von Google (https://policies.google.com/technologies/ads) sowie in den Einstellungen für die Darstellung von Werbeeinblendungen durch Google (https://adssettings.google.com/authenticated).
        </p>
        <br />
      </section>
      <ContactUs />
      <Footer />
    </main>
  );
};

export default page;
