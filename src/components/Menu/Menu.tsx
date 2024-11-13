import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { addArrowsToMultipleLinks, arrowBtnAction } from 'assets/utils/menuFunctions';
import MenuLink from './MenuLink';
import css from './Menu.module.scss';

const Menu: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    addArrowsToMultipleLinks(css.NavMenu, css.NavMore, handleArrowClick);
  }, []);

  const handleArrowClick = (e: MouseEvent) => {
    arrowBtnAction(e.target as HTMLElement, css.Open);
  };

  return (
    <ul className={`${css.NavMenu} custom-scrollbar`}>
      <MenuLink scrollto="body" text={t('home')} />
      <MenuLink to="#" text="Code">
        <ul>
          <MenuLink to="#" text="Edication">
            <ul>
              <MenuLink to="#" text="Javascript">
                <ul>
                  <MenuLink to="#" text="Lesson 1" />
                  <MenuLink to="#" text="Lesson 2" />
                  <MenuLink to="#" text="Lesson 3" />
                  <MenuLink to="#" text="Lesson 4" />
                  <MenuLink to="#" text="Lesson 5" />
                  <MenuLink to="#" text="Lesson 6" />
                  <MenuLink to="#" text="Lesson 7" />
                </ul>
              </MenuLink>
              <MenuLink to="#" text="React" />
              <MenuLink to="#" text="Redux-Toolkit" />
              <MenuLink to="#" text="Next.js" />
              <MenuLink to="#" text="TypeScript" />
              <MenuLink to="#" text="Node.js" />
              <MenuLink to="#" text="MySQL" />
            </ul>
          </MenuLink>
          <MenuLink to="#" text="Components">
            <ul>
              <MenuLink to="#" text="App" />
              <MenuLink to="#" text="Accordeon" />
              <MenuLink to="#" text="Header">
                <ul>
                  <MenuLink to="#" text="Logo" />
                  <MenuLink to="#" text="Navigation" />
                  <MenuLink to="#" text="Menu" />
                </ul>
              </MenuLink>
              <MenuLink to="#" text="Buttons">
                <ul>
                  <MenuLink to="#" text="Button" />
                  <MenuLink to="#" text="Buttons List" />
                  <MenuLink to="#" text="Close Button" />
                  <MenuLink to="#" text="Burger Button" />
                  <MenuLink to="#" text="Theme Switcher" />
                  <MenuLink to="#" text="Scroll to top" />
                </ul>
              </MenuLink>
              <MenuLink to="#" text="Menu" />
              <MenuLink to="#" text="Typography">
                <ul>
                  <MenuLink to="#" text="TextWrapper" />
                  <MenuLink to="#" text="Title" />
                  <MenuLink to="#" text="Text" />
                  <MenuLink to="#" text="List" />
                </ul>
              </MenuLink>
              <MenuLink to="#" text="Footer" />
            </ul>
          </MenuLink>
          <MenuLink to="#" text="Scripts">
            <ul>
              <MenuLink to="#" text="Utilites" />
              <MenuLink to="#" text="Custom Scripts" />
            </ul>
          </MenuLink>
          <MenuLink to="#" text="Job interview">
            <ul>
              <MenuLink to="#" text="General questions" />
              <MenuLink to="#" text="HTML/CSS" />
              <MenuLink to="#" text="JavaScript" />
              <MenuLink to="#" text="React/Redux" />
              <MenuLink to="#" text="Node.js/MongoDB">
                <ul>
                  <MenuLink scrollto="section-portfolio" text="Test Link" />
                </ul>
              </MenuLink>
            </ul>
          </MenuLink>
        </ul>
      </MenuLink>
      <MenuLink to="/sdsdsd" text={t('portfolio')} />
      <MenuLink scrollto="section-about" text={t('about')} />
      <MenuLink scrollto="section-skills" text={t('skills')} />
      <MenuLink scrollto="section-contacts" text={t('contacts')} />
    </ul>
  );
};

export default Menu;
