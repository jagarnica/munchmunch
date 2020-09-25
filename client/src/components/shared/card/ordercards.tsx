import React from 'react';
import { Text, Stack, Icon, Flex } from '@chakra-ui/core';
import { SmartImage } from 'components/shared/smartimage';
import { AspectRatioBox } from 'components/shared/aspectratiobox/';
import { Card } from './card';

export interface OrderHistoryCardProps {
  title: string;
  orderDate: string;
  image: string;
}
/**
 * @name OrderHistoryCard
 * @description Displays a card with the date, image, and name of the restaurant
 * @param param0
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
/**
 * @name OrderHistoryPlaceholder
 * @description This is useful to display incase the user has no orders yet.
 */
export const OrderHistoryPlaceholder = (): JSX.Element => {
  return (
    <Card
      borderRadius="4px"
      minWidth="200px"
      bg="#F7FAFC"
      maxWidth="220px"
      padding="0px"
      boxShadow="none"
      justifyContent="flex-start"
    >
      <AspectRatioBox>
        <Flex height="100%" justifyContent="center" alignItems="center" flexDirection="column">
          <Icon name="happytakeoutbox" size="57px" color="gray.500" />
          <Text marginTop="12px" fontWeight="bold" as="span" color="gray.500">
            No orders yet!
          </Text>
        </Flex>
      </AspectRatioBox>
    </Card>
  );
};
