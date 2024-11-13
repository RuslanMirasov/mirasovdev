import css from './TitleBox.module.scss';

interface TitleBoxProps {
  width?: number;
  children: React.ReactNode;
}

const TitleBox: React.FC<TitleBoxProps> = ({ width, children }) => {
  return (
    <div style={width ? { maxWidth: `${width}px` } : undefined} className={css.TitleBox}>
      {children}
    </div>
  );
};

export default TitleBox;
