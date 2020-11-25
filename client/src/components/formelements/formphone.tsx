import React from 'react';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { phoneNumber } from 'utils/formrules';
import { FormError } from './formerror';

interface FormPhoneProps {
  errorText?: string;
}
/**
 * @name FormPhone
 * @description Creates a field for entering a US phone number. Requires a register
 * object passed in as a ref to use.
 * @prop {string} errorText If not null, is displayed to the user.
 */
export const FormPhone = React.forwardRef<HTMLInputElement, FormPhoneProps>(({ errorText, ...rest }, ref) => {
  return (
    <FormControl>
      <FormLabel htmlFor={phoneNumber.id}>{phoneNumber.label}</FormLabel>
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
