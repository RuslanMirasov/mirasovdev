import { ReactNode, CSSProperties } from 'react';
import css from './ButtonsList.module.scss';

interface ButtonsListProps {
  align?: CSSProperties['justifyContent'];
  children: ReactNode;
}

const ButtonsList: React.FC<ButtonsListProps> = ({ align, children }) => {
  return (
    <div style={align ? { justifyContent: align } : undefined} className={css.ButtonsList}>
      {children}
    </div>
  );
};

export default ButtonsList;
