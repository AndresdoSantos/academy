import React from 'react';
import { TouchableOpacity, Text, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container, HeaderTitle, HeaderWrapper } from './styles';

type TMenu = {
  onClose(): void;
};

export function Menu({ onClose }: TMenu): JSX.Element {
  const { height } = Dimensions.get('screen');

  return (
    <Container screenHeight={height}>
      <HeaderWrapper>
        <HeaderTitle>Menu</HeaderTitle>

        <TouchableOpacity onPress={onClose}>
          <Ionicons name="close" size={24} color="#fff" />
        </TouchableOpacity>
      </HeaderWrapper>
    </Container>
  );
}
