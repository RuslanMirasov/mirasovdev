import { Title, Image } from 'components';
import css from './AboutMeSidebar.module.scss';

const AboutMeSidebar: React.FC = () => {
  return (
    <div className={css.MyPhoto}>
      <Image src="/images/me.png" alt="Ruslan Mirasov" />
      <Title tag="h3" size="h3">
        Ruslan Mirasov
      </Title>
    </div>
  );
};

export default AboutMeSidebar;
