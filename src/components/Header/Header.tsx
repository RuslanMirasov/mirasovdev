import { Container, Logo, Burger, Navigation, ThemeSwitcher, LanguageSelect } from 'components';
import css from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={css.Header} data-fix>
      <Container>
        <Logo />
        <LanguageSelect />
        <Navigation />
        <ThemeSwitcher />
        <Burger />
      </Container>
    </header>
  );
};

export default Header;
