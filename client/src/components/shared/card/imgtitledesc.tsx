import React from 'react';
import { Text, Stack, Box, BoxProps } from '@chakra-ui/core';
import { Card, CardDefaultStyles } from '.';

export const ImgTitleDescStyles: BoxProps = {
  ...CardDefaultStyles,
  padding: `20px 20px`,
  justifyContent: `flexStart`,
  borderRadius: `8px`,
  bg: `#fff`,
};

export interface ImgTitleDescProps extends BoxProps {
  image: JSX.Element;
  title: string;
  description: string;
  mainColor?: string;
}
/**
 * @name ImgTitleDesc
 * @description Displays a card with an image at the top, a header, and a description.
 * Also accepts all the standard props composed by the box component.
 * @prop {string} mainColor This sets the color for the header. Otherwise is just black.
 * @prop {string} title
 * @prop {string} description
 * @returns JSX.Element
 */
export const ImgTitleDesc = ({ image, title, description, mainColor, ...rest }: ImgTitleDescProps): JSX.Element => {
  return (
    <Card {...ImgTitleDescStyles} {...rest}>
      <Stack flexDirection="column" alignItems="center">
        <Box>{image}</Box>
        <Text fontWeight="bold" color={mainColor} fontSize="xl">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.600" textAlign="center">
          {description}
        </Text>
      </Stack>
    </Card>
  );
};
