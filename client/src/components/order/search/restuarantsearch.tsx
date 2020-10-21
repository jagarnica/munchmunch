import { redirectTo } from '@reach/router';
import React from 'react';
import { MainRouteComponent } from 'types';

export interface RestaurantPageProps extends MainRouteComponent {
  query?: string;
}
export const RestuarantSearchPage = ({ query }: RestaurantPageProps): JSX.Element => {
  // Throws an error to redirect the user to the home page
  if (!query) redirectTo('/');
  return <span>Resturant search page {query}</span>;
};
