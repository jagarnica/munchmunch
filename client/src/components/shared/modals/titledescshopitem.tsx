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
  Stack,
} from '@chakra-ui/react';
import { NumberInput } from 'components/shared/inputs';

export interface TitleDescShopItemProps extends Omit<ModalProps, 'children'> {
  header?: string | React.ReactNode;
  footer?: React.ReactNode;
  error?: boolean;
  title?: string;
  description?: string | null;
  price?: number;
  min: number;
  max: number;
  onAddCart?: () => void;
  defaultValue: number;
  onQuantityChange?: (val: number) => void;
  id?: string;
  isLoading?: boolean;
}
/**
 * @name TitleDescShopItem
 * @description Displays a modal with it's title, desc, and price.
 * @returns JSX.Element
 */
export const TitleDescShopItem = ({
  title,
  description,
  onClose,
  price,
  min,
  max,
  onAddCart,
  defaultValue,
  isLoading,
  onQuantityChange,
  error,
  ...rest
}: TitleDescShopItemProps): JSX.Element => {
  const headerName = error ? 'Error' : title;
  const modalText = error ? `Sorry there was an issue getting this item. Please try refreshing the page.` : description;
  const isLoaded = !isLoading;
  const placeholderText = 'Loading...';

  function handleQuantityChange(valueAsString: string, valueAsNumber: number) {
    onQuantityChange?.(valueAsNumber);
  }

  return (
    <Modal onClose={onClose} {...rest}>
      <ModalOverlay />
      <ModalContent overflow="hidden">
        <ModalHeader>
          <Stack spacing={3}>
            <Skeleton maxW="calc(100% - 32px)" isLoaded={isLoaded}>
              {
                // Product Name
              }
              <Text fontSize="3xl" color="gray.700">
                {isLoaded ? headerName : placeholderText}
              </Text>
            </Skeleton>
            <Skeleton isLoaded={isLoaded}>
              <Text fontSize="lg" fontWeight="regular" color="gray.600">
                {isLoaded ? modalText : placeholderText}
              </Text>
              <Text color="gray.700" fontSize="xl" fontWeight="bold">
                ${price || `loading...`}
              </Text>
            </Skeleton>
          </Stack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody></ModalBody>
        <ModalFooter
          borderTop="1px solid"
          borderTopColor="gray.200"
          boxShadow="rgba(0, 0, 0, 0.22) 0px 15px 40px"
          flexDir="row"
          justifyContent="space-between"
        >
          {error ? (
            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          ) : (
            <>
              <Skeleton isLoaded={isLoaded} w="100%" d="flex" justifyContent="space-between" alignItems="center">
                <NumberInput
                  onChange={handleQuantityChange}
                  maxWidth="140px"
                  min={min}
                  defaultValue={defaultValue}
                  max={max}
                />

                <Button onClick={onAddCart} colorScheme="blue">
                  Add To Cart
                </Button>
              </Skeleton>
            </>
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
