import { Container, Logo } from '../../components';
import css from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={css.Footer}>
      <Container>
        <Logo />
      </Container>
    </footer>
  );
};

export default Footer;
