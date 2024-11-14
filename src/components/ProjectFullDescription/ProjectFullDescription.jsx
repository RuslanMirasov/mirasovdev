import { Button, ButtonsList } from 'components/Buttons';
import Flex from 'components/Flex/Flex';
import { Title, Text } from 'components/Typography';
import css from './ProjectFullDescription.module.scss';

const ProjectFullDescription = ({ content }) => {
  const { title, description, stack, features, category, poster, poster2, links } = content;
  return (
    <div className={css.ProjectFullDescription}>
      <div className={`${css.Image} custom-scrollbar`}>
        <img src={poster2} alt={title} />
      </div>
      <div className={css.Content}>
        <Flex gap="20">
          <Title tag="h2" size="h2">
            {title}
          </Title>
          <hr />
          <img src={poster} alt={title} className={css.Poster} />
          <ul className={css.Stack}>
            {stack.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <Text>
            <b>Responsible for: </b>
            {category.join(' / ')}
          </Text>

          <hr />
          <Text>{description}</Text>
          <hr />
          <ul className={css.Features}>
            <li>
              <Text>
                <b>Development features:</b>
              </Text>
            </li>
            {features.map((feature, index) => {
              return (
                <li key={index}>
                  <Text size="small">{feature}</Text>
                </li>
              );
            })}
          </ul>
        </Flex>

        <ButtonsList>
          <hr />
          {links.map((link, index) => {
            const isGithub = link.includes('github');
            return isGithub ? (
              <Button to={link} key={index} blank variant="black">
                Github
              </Button>
            ) : (
              <Button to={link} key={index} blank>
                Website
              </Button>
            );
          })}
        </ButtonsList>
      </div>
    </div>
  );
};

export default ProjectFullDescription;
