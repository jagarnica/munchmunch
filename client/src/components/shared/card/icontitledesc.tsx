import React from 'react';
import { Box, Icon } from '@chakra-ui/core';
import { ImgTitleDesc, ImgTitleDescProps } from './imgtitledesc';

export interface IconTitleDescProps extends Omit<ImgTitleDescProps, 'image'> {
  iconName: string;
  iconSize?: string;
  iconBgColor?: string;
}
/**
 * @name IconTitleDesc
 * @description Displays an icon with a round background followed by the title and
 * description. It is composed on top of the ImgTitleDesc component. Also accepts
 * all the standard props from the BoxProps
 * @prop {string} iconName Used to find which icon to use from chakra-ui
 * @prop {string} iconSize Optionally sets the icon size.
 * @prop {string} iconBgColor Sets the background color, is transparent otherwise.
 * @prop {string} title
 * @prop {string} description
 * @returns JSX.Element
 */
export const IconTitleDesc = ({
  iconName,
  title,
  description,
  mainColor,
  iconSize,
  iconBgColor = 'transparent',
  ...rest
}: IconTitleDescProps): JSX.Element => {
  return (
    <ImgTitleDesc
      {...rest}
      image={
        <Box
          padding="1.2em"
          display="flex"
          justifyContent="center"
          alignItems="center"
          bg={iconBgColor}
          borderRadius="50%"
        >
          <Icon name={iconName} color={mainColor} size={iconSize} />
        </Box>
      }
      title={title}
      mainColor={mainColor}
      description={description}
    />
  );
};
