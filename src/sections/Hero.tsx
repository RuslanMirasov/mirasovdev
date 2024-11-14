import { useTranslation } from 'react-i18next';
import { Section, Container, TitleBox, Title, Text, ButtonsList, Button, ScrollDown, LandingEffect } from 'components';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section full extraClass="section-hero">
      <LandingEffect />
      <Container>
        <TitleBox>
          <b>{t('hero_head')}</b>
          <Title tag="h1" size="h1">
            Front-end <br />
            {t('logo')}
          </Title>
          <Text width="322">{t('hero_subtitle')}</Text>
          <ButtonsList>
            <Button variant="BorderDark" scrollto="section-portfolio">
              Portfolio
            </Button>
          </ButtonsList>
        </TitleBox>
      </Container>

      <ScrollDown />
    </Section>
  );
};

export default Hero;
