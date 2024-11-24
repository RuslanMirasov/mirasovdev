import { useTranslation } from 'react-i18next';
import { Container, Logo } from '../../components';
import css from './Footer.module.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={css.Footer}>
      <Container>
        <Logo />
        <a href="/privacy-policy" target="_blank" className={css.Link}>
          {t('privacy_policy')}
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
