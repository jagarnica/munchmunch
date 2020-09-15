import React from 'react';
import { Text, SimpleGrid, Flex } from '@chakra-ui/core';
import Img from 'gatsby-image';
import { LargeSearchBar } from 'components/shared/largesearchbar';
import { useStaticQuery, graphql } from 'gatsby';
import { DefaultPageProps } from 'types';
import { OrderHistoryCard } from 'components/shared/card';

const HERO_HEIGHT = '400px;';

export const HeroImage = (): JSX.Element => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      heroImage: file(relativePath: { eq: "heroimages/bgheroimage.jpg" }) {
        childImageSharp {
          fluid(fit: CONTAIN, maxHeight: 1200, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return <Img style={{ height: HERO_HEIGHT, width: '100%' }} fluid={data.heroImage.childImageSharp.fluid} />;
};
export const OrderHome: React.FC<DefaultPageProps> = () => {
  return (
    <SimpleGrid maxW="100%" spacing="2.45rem">
      <SearchRestuarants />
      <UserPastOrders />
    </SimpleGrid>
  );
};

export const SearchRestuarants = (): JSX.Element => {
  return (
    <SimpleGrid spacing="20px">
      <Text as="span" fontWeight="bold" fontSize="3xl" color="#2D3748">
        Welcome Back,{' '}
        <Text as="span" color="orange.500">
          USERNAME 👋{' '}
        </Text>{' '}
      </Text>
      <Text as="span" fontWeight="bold" fontSize="3xl" color="#2D3748">
        What are you craving today?
      </Text>
      <LargeSearchBar placeholder="Search Here..." />
    </SimpleGrid>
  );
};

export const UserPastOrders = (): JSX.Element => {
  return (
    <SimpleGrid spacing="20px" maxWidth="100%">
      <Text fontSize="xl" fontWeight="bold" color="orange.500">
        My Favorites
      </Text>
      <SimpleGrid minChildWidth="280px" spacing="20px" overflow="scroll" maxWidth="100%">
        <OrderHistoryCard title="Yayoi" orderDate="Ordered on: August 26, 2020" />
        <OrderHistoryCard title="Yayoi" orderDate="Ordered on: August 26, 2020" />
        <OrderHistoryCard title="Yayoi" orderDate="Ordered on: August 26, 2020" />
        <OrderHistoryCard title="Yayoi" orderDate="Ordered on: August 26, 2020" />
        <OrderHistoryCard title="Yayoi" orderDate="Ordered on: August 26, 2020" />
        <OrderHistoryCard title="Yayoi" orderDate="Ordered on: August 26, 2020" />
        <OrderHistoryCard title="Yayoi" orderDate="Ordered on: August 26, 2020" />
        <OrderHistoryCard title="Yayoi" orderDate="Ordered on: August 26, 2020" />
        <OrderHistoryCard title="Yayoi" orderDate="Ordered on: August 26, 2020" />
        <OrderHistoryCard title="Yayoi" orderDate="Ordered on: August 26, 2020" />
        <OrderHistoryCard title="Yayoi" orderDate="Ordered on: August 26, 2020" />
        <OrderHistoryCard title="Yayoi" orderDate="Ordered on: August 26, 2020" />
      </SimpleGrid>
    </SimpleGrid>
  );
};
