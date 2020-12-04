import * as React from 'react';
import { Button, ButtonGroup, ButtonProps } from '@chakra-ui/react';

export interface ButtonNavGroupProps extends Omit<ButtonProps, 'children' | 'onClick'> {
  items: Array<{
    id: string;
    name: string;
  } | null>;
  activeId?: string;
  onClick: (id: string) => void;
}
/**
 * @name ButtonNavGroup
 * @description Displays a set of buttons generated by the array of items passed in. When a button
 * is clicked the callback onClick function is called.
 * @prop {[items]} items This is the array of items used for the buttons.
 * @prop {string} activeId This sets which item has the "active" styles applied.
 * @prop {(id: string)=>void} onClick This is called when the user clicks one of the buttons
 */
export const ButtonNavGroup = ({ items, activeId, onClick, ...rest }: ButtonNavGroupProps): JSX.Element | null => {
  function handleMenuButtonClick(menuID: string) {
    onClick?.(menuID);
  }
  if (items)
    return (
      <ButtonGroup>
        {items?.map(item => {
          if (!item) return null;
          const { id, name } = item;
          return (
            <Button
              isActive={activeId === id}
              colorScheme="gray"
              variant="outline"
              rounded="full"
              _active={{
                backgroundColor: 'orange.500',
                color: `white`,
              }}
              onClick={() => {
                handleMenuButtonClick(id);
              }}
              key={id}
              {...rest}
            >
              {name}
            </Button>
          );
        })}
      </ButtonGroup>
    );
  return null;
};
