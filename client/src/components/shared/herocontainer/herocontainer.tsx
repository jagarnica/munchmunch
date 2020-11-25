import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@chakra-ui/react';

export interface HeroContainerProps {
  background: React.ReactNode;
  minHeight?: string;
  topOffset?: string;
  maxHeight?: string | number;
  contentStyleProps?: BoxProps;
}
/**
 * @name HeroContainer
 * @description Create a special container that creates a background that ignore the current layout.
 * Really only recommended to put at the top of the page.
 * @prop {React.ReactNode} children
 * @prop {React.ReactNode} background
 * @prop {string} minHeight
 * @prop {string} topOffset This is handy to set how much from the top the background should be.
 */
export const HeroContainer: React.FC<HeroContainerProps> = ({
  children,
  background,
  minHeight,
  topOffset,
  maxHeight,
  contentStyleProps,
}): JSX.Element => {
  return (
    <>
      <RelativeContainer {...contentStyleProps} maxHeight={maxHeight} minHeight={minHeight}>
        {children}
      </RelativeContainer>
      <AbsoluteCotainer maxHeight={maxHeight} topOffset={topOffset} minHeight={minHeight}>
        {background}
      </AbsoluteCotainer>
    </>
  );
};

const RelativeContainer = styled(Box)`
  position: relative;
  max-width: 100%;
  width: 100%;
  z-index: 1;
`;
const AbsoluteCotainer = styled(Box)<{ topOffset?: string }>`
  position: absolute;
  z-index: -1;
  width: 100vw;
  overflow: hidden;
  top: ${props => (props.topOffset ? props.topOffset : `72px`)};
  left: 0;
`;
