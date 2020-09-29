import React from 'react';
import { AspectRatioBox } from 'components/shared/aspectratiobox';
import { Text, Flex, Icon } from '@chakra-ui/core';
import { Card } from '.';

export interface GeneralPlaceholderCardProps {
  text: string;
  icon: string;
  textColor?: string;
  bgColor?: string;
}
export const GeneralPlaceholderCard = ({
  text,
  icon,
  textColor = 'gray.500',
  bgColor = '#F7FAFC',
}: GeneralPlaceholderCardProps): JSX.Element => (
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
        <Icon name={icon} size="57px" color={textColor} />
        <Text maxWidth="70%" textAlign="center" marginTop="12px" fontWeight="bold" as="span" color={textColor}>
          {text}
        </Text>
      </Flex>
    </AspectRatioBox>
  </Card>
);
