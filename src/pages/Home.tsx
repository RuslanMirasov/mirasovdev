import Hero from 'sections/Hero';
import Portfolio from 'sections/Portfolio';
import About from 'sections/About';
import Skills from 'sections/Skills';
import Contacts from 'sections/Contacts';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Portfolio />
      <About />
      <Skills />
      <Contacts />
    </>
  );
};

export default Home;
