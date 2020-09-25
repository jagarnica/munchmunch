import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { theme, ThemeProvider, CSSReset, ITheme } from '@chakra-ui/core';
import * as customIcons from 'images/tsxicons';
import { Header } from './navbar/header';

interface customTheme extends ITheme {
  header: {
    borderColor: string;
    zIndex: number;
  };
  toastDefaults: {
    duration: number;
    isClosable: boolean;
  };
}
const baseSiteTheme: customTheme = {
  ...theme,
  icons: {
    ...theme.icons,
    ...customIcons,
  },
  header: {
    borderColor: theme.colors.gray[100],
    zIndex: 10,
  },
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
  console.log('icons', baseSiteTheme.icons);
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
