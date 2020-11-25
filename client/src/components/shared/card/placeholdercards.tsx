import * as React from 'react';
import { AspectRatioBox } from 'components/shared/aspectratiobox';
import { Text, Flex, ComponentWithAs, IconProps } from '@chakra-ui/react';
import { Card } from '.';

export interface GeneralPlaceholderCardProps {
  text: string;
  icon?: ComponentWithAs<'svg', IconProps>;

  textColor?: string;
  bgColor?: string;
}
function withIconProps(Icon?: ComponentWithAs<'svg', IconProps>): React.Component {
  if (!Icon) return <></>;
  const WrappedComponent = (): JSX.Element => {
    return <Icon name="PlaceholderIcon" boxSize="57px" color="black" />;
  };
  return WrappedComponent;
}

export const GeneralPlaceholderCard = ({
  text,
  icon,
  textColor = 'gray.500',
  bgColor = '#F7FAFC',
}: GeneralPlaceholderCardProps): JSX.Element => {
  const WrappedIcon = withIconProps(icon);
  return (
    <Card
      borderRadius="4px"
      minWidth="200px"
      bg={bgColor}
      maxWidth="220px"
      padding="0px"
      boxShadow="none"
      justifyContent="flex-start"
    >
      <AspectRatioBox>
        <Flex height="100%" justifyContent="center" alignItems="center" flexDirection="column">
          <WrappedIcon />
          <Text maxWidth="70%" textAlign="center" marginTop="12px" fontWeight="bold" as="span" color={textColor}>
            {text}
          </Text>
        </Flex>
      </AspectRatioBox>
    </Card>
  );
};
