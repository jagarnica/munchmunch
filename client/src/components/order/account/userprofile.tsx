import * as React from 'react';
import { Box, Button, Center, Divider, HStack, Text} from '@chakra-ui/react';

export const UserProfile = (): JSX.Element => {
  /**
   * Put the user profile stuff here!
   */
  return (
    <>
      <Box bg="#ED8936" border="1px" borderRadius="3px">
        <HStack p="5px">
          <Box fontSize="3xl" w="150px" h="40px">
            Profile
          </Box>
          <Button>Change Password</Button>
        </HStack>
        <Divider orientation="horizontal" />
        <Box>
          <HStack>
            <Center w="100px" fontSize="3xl">
              Name
            </Center>
            <Text fontSize="3xl">Last Name</Text>
          </HStack>
          <HStack>
            <Text border="1px" p="10px">
              Sample Text
            </Text>
            <Text border="1px" p="10px">
              Sample Text
            </Text>
          </HStack>
          <HStack>
            <Center w="100px" fontSize="3xl">
              Email
            </Center>
            <Center w="300px" fontSize="3xl">
              Phone Number
            </Center>
          </HStack>
          <HStack>
            <Text border="1px" p="10px">
              Sample Text
            </Text>
            <Text border="1px" p="10px">
              Sample Text
            </Text>
          </HStack>
        </Box>
      </Box>
    </>
  );
};
