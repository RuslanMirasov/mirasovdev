import { useTranslation } from 'react-i18next';
import { TitleBox, Title, Text } from '../../components';
import css from './RequestForm.module.scss';

const RequestForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={css.RequestForm}>
      <TitleBox>
        <Title tag="h3" size="h4">
          {t('contacts_title')}
        </Title>
        <Text>{t('contacts_subtitle')}</Text>
      </TitleBox>
    </div>
  );
};

export default RequestForm;
