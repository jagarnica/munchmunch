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
      menus {
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
      menus {
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
      menus {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMenu = /* GraphQL */ `
  subscription OnCreateMenu {
    onCreateMenu {
      id
      restuarantID
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
      restuarantID
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
      restuarantID
      name
      description
      createdAt
      updatedAt
    }
  }
`;
