import { ReactNode } from 'react';
import css from './Section.module.scss';

interface SectionProps {
  dark?: boolean;
  full?: boolean;
  extraClass?: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ dark = false, full = false, extraClass = '', children }) => {
  const sectionClasses: { [key: string]: string | boolean } = {
    [css.Section]: true,
    [extraClass]: extraClass,
    [css.FullScreen]: full,
    [css.Dark]: dark,
  };

  const currentSectionClasses = Object.keys(sectionClasses)
    .filter(key => sectionClasses[key])
    .join(' ');

  return <section className={currentSectionClasses}>{children}</section>;
};

export default Section;
