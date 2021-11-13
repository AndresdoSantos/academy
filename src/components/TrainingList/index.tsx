import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';

import { useTraining } from '../../hooks/useTraining';
import {
  AssembleNewTrainingButton,
  FrequencyAndWeightWrapper,
  TrainingTypeContainer,
} from './styles';

type TrainingType = {
  type: 'A' | 'B';
  onAssembleTraining(): void;
};

export function TrainingList({
  type,
  onAssembleTraining,
}: TrainingType): JSX.Element {
  const { height } = Dimensions.get('screen');

  const { trainingList } = useTraining();

  return (
    <>
      {trainingList.length === 0 ? (
        <>
          {type === 'A' && (
            <TrainingTypeContainer>
              <Text>Você ainda não tem nenhum treino 😩</Text>
              <AssembleNewTrainingButton onPress={onAssembleTraining}>
                <Ionicons
                  name="barbell"
                  size={24}
                  color="#fff"
                  style={{ marginRight: 5 }}
                />
                <Text style={{ color: '#fff' }}>Montar treino</Text>
              </AssembleNewTrainingButton>
            </TrainingTypeContainer>
          )}

          {type === 'B' && (
            <TouchableOpacity>
              <Text>Montar treino</Text>
            </TouchableOpacity>
          )}
        </>
      ) : (
        <View style={{ flex: 1, width: '100%', marginTop: 40 }}>
          <FlatList
            data={trainingList || []}
            keyExtractor={(item) => item.name}
            contentContainerStyle={{
              flex: 1,
            }}
            renderItem={({ item }) => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Text style={{ fontWeight: '800' }}>{item.name}</Text>
                  <FrequencyAndWeightWrapper>
                    <Text>{item.repetitions}x</Text>
                  </FrequencyAndWeightWrapper>
                  <FrequencyAndWeightWrapper>
                    <Text>{item.weight} kg</Text>
                  </FrequencyAndWeightWrapper>
                </View>

                <TouchableOpacity>
                  <Text>Começar</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
    </>
  );
}
