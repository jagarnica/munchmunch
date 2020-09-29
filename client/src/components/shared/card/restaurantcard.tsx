import React from 'react';
import { Text, Stack } from '@chakra-ui/core';
import { SmartImage } from 'components/shared/smartimage';
import { Card } from './card';

export interface RestaurantCardProps {
  title: string;
  location: string;
  image: string;
}
/**
 * @name RestaurantCard
 * @description Displays a card with the date, image, and name of the restaurant
 *
 */
export const RestaurantCard = ({ title, image, location }: RestaurantCardProps): JSX.Element => (
  <Card
    style={{ cursor: `pointer` }}
    borderRadius="4px"
    minWidth="200px"
    maxWidth="100%"
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
        {location}
      </Text>
    </Stack>
  </Card>
);
