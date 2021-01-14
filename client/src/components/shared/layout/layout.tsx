import React from 'react';
import { Box, Divider, Flex, Link, Spacer, Text } from '@chakra-ui/react';
import { Header } from './navbar/header';
import { SiteLogo } from '../logos/index';

export interface LayoutProps {
  fullWidth?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({ children, fullWidth = false }) => {
  return (
    <>
      <Header />
      <Box
        margin="0 auto"
        maxW={fullWidth ? 1920 : 960}
        padding={
          fullWidth
            ? { base: `0 1.0875rem 1.45rem`, sm: '0 1.0875rem 1.45rem', lg: `0 2.4rem 1.45rem` }
            : { base: `0 1.0875rem 1.45rem` }
        }
      >
        <main style={{ minHeight: 'calc(100vh - 73px)' }}>{children}</main>
        <Flex bg="black" color="White">
          <SiteLogo />
          <Divider height="75px" padding="5px" orientation="vertical" />
          <Box w="170px" h="100">
            <Link href="/newbusiness">Want to Join Munch Munch?</Link>
            <Text>© {new Date().getFullYear()} Munch Munch</Text>
          </Box>
          <Divider height="75px" padding="5px" orientation="vertical" />
          <Spacer />
          <Box w="175px" h="150">
            <Link href="/rewardslandingpage">Munch Munch Rewards</Link>
            <Link href="/termsofuse">Terms Of Use</Link>
          </Box>
          <Divider height="75px" padding="5px" orientation="vertical" />
          <Spacer />
          <Box w="170px" h="100">
            <Link href="/legalpolicy">Privacy Policy</Link>
            <Link href="/caprivacynotice">CA Privacy Notice</Link>
            <Link href="/donotsellmydata">DO NOT SELL MY INFO</Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
};
