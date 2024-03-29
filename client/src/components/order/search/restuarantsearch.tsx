import * as React from 'react';
import { Link, navigate, redirectTo } from '@reach/router';
import { Text, SimpleGrid, Skeleton } from '@chakra-ui/react';
import * as awsQueryTypes from 'API';
import { useQuery, gql } from '@apollo/client';
import { MainRouteComponent } from 'types';
import { RestaurantCard } from 'components/shared/card/';
import { SEO } from 'components/shared/layout';
import { RestaurantSearchBar } from 'components/shared/forms';
import * as awsQuery from '../../../graphql/queries';

export interface RestaurantSearchPage extends MainRouteComponent {
  query?: string;
}
/**
 * @name RestaurantSearchPage
 * @description This holds the main layout for the results displayed. It picks up the query
 * from the params in the url.
 * @returns JSX.Element
 */
export const RestaurantSearchPage = ({ query }: RestaurantSearchPage): JSX.Element => {
  // Throws an error to redirect the user to the home page
  if (!query) redirectTo('/');
  function handleNewSearch(newQuery: string) {
    const encodedString = encodeURIComponent(newQuery);
    navigate(`/search/restaurants/${encodedString}`, { replace: true });
  }
  if (query && query?.length >= 25) {
    const sanitizedQuery = query?.substring(0, 25); // Set a limit
    handleNewSearch(sanitizedQuery);
  }

  return (
    <>
      <SEO title={`Search: ${query}`} />
      <SimpleGrid maxW="100%" spacing="1em">
        <RestaurantSearchBar maxW="100%" autoFocus size="lg" onSubmit={handleNewSearch} defaultValue={query} />
        <Text fontSize="3xl" isTruncated as="div" maxW="100%" fontWeight="bold" color="blue.800">
          {`${query}`}
        </Text>
        <RestaurantSearchResults queryString={query || ''} />
      </SimpleGrid>
    </>
  );
};
/**
 * @name RestaurantSearchResults
 * @description This component returns the results from searching the query passed
 * in.
 * @prop {string} queryString Sets the query that will be searched
 * @returns JSX.Element
 */
export const RestaurantSearchResults = ({ queryString }: { queryString: string }): JSX.Element => {
  const { loading, error, data } = useQuery<
    awsQueryTypes.SearchRestaurantsQuery,
    awsQueryTypes.SearchRestaurantsQueryVariables
  >(
    gql`
      ${awsQuery.searchRestaurants}
    `,
    {
      variables: { filter: { or: [{ name: { match: queryString } }, { categories: { match: queryString } }] } },
    }
  );

  const results = data?.searchRestaurants?.items;
  const total = data?.searchRestaurants?.total;
  let resultsSummary: string | undefined;

  // Sets up the summary depending if there is just one result or not
  if (total && total === 1) {
    resultsSummary = `1 Restaurant`;
  } else if (total) {
    resultsSummary = `${total} Restaurants`;
  } else {
    resultsSummary = `0 Restaurants`; // total can actually be null
  }

  if (error)
    return (
      <Text fontSize="3xl" fontWeight="bold" color="blue.800">
        Sorry there was en error getting your results!
      </Text>
    );
  if (loading)
    return (
      <>
        <Skeleton maxW="150px">
          <Text fontSize="large">Loading...</Text>
        </Skeleton>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing="1em">
          <RestaurantCard isLoading title="Loading..." location="Loading..." />
          <RestaurantCard isLoading title="Loading..." location="Loading..." />
        </SimpleGrid>
      </>
    );

  if (results && results.length > 0) {
    return (
      <>
        {resultsSummary && (
          <Text fontSize="large" color="blue.800">
            {resultsSummary}
          </Text>
        )}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} spacing="1em">
          {results.map(restaurant => {
            if (!restaurant) return null; // this will never happen really...
            return (
              <Link key={restaurant.id} to={`/restaurant/${restaurant.id}`}>
                <RestaurantCard
                  isOpen={true}
                  title={restaurant?.name}
                  location={restaurant?.location}
                  categories={restaurant?.categories}
                />
              </Link>
            );
          })}
        </SimpleGrid>
      </>
    );
  }
  return (
    <>
      <Text fontSize="large" color="blue.800">
        0 Restaurants
      </Text>

      <Text fontWeight="bold" color="blue.800" fontSize="3xl">
        No Results Found
      </Text>
    </>
  );
};
