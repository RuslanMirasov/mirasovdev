import { useTranslation } from 'react-i18next';
import { SectionSticky, AboutMeSidebar, ButtonsList, Button, Text } from 'components';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionSticky extraClass="section-about" sidebar={<AboutMeSidebar />} title={t('about')}>
      <Text size="big">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste rerum iusto molestiae harum deleniti, ab placeat expedita autem! Officiis
        repellendus dignissimos, soluta voluptate voluptatibus praesentium aliquam voluptates veritatis vero officia?Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Iste rerum iusto molestiae harum deleniti, ab placeat expedita autem! Officiis repellendus dignissimos, soluta
        voluptate voluptatibus praesentium aliquam voluptates veritatis vero officia?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
        rerum iusto molestiae harum deleniti, ab placeat expedita autem! Officiis repellendus dignissimos, soluta voluptate voluptatibus praesentium
        aliquam voluptates veritatis vero officia?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste rerum iusto molestiae harum deleniti,
        ab placeat expedita autem! Officiis repellendus dignissimos, soluta voluptate voluptatibus praesentium aliquam voluptates veritatis vero
        officia?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste rerum iusto molestiae harum deleniti, ab placeat expedita autem!
        Officiis repellendus dignissimos, soluta voluptate voluptatibus praesentium aliquam voluptates veritatis vero officia?Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Iste rerum iusto molestiae harum deleniti, ab placeat expedita autem! Officiis repellendus dignissimos,
        soluta voluptate voluptatibus praesentium aliquam voluptates veritatis vero officia?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Iste rerum iusto molestiae harum deleniti, ab placeat expedita autem! Officiis repellendus dignissimos, soluta voluptate voluptatibus
        praesentium aliquam voluptates veritatis vero officia?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste rerum iusto molestiae
        harum deleniti, ab placeat expedita autem! Officiis repellendus dignissimos, soluta voluptate voluptatibus praesentium aliquam voluptates
        veritatis vero officia?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste rerum iusto molestiae harum deleniti, ab placeat
        expedita autem! Officiis repellendus dignissimos, soluta voluptate voluptatibus praesentium aliquam voluptates veritatis vero officia?Lorem
        ipsum dolor, sit amet consectetur adipisicing elit. Iste rerum iusto molestiae harum deleniti, ab placeat expedita autem! Officiis repellendus
        dignissimos, soluta voluptate voluptatibus praesentium aliquam voluptates veritatis vero officia?Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Iste rerum iusto molestiae harum deleniti, ab placeat expedita autem! Officiis repellendus dignissimos, soluta voluptate
        voluptatibus praesentium aliquam voluptates veritatis vero officia?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste rerum iusto
        molestiae harum deleniti, ab placeat expedita autem! Officiis repellendus dignissimos, soluta voluptate voluptatibus praesentium aliquam
        voluptates veritatis vero officia?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste rerum iusto molestiae harum deleniti, ab
        placeat expedita autem! Officiis repellendus dignissimos, soluta voluptate voluptatibus praesentium aliquam voluptates veritatis vero
        officia?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste rerum iusto molestiae harum deleniti, ab placeat expedita autem!
        Officiis repellendus dignissimos, soluta voluptate voluptatibus praesentium aliquam voluptates veritatis vero officia?Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Iste rerum iusto molestiae harum deleniti, ab placeat expedita autem! Officiis repellendus dignissimos,
        soluta voluptate voluptatibus praesentium aliquam voluptates veritatis vero officia?
      </Text>
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste rerum iusto molestiae harum deleniti, ab placeat expedita autem! Officiis
        repellendus dignissimos, soluta voluptate voluptatibus praesentium aliquam voluptates veritatis vero officia?
      </Text>
      <ButtonsList>
        <Button variant="BorderDark">{t('Download_my_CV')}</Button>
      </ButtonsList>
    </SectionSticky>
  );
};

export default About;
