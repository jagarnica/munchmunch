import React from 'react';
import { Box, Link, Stack, Text } from '@chakra-ui/react';
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
        <Stack spacing="14px">
          <Box w="225px" h="40px" bg="orange.400" borderRadius="lg" padding="8px" shadow="lg">
            <Link href="/newbusiness">Want to Join Munch Munch?</Link>
          </Box>
          <Box w="225px" h="40px" bg="orange.400" borderRadius="lg" padding="8px">
            <Text>© {new Date().getFullYear()} Munch Munch</Text>
          </Box>
          <Box w="225px" h="40px" bg="orange.400" borderRadius="lg" padding="8px">
            <Link href="/rewardslandingpage">Munch Munch Rewards</Link>
          </Box>
          <Box w="225px" h="40px" bg="orange.400" borderRadius="lg" padding="8px">
            <Link href="/termsofuse">Terms Of Use</Link>
          </Box>
          <Box w="225px" h="40px" bg="orange.400" borderRadius="lg" padding="8px">
            <Link href="/legalpolicy">Privacy Policy</Link>
          </Box>
          <Box w="225px" h="40px" bg="orange.400" borderRadius="lg" padding="8px">
            <Link href="/caprivacynotice">CA Privacy Notice</Link>
          </Box>
          <Box w="225px" h="40px" bg="orange.400" borderRadius="lg" padding="8px">
            <Link href="/donotsellmydata">DO NOT SELL MY INFO</Link>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
