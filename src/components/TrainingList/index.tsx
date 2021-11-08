import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity, View, Dimensions } from 'react-native';

type TrainingType = {
  type: 'A' | 'B';
  onAssembleTraining(): void;
};

export function TrainingList({
  type,
  onAssembleTraining,
}: TrainingType): JSX.Element {
  const { height } = Dimensions.get('screen');

  const haveTraining = false; // Pode ficar no localstorage

  return (
    <>
      {!haveTraining && (
        <>
          {type === 'A' && (
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                height: height,
                width: '100%',
              }}
            >
              <Text>Você ainda não tem nenhum treino 😩</Text>
              <TouchableOpacity
                onPress={onAssembleTraining}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'row',
                  height: 40,
                  width: 150,
                  backgroundColor: '#3B82F6',
                  borderRadius: 5,
                  marginTop: 20,
                }}
              >
                <Ionicons
                  name="barbell"
                  size={24}
                  color="#fff"
                  style={{ marginRight: 5 }}
                />
                <Text style={{ color: '#fff' }}>Montar treino</Text>
              </TouchableOpacity>
            </View>
          )}

          {type === 'B' && (
            <TouchableOpacity>
              <Text>Montar treino</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </>
  );
}
