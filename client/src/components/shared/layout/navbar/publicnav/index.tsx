import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';
import {
  Drawer,
  IDrawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  DrawerContent,
  Button,
} from '@chakra-ui/react';

export interface PublicSideMenuDrawerProps extends Omit<IDrawer, 'children'> {
  isOpen: boolean;
  onClose: () => void;
}
export const PublicSideMenuDrawer = ({ isOpen, onClose, ...rest }: PublicSideMenuDrawerProps): JSX.Element => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} {...rest}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>MunchMunch</DrawerHeader>
        <StyledDrawerBody display={{ base: 'flex' }} flexDirection="column" alignItems="stretch" alignContent="stretch">
          <PublicSideMenuItems />
        </StyledDrawerBody>
        <DrawerFooter />
      </DrawerContent>
    </Drawer>
  );
};

export const PublicSideMenuItems = (): JSX.Element => {
  return (
    <>
      <Button
        className="loginButton"
        variant="outline"
        onClick={() => {
          navigate('/auth/login');
        }}
      >
        Log In
      </Button>
      <Button
        onClick={() => {
          navigate('/auth/signup');
        }}
      >
        Sign Up
      </Button>
    </>
  );
};
const StyledDrawerBody = styled(DrawerBody)`
  button {
    margin: 8px 0;
  }
`;
