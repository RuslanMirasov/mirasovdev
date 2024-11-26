import { debounce } from 'assets/utils/debounce';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Icon } from 'components';
import css from './Accordeon.module.scss';

interface AccordeonProps {
  title: string;
  open?: boolean;
  children: React.ReactNode;
}

const Accordeon: React.FC<AccordeonProps> = ({ title, open = false, children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<string>('0px');
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const bodyHeightModify = useCallback(() => {
    if (bodyRef.current) {
      requestAnimationFrame(() => {
        setHeight(isOpen ? `${bodyRef.current?.scrollHeight}px` : '0px');
      });
    }
  }, [isOpen]);

  useEffect(() => {
    bodyHeightModify();
  }, [isOpen, bodyHeightModify, children]);

  useEffect(() => {
    const handleResize = debounce(() => {
      setHeight(isOpen ? `${bodyRef.current?.scrollHeight}px` : '0px');
    }, 100);

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, bodyHeightModify]);

  const handleOpenToggle = () => {
    setIsOpen(prev => !prev);
  };

  const accordeonClasses: string = [css.Accordeon, isOpen ? css.Open : ''].join(' ');

  return (
    <div className={accordeonClasses}>
      <div className={css.AccordeonHead} onClick={!isOpen ? handleOpenToggle : undefined}>
        <strong onClick={isOpen ? handleOpenToggle : undefined}>{title}</strong>
        <button className={css.Arrow} onClick={isOpen ? handleOpenToggle : undefined}>
          <Icon name="arrowdown" color="var(--text-color)" />
        </button>
      </div>
      <div className={css.AccordeonBody} ref={bodyRef} style={{ height }}>
        {children}
      </div>
    </div>
  );
};

export default Accordeon;
