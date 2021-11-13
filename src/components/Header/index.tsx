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

export function Header(): JSX.Element {
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
            <Text style={{ fontSize: 15 }}>Welcome back,</Text>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
              Andres dos Santos
            </Text>
          </WelcomeMessageWrapper>
        )}

        {isAnimated && (
          <Animated.View style={animatedProfileButton}>
            <ButtonProfile>
              <ButtonProfileText>Perfil</ButtonProfileText>
            </ButtonProfile>
          </Animated.View>
        )}

        <AnimatedHeaderWrapper as={Animated.View} style={animatedStyles}>
          <Text style={{ fontWeight: '700' }}>Data de troca: </Text>
          <Text>Dia 11 de novembro de 2021</Text>
        </AnimatedHeaderWrapper>

        <ProfileWrapper
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
