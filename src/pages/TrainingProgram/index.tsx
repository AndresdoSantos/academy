import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/core';

import { Menu } from '../../components/Menu';
import { Header } from '../../components/Header';
import { Days } from '../../components/Days';
import { TrainingList } from '../../components/TrainingList';

import { Container } from './styles';
import { TrainingSelected } from '../../components/TrainingSelected';
import { useTraining } from '../../hooks/useTraining';

export function TrainingProgram(): JSX.Element {
  const { actualInformationOfTheTrainingSelected: training } = useTraining();

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
        {typeof training !== 'undefined' ? (
          <TrainingSelected />
        ) : (
          <>
            <Header />

            {/**<Days /> */}

            {/**<TrainingList /> */}
          </>
        )}
      </Container>
    </>
  );
}
