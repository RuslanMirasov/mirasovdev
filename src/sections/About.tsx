import { useTranslation } from 'react-i18next';
import {
  Accordeon,
  SectionSticky,
  AboutMeSidebar,
  SummaryEn,
  SummaryDe,
  EducationEn,
  EducationDe,
  WorkExperienceEn,
  WorkExperienceDe,
  LanguagesEn,
  LanguagesDe,
} from 'components';

const About: React.FC = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage: string = ['en', 'de'].includes(i18n.language) ? i18n.language : 'en';

  return (
    <SectionSticky extraClass="section-about" sidebar={<AboutMeSidebar />} title={t('about')}>
      <Accordeon title={t('summary')}>{currentLanguage === 'en' ? <SummaryEn /> : <SummaryDe />}</Accordeon>
      <Accordeon title={t('Education')}>{currentLanguage === 'en' ? <EducationEn /> : <EducationDe />}</Accordeon>
      <Accordeon title={t('work_experience')}>{currentLanguage === 'en' ? <WorkExperienceEn /> : <WorkExperienceDe />}</Accordeon>
      <Accordeon title={t('languages')}>{currentLanguage === 'en' ? <LanguagesEn /> : <LanguagesDe />}</Accordeon>
    </SectionSticky>
  );
};

export default About;
