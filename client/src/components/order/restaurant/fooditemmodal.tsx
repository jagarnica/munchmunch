import * as React from 'react';
import { TitleDescShopItem } from 'components/shared/modals';
import { ModalProps } from '@chakra-ui/react';
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

  return (
    <TitleDescShopItem
      error={!!(error || data?.getFoodItem === null)}
      isOpen={isOpen}
      onClose={onClose}
      isLoading={loading}
      title={data?.getFoodItem?.name}
      price={data?.getFoodItem?.price}
      description={data?.getFoodItem?.description}
    />
  );
};
