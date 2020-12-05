import * as React from 'react';
import { AspectRatioBox } from 'components/shared/aspectratiobox';
import { Text, Flex } from '@chakra-ui/react';
import { Card } from '.';

export interface GeneralPlaceholderCardProps {
  text: string;
  icon?: JSX.Element;
  textColor?: string;
  bgColor?: string;
}

export const GeneralPlaceholderCard = ({
  text,
  icon,
  textColor = 'gray.500',
  bgColor = 'gray.100',
}: GeneralPlaceholderCardProps): JSX.Element => {
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
          {icon}
          <Text maxWidth="70%" textAlign="center" marginTop="12px" fontWeight="bold" as="span" color={textColor}>
            {text}
          </Text>
        </Flex>
      </AspectRatioBox>
    </Card>
  );
};
