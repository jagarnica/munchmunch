import { redirectTo } from '@reach/router';
import { Spinner, Text } from '@chakra-ui/core';
import * as awsQueryTypes from 'API';
import { useQuery, gql } from '@apollo/client';
import React from 'react';
import { MainRouteComponent } from 'types';
import { Card } from 'components/shared/card/';
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
  if (error) return <Text>Error! {error}</Text>;
  const results = data?.searchRestaurants?.items;

  if (results && results.length > 0) {
    return (
      <>
        <Text fontSize="3xl" color="grey.700">
          {`Results for "${query}"`}
        </Text>
        {results.map(resturant => {
          return (
            <Card key={resturant?.id}>
              <Text>{resturant?.name}</Text>
              <Text>{resturant?.location}</Text>
            </Card>
          );
        })}
      </>
    );
  }
  return <span>No Results Found</span>;
};
