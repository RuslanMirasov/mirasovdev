import { ReactNode } from 'react';
import css from './List.module.scss';

interface ListProps {
  size?: 'big' | 'small';
  children: ReactNode;
}

const List: React.FC<ListProps> = ({ size, children }) => {
  const listClasses = [css.List, size === 'big' ? css.Big : '', size === 'small' ? css.Small : ''].join(' ');
  return <ul className={listClasses}>{children}</ul>;
};

export default List;
