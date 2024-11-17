import { useModal } from 'hooks/useModal';
import css from './ButtonClose.module.scss';
interface ButtonCloseProps {
  size?: number;
}
const ButtonClose: React.FC<ButtonCloseProps> = ({ size = 40 }) => {
  const { closeModal } = useModal();
  return (
    <button
      type="button"
      style={{ width: `${size}px`, height: `${size}px` }}
      data-modalclose
      className={css.ButtonClose}
      onClick={closeModal}
    ></button>
  );
};

export default ButtonClose;
