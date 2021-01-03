import * as React from 'react';
import { DrawerCloseButton, DrawerHeader, VStack, DrawerBody, Text, Button, DrawerFooter } from '@chakra-ui/react';
import { GeneralDrawer, GeneralDrawerProps } from 'components/shared/drawers';
import { ShoppingBag } from 'images/tsxicons';
import { RockBlob } from 'images/blobs';
import { BlobIcon } from 'components/shared/blobicon';

export type CartDrawerProps = Omit<GeneralDrawerProps, 'children'>;
export function CartDrawer({ ...rest }: CartDrawerProps): JSX.Element {
  const cartItems = null;

  return (
    <GeneralDrawer {...rest}>
      <DrawerCloseButton size="lg" />
      {!!cartItems && <DrawerHeader>Ordering from...</DrawerHeader>}

      <DrawerBody d="flex">
        {cartItems ? (
          <Text fontWeight="bold" color="blue.700">
            You are ordering from:
          </Text>
        ) : (
          <>
            <VStack alignSelf="center" w="100%">
              <BlobIcon iconColor="gray.400" blobColor="gray.100" boxSize="9.5rem" blob={RockBlob} icon={ShoppingBag} />

              <Text fontWeight="bold" color="gray.500" textAlign="center">{`You're cart is currently empty.`}</Text>
            </VStack>
          </>
        )}
      </DrawerBody>

      {!!cartItems && (
        <DrawerFooter>
          <Button
            isFullWidth
            bg="orange.400"
            _hover={{ bg: 'orange.500' }}
            _active={{ bg: 'orange.600' }}
            color="white"
          >
            Checkout
          </Button>
        </DrawerFooter>
      )}
    </GeneralDrawer>
  );
}
