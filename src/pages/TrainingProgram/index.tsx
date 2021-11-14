import React, { useCallback, useState } from 'react';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/core';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';
import usBrLocale from 'date-fns/locale/en-US';

import { Menu } from '../../components/Menu';
import { Header } from '../../components/Header';
import { Days } from '../../components/Days';

import { ButtonStartTraining } from '../../components/ButtonStartTraining';
import { TrainingList } from '../../components/TrainingList';

import {
  Container,
  TrainingProgramHeaderOptionDateWrapper,
  TrainingProgramHeaderOptions,
  TrainingProgramHeaderTitle,
  TrainingProgramHeaderWrapper,
} from './styles';

export function TrainingProgram(): JSX.Element {
  const { navigate } = useNavigation();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleChangeMenuState = useCallback(
    (): void => setMenuIsOpen(!menuIsOpen),
    [menuIsOpen]
  );

  const [isExpanded, setIsExpanded] = useState(false);

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
        {!isExpanded && (
          <View style={{ height: 220 }}>
            <Header />

            <Days />
          </View>
        )}

        <View
          style={{
            flex: 1,
            paddingHorizontal: isExpanded ? 0 : 15,
          }}
        >
          <TrainingProgramHeaderWrapper
            style={{ paddingHorizontal: isExpanded ? 15 : 0 }}
          >
            <TrainingProgramHeaderTitle>
              Training program
            </TrainingProgramHeaderTitle>

            <TrainingProgramHeaderOptions>
              {isExpanded ? (
                <TouchableOpacity onPress={() => setIsExpanded(false)}>
                  <Ionicons name="close" size={20} color="#c53030" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => setIsExpanded(true)}>
                  <Ionicons name="expand-sharp" size={20} color="#6B7280" />
                </TouchableOpacity>
              )}

              <TrainingProgramHeaderOptionDateWrapper>
                <Text style={{ fontSize: 13 }}>
                  {format(new Date(), `MMMM',' dd yyyy`, {
                    locale: usBrLocale,
                  })}
                </Text>
              </TrainingProgramHeaderOptionDateWrapper>
            </TrainingProgramHeaderOptions>
          </TrainingProgramHeaderWrapper>

          {isExpanded && (
            <View
              style={{ height: 1, width: '100%', backgroundColor: '#6B7280' }}
            />
          )}

          <TrainingList isExpanded={isExpanded} />
        </View>
        <ButtonStartTraining />
      </Container>
    </>
  );
}
