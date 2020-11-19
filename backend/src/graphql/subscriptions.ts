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
export const onCreateMenuItems = /* GraphQL */ `
  subscription OnCreateMenuItems {
    onCreateMenuItems {
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
export const onUpdateMenuItems = /* GraphQL */ `
  subscription OnUpdateMenuItems {
    onUpdateMenuItems {
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
export const onDeleteMenuItems = /* GraphQL */ `
  subscription OnDeleteMenuItems {
    onDeleteMenuItems {
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
export const onCreateFoodItem = /* GraphQL */ `
  subscription OnCreateFoodItem {
    onCreateFoodItem {
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
export const onUpdateFoodItem = /* GraphQL */ `
  subscription OnUpdateFoodItem {
    onUpdateFoodItem {
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
export const onDeleteFoodItem = /* GraphQL */ `
  subscription OnDeleteFoodItem {
    onDeleteFoodItem {
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
