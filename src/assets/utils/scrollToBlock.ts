const scrollToBlock = (className: string): boolean => {
  const targetElement = document.querySelector<HTMLElement>(`.${className}`);
  const headerElement = document.querySelector<HTMLElement>('header');

  if (targetElement && headerElement) {
    const headerHeight = headerElement.offsetHeight;
    const targetOffset = targetElement.offsetTop - headerHeight;
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth',
    });
    return true;
  }
  return false;
};

export default scrollToBlock;
