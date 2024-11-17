import { useEffect } from 'react';
import { Menu } from 'components';
import { toggleMenu, closeMenu } from 'assets/utils/menuFunctions';
import { modifyScrollbar } from 'assets/utils/popup';
import { debounce } from 'assets/utils/debounce';
import css from './Navigation.module.scss';
import { useModal } from 'hooks/useModal';

const Navigation: React.FC = () => {
  const { isOpen } = useModal();
  useEffect(() => {
    const handleResize = debounce(() => {
      if (isOpen) return;
      if (window.innerWidth >= 1024 && document.body.hasAttribute('data-freez')) {
        closeMenu();
        modifyScrollbar(0);
      }
    }, 200);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const target = e.target as HTMLElement;
    if (target.dataset.navigation) {
      toggleMenu();
    }
  };

  return (
    <nav className={`${css.Overlay}`} data-fix data-navigation onClick={handleOverlayClick}>
      <div className={`${css.Navigation}`}>
        <Menu />
      </div>
    </nav>
  );
};

export default Navigation;
