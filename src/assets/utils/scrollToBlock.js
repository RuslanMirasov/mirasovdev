document.addEventListener('click', function (event) {
  const target = event.target;
  const scrollToAttribute = target.dataset.scrollto;

  if (scrollToAttribute) {
    event.preventDefault();
    scrollToClass(scrollToAttribute);
  }
});

const scrollToClass = className => {
  const targetElement = document.querySelector(`.${className}`);
  const headerHeight = document.querySelector('.header').offsetHeight;
  if (targetElement) {
    const targetOffset = targetElement.offsetTop - headerHeight;
    window.scrollTo({
      top: targetOffset,
      duration: 8000,
      behavior: 'smooth',
    });
  }
};

export default scrollToClass;
