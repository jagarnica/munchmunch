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
import { useQuery, gql } from '@apollo/client';
import { getFoodItem, GetFoodItemQuery, GetFoodItemQueryVariables } from './queries';

export interface FoodItemModalProps extends Omit<ModalProps, 'children'> {
  id: string;
}
export const FoodItemModal = ({ id, onClose, isOpen }: FoodItemModalProps): JSX.Element => {
  const { error, data, loading } = useQuery<GetFoodItemQuery, GetFoodItemQueryVariables>(
    gql`
      ${getFoodItem}
    `,
    {
      variables: {
        id,
      },
    }
  );
  if (error) return <ErrorModal isOpen={isOpen} onClose={onClose} />;
  if (loading)
    return (
      <Modal motionPreset="slideInBottom" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Skeleton>Loading...</Skeleton>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Skeleton>
              {' '}
              <Text>Loading...</Text>
            </Skeleton>
          </ModalBody>

          <ModalFooter>
            <Skeleton>
              <Text fontWeight="bold">Loading...</Text>
            </Skeleton>

            <Button colorScheme="blue" onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );

  if (data) {
    const { name, description, price } = data.getFoodItem;
    return (
      <Modal motionPreset="slideInBottom" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontWeight="bold" fontSize="3xl" color="gray.700">
              {name}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="gray.600">{description}</Text>
          </ModalBody>

          <ModalFooter justifyContent="space-between">
            <Text fontWeight="bold">${price}</Text>
            <Button colorScheme="blue">Add To Cart</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
};

export const ErrorModal = ({ onClose, isOpen }: Pick<ModalProps, 'onClose' | 'isOpen'>): JSX.Element => (
  <Modal motionPreset="slideInBottom" isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Error</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>Sorry there was an issue getting this item. Please try refreshing the page.</Text>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme="blue" onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);
