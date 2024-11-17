type Scrollbar = number | null;

export const modifyScrollbar = (scrollbar: Scrollbar = null): void => {
  const scrollbarWidth: number = scrollbar !== null ? scrollbar : window.innerWidth - document.body.clientWidth;

  document.body.style.paddingRight = `${scrollbarWidth}px`;

  const fixedElements = document.querySelectorAll<HTMLElement>('[data-fix]');
  fixedElements.forEach(fixedElement => {
    const computedStyle = window.getComputedStyle(fixedElement);
    if (computedStyle.position === 'fixed') {
      fixedElement.style.paddingRight = `${scrollbarWidth}px`;
    }
  });
};

export const freezBody = (): void => {
  if (typeof document === 'undefined') return;
  document.body.setAttribute('data-freez', '');
};

export const unfreezBody = (): void => {
  if (typeof document === 'undefined') return;
  document.body.removeAttribute('data-freez');
};
