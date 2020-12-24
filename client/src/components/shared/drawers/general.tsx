import * as React from 'react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerProps } from '@chakra-ui/react';

export type GeneralDrawerProps = DrawerProps;
/**
 * @name GeneralDrawer
 * @description Basic drawer with nothing in it. Handy so one does not have to repeatedly
 * type out the needed basics for creating a drawer with chakra ui.
 * @returns JSX.Element
 */
export function GeneralDrawer({ children, ...rest }: GeneralDrawerProps): JSX.Element {
  return (
    <Drawer {...rest}>
      <DrawerOverlay>
        <DrawerContent>{children}</DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
}
