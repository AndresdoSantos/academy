import React, { useState } from 'react';
import {
  FlatList,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ptBrLocale from 'date-fns/locale/pt-BR';

import { useTraining } from '../../hooks/useTraining';
import {
  CardContainer,
  CardSubtitle,
  CardTitle,
  DotConclude,
  TimeText,
  TimeWrapper,
  TrainingProgramHeaderOptionDateWrapper,
  TrainingProgramHeaderOptions,
  TrainingProgramHeaderTitle,
  TrainingProgramHeaderWrapper,
} from './styles';
import { TrainingData } from '../../contexts/TrainingContext';
import { Ionicons } from '@expo/vector-icons';
import { format } from 'date-fns';

export function TrainingList(): JSX.Element {
  const { width } = Dimensions.get('screen');

  const { handleSelectTraining } = useTraining();

  const trainings: TrainingData[] = [
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

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={{ padding: 15 }}>
      <TrainingProgramHeaderWrapper isExpanded={isExpanded}>
        <TrainingProgramHeaderTitle>
          Programa de treino
        </TrainingProgramHeaderTitle>

        <TrainingProgramHeaderOptions>
          {isExpanded ? (
            <TouchableOpacity onPress={() => setIsExpanded(false)}>
              <Ionicons name="close" size={20} color="#c53030" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => setIsExpanded(true)}>
              <Ionicons name="expand-sharp" size={20} color="#6B7280" />
            </TouchableOpacity>
          )}

          <TrainingProgramHeaderOptionDateWrapper>
            <Text style={{ fontSize: 13 }}>
              {format(new Date(), `dd 'de' MMMM 'de' yyyy`, {
                locale: ptBrLocale,
              })}
            </Text>
          </TrainingProgramHeaderOptionDateWrapper>
        </TrainingProgramHeaderOptions>
      </TrainingProgramHeaderWrapper>

      {isExpanded && (
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: '#6B7280',
          }}
        />
      )}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
      >
        <>
          <View
            style={{
              flex: 1,
              width: isExpanded ? width : width - 30,
              backgroundColor: '#fff',
            }}
          >
            <FlatList
              showsVerticalScrollIndicator={false}
              data={trainings}
              keyExtractor={(item) => String(item.id)}
              renderItem={({ item }) => (
                <CardContainer onPress={() => handleSelectTraining(item)}>
                  <DotConclude isConcluded={item.isConcluded} />

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
        </>
      </ScrollView>
    </View>
  );
}
