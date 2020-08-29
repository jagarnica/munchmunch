import React from 'react';
import { Text, theme } from '@chakra-ui/core';
/**
 * @name FormError
 * @description This is the standard error displayed. Will only display something if the
 * text is not undefined.
 * @prop {string} errorText
 * @prop {string} marginTop
 */
export const FormError = ({
  errorText,
  marginTop = '0.5rem',
  ...rest
}: {
  errorText?: string;
  marginTop?: string;
}): JSX.Element | null =>
  errorText ? (
    <Text color={theme.colors.red[600]} {...rest} marginTop={marginTop}>
      {errorText}
    </Text>
  ) : null;
