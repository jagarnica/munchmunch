import React from 'react';
import { Text, Stack, Tag, TagLabel, Box, AspectRatioBox } from '@chakra-ui/core';
import { SmartImage } from 'components/shared/smartimage';
import { SiteLogo } from 'components/shared/logos';
import { Card } from './card';

export interface RestaurantCardProps {
  title: string;
  location: string;
  image?: string;
  isOpen?: boolean;
  categories?: Array<string | null>;
}
/**
 * @name RestaurantCard
 * @description Displays a card with the date, image, and name of the restaurant
 *
 */
export const RestaurantCard = ({
  title,
  image,
  location,
  isOpen,
  categories = [],
}: RestaurantCardProps): JSX.Element => {
  const showOpen = typeof isOpen === 'boolean';
  return (
    <Card
      style={{ cursor: `pointer` }}
      borderRadius="8px"
      minWidth="200px"
      borderColor="gray.200"
      borderStyle="solid"
      borderWidth="1px"
      maxWidth="100%"
      padding="0px"
      boxShadow="0px 6px 8px -6px rgba(24, 39, 75, 0.12), 0px 8px 16px -6px rgba(24, 39, 75, 0.08);"
      justifyContent="flex-start"
      overflow="hidden"
    >
      {image ? <SmartImage ratio={16 / 9} src={image} /> : <PlaceHolderImage />}

      <Stack padding="0.8rem" spacing={1}>
        <Text as="p" fontWeight="bold" fontSize="xl" color="blue.800">
          {title}
        </Text>
        {showOpen && (
          <Tag variantColor={isOpen ? `green` : `red`} alignSelf="flex-start">
            <TagLabel>{isOpen ? `Open` : `Closed`}</TagLabel>
          </Tag>
        )}

        <Text as="span" color="gray.600">
          {location}
        </Text>

        {categories ? (
          <Text color="gray.600">
            {categories.map((category, index) => {
              if (index + 1 === categories.length)
                return (
                  <Text as="span" key={category + title}>
                    {`${category}`}
                  </Text>
                );
              return (
                <Text as="span" key={category + title}>
                  {`${category} • `}
                </Text>
              );
            })}
          </Text>
        ) : null}
      </Stack>
    </Card>
  );
};

export const PlaceHolderImage = (): JSX.Element => (
  <AspectRatioBox ratio={16 / 9}>
    <Box bg="gray.200" userSelect="none" d="flex" width="100%" justifyContent="center" alignItems="center">
      <SiteLogo as="span" fontSize="4xl" color="gray.400" clickable={false} />
    </Box>
  </AspectRatioBox>
);
