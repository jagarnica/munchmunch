import React from 'react';
import { Image, Flex, Skeleton } from '@chakra-ui/core';
import LazyLoad, { LazyLoadProps } from 'react-lazyload';
import { AspectRatioBox } from 'components/shared/aspectratiobox';

export interface LazyImageProps {
  ratio?: number;
  offset?: number;
  lazyLoadProps?: Partial<LazyLoadProps>;
  src: string;
}

/**
 * @name LazyImage
 * @description Apply an aspect ratio to be respect to the image. It also has a built in placeholder
 * while the image has finished loading.
 * @author Jesus Garnica
 * @prop {number} ratio Sets the aspect ratio for the image.
 * @prop {object} lazyLoadProps If you want to control the lazy load behavior more directly you can apply this.
 * @prop {string} src This is the image src.
 * @prop {number} offset Sets how soon things should relative to the viewport. Default is 500.
 */
export function SmartImage({ src, offset = 500, ratio, lazyLoadProps, ...rest }: LazyImageProps): JSX.Element {
  return (
    <AspectRatioBox ratio={ratio}>
      <Flex bg="#E2E8F0" alignItems="stretch" justifyContent="stretch" height="100%">
        <LazyLoad
          height="100%"
          offset={offset}
          throttle={150}
          once
          {...lazyLoadProps}
          placeholder={<Skeleton height="100%" width="100%" />}
        >
          <Image src={src} height="100%" width="100%" objectFit="cover" {...rest} />
        </LazyLoad>
      </Flex>
    </AspectRatioBox>
  );
}
