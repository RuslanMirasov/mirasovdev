import { toggleMenu } from 'assets/utils/menuFunctions';
import css from './Burger.module.scss';

const Burger: React.FC = () => {
  return (
    <button type="button" className={css.Burger} onClick={toggleMenu} data-burger="close">
      <span>
        <p hidden>Button Burger</p>
      </span>
    </button>
  );
};

export default Burger;
