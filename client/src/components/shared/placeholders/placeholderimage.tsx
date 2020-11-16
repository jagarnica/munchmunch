import * as React from 'react';
import { Box, BoxProps, AspectRatioBox } from '@chakra-ui/core';
import { SiteLogo } from 'components/shared/logos';

export interface PlaceHolderImageProps extends BoxProps {
  ratio?: number;
}
/**
 * @name PlaceHolderImage
 * @description Displays the MunchMunch logo with a grey background.
 * @returns JSX.Element
 */
export const PlaceHolderImage = ({ ratio, ...rest }: PlaceHolderImageProps): JSX.Element => {
  if (!ratio)
    return (
      <Box {...rest} bg="gray.200" userSelect="none" d="flex" width="100%" justifyContent="center" alignItems="center">
        <SiteLogo as="span" fontSize="4xl" color="gray.400" clickable={false} />
      </Box>
    );
  return (
    <AspectRatioBox ratio={ratio}>
      <Box {...rest} bg="gray.200" userSelect="none" d="flex" width="100%" justifyContent="center" alignItems="center">
        <SiteLogo as="span" fontSize="4xl" color="gray.400" clickable={false} />
      </Box>
    </AspectRatioBox>
  );
};
