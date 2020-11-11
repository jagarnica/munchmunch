import { ITheme, theme } from '@chakra-ui/core';
import * as customIcons from 'images/tsxicons';

export interface customTheme extends ITheme {
  header: {
    borderColor: string;
    zIndex: number;
  };
  toastDefaults: {
    duration: number;
    isClosable: boolean;
  };
}
export const baseSiteTheme: customTheme = {
  ...theme,
  icons: {
    ...theme.icons,
    ...customIcons,
  },
  header: {
    borderColor: theme.colors.gray[100],
    zIndex: 10,
  },
  toastDefaults: {
    duration: 1000,
    isClosable: true,
  },
};
