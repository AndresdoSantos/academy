import React from 'react';
import { Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import {
  TrainingDividerContent,
  TrainingDividerCotainer,
  TrainingDividerVerticalLine,
} from './styles';

type TrainingDividerProps = {
  minute: number;
};

export function TrainingDivider({ minute }: TrainingDividerProps): JSX.Element {
  return (
    <TrainingDividerCotainer>
      <TrainingDividerVerticalLine />
      <TrainingDividerContent>
        <Ionicons
          name="alarm-outline"
          size={20}
          color="#374151"
          style={{ marginRight: 10 }}
        />
        <Text style={{ color: '#374151' }}>{minute} minuto</Text>
      </TrainingDividerContent>
    </TrainingDividerCotainer>
  );
}
