import ReactDOM from 'react-dom';
import { useModal } from 'hooks/useModal';
import css from './Modal.module.scss';
import { useEffect, useState } from 'react';

const Modal: React.FC = () => {
  const { isOpen, content, closeModal } = useModal();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [shouldRender, setShouldRender] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsVisible(true));
      });
    } else if (shouldRender) {
      setIsVisible(false); // Убираем класс Visible
      const timer = setTimeout(() => setShouldRender(false), 300); // Размонтируем через 0.3 секунды
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  if (!shouldRender) return null;

  const handleBackdropClick = (e: React.MouseEvent): void => {
    const target = e.target as HTMLElement;
    const isBackdrop = target.hasAttribute('data-backdrop');
    if (!isBackdrop) return;
    closeModal();
  };

  const modalMarkup = (
    <div className={`${css.Backdrop} ${isVisible ? css.Visible : ''}`} data-backdrop data-fix onClick={handleBackdropClick}>
      <div className={css.ModalWrapper} data-backdrop onClick={handleBackdropClick}>
        <div className={css.Modal}>{content}</div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalMarkup, document.body);
};

export default Modal;
