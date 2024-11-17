import { useState, useEffect } from 'react';
import { useModal } from 'hooks/useModal';
import { Title, Image, ProjectDescription } from 'components';
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
  const { openModal } = useModal();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { id, title, poster } = project;

  const projectClasses = [css.Project, isVisible ? css.Visible : ''].join(' ');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = (): void => {
    openModal(<ProjectDescription id={id} />);
  };

  return (
    <li key={id} className={projectClasses} onClick={handleClick}>
      <div className={css.Image}>
        <Image src={poster} alt={title} width="370" height="370" />
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
