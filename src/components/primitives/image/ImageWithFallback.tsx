'use client';

/* eslint-disable jsx-a11y/alt-text */

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type FC
} from 'react';

import { useAppState } from '@/config/state/AppState';

import Image, { type ImageProps } from 'next/image';

import { cn } from '@/utils/cn';

export interface ImageWithFallbackProps extends ImageProps {
  aspectRatio: number;
  blurCompatibilityMode?: boolean;
  blurCompatibilityLevel?: 'none' | 'low' | 'high';
  imgClassName?: string;
}

const BLUR_ENABLED = true;

const ImageWithFallback: FC<ImageWithFallbackProps> = ({
  aspectRatio,
  blurCompatibilityMode,
  blurCompatibilityLevel,
  className,
  imgClassName,
  src,
  alt,
  blurDataURL,
  priority,
  ...rest
}) => {
  const { shouldDebugImageFallbacks } = useAppState();

  const [wasCached, setWasCached] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [didError, setDidError] = useState<boolean>(false);

  const onLoad = useCallback(() => setIsLoading(false), []);
  const onError = useCallback(() => setDidError(true), []);

  const [hideFallback, setHideFallback] = useState<boolean>(false);

  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const timeout = setTimeout(
      () => setWasCached(imgRef.current?.complete ?? false),
      100,
    );
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoading && !didError) {
      const timeout = setTimeout(() => {
        setHideFallback(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isLoading, didError]);

  const showFallback =
    !wasCached &&
    !hideFallback;

  const getBlurClass = () => {
    switch (blurCompatibilityLevel) {
      case 'high':
        return 'blur-[4px] xs:blue-md scale-[1.05]';
      case 'low':
        return 'blur-[2px] xs:blue-md scale-[1.01]';
    }
  };

  return (
    <div className={cn(
      'flex relative',
      className
    )}>
      {(showFallback || shouldDebugImageFallbacks) && (
        <div className={cn(
          'container',
          'absolute inset-0',
          'overflow-hidden',
          'transition-opacity duration-300 ease-in',
          !(BLUR_ENABLED && blurDataURL) && 'bg-purple-300',
          (isLoading || shouldDebugImageFallbacks)
            ? 'opacity-100'
            : 'opacity-0',
        )}>
          {BLUR_ENABLED && blurDataURL ? (
            <img
              src={blurDataURL}
              className={cn(
                imgClassName,
                getBlurClass()
              )} {...rest}
            />
          ) : (
            <div className={cn(
              'w-full h-full',
              'bg-red-400',
            )} />
          )}
        </div>
      )}
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        priority={priority}
        className={imgClassName}
        onLoad={onLoad}
        onError={onError}
        {...rest}
      />
    </div>
  );
}

export default ImageWithFallback;