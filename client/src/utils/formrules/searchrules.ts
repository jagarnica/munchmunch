import { FormRulesType } from 'types/';

const restaurantSearchRules = {
  required: true,
  maxLength: 50,
};
export const restaurantSearch: FormRulesType = {
  id: `restaurantQuery`,
  placeholder: 'Search Here...',
  label: 'Find Food',
  type: 'text',
  maxLength: '100',
  rules: restaurantSearchRules,
};
