import { useStaticQuery, graphql } from 'gatsby';

export const useSiteTitle = (): string => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const siteTitle = site.siteMetadata.title;
  return siteTitle || ``;
};
