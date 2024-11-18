import { ReactNode } from 'react';
import { Section, Container, Title } from 'components';
import css from './SectionSticky.module.scss';

interface SectionStickyProps {
  sidebar: ReactNode | null;
  title?: string | null;
  extraClass?: string;
  children: React.ReactNode;
}

const SectionSticky: React.FC<SectionStickyProps> = ({ sidebar, title = null, extraClass, children }) => {
  return (
    <Section extraClass={`${extraClass} overflow-visible`}>
      <Container>
        {title && (
          <Title tag="h2" size="h2">
            {title}
          </Title>
        )}
        <div className={css.SectionSticky}>
          <aside className={css.Sidebar}>{sidebar}</aside>
          <div className={css.Content}>{children}</div>
        </div>
      </Container>
    </Section>
  );
};

export default SectionSticky;
