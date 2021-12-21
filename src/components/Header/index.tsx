import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
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

  const offset = useSharedValue(300);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value, {
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
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Andres</Text>
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
          <TouchableOpacity
            style={{
              backgroundColor: '#10c805',
              height: 50,
              width: 50,
              borderRadius: 50,
              marginRight: 20,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#23b6fc',
              height: 50,
              width: 50,
              borderRadius: 50,
              marginRight: 20,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#5420ff',
              height: 50,
              width: 50,
              borderRadius: 50,
              marginRight: 20,
            }}
          />
        </AnimatedHeaderWrapper>

        <ProfileWrapper
          activeOpacity={0.8}
          onPress={() => {
            setIsAnimated(!isAnimated);

            offset.value = isAnimated ? 200 : 10;
          }}
        >
          <ImageProfile source={profileImg} />
        </ProfileWrapper>
      </Container>
    </>
  );
}
