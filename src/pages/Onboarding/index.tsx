import React from 'react';
import { Text } from 'react-native';

import { Container, SignInButton } from './styles';

export function Onboarding(): JSX.Element {
  return (
    <Container>
      <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 20 }}>
        Controle seus treinos
      </Text>

      <SignInButton>
        <Text>Iniciar no app</Text>
      </SignInButton>
    </Container>
  );
}
