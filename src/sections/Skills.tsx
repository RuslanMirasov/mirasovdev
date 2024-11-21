import { useTranslation } from 'react-i18next';
import { SectionSticky, Title, SkillsCollection } from 'components';

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionSticky
      extraClass="section-skills"
      sidebar={
        <Title tag="h2" size="h2">
          {t('skills')}
        </Title>
      }
    >
      <SkillsCollection />
    </SectionSticky>
  );
};

export default Skills;
