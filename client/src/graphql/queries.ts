/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
      id
      restuarntID
      name
      location
      description
      menus {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRestaurants = /* GraphQL */ `
  query ListRestaurants(
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRestaurants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        restuarntID
        name
        location
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMenu = /* GraphQL */ `
  query GetMenu($id: ID!) {
    getMenu(id: $id) {
      id
      restuarantID
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listMenus = /* GraphQL */ `
  query ListMenus(
    $filter: ModelMenuFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenus(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        restuarantID
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const restaurantsByName = /* GraphQL */ `
  query RestaurantsByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    restaurantsByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        restuarntID
        name
        location
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
