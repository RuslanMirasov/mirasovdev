import { List } from 'components';

const LanguagesDe: React.FC = () => {
  return (
    <List>
      <li>
        <b>Ukrainisch</b> Muttersprache
      </li>
      <li>
        <b>Russisch</b> Fließend
      </li>
      <li>
        <b>Deutsch</b> B2-
        <a href="/pdf/b2_beruf_ruslan_mirasov_zertifikat.pdf" target="_blank" rel="noopener noreferrer">
          Beruf
        </a>
      </li>
      <li>
        <b>Englisch</b> B2
      </li>
    </List>
  );
};

export default LanguagesDe;
