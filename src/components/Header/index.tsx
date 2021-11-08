import React from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Container, WelcomeMessageWrapper } from './styles';

type THeader = {
  onOpen(): void;
};

export function Header({ onOpen }: THeader): JSX.Element {
  return (
    <Container>
      <WelcomeMessageWrapper>
        <Text style={{ fontSize: 15 }}>Bem-vindo de volta,</Text>
        <Text style={{ fontSize: 30 }}>Andres dos Santos</Text>
      </WelcomeMessageWrapper>

      <Ionicons
        name="menu-outline"
        size={24}
        color="black"
        style={{ marginTop: 10 }}
        onPress={onOpen}
      />
    </Container>
  );
}
