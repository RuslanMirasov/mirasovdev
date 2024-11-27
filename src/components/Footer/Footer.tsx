import { useTranslation } from 'react-i18next';
import { Container, Logo } from '../../components';
import { Link } from 'react-router-dom';
import css from './Footer.module.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className={css.Footer}>
      <Container>
        <Logo />
        <Link to="/privacy-policy" className={css.Link}>
          {t('privacy_policy')}
        </Link>
      </Container>
    </footer>
  );
};

export default Footer;
