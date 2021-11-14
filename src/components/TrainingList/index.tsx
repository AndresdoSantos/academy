import React from 'react';
import { FlatList, Text, View, Dimensions, ScrollView } from 'react-native';

import { useTraining } from '../../hooks/useTraining';
import {
  CardContainer,
  CardSubtitle,
  CardTitle,
  TimeText,
  TimeWrapper,
} from './styles';

type TrainingListProps = {
  isExpanded: boolean;
};

export function TrainingList({ isExpanded }: TrainingListProps): JSX.Element {
  const { width } = Dimensions.get('screen');

  const { trainingList } = useTraining();

  const trainings = [
    {
      id: 0,
      name: 'Cadeira extensora',
      wereDoYouExercise: 'Músculos externos da perna',
      time: '11 AM - 11:05 AM',
      isConcluded: true,
    },
    {
      id: 1,
      name: 'Cadeira abdutora',
      wereDoYouExercise: 'Músculos externos da perna',
      time: '11:05 AM - 11:10 AM',
      isConcluded: true,
    },
    {
      id: 2,
      name: 'Leg 45°',
      wereDoYouExercise: 'Músculos externos da perna',
      time: '11:10 AM - 11:15 AM',
      isConcluded: false,
    },
    {
      id: 3,
      name: 'Voador frontal',
      wereDoYouExercise: 'Músculos externos da perna',
      time: '11:15 AM - 11:25 AM',
      isConcluded: false,
    },
    {
      id: 4,
      name: 'Supino reto com halter',
      wereDoYouExercise: 'Músculos externos da perna',
      time: '11:25 AM - 11:35 AM',
      isConcluded: false,
    },
    {
      id: 5,
      name: 'Tríceps pully',
      wereDoYouExercise: 'Músculos externos da perna',
      time: '11:35 AM - 11:45 AM',
      isConcluded: false,
    },
    {
      id: 6,
      name: 'Elevação lateral',
      wereDoYouExercise: 'Músculos externos da perna',
      time: '11:45 AM - 11:55 AM',
      isConcluded: false,
    },
    {
      id: 7,
      name: 'Pronada frontal',
      wereDoYouExercise: 'Músculos externos da perna',
      time: '12 PM - 12:10 PM',
      isConcluded: false,
    },
    {
      id: 8,
      name: 'Supino reto com halter',
      wereDoYouExercise: 'Músculos externos da perna',
      time: '11:25 AM - 11:35 AM',
      isConcluded: false,
    },
    {
      id: 9,
      name: 'Tríceps pully',
      wereDoYouExercise: 'Músculos externos da perna',
      time: '11:35 AM - 11:45 AM',
      isConcluded: false,
    },
    {
      id: 10,
      name: 'Elevação lateral',
      wereDoYouExercise: 'Músculos externos da perna',
      time: '11:45 AM - 11:55 AM',
      isConcluded: false,
    },
    {
      id: 11,
      name: 'Pronada frontal',
      wereDoYouExercise: 'Músculos externos da perna',
      time: '12 PM - 12:10 PM',
      isConcluded: false,
    },
  ];

  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      >
        <View
          style={{
            flex: 1,
            marginBottom: 50,
            width: isExpanded ? width : width - 30,
            backgroundColor: '#fff',
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={trainings}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <CardContainer>
                <View
                  style={{
                    height: 10,
                    width: 10,
                    borderWidth: 1,
                    marginRight: 15,
                    borderRadius: 10,
                    backgroundColor: item.isConcluded ? '#5bd2bb' : '#fff',
                  }}
                />

                <View style={{ flex: 1 }}>
                  <CardTitle>{item.name}</CardTitle>
                  <CardSubtitle>{item.wereDoYouExercise}</CardSubtitle>
                </View>

                <TimeWrapper>
                  <TimeText>{item.time}</TimeText>
                </TimeWrapper>
              </CardContainer>
            )}
          />
        </View>

        <View style={{ flex: 1, width: width, backgroundColor: '#fff' }}>
          <Text>Andres</Text>
        </View>
      </ScrollView>
    </>
  );
}
