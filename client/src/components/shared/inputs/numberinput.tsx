import * as React from 'react';
import { useNumberInput, UseNumberInputProps, InputProps, Button, Input, Stack } from '@chakra-ui/react';

export interface NumberInputProps extends UseNumberInputProps {
  inputProps?: InputProps;
  maxW?: string | number;
  maxWidth?: string | number;
}

/**
 * @name NumberInput
 * @description Element that allows the user to enter a quantity using plus and
 * minus buttons. Accepts all the props accepted by UseNumberInputProps.
 * @prop {InputProps} inputProps *Optional* Gets passed to the input element
 * @prop {string | number} maxWidth *Optional* Sets the max width.
 * @returns JSX.Element
 */
export function NumberInput({ maxW, maxWidth, inputProps, ...rest }: NumberInputProps): JSX.Element {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    ...rest,
  });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps({ ...inputProps });
  return (
    <Stack direction="row" maxW={maxW} maxWidth={maxWidth}>
      <Button flex="1" textAlign="center" padding="0" {...dec}>
        -
      </Button>
      <Input
        flex="1"
        alignSelf="center"
        minW="32px"
        padding="0"
        w="auto"
        isReadOnly={true}
        textAlign="center"
        {...input}
      />
      <Button flex="1" padding="0" {...inc}>
        +
      </Button>
    </Stack>
  );
}
