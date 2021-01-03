import React from 'react';
import { Box, Grid, Heading, BoxProps } from '@chakra-ui/react';

export interface FormContainerProps extends BoxProps {
  onSubmit?: (event: React.FormEvent) => void;
  formTitle: string | number;
  children: React.ReactNode;
  titleColor?: BoxProps['color'];
}
/**
 * @name FormContainer
 * @description A general responsive form container with a title. It is meant for
 * use in forms like 'login', 'signup', and etc
 * @prop {string} formTitle This is the name that is displayed to the user.
 * @prop {void} onSubmit This called when the form is submitted
 * @prop {string} titleColor Sets the title color.
 */
export const FormContainer: React.FC<FormContainerProps> = ({
  children,
  onSubmit,
  titleColor = 'blue.800',
  formTitle,
  ...rest
}) => {
  return (
    <Box width="100%" maxW="md" borderWidth="1px" rounded="lg" overflow="hidden" {...rest}>
      <form onSubmit={onSubmit}>
        <Grid padding="1.45rem" gridAutoFlow="row" gridGap="1rem">
          <Heading color={titleColor}>{formTitle}</Heading>
          {children}
        </Grid>
      </form>
    </Box>
  );
};
