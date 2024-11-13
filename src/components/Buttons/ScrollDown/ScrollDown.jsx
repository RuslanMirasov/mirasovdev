import Icon from 'components/Icon/Icon';
import css from './ScrollDown.module.scss';

const ScrollDown = ({ scrollto }) => {
  return (
    <div className={css.ScrollDown} data-scrollto={scrollto}>
      <Icon name="scrolldown" />
    </div>
  );
};

export default ScrollDown;
