import { Link } from 'gatsby';
import React from 'react';
import { HamburgerButton } from 'components/shared/buttons';
import styled from 'styled-components';
import { Button, Box, Flex, useDisclosure, Text } from '@chakra-ui/core';
import { useAppContext } from 'libs/contextLib';
import { PublicSideMenuItems, PublicSideMenuDrawer } from './publicnav';
import { CustomerOrderSideDrawer } from './privatenav';

export const SiteLogo = ({ title }: { title?: string }): JSX.Element => (
  <Text fontSize="2xl" style={{ margin: 0, fontFamily: `Lobster` }}>
    <Link
      to="/"
      style={{
        color: `black`,
        textDecoration: `none`,
      }}
    >
      {title}
    </Link>
  </Text>
);
export function Header({ siteTitle }: { siteTitle?: string }): React.ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { state } = useAppContext(); // we are only using it if it not null
  const isAuthenticated = !!state?.isAuthenticated;

  return (
    <>
      <Box
        zIndex={10}
        background="white"
        marginBottom="1.45rem"
        borderBottomWidth="1px"
        borderBottomColor="header.borderColor"
      >
        <NavigationContainer>
          {isAuthenticated ? (
            <>
              <Flex>
                <HamburgerButton onClick={onOpen} />
              </Flex>
              <SiteLogo title={siteTitle} />
              <Flex flexDirection="row" alignItems="center" justifyContent="center">
                <ButtonsContainer>
                  <Button>CART</Button>
                </ButtonsContainer>
              </Flex>
            </>
          ) : (
            <>
              <SiteLogo title={siteTitle} />
              <Flex
                display={{ base: 'none', sm: 'flex' }}
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
              >
                <ButtonsContainer>
                  <PublicSideMenuItems />
                </ButtonsContainer>
              </Flex>
              <Flex display={{ base: `flex`, sm: 'none' }}>
                <HamburgerButton onClick={onOpen} />
              </Flex>
            </>
          )}
        </NavigationContainer>
      </Box>
      {isAuthenticated ? (
        <CustomerOrderSideDrawer isOpen={isOpen} onClose={onClose} />
      ) : (
        <PublicSideMenuDrawer isOpen={isOpen} placement="right" onClose={onClose} />
      )}
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

const ButtonsContainer = styled.div`
  display: inline-grid;
  grid-column-gap: 8px;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
`;
