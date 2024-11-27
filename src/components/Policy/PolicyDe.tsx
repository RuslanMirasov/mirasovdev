import { Title, Text, List } from 'components';
import css from './PolicyEn.module.scss';

const PolicyDe: React.FC = () => {
  return (
    <div className={css.Policy}>
      <Title tag="h1" size="h3">
        Datenschutz
      </Title>
      <Text>
        Wir nehmen den Schutz Ihrer Daten sehr ernst und erheben nur die Informationen, die zur Bearbeitung Ihrer Anfragen und zur Bereitstellung von
        Antworten erforderlich sind.
      </Text>
      <Title tag="h2" size="h5">
        Welche Daten erfassen wir?
      </Title>
      <Text>Über das Formular auf unserer Website können wir die folgenden Informationen erhalten:</Text>
      <List>
        <li>
          <b>Name</b> (optional)
        </li>
        <li>
          <b>E-Mail</b> (erforderlich)
        </li>
        <li>
          <b>Figma-Design-Link</b> (optional)
        </li>
        <li>
          <b>Kommentar</b> (optional)
        </li>
        <li>
          <b>Bestätigung der Zustimmung zur Datenschutzrichtlinie</b> (Checkbox)
        </li>
      </List>

      <Title tag="h2" size="h5">
        Wie nutzen wir Ihre Daten?
      </Title>
      <Text>Ihre Daten werden ausschließlich für folgende Zwecke verwendet:</Text>
      <List>
        <li>Bearbeitung von Anfragen, die über das Formular auf unserer Website eingereicht werden.</li>
        <li>Beantwortung Ihrer Anfragen per E-Mail.</li>
      </List>
      <Text>
        Die Daten werden nicht auf einem Server gespeichert und nicht an Dritte weitergegeben. Sie werden automatisch über den Dienst Web3Forms an
        unsere E-Mail-Adresse gesendet.
      </Text>

      <Title tag="h2" size="h5">
        Speicherdauer der Daten
      </Title>
      <Text>
        Wir speichern Ihre Daten nicht. Nach der Bearbeitung Ihrer Anfrage und der Bereitstellung einer Antwort verbleiben die Daten nur in unserer
        E-Mail-Korrespondenz.
      </Text>

      <Title tag="h2" size="h5">
        Verwendung von Cookies
      </Title>
      <Text>Wir verwenden keine Cookies auf unserer Website.</Text>

      <Title tag="h2" size="h5">
        Verwendung von localStorage
      </Title>
      <Text>Wir verwenden localStorage nur für:</Text>
      <List>
        <li>Das Speichern Ihrer bevorzugten Design-Einstellung (dunkel oder hell).</li>
        <li>Das Speichern Ihrer gewählten Interface-Sprache (Englisch oder Deutsch).</li>
      </List>
      <Text>Diese Einstellungen werden nur in Ihrem Browser gespeichert und nicht an einen Server übertragen.</Text>

      <Title tag="h2" size="h5">
        Ihre Rechte
      </Title>
      <Text>
        Sie haben das Recht, die Löschung Ihrer Daten zu verlangen, falls sie in der E-Mail-Kommunikation gespeichert wurden. Wenden Sie sich dazu an
        uns unter <b>info@mirasov.dev</b>.
      </Text>

      <Title tag="h2" size="h5">
        Dritte
      </Title>
      <Text>
        Wir nutzen den Dienst Web3Forms, um Ihre Anfragen an unsere E-Mail-Adresse zu senden. Die Datenschutzrichtlinie von Web3Forms finden Sie auf
        deren <a href="https://web3forms.com/privacy">offizieller Website</a>.
      </Text>

      <Title tag="h2" size="h5">
        Kontaktinformation
      </Title>
      <Text>Wenn Sie Fragen zu dieser Datenschutzrichtlinie haben, kontaktieren Sie uns:</Text>
      <List>
        <li>
          per E-Mail: <b>info@mirasov.dev</b>
        </li>
      </List>
    </div>
  );
};

export default PolicyDe;
