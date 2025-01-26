import { Title, List } from 'components';

const EducationDe: React.FC = () => {
  return (
    <>
      <Title tag="h5" size="h6">
        Hochschulabschluss
      </Title>
      <List>
        <li>
          <strong>09.2005 - 06.2010 | Master of Education - Maschinenbautechnik </strong>
          <a href="https://pstu.edu/en/" target="_blank" rel="noreferrer">
            Staatliche Technische Universität
          </a>{' '}
          des Gebietsdes Asowschen Meeresin Mariupol, Mariupol, Ukraine
        </li>
      </List>

      <Title tag="h5" size="h6">
        Ausbildung / Weiterbildung
      </Title>
      <List>
        <li>
          <strong>22.07.2024 - 16.10.2024 | Spiced-Academy (Berlin)</strong>
          Web-Entwickler{' '}
          <a href="https://drive.google.com/file/d/1yBgdQrQrENnlKvS8ZjLLgXDDYLrJN5V-/view?pli=1" target="_blank" rel="noreferrer">
            Zertifikat
          </a>
        </li>

        <li>
          <strong>24.01.2024 | IT-Schule GoIT (Kiew)</strong>
          Fullstack-Entwickler{' '}
          <a href="https://drive.google.com/file/d/1N00Wdl3QGIgiXBGB19dralZnDh3RKrjC/view" target="_blank" rel="noreferrer">
            Zertifikat
          </a>
        </li>

        <li>
          <strong>2014 - 2015 | IT-Schule Skillbox</strong>
          Web-Entwickler "Basic"{' '}
          <a href="https://drive.google.com/file/d/12Q2uecKb2dKxF0Oc-5sytmWkah79qiFQ/view" target="_blank" rel="noreferrer">
            Zertifikat
          </a>
        </li>
      </List>
    </>
  );
};

export default EducationDe;
