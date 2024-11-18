import { useTranslation } from 'react-i18next';
import { SectionSticky, Title } from 'components';

const Contacts: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionSticky
      extraClass="section-contacts"
      sidebar={
        <Title tag="h2" size="h2">
          {t('contacts')}
        </Title>
      }
    >
      <p>
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
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste rerum iusto molestiae harum deleniti, ab placeat expedita autem! Officiis
        repellendus dignissimos, soluta voluptate voluptatibus praesentium aliquam voluptates veritatis vero officia?
      </p>
    </SectionSticky>
  );
};

export default Contacts;
