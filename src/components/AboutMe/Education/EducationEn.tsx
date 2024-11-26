import { Title, List } from 'components';

const EducationEn: React.FC = () => {
  return (
    <>
      <Title tag="h5" size="h6">
        Master`s degree
      </Title>
      <List size="big">
        <li>
          <strong>09.2005 - 06.2010 | Master`s degree - Mechanical Engineering Technology </strong>
          <a href="https://pstu.edu/en/" target="_blank" rel="noreferrer">
            Priazovskyi State Technical University
          </a>
          . 1 year after the bachelor`s degree, in-depth study with the possibility of specialisation -7th level of NQF
        </li>
      </List>
      <Title tag="h5" size="h6">
        Education / Bootcamps
      </Title>
      <List size="big">
        <li>
          <strong>22.07.2024 - 16.10.2024 | Spiced-Academy bootcamp (Berlin)</strong>
          Web developer{' '}
          <a href="https://drive.google.com/file/d/1yBgdQrQrENnlKvS8ZjLLgXDDYLrJN5V-/view?pli=1" target="_blank" rel="noreferrer">
            certificate
          </a>
        </li>
        <li>
          <strong>24.01.2024 | IT School GoIT (Kiew)</strong>
          Fullstack developer{' '}
          <a href="https://drive.google.com/file/d/1N00Wdl3QGIgiXBGB19dralZnDh3RKrjC/view" target="_blank" rel="noreferrer">
            certificate
          </a>
        </li>
        <li>
          <strong>2014 - 2015 | IT School Skillbox</strong>
          Web developer "Basic"{' '}
          <a href="https://drive.google.com/file/d/12Q2uecKb2dKxF0Oc-5sytmWkah79qiFQ/view" target="_blank" rel="noreferrer">
            certificate
          </a>
        </li>
      </List>
    </>
  );
};

export default EducationEn;
