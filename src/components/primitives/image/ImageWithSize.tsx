import type { FC } from 'react';

import {
  ImageWithFallback,
  type ImageWithFallbackProps
} from '@/components/primitives/image';

interface ImageSizeProps extends ImageWithFallbackProps {
  imgSize?: 'small' | 'normal' | 'large';
}

const ImageWithSize: FC<ImageSizeProps> = ({
  src,
  alt,
  imgSize = 'normal',
  aspectRatio,
  blurCompatibilityMode,
  ...rest
}) => {
  let width;

  switch (imgSize) {
    case 'small':
      width = 50;
      break;
    case 'normal':
      width = 340;
      break;
    case 'large':
    default:
      width = 720;
      break;
  }

  const height = Math.round(width / aspectRatio);
  return (
    <ImageWithFallback
      src={src}
      alt={alt}
      aspectRatio={aspectRatio}
      blurCompatibilityLevel={blurCompatibilityMode ? 'high' : 'none'}
      width={width}
      height={height}
      {...rest}
    />
  );
}

export default ImageWithSize;