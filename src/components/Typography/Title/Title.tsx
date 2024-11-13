import css from './Title.module.scss';

interface TitleProps {
  tag?: keyof JSX.IntrinsicElements;
  size?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  align?: 'left' | 'center' | 'right';
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ tag = 'strong', size, align, children }) => {
  const Tag = tag as keyof JSX.IntrinsicElements;

  const titleClasses = [
    css.Title,
    size === 'h1' ? css.TitleH1 : '',
    size === 'h2' ? css.TitleH2 : '',
    size === 'h3' ? css.TitleH3 : '',
    size === 'h4' ? css.TitleH4 : '',
    size === 'h5' ? css.TitleH5 : '',
    size === 'h6' ? css.TitleH6 : '',
  ].join(' ');

  return (
    <Tag style={align ? { textAlign: align } : undefined} className={titleClasses}>
      {children}
    </Tag>
  );
};

export default Title;
