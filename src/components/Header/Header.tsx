import { Container, Logo, Burger } from '../../components';
import css from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={css.Header}>
      <Container>
        <Logo />
        <Burger />
      </Container>
    </header>
  );
};

export default Header;
