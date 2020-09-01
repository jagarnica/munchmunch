import { Link, navigate } from 'gatsby';
import React from 'react';
import { HamburgerButton } from 'components/general/buttons/';
import styled from 'styled-components';
import {
  Button,
  useTheme,
  Flex,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/core';
import { useAppContext } from 'libs/contextLib';

const navigateToPage = (link: string) => {
  navigate(link);
};
export function Header({ siteTitle }: { siteTitle?: string }): React.ReactElement {
  const { colors } = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated } = useAppContext(); // we are only using it if it not null

  const MenuItems = isAuthenticated ? (
    <Button variant="outline">Cart</Button>
  ) : (
    <>
      <Button
        className="loginButton"
        variant="outline"
        onClick={() => {
          navigateToPage('/login');
        }}
      >
        Log In
      </Button>
      <Button
        onClick={() => {
          navigateToPage('/signup');
        }}
      >
        Sign Up
      </Button>
    </>
  );
  if (isAuthenticated) {
    return (
      <HeaderContainer borderColor={colors.gray[700]}>
        <NavigationContainer>
          <Flex>
            <HamburgerButton onClick={onOpen} />
          </Flex>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <Flex flexDirection="row" alignItems="center" justifyContent="center">
            <ButtonsContainer>
              <Button>CART</Button>
            </ButtonsContainer>
          </Flex>
        </NavigationContainer>
      </HeaderContainer>
    );
  }
  return (
    <>
      <HeaderContainer borderColor={colors.gray[700]}>
        <NavigationContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `black`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <Flex display={{ base: 'none', sm: 'flex' }} flexDirection="row" alignItems="center" justifyContent="center">
            <ButtonsContainer>{MenuItems}</ButtonsContainer>
          </Flex>
          <Flex display={{ base: `flex`, sm: 'none' }}>
            <HamburgerButton onClick={onOpen} />
          </Flex>
        </NavigationContainer>
      </HeaderContainer>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>MunchMunch</DrawerHeader>
          <StyledDrawerBody
            display={{ base: 'flex' }}
            flexDirection="column"
            alignItems="stretch"
            alignContent="stretch"
          >
            {MenuItems}
          </StyledDrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 16px;
`;
const HeaderContainer = styled.header<{ borderColor?: string }>`
  margin-bottom: 1.45rem;
  border-bottom: 1px solid ${props => props.borderColor};
`;
const ButtonsContainer = styled.div`
  display: inline-grid;
  grid-column-gap: 8px;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
`;
const StyledDrawerBody = styled(DrawerBody)`
  button {
    margin: 8px 0;
  }
`;
