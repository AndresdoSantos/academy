import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';

import {
  TrainingStartedContainer,
  TrainingStartedHeaderWrapper,
  TrainingStartedTitle,
} from './styles';
import { TrainingDivider } from '../../../components/TrainingDivider';
import { TrainingRepetition } from '../../../components/TrainingRepetition';
import { TrainingWeight } from '../../../components/TrainingWeight';

type TrainingStartedProps = {
  route: {
    params: { name: string };
  };
};

export function TrainingStarted({ route }: TrainingStartedProps): JSX.Element {
  const { goBack } = useNavigation();

  return (
    <TrainingStartedContainer>
      <TrainingStartedHeaderWrapper>
        <TouchableOpacity onPress={() => goBack()}>
          <Ionicons name="chevron-back" size={20} />
        </TouchableOpacity>
        <Text style={{ color: '#07b9e9', marginBottom: 10 }}>Próximo</Text>
      </TrainingStartedHeaderWrapper>

      <TrainingStartedTitle>{route.params.name}</TrainingStartedTitle>

      <TrainingWeight weight={10} />

      <TrainingRepetition repetitions={15} />
      <TrainingDivider minute={1} />
      <TrainingRepetition repetitions={15} />
      <TrainingDivider minute={1} />
      <TrainingRepetition repetitions={15} />
    </TrainingStartedContainer>
  );
}
