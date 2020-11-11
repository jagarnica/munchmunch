import React from 'react';
import { Box } from '@chakra-ui/core';
import { useSiteMetadata } from 'utils/hooks/queries';
import { Header } from './navbar/header';

export interface LayoutProps {
  fullWidth?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, fullWidth = false }) => {
  const { title } = useSiteMetadata();

  return (
    <>
      <Header siteTitle={title} />
      <Box
        margin="0 auto"
        maxW={fullWidth ? 1920 : 960}
        padding={
          fullWidth
            ? { base: `0 1.0875rem 1.45rem`, sm: '0 1.0875rem 1.45rem', lg: `0 2.4rem 1.45rem` }
            : { base: `0 1.0875rem 1.45rem` }
        }
      >
        <main>{children}</main>
        <footer>© {new Date().getFullYear()} Munch Munch</footer>
      </Box>
    </>
  );
};
