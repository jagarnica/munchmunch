import { Link } from 'gatsby';
import * as React from 'react';
import { HamburgerButton } from 'components/shared/buttons';
import { Button, Box, useDisclosure, Text, Stack, Center, useBreakpointValue } from '@chakra-ui/react';
import { useAppContext } from 'libs/contextLib';
import { ShoppingCart } from 'images/tsxicons';
import { useSiteTitle } from 'utils/hooks/queries';
import { CartDrawer } from 'components/order/cart';
import { PublicSideMenuDrawer } from './publicnav';
import { CustomerOrderSideDrawer } from './privatenav';

export const SiteLogo = (): JSX.Element => {
  const title = useSiteTitle();
  return (
    <Text fontSize="2xl" fontFamily="Lobster" m="0" color="gray.700">
      <Link
        to="/"
        style={{
          color: `inherit`,
          textDecoration: `none`,
        }}
      >
        {title}
      </Link>
    </Text>
  );
};
export function Header(): React.ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: cartOpen, onOpen: onOpenCart, onClose: onCloseCart } = useDisclosure();
  const cartSize = useBreakpointValue({ base: 'md', sm: 'sm' });
  const { state } = useAppContext(); // we are only using it if it not null
  const isAuthenticated = !!state?.isAuthenticated;
  React.useEffect(() => {
    // if the user changes authentication state we need to reset the drawer
    if (isOpen) onClose();
  }, [isAuthenticated]);
  return (
    <>
      <Box
        zIndex={10}
        background="white"
        marginBottom="1.45rem"
        borderBottomWidth="1px"
        borderBottomColor="header.borderColor"
        d="flex"
        p="16px"
        position="relative"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box width="67px">
          <HamburgerButton onClick={onOpen} />
        </Box>

        <Box flex="1" position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
          <Center>
            <SiteLogo />
          </Center>
        </Box>

        <Box d="inline-grid" alignSelf="flex-end" gridColumnGap="8px" gridTemplateRows="1fr" gridAutoFlow="column">
          <Button
            aria-label="cart"
            bg="orange.400"
            _hover={{ bg: 'orange.500' }}
            _active={{ bg: 'orange.600' }}
            color="white"
            onClick={onOpenCart}
          >
            <Stack direction="row">
              <ShoppingCart boxSize="18px" alt="shopping cart" />
              <Text>0</Text>
            </Stack>
          </Button>
        </Box>
      </Box>
      {
        // This sets the side drawer contents depending if the user is logged in or not
      }
      {isAuthenticated ? (
        <CustomerOrderSideDrawer isOpen={isOpen} onClose={onClose} />
      ) : (
        <PublicSideMenuDrawer isOpen={isOpen} placement="left" onClose={onClose} />
      )}
      <CartDrawer size={cartSize} isOpen={cartOpen} onClose={onCloseCart} />
    </>
  );
}
