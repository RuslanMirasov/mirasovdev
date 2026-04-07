import { Text, Title, List } from 'components';

const SummaryEn: React.FC = () => {
  return (
    <>
      <Text size="big">
        Frontend developer with 6+ years of experience building web applications for marketing and digital agencies. Strong foundation in JavaScript
        ES6+, HTML, and CSS/SCSS, complemented by 2+ years of hands-on work with React, Next.js, TypeScript, and Node.js as a freelance developer.
        Experienced in responsive UI development, RESTful API integration, and scalable web applications. Currently integrating OpenAI APIs to
        automate business logic.
      </Text>
      <Text size="big">
        Currently, I am looking for a company for long-term full-time collaboration, where I can apply my experience and continue my professional
        growth.
      </Text>
      <Title tag="h5" size="h6">
        My key skills and experience include:
      </Title>
      <List>
        <li>
          <strong>Building responsive web pages using JavaScript, HTML, and CSS/SCSS</strong>
          Developing interfaces based on design mockups from Figma, Photoshop, or other graphic editors, adhering to modern UX/UI standards.
        </li>
        <li>
          <strong>Creating animations and interactive user interfaces with vanilla JavaScript or JQuery</strong>
          Implementing complex user scenarios and enhancing user experience with animations and dynamic elements.
        </li>
        <li>
          <strong>Organizing and styling interface components using Styled Components or module styles</strong>
          Effectively managing styles and creating reusable components to improve code structure and maintainability.
        </li>
        <li>
          <strong>Creating and interacting with MongoDB databases using Mongoose</strong>
          Designing data schemas, managing collections, and implementing CRUD operations.
        </li>
        <li>
          <strong>Building custom APIs with JavaScript using Next.js or Express</strong>
          Creating high-performance REST APIs for seamless data integration and management.
        </li>
        <li>
          <strong>Interacting with third-party APIs</strong>
          Integrating external APIs via web and software interfaces to extend application functionality.
        </li>
        <li>
          <strong>Developing complex full-stack web applications with React and Next.js</strong>
          Building both client-side and server-side parts of applications using modern frameworks and libraries.
        </li>
        <li>
          <strong>Integrating markup with WordPress CMS</strong>
          Developing and customizing WordPress themes based on design mockups from Figma, using ACF, WooCommerce, Contact Form 7, and other plugins to
          meet functional and visual requirements.
        </li>
        <li>
          <strong>Testing code with Jest, SuperTest, and React Testing Library</strong>
          Writing unit, integration, and functional tests to ensure code quality and reliability.
        </li>
      </List>
    </>
  );
};

export default SummaryEn;
