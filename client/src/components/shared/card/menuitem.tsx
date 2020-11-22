import * as React from 'react';
import { Text, Box, AspectRatioBox, Skeleton, BoxProps, Stack } from '@chakra-ui/core';
import { SmartImage } from 'components/shared/smartimage';
import { PlaceHolderImage } from 'components/shared/placeholders/';

export interface MenuItemProps extends BoxProps {
  name: string;
  price: number;
  description?: string | null;
  image?: string | null;
  isLoading?: boolean;
}
export const MenuItem = ({ name, price, description, image, isLoading, ...rest }: MenuItemProps): JSX.Element => {
  const isLoaded = !isLoading;
  return (
    <Box bg="white" borderColor="gray.200" flex="5" borderWidth="1px" {...rest} rounded="lg" d="flex" padding="1.0rem">
      <Box flex="4" justifyContent="flex-start" mr="4px">
        <Stack direction="column">
          <Skeleton isLoaded={isLoaded}>
            <Text fontWeight="bold" fontSize="2xl" color="gray.700">
              {name}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={isLoaded}>
            <Text color="gray.600">{description}</Text>
          </Skeleton>
          <Skeleton isLoaded={isLoaded}>
            <Text color="gray.700">{`$${price}`}</Text>
          </Skeleton>
        </Stack>
      </Box>

      <AspectRatioBox rounded="lg" w="100%" overflow="hidden" ratio={1} minW={80} maxW={{ base: 80, md: 120 }}>
        <Skeleton isLoaded={isLoaded}>
          {image ? (
            <SmartImage src={image} alt={`${name} picture`} />
          ) : (
            <PlaceHolderImage h="100%" w="100%" fontSize={{ base: `sm`, md: 'md' }} />
          )}
        </Skeleton>
      </AspectRatioBox>
    </Box>
  );
};
