import { NavLink } from 'react-router-dom';
// import { usePopup } from 'contexts/PopupContext';
import { Icon } from 'components';
import css from './Logo.module.scss';

const Logo: React.FC = () => {
  //   const { menuClose } = usePopup();

  return (
    <NavLink to="/" className={css.Logo}>
      <Icon name="logo" size={50} color="var(--color)" fill="currentColor" />
      <span className={css.LogoText}>MirasovRuslan</span>
    </NavLink>
  );
};

export default Logo;
