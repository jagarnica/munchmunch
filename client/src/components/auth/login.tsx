import React from 'react';
import * as Chakra from '@chakra-ui/core';

export function LoginCustomerForm(): React.ReactElement {
  return (
    <Chakra.Box width="100%" maxW="md" borderWidth="1px" rounded="lg" overflow="hidden">
      <Chakra.Flex padding="1.45rem" flexDirection="column">
        <Chakra.Heading alignSelf="center">Login</Chakra.Heading>
        <Chakra.FormControl>
          <Chakra.FormLabel htmlFor="email">Email</Chakra.FormLabel>
          <Chakra.Input placeholder="Email" />
          <Chakra.FormLabel marginTop="1.45rem" htmlFor="password">
            Password
          </Chakra.FormLabel>
          <Chakra.Input placeholder="Password" type="password" />
          <Chakra.Button marginTop="1.45rem" width="100%" type="submit">
            Sign In
          </Chakra.Button>
        </Chakra.FormControl>
      </Chakra.Flex>
    </Chakra.Box>
  );
}
