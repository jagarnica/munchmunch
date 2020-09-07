import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
} from '@chakra-ui/core';
import { NavItem } from 'components/general/navitem';

export interface CustomerOrderSideDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
/**
 * @name CustomerOrderSideDrawer
 * @description Has all the jsx elements shown on the side drawer for the user's navigation
 * when ordering food. Note this does have the drawer overlay, content, etc.
 * @returns {JSX.Element}
 */
export const CustomerOrderSideDrawer = ({ isOpen, onClose }: CustomerOrderSideDrawerProps): JSX.Element => (
  <>
    <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader fontFamily="lobster">MunchMunch</DrawerHeader>
        <DrawerBody
          display={{ base: 'flex' }}
          flexDirection="column"
          alignItems="stretch"
          alignContent="stretch"
          padding="0px !important"
        >
          <NavItem title={'Home'} />
          <NavItem title={'Orders'} />
          <NavItem title={'Account'} />
          <NavItem title={'Payment'} />
          <NavItem title={'Sign Out'} />
        </DrawerBody>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  </>
);
