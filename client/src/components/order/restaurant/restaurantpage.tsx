import * as React from 'react';
import { Box, Divider, Spinner, Stack, Icon, Text, Skeleton, Button } from '@chakra-ui/core';
import { Layout, SEO } from 'components/shared/layout';
import { MainRouteComponent } from 'types';
import { useQuery, gql } from '@apollo/client';
import { Redirect } from '@reach/router';
import { ImageHeader } from 'components/shared/imageheader';
import { DisplayMenuItems } from './displaymenuitems';
import { ButtonNavGroup } from '../../shared/buttonnavgroup';
import { getRestaurant, GetRestaurantQuery, GetRestaurantQueryVariables } from './queries';
/**
 * @name RestaurantPageLayout
 * @description Holds the main content for a restaurants page
 * @returns JSX.Element
 */
export const RestaurantPageLayout: React.FC<MainRouteComponent> = ({ children }) => {
  return <Layout fullWidth>{children}</Layout>;
};

export interface RestaurantOrderProps extends MainRouteComponent {
  id?: string;
}
/**
 * @name RestaurantOrder
 * @description This component holds the content displayed on the page for a restaurant.
 * The id used to query the restaurant is passed in by the path props from reach router.
 * @prop {string | undefined} id
 * @returns JSX.Element
 */
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
        <Skeleton>
          <ImageHeader mb="0.6rem" />
        </Skeleton>
        <Stack spacing={2} alignContent="flex-start" justifyContent="flex-start">
          <Skeleton maxW={240}>
            <Text as="span" fontWeight="bold" color="gray.700" fontSize="3xl">
              Loading...
            </Text>
          </Skeleton>
          <Skeleton as="span" maxW={120}>
            <Text as="span" color="gray.600">
              Loading...
            </Text>
          </Skeleton>
          <Skeleton as="span" maxW={150}>
            <Text color="gray.600">Loading...</Text>
          </Skeleton>
          <Skeleton as="span" maxW={120}>
            <Button>Loading...</Button>
          </Skeleton>
        </Stack>
      </>
    );
  // This means the restaurant does not exist
  if (data?.getRestaurant === null) return <Redirect noThrow to="/404" />;
  if (data && data.getRestaurant) {
    const { name, location, categories, menus } = data.getRestaurant;
    return (
      <>
        <SEO title={`Order ${name}`} />
        <ImageHeader mb="0.6rem" />
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
        </Stack>
      </>
    );
  }
  return <Spinner />;
};

export interface RestaurantMenuNavProps {
  menus: Array<{
    __typename: 'Menu';
    id: string;
    name: string;
    description: string | null;
  } | null>;
}
export const RestaurantMenuNav = ({ menus }: RestaurantMenuNavProps): JSX.Element => {
  const [currentMenu, setCurrentMenu] = React.useState<string>(menus[0]?.id || ``);

  function handleMenuButtonClick(menuID?: string) {
    if (menuID) setCurrentMenu(menuID);
  }

  return (
    <>
      <Stack isInline>
        <ButtonNavGroup items={menus} activeId={currentMenu} onClick={handleMenuButtonClick} />
      </Stack>
      <Divider />
      {currentMenu ? (
        <Box bg="#FAFAFA" minH="60vh">
          <DisplayMenuItems menuID={currentMenu} />
        </Box>
      ) : (
        <Box d="flex" alignItems="center" justifyContent="center" bg="#FAFAFA" minH="60vh">
          <Stack alignItems="center" spacing={2}>
            <Icon name="coffeemenusign" color="gray.500" size="128px" />
            <Text fontSize="2xl" fontWeight="bold" maxW="312px" textAlign="center" color="gray.500">
              Sorry, this restaurant currently has no menus. Check back later!
            </Text>
          </Stack>
        </Box>
      )}
    </>
  );
};
