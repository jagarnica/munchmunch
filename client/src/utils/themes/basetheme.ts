import { theme } from '@chakra-ui/react';

export const baseSiteTheme = {
  header: {
    borderColor: theme.colors.gray[100],
    zIndex: 10,
  },
  toastDefaults: {
    duration: 1000,
    isClosable: true,
  },
};
