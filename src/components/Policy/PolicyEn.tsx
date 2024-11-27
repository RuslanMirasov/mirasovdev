import { Title, Text, List } from 'components';
import css from './PolicyEn.module.scss';

const PolicyEn: React.FC = () => {
  return (
    <div className={css.Policy}>
      <Title tag="h1" size="h3">
        Privacy Policy
      </Title>
      <Text>We take your privacy seriously and only collect the data necessary to process your requests and provide responses.</Text>
      <Title tag="h2" size="h5">
        What data do we collect?
      </Title>
      <Text>Through the form on our website, we may collect the following information:</Text>
      <List>
        <li>
          <b>Name</b> (optional)
        </li>
        <li>
          <b>Email</b> (required)
        </li>
        <li>
          <b>Figma design link</b> (optional)
        </li>
        <li>
          <b>Comment</b> (optional)
        </li>
        <li>
          <b>Confirmation of agreement to the privacy policy</b> (checkbox)
        </li>
      </List>

      <Title tag="h2" size="h5">
        How do we use your data?
      </Title>
      <Text>Your data is used solely for:</Text>
      <List>
        <li>Processing requests submitted through the form on our website.</li>
        <li>Responding to your inquiries via email.</li>
      </List>
      <Text>
        The data is not stored on any server and is not shared with third parties. It is automatically sent to our email via the Web3Forms service.
      </Text>

      <Title tag="h2" size="h5">
        Data retention
      </Title>
      <Text>
        We do not store your data. After processing your request and providing a response, the data remains only in our email correspondence.
      </Text>

      <Title tag="h2" size="h5">
        Use of Cookies
      </Title>
      <Text>We do not use cookies on our website.</Text>

      <Title tag="h2" size="h5">
        Use of localStorage
      </Title>
      <Text>We use localStorage only for:</Text>
      <List>
        <li>Saving your theme preference (dark or light).</li>
        <li>Saving your chosen interface language (English or German).</li>
      </List>
      <Text>These settings are stored in your browser and are not transmitted to any server.</Text>

      <Title tag="h2" size="h5">
        Your rights
      </Title>
      <Text>
        You have the right to request deletion of your data if it has been stored in email communication. To do so, please contact us at{' '}
        <b>info@mirasov.dev</b>.
      </Text>

      <Title tag="h2" size="h5">
        Third parties
      </Title>
      <Text>
        We use the Web3Forms service to send your requests to our email. The privacy policy of Web3Forms is available on their{' '}
        <a href="https://web3forms.com/privacy">official website</a>.
      </Text>

      <Title tag="h2" size="h5">
        Contact Us
      </Title>
      <Text>If you have any questions about this Privacy Policy, You can contact us:</Text>
      <List>
        <li>
          By email: <b>info@mirasov.dev</b>
        </li>
      </List>
    </div>
  );
};

export default PolicyEn;
