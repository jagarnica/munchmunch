import React, { useMemo } from 'react';
import styled from 'styled-components';

const aspectRatioPaddingNumber = (x: number): number => {
  return Math.fround((1 / x) * 100);
};
export interface AspectRatioProps {
  width?: string;
  maxWidth?: string;
  className?: string;
  backgroundColor?: string;
  ratio?: number;
}
/**
 * @name AspectRatioBox
 * @description Maintains an aspect ratio for the children of this component.
 *  It is very useful for images that need to be contained in a certain size.
 *  Sample Usage:  <AspectRatioBox aspectRatio={16/9}> {imageChosen} </AspectRatioBox>
 * @prop {number} width sets a fixed width for the component. Otherwise it is 100%.
 * @prop {string} className
 * @prop {string} maxWidth set a maximum width for the component.
 * @prop {number} aspectRatio Example, aspectRatio={16 / 9}.
 * @prop {React.ReactNode} children These are the items that will actually be displayed.
 * @prop {string} backgroundColor This set the background color for the container, the default is transparent
 */
export const AspectRatioBox: React.FC<AspectRatioProps> = ({
  width,
  maxWidth,
  ratio = 1,
  children,
  backgroundColor = 'transparent',
  className,
}) => {
  // We don't want have to recalculate this everytime.
  const paddingTopCalculated = useMemo(() => aspectRatioPaddingNumber(ratio), [ratio]);
  return (
    <MaxWidthWrapper className={className} width={width} maxWidth={maxWidth}>
      <AspectContainer backgroundColor={backgroundColor} paddingTop={paddingTopCalculated}>
        <AspectRatioInsideBox>{children}</AspectRatioInsideBox>
      </AspectContainer>
    </MaxWidthWrapper>
  );
};

const MaxWidthWrapper = styled.div<{ width?: string; maxWidth?: string }>`
  width: ${props => (props.width ? props.width : `100%`)};
  max-width: ${props => (props.maxWidth ? props.maxWidth : ``)};
`;
const AspectContainer = styled.div<{
  paddingTop?: number;
  backgroundColor?: string;
}>`
  border: none;
  position: relative;
  padding-top: ${props => (props.paddingTop ? `${props.paddingTop}%` : '')};
  background: ${props => (props.backgroundColor ? props.backgroundColor : 'black')};
  height: 0;
  overflow: hidden;
  width: 100%;
`;
const AspectRatioInsideBox = styled.div`
  position: absolute;
  background: transparent;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
