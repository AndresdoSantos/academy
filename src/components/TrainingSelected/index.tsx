import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { useTraining } from '../../hooks/useTraining';
import { TrainingDivider } from '../TrainingDivider';
import { TrainingRepetition } from '../TrainingRepetition';
import { TrainingWeight } from '../TrainingWeight';
import {
  BackgroundButtonStartTraining,
  TrainingStartedContainer,
  TrainingStartedHeaderWrapper,
  TrainingStartedTitle,
  ButtonStartTraining,
  TrainingStartedMinuteTitle,
} from './styles';

let countdownTimeout: NodeJS.Timeout;

export function TrainingSelected(): JSX.Element {
  const {
    actualInformationOfTheTrainingSelected: training,
    handleSelectTraining,
  } = useTraining();

  const [isTiming, setIsTiming] = useState(false);
  const [time, setTime] = useState(15);

  function resetCoutdown() {
    clearTimeout(countdownTimeout);
    setTime(15);
    setIsTiming(false);
  }

  useEffect((): void => {
    if (isTiming && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0) {
      resetCoutdown();
    }
  }, [time, resetCoutdown]);

  return (
    <>
      <TrainingStartedHeaderWrapper>
        <TouchableOpacity onPress={() => handleSelectTraining(undefined)}>
          <Ionicons name="chevron-back" size={20} />
        </TouchableOpacity>
        <Text style={{ color: '#07b9e9', marginBottom: 10 }}>Próximo</Text>
      </TrainingStartedHeaderWrapper>
      <TrainingStartedContainer>
        <TrainingStartedTitle>{training?.name}</TrainingStartedTitle>

        {isTiming ? (
          <TrainingStartedMinuteTitle>{time}</TrainingStartedMinuteTitle>
        ) : (
          <>
            <TrainingWeight weight={10} />

            <TrainingRepetition repetitions={15} />
            <TrainingDivider minute={1} />
            <TrainingRepetition repetitions={15} />
            <TrainingDivider minute={1} />
            <TrainingRepetition repetitions={15} />

            <BackgroundButtonStartTraining />
            <ButtonStartTraining onPress={() => setIsTiming(true)}>
              <Ionicons
                name="alarm-outline"
                size={20}
                color="#fff"
                style={{ marginRight: 10 }}
              />
              <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                Cronometrar
              </Text>
            </ButtonStartTraining>
          </>
        )}
      </TrainingStartedContainer>
    </>
  );
}
