import { Title, List } from 'components';

const EducationDe: React.FC = () => {
  return (
    <>
      <Title tag="h5" size="h6">
        Hochschulabschluss
      </Title>
      <List>
        <li>
          <strong>01/2026 - 04/2028 | Master of Science in Computer Science: Software Engineering</strong>
          <a href="https://woolf.university/colleges/goit-neoversity" target="_blank" rel="noreferrer">
            Neoversity (Woolf University)
          </a>
        </li>
        <li>
          <strong>09/2005 - 06/2010 | Konstruktionsingenieur (Fachrichtung Maschinenbau) </strong>
          <a href="https://pstu.edu/en/" target="_blank" rel="noreferrer">
            Pryazovskyi State Technical University, Mariupol
          </a>
          <br />
          <a href="https://drive.google.com/file/d/1cDLIaKwwsNJUr-Y4QFyai_uMRoNvG38Q/view?usp=sharing" target="_blank" rel="noreferrer">
            anerkannt / bewertet durch ZAB
          </a>
        </li>
      </List>

      <Title tag="h5" size="h6">
        Ausbildung / Weiterbildung
      </Title>
      <List>
        <li>
          <strong>07/2024 - 10/2024 | Web Development Bootcamp</strong>
          Spiced Academy, Berlin (Intensivkurs in Vollzeit)
          <br />
          <a href="https://drive.google.com/file/d/1yBgdQrQrENnlKvS8ZjLLgXDDYLrJN5V-/view?pli=1" target="_blank" rel="noreferrer">
            Zertifikat ansehen
          </a>
        </li>
        <li>
          <strong>03/2023 - 01/2024 | Fullstack Developer Kurs</strong>
          GoIT Global, Kyiv (Online) <br />
          <a href="https://drive.google.com/file/d/1N00Wdl3QGIgiXBGB19dralZnDh3RKrjC/view" target="_blank" rel="noreferrer">
            Zertifikat ansehen
          </a>
        </li>
        <li>
          <strong>01/2015 - 06/2015 | Kurs “Web Developer Basic”</strong>
          Ausbildungszentrum für Softwareentwicklung, Moskau (Online) <br />
          <a href="https://drive.google.com/file/d/12Q2uecKb2dKxF0Oc-5sytmWkah79qiFQ/view" target="_blank" rel="noreferrer">
            Zertifikat ansehen
          </a>
        </li>
      </List>
    </>
  );
};

export default EducationDe;
