import React from 'react';
import { Text, Stack, Tag, TagLabel, BoxProps, Skeleton } from '@chakra-ui/react';
import { SmartImage } from 'components/shared/smartimage';
import { PlaceHolderImage } from 'components/shared/placeholders';
import { Card } from './card';

export interface RestaurantCardProps extends BoxProps {
  title: string;
  location: string;
  image?: string;
  isLoading?: boolean;
  isOpen?: boolean;
  categories?: Array<string | null>;
}
/**
 * @name RestaurantCard
 * @description Displays a card with the date, image, and name of the restaurant.
 * Also it has a builtin skeleton, useful to show something is loading
 *
 */
export const RestaurantCard = ({
  title,
  image,
  location,
  isOpen,
  isLoading = false,
  categories = [],
  ...rest
}: RestaurantCardProps): JSX.Element => {
  const showOpen = typeof isOpen === 'boolean';
  const showSkeleton = !isLoading;
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
      {...rest}
    >
      <Skeleton isLoaded={showSkeleton}>
        {image ? <SmartImage ratio={16 / 9} src={image} /> : <PlaceHolderImage ratio={16 / 9} />}
      </Skeleton>

      <Stack padding="0.8rem" spacing={1}>
        <Skeleton isLoaded={showSkeleton} width={showSkeleton ? '' : `60%`}>
          <Text as="p" fontWeight="bold" fontSize="xl" color="blue.800">
            {title}
          </Text>
        </Skeleton>
        <Skeleton isLoaded={showSkeleton} maxWidth={showSkeleton ? '' : `30%`}>
          {showOpen && (
            <Tag colorScheme={isOpen ? `green` : `red`} alignSelf="flex-start">
              <TagLabel>{isOpen ? `Open` : `Closed`}</TagLabel>
            </Tag>
          )}
        </Skeleton>
        <Skeleton isLoaded={showSkeleton} maxWidth={showSkeleton ? '' : `80%`}>
          <Text as="span" color="gray.600">
            {location}
          </Text>
        </Skeleton>
        <Skeleton isLoaded={showSkeleton}>
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
        </Skeleton>
      </Stack>
    </Card>
  );
};
