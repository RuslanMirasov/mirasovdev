import { ReactNode, MouseEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick();
      return;
    }
    if (scrollto) {
      e.preventDefault();
      const isScrollPolible: boolean = scrollToBlock(scrollto);
      if (!isScrollPolible) {
        navigate(`/#${scrollto}`);
      }
      if (window.innerWidth < 1024) {
        closeMenu();
      }
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
