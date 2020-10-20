import React from 'react';
import { SEO } from 'components/shared/layout';
import { useAppContext } from 'libs/contextLib';
import { Text, SimpleGrid, Icon, Flex } from '@chakra-ui/core';
import { LargeSearchBar } from 'components/shared/largesearchbar';
import { DefaultPageProps, RestaurantOrder, Restaurant } from 'types';
import { GeneralPlaceholderCard, OrderHistoryCard, RestaurantCard } from 'components/shared/card';
import { WhyMunchMunch, OneStopShop } from './landingpage';

export const OrderHome: React.FC<DefaultPageProps> = () => {
  const { state } = useAppContext();
  const isAuthenticated = state?.isAuthenticated;
  // const testOrders = [
  //   {
  //     id: '23',
  //     name: 'El grullense',
  //     image: 'https://source.unsplash.com/1600x900/?taco',
  //     location: 'Redwood City, CA',
  //   },
  //   {
  //     id: '232',
  //     name: 'Jeffreys',
  //     image: 'https://source.unsplash.com/1600x900/?cheeseburger',
  //     location: 'Menlo Park, CA',
  //   },
  // ];
  if (isAuthenticated) {
    return (
      <>
        <SEO title="Home" />
        <SimpleGrid maxW="100%" spacing="2.45rem">
          <SearchRestuarants />
          <UserFavorites />
          <UserPastOrders />
        </SimpleGrid>
      </>
    );
  }
  return (
    <>
      <SEO title="Home" />
      <SimpleGrid maxW="100%" spacing="2.45rem">
        <SearchRestuarants />
        <WhyMunchMunch />
        <OneStopShop />
      </SimpleGrid>
    </>
  );
};

export const SearchRestuarants = (): JSX.Element => {
  const { state } = useAppContext();
  const user = state?.user;
  const introText = user?.name ? `Welcome Back, ` : `Welcome to `;
  return (
    <SimpleGrid spacing={5}>
      <Text as="span" fontWeight="bold" fontSize={{ base: '3xl', md: '4xl' }} color="gray.600">
        {introText}
        {user?.name && (
          <Text as="span" color="orange.500" whiteSpace="nowrap">
            {user?.name} 👋
          </Text>
        )}
        {!user?.name && <Text as="span" whiteSpace="nowrap">{`MunchMunch 👋`}</Text>}
      </Text>
      <Text as="span" fontWeight="bold" fontSize={{ base: '3xl', md: '4xl' }} color="gray.600">
        What are you craving today?
      </Text>
      <LargeSearchBar placeholder="Search Here..." />
    </SimpleGrid>
  );
};

export const UserPastOrders = ({
  orders = [],
}: {
  orders?: Array<Pick<RestaurantOrder, 'date' | 'image' | 'name' | 'id'>>;
}): JSX.Element => {
  return (
    <SimpleGrid spacing="20px" maxWidth="100%">
      <Flex alignItems="center" justifyContent="flex-start">
        <Icon name="shoppingbag" color="orange.500" size="2rem" marginRight="0.3rem" />

        <Text as="span" fontSize="xl" transform="translateY(0.2rem)" fontWeight="bold" color="orange.500">
          My Orders
        </Text>
      </Flex>

      <SimpleGrid minChildWidth="280px" spacing="20px" maxWidth="100%">
        {orders.length > 0 ? (
          <>
            {orders.map(order => {
              return <OrderHistoryCard key={order.id} title={order.name} image={order.image} orderDate={order.date} />;
            })}
          </>
        ) : (
          <GeneralPlaceholderCard text="No orders yet!" icon="happytakeoutbox" />
        )}
      </SimpleGrid>
    </SimpleGrid>
  );
};

export const UserFavorites = ({ favorites = [] }: { favorites?: Array<Restaurant> }): JSX.Element => {
  return (
    <SimpleGrid spacing="20px" maxWidth="100%">
      <Flex alignItems="center" justifyContent="flex-start">
        <Icon name="star" color="orange.500" size="1.8rem" marginRight="0.3rem" />

        <Text as="span" fontSize="xl" transform="translateY(0.2rem)" fontWeight="bold" color="orange.500">
          My Favorites
        </Text>
      </Flex>
      <SimpleGrid minChildWidth="280px" spacing="20px" maxWidth="100%">
        {favorites.length > 0 ? (
          <>
            {favorites.map(favItem => {
              return (
                <RestaurantCard
                  title={favItem.name}
                  location={favItem.location}
                  image={favItem.image}
                  key={favItem.id}
                ></RestaurantCard>
              );
            })}
          </>
        ) : (
          <GeneralPlaceholderCard text="Your favorites will show up here." icon="togobox" />
        )}
      </SimpleGrid>
    </SimpleGrid>
  );
};
