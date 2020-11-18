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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMenuItem = /* GraphQL */ `
  subscription OnCreateMenuItem {
    onCreateMenuItem {
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
export const onUpdateMenuItem = /* GraphQL */ `
  subscription OnUpdateMenuItem {
    onUpdateMenuItem {
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
export const onDeleteMenuItem = /* GraphQL */ `
  subscription OnDeleteMenuItem {
    onDeleteMenuItem {
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
