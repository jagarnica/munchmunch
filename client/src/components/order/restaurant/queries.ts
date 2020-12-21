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
export const getFoodItem = /* GraphQL */ `
  query GetFoodItem($id: ID!) {
    getFoodItem(id: $id) {
      id
      name
      description
      price
    }
  }
`;
export const getMenuItems = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
      id
      menuItems {
        items {
          foodItem {
            name
            id
            description
            price
          }
        }
      }
    }
  }
`;
export type getMenuItemsQuery = {
  getMenu: {
    __typename: 'Menu';
    id: string;
    menuItems: {
      __typename: 'ModelMenuItemConnection';
      items: Array<{
        foodItem: { __typename: 'FoodItem'; id: string; name: string; description: string | null; price: number };
      }>;
    };
  };
};
export type getMenuItemsQueryVariables = {
  id: string;
};
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
export type GetFoodItemQuery = {
  getFoodItem: {
    id: string;
    name: string;
    description: string | null;
    price: number;
  } | null;
};
export type GetRestaurantQueryVariables = {
  id: string;
};
export type GetFoodItemQueryVariables = {
  id: string;
};
