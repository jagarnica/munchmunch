import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  useToast,
} from '@chakra-ui/core';
import { Auth } from 'aws-amplify';
import { NavItem } from 'components/shared/navitem';
import { navigate } from 'gatsby';
import { useAppContext } from 'libs/contextLib';

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
export const CustomerOrderSideDrawer = ({ isOpen, onClose }: CustomerOrderSideDrawerProps): JSX.Element => {
  const { userHasAuthenticated, setUser } = useAppContext();
  const Toast = useToast();
  async function logOutCurrentUser(): Promise<void> {
    await Auth.signOut();
    userHasAuthenticated?.(false);
    setUser?.(undefined); // set the user to nothing
    Toast({
      duration: 2000,
      title: 'Signed out!',
      isClosable: true,
      status: 'success',
    });
    navigate('/'); // navigate to the homepage!
  }
  return (
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
            <NavItem title={'Home'} link="/" />
            <NavItem title={'Orders'} />
            <NavItem title={'Account'} />
            <NavItem title={'Payment'} />
            <NavItem title={'Sign Out'} onClick={logOutCurrentUser} />
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
