import { useTranslation } from 'react-i18next';
import { Title, Image, ButtonsList, Button } from 'components';
import css from './AboutMeSidebar.module.scss';

const AboutMeSidebar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage: string = ['en', 'de'].includes(i18n.language) ? i18n.language : 'en';

  return (
    <>
      <div className={css.MyPhoto}>
        <Image src="/images/me.png" alt="Ruslan Mirasov" />
        <Title tag="h3" size="h3">
          Ruslan Mirasov
        </Title>
      </div>
      <ButtonsList>
        <Button to={`/pdf/${currentLanguage}/resume.pdf`} blank full>
          {t('Download_my_CV')}
        </Button>
      </ButtonsList>
    </>
  );
};

export default AboutMeSidebar;
