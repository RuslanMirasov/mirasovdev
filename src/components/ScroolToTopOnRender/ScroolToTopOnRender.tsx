import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScroolToTopOnRender: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollWithDelay = () => {
      const hash = location.hash ? location.hash.substring(1) : '';

      if (hash) {
        const targetElement = document.querySelector(`.${hash}`);

        if (targetElement) {
          const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset - 50;
          window.scrollTo({
            top: elementTop,
            behavior: 'smooth',
          });
        }
      } else {
        document.documentElement.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const timeout = setTimeout(scrollWithDelay, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, [location]);

  return null;
};

export default ScroolToTopOnRender;
