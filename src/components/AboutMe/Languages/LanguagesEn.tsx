import { List } from 'components';

const LanguagesEn: React.FC = () => {
  return (
    <List>
      <li>
        <b>Ukrainian:</b> Native
      </li>
      <li>
        <b>Russian:</b> Fluent
      </li>
      <li>
        <b>German:</b> B2-
        <a href="/pdf/b2_beruf_ruslan_mirasov_zertifikat.pdf" target="_blank" rel="noopener noreferrer">
          Beruf
        </a>
      </li>
      <li>
        <b>English:</b> B2
      </li>
    </List>
  );
};

export default LanguagesEn;
