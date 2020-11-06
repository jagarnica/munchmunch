import React from 'react';
import { Text, Stack, Tag, TagLabel, Box, Icon } from '@chakra-ui/core';
import { SmartImage } from 'components/shared/smartimage';
import { Card } from './card';

export interface RestaurantCardProps {
  title: string;
  location: string;
  image: string;
  isOpen?: boolean;
  tags?: string[];
}
/**
 * @name RestaurantCard
 * @description Displays a card with the date, image, and name of the restaurant
 *
 */
export const RestaurantCard = ({ title, image, location, isOpen, tags = [] }: RestaurantCardProps): JSX.Element => {
  const showOpen = typeof isOpen === 'boolean';
  return (
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
        <Text as="p" fontWeight="bold" fontSize="large" color="gray.700">
          {title}
        </Text>
        {showOpen && (
          <Tag variantColor={isOpen ? `green` : `red`} alignSelf="flex-start">
            <TagLabel>{isOpen ? `Open` : `Closed`}</TagLabel>
          </Tag>
        )}
        <Box>
          <Icon name="location" />
          <Text as="span" color="gray.600">
            {location}
          </Text>
        </Box>

        {tags ? (
          <Text color="gray.600" as="span">
            {tags.map((tag, index) => {
              if (index + 1 === tags.length)
                return (
                  <Text as="span" key={tag + title}>
                    {`${tag}`}
                  </Text>
                );
              return (
                <Text as="span" key={tag + title}>
                  {`${tag} • `}
                </Text>
              );
            })}
          </Text>
        ) : null}
      </Stack>
    </Card>
  );
};
