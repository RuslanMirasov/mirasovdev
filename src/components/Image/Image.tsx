import { useState } from 'react';
import css from './Image.module.scss';

interface ImageProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const Image: React.FC<ImageProps> = ({ src, width, height, alt }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const imageClasses = [css.Image, isLoaded ? css.Loaded : ''].join(' ');

  const handleLoad = (): void => {
    setIsLoaded(true);
  };

  return (
    <div className={imageClasses}>
      <img src={src} alt={alt} width={width} height={height} onLoad={handleLoad} />
    </div>
  );
};

export default Image;
