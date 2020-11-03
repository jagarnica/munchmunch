/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRestaurantInput = {
  id?: string | null,
  name: string,
  location: string,
  description?: string | null,
  phoneNumber?: string | null,
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  description?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  and?: Array< ModelRestaurantConditionInput | null > | null,
  or?: Array< ModelRestaurantConditionInput | null > | null,
  not?: ModelRestaurantConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateRestaurantInput = {
  id: string,
  name?: string | null,
  location?: string | null,
  description?: string | null,
  phoneNumber?: string | null,
};

export type DeleteRestaurantInput = {
  id?: string | null,
};

export type CreateMenuInput = {
  id?: string | null,
  restuarantID: string,
  name: string,
  description?: string | null,
};

export type ModelMenuConditionInput = {
  restuarantID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelMenuConditionInput | null > | null,
  or?: Array< ModelMenuConditionInput | null > | null,
  not?: ModelMenuConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateMenuInput = {
  id: string,
  restuarantID?: string | null,
  name?: string | null,
  description?: string | null,
};

export type DeleteMenuInput = {
  id?: string | null,
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  description?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  and?: Array< ModelRestaurantFilterInput | null > | null,
  or?: Array< ModelRestaurantFilterInput | null > | null,
  not?: ModelRestaurantFilterInput | null,
};

export type ModelMenuFilterInput = {
  id?: ModelIDInput | null,
  restuarantID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelMenuFilterInput | null > | null,
  or?: Array< ModelMenuFilterInput | null > | null,
  not?: ModelMenuFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateRestaurantMutationVariables = {
  input: CreateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type CreateRestaurantMutation = {
  createRestaurant:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    location: string,
    description: string | null,
    phoneNumber: string | null,
    menus:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        restuarantID: string,
        name: string,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRestaurantMutationVariables = {
  input: UpdateRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type UpdateRestaurantMutation = {
  updateRestaurant:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    location: string,
    description: string | null,
    phoneNumber: string | null,
    menus:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        restuarantID: string,
        name: string,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRestaurantMutationVariables = {
  input: DeleteRestaurantInput,
  condition?: ModelRestaurantConditionInput | null,
};

export type DeleteRestaurantMutation = {
  deleteRestaurant:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    location: string,
    description: string | null,
    phoneNumber: string | null,
    menus:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        restuarantID: string,
        name: string,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMenuMutationVariables = {
  input: CreateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type CreateMenuMutation = {
  createMenu:  {
    __typename: "Menu",
    id: string,
    restuarantID: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMenuMutationVariables = {
  input: UpdateMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type UpdateMenuMutation = {
  updateMenu:  {
    __typename: "Menu",
    id: string,
    restuarantID: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMenuMutationVariables = {
  input: DeleteMenuInput,
  condition?: ModelMenuConditionInput | null,
};

export type DeleteMenuMutation = {
  deleteMenu:  {
    __typename: "Menu",
    id: string,
    restuarantID: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetRestaurantQueryVariables = {
  id: string,
};

export type GetRestaurantQuery = {
  getRestaurant:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    location: string,
    description: string | null,
    phoneNumber: string | null,
    menus:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        restuarantID: string,
        name: string,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRestaurantsQueryVariables = {
  filter?: ModelRestaurantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRestaurantsQuery = {
  listRestaurants:  {
    __typename: "ModelRestaurantConnection",
    items:  Array< {
      __typename: "Restaurant",
      id: string,
      name: string,
      location: string,
      description: string | null,
      phoneNumber: string | null,
      menus:  {
        __typename: "ModelMenuConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetMenuQueryVariables = {
  id: string,
};

export type GetMenuQuery = {
  getMenu:  {
    __typename: "Menu",
    id: string,
    restuarantID: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMenusQueryVariables = {
  filter?: ModelMenuFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMenusQuery = {
  listMenus:  {
    __typename: "ModelMenuConnection",
    items:  Array< {
      __typename: "Menu",
      id: string,
      restuarantID: string,
      name: string,
      description: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type RestaurantsByNameQueryVariables = {
  name?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRestaurantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RestaurantsByNameQuery = {
  restaurantsByName:  {
    __typename: "ModelRestaurantConnection",
    items:  Array< {
      __typename: "Restaurant",
      id: string,
      name: string,
      location: string,
      description: string | null,
      phoneNumber: string | null,
      menus:  {
        __typename: "ModelMenuConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateRestaurantSubscription = {
  onCreateRestaurant:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    location: string,
    description: string | null,
    phoneNumber: string | null,
    menus:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        restuarantID: string,
        name: string,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRestaurantSubscription = {
  onUpdateRestaurant:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    location: string,
    description: string | null,
    phoneNumber: string | null,
    menus:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        restuarantID: string,
        name: string,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRestaurantSubscription = {
  onDeleteRestaurant:  {
    __typename: "Restaurant",
    id: string,
    name: string,
    location: string,
    description: string | null,
    phoneNumber: string | null,
    menus:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        restuarantID: string,
        name: string,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMenuSubscription = {
  onCreateMenu:  {
    __typename: "Menu",
    id: string,
    restuarantID: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMenuSubscription = {
  onUpdateMenu:  {
    __typename: "Menu",
    id: string,
    restuarantID: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMenuSubscription = {
  onDeleteMenu:  {
    __typename: "Menu",
    id: string,
    restuarantID: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
