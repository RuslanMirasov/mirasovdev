import { modifyScrollbar, freezBody, unfreezBody } from 'assets/utils/popup';

export const addArrowsToMultipleLinks = (menuClass: string, arrowClass: string, arrowClick: (e: MouseEvent) => void = () => {}): void => {
  const links = document.querySelectorAll(`.${menuClass} li`);
  links.forEach(link => {
    const innerUl = link.querySelector('ul');

    const innerArrow = link.querySelector(`.${arrowClass}`);
    if (innerUl && !innerArrow) {
      const arrowSpan = document.createElement('span');
      arrowSpan.className = arrowClass;
      arrowSpan.innerHTML = `<svg viewBox="0 0 50 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 4L25 26L46 4" stroke='currentColor' stroke-width=8 stroke-linecap="round" /></svg>`;
      arrowSpan.addEventListener('click', (e: MouseEvent) => {
        arrowClick(e);
      });
      link.insertAdjacentElement('afterbegin', arrowSpan);
    }
  });
};

export const calculateHeightOfInnerUl = (element: HTMLElement): number => {
  const childElements = element.children;
  let totalHeight = 0;

  for (let i = 0; i < childElements.length; i++) {
    totalHeight += (childElements[i] as HTMLElement).offsetHeight;
  }

  return totalHeight;
};

export const arrowBtnAction = (targetBtn: HTMLElement, classOpen: string): void => {
  const innerLi = targetBtn.closest('li') as HTMLElement;
  const innerUl = innerLi.querySelector('ul') as HTMLElement;
  innerLi.classList.toggle(classOpen);

  if (!innerLi.classList.contains(classOpen)) {
    const allInnerUl = innerLi.querySelectorAll('ul') as NodeListOf<HTMLElement>;
    allInnerUl.forEach(ul => {
      ul.style.height = `${calculateHeightOfInnerUl(ul)}px`;
      if (ul.closest('li')?.classList.contains(classOpen)) {
        ul.closest('li')?.classList.remove(classOpen);
      }
      setTimeout(() => {
        ul.style.height = '0px';
      }, 10);
    });
    return;
  }
  innerUl.style.height = `${calculateHeightOfInnerUl(innerUl)}px`;
  setTimeout(() => {
    innerUl.style.height = 'auto';
  }, 600);
};

export const closeMenu = (): void => {
  const burger = document.querySelector('[data-burger]') as HTMLElement | null;
  const menu = document.querySelector('[data-navigation]') as HTMLElement | null;

  if (!burger || !menu) return;

  modifyScrollbar();
  unfreezBody();

  burger.setAttribute('data-burger', '');
  menu.setAttribute('data-navigation', '');
};

export const toggleMenu = (): void => {
  const burger = document.querySelector('[data-burger]') as HTMLElement | null;
  const menu = document.querySelector('[data-navigation]') as HTMLElement | null;

  if (!burger || !menu) return;
  modifyScrollbar();
  if (menu.dataset.navigation !== 'open') {
    freezBody();
    burger.setAttribute('data-burger', 'open');
    menu.setAttribute('data-navigation', 'open');
    return;
  }

  unfreezBody();
  burger.setAttribute('data-burger', '');
  menu.setAttribute('data-navigation', '');
};
