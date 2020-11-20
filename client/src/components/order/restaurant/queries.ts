export const getRestaurant = /* GraphQL */ `
  query GetRestaurantMenus($id: ID!) {
    getRestaurant(id: $id) {
      id
      name
      location
      categories
      menus {
        items {
          name
          id
          description
        }
      }
    }
  }
`;

export type GetRestaurantQuery = {
  getRestaurant: {
    __typename: 'Restaurant';
    id: string;
    name: string;
    location: string;
    categories: Array<string | null>;
    menus: {
      __typename: 'ModelMenuConnection';
      items: Array<{
        __typename: 'Menu';
        id: string;
        name: string;
        description: string | null;
      } | null>;
    } | null;
  } | null;
};
export type GetRestaurantQueryVariables = {
  id: string;
};
