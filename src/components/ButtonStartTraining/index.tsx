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
        size={18}
        color="#fff"
        style={{ marginRight: 10 }}
      />
      <Title>começar treino</Title>
    </Container>
  );
}
