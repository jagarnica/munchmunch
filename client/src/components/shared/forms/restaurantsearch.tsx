import * as React from 'react';
import { LargeSearchBar, LargeSearchBarProps } from 'components/shared/largesearchbar';
import { useForm } from 'react-hook-form';
import { restuarantSearch } from 'utils/formrules/';
import { restaurantQuery } from 'types';

export interface RestuarantSearchBarProps extends Omit<LargeSearchBarProps, 'onSubmit'> {
  onSubmit: (query: string) => void;
  defaultValue?: string;
  autoFocus?: boolean;
}
/**
 * @name RestuarantSearchBar
 * @description This component is a search bar that is meant for searching up restaurants.
 * If the user enters a valid query the onSubmit function is called with query string
 * passed in.
 * @prop {boolean} autoFocus If set to true, the bar will focus itself automatically
 * after every rerender
 * @prop {string} defaultValue This sets the default value when the bar is initailly
 * displayed.
 * @returns JSX.Element
 */
export const RestuarantSearchBar = ({
  onSubmit,
  defaultValue,
  autoFocus,
  ...rest
}: RestuarantSearchBarProps): JSX.Element => {
  const { handleSubmit, register } = useForm<restaurantQuery>();
  const searchBarRef = React.useRef<HTMLInputElement | null>(null);
  React.useEffect(() => {
    if (autoFocus) {
      searchBarRef?.current?.focus();
    }
  });
  function handleSearchSubmit(data: restaurantQuery) {
    const { id } = restuarantSearch;
    const query = data[id];
    onSubmit?.(query);
  }

  return (
    <form onSubmit={handleSubmit(handleSearchSubmit)}>
      <LargeSearchBar
        defaultValue={defaultValue}
        type="text"
        name={restuarantSearch.id}
        ref={e => {
          register(e, {
            required: true,
            ...restuarantSearch.rules,
          });
          searchBarRef.current = e;
        }}
        buttonProps={{
          'aria-label': 'search restuarants',
          type: 'submit',
        }}
        {...rest}
      />
    </form>
  );
};
