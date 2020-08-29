import React from 'react';
import { FormControl, FormLabel, Select, Input, InputProps } from '@chakra-ui/core';
import { phoneNumber } from 'components/auth/formrules';
import { FormError } from './formerror';

interface FormPhoneProps {
  errorText?: string;
}
export const FormPhone = React.forwardRef<HTMLInputElement, FormPhoneProps>(({ errorText, ...rest }, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={phoneNumber.id}>{phoneNumber.label}</FormLabel>
      <Select placeholder="Select option">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
      <Input
        {...rest}
        placeholder={phoneNumber.placeholder}
        isInvalid={!!errorText}
        ref={ref}
        type={phoneNumber.type}
        name={phoneNumber.id}
      />
      <FormError errorText={errorText} />
    </FormControl>
  );
});
FormPhone.displayName = 'FormPhone';
