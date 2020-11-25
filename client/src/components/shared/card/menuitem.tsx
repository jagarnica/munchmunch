import * as React from 'react';
import { Text, Box, AspectRatio, Skeleton, BoxProps, Stack } from '@chakra-ui/react';
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
      <Box flex="4" justifyContent="flex-start" mr="8px">
        <Stack direction="column" spacing={'0.1em'}>
          <Skeleton isLoaded={isLoaded}>
            <Text
              isTruncated
              noOfLines={2}
              as="span"
              fontWeight="bold"
              fontSize={{ base: `xl`, lg: '2xl' }}
              color="gray.700"
            >
              {name}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={isLoaded}>
            <Text isTruncated noOfLines={2} as="span" color="gray.600" fontSize={{ base: 'sm', sm: `md` }}>
              {description}
            </Text>
          </Skeleton>
          <Skeleton isLoaded={isLoaded}>
            <Text fontWeight="bold" as="span" fontSize={{ base: 'sm', sm: `md` }} color="gray.700">{`$${price}`}</Text>
          </Skeleton>
        </Stack>
      </Box>

      <AspectRatio
        alignSelf="center"
        rounded="lg"
        overflow="hidden"
        ratio={1}
        minW={{ base: `70px`, sm: `80px`, lg: `90px`, xl: `100px` }}
        maxW={{ base: `70px`, sm: `80px`, lg: `90px`, xl: `100px` }}
      >
        <Skeleton w="100%" isLoaded={isLoaded}>
          {image ? (
            <SmartImage src={image} alt={`${name} picture`} />
          ) : (
            <PlaceHolderImage h="100%" w="100%" fontSize={{ base: `xs`, sm: `sm`, md: 'md' }} />
          )}
        </Skeleton>
      </AspectRatio>
    </Box>
  );
};
