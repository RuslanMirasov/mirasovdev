import { useEffect } from 'react';
import { addArrowsToMultipleLinks } from 'assets/utils/menuFunctions';
import { useTranslation } from 'react-i18next';
import css from './LanguageSelect.module.scss';

const LanguageSelect: React.FC = () => {
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  useEffect(() => {
    addArrowsToMultipleLinks(css.LanguageSelect, css.Arrow);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLParagraphElement, MouseEvent>): void => {
    const languageLabel = e.currentTarget.dataset.text;
    if (languageLabel) {
      i18n.changeLanguage(languageLabel.toLowerCase());
    }
  };

  return (
    <ul className={css.LanguageSelect}>
      <li>
        <p className="language">{t('languageCode')}</p>
        <ul>
          <li>
            <p onClick={e => handleClick(e)} data-text="En">
              English
            </p>
          </li>
          <li>
            <p onClick={e => handleClick(e)} data-text="De">
              Deutsch
            </p>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default LanguageSelect;
