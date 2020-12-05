import * as React from 'react';
import { LargeSearchBar, LargeSearchBarProps } from 'components/shared/largesearchbar';
import { useForm } from 'react-hook-form';
import { restaurantSearch } from 'utils/formrules/';
import { restaurantQuery } from 'types';

export interface RestaurantSearchBarProps extends Omit<LargeSearchBarProps, 'onSubmit' | 'ariaLabel'> {
  onSubmit: (query: string) => void;
  defaultValue?: string;
  autoFocus?: boolean;
}
/**
 * @name RestaurantSearchBar
 * @description This component is a search bar that is meant for searching up restaurants.
 * If the user enters a valid query the onSubmit function is called with query string
 * passed in.
 * @prop {boolean} autoFocus If set to true, the bar will focus itself automatically
 * after every rerender
 * @prop {string} defaultValue This sets the default value when the bar is initially
 * displayed.
 * @returns JSX.Element
 */
export const RestaurantSearchBar = ({
  onSubmit,
  defaultValue,
  autoFocus,
  ...rest
}: RestaurantSearchBarProps): JSX.Element => {
  const { handleSubmit, register } = useForm<restaurantQuery>();
  const searchBarRef = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    if (autoFocus) {
      searchBarRef?.current?.focus();
    }
  });
  function handleSearchSubmit(data: restaurantQuery) {
    const { id } = restaurantSearch;
    const query = data[id];
    onSubmit?.(query);
  }

  return (
    <form onSubmit={handleSubmit(handleSearchSubmit)}>
      <LargeSearchBar
        defaultValue={defaultValue}
        type="text"
        placeholder="I'm hungry for..."
        name={restaurantSearch.id}
        ref={e => {
          register(e, {
            required: true,
            ...restaurantSearch.rules,
          });
          searchBarRef.current = e;
        }}
        ariaLabel="Search Restaurants"
        buttonProps={{
          type: 'submit',
        }}
        {...rest}
      />
    </form>
  );
};
