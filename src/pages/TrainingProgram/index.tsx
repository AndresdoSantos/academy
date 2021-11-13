import React, { useCallback, useState } from 'react';
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/core';

import { Menu } from '../../components/Menu';
import { Header } from '../../components/Header';
import { Days } from '../../components/Days';
import { TrainingOptions } from '../../components/TrainingOptions';

import { Container } from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export function TrainingProgram(): JSX.Element {
  const offset = useSharedValue(-20);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withSpring(offset.value * 10),
        },
      ],
    };
  });

  const { navigate } = useNavigation();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleChangeMenuState = useCallback(
    (): void => setMenuIsOpen(!menuIsOpen),
    [menuIsOpen]
  );

  return (
    <>
      <StatusBar translucent />

      <Modal
        isVisible={menuIsOpen}
        animationIn="slideInLeft"
        animationOut="slideOutRight"
      >
        <Menu onClose={handleChangeMenuState} />
      </Modal>

      <Container>
        <Header />

        <Days />

        <Text style={{ fontWeight: 'bold', fontSize: 25, marginBottom: 15 }}>
          Today
        </Text>

        <ScrollView>
          <View
            style={{
              height: 70,
              borderRadius: 5,
              backgroundColor: '#F9FAFB',
              padding: 15,
              position: 'relative',
              marginBottom: 15,
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
              Cadeira abdutora
            </Text>
            <Text>Músculos externos da perna</Text>

            <View
              style={{
                backgroundColor: '#E5E7EB',
                position: 'absolute',
                top: 15,
                right: 15,
                paddingHorizontal: 4,
                paddingVertical: 2,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 11, fontWeight: 'bold' }}>
                11 AM - 11:05 AM
              </Text>
            </View>
          </View>
          <View
            style={{
              height: 70,
              borderRadius: 5,
              backgroundColor: '#F9FAFB',
              padding: 15,
              position: 'relative',
            }}
          >
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
              Cadeira extensora
            </Text>
            <Text>Músculos externos da perna</Text>

            <View
              style={{
                backgroundColor: '#E5E7EB',
                position: 'absolute',
                top: 15,
                right: 15,
                paddingHorizontal: 4,
                paddingVertical: 2,
                borderRadius: 5,
              }}
            >
              <Text style={{ fontSize: 11, fontWeight: 'bold' }}>
                11 AM - 11:05 AM
              </Text>
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: '#5bd2bb',
            borderRadius: 10,
            height: 50,
          }}
        >
          <MaterialCommunityIcons
            name="clock-time-three"
            size={24}
            color="#fff"
            style={{ marginRight: 10 }}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>
            Começar treino
          </Text>
        </TouchableOpacity>
      </Container>
    </>
  );
}
