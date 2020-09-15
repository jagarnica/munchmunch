import React from 'react';
import { Text, SimpleGrid } from '@chakra-ui/core';
import { SmartImage } from 'components/shared/smartimage';
import { Card } from './card';

export interface OrderHistoryCardProps {
  title: string;
  orderDate: string;
}

export const OrderHistoryCard = ({ title, orderDate }: OrderHistoryCardProps): JSX.Element => (
  <Card borderRadius="4px" minWidth="200px" maxWidth="250px" padding="0px">
    <SmartImage
      ratio={16 / 9}
      src="https://static.wixstatic.com/media/8b90a9_2c0bd332fa1740578e1c273eb5c7cd92~mv2.jpg/v1/fill/w_1100,h_426,al_c,q_85/8b90a9_2c0bd332fa1740578e1c273eb5c7cd92~mv2.webp"
    />

    <SimpleGrid padding="1.0rem">
      <Text fontWeight="bold" size="large" color="grey.700">
        {title}
      </Text>
      <Text color="grey.400">{orderDate}</Text>
    </SimpleGrid>
  </Card>
);
