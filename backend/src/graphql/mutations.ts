/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
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
      menuItems {
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
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
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
      menuItems {
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
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
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
      menuItems {
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
export const createMenu = /* GraphQL */ `
  mutation CreateMenu(
    $input: CreateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    createMenu(input: $input, condition: $condition) {
      id
      restaurantID
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateMenu = /* GraphQL */ `
  mutation UpdateMenu(
    $input: UpdateMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    updateMenu(input: $input, condition: $condition) {
      id
      restaurantID
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteMenu = /* GraphQL */ `
  mutation DeleteMenu(
    $input: DeleteMenuInput!
    $condition: ModelMenuConditionInput
  ) {
    deleteMenu(input: $input, condition: $condition) {
      id
      restaurantID
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createFoodItem = /* GraphQL */ `
  mutation CreateFoodItem(
    $input: CreateFoodItemInput!
    $condition: ModelFoodItemConditionInput
  ) {
    createFoodItem(input: $input, condition: $condition) {
      id
      name
      description
      price
      restaurantID
      createdAt
      updatedAt
    }
  }
`;
export const updateFoodItem = /* GraphQL */ `
  mutation UpdateFoodItem(
    $input: UpdateFoodItemInput!
    $condition: ModelFoodItemConditionInput
  ) {
    updateFoodItem(input: $input, condition: $condition) {
      id
      name
      description
      price
      restaurantID
      createdAt
      updatedAt
    }
  }
`;
export const deleteFoodItem = /* GraphQL */ `
  mutation DeleteFoodItem(
    $input: DeleteFoodItemInput!
    $condition: ModelFoodItemConditionInput
  ) {
    deleteFoodItem(input: $input, condition: $condition) {
      id
      name
      description
      price
      restaurantID
      createdAt
      updatedAt
    }
  }
`;
