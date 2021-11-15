import React from 'react';
import { Text, View } from 'react-native';
import { TrainingWeightContainer, TrainingWeightTitle } from './styles';

type TrainingWeightProps = {
  weight: number;
};

export function TrainingWeight({ weight }: TrainingWeightProps): JSX.Element {
  return (
    <View style={{ marginBottom: 25 }}>
      <Text style={{ color: '#374151', fontSize: 12 }}>Peso</Text>
      <TrainingWeightContainer>
        <TrainingWeightTitle>{weight}</TrainingWeightTitle>
        <Text style={{ color: '#374151', marginBottom: 5 }}>kg</Text>
      </TrainingWeightContainer>
    </View>
  );
}
