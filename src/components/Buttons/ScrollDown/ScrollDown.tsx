import { Icon } from 'components';
import scrollToBlock from 'assets/utils/scrollToBlock';
import css from './ScrollDown.module.scss';

const ScrollDown: React.FC = () => {
  return (
    <div className={css.ScrollDown} onClick={() => scrollToBlock('section-portfolio')}>
      <Icon name="scrolldown" />
    </div>
  );
};

export default ScrollDown;
