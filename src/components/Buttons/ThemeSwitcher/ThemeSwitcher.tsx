import { useState, useEffect } from 'react';
import css from './ThemeSwitcher.module.scss';

type Theme = 'dark' | 'light';

const ThemeSwitcher: React.FC = () => {
  const [theme, setTheme] = useState<Theme>((localStorage.getItem('theme') as Theme) || 'dark');

  const toggleTheme = () => {
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.dataset.theme = newTheme;
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <button type="button" className={`${css.ThemeSwitcher} ${theme === 'light' ? css.Light : ''}`} onClick={toggleTheme}>
      <span></span>
    </button>
  );
};

export default ThemeSwitcher;
