import React from 'react';
import { InputGroup, InputRightElement, Input, InputProps, Icon, PseudoBox } from '@chakra-ui/core';

export const LargeSearchBar = (props: InputProps): JSX.Element => {
  return (
    <PseudoBox boxShadow="0px 8px 22px -6px rgba(24, 39, 75, 0.12), 0px 14px 64px -4px rgba(24, 39, 75, 0.12)">
      <InputGroup>
        <Input borderRadius="6px" {...props} size="lg" />
        <InputRightElement>
          <Icon name="search-2" color="orange.500" />
        </InputRightElement>
      </InputGroup>
    </PseudoBox>
  );
};
