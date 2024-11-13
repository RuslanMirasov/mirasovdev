import Icon from 'components/Icon/Icon';
import css from './ScrollDown.module.scss';

interface ScrollDownProps {
  scrollto?: string;
}

const ScrollDown: React.FC<ScrollDownProps> = ({ scrollto }) => {
  return (
    <div className={css.ScrollDown} data-scrollto={scrollto}>
      <Icon name="scrolldown" />
    </div>
  );
};

export default ScrollDown;
