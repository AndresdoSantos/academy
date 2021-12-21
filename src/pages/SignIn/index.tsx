import React from 'react';
import { Text, TouchableOpacity, Dimensions, Image } from 'react-native';

import { Container } from './styles';
import logoGoogle from '../../../assets/logoGoogle.png';
import signinImage from '../../../assets/signin.jpg';

export function SignIn(): JSX.Element {
  const { width } = Dimensions.get('window');

  return (
    <Container>
      <Image source={signinImage} style={{ marginBottom: 80 }} />

      <Text style={{ fontSize: 20 }}>Welcome to</Text>
      <Text style={{ fontSize: 35, fontWeight: 'bold' }}>Academy club</Text>

      <Text style={{ fontSize: 16, color: '#6B7280', marginTop: 20 }}>
        Cuztomize your workout plan simply
      </Text>
      <Text style={{ fontSize: 16, color: '#6B7280' }}>from the app</Text>

      <TouchableOpacity
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          borderWidth: 1,
          height: 50,
          width: width - 100,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Image
          source={logoGoogle}
          style={{ width: 22, height: 22, marginRight: 20 }}
        />
        <Text style={{ fontWeight: 'bold' }}>Login with Gmail</Text>
      </TouchableOpacity>
    </Container>
  );
}
