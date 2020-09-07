import React from 'react';
import { FormControl, FormLabel, Input, InputProps } from '@chakra-ui/core';
import { FormRulesType } from 'types/';
import { FormError } from './formerror';

interface FormInputProps extends Omit<InputProps, 'placeholder' | 'isInvalid' | 'htmlFor' | 'name' | 'type'> {
  elementDetails: FormRulesType;
  errorText?: string;
}
/**
 * @name FormInput
 * @description Creates an input section for our form. Unlisted props go the the input section
 * @prop {FormRulesType} elementDetails This holds all the rules and details for the form section
 * @prop {string} errorText This is the error message displayed to the user.
 * @prop {HTMLInputElement} ref This ref is used for forward the 'register' object from react-form-hooks.
 *
 */
export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ elementDetails, errorText, ...rest }, ref): JSX.Element => {
    return (
      <FormControl>
        <FormLabel htmlFor={elementDetails.id}>{elementDetails.label}</FormLabel>
        <Input
          {...rest}
          placeholder={elementDetails.placeholder}
          isInvalid={!!errorText}
          ref={ref}
          type={elementDetails.type}
          name={elementDetails.id}
        />
        <FormError errorText={errorText} />
      </FormControl>
    );
  }
);
FormInput.displayName = 'FormInput';
