import { useState, useEffect } from 'react';
import { Title } from 'components';
import css from './Project.module.scss';

interface ProjectData {
  id: number;
  title: string;
  poster: string;
}

interface ProjectProp {
  project: ProjectData;
}

const Project: React.FC<ProjectProp> = ({ project }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { id, title, poster } = project;

  const projectClasses = [css.Project, isVisible ? css.Visible : ''].join(' ');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = (): void => {
    console.log(`Open POpup with id ${id}`);
  };

  return (
    <li key={id} className={projectClasses} onClick={handleClick}>
      <div className={css.Image}>
        <img src={poster} alt={title} />
      </div>
      <div className={css.Description}>
        <Title tag="h3" size="h3">
          {title}
        </Title>
      </div>
    </li>
  );
};

export default Project;
