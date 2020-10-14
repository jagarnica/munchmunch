import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { AspectRatioBox } from 'components/shared/aspectratiobox';
import { Box, SimpleGrid, Stack, Text, Icon, Flex } from '@chakra-ui/core';
import { IconTitleDesc } from 'components/shared/card/';
import styled from 'styled-components';

/**
 * @name WhyMunchMunch
 * @description Displays three cards to the user explaining why they should use
 * MunchMunch.
 */
export const WhyMunchMunch = (): JSX.Element => {
  return (
    <Stack width="100%" spacing={19.5} flexDirection="column" justifyContent="center">
      <Text textAlign="center" color="gray.700" fontWeight="bold" fontSize="4xl" as="span">
        Why MunchMunch
      </Text>
      <SimpleGrid minChildWidth="252px" alignSelf="stretch" spacing="20px">
        <HoverCard
          boxShadow="none"
          iconSize="2.4em"
          iconName="cutfee"
          mainColor="red.400"
          iconBgColor="red.100"
          title="Low Fee Diet"
          description="We run lean and work closely with the restuarants listed to make sure most of the money goes to supporting them while keeping costs for you lower than the competition. We make the code but they provide the delicious goods."
        />
        <HoverCard
          boxShadow="none"
          iconSize="2.4em"
          iconName="orderbell"
          mainColor="orange.400"
          iconBgColor="orange.100"
          title="Order Quickly"
          description="You can find many of your favorite spots here. We pride ourselves on being the fastest way to order food without hassle or a million logins. No more downloading an app for every single one of your favorite restaurants."
        />
        <HoverCard
          boxShadow="none"
          iconSize="2.4em"
          iconName="burningtire"
          mainColor="blue.400"
          iconBgColor="blue.100"
          title="Built for Speed"
          description="Dealing with a buggy slow mess of a website is a massive headache. There are thousands of different websites built on old code to get online ordering done but not us."
        />
      </SimpleGrid>
    </Stack>
  );
};
export const PhoneOrderScreenImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "heroimages/phoneorderscreen.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          # Makes it trivial to update as your page's design changes.
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return data.file.childImageSharp.fluid;
};

export const CheckMark = (): JSX.Element => {
  return (
    <AspectRatioBox maxWidth="40px" ratio={1}>
      <Box
        height="100%"
        width="100%"
        d="flex"
        alignItems="center"
        alignContent="center"
        justifyContent="center"
        borderRadius="50%"
        bg="orange.500"
        padding="0.3em"
      >
        <Icon name="check" color="white" size="1.2em" />
      </Box>
    </AspectRatioBox>
  );
};
export const OneStopShop = (): JSX.Element => {
  const image = PhoneOrderScreenImage();

  return (
    <SimpleGrid minChildWidth="275px">
      <Box d="flex" width="100%" justifyContent="center" alignItems="center">
        <Img
          style={{ maxWidth: `250px`, width: `100%`, objectPosition: `50% 50%`, objectFit: `cover` }}
          fluid={image}
          alt="mobile order preview "
        />
      </Box>

      <Box d="flex" justifyContent="center">
        <Stack>
          <Text color="gray.700" fontWeight="bold" fontSize="4xl">{`It's a one stop shop.`}</Text>
          <Stack direction="row" spacing={15}>
            <CheckMark />
            <Text color="gray.600">
              No more remembering a million logins for a millions different apps. No more entering you credit card every
              time for every different restaurant. Just log in and you are ready to place an order.{' '}
            </Text>
          </Stack>

          <Text color="gray.600">Choose when you want to pick up your food at a time that works for you.</Text>
        </Stack>
      </Box>
    </SimpleGrid>
  );
};

const HoverCard = styled(IconTitleDesc)`
  transition: box-shadow 0.3s ease, transform 0.18s ease-out;

  border: 1px solid #eeeeee;
  transform: translate(0px, 0px);
  &:hover {
    box-shadow: 0px 10px 18px rgba(0, 0, 0, 0.12);
    transform: translate(0px, -2px);
  }
`;
