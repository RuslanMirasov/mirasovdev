import { List } from 'components';

const WorkExperienceEn: React.FC = () => {
  return (
    <>
      <List>
        <li>
          <strong>2019 - 2022 | Frontend Developer (Remote)</strong>
          Marketing agency for beauty salons and cosmetics.{' '}
          <a href="https://beautyalliance-marketing.com/" target="_blank" rel="noreferrer">
            "Beauty Alliance"
          </a>
          <p>
            The company specializes in marketing services for beauty salons and cosmetology, offering tailored advertising solutions aimed at
            profitable promotion and revenue growth. A team of experts ensures a comprehensive and individualized approach to every project.
          </p>
          <p>
            My Role: as a Full-Stack Developer, I worked on both the client and server sides, integrating websites with CMS platforms such as
            WordPress and MODX. I developed custom WordPress themes using ACF and WooCommerce plugins, created websites based on Figma designs,
            maintained and enhanced existing projects, and implemented new features like quizzes, surveys, and promotional campaigns. Additionally, I
            configured goals in Google Analytics and Yandex.Metrica to optimize performance tracking.
          </p>
        </li>
        <li>
          <strong>2016 - 2019 | Frontend Developer (Remote)</strong>
          Marketing agency{' '}
          <a href="https://mokselle.ru/" target="_blank" rel="noreferrer">
            "Mokselle"
          </a>
          <p>
            Marketing agency specializing in web development and digital marketing solutions, offering services like website creation, promotion, and
            administration.
          </p>
          <p>
            My Role: as a Junior Front-End Developer, I focused on building responsive websites and landing pages based on Photoshop and Figma
            designs, coding HTML emails for marketing campaigns, and maintaining existing websites to ensure their functionality and performance.
          </p>
        </li>
      </List>
    </>
  );
};

export default WorkExperienceEn;
