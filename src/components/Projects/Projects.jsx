import css from './Projects.module.scss';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import projectsEn from '../../json/en/projects.json'; // Импорт файла JSON для английского языка
import projectsDe from '../../json/de/projects.json'; // Импорт файла JSON для немецкого языка
import { Button } from 'components/Buttons';
import Flex from 'components/Flex/Flex';
import Project from 'components/Project/Project';

const Projects = () => {
  const { t, i18n } = useTranslation();
  const [projects, setProjects] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [showButton, setShowButton] = useState(true);
  const itemsPerPage = 6;

  useEffect(() => {
    const projectsData = i18n.language === 'de' ? projectsDe : projectsEn;
    setProjects(projectsData);
  }, [i18n.language]);

  useEffect(() => {
    setVisibleProjects(projects.slice(0, itemsPerPage));
    setShowButton(projects.length > itemsPerPage);
  }, [projects]);

  const loadMoreProjects = () => {
    const currentVisibleCount = visibleProjects.length;
    const nextVisibleCount = currentVisibleCount + itemsPerPage;
    const nextVisibleProjects = projects.slice(0, nextVisibleCount);
    setVisibleProjects(nextVisibleProjects);
    setShowButton(projects.length > nextVisibleCount);
  };

  return (
    <>
      <ul className={css.Projects}>
        {visibleProjects.map(project => (
          <Project key={project.id} project={project} />
        ))}
      </ul>
      {showButton && (
        <Flex ta="center">
          <Button onClick={loadMoreProjects}>{t('portfolio_button_more')}</Button>
        </Flex>
      )}
    </>
  );
};

export default Projects;
