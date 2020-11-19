/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRestaurant = /* GraphQL */ `
  query GetRestaurant($id: ID!) {
    getRestaurant(id: $id) {
      id
      name
      location
      description
      phoneNumber
      categories
      menus {
        items {
          id
          restaurantID
          name
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      FoodItems {
        items {
          id
          name
          description
          price
          restaurantID
          createdAt
          updatedAt
        }
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
        name
        location
        description
        phoneNumber
        categories
        menus {
          nextToken
        }
        FoodItems {
          nextToken
        }
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
      restaurantID
      name
      description
      menuItems {
        items {
          id
          foodItemID
          menuID
          createdAt
          updatedAt
        }
        nextToken
      }
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
        restaurantID
        name
        description
        menuItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
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
      restaurantID
      restaurant {
        id
        name
        location
        description
        phoneNumber
        categories
        menus {
          nextToken
        }
        FoodItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      menus {
        items {
          id
          foodItemID
          menuID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFoodItems = /* GraphQL */ `
  query ListFoodItems(
    $filter: ModelFoodItemFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFoodItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        price
        restaurantID
        restaurant {
          id
          name
          location
          description
          phoneNumber
          categories
          createdAt
          updatedAt
        }
        menus {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const restaurantByName = /* GraphQL */ `
  query RestaurantByName(
    $name: String
    $sortDirection: ModelSortDirection
    $filter: ModelRestaurantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    restaurantByName(
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        location
        description
        phoneNumber
        categories
        menus {
          nextToken
        }
        FoodItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const searchRestaurants = /* GraphQL */ `
  query SearchRestaurants(
    $filter: SearchableRestaurantFilterInput
    $sort: SearchableRestaurantSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchRestaurants(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        name
        location
        description
        phoneNumber
        categories
        menus {
          nextToken
        }
        FoodItems {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
export const searchMenuItemss = /* GraphQL */ `
  query SearchMenuItemss(
    $filter: SearchableMenuItemsFilterInput
    $sort: SearchableMenuItemsSortInput
    $limit: Int
    $nextToken: String
    $from: Int
  ) {
    searchMenuItemss(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
    ) {
      items {
        id
        foodItemID
        menuID
        foodItem {
          id
          name
          description
          price
          restaurantID
          createdAt
          updatedAt
        }
        menu {
          id
          restaurantID
          name
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
      total
    }
  }
`;
