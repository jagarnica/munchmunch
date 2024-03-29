/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateRestaurantInput = {
  id?: string | null,
  name: string,
  location: string,
  description?: string | null,
  phoneNumber?: string | null,
  categories: Array< string | null >,
};

export type ModelRestaurantConditionInput = {
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  description?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  categories?: ModelStringInput | null,
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
  categories?: Array< string | null > | null,
};

export type DeleteRestaurantInput = {
  id?: string | null,
};

export type CreateMenuInput = {
  id?: string | null,
  restaurantID: string,
  name: string,
  description?: string | null,
};

export type ModelMenuConditionInput = {
  restaurantID?: ModelIDInput | null,
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
  restaurantID?: string | null,
  name?: string | null,
  description?: string | null,
};

export type DeleteMenuInput = {
  id?: string | null,
};

export type CreateMenuItemInput = {
  id?: string | null,
  foodItemID: string,
  menuID: string,
};

export type ModelMenuItemConditionInput = {
  foodItemID?: ModelIDInput | null,
  menuID?: ModelIDInput | null,
  and?: Array< ModelMenuItemConditionInput | null > | null,
  or?: Array< ModelMenuItemConditionInput | null > | null,
  not?: ModelMenuItemConditionInput | null,
};

export type UpdateMenuItemInput = {
  id: string,
  foodItemID?: string | null,
  menuID?: string | null,
};

export type DeleteMenuItemInput = {
  id?: string | null,
};

export type CreateFoodItemInput = {
  id?: string | null,
  restaurantID: string,
  name: string,
  description?: string | null,
  price: number,
};

export type ModelFoodItemConditionInput = {
  restaurantID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelFoodItemConditionInput | null > | null,
  or?: Array< ModelFoodItemConditionInput | null > | null,
  not?: ModelFoodItemConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateFoodItemInput = {
  id: string,
  restaurantID?: string | null,
  name?: string | null,
  description?: string | null,
  price?: number | null,
};

export type DeleteFoodItemInput = {
  id?: string | null,
};

export type ModelRestaurantFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  description?: ModelStringInput | null,
  phoneNumber?: ModelStringInput | null,
  categories?: ModelStringInput | null,
  and?: Array< ModelRestaurantFilterInput | null > | null,
  or?: Array< ModelRestaurantFilterInput | null > | null,
  not?: ModelRestaurantFilterInput | null,
};

export type ModelMenuFilterInput = {
  id?: ModelIDInput | null,
  restaurantID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelMenuFilterInput | null > | null,
  or?: Array< ModelMenuFilterInput | null > | null,
  not?: ModelMenuFilterInput | null,
};

export type ModelFoodItemFilterInput = {
  id?: ModelIDInput | null,
  restaurantID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  price?: ModelIntInput | null,
  and?: Array< ModelFoodItemFilterInput | null > | null,
  or?: Array< ModelFoodItemFilterInput | null > | null,
  not?: ModelFoodItemFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type SearchableRestaurantFilterInput = {
  id?: SearchableIDFilterInput | null,
  name?: SearchableStringFilterInput | null,
  location?: SearchableStringFilterInput | null,
  description?: SearchableStringFilterInput | null,
  phoneNumber?: SearchableStringFilterInput | null,
  categories?: SearchableStringFilterInput | null,
  and?: Array< SearchableRestaurantFilterInput | null > | null,
  or?: Array< SearchableRestaurantFilterInput | null > | null,
  not?: SearchableRestaurantFilterInput | null,
};

export type SearchableIDFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableStringFilterInput = {
  ne?: string | null,
  gt?: string | null,
  lt?: string | null,
  gte?: string | null,
  lte?: string | null,
  eq?: string | null,
  match?: string | null,
  matchPhrase?: string | null,
  matchPhrasePrefix?: string | null,
  multiMatch?: string | null,
  exists?: boolean | null,
  wildcard?: string | null,
  regexp?: string | null,
  range?: Array< string | null > | null,
};

export type SearchableRestaurantSortInput = {
  field?: SearchableRestaurantSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableRestaurantSortableFields {
  id = "id",
  name = "name",
  location = "location",
  description = "description",
  phoneNumber = "phoneNumber",
  categories = "categories",
}


export enum SearchableSortDirection {
  asc = "asc",
  desc = "desc",
}


export type SearchableMenuItemFilterInput = {
  id?: SearchableIDFilterInput | null,
  foodItemID?: SearchableIDFilterInput | null,
  menuID?: SearchableIDFilterInput | null,
  and?: Array< SearchableMenuItemFilterInput | null > | null,
  or?: Array< SearchableMenuItemFilterInput | null > | null,
  not?: SearchableMenuItemFilterInput | null,
};

export type SearchableMenuItemSortInput = {
  field?: SearchableMenuItemSortableFields | null,
  direction?: SearchableSortDirection | null,
};

export enum SearchableMenuItemSortableFields {
  id = "id",
  foodItemID = "foodItemID",
  menuID = "menuID",
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
    categories: Array< string | null >,
    menus:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        restaurantID: string,
        name: string,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    foodItems:  {
      __typename: "ModelFoodItemConnection",
      items:  Array< {
        __typename: "FoodItem",
        id: string,
        restaurantID: string,
        name: string,
        description: string | null,
        price: number,
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
    categories: Array< string | null >,
    menus:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        restaurantID: string,
        name: string,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    foodItems:  {
      __typename: "ModelFoodItemConnection",
      items:  Array< {
        __typename: "FoodItem",
        id: string,
        restaurantID: string,
        name: string,
        description: string | null,
        price: number,
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
    categories: Array< string | null >,
    menus:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        restaurantID: string,
        name: string,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    foodItems:  {
      __typename: "ModelFoodItemConnection",
      items:  Array< {
        __typename: "FoodItem",
        id: string,
        restaurantID: string,
        name: string,
        description: string | null,
        price: number,
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
    restaurantID: string,
    name: string,
    description: string | null,
    menuItems:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        foodItemID: string,
        menuID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    restaurantID: string,
    name: string,
    description: string | null,
    menuItems:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        foodItemID: string,
        menuID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    restaurantID: string,
    name: string,
    description: string | null,
    menuItems:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        foodItemID: string,
        menuID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMenuItemMutationVariables = {
  input: CreateMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type CreateMenuItemMutation = {
  createMenuItem:  {
    __typename: "MenuItem",
    id: string,
    foodItemID: string,
    menuID: string,
    foodItem:  {
      __typename: "FoodItem",
      id: string,
      restaurantID: string,
      name: string,
      description: string | null,
      price: number,
      menus:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    menu:  {
      __typename: "Menu",
      id: string,
      restaurantID: string,
      name: string,
      description: string | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMenuItemMutationVariables = {
  input: UpdateMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type UpdateMenuItemMutation = {
  updateMenuItem:  {
    __typename: "MenuItem",
    id: string,
    foodItemID: string,
    menuID: string,
    foodItem:  {
      __typename: "FoodItem",
      id: string,
      restaurantID: string,
      name: string,
      description: string | null,
      price: number,
      menus:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    menu:  {
      __typename: "Menu",
      id: string,
      restaurantID: string,
      name: string,
      description: string | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMenuItemMutationVariables = {
  input: DeleteMenuItemInput,
  condition?: ModelMenuItemConditionInput | null,
};

export type DeleteMenuItemMutation = {
  deleteMenuItem:  {
    __typename: "MenuItem",
    id: string,
    foodItemID: string,
    menuID: string,
    foodItem:  {
      __typename: "FoodItem",
      id: string,
      restaurantID: string,
      name: string,
      description: string | null,
      price: number,
      menus:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    menu:  {
      __typename: "Menu",
      id: string,
      restaurantID: string,
      name: string,
      description: string | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFoodItemMutationVariables = {
  input: CreateFoodItemInput,
  condition?: ModelFoodItemConditionInput | null,
};

export type CreateFoodItemMutation = {
  createFoodItem:  {
    __typename: "FoodItem",
    id: string,
    restaurantID: string,
    name: string,
    description: string | null,
    price: number,
    menus:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        foodItemID: string,
        menuID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFoodItemMutationVariables = {
  input: UpdateFoodItemInput,
  condition?: ModelFoodItemConditionInput | null,
};

export type UpdateFoodItemMutation = {
  updateFoodItem:  {
    __typename: "FoodItem",
    id: string,
    restaurantID: string,
    name: string,
    description: string | null,
    price: number,
    menus:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        foodItemID: string,
        menuID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFoodItemMutationVariables = {
  input: DeleteFoodItemInput,
  condition?: ModelFoodItemConditionInput | null,
};

export type DeleteFoodItemMutation = {
  deleteFoodItem:  {
    __typename: "FoodItem",
    id: string,
    restaurantID: string,
    name: string,
    description: string | null,
    price: number,
    menus:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        foodItemID: string,
        menuID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    categories: Array< string | null >,
    menus:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        restaurantID: string,
        name: string,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    foodItems:  {
      __typename: "ModelFoodItemConnection",
      items:  Array< {
        __typename: "FoodItem",
        id: string,
        restaurantID: string,
        name: string,
        description: string | null,
        price: number,
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
      categories: Array< string | null >,
      menus:  {
        __typename: "ModelMenuConnection",
        nextToken: string | null,
      } | null,
      foodItems:  {
        __typename: "ModelFoodItemConnection",
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
    restaurantID: string,
    name: string,
    description: string | null,
    menuItems:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        foodItemID: string,
        menuID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
      restaurantID: string,
      name: string,
      description: string | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFoodItemQueryVariables = {
  id: string,
};

export type GetFoodItemQuery = {
  getFoodItem:  {
    __typename: "FoodItem",
    id: string,
    restaurantID: string,
    name: string,
    description: string | null,
    price: number,
    menus:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        foodItemID: string,
        menuID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFoodItemsQueryVariables = {
  filter?: ModelFoodItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFoodItemsQuery = {
  listFoodItems:  {
    __typename: "ModelFoodItemConnection",
    items:  Array< {
      __typename: "FoodItem",
      id: string,
      restaurantID: string,
      name: string,
      description: string | null,
      price: number,
      menus:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type RestaurantByNameQueryVariables = {
  name?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRestaurantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RestaurantByNameQuery = {
  restaurantByName:  {
    __typename: "ModelRestaurantConnection",
    items:  Array< {
      __typename: "Restaurant",
      id: string,
      name: string,
      location: string,
      description: string | null,
      phoneNumber: string | null,
      categories: Array< string | null >,
      menus:  {
        __typename: "ModelMenuConnection",
        nextToken: string | null,
      } | null,
      foodItems:  {
        __typename: "ModelFoodItemConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type SearchRestaurantsQueryVariables = {
  filter?: SearchableRestaurantFilterInput | null,
  sort?: SearchableRestaurantSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchRestaurantsQuery = {
  searchRestaurants:  {
    __typename: "SearchableRestaurantConnection",
    items:  Array< {
      __typename: "Restaurant",
      id: string,
      name: string,
      location: string,
      description: string | null,
      phoneNumber: string | null,
      categories: Array< string | null >,
      menus:  {
        __typename: "ModelMenuConnection",
        nextToken: string | null,
      } | null,
      foodItems:  {
        __typename: "ModelFoodItemConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
  } | null,
};

export type SearchMenuItemsQueryVariables = {
  filter?: SearchableMenuItemFilterInput | null,
  sort?: SearchableMenuItemSortInput | null,
  limit?: number | null,
  nextToken?: string | null,
  from?: number | null,
};

export type SearchMenuItemsQuery = {
  searchMenuItems:  {
    __typename: "SearchableMenuItemConnection",
    items:  Array< {
      __typename: "MenuItem",
      id: string,
      foodItemID: string,
      menuID: string,
      foodItem:  {
        __typename: "FoodItem",
        id: string,
        restaurantID: string,
        name: string,
        description: string | null,
        price: number,
        createdAt: string,
        updatedAt: string,
      },
      menu:  {
        __typename: "Menu",
        id: string,
        restaurantID: string,
        name: string,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    total: number | null,
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
    categories: Array< string | null >,
    menus:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        restaurantID: string,
        name: string,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    foodItems:  {
      __typename: "ModelFoodItemConnection",
      items:  Array< {
        __typename: "FoodItem",
        id: string,
        restaurantID: string,
        name: string,
        description: string | null,
        price: number,
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
    categories: Array< string | null >,
    menus:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        restaurantID: string,
        name: string,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    foodItems:  {
      __typename: "ModelFoodItemConnection",
      items:  Array< {
        __typename: "FoodItem",
        id: string,
        restaurantID: string,
        name: string,
        description: string | null,
        price: number,
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
    categories: Array< string | null >,
    menus:  {
      __typename: "ModelMenuConnection",
      items:  Array< {
        __typename: "Menu",
        id: string,
        restaurantID: string,
        name: string,
        description: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    foodItems:  {
      __typename: "ModelFoodItemConnection",
      items:  Array< {
        __typename: "FoodItem",
        id: string,
        restaurantID: string,
        name: string,
        description: string | null,
        price: number,
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
    restaurantID: string,
    name: string,
    description: string | null,
    menuItems:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        foodItemID: string,
        menuID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMenuSubscription = {
  onUpdateMenu:  {
    __typename: "Menu",
    id: string,
    restaurantID: string,
    name: string,
    description: string | null,
    menuItems:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        foodItemID: string,
        menuID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMenuSubscription = {
  onDeleteMenu:  {
    __typename: "Menu",
    id: string,
    restaurantID: string,
    name: string,
    description: string | null,
    menuItems:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        foodItemID: string,
        menuID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMenuItemSubscription = {
  onCreateMenuItem:  {
    __typename: "MenuItem",
    id: string,
    foodItemID: string,
    menuID: string,
    foodItem:  {
      __typename: "FoodItem",
      id: string,
      restaurantID: string,
      name: string,
      description: string | null,
      price: number,
      menus:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    menu:  {
      __typename: "Menu",
      id: string,
      restaurantID: string,
      name: string,
      description: string | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMenuItemSubscription = {
  onUpdateMenuItem:  {
    __typename: "MenuItem",
    id: string,
    foodItemID: string,
    menuID: string,
    foodItem:  {
      __typename: "FoodItem",
      id: string,
      restaurantID: string,
      name: string,
      description: string | null,
      price: number,
      menus:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    menu:  {
      __typename: "Menu",
      id: string,
      restaurantID: string,
      name: string,
      description: string | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMenuItemSubscription = {
  onDeleteMenuItem:  {
    __typename: "MenuItem",
    id: string,
    foodItemID: string,
    menuID: string,
    foodItem:  {
      __typename: "FoodItem",
      id: string,
      restaurantID: string,
      name: string,
      description: string | null,
      price: number,
      menus:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    menu:  {
      __typename: "Menu",
      id: string,
      restaurantID: string,
      name: string,
      description: string | null,
      menuItems:  {
        __typename: "ModelMenuItemConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFoodItemSubscription = {
  onCreateFoodItem:  {
    __typename: "FoodItem",
    id: string,
    restaurantID: string,
    name: string,
    description: string | null,
    price: number,
    menus:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        foodItemID: string,
        menuID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFoodItemSubscription = {
  onUpdateFoodItem:  {
    __typename: "FoodItem",
    id: string,
    restaurantID: string,
    name: string,
    description: string | null,
    price: number,
    menus:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        foodItemID: string,
        menuID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFoodItemSubscription = {
  onDeleteFoodItem:  {
    __typename: "FoodItem",
    id: string,
    restaurantID: string,
    name: string,
    description: string | null,
    price: number,
    menus:  {
      __typename: "ModelMenuItemConnection",
      items:  Array< {
        __typename: "MenuItem",
        id: string,
        foodItemID: string,
        menuID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
