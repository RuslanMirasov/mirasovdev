export const modifyScrollbar = () => {
  const scrollbarWidth: number = window.innerWidth - document.body.clientWidth;
  document.body.style.paddingRight = `${scrollbarWidth}px`;
  const fixedElements = document.querySelectorAll<HTMLElement>('[data-fix]');
  fixedElements.forEach(fixedElement => {
    fixedElement.style.paddingRight = `${scrollbarWidth}px`;
  });
};

export const freezBody = (): void => {
  if (typeof document === 'undefined') return;
  document.body.setAttribute('data-freez', '');
};

export const unfreezBody = (): void => {
  if (typeof document === 'undefined') return;
  modifyScrollbar();
  document.body.removeAttribute('data-freez');
};

// export const closeMenu = (): void => {
//   const burger = document.querySelector('[data-burger]') as HTMLElement | null;
//   const menu = document.querySelector('[data-navigation]') as HTMLElement | null;

//   if (!burger || !menu) return;

//   modifyScrollbar();
//   unfreezBody();
//   burger.setAttribute('data-burger', '');
//   menu.setAttribute('data-navigation', '');
// };

// export const toggleMenu = (): void => {
//   const burger = document.querySelector('[data-burger]') as HTMLElement | null;
//   const menu = document.querySelector('[data-navigation]') as HTMLElement | null;

//   if (!burger || !menu) return;

//   modifyScrollbar();

//   if (menu.dataset.navigation !== 'open') {
//     freezBody();
//     burger.setAttribute('data-burger', 'open');
//     menu.setAttribute('data-navigation', 'open');
//     return;
//   }

//   unfreezBody();
//   burger.setAttribute('data-burger', '');
//   menu.setAttribute('data-navigation', '');
// };
