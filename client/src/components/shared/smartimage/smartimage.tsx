import React, { useEffect } from 'react';
import { Image, ImageProps, Flex, Skeleton } from '@chakra-ui/core';
import { AspectRatioBox } from 'components/shared/aspectratiobox';

export interface SmartImageProps extends ImageProps {
  ratio?: number;
  src: string;
}
/**
 * @name LazyImage
 * @description Apply an aspect ratio to be respect to the image. It also has a built in placeholder
 * while the image has finished loading.
 * @author Jesus Garnica
 * @prop {number} ratio Sets the aspect ratio for the image.
 * @prop {string} src This is the image src.
 */
export function SmartImage({ src, ratio, onLoad, ...rest }: SmartImageProps): JSX.Element {
  const [isLoaded, setIsLoaded] = React.useState(false);
  useEffect(() => {
    setIsLoaded(false);
  }, [src]);
  function handleIsLoaded() {
    if (!isLoaded) setIsLoaded(true);
    onLoad?.(); // call the passed in onload function if it exists
  }

  return (
    <AspectRatioBox ratio={ratio}>
      <Flex bg="#E2E8F0" alignItems="stretch" justifyContent="stretch" height="100%">
        <Skeleton width="100%" height="100%" isLoaded={isLoaded}>
          <Image
            loading="lazy"
            onLoad={handleIsLoaded}
            src={src}
            height="100%"
            width="100%"
            objectFit="cover"
            {...rest}
          />
        </Skeleton>
      </Flex>
    </AspectRatioBox>
  );
}
