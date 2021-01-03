import * as React from 'react';
import { Box, BoxProps, ComponentWithAs, Center, IconProps } from '@chakra-ui/react';

export interface BlobIconProps extends Omit<BoxProps, 'color'> {
  blob: ComponentWithAs<'svg', IconProps>;
  icon: ComponentWithAs<'svg', IconProps>;
  boxSize: BoxProps['boxSize'];
  iconColor?: string;
  blobColor?: string;
  iconSize?: BoxProps['boxSize'];
  blobSize?: BoxProps['boxSize'];
}

const StyledIcon = (
  Icon: ComponentWithAs<'svg', IconProps>,
  boxSize: BoxProps['boxSize'],
  color?: BoxProps['color']
): JSX.Element => {
  return (
    <Center position="absolute" size={boxSize}>
      <Icon boxSize={`calc(0.90 * ${boxSize})`} alignSelf="stretch" color={color} />
    </Center>
  );
};
/**
 * @name BlobIcon
 * @date January 2, 2021
 * @author Jesus Garnica
 * @description Creates an element with a blob as a the background and an icon in
 * the foreground.
 * @prop blobColor Sets the color of the blob
 * @prop iconColor Sets the color of the icon
 * @prop boxSize Sets the outer size of the element. Also sets the size of the
 * blob and the icon if they are not explicitly set.
 * @prop iconSize Sets the icon size.
 * @prop blobSize Sets the blob size.
 * @prop iconColor Sets the icon color.
 * @prop blobColor Sets the blob color.
 * @returns JSX.Element
 */
export function BlobIcon({
  boxSize,
  blobSize,
  iconColor,
  iconSize,
  blobColor,
  blob,
  icon,
}: BlobIconProps): JSX.Element {
  const bgSize = blobSize || boxSize;
  const fgSize = iconSize || `calc(0.6 * ${boxSize})`;

  const Blob = StyledIcon(blob, bgSize, blobColor);
  const Icon = StyledIcon(icon, fgSize, iconColor);
  return (
    <Box
      boxSize={boxSize || iconSize || blobSize}
      d="flex"
      position="relative"
      overflow="hidden"
      justifyContent="center"
      alignItems="center"
    >
      {Blob}
      {Icon}
    </Box>
  );
}
