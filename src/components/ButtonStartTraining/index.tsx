import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { Container, Title } from './styles';

type IButtonProps = TouchableOpacityProps;

export function ButtonStartTraining({ ...props }: IButtonProps): JSX.Element {
  return (
    <Container {...props}>
      <MaterialCommunityIcons
        name="clock-time-three"
        size={24}
        color="#fff"
        style={{ marginRight: 10 }}
      />
      <Title>start training</Title>
    </Container>
  );
}
