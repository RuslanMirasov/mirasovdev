import { ReactNode } from 'react';
import css from './Text.module.scss';

interface TextProps {
  size?: 'big' | 'small';
  width?: string;
  children: ReactNode;
}

const Text: React.FC<TextProps> = ({ size, width, children }) => {
  const textClasses = [css.Text, size === 'big' ? css.Big : '', size === 'small' ? css.Small : ''].join(' ');

  return (
    <p className={textClasses} style={width ? { maxWidth: `${width}px` } : undefined}>
      {children}
    </p>
  );
};

export default Text;
