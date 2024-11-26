import { List } from 'components';

const WorkExperienceEn: React.FC = () => {
  return (
    <>
      <List size="big">
        <li>
          <strong>2019 - 2022 | Frontend Developer (Remote)</strong>
          Marketing agency for beauty salons and cosmetics.{' '}
          <a href="https://beautyalliance-marketing.com/" target="_blank" rel="noreferrer">
            "Beauty Alliance"
          </a>
        </li>
        <li>
          <strong>2016 - 2019 | Frontend Developer (Remote)</strong>
          Marketing agency{' '}
          <a href="https://mokselle.ru/" target="_blank" rel="noreferrer">
            "Mokselle"
          </a>
        </li>
      </List>
    </>
  );
};

export default WorkExperienceEn;
