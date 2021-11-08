import React, { useMemo, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, Text, View } from 'react-native';
import { pt } from 'date-fns/locale';

import { TrainingList } from '../TrainingList';
import {
  ButtonTrainingWrapper,
  Container,
  ButtonTrainingText,
  SelectTrainingButtonWrapper,
  SelectTrainingButtonText,
  BackButtonWrapper,
  TrainingSelectedTitleWrapper,
  TrainingSelectedTitleText,
  TrainingSelectedWrapper,
  TrainingSelectedHeaderWrapper,
} from './styles';
import { format } from 'date-fns';

type TTrainingOptions = 'A' | 'B';

type TrainingOptionsProps = {
  onAssembleTraining(): void;
};

export function TrainingOptions({
  onAssembleTraining,
}: TrainingOptionsProps): JSX.Element {
  const [actualTraining, setActualTraining] = useState<
    TTrainingOptions | undefined
  >(undefined);

  const trainingOptions = useMemo((): TTrainingOptions[] => ['A', 'B'], []);

  function selectTrainingOfTheDay(training: TTrainingOptions): void {
    setActualTraining(training);
  }

  return (
    <Container>
      {actualTraining === 'A' && (
        <TrainingSelectedWrapper>
          <TrainingSelectedHeaderWrapper>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <BackButtonWrapper onPress={() => setActualTraining(undefined)}>
                <Ionicons name="arrow-back-outline" size={12} />
              </BackButtonWrapper>
              <TrainingSelectedTitleWrapper>
                <TrainingSelectedTitleText>Treino A</TrainingSelectedTitleText>
              </TrainingSelectedTitleWrapper>
            </View>

            <Text>
              {format(new Date(), "dd 'de' MMMM 'de' yyyy", {
                locale: pt,
              })}
            </Text>
          </TrainingSelectedHeaderWrapper>

          <TrainingList type="A" onAssembleTraining={onAssembleTraining} />
        </TrainingSelectedWrapper>
      )}

      {actualTraining === 'B' && (
        <TrainingSelectedHeaderWrapper>
          <BackButtonWrapper onPress={() => setActualTraining(undefined)}>
            <Ionicons name="arrow-back-outline" size={12} />
          </BackButtonWrapper>
          <TrainingSelectedTitleWrapper>
            <TrainingSelectedTitleText>Treino B</TrainingSelectedTitleText>
          </TrainingSelectedTitleWrapper>

          <TrainingList type="B" onAssembleTraining={onAssembleTraining} />
        </TrainingSelectedHeaderWrapper>
      )}

      {typeof actualTraining === 'undefined' && (
        <FlatList
          data={trainingOptions}
          keyExtractor={(item) => item}
          horizontal
          contentContainerStyle={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flex: 1,
            height: 80,
          }}
          renderItem={({ item }) => (
            <ButtonTrainingWrapper
              isActive={actualTraining === item}
              onPress={() => selectTrainingOfTheDay(item)}
            >
              <ButtonTrainingText isActive={actualTraining === item}>
                Treino {item}
              </ButtonTrainingText>
            </ButtonTrainingWrapper>
          )}
        />
      )}
    </Container>
  );
}
