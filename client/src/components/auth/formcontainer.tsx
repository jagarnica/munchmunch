import React from 'react';
import { Box, Grid, Heading } from '@chakra-ui/core';
export interface FormContainerProps {
  onSubmit?: (event: React.FormEvent) => void;
  formTitle: string | number;
  children: React.ReactNode;
}
/**
 * @name FormContainer
 * @description A general responsive form container with a title.
 * @prop {string} formTitle This is the name that is displayed to the user.
 * @prop {void} onSubmit This called when the form is submitted
 */
export const FormContainer: React.FC<FormContainerProps> = ({ children, onSubmit, formTitle }) => {
  return (
    <Box width="100%" maxW="md" borderWidth="1px" rounded="lg" overflow="hidden">
      <form onSubmit={onSubmit}>
        <Grid padding="1.45rem" gridAutoFlow="row" gridGap="1.5rem">
          <Heading>{formTitle}</Heading>
          {children}
        </Grid>
      </form>
    </Box>
  );
};
