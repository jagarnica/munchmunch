import React, { useEffect } from 'react';
import { Image, ImageProps, Flex, Skeleton, BoxProps } from '@chakra-ui/react';
import { AspectRatioBox } from 'components/shared/aspectratiobox';

export interface SmartImageProps extends ImageProps {
  ratio?: number;
  src: string;
  boxProps?: BoxProps;
}
/**
 * @name LazyImage
 * @description Apply an aspect ratio to be respect to the image. It also has a built in placeholder
 * while the image has finished loading.
 * @author Jesus Garnica
 * @prop {number} ratio Sets the aspect ratio for the image.
 * @prop {string} src This is the image src.
 */
export function SmartImage({ src, ratio, onLoad, boxProps, ...rest }: SmartImageProps): JSX.Element {
  const [isLoaded, setIsLoaded] = React.useState(false);
  useEffect(() => {
    setIsLoaded(false);
  }, [src]);
  function handleIsLoaded(event: React.SyntheticEvent<HTMLImageElement, Event>) {
    if (!isLoaded) setIsLoaded(true);
    onLoad?.(event); // call the passed in onload function if it exists
  }
  const ImageContents = (
    <Flex bg="#E2E8F0" alignItems="stretch" justifyContent="stretch" height="100%" {...boxProps}>
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
  );
  if (!ratio)
    // Remove the AspectRatioBox
    return ImageContents;

  return <AspectRatioBox ratio={ratio}>{ImageContents}</AspectRatioBox>;
}
