import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ButtonsList, Button, Project } from 'components';
import css from './Projects.module.scss';

interface ProjectType {
  id: number;
  poster: string;
  title: string;
}

const Projects: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [allProjects, setAllProjects] = useState<ProjectType[]>([]);
  const [projects, setProjects] = useState<ProjectType[]>([]);
  const [showButton, setShowButton] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const itemsPerPage: number = 6;
  const itemsStep: number = 3;

  useEffect(() => {
    const fetchProjects = async () => {
      const pathToProjectsTranslations: string[] = i18n.language.split('-');
      try {
        const response = await fetch(`/json/${pathToProjectsTranslations[0]}/projects.json`);
        const data: ProjectType[] = await response.json();

        const filteredData = data.map(({ id, poster, title }) => ({
          id,
          poster,
          title,
        }));

        setAllProjects(filteredData);
        setProjects(filteredData.slice(0, itemsPerPage));
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [i18n.language]);

  useEffect(() => {
    const checkButtonVisibility = (): void => {
      if (allProjects.length !== projects.length) {
        setShowButton(true);
        return;
      }
      setShowButton(false);
    };

    checkButtonVisibility();
  }, [allProjects.length, projects.length]);

  const loadMoreProjects = async () => {
    setIsLoading(true);
    try {
      const moreData = allProjects.slice(projects.length, projects.length + itemsStep);
      await setProjects(prev => [...prev, ...moreData]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={css.Projects}>
      <ul>
        {projects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
      {showButton && (
        <ButtonsList align="center">
          <Button variant="BorderDark" isLoading={isLoading} onClick={loadMoreProjects}>
            {t('portfolio_button_more')}
          </Button>
        </ButtonsList>
      )}
    </div>
  );
};

export default Projects;
