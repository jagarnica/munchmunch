import { Link } from 'gatsby';
import React from 'react';
import { HamburgerButton } from 'components/general/buttons/';
import styled from 'styled-components';
import { Button, useTheme, Flex, useDisclosure, DrawerBody, Text } from '@chakra-ui/core';
import { useAppContext } from 'libs/contextLib';
import { PublicSideMenuItems, PublicSideMenuDrawer } from 'components/layout/navbar/publicnav';
import { CustomerOrderSideDrawer } from 'components/layout/navbar/privatenav';

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
  const { colors } = useTheme();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuthenticated } = useAppContext(); // we are only using it if it not null

  return (
    <>
      <HeaderContainer borderColor={colors.gray[700]}>
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
      </HeaderContainer>
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
