import React from 'react';
import { Text, View } from 'react-native';
import {
  TrainingRepetitionContainer,
  TrainingRepetitionNumberOfRepetitions,
} from './styles';

type TrainingRepetitionProps = {
  repetitions: number;
};

export function TrainingRepetition({
  repetitions,
}: TrainingRepetitionProps): JSX.Element {
  return (
    <View>
      <TrainingRepetitionContainer>
        <TrainingRepetitionNumberOfRepetitions>
          {repetitions}
        </TrainingRepetitionNumberOfRepetitions>
        <Text style={{ fontSize: 15, color: '#374151' }}>repetições</Text>
      </TrainingRepetitionContainer>
    </View>
  );
}
