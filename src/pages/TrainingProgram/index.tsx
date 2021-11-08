import React, { useCallback, useState } from 'react';
import Modal from 'react-native-modal';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/core';

import { Menu } from '../../components/Menu';
import { Header } from '../../components/Header';
import { Days } from '../../components/Days';
import { TrainingOptions } from '../../components/TrainingOptions';

import { Container } from './styles';

export function TrainingProgram(): JSX.Element {
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
        <Header onOpen={handleChangeMenuState} />

        <Days />

        <TrainingOptions
          onAssembleTraining={() => navigate('AssembleTraining', undefined)}
        />
      </Container>
    </>
  );
}
