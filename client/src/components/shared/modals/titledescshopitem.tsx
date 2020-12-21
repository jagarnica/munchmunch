import * as React from 'react';
import {
  Modal,
  ModalProps,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  Skeleton,
  Text,
} from '@chakra-ui/react';

export interface TitleDescShopItemProps extends Omit<ModalProps, 'children'> {
  header?: string | React.ReactNode;
  footer?: React.ReactNode;
  error?: boolean;
  title?: string;
  description?: string | null;
  price?: number;
  id?: string;
  isLoading?: boolean;
}
export const TitleDescShopItem = ({
  title,
  description,
  onClose,
  price,
  isLoading,
  error,
  ...rest
}: TitleDescShopItemProps): JSX.Element => {
  const headerName = error ? 'Error' : title;
  const modalText = error ? `Sorry there was an issue getting this item. Please try refreshing the page.` : description;
  const isLoaded = !isLoading;
  const placeholderText = 'Loading...';
  return (
    <Modal motionPreset="slideInBottom" onClose={onClose} {...rest}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Skeleton maxW="calc(100% - 32px)" isLoaded={isLoaded}>
            {
              // Product Name
            }
            <Text fontSize="2xl" color="grey.700">
              {isLoaded ? headerName : placeholderText}
            </Text>
          </Skeleton>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Skeleton isLoaded={isLoaded}>
            {
              // Product Description
            }
            <Text color="gray.600">{isLoaded ? modalText : placeholderText}</Text>
          </Skeleton>
        </ModalBody>
        <ModalFooter flexDir="row" justifyContent="space-between">
          {error ? (
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          ) : (
            <>
              <Skeleton isLoaded={isLoaded} w="100%" d="flex" justifyContent="space-between" alignItems="center">
                <Text color="gray.700" fontSize="xl" fontWeight="bold">
                  ${price || `loading...`}
                </Text>
                <Button colorScheme="blue">Add To Cart</Button>
              </Skeleton>
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
