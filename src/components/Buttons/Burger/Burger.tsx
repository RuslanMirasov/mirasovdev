import { useState } from 'react';
import css from './Burger.module.scss';

interface BurgerProps {
  onBurgerChange?: (isOpen: boolean) => void;
}

const Burger: React.FC<BurgerProps> = ({ onBurgerChange }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(prev => !prev);
    if (onBurgerChange) {
      onBurgerChange(isOpen);
    }
  };

  return (
    <>
      <button type="button" className={`${css.Burger} ${isOpen ? css.isOpen : ''}`} onClick={handleClick}>
        <span>
          <p hidden>Button Burger</p>
        </span>
      </button>
    </>
  );
};

export default Burger;
