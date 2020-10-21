import { FormRulesType } from 'types/';

const restuarantSearchRules = {
  required: true,
  maxLength: 50,
};
export const restuarantSearch: FormRulesType = {
  id: `resstuarantquery`,
  placeholder: 'Search Here...',
  label: 'Find Food',
  type: 'text',
  maxLength: '100',
  rules: restuarantSearchRules,
};
