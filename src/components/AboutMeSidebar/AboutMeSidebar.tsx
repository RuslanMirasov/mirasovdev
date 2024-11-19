import { useTranslation } from 'react-i18next';
import { Title, Image, ButtonsList, Button } from 'components';
import css from './AboutMeSidebar.module.scss';

const AboutMeSidebar: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className={css.MyPhoto}>
        <Image src="/images/me.png" alt="Ruslan Mirasov" />
        <Title tag="h3" size="h3">
          Ruslan Mirasov
        </Title>
      </div>
      <ButtonsList>
        <Button to={`/pdf/${i18n.language.split('-')[0]}/resume.pdf`} blank full>
          {t('Download_my_CV')}
        </Button>
      </ButtonsList>
    </>
  );
};

export default AboutMeSidebar;
