import React from 'react';
import { Text, Stack } from '@chakra-ui/core';
import { SmartImage } from 'components/shared/smartimage';
import { Card } from './card';

export interface OrderHistoryCardProps {
  title: string;
  orderDate: string;
  image: string;
}
/**
 * @name OrderHistoryCard
 * @description Displays a card with the date, image, and name of the restaurant
 *
 */
export const OrderHistoryCard = ({ title, orderDate, image }: OrderHistoryCardProps): JSX.Element => (
  <Card
    borderRadius="4px"
    minWidth="200px"
    maxWidth="220px"
    padding="0px"
    justifyContent="flex-start"
    overflow="hidden"
  >
    <SmartImage ratio={16 / 9} src={image} />
    <Stack padding="0.8rem" spacing={0.5}>
      <Text as="span" fontWeight="bold" fontSize="large" color="gray.700">
        {title}
      </Text>
      <Text as="span" color="gray.600">
        {orderDate}
      </Text>
    </Stack>
  </Card>
);
