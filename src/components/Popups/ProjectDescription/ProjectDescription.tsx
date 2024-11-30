import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { TitleBox, Title, Image, Text, Button, Icon, ButtonClose } from 'components';
import css from './ProjectDescription.module.scss';

interface ProjectType {
  id: number;
  number: number;
  category: string[];
  poster: string;
  poster2: string;
  title: string;
  description: string;
  stack: string[];
  links: string[];
  features: string[];
  client: string[];
}

interface ProjectDescriptionProps {
  id: number;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ id }) => {
  const { t, i18n } = useTranslation();
  const [project, setProject] = useState<ProjectType | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const fetchProject = async () => {
      const currentLanguage: string = ['en', 'de'].includes(i18n.language) ? i18n.language : 'en';
      try {
        const response = await fetch(`/json/${currentLanguage}/projects.json`);
        const data: ProjectType[] = await response.json();

        const selectedProject = data.find(proj => proj.id === id);
        setProject(selectedProject || null);
      } catch (error) {
        console.error('Error loading projects:', error);
      }
    };

    fetchProject();
  }, [id, i18n.language]);

  useEffect(() => {
    if (!project) return;
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setIsLoaded(true));
    });
  }, [project]);

  if (!project) return null;

  return (
    <div className={`${css.ProjectDescription} ${isLoaded ? css.IsLoaded : ''}`}>
      <ButtonClose />
      <div className={`${css.Thumbnail} custom-scrollbar`}>
        <Image src={project.poster2} mobilsrc={project.poster} alt={project.title} />
      </div>
      <div className={`${css.Content} custom-scrollbar`}>
        <TitleBox>
          <Text>{project.category.join(' / ')}</Text>
          <Title tag="h3" size="h2">
            {project.title}
          </Title>
          <ul className={css.Stack}>
            {project.stack.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        </TitleBox>

        <div className={`${css.DescriptionWrapper} custom-scrollbar`}>
          <Text>{project.description}</Text>
          <b>{t('features')}:</b>

          <ul className={css.Features}>
            {project.features.map((featur, index) => (
              <li key={index}>{featur}</li>
            ))}
          </ul>

          <Text>
            <b>{t('Employer')}: </b>
            {project.client[0]}{' '}
            <a href={project.client[2]} rel="noreferrer" target="_blank">
              {project.client[1]}
            </a>
          </Text>
        </div>

        <div className={css.Buttons}>
          {project.links.map((link, index) => {
            const isGithub = link.includes('github.com');
            return (
              <Button to={link} key={index} blank variant={isGithub ? 'Black' : 'BorderDark'}>
                <Icon name={isGithub ? 'github' : 'website'} />
                <span>{isGithub ? 'Github' : 'Website'}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDescription;
