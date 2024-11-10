import { useState } from 'react';
import css from './Burger.module.scss';

const Burger: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(prev => !prev);
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
