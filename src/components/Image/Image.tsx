import { useState } from 'react';
import css from './Image.module.scss';

interface ImageProps {
  src: string;
  mobilsrc?: string;
  alt: string;
  width?: string | number;
  height?: string | number;
}

const Image: React.FC<ImageProps> = ({ src, mobilsrc = '', width, height, alt }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const imageClasses = [css.Image, isLoaded ? css.Loaded : ''].join(' ');

  const handleLoad = (): void => {
    setIsLoaded(true);
  };

  return (
    <picture className={imageClasses}>
      <source media="(min-width:1280px)" srcSet={src} />
      <source media="(max-width:1279px)" srcSet={mobilsrc ? mobilsrc : src} />
      <img src={mobilsrc ? mobilsrc : src} alt={alt} width={width} height={height} onLoad={handleLoad} />
    </picture>
  );
};

export default Image;
