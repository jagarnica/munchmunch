import * as React from 'react';
import { Box, SimpleGrid, Text, Icon, Stack } from '@chakra-ui/core';
import { useQuery, gql } from '@apollo/client';
import { MenuItem } from 'components/shared/card/';
import { getMenuItems, getMenuItemsQueryVariables, getMenuItemsQuery } from './queries';

export interface DisplayMenuItemsProps {
  menuID: string;
}

export const DisplayMenuItems = ({ menuID }: DisplayMenuItemsProps): JSX.Element => {
  const { loading, error, data } = useQuery<getMenuItemsQuery, getMenuItemsQueryVariables>(
    gql`
      ${getMenuItems}
    `,
    {
      variables: {
        id: menuID,
      },
    }
  );
  if (loading)
    return (
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 3 }} spacing="1em">
        <MenuItem isLoading alignSelf="center" maxW="100%" name="loading..." description="loading..." price={0} />
        <MenuItem isLoading alignSelf="center" maxW="100%" name="loading..." description="loading..." price={0} />
      </SimpleGrid>
    );
  if (error) {
    return (
      <Text color="gray.700" fontSize="2xl">
        Sorry there was an issue getting the menu items. Please try refreshing the page.{' '}
      </Text>
    );
  }
  if (data && data.getMenu) {
    const { items } = data.getMenu.menuItems;
    if (items.length === 0)
      return (
        <Box
          justifyContent="center"
          h="100%"
          flexDir="column"
          alignSelf="center"
          d="flex"
          padding="16px"
          alignItems="center"
        >
          <Icon name="coffeemenusign" color="gray.500" size="128px" />
          <Text textAlign="center" fontSize="2xl" fontWeight="bold" color="gray.500">
            Sorry this menu has no items yet. <br />
            Check back again soon!
          </Text>
        </Box>
      );
    return (
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 3 }} spacing="1em">
        {items.map(item => {
          const { id, name, description, price } = item.foodItem;

          return (
            <MenuItem alignSelf="center" maxW="100%" key={id} name={name} description={description} price={price} />
          );
        })}
      </SimpleGrid>
    );
  }
  return (
    <Stack alignItems="center" spacing={2}>
      <Text fontSize="2xl" fontWeight="bold" color="gray.500">
        Sorry this menu has no items yet.
      </Text>
    </Stack>
  );
};
