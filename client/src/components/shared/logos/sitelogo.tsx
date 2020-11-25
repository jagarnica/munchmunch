import * as React from 'react';
import { Text, BoxProps } from '@chakra-ui/react';
import { Link } from 'gatsby';
import { useSiteMetadata } from 'utils/hooks/queries';

export interface SiteLogoProps extends BoxProps {
  clickable?: boolean;
}

/**
 * @name SiteLogo
 * @description This just holds the site logo styles. Handy so you dont have to
 * redo this every time. By default it is clickable and leads back to the home page.
 * It also accepts all the BoxProps from ChakraUI
 * @prop {boolean} clickable
 */
export const SiteLogo = ({ clickable = true, ...rest }: SiteLogoProps): JSX.Element => {
  const { title } = useSiteMetadata();
  return (
    <Text fontSize="2xl" {...rest} style={{ margin: 0, fontFamily: `Lobster` }}>
      {clickable ? (
        <Link
          to="/"
          style={{
            color: `inherit`,
            textDecoration: `none`,
          }}
        >
          {title}
        </Link>
      ) : (
        title
      )}
    </Text>
  );
};
