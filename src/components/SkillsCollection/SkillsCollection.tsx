import { Icon } from 'components';
import css from './SkillsCollection.module.scss';

interface Skills {
  id: number;
  name: string;
}

const SkillsCollection: React.FC = () => {
  const skillsData: Array<Skills> = [
    { id: 1, name: 'html' },
    { id: 2, name: 'css' },
    { id: 3, name: 'scss' },
    { id: 4, name: 'jquery' },
    { id: 5, name: 'js' },
    { id: 6, name: 'ts' },
    { id: 7, name: 'npm' },
    { id: 8, name: 'react' },
    { id: 9, name: 'redux' },
    { id: 10, name: 'nextjs' },
    { id: 11, name: 'vercele' },
    { id: 12, name: 'nodejs' },
    { id: 13, name: 'mongodb' },
    { id: 14, name: 'wordpress' },
    { id: 15, name: 'woo' },
    { id: 16, name: 'githubskill' },
    { id: 17, name: 'vscode' },
    { id: 18, name: 'figma' },
    { id: 19, name: 'slack' },
  ];

  return (
    <ul className={css.SkillsCollection}>
      {skillsData.map(({ id, name }) => (
        <li key={id}>
          <Icon name={name} />
        </li>
      ))}
    </ul>
  );
};

export default SkillsCollection;
