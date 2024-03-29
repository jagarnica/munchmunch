import React from 'react';
import { SEO, Layout } from 'components/shared/layout';
import { useAppContext } from 'libs/contextLib';
import { useNavigate } from '@reach/router';
import { Text, SimpleGrid, Flex } from '@chakra-ui/react';
import { LargeSearchBar } from 'components/shared/largesearchbar';
import { MainRouteComponent, RestaurantOrder, Restaurant } from 'types';
import { GeneralPlaceholderCard, OrderHistoryCard, RestaurantCard } from 'components/shared/card';
import { useForm } from 'react-hook-form';
import { restaurantSearch } from 'utils/formrules/';
import { StarIcon } from '@chakra-ui/icons';
import { ShoppingBag, HappyTakeOutBox, TogoBox } from 'images/tsxicons';
import { WhyMunchMunch, OneStopShop } from './landingpage';

export const OrderHome: React.FC<MainRouteComponent> = () => {
  const { state } = useAppContext();
  const isAuthenticated = state?.isAuthenticated;

  if (isAuthenticated) {
    return (
      <Layout>
        <SEO title="Home" />
        <SimpleGrid maxW="100%" spacing="2.45rem">
          <SearchRestaurants />
          <UserFavorites />
          <UserPastOrders />
        </SimpleGrid>
      </Layout>
    );
  }
  return (
    <Layout>
      <SEO title="Home" />
      <SimpleGrid maxW="100%" spacing="2.45rem">
        <SearchRestaurants />
        <WhyMunchMunch />
        <OneStopShop />
      </SimpleGrid>
    </Layout>
  );
};
export type restaurantQuery = {
  [key: string]: string;
};
export const SearchRestaurants = (): JSX.Element => {
  const { handleSubmit, register } = useForm<restaurantQuery>();
  const navigate = useNavigate();
  const { state } = useAppContext();
  const user = state?.user;
  const introText = user?.name ? `Welcome Back, ` : `Welcome to `;
  function getSearchResults(data: restaurantQuery) {
    const { id } = restaurantSearch;
    const query = data[id];
    const encodedString = encodeURIComponent(query);
    navigate(`/search/restaurants/${encodedString}`, { replace: false });
  }
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
      <form onSubmit={handleSubmit(getSearchResults)}>
        <LargeSearchBar
          placeholder={restaurantSearch.placeholder}
          size="lg"
          autoComplete="off"
          ariaLabel="Search Restaurants"
          name={restaurantSearch.id}
          ref={register({
            ...restaurantSearch.rules,
          })}
          buttonProps={{
            type: 'submit',
          }}
        />
      </form>
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
        <ShoppingBag color="orange.500" boxSize="1.8rem" marginRight="0.3rem" />
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
          <GeneralPlaceholderCard text="No orders yet!" icon={<HappyTakeOutBox color="gray.500" boxSize="57px" />} />
        )}
      </SimpleGrid>
    </SimpleGrid>
  );
};

export const UserFavorites = ({ favorites = [] }: { favorites?: Array<Restaurant> }): JSX.Element => {
  return (
    <SimpleGrid spacing="20px" maxWidth="100%">
      <Flex alignItems="center" justifyContent="flex-start">
        <StarIcon color="orange.500" boxSize="1.4rem" marginRight="0.3rem" />
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
          <GeneralPlaceholderCard
            text="Your favorites will show up here."
            icon={<TogoBox boxSize="57px" color="gray.500" />}
          />
        )}
      </SimpleGrid>
    </SimpleGrid>
  );
};
