import * as React from 'react';
import { navigate, redirectTo } from '@reach/router';
import { Text, SimpleGrid, Skeleton } from '@chakra-ui/core';
import * as awsQueryTypes from 'API';
import { useQuery, gql } from '@apollo/client';
import { MainRouteComponent } from 'types';
import { RestaurantCard } from 'components/shared/card/';
import { SEO } from 'components/shared/layout';
import { RestuarantSearchBar } from 'components/shared/forms';
import * as awsQuery from '../../../graphql/queries';

export interface RestuarantSearchPage extends MainRouteComponent {
  query?: string;
}
/**
 * @name ResturantSearchPage
 * @description This holds the main layout for the results displayed. It picks up the query
 * from the params in the url.
 * @returns JSX.Element
 */
export const RestuarantSearchPage = ({ query }: RestuarantSearchPage): JSX.Element => {
  // Throws an error to redirect the user to the home page
  if (!query) redirectTo('/');
  function handleNewSearch(newQuery: string) {
    const encodedString = encodeURIComponent(newQuery);
    navigate(`/search/resturants/${encodedString}`, { replace: true });
  }
  if (query && query?.length >= 25) {
    const sanitizedQuery = query?.substring(0, 25); // Set a limit
    handleNewSearch(sanitizedQuery);
  }

  return (
    <>
      <SEO title={`Search: ${query}`} />
      <SimpleGrid maxW="100%" spacing="1em">
        <RestuarantSearchBar maxW="100%" autoFocus size="lg" onSubmit={handleNewSearch} defaultValue={query} />
        <Text fontSize="3xl" isTruncated as="div" maxW="100%" fontWeight="bold" color="blue.800">
          {`${query}`}
        </Text>
        <RestuarantSearchResults queryString={query || ''} />
      </SimpleGrid>
    </>
  );
};
/**
 * @name ResturantSearchResults
 * @description This component returns the results from searching the query passed
 * in.
 * @prop {string} queryString Sets the query that will be searched
 * @returns JSX.Element
 */
export const RestuarantSearchResults = ({ queryString }: { queryString: string }): JSX.Element => {
  const { loading, error, data } = useQuery<
    awsQueryTypes.SearchRestaurantsQuery,
    awsQueryTypes.SearchRestaurantsQueryVariables
  >(
    gql`
      ${awsQuery.searchRestaurants}
    `,
    {
      variables: { filter: { name: { match: queryString } } },
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
          {results.map(resturant => {
            if (!resturant) return null; // this will never happen really...
            return (
              <RestaurantCard
                isOpen={true}
                key={resturant.id}
                title={resturant?.name}
                location={resturant?.location}
                categories={resturant?.categories}
              />
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
