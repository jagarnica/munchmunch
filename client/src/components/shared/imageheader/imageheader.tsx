import * as React from 'react';
import { Box, BoxProps } from '@chakra-ui/core';
import { PlaceHolderImage } from 'components/shared/placeholders/';
import { SmartImage } from 'components/shared/smartimage';

export interface ImageHeaderProps extends BoxProps {
  imageUrl?: string;
  placeHolder?: React.Component;
}
export const ImageHeader = ({ imageUrl, placeHolder, ...rest }: ImageHeaderProps): JSX.Element => {
  const PlaceHolder = placeHolder || <PlaceHolderImage w="100%" />;
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      width="100%"
      d="flex"
      minHeight="100%"
      height={{ base: 200, md: 300, lg: 400 }}
      {...rest}
    >
      {imageUrl ? <SmartImage boxProps={{ w: '100%' }} src={imageUrl} objectFit="cover" /> : PlaceHolder}
    </Box>
  );
};
