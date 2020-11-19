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
export const createMenuItems = /* GraphQL */ `
  mutation CreateMenuItems(
    $input: CreateMenuItemsInput!
    $condition: ModelMenuItemsConditionInput
  ) {
    createMenuItems(input: $input, condition: $condition) {
      id
      foodItemID
      menuID
      foodItem {
        id
        name
        description
        price
        restaurantID
        menus {
          nextToken
        }
        createdAt
        updatedAt
      }
      menu {
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
      createdAt
      updatedAt
    }
  }
`;
export const updateMenuItems = /* GraphQL */ `
  mutation UpdateMenuItems(
    $input: UpdateMenuItemsInput!
    $condition: ModelMenuItemsConditionInput
  ) {
    updateMenuItems(input: $input, condition: $condition) {
      id
      foodItemID
      menuID
      foodItem {
        id
        name
        description
        price
        restaurantID
        menus {
          nextToken
        }
        createdAt
        updatedAt
      }
      menu {
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
      createdAt
      updatedAt
    }
  }
`;
export const deleteMenuItems = /* GraphQL */ `
  mutation DeleteMenuItems(
    $input: DeleteMenuItemsInput!
    $condition: ModelMenuItemsConditionInput
  ) {
    deleteMenuItems(input: $input, condition: $condition) {
      id
      foodItemID
      menuID
      foodItem {
        id
        name
        description
        price
        restaurantID
        menus {
          nextToken
        }
        createdAt
        updatedAt
      }
      menu {
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
