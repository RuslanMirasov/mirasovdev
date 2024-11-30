import { Container, Section, PolicyEn, PolicyDe } from 'components';
import { useTranslation } from 'react-i18next';

const PrivacyPolicy: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLanguage: string = ['en', 'de'].includes(i18n.language) ? i18n.language : 'en';

  return (
    <Section extraClass="section-policy">
      <Container>{currentLanguage === 'en' ? <PolicyEn /> : <PolicyDe />}</Container>
    </Section>
  );
};

export default PrivacyPolicy;
