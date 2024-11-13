const scrollToBlock = (className: string): void => {
  const targetElement = document.querySelector<HTMLElement>(`.${className}`);
  const headerElement = document.querySelector<HTMLElement>('header');
  if (targetElement && headerElement) {
    const headerHeight = headerElement.offsetHeight;
    const targetOffset = targetElement.offsetTop - headerHeight;
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth',
    });
  }
};

export default scrollToBlock;
