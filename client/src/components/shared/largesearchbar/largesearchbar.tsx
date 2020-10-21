import React from 'react';
import { InputGroup, InputRightElement, IconButton, Input, InputProps, PseudoBox, ButtonProps } from '@chakra-ui/core';

export interface SearchBarProps {
  inputProps?: InputProps;
  buttonProps?: ButtonProps;
}

export const LargeSearchBar = ({ inputProps, buttonProps }: SearchBarProps): JSX.Element => {
  return (
    <PseudoBox>
      <InputGroup>
        <Input
          focusBorderColor="orange.400"
          _placeholder={{ color: 'gray.800' }}
          _focusWithin={{ bg: 'white' }}
          _hover={{ borderColor: 'orange.500' }}
          borderRadius="32px"
          borderColor="gray.500"
          autoFocus
          {...inputProps}
        />
        <InputRightElement>
          <IconButton
            _active={{
              color: 'orange.700',
            }}
            variantColor="orange"
            variant="link"
            aria-label="search for restaurants"
            icon="search-2"
            color="orange.500"
            {...buttonProps}
          />
        </InputRightElement>
      </InputGroup>
    </PseudoBox>
  );
};
