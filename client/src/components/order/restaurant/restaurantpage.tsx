import * as React from 'react';
import { Box, Button, Divider, Spinner, Stack, Text } from '@chakra-ui/core';
import { Layout, SEO } from 'components/shared/layout';
import { MainRouteComponent } from 'types';
import { useQuery, gql } from '@apollo/client';
import { Redirect } from '@reach/router';
import { SmartImage } from 'components/shared/smartimage';
import { PlaceHolderImage } from 'components/shared/placeholders';
import { getRestaurant, GetRestaurantQuery, GetRestaurantQueryVariables } from './queries';
/**
 * @name RestaurantPageLayout
 * @description Holds the main content for a restuarants page
 * @returns JSX.Element
 */
export const RestaurantPageLayout: React.FC<MainRouteComponent> = ({ children }) => {
  return <Layout fullWidth>{children}</Layout>;
};

export interface RestaurantOrderProps extends MainRouteComponent {
  id?: string;
}
export const RestaurantOrder = ({ id }: RestaurantOrderProps): JSX.Element => {
  if (!id) return <Redirect noThrow to="/404" />;
  const { error, loading, data } = useQuery<GetRestaurantQuery, GetRestaurantQueryVariables>(
    gql`
      ${getRestaurant}
    `,
    {
      variables: { id },
    }
  );
  if (error) return <Text>Sorry there was en error. Please try again.</Text>;
  if (loading)
    return (
      <>
        <SEO title="Order From Munch Munch" />
        Loading...
      </>
    );
  // This means the restuarant does not exist
  if (data?.getRestaurant === null) return <Redirect noThrow to="/404" />;
  if (data && data.getRestaurant) {
    const { name, location, categories, menus } = data.getRestaurant;
    return (
      <>
        <SEO title={`Order ${name}`} />

        <RestaurantHeader />
        <Stack spacing={0}>
          <Text as="span" fontWeight="bold" color="gray.700" fontSize="3xl">
            {name}
          </Text>
          <Text as="span" color="gray.600">
            {location}
          </Text>

          <Text color="gray.600">
            {categories.map((category, index) => {
              if (index + 1 === categories.length)
                return (
                  <Text as="span" key={category}>
                    {`${category}`}
                  </Text>
                );
              return (
                <Text as="span" key={category}>
                  {`${category} • `}
                </Text>
              );
            })}
          </Text>
        </Stack>
        <Stack mt="1.3rem">
          <RestaurantMenuNav menus={menus?.items || [null]} />
          <Divider />
        </Stack>
      </>
    );
  }
  return <Spinner />;
};

export const RestaurantHeader = ({ imageUrl }: { imageUrl?: string }): JSX.Element => {
  return (
    <Box
      mb="0.6rem"
      borderRadius="16px"
      overflow="hidden"
      width="100%"
      d="flex"
      minHeight="100%"
      height={{ base: 200, md: 300, lg: 400 }}
    >
      {imageUrl ? <SmartImage src={imageUrl} ratio={16 / 9} /> : <PlaceHolderImage w="100%" />}
    </Box>
  );
};

export interface DisplayMenuProps {
  menus: Array<{
    __typename: 'Menu';
    id: string;
    name: string;
    description: string | null;
  } | null>;
}
export const RestaurantMenuNav = ({ menus }: DisplayMenuProps): JSX.Element => {
  return (
    <Stack isInline>
      {menus?.map(menu => {
        return (
          <Button variantColor="gray" borderRadius="32px" key={menu?.name}>
            {menu?.name}
          </Button>
        );
      })}
    </Stack>
  );
};
