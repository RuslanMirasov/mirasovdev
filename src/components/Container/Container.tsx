import css from './Container.module.scss';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={css.Container}>{children}</div>;
};

export default Container;
