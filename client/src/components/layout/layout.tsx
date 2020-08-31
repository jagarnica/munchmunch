import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { theme, ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Header } from './navbar/header';

const baseSiteTheme = {
  ...theme,
  toastDefaults: {
    duration: 1000,
    isClosable: true,
  },
};

export const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <ThemeProvider theme={baseSiteTheme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <CSSReset />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <footer>© {new Date().getFullYear()} Munch Munch</footer>
        </div>
      </ThemeProvider>
    </>
  );
};
