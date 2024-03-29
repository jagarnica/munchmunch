import React from 'react';
import styled from 'styled-components';

export interface NavbarButtonProps {
  width?: number;
  active?: boolean;
  tabIndex?: number;
  height?: number;
  onClick?: (mouseEvent: React.MouseEvent) => void;
  iconColor?: string;
}
/**
 * @name HamburgerButton
 * @description Creates a simple button meant to be used
 * in a nav.
 * @prop {number} width Sets the total width for the button.
 * @prop {boolean} active Sets if the icon should be in the "clicked" state.
 * @prop {number} height Sets the total height for the button
 * @prop {void} onClick This is fired after the user clicks on the icon. EVENT is passed in.
 * @prop {string} iconColor Sets the color for the icon. The default is black.
 *
 */
export const HamburgerButton: React.FC<NavbarButtonProps> = ({
  width = 32,
  active = false,
  height = 32,
  onClick,
  tabIndex = 1,
  iconColor,
}) => {
  let barClassName = '';
  if (active) {
    barClassName += 'clicked';
  }
  return (
    <>
      <Container
        tabIndex={tabIndex}
        role="button"
        onClick={
          onClick ||
          function noop() {
            // other we do nothing
          }
        } // If there is an onClick func passed in, do it!
        width={width}
        height={height}
        iconColor={iconColor}
      >
        <BarElement iconColor={iconColor} className={`top ${barClassName}`} />
        <BarElement iconColor={iconColor} className={`center ${barClassName}`} />
        <BarElement iconColor={iconColor} className={`bottom ${barClassName}`} />
      </Container>
    </>
  );
};

interface ContainerProps {
  width: number;
  height: number;
  iconColor?: string;
}
interface BarElementProps {
  translateY?: number;
  iconColor?: string;
  className?: string;
}
const Container = styled.div<React.HtmlHTMLAttributes<HTMLElement> & ContainerProps>`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  padding: 4px;
  cursor: pointer;
  display: flex;
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  outline: 1px solid transparent;
  &:focus {
    outline: 1px solid transparent;
  }
  &:active {
    outline: 1px solid transparent;
  }
  -webkit-tap-highlight-color: transparent;
`;
const BarElement = styled.div<BarElementProps>`
  width: 20px;
  user-select: none;
  height: 2px;
  transform: translate3d(0, 0, 0);
  transform-style: preserve-3d;
  background: ${props => (props.iconColor ? props.iconColor : `black`)};
  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
  &.center {
    &.clicked {
      transform: translateX(0px);
      opacity: 0;
    }
    transform: translateX(0);
    opacity: 1;
  }
  &.bottom {
    margin-top: 5px;
    transform: none;
    &.clicked {
      transform-origin: top left;
      transform: translateX(-1px) rotate(-45deg);
    }
  }
  &.top {
    transform: none;
    margin-bottom: 5px;
    &.clicked {
      transform-origin: top left;
      transform: rotate(45deg);
    }
  }
`;
