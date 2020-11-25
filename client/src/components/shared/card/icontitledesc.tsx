import React from 'react';
import { Box } from '@chakra-ui/react';
import { ImgTitleDesc, ImgTitleDescProps } from './imgtitledesc';

export interface IconTitleDescProps extends Omit<ImgTitleDescProps, 'image' | 'iconSize'> {
  icon?: JSX.Element;
  iconBgColor?: string;
}
/**
 * @name IconTitleDesc
 * @description Displays an icon with a round background followed by the title and
 * description. It is composed on top of the ImgTitleDesc component. Also accepts
 * all the standard props from the BoxProps
 * @prop {CustomChakraIcon} icon Set the icon to the one passed in.
 * @prop {string} iconBgColor Sets the background color, is transparent otherwise.
 * @prop {string} title
 * @prop {string} description
 * @returns JSX.Element
 */
export const IconTitleDesc = ({
  title,
  description,
  mainColor,
  icon,
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
          {icon || null}
        </Box>
      }
      title={title}
      mainColor={mainColor}
      description={description}
    />
  );
};
