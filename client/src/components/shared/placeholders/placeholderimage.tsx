import * as React from 'react';
import { Box, BoxProps, AspectRatio } from '@chakra-ui/react';
import { SiteLogo } from 'components/shared/logos';

export interface PlaceHolderImageProps extends BoxProps {
  ratio?: number;
}
/**
 * @name PlaceHolderImage
 * @description Displays the MunchMunch logo with a grey background.
 * @returns JSX.Element
 */
export const PlaceHolderImage = ({ ratio, fontSize = '4xl', ...rest }: PlaceHolderImageProps): JSX.Element => {
  if (!ratio)
    return (
      <Box {...rest} bg="gray.200" userSelect="none" d="flex" width="100%" justifyContent="center" alignItems="center">
        <SiteLogo as="span" fontSize={fontSize} color="gray.400" clickable={false} />
      </Box>
    );
  return (
    <AspectRatio ratio={ratio}>
      <Box {...rest} bg="gray.200" userSelect="none" d="flex" width="100%" justifyContent="center" alignItems="center">
        <SiteLogo as="span" fontSize={fontSize} color="gray.400" clickable={false} />
      </Box>
    </AspectRatio>
  );
};
