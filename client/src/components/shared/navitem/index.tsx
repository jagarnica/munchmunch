import React from 'react';
import { useMatch, navigate } from '@reach/router';
import styled from 'styled-components';
import { Box, Grid, Text } from '@chakra-ui/react';

export interface NavItemProps {
  title: string;
  icon?: React.ReactSVGElement;
  link?: string;
  onClick?: () => void | Promise<void>;
}
/**
 * @name NavItem
 * @description This a large button that can be used for navigation or for a simple
 * onclick event.
 * @prop {string} title This is required. Sets the name of main text of the button.
 * @prop {ReactSVGElement} icon Optional icon you set for the side menu.
 * @prop {string} link Optional, if you want to use this for INTERNAL navigation, pass the link in
 * and clicking the link will automatically navigate to that page.
 * @prop {void} onClick Optional, this is called when the user clicks on the button
 * @returns {JSX.Element}
 */
export const NavItem = ({ title, icon, link, onClick }: NavItemProps): JSX.Element => {
  const isActive = (link && useMatch(link)) || false;
  function handleNavClick(event?: React.MouseEvent) {
    event?.preventDefault();
    if (link) {
      navigate(link);
    }
    onClick?.(); // run the callback function if it is clicked.
  }
  return (
    <NavContainer onClick={handleNavClick} padding="1.5rem">
      <Grid gridTemplateRows="auto auto auto" gridTemplateColumns="auto 1fr" columnGap="20px">
        {icon && <span>{icon}</span>}

        <Text color={isActive ? 'tomato' : ``}>{title}</Text>
      </Grid>
    </NavContainer>
  );
};

const NavContainer = styled(Box)`
  cursor: pointer;
  background: white;
  font-weight: bold;
  border-bottom: 1px solid rgba(227, 227, 227, 0.9);
  &:hover {
    background: rgba(245, 245, 245, 1);
  }
`;
