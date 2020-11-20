/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant {
    onCreateRestaurant {
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
      foodItems {
        items {
          id
          restaurantID
          name
          description
          price
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant {
    onUpdateRestaurant {
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
      foodItems {
        items {
          id
          restaurantID
          name
          description
          price
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant {
    onDeleteRestaurant {
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
      foodItems {
        items {
          id
          restaurantID
          name
          description
          price
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
export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu {
    onCreateMenu {
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
export const onUpdateMenu = /* GraphQL */ `
  subscription OnUpdateMenu {
    onUpdateMenu {
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
export const onDeleteMenu = /* GraphQL */ `
  subscription OnDeleteMenu {
    onDeleteMenu {
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
export const onCreateMenuItem = /* GraphQL */ `
  subscription OnCreateMenuItem {
    onCreateMenuItem {
      id
      foodItemID
      menuID
      foodItem {
        id
        restaurantID
        name
        description
        price
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
export const onUpdateMenuItem = /* GraphQL */ `
  subscription OnUpdateMenuItem {
    onUpdateMenuItem {
      id
      foodItemID
      menuID
      foodItem {
        id
        restaurantID
        name
        description
        price
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
export const onDeleteMenuItem = /* GraphQL */ `
  subscription OnDeleteMenuItem {
    onDeleteMenuItem {
      id
      foodItemID
      menuID
      foodItem {
        id
        restaurantID
        name
        description
        price
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
export const onCreateFoodItem = /* GraphQL */ `
  subscription OnCreateFoodItem {
    onCreateFoodItem {
      id
      restaurantID
      name
      description
      price
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
export const onUpdateFoodItem = /* GraphQL */ `
  subscription OnUpdateFoodItem {
    onUpdateFoodItem {
      id
      restaurantID
      name
      description
      price
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
export const onDeleteFoodItem = /* GraphQL */ `
  subscription OnDeleteFoodItem {
    onDeleteFoodItem {
      id
      restaurantID
      name
      description
      price
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
