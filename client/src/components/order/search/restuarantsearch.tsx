import { redirectTo } from '@reach/router';
import { Spinner, Text, SimpleGrid } from '@chakra-ui/core';
import * as awsQueryTypes from 'API';
import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { MainRouteComponent } from 'types';
import { RestaurantCard } from 'components/shared/card/';
import * as awsQuery from '../../../graphql/queries';

export interface RestaurantPageProps extends MainRouteComponent {
  query?: string;
}
export const RestuarantSearchPage = ({ query }: RestaurantPageProps): JSX.Element => {
  // Throws an error to redirect the user to the home page
  if (!query) redirectTo('/');
  const { loading, error, data } = useQuery<
    awsQueryTypes.SearchRestaurantsQuery,
    awsQueryTypes.SearchRestaurantsQueryVariables
  >(
    gql`
      ${awsQuery.searchRestaurants}
    `,
    {
      variables: { filter: { name: { match: query } } },
    }
  );

  if (loading) return <Spinner />;
  if (error)
    return (
      <Text fontSize="3xl" fontWeight="bold" color="blue.800">
        Sorry there was en error getting your results!
      </Text>
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

  if (results && results.length > 0) {
    return (
      <>
        <Text fontSize="3xl" fontWeight="bold" color="blue.800">
          {`"${query}"`}
        </Text>
        {resultsSummary && (
          <Text fontSize="large" color="blue.800">
            {resultsSummary}
          </Text>
        )}
        <SimpleGrid minChildWidth={'330px'} spacing="4em">
          {results.map(resturant => {
            if (!resturant) return null; // this will never happen really...
            return (
              <RestaurantCard
                isOpen={true}
                image={'http://placekitten.com/1600/1600'}
                key={resturant.id}
                title={resturant?.name}
                location={resturant?.location}
                categories={['Japanese', 'Local']}
              />
            );
          })}
        </SimpleGrid>
      </>
    );
  }
  return (
    <Text fontWeight="bold" color="blue.800" fontSize="3xl">
      No Results Found
    </Text>
  );
};
