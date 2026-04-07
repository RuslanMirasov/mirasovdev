import { Text, Title, List } from 'components';

const SummaryDe: React.FC = () => {
  return (
    <>
      <Text size="big">
        Frontend-Entwickler mit über 6 Jahren Erfahrung in der Entwicklung von Webanwendungen für Marketing und Digitalagenturen. Solide Kenntnisse in
        JavaScript ES6+, HTML und CSS/SCSS, ergänzt durch mehr als 2 Jahre praktische Erfahrung mit React, Next.js, TypeScript und Node.js als
        freiberuflicher Entwickler. Erfahren in der Entwicklung responsiver Benutzeroberflächen, der Integration von RESTful APIs und der Erstellung
        skalierbarer Webanwendungen. Derzeit beschäftigt mit der Integration von OpenAI-APIs zur Automatisierung von Geschäftslogik.
      </Text>
      <Text size="big">
        Derzeit suche ich ein Unternehmen für eine langfristige Vollzeit-Zusammenarbeit, in dem ich meine Erfahrung einbringen und mich beruflich
        weiterentwickeln kann.
      </Text>
      <Title tag="h5" size="h6">
        Meine wichtigsten Fähigkeiten und Erfahrungen umfassen:
      </Title>
      <List>
        <li>
          <strong>Erstellen von responsiven Webseiten mit JavaScript/JQuery, HTML und CSS/SCSS</strong>
          Entwicklung von Benutzeroberflächen basierend auf Designvorlagen aus Figma, Photoshop oder anderen Grafikeditoren unter Einhaltung moderner
          UX/UI-Standards.
        </li>
        <li>
          <strong>Organisieren und Stylen von Interface-Komponenten mit Styled Components oder Modul-Stilen</strong>
          Effiziente Verwaltung von Stilen und Erstellung wiederverwendbarer Komponenten zur Verbesserung der Code-Struktur und Wartbarkeit.
        </li>
        <li>
          <strong>Erstellen und Verwalten von MongoDB-Datenbanken mit Mongoose</strong>
          Gestaltung von Datenschemata, Verwaltung von Sammlungen und Implementierung von CRUD-Operationen.
        </li>
        <li>
          <strong>Erstellen von benutzerdefinierten APIs mit JavaScript unter Verwendung von Next.js oder Express</strong>
          Entwicklung leistungsstarker REST-APIs für nahtlose Datenintegration und verwaltung.
        </li>
        <li>
          <strong>Interaktion mit Drittanbieter-APIs</strong>
          Integration externer APIs über Web- und Software-Schnittstellen, um die Funktionalität von Anwendungen zu erweitern.
        </li>
        <li>
          <strong>Entwicklung komplexer Full-Stack-Webanwendungen mit React und Next.js</strong>
          Entwicklung sowohl von Client- als auch Server-seitigen Teilen von Anwendungen mit modernen Frameworks und Bibliotheken.
        </li>
        <li>
          <strong>Integration von Markup in das CMS WordPress</strong>
          Entwicklung und Anpassung von WordPress-Themes basierend auf Designvorlagen aus Figma unter Verwendung von ACF, WooCommerce, Contact Form 7
          und anderen Plugins, um funktionale und visuelle Anforderungen zu erfüllen.
        </li>
        <li>
          <strong>Testen von Code mit Jest, SuperTest und React Testing Library</strong>
          Schreiben von Unit, Integrations und Funktionstests zur Sicherstellung der Codequalität und Zuverlässigkeit.
        </li>
        <li>
          <strong>Verwaltung der Versionskontrolle mit wichtigen Tools wie Git und GitHub</strong>
          Effektive Nutzung von Git zur Konfliktlösung, Repository-Pflege und Anwendung von Best Practices in der Softwareentwicklung.
        </li>
        <li>
          <strong>Sicherer Umgang mit der Kommandozeile</strong>
          Verwaltung von Projekten, Ausführen von Befehlen und Automatisieren von Aufgaben.
        </li>
        <li>
          <strong>Zusammenarbeit in Agile-Teams mit Tools wie Slack, Zoom und Trello</strong>
          Effektive Kommunikation, Remote-Stand-ups und Projektmanagement in flexiblen, agilen Arbeitsumgebungen.
        </li>
      </List>
    </>
  );
};

export default SummaryDe;
