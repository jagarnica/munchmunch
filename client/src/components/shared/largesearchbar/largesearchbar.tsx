import React from 'react';
import { InputGroup, InputRightElement, IconButton, Input, InputProps, IconButtonProps } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';

export interface LargeSearchBarProps extends InputProps {
  buttonProps?: IconButtonProps;
}
/**
 * @name LargeSearchBar
 * @description It is a customized seach bar with a search icon as a search button.
 * Props for the button can be accessed through one of the props. The rest of the
 * props go straight to the input element
 * @prop {IconButtonProps} buttonProps These when destructed go to the button
 * @returns JSX.Element
 */
export const LargeSearchBar = React.forwardRef<HTMLInputElement, LargeSearchBarProps>(
  ({ buttonProps, ...rest }, ref): JSX.Element => {
    return (
      <InputGroup>
        <Input
          focusBorderColor="orange.400"
          _placeholder={{ color: 'gray.600' }}
          _focusWithin={{ bg: 'white' }}
          _hover={{ borderColor: 'orange.500' }}
          borderRadius="32px"
          borderColor="gray.500"
          autoFocus
          fontWeight="500"
          ref={ref}
          {...rest}
        />
        <InputRightElement>
          <IconButton
            _active={{
              color: 'orange.700',
            }}
            colorScheme="orange"
            variant="link"
            aria-label="search for restaurants"
            icon={<Search2Icon />}
            color="orange.500"
            {...buttonProps}
          />
        </InputRightElement>
      </InputGroup>
    );
  }
);
LargeSearchBar.displayName = 'LargeSearchBar';
