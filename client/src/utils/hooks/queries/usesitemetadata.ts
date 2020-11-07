import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = (): { title: string; description: string } => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  const { title } = site.siteMetadata || ``;
  const { description } = site.siteMetadata || ``;
  return { title, description };
};
