import { useTranslation } from 'react-i18next';
import { Section, Container, TitleBox, Title, Text } from 'components';

const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <Section extraClass="section-portfolio">
      <Container>
        <TitleBox>
          <Title tag="h2" size="h2">
            Portfolio
          </Title>
          <Text width="352">{t('portfolio_subtitle')}</Text>
        </TitleBox>
      </Container>
    </Section>
  );
};

export default Portfolio;
