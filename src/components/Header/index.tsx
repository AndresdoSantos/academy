import React, { useState } from 'react';
import { Text } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import {
  AnimatedHeaderWrapper,
  ButtonProfile,
  ButtonProfileText,
  Container,
  ImageProfile,
  ProfileWrapper,
  WelcomeMessageWrapper,
} from './styles';

import profileImg from '../../../assets/people.jpeg';
import { useNavigation } from '@react-navigation/core';

export function Header(): JSX.Element {
  const { navigate } = useNavigation();

  const offset = useSharedValue(80);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 4, {
            damping: 500,
            velocity: 1,
          }),
        },
      ],
    };
  });

  const animatedProfileButton = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: withSpring((-offset.value + 10) * 4, {
            damping: 500,
            velocity: 1,
          }),
        },
      ],
    };
  });

  const [isAnimated, setIsAnimated] = useState(false);

  return (
    <>
      <Container>
        {!isAnimated && (
          <WelcomeMessageWrapper>
            <Text style={{ fontSize: 15 }}>Bem-vindo de volta,</Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
              Andres dos Santos
            </Text>
          </WelcomeMessageWrapper>
        )}

        {isAnimated && (
          <Animated.View style={animatedProfileButton}>
            <ButtonProfile onPress={() => navigate('Profile')}>
              <ButtonProfileText>Perfil</ButtonProfileText>
            </ButtonProfile>
          </Animated.View>
        )}

        <AnimatedHeaderWrapper as={Animated.View} style={animatedStyles}>
          <Text style={{ fontWeight: '700' }}>Você troca de treino em</Text>
          <Text>11 de novembro de 2021</Text>
        </AnimatedHeaderWrapper>

        <ProfileWrapper
          activeOpacity={0.8}
          onPress={() => {
            setIsAnimated(!isAnimated);

            offset.value = isAnimated ? 50 : 10;
          }}
        >
          <ImageProfile source={profileImg} />
        </ProfileWrapper>
      </Container>
    </>
  );
}
