import { Container, Section, PolicyEn, PolicyDe } from 'components';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { i18n } = useTranslation();
  const translation = i18n.language.split('-')[0];

  return (
    <Section extraClass="section-policy">
      <Container>{translation === 'en' ? <PolicyEn /> : <PolicyDe />}</Container>
    </Section>
  );
};

export default PrivacyPolicy;
