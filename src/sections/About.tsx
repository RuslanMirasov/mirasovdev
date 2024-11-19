import { useTranslation } from 'react-i18next';
import { Accordeon, SectionSticky, AboutMeSidebar, Text } from 'components';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionSticky extraClass="section-about" sidebar={<AboutMeSidebar />} title={t('about')}>
      <Accordeon title={t('summary')} open={true}>
        <Text>{t('summary_text_1')}</Text>
        <Text>{t('summary_text_2')}</Text>
        <Text>{t('summary_text_3')}</Text>
        <Text>{t('summary_text_4')}</Text>
        <Text>{t('summary_text_5')}</Text>
      </Accordeon>

      <Accordeon title={t('Education')}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quasi odio totam? Cupiditate hic enim saepe iste neque? Corrupti magni
          doloremque consequuntur quam dolorem vero, voluptatem delectus et accusamus ut.
        </Text>
      </Accordeon>

      <Accordeon title={t('Education')}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quasi odio totam? Cupiditate hic enim saepe iste neque? Corrupti magni
          doloremque consequuntur quam dolorem vero, voluptatem delectus et accusamus ut.
        </Text>
      </Accordeon>

      <Accordeon title={t('languages')}>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quasi odio totam? Cupiditate hic enim saepe iste neque? Corrupti magni
          doloremque consequuntur quam dolorem vero, voluptatem delectus et accusamus ut.
        </Text>
      </Accordeon>
    </SectionSticky>
  );
};

export default About;
