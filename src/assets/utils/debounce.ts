export const debounce = (func: Function, delay: number) => {
  let timeout: NodeJS.Timeout;

  return (...args: any[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
