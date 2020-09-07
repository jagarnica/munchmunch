import React from 'react';
import styled from 'styled-components';
import { Box, Grid, Text } from '@chakra-ui/core';
import { navigate } from '@reach/router';

export interface NavItemProps {
  title: string;
  icon?: React.ReactSVGElement;
  link?: string;
  onClick?: () => void;
}
export const NavItem = ({ title, icon, link, onClick }: NavItemProps): JSX.Element => {
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

        <Text>{title}</Text>
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
