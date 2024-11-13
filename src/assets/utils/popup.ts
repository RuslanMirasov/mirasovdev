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
