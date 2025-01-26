import { Button, ButtonsList, Container, Section, Text, Title, TitleBox } from 'components';

const NotFound: React.FC = () => {
  return (
    <Section full>
      <Container>
        <div style={{ textAlign: 'center' }}>
          <TitleBox>
            <Title tag="h1" size="404" align="center">
              404
            </Title>
            <Text>Page not found</Text>
            <ButtonsList align="center">
              <Button to="/" variant="BorderDark">
                Back to main
              </Button>
            </ButtonsList>
          </TitleBox>
        </div>
      </Container>
    </Section>
  );
};

export default NotFound;
