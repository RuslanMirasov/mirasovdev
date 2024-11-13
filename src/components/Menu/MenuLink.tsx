import { ReactNode, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import scrollToBlock from 'assets/utils/scrollToBlock';
import { closeMenu } from 'assets/utils/menuFunctions';

interface MenuLinkProps {
  to?: string;
  text: string;
  onClick?: () => void;
  scrollto?: string;
  children?: ReactNode;
}

const MenuLink: React.FC<MenuLinkProps> = ({ to, text, onClick, scrollto, children }) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
      return;
    }
    if (scrollto) {
      e.preventDefault();
      scrollToBlock(scrollto);
      closeMenu();
    }
  };

  return (
    <li>
      <Link to={to || '#'} onClick={handleClick}>
        {text}
      </Link>
      {children}
    </li>
  );
};

export default MenuLink;
