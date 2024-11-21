import { useTranslation } from 'react-i18next';
import { SectionSticky, Title, ContactsList, RequestForm } from 'components';

const Contacts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionSticky
      extraClass="section-contacts"
      sidebar={
        <Title tag="h2" size="h2">
          {t('contacts')}
        </Title>
      }
    >
      <ContactsList />
      <RequestForm />
    </SectionSticky>
  );
};

export default Contacts;
