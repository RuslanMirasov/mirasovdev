import css from './Project.module.scss';
import { usePopup } from 'contexts/PopupContext';
import { useState, useEffect } from 'react';
import { Title, Text } from 'components/Typography';

const Project = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { popupOpen } = usePopup();
  const { title, poster, category } = project;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    popupOpen('project', project);
  };

  return (
    <li className={`${css.Project} ${isVisible ? css.Visible : ''}`} onClick={handleClick}>
      <div className={css.Content}>
        <img src={poster} alt={title} className={css.Poster} />
        <div className={css.Info}>
          <Title tag="h4" size="h6">
            {title}
          </Title>
          <Text size="small">{category.join(' / ')}</Text>
        </div>
      </div>
    </li>
  );
};

export default Project;
