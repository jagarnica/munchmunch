import * as React from 'react';
import { DrawerCloseButton, DrawerHeader, DrawerBody, Button, DrawerFooter } from '@chakra-ui/react';
import { GeneralDrawer, GeneralDrawerProps } from 'components/shared/drawers';

export type CartDrawerProps = Omit<GeneralDrawerProps, 'children'>;
export function CartDrawer({ ...rest }: CartDrawerProps): JSX.Element {
  return (
    <GeneralDrawer {...rest}>
      <DrawerCloseButton />
      <DrawerHeader>Ordering from...</DrawerHeader>

      <DrawerBody>my order...</DrawerBody>

      <DrawerFooter>
        <Button isFullWidth bg="orange.400" _hover={{ bg: 'orange.500' }} _active={{ bg: 'orange.600' }} color="white">
          Checkout
        </Button>
      </DrawerFooter>
    </GeneralDrawer>
  );
}
